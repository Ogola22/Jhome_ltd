<template>
    
    <property-component :properties="properties"></property-component>
    
</template>

<script>
import PropertyComponent from '../../components/Home-master/Property/PropertyComponent.vue'
import axios from 'axios';
export default {
    components: { PropertyComponent },

    data() {
        return {
            properties: []
        };
    },
    created() {
        this.getProperty();
    },
    methods: {
       async getProperty() {
           await axios.get('http://127.0.0.1:8000/api/properties').then(res => {
                this.properties = res.data;
                console.log(res.data)
            })
        }
    }
}
</script>
<style scoped>

</style>