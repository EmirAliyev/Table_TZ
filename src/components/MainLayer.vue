<template>
  <div class="main__layer_wrapper">
    <div class="info__wrapper">
      <CheckBox></CheckBox>
      <div>Name</div>
      <div>Last name</div>
      <div>IP adress</div>
      <div>Gender</div>
    </div>
  </div>
</template>
<script>
import CheckBox from "@/UI/CheckBox.vue";
export default {
  name: "MainLayer",
  components: {
    CheckBox,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main__layer_wrapper {
  width: 133rem;
  height: 4rem;
  background: #f5f5f5;
}
.info__wrapper {
  display: flex;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.9rem;
  justify-content: space-between;
  padding-right: 2rem;
}
.info__wrapper > div:not(:first-child) {
  width: 100%;
}
.info__wrapper > div:not(:last-child) {
  margin-right: 1rem;
}
.info__wrapper > div {
  height: 4rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
</style>
