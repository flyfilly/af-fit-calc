<template>
  <v-stepper class="elevation-0 primary" dark v-model="portion" vertical>
    <v-stepper-step :complete="portion > 1" step="1">
      Waist Measurement ({{waistScore.points}} points)
      <small>Your current abdominal circumference</small>
    </v-stepper-step>

    <v-stepper-content color="transparent" step="1">
      <v-card color="transparent" class="ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
          <Waist></Waist>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="portion = 2" color="accent" text small>Let's do some Pushups!</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 2" step="2">Push-ups</v-stepper-step>
    <v-stepper-content step="2">
      <Pushups></Pushups>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 3" step="3">Situps</v-stepper-step>
    <v-stepper-content step="3">
      <Situps></Situps>
    </v-stepper-content>

    <v-stepper-step step="4">Run</v-stepper-step>
    <v-stepper-content step="4">
      <Run></Run>
    </v-stepper-content>

    <v-stepper-step step="5">Results</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="transparent">
        <v-card-actions>
          <v-btn color="accent" @click="portion = 1">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>
  </v-stepper>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ComponentResult } from '@/store/modules/assessment.module.ts';
import { Getter } from 'vuex-class';
import Waist from '@/components/assessment/Waist.vue';
import Pushups from '@/components/assessment/Pushups.vue';
import Situps from '@/components/assessment/Situps.vue';
import Run from '@/components/assessment/Run.vue';

@Component({
  components: {
    Waist,
    Pushups,
    Situps,
    Run,
  },
})
export default class Assessment extends Vue {
  @Getter('assessment/getWaistScore') private waistScore!: ComponentResult;
  private portion: number = 0;
}
</script>