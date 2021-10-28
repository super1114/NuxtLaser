<<<<<<< HEAD
<template>
    <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-18">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="block lg:hidden h-8 w-auto" src="/_nuxt/assets/logo.png" alt="Workflow">
                        <img class="hidden lg:block h-12 w-auto" src="../assets/logo.png" alt="Workflow">
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4 float-right">
                            <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
                                <a class="navbar-link">
                                {{ loggedInUser.username }}
                                </a>
                                <div class="navbar-dropdown">
                                    <a href="/" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='instanthelp'?'active_menu':''">GET INSTANT HELP</a>
                                    <a href="/helpclients" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='helpclients'?'active_menu':''">HELP CLIENTS</a>
                                    <hr class="navbar-divider"/>
                                    <a class="navbar-item">Logout</a>
                                </div>
                            </div>
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="/" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='instanthelp'?'active_menu':''">GET INSTANT HELP</a>

                            <a href="/helpclients" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='helpclients'?'active_menu':''">HELP CLIENTS</a>
                            <a href="/login" class="text-black px-3 py-5 text-md" :class="activeClass=='login'?'active_menu':''"><span class="font-bold">Login</span> &nbsp;or&nbsp; <span class="font-bold">Signup</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">GET INSTANT HELP</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">HELP CLIENTS</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">LOGIN or SIGNUP</a>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthencated', 'loggidInUser'])
    },
    data(){
        return {
            isAuthenticated:false,
        }
    },
    name:"LoginForm",
    props:{
        activeClass:String
    }
}
</script>


<style>
    a.active_menu  {
        border-bottom: 2px solid rgba(245, 158, 11, var(--tw-border-opacity));
    }
</style>
=======
<template>
    <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                    <div class="flex-shrink-0 flex items-center">
                        <img class="block lg:hidden h-8 w-auto" src="/_nuxt/assets/logo.png" alt="Workflow">
                        <img class="hidden lg:block h-12 w-auto" src="../assets/logo.png" alt="Workflow">
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4 float-right">
                            <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
                                <a class="navbar-link">
                                {{ loggedInUser.username }}
                                </a>
                                <div class="navbar-dropdown">
                                    <a href="/" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='instanthelp'?'active_menu':''">GET INSTANT HELP</a>
                                    <a href="/helpclients" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='helpclients'?'active_menu':''">HELP CLIENTS</a>
                                    <hr class="navbar-divider"/>
                                    <a class="navbar-item">Logout</a>
                                </div>
                            </div>
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="/" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='instanthelp'?'active_menu':''">GET INSTANT HELP</a>

                            <a href="/helpclients" class="text-black px-3 py-5 text-md font-bold" :class="activeClass=='helpclients'?'active_menu':''">HELP CLIENTS</a>
                            <a href="/login" class="text-black px-3 py-5 text-md" :class="activeClass=='login'?'active_menu':''"><span class="font-bold">Login</span> &nbsp;or&nbsp; <span class="font-bold">Signup</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">GET INSTANT HELP</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">HELP CLIENTS</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">LOGIN or SIGNUP</a>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthencated', 'loggidInUser'])
    },
    data(){
        return {
            isAuthenticated:false,
        }
    },
    name:"Header1",
    props:{
        activeClass:String
    }
}
</script>


<style>
    a.active_menu  {
        border-bottom: 2px solid rgba(245, 158, 11, var(--tw-border-opacity));
    }
</style>
>>>>>>> 3bfb656781c8021feac0077865631cb82ca04550
