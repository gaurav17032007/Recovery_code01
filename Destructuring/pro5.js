let user={
    name:"vikas",
    address:{
        city:"delhi"
    },
    skills:{
        skill1:"java"
    },
    age:30
}
let {name:personName,address:{city:userCity},skills:{skill1:firstSkill},age:Userage}=user;
console.log(personName,userCity,firstSkill,Userage);