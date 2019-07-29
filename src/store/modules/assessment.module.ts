import { Gender } from '@/store/modules/profile.module.ts';

export const agemap: ageRange[] = [
  { low: 0, high: 29 },
  { low: 30, high: 39 },
  { low: 40, high: 49 },
  { low: 50, high: 59 },
  { low: 60, high: 999 },
];

const state: State = {
  scoresheet: null,
  assessment: null,
  assessments: [],
};

const getters = {
  getScoresheet(state: State): Scoresheet | null {
    return state.scoresheet;
  },
};

const mutations = {
  setScoresheet(state: State, scoresheet: Scoresheet) {
    state.scoresheet = scoresheet;
  },
};

const actions = {
  async loadScoresheet({ commit }: any, { gender, age }: any) {
    console.log(gender);
    const url: string = `https://playground-81531.firebaseio.com/${
      Gender[gender]
    }/${agemap.findIndex(i => i.low <= age && i.high >= age)}.json`;

    const response = await fetch(url);
    commit('setScoresheet', await response.json());
  },
};

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

export interface Scoresheet {
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

interface ageRange {
  low: number;
  high: number;
}

interface State {
  scoresheet: Scoresheet | null;
  assessment: Assessment | null;
  assessments: Assessment[];
}
