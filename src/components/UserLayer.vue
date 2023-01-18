<template>
  <div class="user__layout_wrapper">
    <div
      class="user_information"
      v-for="user in sortedMass"
      :key="user.id"
    >
      <CheckBox class="box_users"></CheckBox>
      <div>{{ user.first_name }} {{ user.id }}</div>
      <div>{{ user.last_name }}</div>
      <div>{{ user.ip_address }}</div>
      <div>{{ user.gender }}</div>
    </div>
    <div ref="observer" class="observer"></div>
  </div>
</template>
<script>
import CheckBox from "@/UI/CheckBox.vue";
export default {
  name: "UserLayout",
  components: {
    CheckBox,
  },
  props:{
   sortedMass:Array,
  },
  data() {
    return {
    };
  },
  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
         this.$store.dispatch('loadData')
          }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  computed:{

  }
};
</script>

<style scoped>
.box_users {
  padding: 2.3rem 2rem;
}
.user_information {
  display: flex;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.9rem;
  justify-content: space-between;
  padding-right: 2rem;
}

.user_information > div:not(:first-child) {
  width: 100%;
}
.user_information > div:not(:last-child) {
  margin-right: 1rem;
}
.user_information > div {
  height: 6rem;
  display: flex;
  align-items: center;
}
.observer {
  background: green;
}
</style>
