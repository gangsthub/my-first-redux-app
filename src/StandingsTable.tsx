
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withStyles, StyleRulesCallback } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StandingsStore } from './store/reducers';
import { Standing } from './models/Standing';
import Logo from './Logo';

type Columns = 'position' |
  'teamLogo' |
  'teamName' |
  'clips' |
  'atHome' |
  'away';

type TableStructure = ({[key in Columns]: any})

const columns: Columns[] = [
  'position',
  'teamLogo',
  'teamName',
  'clips',
  'atHome',
  'away'
];

const rowFactory = ({
  position = 0,
  teamLogo = '',
  teamName = '',
  clips = {},
  atHome = {},
  away = {}
} = {}): TableStructure => ({
  position,
  teamLogo,
  teamName,
  clips,
  atHome,
  away
});

function StandingsTable(props: StandingsStore) {
  const { results } = props;
  console.log({results});
  let rows;
  if (results && results.standings) {
    rows = results.standings.reduce((acc: TableStructure, curr: Standing) => {
      return {
        ...acc,
        ...rowFactory({
          position: curr.table[0].position,
          teamLogo: curr.table[0].team.crestUrl,
          teamName: curr.table[0].team.name,
          clips: curr.table[0],
          atHome: curr.table[1],
          away: curr.table[2],
        })
      }
    }, {} as TableStructure)
  }
  return (
    <Paper className="root">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell>
              <div>Clips</div>
            </TableCell>
            <TableCell>
              <div>At Home</div>
            </TableCell>
            <TableCell>
              <div>Away</div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.clips.length && rows.clips.map((row: TableStructure) => (
            <TableRow key={row.position}>
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="left"><Logo img={row.teamLogo} /></TableCell>
              <TableCell align="left">{row.teamName}</TableCell>
              <TableCell>Clips</TableCell>
              <TableCell>At Home</TableCell>
              <TableCell>Away</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

function mapStateToProps(state: StandingsStore) {
  return { results: state.results };
}

const styles: StyleRulesCallback<'table'> = (_theme: Theme) => ({
  root: {
    width: '100%',
    marginTop: 0,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  }
});

export default connect(mapStateToProps)(withStyles(styles)(StandingsTable));
