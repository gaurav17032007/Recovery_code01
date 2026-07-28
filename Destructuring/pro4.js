let user={
    name:"vikas",
    address:{
        city:"delhi"
    },
    skills:{
        skill1:"java"
    }
}
let {name:personName,address:{city:userCity},skills:{skill1:firstSkill}}=user;
console.log(personName,userCity,firstSkill);