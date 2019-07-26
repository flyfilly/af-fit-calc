<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 class="text-center">
        <v-form ref="form" method="POST" v-model="valid" @submit.prevent="saveProfile">
          <v-card>
            <v-card-title>My Profile</v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field
                    label="My name is"
                    v-model="name"
                    class="mx-2"
                    :rules="[
                      v =>
                        isValid ||
                        'Gotta have a name!!'
                    ]"
                    autofocus
                    filled
                    light
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm8>
                  <v-text-field
                    label="I am a"
                    hint="Year old"
                    v-model="age"
                    class="mx-2"
                    type="number"
                    :rules="[
                      v =>
                        isValid ||
                        'How we supposed to know which scorecard?!'
                    ]"
                    persistent-hint
                    autofocus
                    filled
                    light
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm4>
                  <v-radio-group
                    v-model="gender"
                    :rules="[
                      v =>
                        isValid ||
                        'I know... Insensitive...'
                    ]"
                    class="mx-2"
                    row
                  >
                    <v-radio label="Male" value="0"></v-radio>
                    <v-radio label="Female" value="1"></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <template v-slot:activator="{on}">
                  <v-btn type="submit" v-on="on" icon>
                    <v-icon>fa fa-save</v-icon>
                  </v-btn>
                </template>
                <span>Save your profile</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar" :color="color" :timeout="3000" multi-line bottom left>
      {{ text }}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { Gender, ProfileInterface } from '@/store/modules/profile.module.ts';

@Component
export default class Profile extends Vue {
  @State('profile') name;
  @State('profile') age;
  @State('profile') gender;
  private valid: boolean = false;
  private snackbar: boolean = false;
  private color: string = 'transparent';
  private text: string = '';
  @Action('profile') private save: any;

  get isValid(): boolean {
    return !!(this.name || this.age || this.gender);
  }

  private saveProfile(): void {
    if (this.isValid) {
      this.save({
        name: this.name,
        age: this.age,
        gender: this.gender,
      });

      this.color = 'success';
      this.text = 'Profile saved successfully!';
      this.snackbar = true;
    }
  }
}
</script>
