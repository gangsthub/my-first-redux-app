export type StandingType = 'TOTAL' | 'HOME' | 'AWAY'

export interface Team {
  id: number,
  name: string,
  crestUrl: string,
}

export interface StandingTeamInTable {
    team: Team,
    position: number,
    playedGames: number,
    won: number,
    draw: number,
    lost: number,
    points: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number,
}

export interface Standing {
    stage: string,
    type: StandingType,
    group: null,
    table: StandingTeamInTable[]
}
