import '../../Css_files/Header_css/07_Automotive.css';
import AutomotiveProduct from '../../Product_Api/Categories_api';
import { useState, useEffect, useContext } from 'react';
import { UserProvider } from '../../App';
import { useNavigate } from 'react-router-dom';
function Automotive_fun() {
    const [Automotive, SetAutomotive] = useState(null);
    const [Data, SetData] = useState([]);
    const { SetProductItem } = useContext(UserProvider);
    const navigator = useNavigate();
    useEffect(() => {
        const Apifunction = async () => {
            let value = await AutomotiveProduct();
            SetAutomotive(value);
        }
        Apifunction();
    }, []);
    const handler = (id) => {
        if (!id) return;
        SetProductItem([id]);
        navigator('/Product_item');
    }
    useEffect(() => {
        let Automotive_Value = [];
        const AutomotiveValue = Automotive?.slice(112, 117);
        for (let i = 0; i < AutomotiveValue?.length; i += 4) {
            Automotive_Value.push(AutomotiveValue.slice(i, i + 4));
        }

        SetData(Automotive_Value);
        console.log(Automotive_Value);
    }, [Automotive]);


    return (
        <div>
            <h1>These are the Automotive products</h1>
            {Data?.map((group, index) => (
                <div key={index}>
                    {group?.map((item, i) => (
                        <div key={i}>
                            <img src={item?.thumbnail} alt=""
                                onClick={() => {
                                    handler(item);
                                }} />
                            <p>{item?.title}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Automotive_fun;