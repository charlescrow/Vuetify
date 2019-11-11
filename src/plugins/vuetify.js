import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
        values:{
            usuario:'fa fa-crow',
            back:'fa fa-angle-double-left'
        }
    },
});
