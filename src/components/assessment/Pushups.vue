<template>
  <v-sheet color="transparent" xs12 class="mx-2">
    <p>How many pushups did you do in 1 minute?</p>

    <v-slider
      min="0"
      :max="max"
      :color="riskColor"
      v-model="value"
      step="1"
      class="mt-5"
      thumb-label
      inverse-label
      ticks
    ></v-slider>
    <p
      class="text-left"
    >{{ pushupsScore.passed ? `${value} is good for ${pushupsScore.points} points!` : `${value} is less than the Air Force standard.`}}</p>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentResult } from '@/store/modules/assessment.module';
import { Action, Getter } from 'vuex-class';

@Component
export default class Pushups extends Vue {
  private value: number = 0;
  @Action('assessments/updatePushupsScore') private update: any;
  @Getter('assessments/getPushupsMax') private max!: number;
  @Getter('assessments/getPushupsScore') private pushupsScore!: ComponentResult;

  @Watch('value')
  private valueChanged(newValue: number) {
    this.update(newValue);
  }

  private mounted() {
    this.value = this.pushupsScore.value;
  }

  private get riskColor() {
    return this.pushupsScore.passed ? 'success' : 'error';
  }
}
</script>