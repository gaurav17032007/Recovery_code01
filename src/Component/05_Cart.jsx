import '../Css_files/05_Cart.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Cart({ send, SetBuyItem,recive }) {
    const [truth, settruth] = useState(false);

    const navigate = useNavigate();
    const Buyitem = (item) => {
        try {
            if (!item) return;
            SetBuyItem([item]);
            navigate('/BuyItem');
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        if (!send) return;
        if (send.length === 0) {
            settruth(true);
        }
    }, [send]);

    const removeItem=(id)=>{
        if(!id) return;
        recive((olditem)=>olditem.filter((value)=>value.id!==id));
    }
    return (
        <div>
            {truth &&
                <div>
                    <h1>This cart is empty so please go to home and chose your product and add the item in cart</h1>
                </div>


            }
            <h1>Cart page</h1>
            {send.map((item, j) => (
                <div className="single_box" key={j}>

                    <img src={item.thumbnail}
                        alt=""
                    />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <button onClick={() => {
                        Buyitem(item);
                    }
                    }>Buy this item</button>
                    <button onClick={()=>{
                        removeItem(item.id);
                    }}>Remove</button>
                </div>
            ))}

        </div>
    )
}
export default Cart;
