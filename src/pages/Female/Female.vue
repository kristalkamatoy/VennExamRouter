<template>
<div>
<BMIForm :arraytests="this.selectedRow"  @updateValue="callUpdate" gender="Female"/>
 <UpdateTable :arraytests="arrayTest" @updateForm="callUpdateForm" />

</div>
</template>
<style src='./style.css'></style>
<script src='./script.js'></script>
