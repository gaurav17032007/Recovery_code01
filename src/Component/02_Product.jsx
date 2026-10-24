import '../Css_files/02_Product.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Product_list({ value, SetBuyItem, recive, send }) {
    const [set, setdata] = useState([]);
    const [Searched, setSearched] = useState([]);
    const [Searched1, setSearched1] = useState([]);
    const [truth, settruth] = useState(false);
    const [bool, setbool] = useState(false);
    const navigate = useNavigate();
    const navigate1 = useNavigate();
    // const [EqualZero, SetEqualZero] = useState(false);
    useEffect(() => {
        const asy = async function () {
            if (!value) {
                setdata([]);
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
        if (set.length <= 7) {
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
    const handle = (item) => {
        try {
            if (!item) return;
            recive(previous => {
                const alreadyExists = previous.some(
                    value => value.id === item.id
                );

                if (alreadyExists) {
                    return previous;
                }
                return [...previous, item];

            });
            setbool(true);
            console.log("This is product item :", item);

        } catch (err) {
            setbool(false);
            console.log(err);
        }
    }
    const Buyitem = (item) => {
        try {
            if (!item) return;
            SetBuyItem([item]);
            navigate1('/BuyItem');
        } catch (err) {
            console.log(err);
        }
    }
    const Gotocart = () => navigate('/cart');

    const popup = () => navigate('/cart');

    const close = () => setbool(false);

    return (
        <div>
            {set.length === 0 ?
                <div>
                    <h1>Hii this is empty so please type some thing </h1>
                </div>
                : truth
                    ? Searched?.slice(0, 2).map((group, i) => (
                        <div key={i}>
                            {group.map((item, j) =>
                                <div key={j}>
                                    <img src={item.thumbnail} alt="product" />
                                    <h3>{item.category}</h3>
                                    <h3>${item.price}</h3>
                                    <h1>How are you</h1>
                                    <p>{item.description}</p>

                                    {
                                        send.some((value) => value?.id === item.id) ?
                                            <button onClick={Gotocart}>Go to cart</button>
                                            :
                                            <button onClick={() => {
                                                handle(item)
                                            }}>Add to cart</button>
                                    }
                                    <button onClick={() => {
                                        Buyitem(item);
                                    }
                                    }>Buy this item</button>
                                </div>

                            )}
                        </div>
                    ))
                    :
                    Searched1?.slice(0, 4).map((group, j) => (
                        <div key={j}>
                            {group.map((item, i) =>
                                <div key={i}>
                                    <img src={item.thumbnail} alt="" />
                                    <h3>{item.category}</h3>
                                    <h3>${item.price}</h3>
                                    <p>{item.description}</p>
                                    {
                                        send.some((value) => value?.id === item.id) ?
                                            <button onClick={Gotocart}>Go to cart</button>
                                            :
                                            <button onClick={() => {
                                                handle([item])
                                            }}>Add to cart</button>
                                    }
                                    <button onClick={() => {
                                        Buyitem(item);
                                    }
                                    }>Buy this item</button>

                                </div>
                            )}
                        </div>
                    ))}
            <div>
                {
                    bool === true ?
                        <div>
                            <p>Item is add to cart</p>
                            <button onClick={close}>close</button>
                            <button onClick={popup}>Go to cart</button>
                        </div>
                        : null}
            </div>

        </div>
    )
}
export default Product_list;    