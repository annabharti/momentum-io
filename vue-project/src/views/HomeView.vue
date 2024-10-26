<template>
  <div class="min-h-screen lg:flex lg:items-right">
    <h1> Launches Data </h1>
    <div v-for="(item, index) in loadedData" :key="index">
      <a href="#" class="block max-w-sm p-6 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-2 border-blue-500">

      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{item.mission_name}}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{item.details}}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{item.rocket.rocket_name}}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{item.launch_year}}</p>
      </a>

      <Card name={{item.mission_name}} details={{item.details}} rocket_name={{item.rocket_name}} launch_year={{item.launch_year}} />
    </div>

    <div ref="loadTrigger" style="height: 1px;"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

import { data } from '../database/data';
import { useLaunchStore } from '../stores/launchStore';
import Card from '../components/Card.vue'

export default {
  setup() {
    const loadTrigger = ref(null);
    const launchStore = useLaunchStore();

    onMounted(() => {
      launchStore.initializeData(data);
      launchStore.loadMore();

      // Intersection Observer for infinite scrolling
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && dataStore.hasMoreData) {
          dataStore.loadMore();
        }
      });
      
      if (loadTrigger.value) {
        observer.observe(loadTrigger.value);
      }
    });

    const loadMore = () => {
      launchStore.loadMore();
    }

    return {
      loadedData: launchStore.getLoadedLaunches,
      loadMore,
      hasMoreData: launchStore.hasMoreData,
      loadTrigger
    };
  }
};
</script>
