<template>
    <div>
        <Header activeClass='message' />
        <Message />
    </div>
</template>

<script>
import Header from "../components/Header"
import Message from "../components/Message"


export default {
    components: {
        Header: Header,
        Message: Message
    }
}
</script>


<style>

</style>
