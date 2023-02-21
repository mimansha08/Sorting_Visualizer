import Model from "./model"
import SortingService from "./SortingService";

console.log("hello")
document.body.onload=()=>{
    console.log("onLoad");
    const m= new Model();
    m.generateRandomArray();
    const s=new SortingService(m);
    setTimeout(()=>{
        s.start();
        console.log("started");
        console.log(m.getDataArray());
    },3000)
}
