import Model from "./model";
import { delay } from "./util";

class SortingService{
    constructor(model=new Model()){
        this.model=model;
        this.isExecuting=false;
    }
    start(){
        this.isExecuting=true;
        this.bblSort();
    }
    service(){
        this.bblSort();
    }
    stop(){
        this.isExecuting=false;
    }
    async bblSort(){
    
        for(var i = 0; i <this.model.getDataSize(); i++){
           
          // Last i elements are already in place 
          for(var j = 0; j < (this.model.getDataSize() - i -1 ); j++){
             
            // Checking if the item at present iteration
            // is greater than the next iteration
            if(this.model.getItem(j) > this.model.getItem(j+1)){
               
              // If the condition is true then swap them
              var temp = this.model.getItem(j);
              this.model.setItem(j,this.model.getItem(j+1)) ;
              this.model.setItem(j+1,temp);
              await delay(this.model.getDelay());
              document.getElementById("test").innerHTML=this.model.getDataArray().join(", ");
              if(!this.isExecuting){
                return;
              }
            }
          }
        }
        
       }
}

export default SortingService;
