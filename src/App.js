import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const URI = 'https://gist.githubusercontent.com/nept/0f311e330a7881fff35d9a8aca129bb2/raw/1227b03c6f85950095b302c4c0c5f5843a604094/cities.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

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


  render() {
      const {data, isLoading, error} = this.state;

      if (error) {
        return <p>{error.message}</p>;
      }
      
      if (isLoading){
        return <p>Loading ...</p>
      }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Fetching Data 
          <button className="btn btn-danger">Fetch now</button>
          </h1>
        </header>
        <div className="loader">
          <div className="icon"></div>
        </div>
        <div >
          <ul>
            {
              data.map(
                data =>
                  <li key={data.rank}>
                    <a>{data.city}</a>
                    <a>{data.growth_from_2000_to_2013}</a>
                    <a>{data.population}</a>
                  </li>
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
