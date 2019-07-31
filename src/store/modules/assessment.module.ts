import { Gender } from '@/store/modules/profile.module.ts';

export interface Assessment {
  date: string;
  waistScore: ComponentResult | true;
  runScore: ComponentResult | true;
  pushupsScore: ComponentResult | true;
  situpsScore: ComponentResult | true;
  result: Result;
  score: number | null;
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

interface AgeRange {
  low: number;
  high: number;
}

export interface ComponentResult {
  points: number;
  passed: boolean;
  risklevel: string;
  value: any;
}

interface State {
  scoresheet: Scoresheet | null;
  assessment: Assessment | null;
  history: Assessment[];
}

export const agemap: AgeRange[] = [
  { low: 0, high: 29 },
  { low: 30, high: 39 },
  { low: 40, high: 49 },
  { low: 50, high: 59 },
  { low: 60, high: 999 },
];

const state: State = {
  scoresheet: null,
  assessment: {
    result: Result.failed,
    score: 0,
    date: new Date().toLocaleDateString(),
    waistScore: { points: 0, passed: false, value: 0, risklevel: '' },
    pushupsScore: { points: 0, passed: false, value: 0, risklevel: '' },
    situpsScore: { points: 0, passed: false, value: 0, risklevel: '' },
    runScore: {
      points: 0,
      passed: false,
      risklevel: '',
      value: {
        mm: 0,
        ss: 0,
      },
    },
  },
  history: [],
};

const getters = {
  getPushupsMax(state: State) {
    let max = 0;

    try {
      max = state.scoresheet.pushups[0].low;
    } catch (error) {
      max = 100;
    }
    return max;
  },

  getSitupsMax(state: State) {
    let max = 0;

    try {
      max = state.scoresheet.situps[0].low;
    } catch (error) {
      max = 100;
    }
    return max;
  },

  getScoresheet(state: State): Scoresheet | null {
    return state.scoresheet;
  },

  getWaistScore(state: State): ComponentResult | true {
    return state.assessment.waistScore;
  },

  getPushupsScore(state: State): ComponentResult | true {
    return state.assessment.pushupsScore;
  },

  getSitupsScore(state: State): ComponentResult | true {
    return state.assessment.situpsScore;
  },

  getRunScore(state: State): ComponentResult | true {
    return state.assessment.runScore;
  },

  getScore(state: State): number {
    return state.assessment.score;
  },

  getResult(state: State): Result {
    return state.assessment.result;
  },

  getHistory(state: State): Assessment[] {
    return state.history;
  },
};

const mutations = {
  setScoresheet(state: State, scoresheet: Scoresheet) {
    state.scoresheet = scoresheet;
  },

  setWaisteScore(state: State, waistScore: ComponentResult) {
    state.assessment.waistScore = waistScore;
  },

  setPushupsScore(state: State, pushupsScore: ComponentResult) {
    state.assessment.pushupsScore = pushupsScore;
  },

  setSitupsScore(state: State, situpsScore: ComponentResult) {
    state.assessment.situpsScore = situpsScore;
  },

  setRunScore(state: State, runScore: ComponentResult) {
    state.assessment.runScore = runScore;
  },

  setScore(state: State, score: number) {
    state.assessment.score = score;
  },

  setResult(state: State, result: boolean) {
    state.assessment.result = result ? Result.passed : Result.failed;
  },

  saveAssessment(state: State) {
    state.history.push(state.assessment);
  },

  resetAssessment(state: State) {
    state.assessment = {
      result: Result.failed,
      score: 0,
      date: new Date().toLocaleDateString(),
      waistScore: { points: 0, passed: false, value: 0, risklevel: '' },
      pushupsScore: { points: 0, passed: false, value: 0, risklevel: '' },
      situpsScore: { points: 0, passed: false, value: 0, risklevel: '' },
      runScore: {
        points: 0,
        passed: false,
        risklevel: '',
        value: {
          mm: 0,
          ss: 0,
        },
      },
    };
  },
};

const actions = {
  save({ commit }: any) {
    commit('saveAssessment');
    commit('resetAssessment');
  },

  async loadScoresheet({ commit }: any, { gender, age }: any) {
    const url: string = `https://playground-81531.firebaseio.com/${
      Gender[gender]
    }/${agemap.findIndex((i: any) => i.low <= age && i.high >= age)}.json`;

    const response = await fetch(url);
    const json = await response.json();
    json.waists = json.waists.filter((el: any) => el !== null);
    commit('setScoresheet', json);
  },

  updateWaistScore({ commit, state }: any, measurement: number | true) {
    const result = state.scoresheet.waists.find(
      (set: any) => set.waistlow <= measurement && set.waisthigh >= measurement,
    );
    result.value = measurement;
    commit('setWaisteScore', result);
  },

  updatePushupsScore({ commit, state }: any, count: number | true) {
    const result = state.scoresheet.pushups.find(
      (set: any) => set.low <= count && set.high >= count,
    );
    result.value = count;
    commit('setPushupsScore', result);
  },

  updateSitupsScore({ commit, state }: any, count: number | true) {
    const result = state.scoresheet.situps.find(
      (set: any) => set.low <= count && set.high >= count,
    );
    result.value = count;
    commit('setSitupsScore', result);
  },

  updateRunScore({ commit, state }: any, { mm, ss }: any) {
    const total = mm * 60 + ss;
    const result =
      state.scoresheet.runs.find(
        (set: any) => set.totallow <= total && set.totalhigh >= total,
      ) || state.scoresheet.runs[state.scoresheet.runs.length];

    result.value = {
      mm,
      ss,
    };
    commit('setRunScore', result);
  },

  calculateResult({ commit, state }: any) {
    const score =
      state.assessment.waistScore.points +
      state.assessment.pushupsScore.points +
      state.assessment.situpsScore.points +
      state.assessment.runScore.points;

    commit('setScore', score);
    commit('setResult', score < 70);
  },
};

export const assessments = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
