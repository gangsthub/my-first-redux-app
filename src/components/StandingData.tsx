import React from 'react'
import { StandingTeamInTable } from '../models/Standing';

export type DataType = 'Header' | 'Row'

export interface StandingDataProps {
  type: DataType,
  data?: StandingTeamInTable
}

const sharedStyles = {
  display: 'flex',
  justifyContent: 'space-between',
}

const StandingsDataHeader = () => {
  return (
    <div style={sharedStyles}>
      <span title="Points">Pts</span>
      <span title="Played">Pld</span>
      <span title="Won">W</span>
      <span title="Draws">D</span>
      <span title="Lost">L</span>
      <span title="Goals For">GF</span>
      <span title="Goals Against">GA</span>
    </div>
  )
}

const StandingsDataBody = (props: StandingDataProps) => {
  if (props.data) {
    return (
      <div style={sharedStyles}>
        <span title="Points">{props.data.points}</span>
        <span title="Played">{props.data.playedGames}</span>
        <span title="Won">{props.data.won}</span>
        <span title="Draws">{props.data.draw}</span>
        <span title="Lost">{props.data.lost}</span>
        <span title="Goals For">{props.data.goalsFor}</span>
        <span title="Goals Against">{props.data.goalsAgainst}</span>
      </div>
    )
  }
  return <>'N/A'</>
}


const StandingData = (props: StandingDataProps) => {
  let componentToRender
  switch (props.type) {
    case 'Header':
      return (
        <StandingsDataHeader/>
        )
    case 'Row':
      return (
        <StandingsDataBody {...props} />
      )
  }
}

export default StandingData
