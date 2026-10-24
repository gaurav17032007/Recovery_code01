import '../../Css_files/Header_css/06_Home&Kitchen.css';
import Home_KitchenProduuct from '../../Product_Api/Categories_api';
import { useState, useEffect, useContext } from 'react';
import { UserProvider } from '../../App';
import { useNavigate } from 'react-router-dom';
function Home_Kitchen_fun() {
    const [Categories, SetCategories] = useState(null);
    const [Data, SetData] = useState([]);
    const { SetProductItem } = useContext(UserProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const Apifunction = async () => {
            let value = await Home_KitchenProduuct();
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
        let Home_Kitchenvalue = [];
        let Newvalue = [];
        const Home_KitchenValue = Categories?.slice(11, 15);
        const Home_KitchenValue2 = Categories?.slice(43, 77);
        Home_Kitchenvalue?.push(Home_KitchenValue);
        Home_Kitchenvalue?.push(Home_KitchenValue2);

        let arr = Home_Kitchenvalue?.reduce((acc, curr) => acc.concat(curr), []);
        for (let i = 0; i < arr?.length; i += 4) {
            Newvalue.push(arr.slice(i, i + 4));
        }
        SetData(Newvalue);
        console.log(Newvalue);
    }, [Categories]);

    return (
        <div>
            <h1>These are the Home & Kitchen products</h1>
            {
                Data?.slice(0, 4).map((group, index) => (
                    <div key={index}>
                        {
                            group?.map((item, i) =>
                                <div key={i}>
                                    <img
                                        src={item?.thumbnail}
                                        alt=""
                                        onClick={() => {
                                            handler(item);
                                        }}
                                    />
                                    <p>{item?.title}</p>
                                </div>
                            )}
                    </div>
                ))}

        </div>
    )
}
export default Home_Kitchen_fun;