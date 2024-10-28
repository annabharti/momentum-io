/* Co-pilot was used in this file for the initial general layout of state, actions, getters */
/* I added the states, and functions needed */

import { defineStore } from 'pinia';

import { launchData } from '../database/data';

export const useLaunchStore = defineStore('launchStore', {
    state: () => ({
        allLaunches: [],
        loadedLaunches: [],
        itemsPerPage: 5,
        currentPage: 0,
    }),
    actions: {
        initializeStore() {
            localStorage.clear();
            localStorage.setItem('launchData', JSON.stringify(launchData));

            this.setInitialData();
        },
        setInitialData() {
            this.allLaunches = JSON.parse(localStorage.getItem('launchData')).data.launches;
            this.loadedLaunches = this.allLaunches.slice(0, this.itemsPerPage);
            this.currentPage = 0;
        },
        loadMore() {
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            const newItems = this.allLaunches.slice(start, end);

            if (newItems.length) {
                this.loadedLaunches.push(...newItems);
                this.currentPage++;
            }
        },
        addLaunch(launch) {
            const updatedData = launchData.data.launches.push(launch);
            localStorage.setItem('launchData', JSON.stringify(updatedData));
        },
        search(query) {
            const querySearch = query.toLowerCase();
            const storedData = JSON.parse(localStorage.getItem('launchData'));

            if (storedData) {
                const filteredLaunches = storedData.data.launches.filter(launch => 
                    (launch.mission_name && launch.mission_name.toLowerCase().includes(querySearch)) ||
                    (launch.rocket && launch.rocket.rocket_name && launch.rocket.rocket_name.toLowerCase().includes(querySearch)) ||
                    launch.launch_year.toString().includes(querySearch)
                );
                this.allLaunches = filteredLaunches;
                this.loadedLaunches = filteredLaunches.slice(0, this.itemsPerPage);
                this.currentPage = 0;
            }
        }
    },
    getters: {
        getLoadedLaunches: (state) => state.loadedLaunches,
        hasMoreData: (state) => (state.currentPage * state.itemsPerPage) < state.allLaunches.length,
        getLaunchByMissionName: (state) => (mission_name) => state.allLaunches.find(launch => launch.mission_name === mission_name),
    }
});
