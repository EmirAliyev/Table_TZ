<template>
  <div class="myInputBox__wrapper">
    <input @keyup="sendData" v-model="inputValue" class="input" type="text" placeholder="Поиск ФИО, IP, Email" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  data() {
    return {
      inputValue: "",
    };
  },
  methods:{
   sendData(){
   this.$emit('newData', this.filteredUsers,this.inputValue)
   }
  },
  mounted() {},
  computed: {
    filteredUsers() {
      return this.$store.getters.allUsers.filter((user) => {
        let name = user.first_name
          .toLowerCase()
          .includes(this.inputValue.toLowerCase());
        let surname = user.last_name
          .toLowerCase()
          .includes(this.inputValue.toLowerCase());
        let nameSurname = (
          user.first_name.toLowerCase() +
          " " +
          user.last_name.toLowerCase()
        ).includes(this.inputValue.toLowerCase());
        let email = user.email.toLowerCase().includes(this.inputValue.toLowerCase())
        let ip =  user.ip_address.includes(this.inputValue)
        return name || surname || nameSurname || email || ip;
      });
    },
  },
};
</script>
<style scoped>
input {
  position: relative;
  border: 1px solid black;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  width: 30rem;
  left: 50%;
  top: 5rem;
  transform: translateX(-50%);
  font-size: 1.8rem;
}
</style>
