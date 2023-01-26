<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
import ButtonVue from './components/Button.vue';
import configList from './components/config-list.vue';
import configNote from './components/config-note.vue';
import MainPart from './components/MainPart.vue';
import axios from 'axios';
import { ref, toRaw } from 'vue';

var data = [{
    component: configNote,
    name: "nexus_login",
    content: "",
    _uid: "1"
},{
    component: configNote,
    name: "nexus_password",
    content: "",
    _uid: "2"
},{
    component: configNote,
    name: "ipa_login",
    content: "asdasd",
    _uid: "3"
},{
    component: configList,
    _uid: "4",
    name: "Test Header",
    content: [
      {
        component: configNote,
        name: "test",
        content: "",
        _uid: "5",
    },{
        component: configNote,
        name: "test2",
        content: "",
        _uid: "6",
    },
    {
        component: configList,
        _uid: "7",
        name: "Inline list test",
        content: [
          {
            component: configNote,
            _uid: "8",
            name: "One more inline",
            content: "",
          }
        ]
    },
    {
      component: configNote,
      _uid: "9",
      name: "New test",
      content: "asd",
    }
  ],
}
]

function convCompNames(content){
  content.forEach(element => {
    if(typeof element.content === 'string'){
      element.component = configNote
    }
    if(typeof element.content === 'object'){
      element.component = configList
      convCompNames(element.content)
    }
  });
}

const key = ref(0)

var content = []

const forceRerender = (newValue) => {
  console.log('content changed')
  key.value++
};

var path = ''

function userSettings(){
  axios.get('http://127.0.0.1:5000/user_settings')
  .then(function (response) {
    content = response.data
    path = 'user_settings'
    convCompNames(content)
    forceRerender()
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {

  });

}

function mlops(){
  console.log(listExample);
  let main = document.getElementById("main");
}

function putter(){
  console.log('putter');
  console.log(1)
}

</script>

<template>

  <div
    class="w-full min-h-screen bg-gradient-to-r from-[#02030C] to-[#02030C] text-gray-400 flex flex-col justify-between">
    <HeaderVue />
    <div class="flex min-h-full h-full">
      <aside class="w-1/4 min-h-full px-4 flex flex-col flex flex-col justify-center border-r-2 border-[#34353B]">
        <ButtonVue label="user settings" @onExec="userSettings"/>
        <ButtonVue label="mlops" @onExec="mlops"/>
        <ButtonVue label="putter" @onExec="putter"/>
      </aside>
      <div class="content-center w-full px-4">
        <MainPart :data="content" :key="key" :path="path"/>
      </div>
    </div>


    <Footer />
  </div>

</template>

<style scoped>

</style>
