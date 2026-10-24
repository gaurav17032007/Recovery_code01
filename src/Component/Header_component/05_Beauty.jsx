import '../../Css_files/Header_css/05_Beauty.css';
import BeautyProduct from '../../Product_Api/Categories_api';
import { useState, useEffect, useContext } from 'react';
import { UserProvider } from '../../App';
import { useNavigate } from 'react-router-dom';
function Beauty_fun() {
    const [Categories, SetCategories] = useState(null);
    const [Data, SetData] = useState([]);
    const { SetProductItem } = useContext(UserProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const data = await BeautyProduct();
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
        let BeautyValueStore = [];
        const BeautyValue = Categories?.slice(0, 8);

        for (let i = 0; i < BeautyValue?.length; i += 4) {
            BeautyValueStore.push(BeautyValue.slice(i, i + 4));
        }
        SetData(BeautyValueStore);

    }, [Categories]);

    return (
        <div>
            <h1>These are the Beauty products</h1>
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
export default Beauty_fun;