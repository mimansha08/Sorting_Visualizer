class View{
    constructor(height){
        this.height=height;
    }
    getGraphElement(){
        return document.getElementById("graph");
    }
    getBarHtml(data,color){
        const scale=(this.height)/100;
        const height=data*scale;
        const bgProp=color?`background:${color};`:"";
        return `
            <div class="bar" style="height:${height}px;${bgProp}"></div>
        `
    }
    displayGraph(dataArray,colors){
        this.getGraphElement().innerHTML=dataArray.map((data,index)=>this.getBarHtml(data,colors[index])).join("");
        this.getGraphElement().style.height=this.height+"px";
    }
}
export default View;
