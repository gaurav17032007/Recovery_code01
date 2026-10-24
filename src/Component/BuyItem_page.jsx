
import { useEffect, useState } from "react";
function Item({ Buy, SetShowAccount, SetShowLogin }) {
    const [Qty, SetQty] = useState([1]);
    const [MRPprice, SetMRPprice] = useState(0);
    const [ActualDiscountPrice, SetActualDiscountPrice] = useState(0);
    const [TotalAmount, SetTotalAmount] = useState(0);
    const [bool, setbool] = useState(false);
    // const [IsHas, SetIsHas] = useState(false);
    useEffect(() => {
        try {
            if (!Buy) {
                SetMRPprice(0);
                SetActualDiscountPrice(0);
                SetTotalAmount(0);
                return;
            }
            const Productprice = Buy.reduce((acc, item) => acc + item.price, 0);
            const Multiply = Qty * 95;
            const MultiplyProductprice = Multiply * Productprice;

            const Discount = Buy.reduce((acc, item) =>
                acc + item.discountPercentage * MultiplyProductprice / 100, 0
            );
            const TotalAmount = MultiplyProductprice - Discount;

            SetMRPprice(MultiplyProductprice.toFixed(0))
            SetActualDiscountPrice(Discount.toFixed(0));
            SetTotalAmount(TotalAmount.toFixed(0));
        } catch (err) {
            console.log(err);
        }
    }, [Qty, Buy]);

    const close = () => setbool(false);
    return (
        <div>
            <h1>BuyItem page</h1>
            <h1>MRP: {new Intl.NumberFormat("en-US").format(MRPprice)}</h1>
            <h1>Discount: {new Intl.NumberFormat("en-US").format(ActualDiscountPrice)}</h1>
            <h1>TotalAmount : {new Intl.NumberFormat("en-US").format(TotalAmount)}</h1>

            {Buy?.map((item, j) => (
                <div className="single_box" key={j}>

                    <img src={item.thumbnail}
                        alt=""
                    />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            ))}

            <div>
                <button onClick={() => {
                        const isSignedIn =
                            localStorage.getItem("IsSignIn") === "true" ||
                            localStorage.getItem("IsSignUp") === "true";

                        if (!isSignedIn) {
                            SetShowLogin(false);
                            SetShowAccount(true);
                            return;
                        }

                        setbool(true);
                    }}
                >BuyItem</button>
                <div>
                    {bool && (
                            <div>
                                <h1>Congratulation</h1>
                                <h2>Your order has been confirmed</h2>
                                <button onClick={close}>close</button>
                            </div>
                    )}
                </div>

            </div>
            <div>
                <b>Qty : </b>
                <select
                    onChange={(e) => SetQty(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

        </div >
    )
}
export default Item;