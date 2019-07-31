<template>
  <v-sheet color="transparent" xs12 class="mx-2">
    <p>How many situps did you do in 1 minute?</p>

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
    >{{ situpsScore.passed ? `${value} is good for ${situpsScore.points} points!` : `${value} is less than the Air Force standard.`}}</p>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentResult } from '@/store/modules/assessment.module';
import { Action, Getter } from 'vuex-class';

@Component
export default class Situps extends Vue {
  private value: number = 0;
  @Action('assessments/updateSitupsScore') private update: any;
  @Getter('assessments/getSitupsMax') private max!: number;
  @Getter('assessments/getSitupsScore') private situpsScore!: ComponentResult;

  @Watch('value')
  private valueChanged(newValue: number) {
    this.update(newValue);
  }

  private mounted() {
    this.value = this.situpsScore.value;
  }

  private get riskColor() {
    return this.situpsScore.passed ? 'success' : 'error';
  }
}
</script>