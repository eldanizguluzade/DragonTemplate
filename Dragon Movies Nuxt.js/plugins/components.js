import Vue from 'vue'

/* Header */
import headerNav from '@/components/Header/Nav'
import notification from '@/components/Header/Notification'
import headerProfile from '@/components/Header/Profile'

Vue.component('headerNav',headerNav);
Vue.component('notification',notification);
Vue.component('headerProfile',headerProfile);

/* Main */
import homeCarousel from '@/components/Main/HomeCarousel'
import homeCategories from '@/components/Main/HomeCategories'

Vue.component('homeCarousel',homeCarousel);
Vue.component('homeCategories',homeCategories);


/* Global */
import loadingBar from '@/components/Globall/loading-bar'
import resMenu from '@/components/Globall/res-menu'
import oneTemplate from '@/components/Globall/one-template'
import modalTemplateM from '@/components/Globall/modal-templateM'
import modalTemplateS from '@/components/Globall/modal-templateS'
import moreItem from '@/components/Globall/more-item'
import StarRating5 from '@/components/Globall/star-rating-5'
import NotFound from '@/components/Globall/Error/not-found'

Vue.component('resMenu',resMenu);
Vue.component('oneTemplate',oneTemplate);
Vue.component('modalTemplateM',modalTemplateM);
Vue.component('modalTemplateS',modalTemplateS);
Vue.component('loadingBar',loadingBar);
Vue.component('moreItem',moreItem);
Vue.component('StarRating5',StarRating5);
Vue.component('NotFound',NotFound);

/* Categories List */
import latest from '@/components/Main/Categories-List/Latest'
import movies from '@/components/Main/Categories-List/Movies'
import series from '@/components/Main/Categories-List/Series'
Vue.component('latest',latest);
Vue.component('movies',movies);
Vue.component('series',series);