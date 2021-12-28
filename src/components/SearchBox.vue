<template>
  <div id="searchBox">
    <div class="searchInput">
      <div>
        <button type="button" @click="fnToastToggle()"></button>
        <div>
          <input type="text" placeholder="검색어를 입력해주세요"
            @focus="mainToggle()"
            @input="searchTextValue = $event.target.value"
            ref="searchText"
          />
          <button type="button"
            v-show="isSearchText"
            @click="clearText()"
          ></button>
        </div>
        <button type="button"></button>
      </div>
    </div>
    <ToastPopup :loopTitle="loopTitle" />
  </div>
</template>
<script>
import ToastPopup from "@/components/ToastPopup.vue"

export default {
  data(){
    return {
      searchTextValue: '',
      isSearchText: false,
      scrollValue: '',
      loopTitle: false,
    }
  },
  components: {
    ToastPopup
  },
  methods: {
    fnToastToggle(){
      this.$store.commit('toastToggle');
      this.loopTitle = true;
    },
    mainToggle(){
      this.$emit('mainToggle');
      setTimeout(() => {
        this.$store.commit('showFinderBox1')
      }, 1000);
    },
    clearText(){
      this.$refs.searchText.value = '';
      this.isSearchText = false;
    },
    scrollBlock($event) {
      if( $event.target != this.$refs.searchText ){
        this.$refs.searchText.blur();
      }
    },
  },
  watch:{
    searchTextValue(value){
      value ? this.isSearchText = true : this.isSearchText = false;
    },
  },
  mounted(){
    window.addEventListener('touchstart', this.scrollBlock);
  },
  destroyed () {
    window.removeEventListener('touchstart', this.scrollBlock);
  },
}
</script>