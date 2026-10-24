import '../Css_files/04_Wishlist.css';
import { useNavigate } from 'react-router-dom';
function Wish_list({ WishList_item, SetProductItem }) {
    const navigator = useNavigate();
    const handle = (item) => {
        if (!item) return;
        SetProductItem([item]);
        navigator('/Product_item');
    }
    return (
        <div>
            <h1>Wishlist page</h1>
            {WishList_item.map((item, j) => (
                <div className="single_box" key={j}>

                    <img src={item.thumbnail}
                        alt=""
                        onClick={() => {
                            handle(item);
                        }}
                    />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}
export default Wish_list;
