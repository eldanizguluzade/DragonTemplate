export const state = () => ({
    //Carousel Item List Start
    HomeCarousel:{
      // imgUrl:null,
      // fullPath:null,
      // fullUrl:null,
      // trailerUrl:null,   //Example :  'https://www.youtube.com/embed/gQG_2O9Bu6c?autoplay=1&controls=0'
      // name: null,
      // description: null,
  },
//Carousel Item List End

//Categeries Group Data Start
CategoriesGroup: {
  Movies: {
//      actionM: [
//        {
//       id: 1,
//       imgUrl: 'https://eskipaper.com/images/godzilla-wallpaper-9.jpg',
//       fullUrl:'',
//       trailerUrl:'https://player.vimeo.com/video/81523326',
//       imdbUrl:'',
//       imdbRating:'',
//       name: 'Godzilla',
//       description: "Facing the end of civilization when a terrifying plague strikes, a group risks their lives, loves — and humanity — in a brutal struggle to survive.",
//       categories: ['action', 'fantasy', 'adventure'],
//       type: 'M',
//       more: {
//         director: 'James Godzilla',
//         writer: 'Godzilla Cameron',
//         time: '1h 32min',
//       },
//       feedback: [{
//           id: 1,
//           like: 1,
//           dislike: 0,
//           mylist: false
//         },
//         {
//           id: 2,
//           like: 0,
//           dislike: 1,
//           mylist: true
//         }
//       ]
//     },
//   ]
  },
  Series: {
//       actionS:[
//       {
//       id: 1,
//       imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
//       fullUrl:'',
//       trailerUrl:'',
//       imdbUrl:'',
//       imdbRating:'',
//       name: 'Avatar 2012',
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       categories: ['action', 'fantasy', 'adventure'],
//       type: 'S',
//       more: {
//         director: 'James Cameron',
//         writer: 'James Cameron',
//         time: '2h 42min',
//       },
//       episodes:[
//         {
//           id: 1,
//           imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
//           fullUrl:'',
//           trailerUrl:'',
//           name: '1.Episodes Avatar 2020',
//           description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//           categories: ['action', 'fantasy', 'adventure'],
//           type: 'S',
//           more: {
//             director: 'James Cameron',
//             writer: 'James Cameron',
//             time: '2h 42min',
//           },
//         },
//       ],
//       feedback: [{
//           id: 1,
//           like: 1,
//           dislike: 0,
//           mylist: false
//         },
//         {
//           id: 2,
//           like: 1,
//           dislike: 0,
//           mylist: true
//         }
//       ]
//     },
  }
 }, 


//Lates For Movies Start   
  Latest_Items: [],
  latestMaxCount:8,  //top end-8 item
//Lates For Movies End

//User Selected Item For Modal Stuructor Start
Selected_Item: {
  id: null,
  imgUrl: null,
  fullUrl: null,
  trailerUrl: null,
  imdbUrl:null,
  imdbRating:null,
  name: null,
  description: null,
  categories: [],
  type: null,
  more: {
    director: null,
    writer: null,
    time: null,
  },
  episodes: [],
  feedback: [],
},
More_Item: [],
More_MovieCount: 10,
//User Selected Item For Modal Stuructor End
  

//Notification Start
 Notification:[
   // {
    //     id:1,
    //     imgUrl:null,
    //     fullPath:null,
    //     title:null,
    //     desc:null,
    //     isNew:false,   //true or false
    //     date:{
    //       time:'00:00',
    //       my:'00.00.0000'
    //     }        
    //   },
 ],
 //Easy Notification Control
 webNotification:[], //Latest For Web Notification
 resNotification:[],  //Latest For Responsive Notification
 webMaxCount:2,     // Web Max  Notification Count
 resMaxCount:1,    // Res Max  Notification Count
//Notification End


//User Account Start
User: {
  id: 1,
  imgUrl:null,
  mylist: [],
  searchlist: [],
  userActive:false,
  //settings:{},  //For Setting Active Block
},
//User Account End

//For Ui Start
likeBtn: false,
dislikeBtn: false,
TotalLike: 0,
TotalDislike: 0,
mylist: false,
resMenu: false,
resToogleBtn: false,
toggleHeadBG:true, //TOGGLE Background Head
//-------------------------
isModalM:false,
isModalS:false,
//------------------------


//Effect Active/Disable Control Start 
isHeadEffect:true,
//Effect Active/Disable Control End
//For Ui End

//For Search Start

//Easy Search Path Control Start
Paths:{
  home:'/',
  search:'/search',  
  watch:'/watch',
  movies:'/movies',
  series:'/series',
  mylist:'/mylist',
},

//Easy Search Path Control End

//For Search End

//Swiper Options BreakPoints Start
swiperOption: {
  slideToClickedSlide: true,
  slidesPerView: 2,
  spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
  breakpoints: {
    1400: {
      slidesPerView: 8,
      spaceBetween: 0
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 0
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  }
},
//Swiper Options BreakPoints End 

});

export const getters = {
    //Global GETTER Start**********************
    getPathInfo(state) {
      let Scategory = [];
      if (state.Selected_Item.type != null) {
        let type = {
          M: state.Selected_Item.type.toUpperCase(),
          S: state.Selected_Item.type.toUpperCase(),
        }

        if (type.M == 'M') {
          Scategory[0] = 'Movies';
        } else if (type.S == 'S') {
          Scategory[0] = 'Series';
        }
        Scategory[1] = state.Selected_Item.categories[0].toLowerCase() + state.Selected_Item.type.toUpperCase();

        let Selected_path = 'state.CategoriesGroup.' + Scategory[0] + '.' + Scategory[1];
        let Selected_id = state.Selected_Item.id;
        let Selected_findex = eval(Selected_path).findIndex(f => f.id === Selected_id);
        let User_id = state.User.id;
        let User_findex = eval(Selected_path)[Selected_findex].feedback.findIndex(f => f.id === User_id);
        let feedback_item = eval(Selected_path)[Selected_findex].feedback[User_findex];

        return {
          Selected_path,
          Selected_id,
          Selected_findex,
          User_id,
          User_findex,
          feedback_item
        };

      }
    },
    getRedirectUrl(state){
      let item=state.Selected_Item;
      let urlMap=null;
      
      if(item.id != null){
        urlMap=item.name.replace(/\s+/g, '-')+'-'+item.categories[0]+'-'+item.type+item.id;
        urlMap=urlMap.toLowerCase()
      }
       return urlMap;
    } , 
    getSwiperOption(state) {
      return state.swiperOption;
    },
    getSearchList(state) {
      return state.User.searchlist;
    },
    getLatest(state) {
      let latest=state.Latest_Items;
      let endTen=[];

      if(latest.length > state.latestMaxCount){
        for(let i=latest.length-1; (latest.length-state.latestMaxCount) <= i; i--)
          endTen.push(latest[i]);    

        return endTen;
       }
       return latest;
    },
    getMovies(state){
       return state.CategoriesGroup.Movies;
    },
    getSeries(state){
      return state.CategoriesGroup.Series;
    },
    getNotification(state){
      return state.Notification;
    },
    getWebNotification(state){
      return state.webNotification;
    },
    getResNotification(state){
      return state.resNotification;
    },
    getCheckBadge(state){
      let isNew=false;
       state.Notification.forEach((item) => {
         if(item.isNew){
           isNew=true;
         }
       });
       return isNew;
    },
    getResMenu(state) {
      return state.resMenu;
    },
    getResToogleBtn(state) {
      return state.resToogleBtn;
    },
    getUser(state){
      return state.User;
    },
    getUserPhoto(state){
        return (state.User.imgUrl == null || state.User.imgUrl.trim()=='') ? require('~/assets/img/default-profile.png') : state.User.imgUrl;
    },
    getIsModalM(state){
       return state.isModalM;
    }, 
    getIsModalS(state){
      return state.isModalS;
    }, 
    //Global GETTER End**********************

    //Path GETTER Start
    getPaths(state) {
      return state.Paths;
    },
    //Path GETTER End

    //GETTER MODAL Start**********************
    getLikeBtn(state) {
      return state.likeBtn;
    },
    getDislikeBtn(state) {
      return state.dislikeBtn;
    },
    getTotalLike(state) {
      return state.TotalLike;
    },
    getTotalDislike(state) {
      return state.TotalDislike;
    },
    getCheckMyList(state) {
      return state.mylist;
    },
    getTotalMyList(state) {
      return state.User.mylist;
    },
    getSelected(state) {
      return state.Selected_Item;
    },
    getMoreItem(state) {
      return state.More_Item;
    },
    //GETTER MODAL End**********************

    //Getters Only Home Start
    getEffectCheck(state){
       return state.isHeadEffect ? state.toggleHeadBG:false;
    },
    getHomeCarousel(state){
       return state.HomeCarousel;
    },
    getCarouselTrailer(state){
      let isLocal=true;
      let TrailerUrl=null;
      (state.HomeCarousel.trailerUrl == null || state.HomeCarousel.trailerUrl.trim()=='') ?  isLocal=true : isLocal=false;
        
      if(isLocal)
          TrailerUrl=require('~/assets/videos/default.mp4');     
      else
         TrailerUrl=state.HomeCarousel.trailerUrl;

       return {
         TrailerUrl,
         isLocal
        }  
    }
    //Getters Only Home End

    // More Properties Disable Start************

    // getUserSettings(state){
    //   return state.User.settings;
    // },

    // More Properties Disable End************     
};

export const mutations = {
  //Mutations Only Page Functions Start******************* 
  setMyList(state) {
     let mylist_items = [],
       checkmylist = null,
       count = 0;;

     for (let mainCat in state.CategoriesGroup) {

       for (let childCat in eval("state.CategoriesGroup." + mainCat)) {
         eval("state.CategoriesGroup." + mainCat + "." + childCat).forEach(item => {
           checkmylist = item.feedback[item.feedback.findIndex(f => f.id === state.User.id)];
           if (checkmylist.mylist) {
             mylist_items[count++] = item;
           }
         });
       }
     }
     state.User.mylist = mylist_items;
   },

   
   setSearch(state, word) {
     let search_item = [],
       search = null;
     for (let mainCat in state.CategoriesGroup) {

       for (let childCat in eval("state.CategoriesGroup." + mainCat)) {
         eval("state.CategoriesGroup." + mainCat + "." + childCat).forEach(item => {
           search = item.name;
           if (!search.toLowerCase().search(word.toLowerCase())) {
             search_item.push(item);
           }
         });
       }
     }
     state.User.searchlist = search_item;
   },

   setEffectCheck(state,effect){
        state.toggleHeadBG=effect;
   },
   //Mutations Only Page Functions End******************* 

   // Mutations Modal Function   Start******************************
   setSelected(state, item) {
     state.Selected_Item = item;
   },
   
   setLatest(state,item){
     // let IsDuplicate=true;
     if(state.Latest_Items.length != 0){
       state.Latest_Items.forEach((latest,index)=>{
        if(latest.id==item.id && latest.type == item.type){
          state.Latest_Items.splice(index,1);
          // IsDuplicate=false;

        }
     });
     }
   // if(IsDuplicate)
     state.Latest_Items.push(item);
      
   },


   setMoreItem(state, path) {
     let more_item = [];
     if (path.type.toUpperCase() == 'M') {
       eval(path.Selected_path).forEach((item, index) => {
         if (path.Selected_findex != index && index <= (state.More_MovieCount + 1))
           more_item.push(item);
       });
     } else if (path.type.toUpperCase() == 'S') {
       state.Selected_Item.episodes.forEach(item => {
         more_item.push(item);
       });
     }
     state.More_Item = more_item;
   },

   updateMyList(state,varInfo) {
    varInfo.feedback_item.mylist === true ? varInfo.feedback_item.mylist = false : varInfo.feedback_item.mylist = true;
  },

   checkLikeClass(state, feedback) {
     if (feedback != undefined) {
       feedback.like === 1 ? state.likeBtn = true : state.likeBtn = false;
       feedback.dislike === 1 ? state.dislikeBtn = true : state.dislikeBtn = false;
     } else {
       state.likeBtn = false;
       state.dislikeBtn = false;
     }
   },
   checkMyList(state, feedback) {
     state.mylist = feedback.mylist;
   },

   totalLike(state, path) {
     let likeCount = 0,
       dislikeCount = 0;

     if (path != undefined) {
       eval(path.Selected_path)[path.Selected_findex].feedback.forEach(item => {
         likeCount += item.like;
         dislikeCount += item.dislike;
       });
     }
     state.TotalLike = likeCount;
     state.TotalDislike = dislikeCount;
   },

    setIsModalM(state,bool){
      if(bool)
       state.isModalM=bool;  
     else
       state.isModalM=bool  
         
    },
    setIsModalS(state,bool){
     if(bool)
        state.isModalS=bool;
     else
      state.isModalS=bool
      
     
    },
    setFeedBack(state, varInfo) {
     if (varInfo.User_findex === -1) {
       switch (varInfo.Dlike) {
         case 1:
           eval(varInfo.Selected_path)[varInfo.Selected_findex].feedback.push({
             id: varInfo.User_id,
             like: 1,
             dislike: 0
           });
           break;
         default:
           eval(varInfo.Selected_path)[varInfo.Selected_findex].feedback.push({
             id: varInfo.User_id,
             like: 0,
             dislike: 1
           })
       }
     } else {
       switch (varInfo.Dlike) {
         case 1:
           if (state.likeBtn !== true) {
             varInfo.feedback_item.like = 1;
             varInfo.feedback_item.dislike = 0;
           } else {
             varInfo.feedback_item.like = 0;
           }
           break;

         default:
           if (state.dislikeBtn !== true) {
             varInfo.feedback_item.like = 0;
             varInfo.feedback_item.dislike = 1;
           } else {
             varInfo.feedback_item.dislike = 0;
           }
       }
     }
   },
   //--------------------------------------------------
   // Mutations Modal Function   End******************************

   //GLOBAL Mutations Function Start**********************
   setResMenu(state, isBool) {
     state.resMenu = isBool;
     //   state.resToogleBtn=!isBool;
   },
   setResToogleBtn(state) {
     state.resToogleBtn = !state.resToogleBtn;
   },
   updateNotification(state,choose){
     let notification=state.Notification;
     let length=state.Notification.length-1;
     let latest=[];
     let maxCount=0;
    
     choose.toUpperCase() == 'RES' ? maxCount=state.resMaxCount: maxCount=state.webMaxCount;
   
     if(length > 0){
     for(let i=length; length-(maxCount-1) <= i; i--)
       latest.push(notification[i]);
      }

     choose.toUpperCase() == 'RES' ? state.resNotification=latest:state.webNotification=latest;
     
   },
   updateNotifNew(state,{choose,index,isNew}){
     if(choose.toUpperCase()==='WEB')
       state.webNotification[index].isNew=isNew;
     else if(choose.toUpperCase()==='RES')
       state.resNotification[index].isNew=isNew;
   },
   //Server Get after For Set Function Start
   setHomeCarousel(state,item){
     state.HomeCarousel=item;
   },
   setCategories(state,item){
    state.CategoriesGroup=item;
   },
   setNotification(state,item){
    state.Notification=item;
   },
  //Server Get after For Set Function End
   //GLOBAL Mutations Function End**********************
};

export const actions = {
   //Fetch Firebase Start 
    nuxtServerInit({dispatch}) {
      if (process.client) {     
          dispatch("getServerCategories");
          dispatch("getServerNotification");
          dispatch("getServerCarousel");
      }
   },

   // postServerCategories({state}) {
   //   this.$axios.$post('CategoriesGroups.json', {...state.CategoriesGroup})
   //     .then(res => {
   //       console.log(res)
   //     })
   //     .catch(err => {
   //       console.error(err);
   //     })
   // },
   // postHomeCarousel({state}) {
   //   this.$axios.$post('HomeCarousel.json', {...state.HomeCarousel})
   //     .then(res => {
   //       console.log(res)
   //     })
   //     .catch(err => {
   //       console.error(err);
   //     })
   // },

// //---------------------------------------------------------------------------------------------
//       getServerImdb({state}) {             
//           for (let mainCat in state.CategoriesGroup) {
//             for (let childCat in eval("state.CategoriesGroup." + mainCat)) {
//               eval("state.CategoriesGroup." + mainCat + "." + childCat).forEach(item => {
//                this.$axios.$get('https://imdb-api.com/en/API/Title/k_ea9f60nc/'+item.imdbUrl)
//               .then(res => {
//                  item.title!=null ? item.imdbRating=res.imDbRating:false;       
//                  item.title!=null ? item.name=res.title:false;  
//                })
//                .catch(err => {
//                    console.error(err);
//                })
//              });
//            }
//           }
//       },
// //---------------------------------------------------------------------------------
   getServerNotification({commit,dispatch}) {
     this.$axios.$get('Notification.json')
       .then(res => {
         for (let key in res)       
           commit('setNotification',[...res[key]]);
       })
       .then(result=>{
         dispatch("updateNotificationA");   
       })
       .catch(err => {
           console.error(err);
       })
   },
   getServerCategories({commit}) {
     this.$axios.$get('CategoriesGroups.json')
       .then(res => {
         for (let key in res)       
          commit('setCategories',{...res[key]});
       })
       .catch(err => {
           console.error(err);
       })
   },
   getServerCarousel({commit}) {
     this.$axios.$get('HomeCarousel.json')
       .then(res => {
         for (let key in res)       
           commit('setHomeCarousel',{...res[key]});
       })
       .catch(err => {
           console.error(err);
       })
   },
   //Fetch Firebase End

   //Actions Only Pages  Main Functions  Start************
   MyList({commit}) {
     commit('setMyList');
   },

   SearchList({commit}, word) {
     commit('setSearch', word);
   },
   setEffectCheckA({commit},effect){
     commit('setEffectCheck',effect);
   },
   //Actions Only Pages  Main Functions  End************

   //Actions Globall Functions Start
   updateNotificationA({commit}){
      commit('updateNotification','RES');
      commit('updateNotification','WEB');

    }, 
   updateNotifNewA({commit},{choose,index,isNew}){
       commit('updateNotifNew',{choose,index,isNew});
   },
   //Actions Globall Functions End
   // Actions Modal Function   Start******************************
   updateLike({commit,getters}) {
     const varInfo = getters.getPathInfo;
     commit('checkLikeClass', varInfo.feedback_item);
     commit('totalLike', varInfo);
   },

   updateMyList({getters,commit}) {
     const varInfo = getters.getPathInfo;
     commit('checkMyList', varInfo.feedback_item);
   },

   addMyList({dispatch}) {
     dispatch('setMyListA');
     dispatch('updateMyList');
   },

   addLike({dispatch}) {
     dispatch('setFeedBackA', 1);
     dispatch('updateLike');
   },

   addDislike({dispatch}) {
     dispatch('setFeedBackA', 0);
     dispatch('updateLike');
   },
   setMyListA({commit,getters}) {
     let varInfo = getters.getPathInfo;
     commit('updateMyList',varInfo);
   },
   setSelectedA({commit},item){
     commit('setSelected',item);
   },
   setLatestA({commit},item){
      commit("setLatest",item);
   },
   setMoreItemA({getters,commit}, type) {
     let varInfo = getters.getPathInfo;
     commit('setMoreItem', {type,...varInfo});
   },
   setFeedBackA({commit,getters}, Dlike) {
     let varInfo = getters.getPathInfo;
     commit('setFeedBack',{...varInfo,Dlike});
   },
   // Actions Modal Function   End******************************
};