<template>
  <v-container>
    <v-layout v-if="0 < history.length" row wrap>
      <v-flex xs12 sm4>
        <v-card class="ma-4" v-for="(assessment, index) in history" :key="index">
          <v-card-title>{{assessment.date}}</v-card-title>
          <v-card-text>
            <v-layout row>
              <v-flex xs4 offset-xs4>
                <h1 class="text-center pa-4">{{assessment.score}}</h1>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-simple-table style="width:100%;" dense>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Result</th>
                    <th class="right-text">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Waist</td>
                    <td>{{assessment.waistScore.value}}</td>
                    <td class="right-text">{{assessment.waistScore.points}}</td>
                  </tr>
                  <tr>
                    <td>Pushups</td>
                    <td>{{assessment.pushupsScore.value}}</td>
                    <td class="right-text">{{assessment.pushupsScore.points}}</td>
                  </tr>
                  <tr>
                    <td>Situps</td>
                    <td>{{assessment.situpsScore.value}}</td>
                    <td class="right-text">{{assessment.situpsScore.points}}</td>
                  </tr>
                  <tr>
                    <td>Run</td>
                    <td>{{assessment.runScore.value.mm}}:{{assessment.runScore.value.ss}}</td>
                    <td class="right-text">{{assessment.runScore.points}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else class="center-text">
      <h1 style="text-align:center;" class="center-text">You do not have any assessments to view</h1>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Assessment } from '@/store/modules/assessment.module';
import { Getter } from 'vuex-class';

@Component
export default class Home extends Vue {
  @Getter('assessments/getHistory') private history!: Assessment[];
}
</script>
