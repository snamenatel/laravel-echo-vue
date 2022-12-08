<template>
  <div class="w-50 mx-1 border px-2">
    <div class="text-start">
        <h5>{{room}}</h5>
        <u>{{event}}</u>
    </div>
    <ul>
        <li v-for="(msg, idx) in messages" :key="idx">
            <code class="text-start"><pre>{{ msg }}</pre></code>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['room', 'event', 'private'],
    data() {
        return {
            messages: [],
        }
    },
    mounted() {
        const echo = window.Echo;

        if(this.private) {
            echo.private(this.room).listen(this.event, (e) => {
            this.messages.push(e)
            console.log(e);
        });
        } else {
            echo.channel(this.room).listen(this.event, (e) => {
            this.messages.push(e)
            console.log(e);
        });
        }
        
    }
}
</script>

<style>

</style>