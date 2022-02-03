<script setup lang="ts">
import { ref, computed } from 'vue'
const name1 = ref('')
const name2 = ref('')
const name3 = ref('')
const name4 = ref('')
const name5 = ref('')
const name6 = ref('')
const name7 = ref('')
const name8 = ref('')
const name9 = ref('')
const name10 = ref('')
const disabled = computed(() => {
  return !(name1.value && name1.value.trim().length > 0)
});
const sayHi = () => {
  name1.value && alert(`Hi ${name1.value}`);
};
const clickMe = () => {
  console.log('clicked')
}
</script>

<template>
  <section>
    <header>
      <h2>Form</h2>
    </header>
    <form @submit.prevent="sayHi">
      <v-text-field
          autofocus
          label="What's your name?"
          v-model="name1"
          append-inner-icon="i-mdi:lightning-bolt"
          @click:append-inner="clickMe"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name2"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name3"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name4"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name5"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name6"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name7"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name8"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name9"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-text-field
          label="What's your name?"
          v-model="name10"
          append-inner-icon="i-mdi:lightning-bolt"
      ></v-text-field>
      <v-btn
          type="submit"
          :disabled="disabled"
          variant="outlined"
          color="primary"
          text
      >
        Say hello
      </v-btn>
    </form>
  </section>
</template>

<style scoped>
section {
  padding: 1rem 1.5rem;
}
</style>
