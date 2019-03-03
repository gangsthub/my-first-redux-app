import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { StandingsStore } from './store/reducers';

import StandingsTable from './StandingsTable';

import './App.css';

class App extends Component<StandingsStore /* actually this is props (srry) */ > {
  constructor(props: StandingsStore) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Typography variant="headline" color="inherit">
            Standings
          </Typography>
        </header>
        <main>
          {
            this.props && (this.props.isFetching) ? <CircularProgress /> : <StandingsTable />
          }
        </main>
      </div>
    );
  }
}

function mapStateToProps(state: StandingsStore) {
  return { isFetching: state.isFetching, results: state.results };
}

export default connect(mapStateToProps)(App);
