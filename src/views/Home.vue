<template>
  <div id="contentBox">
    <Header @productToggle="productToggle()" />

    <div id="content" ref="content" @click="fnMainToggle()">
      <div class="visual"
        :class="{'on' : visual}"
      >
        <div>
          <img class="img01" src="~@/assets/images/img_home_tit01.png" alt="">
          <img class="img02" src="~@/assets/images/img_home_tit02.png" alt="">
          <img class="img03" src="~@/assets/images/img_home_tit03.png" alt="">
          <img class="img04" src="~@/assets/images/img_home_tit04.png" alt="">
          <div>
            <img class="img0501" src="~@/assets/images/img_home_tit0501.png" alt="">
            <img class="img0502" src="~@/assets/images/img_home_tit0502.png" alt="">
          </div>
          <span>화면을 터치하여 검색을 시작하세요!</span>
        </div>
      </div>
      <MainPage
        :class="{'on' : mainPageToggle, 'active' : mainPageToggle}"
      />
    </div>

    <SearchBox
      :class="{'on' : $store.state.toastPopupToggle, 'active' : mainPageToggle}"
      @mainToggle="mainToggle()"
    />

    <ProductPopup 
      :class="{'on' : productPopupToggle}"
      @productToggle="productToggle(500)"
    />

    <transition name="popupDimmed" mode="out-in">
      <div id="toastPopupDimmed"
        v-show="$store.state.toastPopupDimmed"
        :class="{'on' : coverDimmed}"
      ></div>
    </transition>

    <MainPopup
      v-if="mainPopup"
      @closeToday="closeToday()"
      @closeMainPopup="closeMainPopup()"
    />

    <transition name="popupDimmed" mode="out-in">
    <div id="loadingDimmed"
      v-show="loadingDimmed"
    ></div>
    </transition>

    <transition name="popupDimmed" mode="out-in">
    <div id="errorDimmed"
      v-show="errorDimmed"
    >
      <div class="inner">
        <div class="visual"><img src="~@/assets/images/img_noResult.gif" alt=""></div>
        <div class="text">
          <h2>통신 중 오류가 발생하였습니다.</h2>
          <p>네트워크 환경을 확인해주세요.</p>
        </div>
        <button type="button" class="btn"><span>다시시도</span></button>
      </div>
    </div>
    </transition>

    <div id="rotateDimmed" v-show="isLandscape"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import SearchBox from "@/components/SearchBox.vue"
import ProductPopup from "@/components/ProductPopup.vue"
import MainPopup from "@/components/MainPopup.vue"
import MainPage from "@/components/MainPage.vue"

export default {
  components: {
    Header,
    SearchBox,
    ProductPopup,
    MainPopup,
    MainPage
  },
  data(){
    return {
      loadingDimmed: true,        // 로딩중
      errorDimmed: false,         // 통신 오류
      visual: false,              // 인트로 애니메이션
      mainPopup : true,           // 메인 팝업
      productPopupToggle: false,  // 상품 PICK 팝업
      coverDimmed : false,        // dimmed 스타일 변경
      mainPageToggle : false,
      isLandscape: false,         // 가로 일 경우 체크
    }
  },
  mounted(){
    setTimeout(() => {
      this.loadingDimmed = false;
    }, 1000);

    if(document.cookie === 'ncookie=done') {
      this.mainPopup = false;
    }

    window.addEventListener("resize", this.resizeEvent, true);
    this.resizeEvent();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeEvent);
  },
  methods:{
    closeToday(){
      function setCookie( name, value, expirehours ) {
        var todayDate = new Date();
        todayDate.setHours( todayDate.getHours() + expirehours );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
      }
      function getCookie(name) {
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
        return match ? match[1] : null;
      }
      if(getCookie("ncookie") != "done"){
        setCookie( "ncookie", "done" , 24 );
        this.mainPopup = false;
      }
    },
    closeMainPopup(){
      this.mainPopup = false;
    },
    productToggle(timer){
      this.productPopupToggle = !this.productPopupToggle;
      if(timer){
        setTimeout(() => {
          this.$store.commit('toastPopupDimmed');
        }, timer);
        setTimeout(() => {
          this.coverDimmed = !this.coverDimmed;
        }, timer+500);
      } else {
        this.$store.commit('toastPopupDimmed');
        this.coverDimmed = !this.coverDimmed;
      }
    },
    mainToggle(){
      this.mainPageToggle = true;
    },
    resizeEvent(){
      const browserWidth = document.body.clientWidth;
      const browserHeight = document.body.clientHeight;
      // 키보드가 올라왔을 경우
      browserWidth > browserHeight + 200 ? this.isLandscape = true : this.isLandscape = false;
    },
    fnMainToggle(){
      this.mainToggle();
      setTimeout(() => {
        this.$store.commit('showFinderBox1')
      }, 1000);
    }
  },
  watch:{
    loadingDimmed(value){
      if(!value){
        setTimeout(() => {
          this.visual = true;
        }, 1000);
      }
    }
  },
}
</script>
<style>
.popupDimmed-enter,
.popupDimmed-leave-to {
  opacity: 0;
}
.popupDimmed-enter-active,
.popupDimmed-leave-active {
  transition: opacity 0.2s;
}
</style>