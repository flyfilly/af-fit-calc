<template>
  <v-sheet color="transparent" xs12 class="mx-2">
    <p>What is your current waist measurement?</p>

    <v-slider
      min="20"
      max="55"
      :color="riskColor"
      v-model="value"
      step=".5"
      class="mt-5"
      thumb-label
      inverse-label
      ticks
    ></v-slider>
    <p
      class="text-left"
    >{{value}} inches is good for {{waistScore.points}} points{{waistScore.points > 0 ? '!!' : ''}}</p>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentResult } from '@/store/modules/assessment.module';
import { Action, Getter } from 'vuex-class';

@Component
export default class Waist extends Vue {
  private value: number = 0;
  @Action('assessment/updateWaistScore') private update: any;
  @Getter('assessment/getWaistScore') private waistScore!: ComponentResult;

  @Watch('value')
  private valueChanged(newValue: number) {
    this.update(newValue);
  }

  private mounted() {
    this.value = this.waistScore.value;
  }

  private get riskColor() {
    return this.waistScore.risklevel === 'low'
      ? 'success'
      : this.waistScore.risklevel === 'moderate'
      ? 'accent'
      : 'error';
  }
}
</script>