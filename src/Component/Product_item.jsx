import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blank_heart from '../images/Blank_heart.png';
import red_heart from '../images/fill_heart.png';
function Product_item(
    { ProductItem,
        recive,
        send,
        SetBuyItem,
        SetWishlist_item,
        WishList_item
    }) {

    const [bool, setbool] = useState(false);
    const navigate = useNavigate();
    const navigate1 = useNavigate();
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
    console.log("Sending value : ", send);
    const popup = () => navigate('/cart');

    const close = () => setbool(false);
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
    const wish = (item) => {
        if (!item) return;

        SetWishlist_item(previous => {
            const alreadyExists = previous.some(
                value => value.id === item.id
            );

            if (alreadyExists) {
                console.log("alerady exsit");
                return previous;
            }

            return [...previous, item];
        });
    };
    return (
        <div>
            <h1>Product Item</h1>
            {/* change the element tag acorrding the ui  */}
            {ProductItem?.map((item, j) => (

                <div className="single_box" key={j}>
                    {
                        WishList_item?.some(value => value?.id === item?.id) ?
                            <img
                                onClick={() => wish(item)}
                                src={red_heart}
                                alt="Added to wishlist"
                            />
                            :
                            <img
                                onClick={() => wish(item)}
                                src={blank_heart}
                                alt="Add to wishlist"
                            />
                    }
                    <img
                        src={item.thumbnail}
                        alt=""
                    />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                    <p>{item.rating}</p>
                    <p>{item.brand}</p>
                    <p>{item.warrantyInformation}</p>
                    <p>{item.returnPolicy}</p>
                    <div>

                        {
                            send.some((value) => value?.id === item.id) ?
                                <button onClick={Gotocart}>Go to cart</button>
                                :
                                <button onClick={() => {
                                    handle(item)
                                }}>Add to cart</button>
                        }


                        <button onClick={() => {
                            Buyitem(item)
                        }}>Buy this item</button>

                    </div>
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
        // think what i do after user click the add to cart do i store the data in localStorage or anything else
    )
}
export default Product_item;