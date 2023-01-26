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
        },
        findInStore(){
            //TODO написать поиск нужной ноды по параметру name
        },
        updateInStore(){
            //TODO написать функцию для модификации контента в сторе

            // сначала ищем нужную ноду по имени, потом
        }
    },
    mounted(){//хук жизненного цикла - после монтирования компонента
        //TODO здесь нужно вытянуть значение из Vuex стора в content в дата

        // ищем нужную ноду в store и получаем значение из content
    }
}
</script>

<template>
<div class="flex flex-row justify-between px-4 py-1">
    <h3 class="px-4">{{ name }}</h3>
    <input type="text" class="bg-[#10111e]" v-model="content" @input="onNoteChange"/>
</div>
</template>