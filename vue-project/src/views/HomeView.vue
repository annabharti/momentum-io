/* Co-pilot was used in this file for the general layout */

<script>
import { onMounted, ref, watch } from 'vue';

import { useLaunchStore } from '../stores/launchStore';
import Card from '../components/Card.vue';

function debounce(fn, delay) {
  let timeoutID;

  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        fn.apply(this, args);
    }, delay);
  };
}

const TIMEOUT = 500;

export default {
  components: {
    Card
  },
  setup() {
    const loadTrigger = ref(null);
    const searchQuery = ref('');
    const launchStore = useLaunchStore();
    const launches = ref([]);

    onMounted(() => {
        launchStore.initializeStore();
        launchStore.loadMore();

        launches.value = launchStore.getLoadedLaunches;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && launchStore.hasMoreData) {
            launchStore.loadMore();
            }
        });

        if (loadTrigger.value) {
            observer.observe(loadTrigger.value);
        }
    });

    watch(() => launchStore.getLoadedLaunches, (newLaunches) => {
        launches.value = newLaunches;
    });

    const filterLaunches = () => {
        launchStore.search(searchQuery.value);
    };

    const debouncedFilterLaunches = debounce(filterLaunches, TIMEOUT);

    watch(searchQuery, debouncedFilterLaunches);

    return {
        launches,
        loadMore: launchStore.loadMore,
        hasMoreData: launchStore.hasMoreData,
        loadTrigger,
        searchQuery,
        filterLaunches: debouncedFilterLaunches
    };
  }
};
</script>

<template>
  <div class="min-h-screen lg:flex lg:items-right">
    <div style="width: 100%;">
        <h1 style="display: inline-block;"> Launches Data </h1>
        <input type="text" placeholder="Search..." v-model="searchQuery" @input="filterLaunches" style="float: right;" class="ml-4 p-2 border border-gray-300 rounded" />
    </div>
    <div v-if="launches.length === 0" style="text-align: center; margin-top: 2rem;">
        No launches found
    </div>
    <div v-else>
        <div v-for="(item, index) in launches" :key="index" style="border: 1px solid; border-radius: 10px; margin-bottom: 1rem; padding-left: 10px;">
            <Card :name="item.mission_name" :details="item.details" :rocket_name="item.rocket.rocket_name" :launch_year="item.launch_year" />
        </div>
    </div>
    <div ref="loadTrigger" style="height: 1px;"></div>
  </div>
</template>
