<template>
  <v-container>
    <h1>This is a testing Page</h1>
    <span style="background-color: white; color: blueviolet">
      <v-icon :icon="mdiAccount" />
    </span>
    <span style="background-color: red; color: black">
      <v-icon :icon="mdiAccount" />
    </span>
    <v-row justify="space-between" class="text-center">
      <v-col>
        <v-btn :icon="mdiAccount" color="primary"> </v-btn>
      </v-col>

      <v-col>
        <v-btn :icon="mdiStar" color="secondary"></v-btn>
      </v-col>

      <v-col>
        <v-btn :icon="mdiCached" color="info"></v-btn>
      </v-col>

      <v-col>
        <v-btn :icon="mdiThumbUp" color="success"></v-btn>
      </v-col>
    </v-row>

    <v-row justify="space-between" class="text-center">
      <v-col>
        <v-btn icon color="primary">
          <v-icon :icon="mdiAccount" />
        </v-btn>
      </v-col>

      <v-col>
        <v-btn icon color="secondary">
          <v-icon :icon="mdiStar"></v-icon>
        </v-btn>
      </v-col>

      <v-col>
        <v-btn icon color="info">
          <v-icon :icon="mdiCached"></v-icon>
        </v-btn>
      </v-col>

      <v-col>
        <v-btn icon color="success">
          <v-icon :icon="mdiThumbUp"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-alert type="success">I'm a success alert.</v-alert>
    <!--
    <v-btn @click.stop="dialog = true" color="red lighten-2" dark>
      Click Me
    </v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Test Modal </v-card-title>

        <v-card-text> This is just some random shit i made. </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  -->
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false"
            >Close Dialog</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { mdiAccount, mdiStar, mdiCached, mdiThumbUp } from "@mdi/js";
import { ref } from "vue";
let dialog = ref(false);
</script>

<style>
</style>
