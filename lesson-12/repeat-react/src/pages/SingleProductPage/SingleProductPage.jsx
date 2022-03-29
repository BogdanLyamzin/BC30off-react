import {useState, useEffect} from "react";
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";

import {getSingleProduct} from "../../shared/services/products";

const SingleProductPage = ()=> {
    const [state, setState] = useState({
        data: {},
        loading: false,
        error: null
    });

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchProduct = async ()=> {
            try {
                const data = await getSingleProduct(id);
                setState(prevState => ({
                    ...prevState,
                    data,
                    loading: false,
                    error: null
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error
                }))
            }
        }
        fetchProduct()
    }, [id]);

    const {data, loading} = state;

    const goBack = ()=> navigate(-1);

    return (
        <main>
            <div className="container">
                {loading && <p>...loading</p>}
                <button onClick={goBack}>Go back</button>
                <h2 className="page-title">{data.name}</h2>
                <p>Price: {data.price}</p>
                <Link to={`/products/${id}/reviews`}>Reviews</Link>
                <Outlet />
            </div>
        </main>
    )
}

export default SingleProductPage;