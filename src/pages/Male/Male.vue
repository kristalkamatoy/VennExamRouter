<template>
  <div>
    <div id="mySidenav">
      <router-link id="Dashboard" tag="span" style="color: Black;" to="/">Dashboard</router-link> 
      <span id="Clear" @click="clearData">Clear</span>
    </div>
    <BMIForm @updateValue="callUpdate" gender="Male" ref="bmiForm" />
    <UpdateTable
      v-if="arrayTest.length > 0"
      :arraytests="arrayTest"
      @updateForm="callUpdateForm"
    />
    <span v-else>No Data Available.</span>
  </div>
</template>
<style src="./style.css"></style>
<script src="./script.js"></script>
