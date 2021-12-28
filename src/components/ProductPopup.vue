<template>
  <div id="productPopup">
    <div class="titleBox">
      <div>
        <h1>Salesgram</h1>
        <h2>상품 PICK</h2>
        <button type="button"
          @click="productToggle()"
        >닫기</button>
      </div>
    </div>
    <div class="tabMenuBox">
      <!-- tabMenuBox -->
      <div ref="tabMenuBox">
        <!-- tabs -->
        <div class="tabs" ref="tabs">
          <!-- tabItem -->
          <div 
            class="tabItem"
            v-for="(tab, index) in tabItems"
            @click="switchTab(index)"
            :key="index"
            ref="tabItem"
          >
          <span>
            {{tab}}
            <svg v-if="index == 0" xmlns="http://www.w3.org/2000/svg" width="32.586" height="31.286" viewBox="0 0 32.586 31.286">
              <path id="iconStar" data-name="iconStar" d="M796.37,394.157l3.286,6.657a1.649,1.649,0,0,0,1.242.9l7.346,1.067a1.649,1.649,0,0,1,.914,2.813l-5.316,5.182a1.649,1.649,0,0,0-.474,1.46l1.255,7.317a1.649,1.649,0,0,1-2.393,1.739l-6.571-3.454a1.65,1.65,0,0,0-1.535,0l-6.571,3.454a1.649,1.649,0,0,1-2.393-1.739l1.255-7.317a1.65,1.65,0,0,0-.474-1.46l-5.316-5.182a1.649,1.649,0,0,1,.914-2.813l6.306-.916,1.04-.151.027,0,1.215-.9,1.621-3.285,1.664-3.372A1.649,1.649,0,0,1,796.37,394.157Z" transform="translate(-778.598 -391.738)" fill="none" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </svg>
          </span>
          </div>
          <!-- //tabItem -->
          <div class="tabBorder" ref="tabBorder"></div>
        </div>
        <!-- //tabs -->
      </div>
      <!-- //tabMenuBox -->
      <!-- tabContents -->
      <div class="tabContents">
        <ul class="bullList">
          <li
            v-for="(tabContentList, index) in tabContentListItems.filter(data=>data.category == tabSelectedIdx)"
            :key="index"
            v-html="tabContentList.title"
          >
          </li>
        </ul>
      </div>
      <!-- //tabContents -->
    </div>
  </div>
</template>
<script>
import { gsap, ScrollToPlugin  } from 'gsap/all';
export default {
  data() {
    return {
      tabWidth: 0,
      tabBorder : 0,
      tabSelectedIdx:0,
      tabItems: ['추천', '종신/정기', '연금/저축', '변액', '건강'],
      tabContentListItems: [
        {category:0, title:'무) 용감한 오렌지 종신보험 (저해지환급금 지급형)'},
        {category:0, title:'무) 종신보험 표준형'},
        {category:0, title:'무) 라이프케어 CI종신보험'},
        {category:0, title:'무) 스마트 정기보험 1종'},
        {category:1, title:'무) 간편가입 용감한 오렌지 종신보험[저해지환급금지급형]'},
        {category:1, title:'무) 오렌지 금리에 강한 종신보험 (보증비용부과형)'},
        {category:1, title:'무) 오렌지 금리에 강한 종신보험 (보증비용부과형)<br>[저해지환급금지급형]'},
        {category:1, title:'무) 오렌지 금리에 강한 VIP종신보험 (보증비용부과형)'},
        {category:1, title:'오렌지라이프 상품명 A'},
        {category:2, title:'오렌지라이프 상품명 B'},
        {category:2, title:'무) 용감한 오렌지 종신보험 (저해지환급금 지급형)'},
        {category:2, title:'무) 종신보험 표준형'},
        {category:2, title:'무) 라이프케어 CI종신보험'},
        {category:3, title:'무) 스마트 정기보험 1종'},
        {category:3, title:'무) 간편가입 용감한 오렌지 종신보험[저해지환급금지급형]'},
        {category:3, title:'무) 오렌지 금리에 강한 종신보험 (보증비용부과형)'},
        {category:4, title:'무) 오렌지 금리에 강한 종신보험 (보증비용부과형)<br>[저해지환급금지급형]'},
        {category:4, title:'무) 오렌지 금리에 강한 VIP종신보험 (보증비용부과형)'},
        {category:4, title:'오렌지라이프 상품명 A'},
        {category:4, title:'오렌지라이프 상품명 B'},
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
      var tabBorder   = this.$refs.tabBorder;
      var pos         = 0;
      var posLimit    = tabs.offsetWidth - tabMenuBox.offsetWidth;

      if( tabItem[n].offsetLeft + tabItem[n].offsetWidth / 2 <= posCenter ){
        pos = 0;
      } else {
        pos = (tabItem[n].offsetLeft + tabItem[n].offsetWidth / 2) - posCenter;
        if (pos > posLimit) {
          pos = posLimit
        }
      }


      function siblings(t) {
        return Array.prototype.slice.call(t.parentElement.children).filter(function(e) {
          return e != t ? e.classList.remove('on') : e.classList.add('on');
        });
      }
      siblings(tabItem[n]);


      //tabMenuBox.scrollLeft = pos;
      gsap.to(this.$refs.tabMenuBox, {duration: 0.5, scrollTo: {x: pos}});

      setTimeout(() => {
        tabBorder.style.width = tabItem[n].childNodes[0].offsetWidth+'px';
        tabBorder.style.left = tabItem[n].offsetLeft+20+'px';
      }, 100);
    },
    setTabInit(){
      for(var i in this.$refs.tabItem){
        this.tabWidth += this.$refs.tabItem[i].offsetWidth;
      }
      this.$refs.tabs.style.width = this.tabWidth+'px';
      this.$refs.tabItem[0].classList.add('on');
      this.$refs.tabBorder.style.width = this.$refs.tabItem[0].childNodes[0].offsetWidth+'px';
    },
    productToggle(){
      this.$emit('productToggle');
    },
  },
  mounted(){
    setTimeout(() => {
      this.setTabInit();
    }, 500);
    gsap.registerPlugin(ScrollToPlugin);
  },
}
</script>