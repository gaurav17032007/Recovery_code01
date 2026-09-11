import product from './Api';
import { useEffect } from "react";
function Home() {

    return (
        <div>
            <h1>Home page</h1>
            {product && (
                product?.products?.map((index) => {
                    return (
                        <div key={index.id}>
                            <p>{index.id}</p>
                            <p>{index.category}</p>
                        </div>
                    )
                })
            )}
        </div>
    )
}
export default Home;