<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
html, body, #app {
  position: fixed !important;
  width: 100%;
  height:100%;
  background: #fff;
}
html, body, #app, #contentBox, #content, #mainPage  {
  overflow: hidden;
}
#contentBox {
  position: relative;
  height:100%;
}
#header {
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
  width:100%;
  padding:0 68px 0 18px;
  background: #ADC3FD;
  background-size: 1000px 1000px;
  box-sizing: border-box;
}
#header:after {
  content:'';
  position: absolute;
  top:0;
  right:0;
  width:50px;
  height:50px;
  background: url('~@/assets/images/sp_index.png') no-repeat -500px 0;
  background-size: 1000px 1000px;
}
#header > div {
  position: relative;
  display:flex;
  height:50px;
  justify-content: flex-end;
  align-items: center;
}
#header > div:after {
  content:'';
  position: absolute;
  top:50%;
  left:0;
  width:90px;
  height:16px;
  background:url('~@/assets/images/sp_index.png') no-repeat 0 -100px;
  background-size: 1000px 1000px;
  transform: translateY(-50%);
}
#header > div button {
  border:0 none;
  font-size:0;
  line-height:0;
  text-indent:-9999px;
  width:43px;
  height:24px;
  background:url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -100px -100px;
  background-size: 1000px 1000px;
}
#header > div button + button {
  width:79px;
  margin-left:10px;
  background-position: -200px -100px;
}





#content {
  width:100%;
  height:100%;
  padding:50px 0;
  box-sizing: border-box;
  background: #fff;
}
#content .visual {
  display:flex;
  align-items: center;
  height:100%;
}
#content .visual > div {
  position: relative;
  max-width:720px;
  margin:0 auto;
  overflow:hidden;
  text-align: center;
}
#content .visual > div > img:first-child {
  position: static;
  display:block;
}
#content .visual > div > img,
#content .visual > div > div {
  position: absolute;
  top:0;
  left:0;
  width:100%;
}
#content .visual > div img.img01 {
  opacity: 0;
  margin-left:-10%;
}
#content .visual > div img.img02 {
  top:100%;
  z-index: 200;
}
#content .visual > div > div > img {
  width:50%;
  position: absolute;
  top: 0;
  opacity: 0;
}
#content .visual > div img.img04 {
  transform:scale(0);
  transform-origin: 50% 100%;
}
#content .visual > div > div img.img0501 {
  left:0;
  transform-origin: 63.33% 87.22%;
  margin:2% 0 0 5%;
  transition: all 0.5s;
}
#content .visual > div > div img.img0502 {
  right:0;
  transform-origin: 39.44% 69.34%;
  margin:4% 4% 0 0;
  transition: all 0.5s;
}
#content .visual.on > div img.img01 {
  animation: aniSlideLeft 0.5s ease forwards;
}
#content .visual.on > div img.img02 {
  animation-name: aniSlideTop, aniScaleLoop4;
  animation-duration:0.6s, 2s;
  animation-timing-function:cubic-bezier(0.5, 0, 0.5, 1.5), linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, alternate;
  animation-delay: 0.5s, 4s;
}
#content .visual.on > div img.img04 {
  animation-name: aniScale, aniScaleLoop1;
  animation-duration:1s, 4s;
  animation-timing-function:cubic-bezier(0.8, 0, 0.5, 1.8), linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, infinite;
  animation-delay: 1.5s, 6s;
}
#content .visual.on > div img.img0501 {
  opacity: 1;
  margin:0;
  transition-delay: 1s;
  animation: aniScaleLoop2 4s linear forwards infinite;
  animation-delay: 4s;
}
#content .visual.on > div img.img0502 {
  opacity: 1;
  margin:0;
  transition-delay: 1.3s;
  animation: aniScaleLoop3 4s linear forwards infinite;
  animation-delay: 5s;
}
@keyframes aniSlideLeft {
  0%        {opacity: 0;margin-left:-10%;}
  80%,100%  {opacity: 1;margin-left:0;}
}
@keyframes aniSlideTop {
  0%    {top:100%;}
  100%  {top:0%;}
}
@keyframes aniScale {
  0%    {transform:scale(0);}
  100%  {transform:scale(1);}
}
@keyframes aniScaleLoop1 {
  0%,10%,100% {transform:scale(1);}
  5%          {transform:scale(1.2);}
}
@keyframes aniScaleLoop2 {
  0%,8%,16%,100%  {margin:0;}
  4%,12%          {margin:-2% 0 0 -2%;}
}
@keyframes aniScaleLoop3 {
  0%,8%,16%,100%  {margin:0;}
  4%,12%          {margin:-2% -2% 0 0;}
}
@keyframes aniScaleLoop4 {
  0%          {transform:translateY(0px);}
  100%        {transform:translateY(-8px);}
}
#content .visual > div > span {
  display:inline-block;
  margin-top:11.66vw;
  font-size:1.4rem;
  color:#715DEF;
  border-bottom:1px solid #715DEF;
  opacity: 0;
  margin-left:-5%;
  animation: 
  aniText 0.4s ease-in-out forwards,
  aniOpacity 1.5s ease-in-out infinite alternate;
  animation-delay: 5s, 7s;
}
@media all and (min-width:768px){
#content .visual > div > span {font-size:2.8rem;}
}
@keyframes aniText {
  0%    {opacity: 0;margin-left:-5%;}
  100%  {opacity: 1;margin-left:0;}
}
@keyframes aniOpacity {
  0%,40%    {opacity: 1;}
  60%,100%  {opacity: 0;}
}
#mainPage {
  position: fixed;
  top:105%;
  left:0;
  z-index: 900;
  width:100%;
  height:calc(100% - 50px);
  border-bottom: 50px solid #fff;
  box-sizing: border-box;
  /* border-radius: 18px 18px 0 0; */
  background: #fff;
  transition:top 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  box-shadow: 0 0 10px #e9e9e9 ;
}
#mainPage:after {
  content:'';
  position: fixed;
  bottom:0px;
  left:0;
  width:100%;
  height:1px;
  background: #ebebeb;
}
#mainPage.active:after {
  bottom:50px;
}
#mainPage.on {
  top:49px;
}
#mainPage > .innerWrap {
  /* margin: 30px 18px 0; */
  height: calc(100% - 60px);
  overflow-y: scroll;
  overflow-x:hidden;
  -webkit-overflow-scrolling: touch;
  padding: 30px 18px;
}
#mainPage > .innerWrap > div + div {
  margin-top:15px;
}




#searchBox {
  position: fixed;
  bottom:-50px;
  left:0;
  z-index: 1200;
  width:100%;
  height:50px;
  transition: bottom 0.5s;
  transition-delay: 2s;
}
#searchBox.active {
  bottom:0;
}
#searchBox .searchInput {
  position: relative;
  z-index: 200;
  display: flex;
  align-items: center;
  height:100%;
  background:#fff;
  border-top:1px solid transparent;
  border-radius: 18px 18px 0 0;
  box-sizing: border-box;
  transition: border-radius 0.2s;
}
#searchBox.on .searchInput,
#searchBox.border .searchInput {
  border-radius: 0 0 0 0;
  border-top-color:#ebebeb;
}
#searchBox .searchInput > div {
  display: grid;
  grid-template-columns: 34px auto 34px;
  grid-column-gap: 10px;
  width: 100%;
  height: 34px;
  padding: 0 18px;
  box-sizing: border-box;
}
#searchBox .searchInput > div > button {
  width:34px;
  height:34px;
  border:0 none;
  font-size:0;
  line-height: 0;
  text-indent:-9999px;
  border-radius: 8px;
  background:#f4f4f4 url('~@/assets/images/sp_index.png') no-repeat;
  background-position: 7px -193px;
  background-size: 1000px 1000px;
}
#searchBox .searchInput > div > button:first-child {
  transition: background-position 0.2s ease;
}
#searchBox.on .searchInput > div > button:first-child {
  background-position: -39px -193px;
}
#searchBox .searchInput > div > div {
  position: relative;
}
#searchBox .searchInput > div > div input {
  display:block;
  width:100%;
  height:100%;
  border:0 none;
  border-radius: 8px;
  padding:0 30px 0 10px;
  box-sizing: border-box;
  background:#f4f4f4;
  color:#222;
}
#searchBox .searchInput > div > div input::placeholder {color:#715DEF;}
#searchBox .searchInput > div > div button {
  position: absolute;
  top:0;
  right:0;
  width:30px;
  height:34px;
  border:0 none;
  font-size:0;
  line-height: 0;
  text-indent:-9999px;
  border-radius: 8px;
  background:#f4f4f4 url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -595px -195px;
  background-size: 1000px 1000px;
}
#searchBox .searchInput > div > div + button {
  background:#715DEF url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -94px -192px;
  background-size: 1000px 1000px;
}

#toastPopup {
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
  position: fixed;
  top:100%;
  left:0;
  width:100%;
  height:calc(100% - 100px);
  padding:30px 18px 0;
  box-sizing: border-box;
  border-radius: 18px 18px 0 0;
  background: #fff;
  transition:top 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
}
#searchBox.on #toastPopup {
  top:50px;
}
#toastPopup > div {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
#toastPopup .popularSearch {
  border:1px solid #73635C;
  border-radius: 15px;
}
#toastPopup .popularSearch > div {
  position: relative;
  display:flex;
  align-items: center;
  height:45px;
  box-sizing: border-box;
  padding:0 12px;
}
#toastPopup .popularSearch > div > em {
  min-width:100px;
  position: absolute;
  top: 50%;
  left: 12px;
  z-index: 500;
  transform: translateY(-50%);
  padding: 5px 5px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #5D88FB;
  font-size: 1.1rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
}
#toastPopup .popularSearch > div > div {
  overflow: hidden;
  position: relative;
  width:100%;
  height:26px;
  padding: 0 30px 0 119px;
  box-sizing: border-box;
}
#toastPopup .popularSearch > div > div span {
  position: absolute;
  top:100%;
  left:0;
  z-index: -1;
  display:block;
  width:100%;
  height:100%;
  line-height: 26px;
  font-size:1.4rem;
  font-weight:500;
  color:#333;
  overflow:hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
  transition: top 0.5s;
  box-sizing: border-box;
  padding: 0 30px 0 119px;
  background: #fff;
}
#toastPopup .popularSearch > div > div span.on {
  top:0;
  z-index: 100;
}
#toastPopup .popularSearch > div > div span.off {
  top:-26px;
}
#toastPopup .popularSearch > div > div span em {
  display:inline-block;
  margin-right:13px;
  font-weight: 700;
  color:#715DEF;
}
#toastPopup .popularSearch > div > button {
  position: absolute;
  top:50%;
  right:2px;
  z-index: 500;
  width:30px;
  height:30px;
  margin-top:-15px;
  font-size:0;
  line-height: 0;
  text-indent: -9999px;
  border:0 none;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -240px -195px;
  background-size: 1000px 1000px;
  transform:rotate(0deg);
  transform-origin: 50% 50%;
  transition:transform 0.3s;
}
#toastPopup .popularSearch > div.on > em {
  font-size:1.4rem;
  background: transparent;
  color:#333;
  font-weight:700;
  padding:0;
}
#toastPopup .popularSearch > div.on > div {
  opacity: 0;
}
#toastPopup .popularSearch > div.on > button {
  transform:rotate(180deg);
}
#toastPopup .popularSearch > ol {
  padding:0 12px;
}
#toastPopup .popularSearch > ol > li {
  height:35px;
  line-height:35px;
  font-size:1.3rem;
}
#toastPopup .popularSearch > ol > li em {
  display: inline-block;
  margin-right: 12px;
  font-weight:500;
  color:#715DEF;
}
#toastPopup .popularSearch > ol > li + li {
  border-top:1px solid #EBEBEB;
}
#toastPopup .recommendedTag {
  margin-top:30px;
  padding:30px 0;
  border-top:1px solid #EBEBEB;
}
#toastPopup .recommendedTag > h2 {
  font-size:1.8rem;
  font-weight:700;
}
#toastPopup .recommendedTag > div {
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-top:12px;
}
#toastPopup .recommendedTag > div > button {
  height: 30px;
  padding: 0 10px;
  border: 0 none;
  border-radius: 15px;
  font-size: 1.2rem;
  color: #333;
  background: #F4F4F4;
  margin: 5px;
}





#toastPopupDimmed {
  position: fixed;
  top:0;
  left:0;
  z-index: 1100;
  width:100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.5);
}
#toastPopupDimmed.on {
  z-index: 1200;
}




#mainPopup {
  display: flex;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  z-index: 2000;
  width:100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.5);
}
#mainPopup .inner {
  width:77.78%;
  max-width:560px;
  margin:0 auto;
}
#mainPopup .inner .visual {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background: transparent;
}
#mainPopup .inner .visual img {
  display:block;
  width:100%;
  object-fit: contain;
}
#mainPopup .inner .visual .text {
  display:none;
  background: #fff;
}
#mainPopup .inner .visual > div pre {
  padding:30px 18px;
  font-size:1.4rem;
  color:#333;
  text-align: center;
}
#mainPopup .inner .bottom button {
  width:calc(100% - 90px);
  height:43px;
  border:0 none;
  font-size:1.5rem;
  font-weight:700;
  color:#fff;
  background:transparent;
}
#mainPopup .inner .bottom button + button {
  position: relative;
  width:90px;
}
#mainPopup .inner .bottom button + button:after {
  content:'';
  position: absolute;
  top:14px;
  left:0;
  width:1px;
  height:15px;
  background: #fff;
}
#mainPopup .inner.textType .visual > .text {display:block;min-height:400px;border-radius: 20px;}
#mainPopup .inner.textType .visual > .text pre {color:#333;}
#mainPopup .inner.textType .visual > img {display:none;}
#mainPopup .inner.mixType .visual .text {
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x:hidden;
  display:block;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.6);
  border-radius: 15px;
}
#mainPopup .inner.mixType .visual > .text pre {color:#fff;}






#productPopup {
  position: fixed;
  top:0;
  left:100%;
  width:100%;
  height:100%;
  z-index: 2000;
  background:#fff;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
  transition: left 0.5s ease-in-out
}
#productPopup.on {
  left:0;
}
#productPopup .titleBox {
  position: relative;
  height:111px;
  background: #D6E1FE;
}
#productPopup .titleBox > div button {
  content:'';
  position: absolute;
  top:8px;
  right:8px;
  width:15px;
  height:15px;
  padding:10px;
  font-size:0;
  line-height:0;
  text-indent:-9999px;
  border:0 none;
  box-sizing: content-box;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -165px -193px;
  background-size: 1000px 1000px;
}
#productPopup .titleBox > div {
  padding:18px;
  height:100%;
  box-sizing: border-box;
}
#productPopup .titleBox > div > * {
  position: absolute;
}
#productPopup .titleBox > div h1 {
  top:18px;
  left:18px;
  width:91px;
  height:18px;
  font-size:0;
  line-height:0;
  text-indent:-9999px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -300px -200px;
  background-size: 1000px 1000px;
}
#productPopup .titleBox > div h1::after {
  content:'';
  position: absolute;
  top:25px;
  right:-85px;
  width:74px;
  height:51px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -450px -200px;
  background-size: 1000px 1000px;
}
#productPopup .titleBox > div h2 {
  bottom:15px;
  left:18px;
  font-size:1.8rem;
  font-weight: 700;
  color:#222;
  letter-spacing: -1px;
}
#productPopup .tabMenuBox {
  height:calc(100% - 111px);
}
#productPopup .tabMenuBox > div:first-child {
  position: relative;
  height: 50px;
  overflow-x:scroll;
  background: #fff;
}
#productPopup .tabMenuBox > div:first-child::-webkit-scrollbar { 
  width: 0 !important;
  height:0 !important;
}
#productPopup .tabMenuBox > div:first-child:after,
#productPopup .tabs:after {
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
  height:1px;
  background:#EBEBEB;
}
#productPopup .tabs {
  display:flex;
  position:relative;
  background:#fff;
  height:50px;
}

#productPopup .tabItem {
  display:flex;
  padding:0 20px;
  cursor:pointer;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  color:#333;
  border-bottom:1px solid #EBEBEB;
}
#productPopup .tabItem.on {color:#00A3BB;}
#productPopup .tabItem > span {
  display: block;
  position: relative;
  height:50px;
  line-height:50px;
  font-size:1.5rem;
  font-weight: 500;
}
#productPopup .tabItem:first-child > span {
  padding-left:20px;
}
#productPopup .tabItem > span svg {
  position: absolute;
  top:50%;
  left:0;
  width:18px;
  height:18px;
  transform: translateY(-50%);
}
#productPopup .tabItem.on > span svg path {
  stroke:#00A3BB;
}
#productPopup .tabItem.on > span {
  position: relative;
  color:#00A3BB;
}
#productPopup .tabBorder {
  position: absolute;
  bottom:0;
  left:20px;
  z-index: 300;
  width:56px;
  height:1px;
  background:#00A3BB;
  transition: 0.5s;
}

#productPopup .tabContents {
  padding: 14px 18px;
  height: calc(100% - 50px);
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
#productPopup .tabContents .bullList > li {
  position: relative;
  padding-left:12px;
  font-size:1.4rem;
  color:#333;
}
#productPopup .tabContents .bullList > li:after {
  content:'';
  position: absolute;
  top:6px;
  left:0;
  width:5px;
  height:5px;
  border-radius: 50%;
  background:#715DEF;
}
#productPopup .tabContents .bullList > li + li {
  margin-top:12px;
}





#mainPage .tabMenuBox > div:first-child {
  position: relative;
  height: 70px;
  background: #fff;
  overflow-x:scroll;
  overflow: -moz-scrollbars-none; 
  -ms-overflow-style: none; 
}
#mainPage .tabMenuBox > div:first-child::-webkit-scrollbar { 
  -webkit-appearance: none;
  width: 0 !important;
  height:0 !important;
}
#mainPage .tabs {
  display:flex;
  height:100%;
  text-align: center;
}
#mainPage .tabItem + .tabItem {
  padding-left:5px;
}
#mainPage .tabItem > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width:64px;
  height:70px;
  padding-top:36px;
  font-size:1.1rem;
  font-weight:700;
  line-height:1;
  color:#73635C;
  background: #F4F4F4;
  border:2px solid transparent;
  border-radius: 8px;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
#mainPage .tabItem > span:after {
  content:'';
  position: absolute;
  top:10px;
  left:50%;
  transform: translateX(-50%);
  width:20px;
  height:20px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: 0px -600px;
  background-size: 1000px 1000px;
}
#mainPage .tabItem:first-child > span:before {
  content:'';
  position: absolute;
  top:-2px;
  left:5px;
  width:11px;
  height:20px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -350px -600px;
  background-size: 1000px 1000px;
}
#mainPage .tabItem.on:first-child > span:before {background-position: -350px -650px;}
#mainPage .tabItem:nth-child(2) > span:after {background-position: -50px -600px;}
#mainPage .tabItem:nth-child(3) > span:after {background-position: -100px -600px;}
#mainPage .tabItem:nth-child(4) > span:after {background-position: -150px -600px;}
#mainPage .tabItem:nth-child(5) > span:after {background-position: -200px -600px;}
#mainPage .tabItem:nth-child(6) > span:after {background-position: -250px -600px;}
#mainPage .tabItem:nth-child(7) > span:after {background-position: -300px -600px;}
#mainPage .tabItem.on:nth-child(1) > span:after {background-position: 0 -650px;}
#mainPage .tabItem.on:nth-child(2) > span:after {background-position: -50px -650px;}
#mainPage .tabItem.on:nth-child(3) > span:after {background-position: -100px -650px;}
#mainPage .tabItem.on:nth-child(4) > span:after {background-position: -150px -650px;}
#mainPage .tabItem.on:nth-child(5) > span:after {background-position: -200px -650px;}
#mainPage .tabItem.on:nth-child(6) > span:after {background-position: -250px -650px;}
#mainPage .tabItem.on:nth-child(7) > span:after {background-position: -300px -650px;}
#mainPage .tabItem.on > span {
  color:#00A3BB;
  background: #fff;
  border-color:#00A3BB;
}
#mainPage .tabContents {
  margin-top: 6px;
  /* opacity:0;
  padding-top:5%; */
  /* transition: padding-top 0.3s, opacity 0.3s; */
}
#mainPage .tabContents.on {
  /* padding-top:0%;
  opacity:1; */
  /* animation: showTabContents 0.5s 1 forwards; */
}
@keyframes showTabContents {
  0%    {opacity: 0;padding-top:5%;}
  100%  {opacity: 1;padding-top:0%;}
}
#mainPage .tabContents.noResult .inner {
  min-height: 200px;
}
#mainPage .tabContents.noResult .inner ul,
#mainPage .tabContents.noResult .inner .btnMore {
  display:none;
}
#mainPage .tabContents .inner {
  border: 12px solid #7ED0DC;
  border-radius: 10px;
  background: #7ED0DC;
}
#mainPage .tabContents .inner .bullList {
  border-radius: 4px;
  background: #fff;
  padding:0 12px;
}
#mainPage .tabContents .inner .bullList > li {
  position: relative;
  height:38px;
  line-height: 38px;
  padding-right: 28px;
  border-bottom:1px solid #e9e9e9;
  overflow:hidden;
  font-size:1.3rem;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#mainPage .tabContents .inner .bullList > li:after {
  content:'';
  position: absolute;
  top:50%;
  right:0;
  transform: translateY(-50%);
  width:18px;
  height:18px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -400px -400px;
  background-size: 1000px 1000px;
}
#mainPage .tabContents .inner .btnMore {
  text-align: center;
}
#mainPage .tabContents .inner .btnMore.isLoading button {
  animation: aniBtnMoreCancel 1s ease-out;
  color:transparent;
  background:url('~@/assets/images/img_more_loading.gif') no-repeat 50% 50%;
  background-size:auto 8px;
}
@keyframes aniBtnMoreCancel{
  0%, 100%  {opacity:1;}
}
#mainPage .tabContents .inner .btnMore.isLoading button:after {
  display:none;
}
#mainPage .tabContents .inner .btnMore button {
  position: relative;
  display:block;
  width:100%;
  margin-top:10px;
  border:0 none;
  background: transparent;
  font-size:1.5rem;
  font-weight:700;
  color:#fff;
  animation: aniBtnMore 1s ease-out infinite alternate;
}
@keyframes aniBtnMore{
  0%,30%    {opacity:1;}
  70%,100%  {opacity:0;}
}
#mainPage .tabContents .inner .btnMore button:after {
  content:'';
  position: absolute;
  top:0;
  right:calc(50% - 36px);
  transform: rotate(90deg) translate(5px, -50%);
  width:6px;
  height:12px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -300px -400px;
  background-size: 1000px 1000px;
}
#mainPage .tabContents .inner .loading,
#mainPage .tabContents .inner .noResult {
  display: flex;
  border-radius: 4px;
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 200px;
}
#mainPage .tabContents .inner .noResult > div {
  text-align: center;
}
#mainPage .tabContents .inner .noResult > div img {
  display:block;
  width:49.49%;
  min-width:148px;
  max-width:296px;
  margin:0 auto;
}
#mainPage .tabContents .inner .noResult > div p,
#mainPage .tabContents .inner .loading > div p {
  margin-top:14px;
  font-size:1.3rem;
  color:#333;
} 
#mainPage .tabContents .inner .loading > div img {
  display:block;
  margin:0 auto;
}




#mainPage > .innerWrap .finderBox > div + div {margin-top:10px;}
#mainPage .finderBox > .guideBox {
  overflow:hidden;
  width:0;
  height:0;
  transition:
  width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
  height 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}
#mainPage .finderBox > .guideBox.on {
  width: 252px;
  height: 78px;
} 
#mainPage > .innerWrap .guideBox > div {
  position: relative;
  width: 252px;
  height: 78px;
  padding: 13px 13px 13px 66px;
  box-sizing: border-box;
  background: #D6E1FE;
  border-radius: 5px 15px 15px 15px;
  letter-spacing: -1px;
}

#mainPage > .innerWrap .guideBox > div:before,
#mainPage > .innerWrap .guideBox > div:after {
  content:'';
  position: absolute;
  /*
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-size: 1000px 1000px;
  */
}
#mainPage > .innerWrap .guideBox > div:before {
  width: 43px;
  height: 51px;
  top: 50%;
  left: 9px;
  transform: translateY(-50%);
  background:url('~@/assets/images/img_character_01.gif') no-repeat;
  background-size: 100% auto;
  /* background-position: 0px -400px; */
}
#mainPage > .innerWrap .guideBox > div:after {
  width:43px;
  height:32px;
  bottom:-32px;
  right:15px;
  background:url('~@/assets/images/img_character_02.gif') no-repeat;
  background-size: 100% auto;
  transition: bottom 0.5s cubic-bezier(0.5, 0, 0.5, 1.5);
  transition-delay:0.8s;
  /* background-position: -155px -400px; */
}
#mainPage > .innerWrap .guideBox.on > div:after {
  bottom:0;
}
#mainPage > .innerWrap .guideBox h3 {
  font-size:2rem;
  font-weight:700;
  color:#222;
}
#mainPage > .innerWrap .guideBox p {
  font-size:1.4rem;
  color:#222;
}


#mainPage .finderBox > .guideBox.on + * {
  opacity:1;
  padding-top:0;
  transition-delay:0.45s;
}
#mainPage .finderBox > .guideBox.on + * + * {
  opacity:1;
  padding-top:0;
  transition-delay:0.75s;
}
#mainPage > .innerWrap .promoBox {
  width:72.83%;
  padding-top:5%;
  opacity:0;
  transition: opacity 0.3s, padding-top 0.3s;
}
#mainPage > .innerWrap .promoBox.on {
  opacity: 1;
}
#mainPage > .innerWrap .promoBox .inner {
  display: inline-block;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background: #7ED0DC;
  border-radius: 15px;
}
#mainPage > .innerWrap .promoBox .inner .txtBox {
  padding:12px;
  min-width:212px;
  max-width: 424px;
}
#mainPage > .innerWrap .promoBox .inner .txtBox > img {
  width:100%;
}
#mainPage > .innerWrap .promoBox .inner .txtBox > p {
  margin-top:12px;
  font-size:1.4rem;
  font-weight:500;
  color:#fff;
}
#mainPage > .innerWrap .promoBox .inner > button {
  position: relative;
  width: 100%;
  height: 43px;
  border: 0 none;
  background: #00A3BB;
  font-size: 1.5rem;
  color: #fff;
}
#mainPage > .innerWrap .promoBox .inner button:after {
  content: '';
  position: absolute;
  top: 50%;
  right: calc(50% - 50px);
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -300px -400px;
  background-size: 1000px 1000px;
}
#mainPage > .innerWrap .noticeBox > div:first-child {
  position: relative;
  overflow:hidden;
  width:0;
  height:0;
  padding-left: 44px;
  box-sizing: border-box;
  transition:
  width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
  height 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}
#mainPage > .innerWrap .noticeBox > div:first-child img {
  height:29px;
}

#mainPage > .innerWrap .noticeBox.on > div:first-child {
  width:314px;
  height:65px;
}
#mainPage > .innerWrap .noticeBox > div:first-child:after {
  content:'';
  position: absolute;
  top:0px;
  left:0;
  width:44px;
  height:44px;
  /* background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -500px -400px;
  background-size: 1000px 1000px; */
  background: url('~@/assets/images/img_character_search.gif') no-repeat;
  background-size:auto 44px;
}
#mainPage > .innerWrap .noticeBox.noResult > div:first-child:after {
  /* background-position: -700px -400px; */
  background: url('~@/assets/images/img_character_noresult.gif') no-repeat;
  background-size:auto 44px;
}
#mainPage > .innerWrap .noticeBox > div:first-child > span {
  display:inline-block;
  background: #D6E1FE;
  width:270px;
  height:60px;
  padding:12px;
  margin-top:5px;
  box-sizing: border-box;
  border-radius: 5px 15px 15px 15px;
  font-size:1.4rem;
  color:#222;
}
#mainPage > .innerWrap .noticeBox.noResult:after {
  background-position: -700px -400px;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 {
  margin:10px 0 0 44px;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 > div {
  display:inline-block;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  background: #D6E1FE;
  border-radius: 5px 15px 15px 15px;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 > div:after {
  content: '';
  position: absolute;
  top: 12px;
  right: 15px;
  width: 60px;
  height: 50px;
  background:url('~@/assets/images/img_character_03.gif') no-repeat;
  background-size: 100% auto;
  /* background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -450px -600px;
  background-size: 1000px 1000px; */
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 .txtBox {
  padding:12px 78px 12px 12px;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 .txtBox h3 {
  font-size:1.4rem;
  font-weight:700;
  color:#222;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 .txtBox p {
  margin-top:10px;
  font-size:1.4rem;
  color:#222;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 .btnBox {
  background: #85A5FC;
  text-align: center;
  height:43px;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 .btnBox button {
  position: relative;
  width:100%;
  border:0 none;
  background:transparent;
  font-size:1.5rem;
  font-weight:700;
  color:#fff;
  height:100%;
}
#mainPage > .innerWrap .noticeBox.noResult .shortcutTop5 .btnBox button:after {
  content: '';
  position: absolute;
  top: 50%;
  right: calc(50% - 50px);
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -300px -400px;
  background-size: 1000px 1000px;
}
#mainPage > .innerWrap .resultBox {margin-top:10px;}
#mainPage > .innerWrap .resultBox,
#mainPage > .innerWrap .shortcutTop5 {
  opacity: 0;
  padding-top:5%;
  transition: opacity 0.3s, padding-top 0.3s;
}
#mainPage > .innerWrap .noticeBox.on .resultBox,
#mainPage > .innerWrap .noticeBox.noResult.on .shortcutTop5 {
  opacity:1;
  padding-top:0;
  transition-delay:0.45s;
}
#mainPage > .innerWrap .SearchTerm {
  text-align: right;
}
#mainPage > .innerWrap .SearchTerm > span {
  display: inline-block;
  padding:10px;
  font-size:1.4rem;
  color:#000;
  background: #f5d5eb;
  border-radius: 15px 5px 15px 15px;
  box-sizing: border-box;
  transform: translateX(calc(100% + 20px));
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1.5);
}
#mainPage > .innerWrap .SearchTerm.on > span {
  transform: translateX(0);
}

#loadingDimmed {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
#loadingDimmed:after {
  content:'';
  width:105px;
  height:18px;
  background: url('~@/assets/images/sp_index.png');
  background-position: -150px 0;
  background-size: 1000px 1000px;
}

#rotateDimmed {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(34, 34, 34, 0.9);
  z-index: 1500;
}
#rotateDimmed:after {
  content:'';
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width:532px;
  height:264px;
  background: url('~@/assets/images/sp_index.png');
  background-position: -1400px 0;
}

#errorDimmed {
  position: fixed;
  top:0;
  left:0;
  z-index: 3000;
  width:100%;
  height:100%;
  background: #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#errorDimmed .inner {
  width:77.77%;
}
#errorDimmed .inner .visual img {
  display:block;
  width:49.49%;
  width:148px;
  max-width:296px;
  margin:0 auto;
}
#errorDimmed .inner .text {
  margin-top: 21px;
}
#errorDimmed .inner .text h2 {
  font-size:1.8rem;
  font-weight:700;
  color:#222;
}
#errorDimmed .inner .text p {
  margin-top: 8px;
  font-size:1.4rem;
  font-weight:500;
  color:#333;
}
#errorDimmed .inner > .btn {
  width:236px;
  height:44px;
  margin-top: 51px;
  font-size:1.5rem;
  font-weight:700;
  color:#715DEF;
  border:1px solid #715DEF;
  border-radius: 22px;
  background:#fff;
}
#errorDimmed .inner > .btn span {
  display:inline-block;
  position: relative;
  padding-left:24px;
}
#errorDimmed .inner > .btn span:after {
  content:'';
  position: absolute;
  top:0;
  left:0;
  width:20px;
  height:20px;
  background: url('~@/assets/images/sp_index.png') no-repeat;
  background-position: -400px 0;
  background-size: 1000px 1000px;
}




</style>
