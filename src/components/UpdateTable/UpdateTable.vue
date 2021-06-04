<template>
    <table class="table">
      <thead center border="1">
        <tr>
          <th>Gender</th>
          <th>Height</th>
          <th>Weight</th>
          <th>BMI</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="arrayTest in arraytests"  :key="arrayTest.id" >
          <td>{{ arrayTest.gender }}</td>
          <td>{{ arrayTest.height }}</td>
          <td>{{ arrayTest.weight }}</td>
          <td :style=" `color:${bmiColor[arrayTest.bmiKeyword]}`">{{ arrayTest.bmi }}</td>
          <td :style=" `color:${bmiColor[arrayTest.bmiKeyword]}`">{{ arrayTest.bmiKeyword }}</td>
         <td> <span @click="updateForm(arrayTest)">{{ arrayTest.view }}</span> </td>
        </tr>
      </tbody>
    </table>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped>