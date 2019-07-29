<template>
  <v-stepper class="elevation-0 primary" dark v-model="portion" vertical>
    <v-stepper-step :complete="portion > 1" step="1">
      Waist Measurement {{waistScore.points ? `(${waistScore.points} points)` : ''}}
      <small>Your current abdominal circumference</small>
    </v-stepper-step>

    <v-stepper-content color="transparent" step="1">
      <v-card color="transparent" class="ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
          <Waist></Waist>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="portion = 2" color="accent" text x-small>Let's do some Pushups!</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 2" step="2">
      Push-ups
      {{pushupsScore.points ? `(${pushupsScore.points} points)` : ''}}
    </v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="transparent" class="ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
          <Pushups></Pushups>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="portion--" icon x-small>
            <v-icon x-small>fas fa-undo</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="portion++" color="accent" text x-small>Let's do some Situps!</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 3" step="3">
      Situps
      {{situpsScore.points ? `(${situpsScore.points} points)` : ''}}
    </v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="transparent" class="ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
          <Situps></Situps>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="portion--" icon x-small>
            <v-icon x-small>fas fa-undo</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="portion++" color="accent" text x-small>Time to run!</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 4" step="4">
      Run
      {{runScore.points ? `(${runScore.points} points)` : ''}}
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="transparent" class="ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
          <Run></Run>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="portion--" icon x-small>
            <v-icon x-small>fas fa-undo</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="portion++" color="accent" text x-small>How'd I do?</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step step="5">Results</v-stepper-step>
    <v-stepper-content step="5">
      <v-card color="transparent" class="ma-0 pa-0">
        <v-card-text class="ma-0 pa-0">
          <Results></Results>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="accent" text x-small>All done!</v-btn>
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
import Results from '@/components/assessment/Result.vue';

@Component({
  components: {
    Waist,
    Pushups,
    Situps,
    Run,
    Results,
  },
})
export default class Assessment extends Vue {
  @Getter('assessments/getWaistScore') private waistScore!: ComponentResult;
  @Getter('assessments/getPushupsScore') private pushupsScore!: ComponentResult;
  @Getter('assessments/getSitupsScore') private situpsScore!: ComponentResult;
  @Getter('assessments/getRunScore') private runScore!: ComponentResult;
  private portion: number = 0;
}
</script>