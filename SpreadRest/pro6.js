function user(){
    let num=30;

    let obj={
        regular:function(...number){
            let arr=[1,2,3];
            let arr1=[...arr,...number];
            // console.log(arr1);
            let [a,b,c,d,e,f]=arr1;
            console.log(a,b,c,d,e,f);
        }
    }
    obj.regular(4,5,6);
}
user();