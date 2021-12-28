<template>
  <div id="mainPage" ref="mainPage">
    <div class="innerWrap" id="innerWrap" ref="innerWrap">
      <!-- 제공하는 컨텐츠 -->
      <div class="finderBox">
          <div class="guideBox"
            :class="{'on' : $store.state.showFinderBox1}"
          >
            <div>
              <p>어떤 콘텐츠를 찾고 계신가요?<br>원하시는 검색어를<br>입력해주세요:) </p>
            </div>
          </div>

        <div class="promoBox">
          <div class="inner">
            <div class="txtBox">
              <img src="~@/assets/images/img_promo01.png" alt="">
              <p>신상품 큐브가 출시되었어요!<br>지금 둘러보세요 :)</p>
            </div>
            <button type="button">바로가기</button>
          </div>
        </div>

        <div class="promoBox">
          <div class="inner">
            <div class="txtBox">
              <img src="~@/assets/images/img_promo01.png" alt="">
              <p>신상품 큐브가 출시되었어요!<br>지금 둘러보세요 :)</p>
            </div>
            <button type="button">바로가기</button>
          </div>
        </div>

      </div>

      <!-- 사용자 입력 값 -->
      <div class="SearchTerm"
        :class="{'on' : $store.state.searchTerm1}"
      >
        <span>건강</span>
      </div>
      
      
      <!-- 제공하는 컨텐츠 -->
      <div class="finderBox">
        <div class="noticeBox"
          :class="{'on' : $store.state.loadingAni}"
        loadingAni
        >
          <div>
            <img src="~@/assets/images/img_loading_talk.gif" alt="">
          </div>
        </div>
        <!-- 결과 있음 : $store.state.showFinderBox2가 true가 되면 이후의 div는 시간차로 등장 -->
        <div class="noticeBox"
          :class="{'on' : $store.state.showFinderBox2}"
        >
          <div>
            <span>자~ 궁금해 하시는 콘텐츠를 찾아봤어요.<br>어떠세요?</span>
          </div>
          <div class="resultBox">
            <div class="tabMenuBox">
              <div ref="tabMenuBox">
                <!-- tabs -->
                <div class="tabs" ref="tabs">
                  <!-- tabItem -->
                  <div 
                    class="tabItem"
                    v-for="(tab, index) in tabItems"
                    :key="index"
                    
                    @click="switchTab(index)"
                    ref="tabItem"
                  >
                    <span><em v-html="tab"></em></span>
                  </div>
                  <!-- //tabItem -->
                </div>
                <!-- //tabs -->
              </div>
              <!-- 결과 있음 -->
              <div class="tabContents"
                ref="tabContents">
                <div class="inner">
                  <ul class="bullList">
                    <!-- <li
                      v-for="(tabContentList, index) in tabContentListItems.filter(data=>data.category == tabSelectedIdx)"
                      :key="index"
                      v-html="tabContentList.title"
                    >
                    </li> -->
                    <li
                      v-for="(tabContentList, index) in tabContentListItems"
                      :key="index"
                    >
                      {{tabContentList.title}}
                    </li>
                  </ul>
                  <!-- class isLoading이 있으면 로딩중 gif 표시 -->
                  <div class="btnMore"><button type="button" @click="scrollBottom()">더보기</button></div>
                  <div class="btnMore isLoading"><button type="button" @click="scrollBottom()">더보기</button></div>
                </div>
              </div>
              <!-- 로딩중 -->
              <div class="tabContents on">
                <div class="inner">
                  <div class="loading">
                    <div>
                      <img src="~@/assets/images/img_loading_data.gif" alt="">
                      <p>리스트를 불러오는 중입니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 결과 없음 -->
              <div class="tabContents on">
                <div class="inner">
                  <div class="noResult">
                    <div>
                      <img src="~@/assets/images/img_noResult.gif" alt="">
                      <p>검색된 콘텐츠가 없습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 결과 없음 -->
        <div class="noticeBox noResult"
          :class="{'on' : $store.state.showFinderBox3}"
        >
          <div>
            <span>헉! 검색 결과를 찾지 못했어요.<br>다른 검색어를 입력해보시는건 어떨까요?</span>
          </div>
          <div class="shortcutTop5">
            <div>
              <div class="txtBox">
                <h3>검색이 어렵다면?</h3>
                <p>'인기검색어 Top 5'와 <br>'추천태그'를 활용해보세요!</p>
              </div>
              <div class="btnBox">
                <button type="button">바로가기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>  
import { gsap, ScrollToPlugin  } from 'gsap/all';
export default {
  data(){
    return {
      tabWidth: 0,
      tabBorder : 0,
      tabSelectedIdx:0,
      tabItems: ['오늘', '상품홈', '교육자료', '동영상자료', '세일즈자료', '모바일<br>상품안내장', '모바일약관'],
      tabContentListItems: [
        {category:0, title:'1 무) 용감한 오렌지 종신보험 (저해지환급금 지급형)'},
        {category:0, title:'1 무) 종신보험 표준형'},
        {category:0, title:'1 무) 라이프케어 CI종신보험'},
        {category:0, title:'1 무) 스마트 정기보험 1종'},
        {category:1, title:'2 무) 간편가입 용감한 오렌지 종신보험[저해지환급금지급형]'},
        {category:1, title:'2 무) 오렌지 금리에 강한 종신보험 (보증비용부과형)'},
        {category:1, title:'2 무) 오렌지 금리에 강한 종신보험 (보증비용부과형) [저해지환급금지급형]'},
        {category:1, title:'2 무) 오렌지 금리에 강한 VIP종신보험 (보증비용부과형)'},
        {category:2, title:'3 오렌지라이프 상품명 A'},
        {category:2, title:'3 오렌지라이프 상품명 B'},
        {category:2, title:'3 무) 용감한 오렌지 종신보험 (저해지환급금 지급형)'},
        {category:2, title:'3 무) 종신보험 표준형'},
        {category:3, title:'4 무) 라이프케어 CI종신보험'},
        {category:3, title:'4 무) 스마트 정기보험 1종'},
        {category:3, title:'4 무) 간편가입 용감한 오렌지 종신보험[저해지환급금지급형]'},
        {category:3, title:'4 무) 오렌지 금리에 강한 종신보험 (보증비용부과형)'},
        {category:4, title:'5 무) 오렌지 금리에 강한 종신보험 (보증비용부과형) [저해지환급금지급형]'},
        {category:4, title:'5 무) 오렌지 금리에 강한 VIP종신보험 (보증비용부과형)'},
        {category:4, title:'5 오렌지라이프 상품명 A'},
        {category:4, title:'5 오렌지라이프 상품명 B'},
        {category:5, title:'6 무) 용감한 오렌지 종신보험 (저해지환급금 지급형)'},
        {category:5, title:'6 무) 종신보험 표준형'},
        {category:5, title:'6 무) 라이프케어 CI종신보험'},
        {category:5, title:'6 무) 스마트 정기보험 1종'},
      ],
    }
  },
  methods: {
    switchTab(n){
      this.tabSelectedIdx = n;
      var posCenter   = window.outerWidth / 2;
      var tabMenuBox  = this.$refs.tabMenuBox;
      var tabs        = this.$refs.tabs;
      var tabItem     = this.$refs.tabItem;
      var tabContents = this.$refs.tabContents;
      var pos         = 0;
      var posLimit    = tabs.offsetWidth - tabMenuBox.offsetWidth;

      function siblings(t) {
        return Array.prototype.slice.call(t.parentElement.children).filter(function(e) {
          return e != t ? e.classList.remove('on') : e.classList.add('on');
        });
      }

      if(!tabItem[n].classList.contains('on')){
        if( tabItem[n].offsetLeft + tabItem[n].offsetWidth / 2 <= posCenter ){
          pos = 0;
        } else {
          pos = (tabItem[n].offsetLeft + tabItem[n].offsetWidth / 2) - posCenter;
          if (pos > posLimit) {
            pos = posLimit
          }
        }
        siblings(tabItem[n]);

        gsap.to(this.$refs.tabMenuBox, {duration: 0.5, scrollTo: {x: pos}});
        tabContents.classList.add('on');
      } else {
        tabItem[n].classList.remove('on');
      }
    },
    setTabInit(){
      for(var i in this.$refs.tabItem){
        this.tabWidth += this.$refs.tabItem[i].offsetWidth;
      }
      this.$refs.tabs.style.width = this.tabWidth+'px';
    },
    scrollBottom(){
      var target = this.$el.querySelector('.innerWrap'); 
      gsap.to(this.$refs.innerWrap, {duration: 0.5, scrollTo: target.scrollHeight});
    },
  },
  mounted(){
    this.setTabInit();
    gsap.registerPlugin(ScrollToPlugin);
  },
}
</script>