import '../../Css_files/Header_css/03_Shoes.css';
import ShoesProduct from '../../Product_Api/Categories_api';
import { useState, useEffect, useContext } from 'react';
import { UserProvider } from '../../App';
import { useNavigate } from 'react-router-dom';
function Shoes_fun() {
    const [Categories, SetCategories] = useState(null);
    const [Data, SetData] = useState([]);
    const { SetProductItem } = useContext(UserProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const data = await ShoesProduct();
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
        let ShoesValueStore = [];
        let NewArr = [];
        const ShoesValue = Categories?.slice(88, 92);
        const ShoesValue2 = Categories?.slice(185, 189);
        ShoesValueStore.push(ShoesValue);
        ShoesValueStore.push(ShoesValue2);

        let arr = ShoesValueStore.reduce((acc, curr) => acc.concat(curr), []);
        for (let i = 0; i < arr?.length; i += 4) {
            NewArr.push(arr.slice(i, i + 4));
        }
        SetData(NewArr);
        console.log(ShoesValueStore);
    }, [Categories])
    return (
        <div>
            <h1>These are the Shoes products</h1>
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
export default Shoes_fun;