const getproduct=async  ()=> {
    const response=await fetch("https://dummyjson.com/products?limit=16");
    const data=await response.json();
    return data.products;
}
export default getproduct;