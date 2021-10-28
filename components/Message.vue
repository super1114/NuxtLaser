<template>
  <div class="bg-gray-100 pb-10">
    <div class="grid grid-cols-10 gap-2">
      <div class="col-start-1 col-end-1 bg-white mt-4 mx-4 rounded-md" :class="is_shown?'hide_sidebar':''">
        <p class="cursor-pointer py-40 font-bold text-xl flex justify-center" @click="show">show</p>
      </div>
      <div class="col-start-1 col-end-3 bg-white mt-4 mx-4 rounded-md"  :class="is_shown?'':'hide_sidebar'" >
        <div class="flex justify-between cursor-pointer">
          <p class="font-bold text-lg px-2">Contacts</p>
          <p class="font-semibold text-base px-2" id="kk" @click="hide">Hide</p>
        </div>
        <div class="flex  mt-3 px-3 justify-between items-center bg-gray-200 cursor-pointer">
          <div class="flex items-center py-2">
            <img src="../assets/myphoto.jpg" alt="" class="rounded-full w-8">
            <p class="mx-2">Lendon Bracewell</p>
          </div>
          <p class="text-sm text-gray-700">10:16 PM</p>
        </div>
        <div style="height:700px"></div>
      </div>
      <div class="col-start-3 col-end-6 bg-white mt-4 rounded-md" :class="is_shown?'':'large_side'">
        <div class="flex justify-between mx-2 mt-1 items-center">
          <div>
            <p class="text-2xl font-semibold inline-block">Lendon Bracewell</p>
            <div class="w-2 h-2 bg-green-500 rounded-full inline-block mb-1 mx-2"></div>
          </div>
          <div class="text-gray-700">
            <select class="h-10 pl-3 pr-3 text-base placeholder-gray-600 border rounded-lg" placeholder="Regular input">
              <option>I am service provider</option>
              <option>I am client</option>
            </select>
          </div>
          <div class="flex">
            <div class="cursor-pointer mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <p class="text-gray-500 text-sm mx-10 mt-5">Lendon missed your call, please try again in a moment or wait for him to call back</p>
          </div>
          <div class="flex justify-center mt-4">
            <div class="border-2 border-gray-500 mx-2 rounded-md cursor-pointer">
              <div class="flex justify-between px-4 py-1 items-center">
                <span class="pr-2 font-bold text-md">Begin the Call</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                </svg>
              </div>
            </div>

            <div class="border-2 border-gray-500 rounded-md cursor-pointer">
              <div class="flex justify-between px-4 py-1 items-center">
                <span class="pr-2 font-bold text-md">Begin the Chat</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style="height:600px">
          <p v-for="item in messages" :key="item" class="text-right mt-2 px-4 py-2 ">
            <span class="bg-gray-400 px-4 py-2 rounded-md">
              {{item}}
            </span>
          </p>
        </div>
        <div class="flex mx-4 my-3">
          <input type="text" v-model="curMsg" class="font-xs border-2 border-gray-300 w-full rounded-md h-16 bg-gray-100 focus:outline-none" placeholder="Call Lendon or begin Live Chatting to continue the conversation.">
          <svg @click="sendMsg" xmlns="http://www.w3.org/2000/svg" class="transform rotate-90 mt-5 mx-3 h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
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
      is_shown: true,
      messages: [],
      curMsg: ""
    }
  },
  methods: {
    hide() {
      this.is_shown = false;
    },
    show() {
      this.is_shown = true;
    },
    sendMsg() {
      if(this.curMsg=="") return;
      this.messages.push(this.curMsg);
      this.curMsg = "";
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
