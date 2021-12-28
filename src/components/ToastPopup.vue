<template>
  <div id="toastPopup">
    <div>
      <div class="popularSearch">
        <div :class="{'on': slideToggle}">
          <em>인기검색어 TOP5</em>

          <div ref="popularSearch">
            <span
              v-for="(popular, index) in popularSearch"
              :key="'popularTitle'+index"
              :class="{'on' : index == '0'}"
            >
            <em>{{popular.rank}}</em> {{popular.title}}</span>
          </div>

          <button type="button" @click="fnSlideToggle()">열기</button>
        </div>
        <transition name="slideToggle">
          <ol v-if="slideToggle">
            <li
              v-for="(popular, index) in popularSearch"
              :key="index"
              @click="fnSearch(popular.title)"
            >
            <em>{{popular.rank}}</em>
            <span>{{popular.title}}</span>
            </li>
          </ol>
        </transition>
      </div>
      <div class="recommendedTag">
        <h2>#추천태그</h2>
        <div>
          <button type="button"
            v-for="(tag, index) in RecommendedTag"
            :key="index"
            @click="fnSearch(tag)"
          >
            {{'#'+tag}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    loopTitle: Boolean
  },
  data(){
    return {
      slideToggle: false,
      popularSearch: [
        {rank:1, title:'종합건강상해보험'},
        {rank:2, title:'종신보험'},
        {rank:3, title:'변액연금보험'},
        {rank:4, title:'TOP 4'},
        {rank:5, title:'TOP 5'},
      ],
      RecommendedTag: [
        '건강한_집콕생활',
        '혈행건강',
        '겨울건강관리',
        '건강툰',
        '종합건강상해',
        'GI건강종신',
        '건강',
        '건강한치아보험',
        '종합건강상해',
        '건강한_집콕생활',
        '건강툰',
        '종합건강상해',
        'GI건강종신',
        '건강툰',
        '건강한_집콕생활',
        '혈행건강',
        '겨울건강관리',
        '건강툰',
        '종합건강상해',
        'GI건강종신',
        '건강',
        '건강한치아보험',
        '종합건강상해',
        '건강한_집콕생활',
        '건강한_집콕생활',
        '혈행건강',
        '겨울건강관리',
        '건강툰',
        '종합건강상해',
        'GI건강종신',
        '건강',
        '건강한치아보험',
        '종합건강상해',
        '건강한_집콕생활',
        '건강툰',
        '종합건강상해',
        'GI건강종신',
        '건강툰',
        '건강한_집콕생활',
        '혈행건강',
        '겨울건강관리',
        '건강툰',
        '종합건강상해',
        'GI건강종신',
        '건강',
        '건강한치아보험',
        '종합건강상해',
        '건강한_집콕생활',
      ],
    }
  },
  methods:{
    fnSlideToggle(){
      this.slideToggle = !this.slideToggle
    },
    fnSearch(value){
      console.log(value);
      this.$store.commit('toastToggle');
    },
    loopArr(){
    // 인기 검색어 loop
      var target = this.$refs.popularSearch;
      var loopEl = Array.prototype.slice.call(target.childNodes);
      var activeIndex = -1;
      var nextIndex = 0;
      setInterval(() => {
        activeIndex++;
        nextIndex++;
        if(activeIndex > 4) activeIndex = 0;
        if(nextIndex > 4) nextIndex = 0;

        loopEl[activeIndex].classList.replace('on', 'off');
        loopEl[nextIndex].classList.add('on');
      }, 2000 );

      // 인기 검색어 loop transition 동작이 끝나면 class 제거
      loopEl.forEach(element => {
        element.addEventListener('transitionend', function () {
          if(element.classList.contains('off')){
              element.classList.remove('off')
          }
        });
      });
    },
  },
  mounted(){
    //this.loopArr();
  },
  watch:{
    // SearchBox.vue에서 받은 데이터로 인기 검색어 loop 시작 타이밍 결정
    loopTitle(value){
      if(value){
        setTimeout(() => {
          this.loopArr()
        }, 1000);
      }
    }
  }
}
</script>
<style>
.slideToggle-enter,
.slideToggle-leave-to {
  overflow: hidden;
  max-height: 0;
}
.slideToggle-enter-to,
.slideToggle-leave {
  overflow: hidden;
  max-height: 200px;
}
.slideToggle-enter-active,
.slideToggle-leave-active {
  transition-duration: 0.5s;
}
</style>