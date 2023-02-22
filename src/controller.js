import Model from "./model";
import SortingService from "./sortingService";

class Controller{
    constructor(){
        this.init();
    }

    init=()=>{
        this.model=new Model();
        //this.view=new view();
        this.sortingService=new SortingService(this.model);
        this.model.generateRandomArray();
        document.getElementById("generate-array").addEventListener("click",this.onGenerateArray);
        document.getElementById("start-btn").addEventListener("click",this.onStart);
        document.getElementById("stop-btn").addEventListener("click",this.onStop.bind(this));
        document.getElementById("inc-speed").addEventListener("click",this.onIncreaseSpeed);
        document.getElementById("dec-speed").addEventListener("click",this.onDecreaseSpeed);
        
    }
    
    onGenerateArray=()=>{
        this.sortingService.stop();
        this.model.generateRandomArray();
        
    }
    onStart=()=>{
        this.sortingService.start();
    }
    onStop(){
        this.sortingService.stop();
    }
    onIncreaseSpeed=()=>{
        this.model.increaseFrequency();
    }
    onDecreaseSpeed=()=>{
        this.model.decreaseFrequency();
    }
}

export default Controller;
