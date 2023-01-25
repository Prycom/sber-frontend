import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            content: Object
        }
    },
    mutations: {
        contentSet(state, payload){
            state.content = payload;
        }
    }
})

export default store;