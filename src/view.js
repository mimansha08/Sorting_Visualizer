class View{
    constructor(height){
        this.height=height;
    }
    getGraphElement(){
        return document.getElementById("graph");
    }
    getBarHtml(data){
        const scale=(this.height)/100;
        const height=data*scale;
        return `
            <div class="bar" style="height:${height}px;"></div>
        `
    }
    displayGraph(dataArray){
        this.getGraphElement().innerHTML=dataArray.map((data)=>this.getBarHtml(data)).join("");
        this.getGraphElement().style.height=this.height+"px";
    }
}
export default View;
