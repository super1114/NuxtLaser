<template>
  <div class="bg-gray-100">
    <section class="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-7 gap-4 mt-10">
        <div class="col-start-3 col-span-3 text-center">
          <span class="text-xl text-black ">Login to <span class="font-bold">LaserHelp</span></span>
          <div class="px-5 py-5 bg-white rounded-md mt-3 leftbox">
            <p class="text-left text-md mt-3 text-black">Email</p>
            <input type="email" placeholder="Enter your email" v-model="email" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
            <p class="text-left text-md mt-5 text-black">Password</p>
            <input type="password" placeholder="Enter your password" v-model="password" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
            <p class="mt-5 text-left">
              <input type="checkbox" id="checkbox" v-model="checked">
              <label for="checkbox" class="text-black">&nbsp; Remember me</label>
            </p>
            <div class="flex justify-center items-center">
                <button class="mt-5 py-2 px-5 bg-yellow-600 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300" @click="login">Login</button>
            </div>
            <p class="mt-5 text-center">
              Don't have account? &nbsp;<a class="underline text-blue-500 cursor-pointer" href="/signup"> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>

import axios from 'axios';
import Notification from './Notification.vue';


export default {
  name: 'InstantHelp1',
  components:{
    Notification,
},
  computed: {
    
  },
  data(){
    return {
      checked: false,
      email: '',
      password: ''
    }
  },

  created() {
    
  },
  methods:{
    async login() {
      const questionId = this.$store.state.localStorage.questionId;
      if(this.email==""||this.password=="") { alert("please enter your email or password"); return; }
      const { data } = await axios.post('http://localhost:3030/api/login', {
        email: this.email,
        password: this.password,
        questionId: questionId
      });
      if(data.status){
        this.$store.commit("localStorage/setUser", data.result);
        document.location = "/instanthelp";
      }else {
        alert("login failed");
      }
    }
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
button[disabled="disabled"]{
  cursor: not-allowed;
  opacity: 0.8;
}
button.vsa-item__trigger {
  width: 100%;
}
div.leftbox {
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06);
}

</style>
