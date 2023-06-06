<template>
    <agent-component :agent="agent"></agent-component>
</template>

<script>
import AgentComponent from '../../components/AgentComponent.vue';
import axios from 'axios';
export default {
    components: { AgentComponent },
    data() {
        return {
            agent: [],
        };
    },
    created() {
        this.getAgent();
    },
    methods: {
        getAgent() {
            axios.get('agents').then(res => {
                this.agent = res.data;
                console.log(res.data)
            })
        },
    }
}
</script>

<style></style>