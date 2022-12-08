<template>
    <div id="app">
      <div class="container">
            <div class="d-flex">
                <input type="text" class=" mx-2 form-control" placeholder="Room" v-model="current.room">
                <select type="text" class=" mx-2 form-control" placeholder="Event" v-model="current.event">
                    <option v-for="opt in evtOptions" :value="opt" :key="opt">{{opt}}</option>
                </select>
                <input type="checkbox" class="mx-1" v-model="current.private">
                <button class="btn btn-danger mx-2 " :disabled="disabelBtn"  @click="addRoom">ADD</button>
            </div>

            <div class="mb-12">
                <span class="badge bg-secondary mx-1" role="button" v-for="ch in channelsExemple" :key="ch" @click="addChannelExample(ch)">{{ ch }}</span>
            </div>
            <hr>
            <div class="d-flex flex-wrap">
                <Room v-for="room in rooms" :key="room.room + room.event" :room="room.room" :event="room.event" :private="room.private" ></Room>
            </div>
      </div>
    </div>
</template>

<script>
import Room from './components/Room.vue';

export default {
    components: { Room },
    name: "App",

    data() {
        return {
            current: {
                room: null,
                event: null,
                private: true,
            },
            rooms: [
                {
                    room: 'clients-329498',
                    event: '.App.Events.Clients.ProfileUpdated',
                    private: true,
                }
            ],
            evtOptions: [
                '.App.Events.Clients.ProfileUpdated',
                '.App.Events.Clients.AttributesUpdated',
                '.App.Events.Configuration.Comment.NewMessageReceived',
                '.App.Events.Task.Comment.NewMessageReceived',
                '.App.Events.Configuration.CommentList.Updated',
                '.App.Events.Task.CommentList.Updated'

            ],
            channelsExemple: [
                'clients-',
                'Configuration.Comment',
                'Task.Comment',
            ]
        };
    },
    computed: {
        disabelBtn() {
            return !this.current.room || !this.current.event;
        }
    },
    methods: {
        addRoom() {
            this.rooms.push({...this.current});
            this.current.room = null;
            this.current.event = null;
        },
        addChannelExample(text) {
            this.current.room = this.current.room ? this.current.room + text : text;
        }
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
