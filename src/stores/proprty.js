import { defineStore } from "pinia";

export const usePropertyStore = defineStore("property", {
    state: () => ({ properties: [] }),
    getters: {
        getProperties() {
            axios.get('http://127.0.0.1:8000/api/properties').then(res => {
                this.properties = res.data;
                console.log(res.data);
                return this.properties;
            })

        }
    },
    actions: {
        
    },
})