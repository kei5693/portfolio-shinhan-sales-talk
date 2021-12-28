<template>
  <div id="mainPopup">
    <!--
      inner : 이미지만 출력
      inner + textType : 텍스트만 출력
      inner + mixType : 이미지 + 텍스트 출력
    -->
    <div class="inner mixType">
      <div class="visual">
        <img src="~@/assets/images/img_main_popup.png" alt="">
        <!-- 텍스트가 있을 경우 사용 -->
        <div class="text">
<pre>Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트
Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트
Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트
Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트
Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트
Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트
Text Text Text
Text Text Text Text
Text 팝업텍스트 팝업텍스트
팝업텍스트 팝업텍스트</pre>
        </div>
        <!-- //텍스트가 있을 경우 사용 -->
      </div>
      <div class="bottom">
        <button type="button" @click="closeToday()">하루동안 보지 않기</button>
        <button type="button" @click="closeMainPopup()">닫기</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeToday(){
      this.$emit('closeToday')
    },
    closeMainPopup(){
      this.$emit('closeMainPopup')
    }
  },
}
</script>