<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>Vue 연습</div>
  <nav>
    <ul>
      <li v-for="i in links" :key="i">
        <a href="#">{{ i }}</a>
      </li>
    </ul>
  </nav>
  <h3 :style="styles">{{ titles[1] }}</h3>
  <p v-text="titleText"></p>
  <button @click="like++">좋아요</button><span>&nbsp;{{ like }}</span>
  <br />
  <button @click="increase">좋아요</button><span>&nbsp;{{ like2 }}</span>
  <br />
  <button @click="openModal = true">Modal open</button>
  <div class="black_bg" v-show="openModal">
    <div class="modal">
      <h3>모달창입니다.</h3>
      <button @click="openModal = false">닫기</button>
    </div>
  </div>
  <div>
    <a :href="url">Vue</a><br />
    <input :type="type1" />
    <input :type="type2" />
    <input type="password" /><br />
    <p :class="class1">Class 지정</p>
    <p :class="[class1, class2]">Multi Class 지정</p>
    <p :class="{ test1: isOn }" @click="isOn = false">Class on/off</p>
  </div>
  <div>
    <h3>input v-model</h3>
    <input v-model="inputModel" placeholder="이름" />
    <p>input model: {{ inputModel }}</p>
    <input v-model.lazy="inputModel2" placeholder="별명" />
    <p>input model2: {{ inputModel2 }}</p>
    <label>
      <input type="checkbox" v-model="checkboxModel" value="동의" />
      동의하기
    </label>
    <p>checkboxModel: {{ checkboxModel }}</p>
    <input type="checkbox" v-model="checkboxModel2" value="독서" />
    <input type="checkbox" v-model="checkboxModel2" value="음악" />
    <p>checkboxModel2: {{ checkboxModel2 }}</p>
    <input type="radio" v-model="radioModel" value="tab1" />
    <input type="radio" v-model="radioModel" value="tab2" />
    <input type="radio" v-model="radioModel" value="tab3" />
    <p>radioModel: {{ radioModel }}</p>
  </div>
  <div>
    <h3>데이터 변화 감지</h3>
    <input v-model.number="price" type="number" />원 x
    <input v-model.number="count" type="number" />개
    <p>합계 : {{ sum }}원</p>
    <p>세금포함 : {{ taxIncluded }}원</p>
  </div>
  <div>
    <!-- <myComp1></myComp1>
    <myComp1></myComp1>
    <myComp1></myComp1> -->
    <myComp>component slot test</myComp>
    <myComp>slot2 area texttest</myComp>
  </div>
</template>

<script>
/* let Component1 = {
  template: `<p class="comptest">p-comp</p>`,
}; */
import myComp from "./components/myComponent.vue";

export default {
  name: "App",
  methods: {
    increase() {
      this.like2 += 2;
    },
  },
  data() {
    return {
      links: ["파일", "편집", "선택영역", "보기"],
      titles: ["React", "Vue", "Angular"],
      titleText: "Hello Vue",
      styles: "color: red; font-size: 30px; ",
      like: 0,
      like2: 0,
      openModal: false,
      url: "https://vuejs.org",
      type1: "radio",
      type2: "text",
      class1: "test1",
      class2: "test2",
      isOn: true,
      inputModel: "",
      inputModel2: "",
      checkboxModel: false,
      checkboxModel2: [],
      radioModel: [],
      price: 1000,
      count: 1,
    };
  },
  computed: {
    sum: function () {
      return this.price * this.count;
    },
    taxIncluded: function () {
      return this.sum * 1.08;
    },
  },
  components: {
    /* myComp1: Component1, */
    myComp,
  },
};
</script>

<style>
nav,
ul,
li {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav > ul {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.black_bg {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
.black_bg > .modal {
  padding: 20px;
  background: #fff;
  border-radius: 7px;
  font-size: 36px;
}
.test1 {
  background: #39c;
}
.test2 {
  color: #fff;
  font-weight: bold;
}
/* .comptest {
  padding: 5px 10px;
  border-bottom: 1px solid #363;
} */
</style>
