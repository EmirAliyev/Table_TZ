<template>
  <div id="app">
    <div @click="sortMode = !sortMode" class="sort_block">
      <div class="title">Сортировать</div>
    </div>
    <div @click="sortByMen" class="selection" v-if="sortMode">Мужчины</div>
    <div @click="sortByWomen" class="selection" v-if="sortMode">Женщины</div>
    <div @click="withoutSort" class="selection" v-if="sortMode">
      Без сортировки
    </div>
    <MyInput @newData="changeData"></MyInput>
    <div class="main__Wrapper">
      <MainLayer></MainLayer>
      <UserLayer v-if="dataMode" :sortedMass="newMass"></UserLayer>
      <UserLayer v-else :sortedMass="sortedMass"></UserLayer>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MainLayer from "@/components/MainLayer.vue";
import UserLayer from "@/components/UserLayer.vue";
import MyInput from "@/UI/MyInput.vue";
export default {
  name: "App",
  components: {
    MainLayer,
    UserLayer,
    MyInput,
  },
  data() {
    return {
      standart: true,
      men: false,
      women: false,
      sortMode: false,
      newMass: [],
      dataMode: false,
    };
  },
  methods: {
    ...mapActions(["loadAllData"]),
    withoutSort() {
      (this.standart = true), (this.maxLikes = false), (this.minLikes = false);
      this.loadAllData();
    },
    sortByMen() {
      (this.standart = false), (this.men = true), (this.women = false);
      this.$store.state.allUsers = this.allUsers_g.filter(
        (user) => user.gender == "Male"
      );
    },
    sortByWomen() {
      (this.standart = false), (this.men = false), (this.women = true);
      this.$store.state.allUsers = this.allUsers_g.filter(
        (user) => user.gender == "Female"
      );
    },
    changeData(filteredUsers, inputValue) {
      if (inputValue.length == 0 || filteredUsers.length == 1000) {
        this.newMass = [];
        this.dataMode = false;
      } else {
        this.newMass = filteredUsers;
        this.dataMode = true;
      }
    },
  },
  computed: {
    ...mapGetters(["alphabet_g", "users_g", "allUsers_g"]),
    sortedMass() {
      if (this.standart) {
        return this.alphabet_g;
      } else if (this.men) {
        return this.users_g.filter((user) => user.gender == "Male");
      } else {
        return this.users_g.filter((user) => user.gender == "Female");
      }
    },
  },
  mounted() {
    this.loadAllData();
  },
};
</script>

<style>
.main__Wrapper {
  position: relative;
  top: 32rem;
  left: 50%;
  width: 133rem;
  height: 28rem;
  transform: translateX(-50%);
  box-shadow: 0 0 0.3rem 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.sort_block {
  max-height: 30rem;
  min-height: 4rem;
  flex-direction: column;
  display: flex;
  font-size: 2rem;
  margin: auto;
  margin-top: 2rem;
  background: rgb(48, 47, 47);
  width: 20rem;
  border-radius: 0.3rem;
  justify-content: center;
  color: white;
  box-shadow: 0rem 0rem 0.2rem 0.1rem;
  cursor: pointer;
}
.title {
  text-align: center;
}
.selection {
  max-height: 15rem;
  min-height: 4rem;
  width: 20rem;
  border-radius: 0.3rem;
  margin: auto;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(48, 47, 47);
  border-top: 0.1rem solid black;
  color: white;
  box-shadow: 0rem 0rem 0.2rem 0.1rem;
}
.sort_block:hover {
  background: rgb(214, 211, 211);
  color: black;
  transform: scale(1.05);
}
.selection:hover {
  background: rgb(214, 211, 211);
  color: black;
  transform: scale(1.05);
}
* {
  padding: 0;
  margin: 0;
  border: 0;
}

html {
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
