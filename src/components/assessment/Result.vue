<template>
  <v-sheet color="transparent" xs12 class="mx-2">
    <h1>I am a result screen</h1>
    {{score}} {{result}}
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { Result } from '@/store/modules/assessment.module.ts';

@Component
export default class Results extends Vue {
  @Action('assessments/calculateResult') private results: any;
  @Getter('assessments/getScore') private score!: number;
  @Getter('assessments/getResult') private result!: Result;

  private mounted() {
    this.results();
  }
}
</script>