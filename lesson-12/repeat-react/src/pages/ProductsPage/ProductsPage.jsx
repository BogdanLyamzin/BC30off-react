import {useState, useEffect, useCallback} from "react";

import ProductList from "../../client/ProductList";
import Button from "../../shared/components/Button";

import {getProducts} from "../../shared/services/products";

const ProductsPage = ()=> {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null
    });

    const [page, setPage] = useState(1);

    useEffect(()=> {
        const fetchProducts = async() =>{
            try {
                setState(prevState => ({...prevState, loading: true}))
                const data = await getProducts(page);
                setState(prevState => ({
                    ...prevState,
                    items: [...prevState.items, ...data], 
                    loading: false,
                    error: null
                }))
            } catch (error) {
                setState(prevState => ({...prevState, loading: false, error}))
            }
        };
        fetchProducts();
    }, [page]);

    const loadMore = useCallback(()=> setPage(prevPage => prevPage + 1), []);

    const {items, loading} = state;

    return (
        <main>
            <div className="container">
                <h2 className="page-title">Products Page</h2>
                {loading && <p>...Loading</p>}
                {Boolean(items.length) && <ProductList items={items} />}
                {Boolean(items.length) && <Button onClick={loadMore}>Load more</Button>}
            </div>
        </main>
    )
}

export default ProductsPage;