
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

import { StandingsStore } from '../store/reducers';

import Logo from './Logo';
import StandingData from './StandingData';

import { Standing, StandingTeamInTable } from '../models/Standing';
import { ApiResponse } from '../models/ApiResponse';

type Columns = 'position' |
  'teamLogo' |
  'teamName' |
  'clips' |
  'atHome' |
  'away';

type TableStructure = ({[key in Columns]: any})

interface StandingsResultsProps {
  standingsResults: ApiResponse
}

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

const columnsWidth = {
  colSmall: {
    width: '5%',
  },
  colMedium: {
    width: '20%',
  },
}

function StandingsTable(props: StandingsResultsProps) {
  const { standingsResults } = props;

  let rows;
  if (standingsResults && standingsResults.standings) {
    const modelTable = standingsResults.standings[0].table;
    rows = modelTable.map((table: StandingTeamInTable, i) => {
      return {
        ...rowFactory({
          position: table.position,
          teamLogo: table.team.crestUrl,
          teamName: table.team.name,
          clips: standingsResults.standings[0].table[i],
          atHome: standingsResults.standings[1].table[i],
          away: standingsResults.standings[2].table[i],
        })
      }
    }, {} as StandingTeamInTable)
  }

  return (
    <Paper className="root" style={{ width: '100%' }}>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell style={columnsWidth.colSmall}>#</TableCell>
            <TableCell align="right" style={columnsWidth.colSmall}></TableCell>
            <TableCell align="right" style={columnsWidth.colMedium}></TableCell>
            <TableCell align="center">
              <div style={{ marginBottom: '.5em' }}>Clips</div>
              <StandingData type="Header" />
            </TableCell>
            <TableCell align="center">
              <div style={{ marginBottom: '.5em' }}>At Home</div>
              <StandingData type="Header" />
            </TableCell>
            <TableCell align="center">
              <div style={{ marginBottom: '.5em' }}>Away</div>
              <StandingData type="Header" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.length && rows.map((row: TableStructure) => (
            <TableRow key={row.position}>
              <TableCell component="th" scope="row" style={columnsWidth.colSmall}>
                {row.position}
              </TableCell>
              <TableCell align="left" style={columnsWidth.colSmall}>
                <Logo img={row.teamLogo} />
              </TableCell>
              <TableCell align="left" style={columnsWidth.colMedium}>{row.teamName}</TableCell>
              <TableCell align="center">
                <StandingData type="Row" data={row.clips} />
              </TableCell>
              <TableCell align="center">
                <StandingData type="Row" data={row.atHome} />
              </TableCell>
              <TableCell align="center">
              <StandingData type="Row" data={row.away} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
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

export default withStyles(styles)(StandingsTable);
