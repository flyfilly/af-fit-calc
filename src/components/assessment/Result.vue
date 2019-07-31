<template>
  <v-sheet color="transparent" xs12 class="mx-2 text-center">
    <v-layout>
      <v-flex xs4 offset-xs4>
        <h1>{{score}}</h1>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4">
      <v-flex xs4 offset-xs4>
        <v-icon x-large>
          fas fa-thumbs-{{result === 1 ? 'up' : 'down'}}
        </v-icon>
      </v-flex>
    </v-layout>
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