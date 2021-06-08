<template>

    <table class="table">
      <thead center border="1" >
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
        <tr v-for="item in arraytests"  :key="item.id" >
          <td>{{ item.gender }}</td>
          <td>{{ item.height }}</td>
          <td>{{ item.weight }}</td>
          <td :style=" `color:${bmiColor[item.bmiKeyword]}`">{{ item.bmi }}</td>
          <td :style=" `color:${bmiColor[item.bmiKeyword]}`">{{ item.bmiKeyword }}</td>
         <td> <span clickable @click="updateForm(item)">{{ item.view }}</span> </td>
        </tr>
      </tbody>
    </table>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped>