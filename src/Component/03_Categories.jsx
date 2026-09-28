import '../Css_files/03_Categories.css';
import CategoriesProduuct from '../Product_Api/Categories_api';
import { useState, useEffect } from 'react';
function Categories() {
    const [Categories, SetCategories] = useState(null);
    const [get, setvalue] = useState([]);
    useEffect(() => {
        const Apifunction = async () => {
            let value = await CategoriesProduuct();
            SetCategories(value);

        }
        Apifunction();
    }, []);
    useEffect(() => {
        let Menvalue = [];
        for (let i = 82; i < Categories?.length; i += 4) {
            Menvalue.push(Categories.slice(i, i + 4));
        }
        setvalue(Menvalue);
        console.log(Menvalue);
    }, [Categories]);
    return (
        <div>
            {get?.slice(0, 4).map((group, i) => (
                <div className="category_container" key={i}>
                    {group?.map((item) => (
                        <div className="single_box1" key={i}>
                            <img
                                src={item.thumbnail}
                                alt=""
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
export default Categories;