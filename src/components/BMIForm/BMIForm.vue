<template>
    <div class="row">
  <div class="column">
  
    <form>

    <h3 class="field">BMI Calculator</h3>
   
    <div class="field">   

    <!-- Height -->
    <div class="row">
    <div class="column"><label>Height: </label> </div><br/>
        <div class="column"> 
        <input v-model.number="cm" type="number" aria-label="in cm"/>
        <label> in cm</label> <br/> 
      </div>
      <div class="column"> 
       <input v-model.number="inch" type="number"/>
        <label> in inches </label> 
    </div>
      </div>
    <!-- end Height  -->
    <!-- Weight -->
    <div class="row">
    <div class="column"><label>Weight: </label> </div><br/>
    <div class="column"> 
       <input v-model="kg" type="number"/>
        <label> in kg </label> 
    </div>
        <div class="column"> 
        <input v-model="lbs" type="number"/>
        <label> in lbs</label> <br/> 
      </div>
      </div>
    <!-- end Weight  -->

        
        
    </div>
    <div class="field">

      <div v-if="this.localbmi > 0">
        <h4>Your BMI is </h4>
        <label :style=" `color:${bmiColor[bmi]}`">{{ this.localbmi }} ({{ this.bmi }})</label>
    </div>
    </div>
        <div class="field">
        <button @click="submit">Save</button>
         <button @click="clear">Clear</button>
    </div>
  </form>
  </div>
  <div class="column">
 <h3 class="field">History</h3>
      <!-- <router-view :arraytests="arrayTest" :bmiColor="bmiColor"  @updateValue="callUpdate"/> -->

  </div>
</div>
</template>
<script src='./script.js'>

</script>
<style src="./style.css" scoped>

</style>