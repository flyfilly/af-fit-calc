const state: State = {
  scorecard: null,
  assessment: null,
  assessments: [],
};

const getters = {};

const mutations = {};

const actions = {};

export const assessment = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export interface Assessment {
  date: string;
  waistScore: number | true;
  runScore: number | true;
  pushupScore: number | true;
  situpScore: number | true;
  result: Result;
}

export interface Scorecard {
  agehigh: number;
  agelow: number;
  gender: string;
  pushups: Strength[];
  situps: Strength[];
  waists: Appearance[];
  runs: Cardio[];
}

export interface Cardio {
  minslow: number;
  minshigh: number;
  secshigh: number;
  secslow: number;
  totalhigh: number;
  totallow: number;
  risklevel: RiskLevel;
  pass: boolean;
  points: number;
}

export interface Appearance {
  waisthigh: number;
  waistlow: number;
  risklevel: RiskLevel;
  passed: boolean;
  points: number;
}

export interface Strength {
  high: number;
  low: number;
  passed: boolean;
  points: number;
}

export enum RiskLevel {
  low,
  moderate,
  high,
}

export enum Result {
  passed,
  failed,
}

interface State {
  scorecard: Scorecard | null;
  assessment: Assessment | null;
  assessments: Assessment[];
}
