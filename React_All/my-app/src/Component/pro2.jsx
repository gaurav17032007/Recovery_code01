function arr(){
    let arr=[
        {name:"Vikas",age:30,skill:"Javascript"},
        {name:"Mohan",age:35,skill:"Rust"},
        {name:"Nitin",age:40,skill:"Python"}
    ]
    return(
        <div>
            {arr
            .filter((value,index)=>value.name==="Vikas")
            .map((value)=>value.name)
            }
        </div>
    )
}
export default arr;