import { delay } from "./util";

class SortingService{
    constructor(model,onSortingEnd){
        this.model=model;
        this.isExecuting=false;
        this.onSortingEnd=onSortingEnd;
    }
    start(){
        this.isExecuting=true;
        this.service();
    }
    service(){
        this.bblSort().then(()=>{
          if(this.onSortingEnd){
            this.onSortingEnd();
          }
        });
    }
    stop(){
        this.isExecuting=false;
    }
    async bblSort(){
    
        for(var i = 0; i <this.model.getDataSize(); i++){
           
          // Last i elements are already in place 
          for(var j = 0; j < (this.model.getDataSize() - i -1 ); j++){
             //this.model.setColor(j,"yellow");
             //this.model.setColor(j+1,"yellow");
             //await delay(this.model.getDelay()/2);
            // Checking if the item at present iteration
            // is greater than the next iteration
            if(this.model.getItem(j) > this.model.getItem(j+1)){
              this.model.setColor(j,"#b02725");
              this.model.setColor(j+1,"#b02725");
              await delay(this.model.getDelay());
              // If the condition is true then swap them
              var temp = this.model.getItem(j);
              this.model.setItem(j,this.model.getItem(j+1)) ;
              this.model.setItem(j+1,temp);
              this.model.setColor(j,"#6dbf32");
             this.model.setColor(j+1,"#6dbf32");
             await delay(this.model.getDelay());
              if(!this.isExecuting){
                return;
              }
            }
            else{
             this.model.setColor(j,"#6dbf32");
             this.model.setColor(j+1,"#6dbf32");
             await delay(this.model.getDelay()/2);
            }
            this.model.setColor(j,undefined);
            this.model.setColor(j+1,undefined);
          }
          
        }
        
       }
}

export default SortingService;
