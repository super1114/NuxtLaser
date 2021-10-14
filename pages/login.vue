<template>
    <div>
        <Header1 activeClass="login" />
        <LoginForm />
    </div>
</template>

<script>
import Header1 from "../components/Header1"
import LoginForm from "../components/LoginForm"
export default {
    components: {
        Header1,
        LoginForm
    }
}
</script>


<style>

</style>