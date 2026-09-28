import '../Css_files/02_Product.css';
import { useEffect, useState } from 'react';
function Product_list({ value }) {
    const [set, setdata] = useState([]);
    const [Searched, setSearched] = useState([]);
    console.log("done");
    useEffect(() => {
        const asy = async function () {
            if (!value) {
                return;
            }
            const respones = await fetch(`https://dummyjson.com/products/search?q=${value}`);
            const result = await respones.json();
            console.log(result.products);
            setdata(result.products);
        }
        asy();
    }, [value]);



    // this is have issue if has one or two or less then four product then ui layout is week so first solve this problem
    useEffect(() => {
        let result = [];
        let result1 = [];
        for (let i = 0; i < set?.length; i += 4) {
            if (set[i] < 4) {
                result1.push(set);
                console.log("search condition run");
            } else {
                result.push(set.slice(i, i + 4));
            }
        }
        setSearched(result);

    }, [set])
    return (
        <div>
            {Searched?.slice(0, 4).map((group, i) => (
                <div className="category_container" key={i}>
                    {group?.map((item) => (
                        <div className="single_box1" key={i}>
                            <img
                                src={item.thumbnail}
                                alt=""
                            />
                            <p>{item.title}</p>
                            <div className='value1'>
                                <h3>${item.price}</h3>
                                <h3>{item.category}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Product_list;    