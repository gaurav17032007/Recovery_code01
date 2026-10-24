import '../../Css_files/Header_css/01_Electronic.css';
import CategoriesProduuct from '../../Product_Api/Categories_api';
import { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProvider } from '../../App';
function Electronic_fun() {
    const [Categories, SetCategories] = useState(null);
    const [Data, SetData] = useState([]);
    const navigator = useNavigate();
    const {SetProductItem}=useContext(UserProvider);
    useEffect(() => {
        const fetchData = async () => {
            const data = await CategoriesProduuct();
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
        const ElectronicsValue = Categories?.slice(121, 136);
        let ElectronicsValueStore = [];
        for (let i = 0; i < ElectronicsValue?.length; i += 4) {
            ElectronicsValueStore.push(ElectronicsValue.slice(i, i + 4));
        }
        SetData(ElectronicsValueStore);
        console.log(ElectronicsValueStore);
    }, [Categories])
    return (
        <div>
            <h1> These are the Electronics products </h1>
            {
                Data?.slice(0, 4).map((group, index) => (

                    <div key={index}>
                        {
                            group?.map((item, i) =>
                                <div key={i}>

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
                            )
                        }
                    </div>
                )
                )
            }
        </div>
    )
}
export default Electronic_fun;


