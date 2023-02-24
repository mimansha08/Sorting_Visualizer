class Model{
    constructor(){
        this.frequency=5;
        this.dataArray=[];
        this.colors=[];
    }
    
    getDataArray(){
        return this.dataArray;
    }
    getDataSize(){
        return this.dataArray.length;
    }
    generateRandomArray(size=50){
        const arr=[];
        for(let i=0;i<size;i++){
            const x=(Math.random()*90)+10;
            const n = parseInt(x.toFixed(0))
            arr.push(n);
        }
        this.dataArray=arr;
    }
    setItem( index,value){
        this.dataArray[index]=value;
    }
    getItem(index){
        return this.dataArray[index];
    }
    getFrequency(){
        return this.frequency;
    }
    getDelay(){
        return (1/(this.frequency))*1000;
    }
    increaseFrequency(){
        this.frequency=Math.min(50,this.frequency*1.05);
    }
    decreaseFrequency(){
        this.frequency=Math.max(5,this.frequency*0.95);
    }
    getColor(index){
        return this.colors[index];
    }
    setColor(index,color){
        this.colors[index]=color;
    }
}

export default Model;
