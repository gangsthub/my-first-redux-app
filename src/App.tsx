import React, { PureComponent } from 'react';
import './App.css';
import footBallApi from './api';

class App extends PureComponent {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {r: {}};
  }


  async getResults() {
    const r = await footBallApi.get('/competitions/PD/standings')
    console.log({r});
  }

  componentDidMount() {
    this.getResults();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Standings
        </header>
        <main>
          asdf
        </main>
      </div>
    );
  }
}

export default App;
