function arr1(){
    let arr=[
        {name:"Vikas",age:30,skill:"Javascript"},
        {name:"Mohan",age:35,skill:"Rust"},
        {name:"Nitin",age:40,skill:"Python"}
    ]
    
            let arr2=arr
            .filter((value)=> value.name==="Vikas")
            .map((value)=>value.name);
            console.log(arr2);
}
arr1();