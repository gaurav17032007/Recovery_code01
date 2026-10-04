import '../../Css_files/Header_css/02_Fashion.css';
import FashionProduuct from '../../Product_Api/Categories_api';
import { useState, useEffect } from 'react';
function Fashion_fun() {
    const [Fashion, SetFashion] = useState(null);
    const [get, setvalue] = useState([]);
    useEffect(() => {
        const Apifunction = async () => {
            let value = await FashionProduuct();
            SetFashion(value);

        }
        Apifunction();
    }, []);
    useEffect(() => {
        let Menvalue = [];
        let NewArr = [];
        const FashionValue = Fashion?.slice(82, 87);
        const FashionValue2 = Fashion?.slice(176, 183);
        Menvalue.push(FashionValue);
        Menvalue.push(FashionValue2);

        let arr = Menvalue.reduce((acc, curr) => acc.concat(curr), []);
        console.log(NewArr);

        for (let i = 0; i < arr?.length; i += 4) {
            NewArr.push(arr.slice(i, i + 4));
        }
        setvalue(NewArr);
    }, [Fashion]);
    return (
        <div>
            <h1>These are the Fashion products</h1>
            {get?.slice(0, 4)?.map((group, i) => (
                <div key={i}>
                    {group?.map((item,j) => (
                        <div key={j}>
                            <img src={item?.thumbnail} alt="" />
                            <p>{item?.title}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Fashion_fun;