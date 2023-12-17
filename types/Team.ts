export interface ITeam {
    conferenceAbbrev: string;
    conferenceHomeSequence: number;
    conferenceL10Sequence: number;
    conferenceName: string;
    conferenceRoadSequence: number;
    conferenceSequence: number;
    date: string;
    divisionAbbrev: string;
    divisionHomeSequence: number;
    divisionL10Sequence: number;
    divisionName: string;
    divisionRoadSequence: number;
    divisionSequence: number;
    gameTypeId: number;
    gamesPlayed: number;
    goalDifferential: number;
    goalDifferentialPctg: number;
    goalAgainst: number;
    goalFor: number;
    goalsForPctg: number;
    homeGamesPlayed: number;
    homeGoalDifferential: number;
    homeGoalsAgainst: number;
    homeGoalsFor: number;
    homeLosses: number;
    homeOtLosses: number;
    homePoints: number;
    homeRegulationPlusOtWins: number;
    homeRegulationWins: number;
    homeTies: number;
    homeWins: number;
    l10GamesPlayed: number;
    l10GoalDifferential: number;
    l10GoalsAgainst: number;
    l10GoalsFor: number;
    l10Losses: number;
    l10OtLosses: number;
    l10Points: number;
    l10RegulationPlusOtWins: number;
    l10RegulationWins: number;
    l10Ties: number;
    l10Wins: number;
    leagueHomeSequence: number;
    leagueL10Sequence: number;
    leagueRoadSequence: number;
    leagueSequence: number;
    losses: number;
    otLosses: number;
    placeName: {
        default: string;
    };
    pointPctg: number;
    points: number;
    regulationPlusOtWinPctg: number;
    regulationPlusOtWins: number;
    regulationWinPctg: number;
    regulationWins: number;
    roadGamesPlayed: number;
    roadGoalDifferential: number;
    roadGoalsAgainst: number;
    roadGoalsFor: number;
    roadLosses: number;
    roadOtLosses: number;
    roadPoints: number;
    roadRegulationPlusOtWins: number;
    roadRegulationWins: number;
    roadTies: number;
    roadWins: number;
    seasonId: number;
    shootoutLosses: number;
    shootoutWins: number;
    streakCode: string;
    streakCount: number;
    teamName: {
        default: string;
        fr: string;
    };
    teamCommonName: {
        default: string;
    };
    teamAbbrev: {
        default: string;
    };
    teamLogo: string;
    ties: number;
    waiversSequence: number;
    wildcardSequence: number;
    winPctg: number;
    wins: number;
}

export interface Team {
  abbrevieation: string;
  active: boolean;
  conference: Conference;
  division: Division;
  firstYearOfPlay: string;
  franchise: Franchise;
  franchiseId: number;
  id: number;
  link: string;
  locationName: string;
  name: string;
  officialSiteUrl: string;
  roster: TeamRoster;
  shortName: string;
  teamName: string;
  venue: Venue;
}

interface Conference {
    id: number;
    link: string;
    name: string;
}

interface Division {
    abbreviation: string;
    id: number;
    link: string;
    name: string;
    nameShort: string;
}

interface Franchise {
    franchiseId: string;
    link: string;
    teamName: string;
}

export interface Person {
    fullName: string;
    id: number;
    link: string;
}

export interface Position {
    abbreviation: string;
    code: string;
    name: string;
    type: string;
}

export interface Roster {
    jerseyNumber: string;
    person: Person;
    position: Position;
}

interface TeamRoster {
    link: string;
    roster: Roster[];
}

interface TimeZone {
    id: string;
    offset: number;
    tz: string;
}

interface Venue {
    city: string;
    id: number;
    link: string;
    name: string;
    timeZone: TimeZone; 
}
