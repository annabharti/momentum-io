/* This file was modified to change tabs to Home and Create Launch. The title was also changed */

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/Title.vue'
</script>

<template>
  <header class="flex items-center justify-between p-4 min-h-screen">
    <div class="flex flex-col items-center lg:items-start">
      <Title msg="SpaceX Launches" />

      <nav class="mt-8 text-center lg:text-left">
        <RouterLink 
          to="/" 
          class="inline-block px-4 py-2 border-l first:border-0 border-gray-300 text-gray-700 hover:bg-gray-100"
          active-class="text-blue-500"
        >
          Home
        </RouterLink>
        <RouterLink 
          to="/create-launch" 
          class="inline-block px-4 py-2 border-l first:border-0 border-gray-300 text-gray-700 hover:bg-gray-100"
          active-class="text-blue-500"
        >
          Create Launch
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
