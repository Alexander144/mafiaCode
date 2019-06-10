const store = {
   state(){
       return {
        users:''
       }
   },
   mutations: {

   },
   actions: {

   },
   getters:{
    getUsers: state => {
        state.users = "lol"
        return state.users;
    }
   }
};

export default store;