<template>
    <v-container>
        <h1>login</h1>
        <UserAuthForm buttonText="Login" :submitForm="loginUser" />
    </v-container>
</template>
<script>
    import UserAuthForm from '../components/Authform'
    export default {
        components: {
            Authform
        },
        method: {
            loginUser() {
                alert('You press the button');
            }
        }
    }
</script>