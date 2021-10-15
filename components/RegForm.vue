<template>
  <div class="bg-gray-100">
    <section class="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-7 gap-4 mt-10">
        <div class="col-start-3 col-span-3 text-center">
          <span class="text-xl text-black ">Sign up <span class="font-bold">LaserHelp</span></span>
          <div class="px-5 py-5 bg-white rounded-md mt-3 leftbox">
            
            <Notification :message="error" v-if="error"/>
              
              <p class="text-left text-md mt-3 text-black">FirstName</p>
              <input type="text" placeholder="Enter your username" name="firstname" v-model="firstname" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
              <p class="text-left text-md mt-3 text-black">LastName</p>
              <input type="text" placeholder="Enter your username" name="lastname" v-model="lastname" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
              <p class="text-left text-md mt-5 text-black">Email</p>
              <input type="email" placeholder="Enter your lastname" name="email" v-model="email" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
              <p class="text-left text-md mt-5 text-black">Password</p>
              <input type="password" placeholder="Enter your password" name="password" v-model="password" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
              <p class="text-left text-md mt-3 text-black">PhoneNumber</p>
              <input v-model="phone" type="number" placeholder="Enter your phonenumber" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
              <div class="flex justify-center items-center">
                  <button class="mt-5 py-2 px-5 bg-yellow-600 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300" @click="register">
                    Sign up
                  </button>
              </div>
              <p class="mt-5 text-center">
                You have already account? &nbsp;<a class="underline text-blue-500 cursor-pointer" href="/login"> Log In</a>
              </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Notification from './Notification.vue';
import axios from "axios";

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
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
      error: null
    }
  },

  created() {
    
  },
  methods:{
    async register() {
      try {
        const { data } = await axios.post('http://localhost:3030/api/signup', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          phone: this.phone
        }); 
        if(data.status) {
          document.location="/login";
        }else {
          alert("Sign up error!");
        }
      } catch (e) {
        console.log("YYYYYYYYYY");
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
