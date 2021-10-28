<template>
  <div class="bg-gray-100 h-screen">
    <div class="grid grid-cols-10 gap-2">
      <div class="col-start-1 col-end-2 bg-white h-96 mt-4 mx-4 rounded-md" :class="is_shown?'hide_sidebar':''">
        <p class="cursor-pointer py-40 font-bold text-xl flex justify-center" @click="show">show</p>
      </div>
      <div class="col-start-1 col-end-3 bg-white h-96 mt-4 mx-4 rounded-md"  :class="is_shown?'':'hide_sidebar'" >
        <div class="flex justify-between cursor-pointer">
          <p class="font-bold text-lg px-2">Contacts</p>
          <p class="font-semibold text-base px-2" id="kk" @click="hide">Hide</p>
        </div>
        <div class="flex  mt-3 px-3 justify-between">
          <div class="flex">
            <img src="../assets/myphoto.jpg" alt="" class="rounded-full w-8">
            <p class="mx-2">SuperDev</p>
          </div>
          <p class="text-sm text-gray-300">10:16 PM</p>
        </div>
      </div>
      <div class="relative col-start-3 col-end-6 h-96 bg-white mt-4 rounded-md" :class="is_shown?'':'large_side'">
        <div class="flex justify-between mx-2 mt-1">
          <div>
            <p class="text-2xl font-semibold inline-block">Expert</p>
            <div class="w-2 h-2 bg-green-500 rounded-full inline-block mb-1 mx-2"></div>
          </div>
          <div class="flex mt-2">
            <div class="w-8 h-6 bg-gray-300 mx-2 flex justify-center rounded-md">
              <img src="../assets/CHAT.png" alt="" class="w-5">
            </div>
            <div class="w-8 h-6 bg-gray-300 flex justify-center rounded-md">
              <img src="../assets/PHONE.png" alt="" class="w-5">
            </div>
          </div>
        </div>
        <div>
           <div class="flex justify-center">
            <p class="text-gray-500 text-xs mx-10 mt-5">Lendon missed your call, please try again in a moment or wait for him to call back</p>
          </div>
          <div class="flex justify-center mt-4">
            <div class="w-40 h-8 border-2 border-gray-500 mx-2 rounded-md">
              <div class="flex justify-between">
                <p class="mx-2">Begin the Call</p>
                <img src="../assets/PHONE.png" alt="" class="w-4 mx-2">
              </div>
            </div>

            <div class="w-40 h-8 border-2 border-gray-500 mx-2 rounded-md">
              <div class="flex justify-between">
                <p class="mx-2">Begin the Chat</p>
                <img src="../assets/CHAT.png" alt="" class="w-4 mx-2">
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 flex mx-4 my-3">
          <input type="text" class="font-xs border-2 border-gray-300 w-full rounded-md h-16 bg-gray-100 focus:outline-none" placeholder="Call Lendon or begin Live Chatting to continue the conversation.">
          <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-90 mt-5 mx-3 h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      is_shown: true
    }
  },
  methods: {
    hide() {
      this.is_shown = false;
    },
    show() {
      this.is_shown = true;
    }
  }
}
</script>

<style>
  .hide_sidebar {
    display: none;
  }
  .large_side {
    grid-column-start: 2;
    grid-column-end: 6;
  }
  .show {
    visibility: visible;
  }
  .show_side {
    grid-column-start: 1;
    grid-column-end: 2;
    visibility: visible;
    margin-top: 150px;
    margin-left: 10px;
  }
</style>
