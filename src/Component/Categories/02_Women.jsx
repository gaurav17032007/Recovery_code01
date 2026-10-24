import '../../Css_files/Categories_css/Women.css';
import CategoriesProduuct from '../../Product_Api/Categories_api';
import { useState, useEffect,useContext } from 'react';
import { UserProvider } from '../../App';
import { useNavigate } from 'react-router-dom';
function Women_fun() {
    const [Categories, SetCategories] = useState(null);
    const [get, setvalue] = useState([]);
    const { SetProductItem } = useContext(UserProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const Apifunction = async () => {
            let value = await CategoriesProduuct();
            SetCategories(value);

        }
        Apifunction();
    }, []);
    const handler = (id) => {
        if (!id) return;
        SetProductItem([id]);
        navigator('/Product_item');
    }
    useEffect(() => {
        let Womenvalue = [];
        for (let i = 172; i < Categories?.length; i += 4) {
            Womenvalue.push(Categories.slice(i, i + 4));
        }
        setvalue(Womenvalue);
        console.log(Womenvalue);
    }, [Categories]);
    return (
        <div>
            {get?.slice(0, 4).map((group, i) => (
                <div className="category_container" key={i}>
                    {group?.map((item,j) => (
                        <div className="single_box1" key={j}>
                            <img
                                src={item.thumbnail}
                                alt=""
                                onClick={() => {
                                    handler(item);
                                }}
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
export default Women_fun;