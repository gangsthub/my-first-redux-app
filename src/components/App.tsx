import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { StandingsStore } from '../store/reducers';

import StandingsTable from './StandingsTable';
import MatchDay from './MatchDay';

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
          {
            this.props.results ? <MatchDay day={this.props.results.season.currentMatchday}/> : null
          }
        </header>
        <main>
          {
            (this.props && this.props.isFetching) ?
              <CircularProgress /> :
              this.props.results ? <StandingsTable standingsResults={this.props.results} /> : null
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
