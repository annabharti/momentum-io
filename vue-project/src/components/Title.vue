<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="font-medium text-[2.6rem] relative -top-2 text-center lg:text-left text-green-500">{{ msg }}</h1>
    <h3 class="text-[1.2rem] text-center lg:text-left">
    </h3>
  </div>
</template>
