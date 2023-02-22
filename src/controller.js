import GraphUpdater from "./graphUpdater";
import Model from "./model";
import SortingService from "./sortingService";
import View from "./view";

class Controller{
    constructor(){
        this.init();
    }

    init=()=>{
        this.model=new Model();
        this.view=new View(400);
        this.graphUpdater= new GraphUpdater(this.view,this.model);
        this.sortingService=new SortingService(this.model,this.graphUpdater.stop);
        this.model.generateRandomArray();
        this.view.displayGraph(this.model.getDataArray());
        document.getElementById("generate-array").addEventListener("click",this.onGenerateArray);
        document.getElementById("start-btn").addEventListener("click",this.onStart);
        document.getElementById("stop-btn").addEventListener("click",this.onStop.bind(this));
        document.getElementById("inc-speed").addEventListener("click",this.onIncreaseSpeed);
        document.getElementById("dec-speed").addEventListener("click",this.onDecreaseSpeed);
        
    }
    
    onGenerateArray=()=>{
        this.sortingService.stop();
        this.graphUpdater.stop();
        this.init();  
    }
    onStart=()=>{
        this.sortingService.start();
        this.graphUpdater.start();
    }
    onStop(){
        this.sortingService.stop();
        this.graphUpdater.stop();
    }
    onIncreaseSpeed=()=>{
        this.model.increaseFrequency();
    }
    onDecreaseSpeed=()=>{
        this.model.decreaseFrequency();
    }
}

export default Controller;
