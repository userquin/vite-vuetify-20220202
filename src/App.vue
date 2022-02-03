<script setup lang="ts">
import CustomHeader from './components/CustomHeader.vue'
import CustomForm from './components/CustomForm.vue'
</script>
<template>
  <v-app>
    <CustomHeader />
    <v-main>
      <CustomForm />
    </v-main>
  </v-app>
</template>

<style scoped>
.v-main {
  padding: 1rem 0;
}
</style>
