<template>
  <v-sheet color="transparent" xs12 class="mx-2">
    <p>What was your 1.5 mile run time?</p>
    <v-layout row wrap class="mx-3">
      <v-flex xs12 sm6>
        <v-slider
          min="0"
          max="59"
          label="Mins"
          :color="riskColor"
          v-model="mm"
          step="1"
          class="mt-5"
          thumb-label="always"
          inverse-label
          ticks
        ></v-slider>
      </v-flex>
      <v-flex xs12 sm6>
        <v-slider
          min="0"
          max="59"
          label="Secs"
          :color="riskColor"
          v-model="ss"
          step="1"
          class="mt-5"
          thumb-label="always"
          inverse-label
          ticks
        ></v-slider>
      </v-flex>
    </v-layout>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentResult } from '@/store/modules/assessment.module';
import { Action, Getter } from 'vuex-class';

@Component
export default class Run extends Vue {
  private mm: number = 0;
  private ss: number = 0;

  @Action('assessments/updateRunScore') private update: any;
  @Getter('assessments/getRunScore') private runScore!: ComponentResult;

  @Watch('mm')
  private minutesChanged(newMinutes: any) {
    this.update({ mm: newMinutes, ss: this.ss });
  }

  @Watch('ss')
  private secondsChanged(newSeconds: any) {
    this.update({ mm: this.mm, ss: newSeconds });
  }

  private mounted() {
    this.mm = this.runScore.value.mm;
    this.ss = this.runScore.value.ss;
  }

  private get riskColor() {
    return this.runScore.risklevel === 'low'
      ? 'success'
      : this.runScore.risklevel === 'moderate'
      ? 'accent'
      : 'error';
  }
}
</script>