<template>
  <div class="bg-gray-100">
    <section class="container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-7 gap-4">
        <div class="col-span-3 text-center">
          <span class="text-xl text-black">Request <span class="font-bold">Instant Help</span></span>
          <div class="px-5 py-5 bg-white rounded-md mt-3 leftbox">
            <textarea class="form-textarea mt-1 block w-full rounded-md outline-none bg-gray-100 px-1 py-1 border-2 border-gray-200" rows="3" placeholder="How can we help? Describe the problem..."></textarea>
            <p class="text-left text-md mt-3 text-black">Use <a href="http://www.loom.com" target="_blank" class="text-blue-600">Loom.com</a> to easily screen record your question.</p>
            <input type="text" placeholder="Paste a link to your loom screen record...(optional)" class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
            <p class="text-left text-md mt-4 font-bold flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span>Attach File</span>
              <span class="files"></span>
            </p>
            <p class="text-left text-md mt-3 text-black">What kind of expert do you need?</p>
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
                <button class="mt-5 py-2 px-5 bg-yellow-600 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300">Request Instant Help</button>
            </div>
            
          </div>
        </div>
        <div class="col-span-4 text-center">
          <span class="text-xl text-black">Expert <span class="font-bold">Responses</span></span>
          <div v-for="item in options" :key="item"  class="px-5 py-3 bg-white rounded-md mt-3 rightbox">
            <div class="text-left text-md text-black flex items-center justify-between">
              <div>
                <span class="text-md font-bold">Super Dev</span>
                <span class="text-sm pl-2">5 minutes ago</span>
              </div>
              <div>
                <a class="text-sm text-blue-500 underline" href="https://www.loom.com" target="_blank">Loom link</a>
                <a class="text-sm pl-3 underline"  href="https://www.loom.com" target="_blank">2 Attached Files</a>
              </div>
              <div class="flex">
                <span class="text-sm font-bold text-green-500">Public</span>
                <span class="text-sm font-bold pl-2 flex cursor-pointer">
                  <span>Edit</span> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="text-sm text-black text-left">
              Hi. How are you everyone? Can you join zoom? Have a good day.
            </div>
            <vsa-list :init-active="false" :auto-collapse="true">
              <vsa-item>
                <vsa-heading class="">
                  <div class="text-left text-md mt-3 text-black w-full font-bold flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                    <span>Response</span>
                    <span class="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-yellow-500 rounded-full">2</span>
                  </div>
                </vsa-heading>
                <vsa-content>
                  <div class="w-full pl-4">
                    <div class="py-2">
                      <input type="text" placeholder="Write a response..." class="mt-1 px-1 py-1 focus:outline-none w-full rounded-md outline-none bg-gray-100 border-2 border-gray-200" />
                    </div>
                    <div class="flex justify-between items-center mt-2">
                      <div class="flex">
                        <img class="h-10 w-10 rounded-full mr-4" src="../assets/myphoto.jpg" alt="">
                        <div>
                          <p class="text-left">
                            <span class="text-sm font-bold text-black text-left">
                              Alexander Dev
                            </span>
                            <span class="pl-3 text-xs text-red-500">
                              Not a verified expert
                            </span>
                          </p>
                          <p class="text-sm text-black text-left">
                            Hello I know the solution, it is with javascript. Thanks.
                          </p>
                        </div>
                      </div>
                      <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex justify-between items-center mt-2 pt-2">
                      <div class="flex">
                        <img class="h-10 w-10 rounded-full mr-4" src="../assets/myphoto.jpg" alt="">
                        <div>
                          <p class="text-left">
                            <span class="text-sm font-bold text-black text-left">
                              Alexander Dev
                            </span>
                            <span class="pl-3 text-xs text-green-500">
                              Verified Expert
                            </span>
                          </p>
                          <p class="text-sm text-black text-left">
                            Hello I know the solution, it is with javascript. Thanks.
                          </p>
                        </div>
                      </div>
                      <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-1 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </vsa-content>
              </vsa-item>
            </vsa-list>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Multiselect from 'vue-multiselect'
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
} from 'vue-simple-accordion';
//import 'vue-simple-accordion/dist/vue-simple-accordion.css';
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
      checked: false
    }
  },

  created() {
    
  },
  methods:{
    
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
div.rightbox {
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 7px rgba(0, 0, 0, 0.06);
}
</style>
