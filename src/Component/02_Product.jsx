import '../Css_files/02_Product.css';
import { useEffect, useState } from 'react';
function Product_list({ value }) {
    const [set, setdata] = useState([]);
    const [Searched, setSearched] = useState([]);
    const [Searched1, setSearched1] = useState([]);
    const [truth, settruth] = useState(false);
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

    useEffect(() => {
        let result = [];
        let result1 = [];
        if (set.length === 0) {
            console.log("This is zero");
        } else if (set.length <= 7) {
            console.log("value is less then");
            for (let i = 0; i < set.length; i += 4) {
                result.push(set.slice(i, i + 4));
            }
            settruth(true);
        } else if (set.length > 7) {
            console.log("value is greater then");
            for (let i = 0; i < set.length; i += 4) {
                result1.push(set.slice(i, i + 4));
            }
            settruth(false);
        }
        console.log("This is result", result1);
        setSearched(result);
        setSearched1(result1);

    }, [set])
    return (
        <div>
            {truth
                ? Searched?.slice(0, 2).map((item, i) => (
                    <div key={i}>
                        {item.map((item) =>
                            <div>
                                <img src={item.thumbnail} alt="product" />
                                <h3>{item.category}</h3>
                                <h3>${item.price}</h3>
                            </div>

                        )}
                    </div>
                ))
                :
                Searched1?.slice(0, 4).map((group, j) => (
                    <div key={j}>
                        {group.map((item) =>
                            <div>
                                <img src={item.thumbnail} alt="" />
                                <h3>{item.category}</h3>
                                <h3>${item.price}</h3>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}
export default Product_list;    