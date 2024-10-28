/* Co-pilot was used in this file for the general layout */

<script>
import { ref } from 'vue';

import { useLaunchStore } from '../stores/launchStore';

export default {
  setup() {
    const launchStore = useLaunchStore();
    const missionName = ref('');
    const details = ref('');
    const rocketName = ref('');
    const launchYear = ref('');
    const submitted = ref(false);

    const createLaunch = () => {
        const launch = {
            mission_name: missionName.value,
            details: details.value,
            rocket: { rocket_name: rocketName.value },
            launch_year: launchYear.value,
        };

    launchStore.addLaunch(launch);
    submitted.value = true;
    };

    return {
        missionName,
        details,
        rocketName,
        launchYear,
        createLaunch,
        submitted,
    };
  },
};
</script>

<template>
  <div class="min-h-screen lg:flex lg:items-center">
    <h1>Use the form to create a new launch</h1>
    <form class="w-full max-w-sm" @submit.prevent="createLaunch">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="create-mission-name">
                Mission Name
            </label>
        </div>
        <div class="md:w-2/3">
            <input v-model="missionName" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="create-mission-name" type="text">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="create-mission-details">
                Details
            </label>
            </div>
        <div class="md:w-2/3">
            <input v-model="details" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="create-mission-details" type="text">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="create-rocket-name">
                Rocket Name
            </label>
        </div>
        <div class="md:w-2/3">
            <input v-model="rocketName" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="create-rocket-name" type="text">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="create-mission-year">
                Launch Year
            </label>
        </div>
        <div class="md:w-2/3">
            <input v-model="launchYear" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="create-mission-year" type="text">
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
            <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Create
            </button>
        </div>
      </div>
    </form>
    <div v-if="submitted" class="mt-4 text-green-500 font-bold">
        Submitted!
    </div>
  </div>
</template>
