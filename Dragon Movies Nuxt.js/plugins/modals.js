import Vue from 'vue'
export default async ({ app }) => {
Vue.mixin({
    methods:{
      async  StopModalM(){
           var modalM =  document.getElementById('modal-templateM'); 
            if(modalM!=null){
                modalM.addEventListener('hidden.bs.modal', ()=> {
                 app.store.commit('setIsModalM',false);
           })      
          }    
        },
        StopModalS(){
           var modalS =  document.getElementById('modal-templateS');
            if(modalS!=null){
               modalS.addEventListener('hidden.bs.modal',  ()=> {
                app.store.commit('setIsModalS',false);
           })      
          }    
        },
        hideModalM(){
            var modalM = document.getElementById('modal-templateM');
            var BmodalM = bootstrap.Modal.getInstance(modalM);
                BmodalM !==null ? BmodalM.hide():false;
        },
        hideModalS(){
            var modalS = document.getElementById('modal-templateS');
            var BmodalS = bootstrap.Modal.getInstance(modalS);
                BmodalS !==null ? BmodalS.hide():false;
        },
       async showModalM(){
          await app.store.commit('setIsModalM',true)
                var modalM = document.getElementById('modal-templateM');
                var BmodalM = new bootstrap.Modal(modalM);
                    BmodalM !==null ? BmodalM.show():false;
        },        
       async showModalS(){
          await  app.store.commit('setIsModalS',true)
               var modalS = document.getElementById('modal-templateS');
               var BmodalS = new bootstrap.Modal(modalS);
                   BmodalS !==null ? BmodalS.show():false;     
        }
    },
})

}
