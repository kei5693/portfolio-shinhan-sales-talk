import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFinderBox1: false,  // 검색 페이지 시작 시 나오는 첫 문구, 프로모션 등장
    showFinderBox2: true,
    showFinderBox3: true,
    searchTerm1: true,     // 사용자 검색 입력 채팅
    loadingAni: true,
    toastPopupToggle : false,   // 하단 토스트 팝업
    toastPopupDimmed : false,   // dimmed
  },
  mutations: {
    showFinderBox1: (state) => {
      state.showFinderBox1 = true;
    },
    toastToggle: (state) => {
      state.toastPopupToggle = !state.toastPopupToggle;
      state.toastPopupDimmed = !state.toastPopupDimmed;
    },
    toastPopupDimmed: (state) => {
      state.toastPopupDimmed = !state.toastPopupDimmed;
    },
  },
  actions: {
  },
  modules: {
  }
})
