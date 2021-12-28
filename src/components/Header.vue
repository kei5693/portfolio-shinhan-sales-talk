<template>
  <div id="header">
    <div>
      <button type="button" @click="orangeLife()">오늘</button>
      <button type="button" @click="productToggle()">Salesgram</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    productToggle(){
      this.$emit('productToggle');
    },
    orangeLife(){
      window.open('https://today.orangelife.co.kr/om/36kKubCnj7', '_blank');
    }
  },
}
</script>