<template>
  <div class="bg-gray-100">
    <section class="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-7 gap-4 mt-10">
        <div class="col-start-3 col-span-3 text-center">
          <span class="text-xl text-black ">Request <span class="font-bold">Instant Help</span></span>
          <div class="px-5 py-5 bg-white rounded-md mt-3 leftbox">
              <!-- <input type="file" ref="file" style="display:none" @change="fileChange" /> -->
              <textarea class="form-textarea mt-1 block w-full rounded-md outline-none bg-gray-100 px-1 py-1 border-2 border-gray-200" rows="3" placeholder="How can we help? Describe the problem..." v-model="question"></textarea>
              <p class="text-left text-md mt-3 text-black">Use <a href="http://www.loom.com" target="_blank" class="text-blue-600">Loom.com</a> to easily screen record your question.</p>
              <input type="text" v-model="loom" placeholder="Paste a link to your loom screen record...(optional)" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
              <div class="mt-4 flex items-center justify-between">
                <div class="text-left text-md font-bold flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />  
                  </svg>
                  <label>Attach File
                    <input style="display: none" type="file" id="file" ref="file" @change="handleFileUpload"/>
                  </label>
                </div>
                <div>
                  <span class="float-right font-bold">{{ filename }}</span>
                </div>
              </div> 
              <input type="text" name="categories" id="categories" style="display: none;">
              <p class="text-left text-md mt-3 text-black">What kind of software expert do you need?</p>
              <p class="mt-1 text-left">
                <multiselect
                  v-model="selected"
                  :options="options"
                  :multiple="true">
                </multiselect>
              </p>
              <p class="mt-2 text-left">
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox" class="text-black"> Make this post to reach more experts.</label>
              </p>
              <div class="flex justify-center items-center">
                  <button class="mt-5 py-2 px-5 bg-yellow-600 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300" @click="submitQuestion">Request Instant Help</button>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import axios from 'axios'

import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
} from 'vue-simple-accordion';
export default {
  name: 'InstantHelp',
  components:{
    Multiselect,
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent
  },
  computed: {
   
  },
  data(){
    return {
      selected: null,
      options: ['After Effect', 'Video Editing', '3DMAX', 'Video Studio', 'Programming'],
      checked: false,
      question: '',
      loom: '',
      file: {},
      filename: ""
    }
  },

  created() {
  },
  methods:{
    async submitQuestion() {
      let formdata = new FormData();
      formdata.append("loom", this.loom);
      formdata.append("question", this.question);
      formdata.append("file", this.file);
      formdata.append("category", this.selected?this.selected.toString():"");
      formdata.append("public", this.checked);
      formdata.append("user_id", 0);
      if(this.question=="") { alert("Please enter the question content!"); return; } 
      const { data } = await axios.post('http://localhost:3030/api/submit_question', 
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }); 
      if(data.status) {
        this.$store.commit("localStorage/setQuestionId", data.questionId);
        document.location="/login";
      }else {
        alert("Request Help failed");
      }
    },
    async handleFileUpload(){
      this.file = this.$refs.file.files[0];
      this.filename= this.file.name;
    },
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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

.multiselect__option--highlight {
    background: rgba(217, 119, 6, var(--tw-bg-opacity));
    outline: none;
    color: #fff;
}
.multiselect__option--highlight:after {
  background: rgba(217, 119, 6, var(--tw-bg-opacity));
  outline: none;
  color: #fff;
}

.multiselect__tag {
    background: rgba(217, 119, 6, var(--tw-bg-opacity));
    outline: none;
    color: #fff;
}
.multiselect__tag-icon:after {
    content: "\D7";
    background: rgba(217, 119, 6, var(--tw-bg-opacity));
    color: white;
    font-size: 14px;
}
.multiselect__tag-icon:hover {
    content: "\D7";
    background: rgba(217, 119, 6, var(--tw-bg-opacity));
    color: white;
    font-size: 14px;
}
</style>
