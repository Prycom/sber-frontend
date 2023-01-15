<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
import ButtonVue from './components/Button.vue';

import configList from './components/config-list.vue';
import configNote from './components/config-note.vue';

import MainPart from './components/MainPart.vue';

import axios from 'axios';

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
    content: "",
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
      content: "",
    }
  ],
}
]


function userSettings(){
  const path = 'http://localhost:5000/userSettings';
  axios.get(path)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      // eslint-выключение следующей строки
      console.error(error);
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
        <MainPart :data="data"/>
      </div>
    </div>


    <Footer />
  </div>

</template>

<style scoped>

</style>
