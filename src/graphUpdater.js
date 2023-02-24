import { delay } from "./util";
class GraphUpdater{
    constructor(view,model){
        this.view=view;
        this.model=model;
    }
    start(){
        this.isExecuting=true;
        this.service();
    }
    async service(){
        while(this.isExecuting){
            this.view.displayGraph(this.model.getDataArray(),this.model.colors);
            await delay(1000/60);
        }
    }
    stop(){
        this.isExecuting=false;
    }
}
export default GraphUpdater;
