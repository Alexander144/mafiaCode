<template>
  <section class="container">
    <div>
      <h1 class="title">
      </h1>
      <input v-model="userInput" />
     <button @click="createUser">Create user</button>
    </div>
  </section>
</template>

<script>

export default {
  created(){
    this.$fireStore.collection('users').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added' ){
          this.users.push(change.doc.id)
        }
      });
    })
  },
  mounted(){
    if(localStorage.name){
      this.$router.replace({ path: 'user' });
    }
  },
  data(){
    return{
      users: [],
      userInput: '',
    }
  },
  components: {
  },
  methods:{
    async createUser(){
      if(!this.users.includes(this.userInput)){
       const messageRef = this.$fireStore.collection('users').doc(this.userInput)
        try {
          await messageRef.set({
            dead: false,
            position: "Human"
          })
        } catch (e) {
        alert(e)
        return
        }
        alert('Success.');
        localStorage.name = this.userInput;
        this.$router.replace({ path: 'user' });
      }
      else{
        alert("User is already taken");
      }
    },

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

