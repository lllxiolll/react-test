import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyMapComponent from './components/MapContainer';

const URI = [ // Length issue
  `https://gist.githubusercontent.com`,
  `/nept/0f311e330a7881fff35d9a8aca129bb2`,
  `/raw/1227b03c6f85950095b302c4c0c5f5843a604094/cities.json`
].join("");

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null
    }
  }

  componentDidMount() {
    fetch(URI)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ data , isLoading: false }))
      .catch(error => this.setState({error, isLoading: false}));
  }

  renderData() {
    const {data, isLoading, error} = this.state;

      if (error) {
        return <p>{error.message}</p>;
      }
      
      if (isLoading){
        return <p>Loading ...</p>
      }
    return (
              data.map(
                data =>
                <div className="wrapper-bucket__item"  key={data.rank}>                 
                    <div className="wrapper-bucket__item__data-growth">
                      {data.growth_from_2000_to_2013}
                      <div>{data.rank}</div>
                      <div>Rank</div>
                    </div>
                    <div>
                        <div> {data.city} - {data.state}</div>
                        <div>Population : {data.population}</div>  
                        <div>Long : {data.longitude} Lat : {data.latitude} </div>
                    </div>
                </div>
             )
    );
  }


  render() {
    return (
      <div className="wrapper">
       {/* <header className="wrapper-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    */}
        <main className="wrapper-body">
          <div className="wrapper-bucket">
                 {this.renderData()}
          </div>
          <div className="wrapper-map">
            <MyMapComponent/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
