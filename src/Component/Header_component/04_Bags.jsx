import '../../Css_files/Header_css/04_Bags.css';
import BagsProduct from '../../Product_Api/Categories_api';
import { useState, useEffect, useContext } from 'react';
import { UserProvider } from '../../App';
import { useNavigate } from 'react-router-dom';
function Bags_fun() {
    const [Categories, SetCategories] = useState(null);
    const [Data, SetData] = useState([]);
    const { SetProductItem } = useContext(UserProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const data = await BagsProduct();
            SetCategories(data);
        };
        fetchData();
    }, []);
    const handler = (id) => {
        if (!id) return;
        SetProductItem([id]);
        navigator('/Product_item');
    }
    useEffect(() => {
        let BagsValueStore = [];
        const BagsValue = Categories?.slice(171, 176);

        for (let i = 0; i < BagsValue?.length; i += 4) {
            BagsValueStore.push(BagsValue.slice(i, i + 4));
        }
        SetData(BagsValueStore);
        console.log(BagsValueStore);
    }, [Categories])
    return (
        <div>
            <h1>Bags page</h1>
            {
                Data?.slice(0, 2).map((group, index) => (

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
export default Bags_fun;