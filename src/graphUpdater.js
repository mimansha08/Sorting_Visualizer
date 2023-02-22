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
            this.view.displayGraph(this.model.getDataArray());
            await delay(this.model.getDelay());
        }
    }
    stop(){
        this.isExecuting=false;
    }
}
export default GraphUpdater;
