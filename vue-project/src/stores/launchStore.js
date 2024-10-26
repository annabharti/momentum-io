import { defineStore } from 'pinia';

export const useLaunchStore = defineStore('launchStore', {
    state: () => ({
        allLaunches: [],
        loadedLaunches: [],
        itemsPerPage: 5,
        currentPage: 0,
    }),
    actions: {
        initializeData(data) {
            this.allLaunches = data;
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
            this.launches.push(launch);
        }
    },
    getters: {
        getLoadedLaunches: (state) => {
            return state.loadedLaunches
        },
        hasMoreData: (state) => {
            return (state.currentPage * state.itemsPerPage) < state.allLaunches.length;
        }
    }
})