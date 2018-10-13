import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    chickens: [],
    loading: true
  };

  componentDidMount() {
    fetch("/api/chickens")
      .then(res => res.json())
      .then(chickens => {
        this.setState({ chickens, loading: false });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chickens</h1>
          {this.state.loading === false ? (
            this.state.chickens.map(chicken => (
              <div key={chicken._id}>
                {chicken.name} - {chicken.breed}
              </div>
            ))
          ) : (
            <div>loading</div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
