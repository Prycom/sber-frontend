<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
import ButtonVue from './components/Button.vue';

import axios from 'axios';


const jsonExample = {
  user_login: 'string',
  nexus_login: 'string',
  tokens: {
    sigma: 'string',
    omega: 'string',
  }
}

const listExample = [];
listExample.push('user_login', 'nexus_login', { tokens : ['sigma', 'omega']});

function parseFields(){

}

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
        <div class="h-full px-4 py-4" id="main"><!---MAIN PART-->

        </div>
      </div>
    </div>


    <Footer />
  </div>

</template>

<style scoped>

</style>
