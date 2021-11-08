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
            <img src="../assets/avatar.jpg" alt="" class="rounded-full w-8">
            <p class="mx-2">{{receiver.firstname + " "+receiver.lastname}}</p>
          </div>
          <p class="text-sm text-gray-700">10:16 PM</p>
        </div>
        <div style="height:700px"></div>
      </div>
      <div class="col-start-3 col-end-6 bg-white mt-4 rounded-md" :class="is_shown?'':'large_side'">
        <div class="flex justify-between px-3 items-center pt-3">
          <div class="text-center">
            <span class="text-2xl font-bold text-center">{{receiver.firstname + " " + receiver.lastname}}</span>
          </div>
          <div class="flex justify-center items-center">
            <div class="cursor-pointer mr-4">
              <img src="../assets/CHAT.png" class="w-6" />
            </div>
            <div class="cursor-pointer justify-center items-center">
              <img src="../assets/PHONE.png" class="w-6" />
            </div>
          </div>
        </div>
        <div class="mt-3 flex items-center justify-start w-full px-2">
          <select class="text-center text-xs h-6 pl-2 pr-2 placeholder-gray-600 border rounded-lg">
            <option >I am service provider</option>
            <option>I am client</option>
          </select>
        </div>
        <div>
          <div class="flex justify-center">
            <p class="text-gray-500 text-sm mx-10 mt-5">Lendon missed your call, please try again in a moment or wait for him to call back</p>
          </div>
          <div class="flex justify-center mt-4">
            <div class="border-2 border-gray-500 mx-2 rounded-md cursor-pointer">
              <div class="flex justify-between px-4 py-1 items-center">
                <span class="pr-2 text-md">Begin the Call</span>
                <img src="../assets/PHONE.png" class="h-6" />
              </div>
            </div>

            <div class="border-2 border-gray-500 rounded-md cursor-pointer">
              <div class="flex justify-between px-4 py-1 items-center">
                <span class="pr-2 text-md">Begin the Chat</span>
                <img src="../assets/CHAT.png" class="h-6" />
              </div>
            </div>
          </div>
        </div>
        <div style="height:600px">
          <div v-for="item in messages" :key="item" class="w-8/12 mt-2 px-2 py-2 rounded-md" :class="item.type=='send'?'bg-yellow-200 float-right text-right':'bg-blue-200 float-left text-left'">
              {{ item.message }}
          </div>
        </div>
        <div class="flex mx-4 my-3 justify-between items-center">
          <input type="text" v-model="curMsg" v-on:keyup.enter="sendMsg" class="font-xs border-2 border-gray-300 w-full rounded-md h-10 bg-gray-100 focus:outline-none" placeholder="Call Lendon or begin Live Chatting to continue the conversation.">
          <img src="../assets/send.png" class="w-8 h-8" @click="sendMsg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      is_shown: true,
      messages: [],
      curMsg: "",
      receiver: "null",
      user: this.$store.state.localStorage.user,
      recv_id: this.$route.params.id,
      db:this.$fire.firestore
    }
  },
  async created() {
    console.log(this.recv_id);
    if(!this.user) this.$router.push("/login");
    this.receiver = await (await axios.get('http://localhost:3030/api/user/'+this.recv_id)).data.result;
    this.db.collection(this.user.id+"_"+this.recv_id).orderBy('id').onSnapshot((snapShot) => {
      this.messages = [];
      snapShot.forEach((doc) => {
        this.messages.push(doc.data())
      })
      return {
        
      }
    })
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
      let msg = {
        id: Date.now(),
        message: this.curMsg,
        type:"send"
      };
      this.db.collection(this.user.id+"_"+this.recv_id).add(msg);
      let msg1 = {
        id: Date.now(),
        message: this.curMsg,
        type:"recv"
      };
      this.db.collection(this.recv_id+"_"+this.user.id).add(msg1);
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
