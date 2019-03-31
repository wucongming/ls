import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/app'
import Course from './modules/course'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
     App,
     Course
    }
});


export default store