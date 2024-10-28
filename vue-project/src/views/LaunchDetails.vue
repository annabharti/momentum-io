<script>
import { useLaunchStore } from '../stores/launchStore';

export default {
    data() {
        return {
            name: ''
        };
    },
    created() {
        this.name = this.$route.params.name;
    },
    computed: {
        launchDetails() {
            const launchStore = useLaunchStore();
            launchStore.initializeStore();

            return launchStore.getLaunchByMissionName(this.name);
        }
    }
};
</script>

<template>
    <div class="min-h-screen lg:flex lg:items-right">
        <h1>{{ name }}</h1>
        <h3> Details </h3>
        <p> {{launchDetails.details ?? 'No Details'}} </p>
        <h3> Rocket </h3>
        <p> {{launchDetails.rocket.rocket_name}} </p>
        <h3> Launch Date </h3>
        <p> {{ 
            new Date(launchDetails.launch_date_utc).toLocaleDateString(
                'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
            ) 
        }} </p>
        <h3> Launch Year </h3>
        <p> {{launchDetails.launch_year}} </p>
        <h3> Links </h3>
        <a :href="launchDetails.links.article_link" target="_blank" rel="noopener noreferrer">
            {{ launchDetails.links.article_link }}
        </a>
    </div>
</template>