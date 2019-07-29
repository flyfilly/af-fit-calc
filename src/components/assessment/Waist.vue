<template>
  <v-sheet color="transparent" xs12 class="mx-2">
    <p>What is your current waist measurement?</p>
    <v-slider
      min="20"
      max="55"
      color="accent"
      v-model="value"
      step=".5"
      class="mt-5"
      thumb-label="always"
      inverse-label
      ticks
    ></v-slider>
    <v-chip pill>
      <v-avatar left color="red">{{waistScore.points}}</v-avatar>
      {{waistScore.risklevel}}
    </v-chip>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { ComponentResult } from '@/store/modules/assessment.module';
import { Action, Getter } from 'vuex-class';

@Component
export default class Waist extends Vue {
  private value: number = 30;
  @Action('assessment/updateWaistScore') private update: any;
  @Getter('assessment/getWaistScore') private waistScore!: ComponentResult;

  @Watch('value')
  private valueChanged(newValue: number) {
    this.update(newValue);
  }

  private mounted() {
    this.value = this.waistScore.value;
  }
}
</script>