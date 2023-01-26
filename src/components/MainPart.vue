<script>

import { toRaw } from 'vue';
import Button from './Button.vue';
import configList from './config-list.vue';
import configNote from './config-note.vue';

import axios from 'axios';

export default {
    props: {
        data: Object,
        path: String,
    },
    methods: {
        storeInit() {
            this.$store.commit("contentSet", this.data);
        },
        componentNamesToText(content){
            content.forEach(element => {
                if(typeof element.content === 'string'){
                element.component = "configNote"
                }
                if(typeof element.content === 'object'){
                element.component = "configList"
                this.componentNamesToText(element.content)
                }
            });
        },
        saveToJSON(){
            const payload = this.$store.state.content
            console.log(toRaw(payload))
            this.componentNamesToText(payload)
            const url = 'http://localhost:5000/' + this.path;
            const res = axios.post(url, payload)
        }
    },
    mounted() {
        console.log(this.path)
        console.log(this.data);
        console.log("main mouinted");
        this.storeInit();
    },
    components: { Button, Button }
}
</script>
<template>
    <div class="h-full px-8 py-4" id="main"><!---MAIN PART-->
        <ul>
            <li v-for="block in data" :key="block._uid">
                <component :is="block.component" :name="block.name" :content="block.content"></component>
            </li>
        </ul>
        <Button v-if="data.length > 0" label="Save" @onExec="saveToJSON"/>
    </div>

</template>
