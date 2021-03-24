import Vuex from 'vuex'


const createStore = () => {
  return new Vuex.Store({
    state: {
      //Categeries Group Data Start
      CategoriesGroup: {
        Movies: {
          actionM: [{
              id: 1,
              imgUrl: 'https://eskipaper.com/images/godzilla-wallpaper-9.jpg',
              fullUrl:'',
              trailerUrl:'https://player.vimeo.com/video/81523326',
              name: 'Godzilla',
              description: "Facing the end of civilization when a terrifying plague strikes, a group risks their lives, loves — and humanity — in a brutal struggle to survive.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Godzilla',
                writer: 'Godzilla Cameron',
                time: '1h 32min',
              },
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: false
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true
                }
              ]
            },
            {
              id: 2,
              imgUrl: 'https://i.ytimg.com/vi/pU8-7BX9uxs/maxresdefault.jpg',
              fullUrl:'',
              trailerUrl:'https://player.vimeo.com/video/182372307',
              name: 'Jhon Wick',
              description: "Facing the end of civilization when a terrifying plague strikes, a group risks their lives, loves — and humanity — in a brutal struggle to survive.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '3h 2min',
              },
              feedback: [{
                  id: 1,
                  like: 0,
                  dislike: 1,
                  mylist: false,
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: false,
                }
              ]
            },
            {
              id: 3,
              imgUrl: 'https://im.haberturk.com/2020/05/23/ver1590187344/2688938_1920x1080.jpg',
              fullUrl:'',
              trailerUrl:'https://player.vimeo.com/video/6206074',
              name: 'Avatar 2009',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Avatar',
                writer: 'Avatar Cameron',
                time: '2h 42min',
              },
              feedback: [{
                  id: 1,
                  like: 0,
                  dislike: 0,
                  mylist: true,
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true,
                }
              ]
            },
            {
              id: 4,
              imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2012',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '2h 42min',
              },
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: false
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true
                }
              ]
            },
            {
              id: 5,
              imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2012',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '2h 42min',
              },
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: false
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true
                }
              ]
            },
            {
              id: 6,
              imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2012',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '2h 42min',
              },
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: false
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true
                }
              ]
            },
            {
              id: 7,
              imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2012',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '2h 42min',
              },
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: true
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true
                }
              ]
            },
            {
              id: 8,
              imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2012',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'M',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '2h 42min',
              },
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: false
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true
                }
              ]
            }
          ],
        },
        Series: {
          actionS:[
            {
              id: 1,
              imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2012',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'S',
              more: {
                director: 'James Cameron',
                writer: 'James Cameron',
                time: '2h 42min',
              },
              episodes:[
                {
                  id: 1,
                  imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
                  fullUrl:'',
                  trailerUrl:'',
                  name: '1.Episodes Avatar 2020',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  categories: ['action', 'fantasy', 'adventure'],
                  type: 'S',
                  more: {
                    director: 'James Cameron',
                    writer: 'James Cameron',
                    time: '2h 42min',
                  },
                  feedback: [{
                      id: 1,
                      like: 1,
                      dislike: 0,
                      mylist: false
                    },
                    {
                      id: 2,
                      like: 1,
                      dislike: 0,
                      mylist: true
                    }
                  ]
                },
              ],
              feedback: [{
                  id: 1,
                  like: 1,
                  dislike: 0,
                  mylist: false
                },
                {
                  id: 2,
                  like: 1,
                  dislike: 0,
                  mylist: true
                }
              ]
            },
            {
              id: 2,
              imgUrl: 'https://www.indirin.co/wp-content/uploads/2020/04/la-casa-de-papel-4sezon-turkce-indir-min.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'La Casa De Papel',
              description: "Facing the end of civilization when a terrifying plague strikes, a group risks their lives, loves — and humanity — in a brutal struggle to survive.",
              categories: ['action', 'horor', 'adventure'],
              type: 'S',
              more: {
                director: 'Malik Kamal',
                writer: 'Malik Kamal',
                time: '40min',
              },
              episodes:[
                {
                  id: 1,
                  imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
                  fullUrl:'',
                  trailerUrl:'',
                  name: '1.Episodes Avatar 2020',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  categories: ['action', 'fantasy', 'adventure'],
                  type: 'S',
                  more: {
                    director: 'James Cameron',
                    writer: 'James Cameron',
                    time: '2h 42min',
                  },
                  feedback: [{
                      id: 1,
                      like: 1,
                      dislike: 0,
                      mylist: false
                    },
                    {
                      id: 2,
                      like: 1,
                      dislike: 0,
                      mylist: true
                    }
                  ]
                },
                {
                  id: 2,
                  imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
                  fullUrl:'',
                  trailerUrl:'',
                  name: '2.Episodes Avatar 2021',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  categories: ['action', 'fantasy', 'adventure'],
                  type: 'S',
                  more: {
                    director: 'James Cameron',
                    writer: 'James Cameron',
                    time: '2h 42min',
                  },
                  feedback: [{
                      id: 1,
                      like: 1,
                      dislike: 0,
                      mylist: false
                    },
                    {
                      id: 2,
                      like: 1,
                      dislike: 0,
                      mylist: true
                    }
                  ]
                },
              ],
              feedback: [{
                  id: 1,
                  like: 0,
                  dislike: 1,
                  mylist: false,
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: false,
                }
              ]
            },
            {
              id: 3,
              imgUrl: 'https://im.haberturk.com/2020/05/23/ver1590187344/2688938_1920x1080.jpg',
              fullUrl:'',
              trailerUrl:'',
              name: 'Avatar 2009',
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              categories: ['action', 'fantasy', 'adventure'],
              type: 'S',
              more: {
                director: 'James Avatar',
                writer: 'Avatar Cameron',
                time: '2h 42min',
              },
              episodes:[
                {
                  id: 1,
                  imgUrl: 'https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg',
                  fullUrl:'',
                  trailerUrl:'',
                  name: '1.Episodes Avatar 2020',
                  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                  categories: ['action', 'fantasy', 'adventure'],
                  type: 'S',
                  more: {
                    director: 'James Cameron',
                    writer: 'James Cameron',
                    time: '2h 42min',
                  },
                  feedback: [{
                      id: 1,
                      like: 1,
                      dislike: 0,
                      mylist: false
                    },
                    {
                      id: 2,
                      like: 1,
                      dislike: 0,
                      mylist: true
                    }
                  ]
                },
              ],
              feedback: [{
                  id: 1,
                  like: 0,
                  dislike: 0,
                  mylist: true,
                },
                {
                  id: 2,
                  like: 0,
                  dislike: 1,
                  mylist: true,
                }
              ]
            },
          ]
        },
      },
        //Categeries Group Data End

    //Lates For Movies Start   
      Latest_Items: [{
        id: 1,
        imgUrl: "https://www.indiewire.com/wp-content/uploads/2019/12/avatar-2.jpg",
        name: "Avatar 2009",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 2,
        imgUrl: "https://im.haberturk.com/2020/05/23/ver1590187344/2688938_1920x1080.jpg",
        name: "Avatar 2012",
        description: "Avatar is a Movie. This movie created in 2009 "
      },
      {
        id: 3,
        imgUrl: 'https://im.haberturk.com/2020/05/23/ver1590187344/2688938_1920x1080.jpg',
        name: 'Avatar 2012',
        description: 'Avatar is a Movie. This movie created in 2009 '
      }
     ],
      //Lates For Movies End


     //User Selected Item For Modal Stuructor Start
      Selected_Item: {
        id: null,
        imgUrl: null,
        fullUrl:null,
        trailerUrl:null,
        name: null,
        description: null,
        categories: [],
        type: null,
        more: {
          director: null,
          writer: null,
          time: null,
        },
        episodes:[],
        feedback: [],
      },
      More_Item:[],
      More_MovieCount:10,
    //User Selected Item For Modal Stuructor End


    //User Account Start
      User: {
        id: 1,
        mylist:[],
        searchlist:[]
       //settings:{},
      },
    //User Account End

      //For Ui Start
      likeBtn: false,
      dislikeBtn: false,
      TotalLike: 0,
      TotalDislike: 0,
      mylist: false,
      resMenu:false,
      resToogleBtn:false,
      //For Ui End

      //For Search Start

      searchPath:'/search',

      //For Search End

      //Swiper Options BreakPoints Start
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        breakpoints: {
          1400: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      },
      //Swiper Options BreakPoints End 

    },
    getters: {
      //Global GETTER Start**********************
      getPathInfo(state) {
        let Scategory = [];
        if(state.Selected_Item.type != null){
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
 
      getSwiperOption(state) {
        return state.swiperOption;
      },
      getSearchList(state){
        return state.User.searchlist;
      },
      getLatest(state) {
        return state.Latest_Items;
      },
      getActionM(state) {
        return state.CategoriesGroup.Movies.actionM;
      },
      getActionS(state) {
        return state.CategoriesGroup.Series.actionS;
      },
      getResMenu(state){
        return state.resMenu;
        
      },
      getResToogleBtn(state){
        return state.resToogleBtn;
      },
      //Global GETTER End**********************

      //Search GETTER Start
       getSearchPath(state){
         return state.searchPath;
       },
      //Search GETTER End

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
      getTotalMyList(state){
        return state.User.mylist; 
      },
      getSelected(state) {
        return state.Selected_Item;
      },
      getMoreItem(state){
        return state.More_Item;
      }
      //GETTER MODAL End**********************



  // More Properties Disable Start************

      // getUserSettings(state){
      //   return state.User.settings;
      // },

   // More Properties Disable End************     

    },
    mutations: {
    //Mutations Only Page Functions Start******************* 
      setMyList(state){
         let mylist_items=[],checkmylist=null,count=0;;

         for(let mainCat in state.CategoriesGroup){

           for(let childCat in eval("state.CategoriesGroup."+mainCat)){         
            eval("state.CategoriesGroup."+mainCat+"."+childCat).forEach(item=>{      
               checkmylist=item.feedback[item.feedback.findIndex(f => f.id === state.User.id)];
              if(checkmylist.mylist){
                 mylist_items[count++]=item;
               }
            });
           }
         }
          state.User.mylist=mylist_items;
    },


     setSearch(state,word){
       let search_item=[],search=null;      
       for(let mainCat in state.CategoriesGroup){

        for(let childCat in eval("state.CategoriesGroup."+mainCat)){         
         eval("state.CategoriesGroup."+mainCat+"."+childCat).forEach(item=>{      
            search=item.name;
           if(!search.toLowerCase().search(word.toLowerCase())){
            search_item.push(item);
            }
         });
        }
      }
       state.User.searchlist=search_item;
     },

    //Mutations Only Page Functions End******************* 




      // Mutations Modal Function   Start******************************
      setSelected(state, selected) {
        state.Selected_Item = selected;
      },

      setMoreItem(state,path){
        let more_item=[];
       if(path.type.toUpperCase() == 'M'){
        eval(path.Selected_path).forEach((item,index)=>{
          if(path.Selected_findex != index && index <= (state.More_MovieCount+1))
             more_item.push(item);
        });
       }
       else if(path.type.toUpperCase() == 'S'){
        state.Selected_Item.episodes.forEach(item=>{ 
            more_item.push(item);
        });
       }
       
        state.More_Item=more_item;
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
        let likeCount = 0,dislikeCount = 0;

        if (path != undefined) {
          eval(path.Selected_path)[path.Selected_findex].feedback.forEach(item => {
            likeCount += item.like;
            dislikeCount += item.dislike;
          });
        }
        state.TotalLike = likeCount;
        state.TotalDislike = dislikeCount;
      },
      // Mutations Modal Function   End******************************

     //GLOBAL Mutations Function Start**********************
       setResMenu(state,isBool){
         state.resMenu=isBool;
      //   state.resToogleBtn=!isBool;
       },
       setResToogleBtn(state){
        state.resToogleBtn=!state.resToogleBtn;
      },
     //GLOBAL Mutations Function End**********************
 
    },
    actions: {
      //Actions Only Pages  Main Functions  Start************

       MyList({commit}){   
          commit('setMyList',);
       },
      
       SearchList({commit},word){
        commit('setSearch',word);
       },
     //Actions Only Pages  Main Functions  End************
     

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
        dispatch('setMyList');
        dispatch('updateMyList');
      },

      addLike({dispatch}) {
        dispatch('setFeedBack', 1);
        dispatch('updateLike');
      },

      addDislike({dispatch}) {
        dispatch('setFeedBack', 0);
        dispatch('updateLike');
      },

      setMyList({getters}) {
        let varInfo = getters.getPathInfo;
        varInfo.feedback_item.mylist === true ? varInfo.feedback_item.mylist = false : varInfo.feedback_item.mylist = true;

      },

      setMoreItemA({getters,commit},type){
        let varInfo = getters.getPathInfo;
        commit('setMoreItem',{type,...varInfo});
      },
      
      setFeedBack({state,getters}, Dlike) {
        let varInfo = getters.getPathInfo;
        if (varInfo.User_findex === -1) {
          switch (Dlike) {
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
          switch (Dlike) {
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
      // Actions Modal Function   End******************************
    }
  });
}

export default createStore;




/* For Live PATH Watch */
// state:{
//     nowPath:null,
//     oldPath:null
//  },
//  getters:{
//      getNowPath(state){
//        return state.nowPath;
//      },
//      getOldPath(state){
//          return state.oldPath;
//      }
//  },
//  mutations:{
//      setNowPath(state,nowpath){
//          state.nowPath=nowpath;
//      },
//      setOldPath(state,oldpath){
//          state.oldPath=oldpath;
//      }
//  }
