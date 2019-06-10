<template>
  <section class="container">
    <div>
      <h1 class="title">
         USER
      </h1>
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
  data(){
    return{
        users:[]
    }
  },
  components: {
  },
  methods:{
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

