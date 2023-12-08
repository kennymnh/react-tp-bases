import './LastAddedProducts.css';
import Product from './Product';

const LastAddedProducts = ({ products }) => {
    const lastFiveProducts = products.filter((product) => product.isPublished === true).slice(-5);

    return (
        <>

            <div className='section'>
                <h1>Produits récents</h1>

                {
                    lastFiveProducts.map((product) => {
                        return (
                            <>
                                <Product product={product} />
                            </>
                        );
                    })
                }
            </div>
        </>
    );
}

export default LastAddedProducts;