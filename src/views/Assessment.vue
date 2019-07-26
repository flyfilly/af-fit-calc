<template>
  <v-stepper class="elevation-0 primary" dark v-model="portion" vertical>
    <v-stepper-step :complete="portion > 1" step="1">
      Select an app
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="transparent">
        <v-card-actions>
          <v-btn color="accent" @click="portion = 2">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 2" step="2">Configure analytics for this app</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="transparent">
        <v-card-actions>
          <v-btn color="accent" @click="portion = 3">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="portion > 3" step="3">Select an ad format and name ad unit</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="transparent">
        <v-card-actions>
          <v-btn color="accent" @click="portion = 4">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
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

@Component
export default class Assessment extends Vue {
  private portion: number = 0;
}
</script>