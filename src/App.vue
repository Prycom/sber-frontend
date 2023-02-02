<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
import ButtonVue from './components/Button.vue';
import configList from './components/config-list.vue';
import configNote from './components/config-note.vue';
import MainPart from './components/MainPart.vue';
import axios from 'axios';
import { ref, toRaw } from 'vue';

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
  axios.get('http://127.0.0.1:5000/mlops')
  .then(function (response) {
    content = response.data
    path = 'mlops'
    convCompNames(content)
    forceRerender()
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {

  });

}

function putter(){
  axios.get('http://127.0.0.1:5000/pusher')
  .then(function (response) {
    content = response.data
    path = 'pusher'
    convCompNames(content)
    forceRerender()
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {

  });
}

function amrlirt(){
  axios.get('http://127.0.0.1:5000/amrlirt')
  .then(function (response) {
    content = response.data
    path = 'amrlirt'
    convCompNames(content)
    forceRerender()
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {

  });
}

function hasher(){
  axios.get('http://127.0.0.1:5000/hasher')
  .then(function (response) {
    content = response.data
    path = 'hasher'
    convCompNames(content)
    forceRerender()
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {

  });
}

</script>

<template>

  <div
    class="w-full min-h-screen bg-gradient-to-r from-[#02030C] to-[#02030C] text-gray-400 flex flex-col justify-between">
    <HeaderVue />
    <div class="flex min-h-full h-full">
      <aside class="w-1/4 min-h-full px-4 flex flex-col flex flex-col justify-center border-r-2 border-[#34353B]">
        <ButtonVue label="User settings" @onExec="userSettings"/>
        <ButtonVue label="MLops" @onExec="mlops"/>
        <ButtonVue label="Amrlirt" @onExec="amrlirt"/>
        <ButtonVue label="Hasher" @onExec="hasher" />
        <ButtonVue label="Перекладчик" @onExec="putter"/>
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
