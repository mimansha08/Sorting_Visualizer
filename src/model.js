class Model{
    constructor(){
        this.frequency=2;
        this.dataArray=[];
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
            arr.push(x);
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
        this.frequency=Math.min(5,this.frequency+0.5);
    }
    decreaseFrequency(){
        this.frequency=Math.max(0.5,this.frequency-0.5);
    }
}

export default Model;
