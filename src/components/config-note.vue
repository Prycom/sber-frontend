<script>
export default{
    props : {
        name: String,
    },
    name: "config-note",
    data(){
        return {
            content: '',
        }
    },
    methods:{
        onNoteChange(){
            console.log(this.content )
        }
    }
}
</script>

<template>
<div class="flex flex-row justify-between px-4 py-1">
    <h3 class="px-4">{{ name }}</h3>
    <input type="text" class="bg-[#10111e]" v-model="content" @input="onNoteChange"/>
</div>
</template>