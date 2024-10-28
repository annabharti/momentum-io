<script setup lang="ts">
  defineProps<{
    name: string
    details?: string
    rocket_name: string
    launch_year: string
  }>()
</script>

<template>
  <a :href="`/launch-details/${name}`" class="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800">
    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{name}}</h3>
    <h6 class="font-normal text-gray-700 dark:text-gray-400">Rocket Name</h6>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{rocket_name}}</p>
    <h6 class="font-normal text-gray-700 dark:text-gray-400">Launch Year</h6>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{launch_year}}</p>
    <h6 class="font-normal text-gray-700 dark:text-gray-400">Details</h6>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{details ?? 'No Details'}}</p>
  </a>
</template>
