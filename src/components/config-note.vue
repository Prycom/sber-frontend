<script>
export default{
    props : {
        name: String,
        content: String,
    },
    data(){
        return{
            note_content: '',
        }
    },
    name: "config-note",
    methods:{
        editInPayload(payload){
            payload.forEach(element => {
                if(typeof element.content === 'string'){
                    if(element.name === this.name){
                        element.content = this.note_content;
                        return payload
                    }
                }else if(typeof element.content === 'object'){
                    return this.editInPayload(element.content)
                }
            });
            return payload
        },
        onNoteChange(){
            console.log(this.note_content)
            const payload = this.$store.state.content
            this.$store.commit('contentSet', this.editInPayload(payload))
            console.log(this.$store.state)
        }
    },
    mounted(){
        this.note_content = this.content;
    }
}
</script>

<template>
<div class="flex flex-row justify-between px-4 py-1">
    <h3 class="px-4">{{ name }}</h3>
    <input type="text" class="bg-[#10111e]" v-model="note_content" @input="onNoteChange"/>
</div>
</template>