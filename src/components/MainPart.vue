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
        saveToJSON(){
            const payload = this.$store.state.content
            console.log(toRaw(payload))

            var formData = new FormData();
            formData.append("user_settings",  JSON.stringify(payload));
            const fullpath = 'http://127.0.0.1:5000/' + this.path

            console.log(fullpath)
            axios.post('http://127.0.0.1:5000/'+ this.path, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
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
