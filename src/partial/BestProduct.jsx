import Product from "../Product";

const BestProduct = ({ products }) => {

    let bestProduct;

    products.forEach(product => {
        if (product.rating > (bestProduct?.rating ?? 0))
            bestProduct = product;
    });

    return (
        <>
            <div className='section'>
                <h1>Meilleur produit</h1>
                <Product product={bestProduct}/>
            </div>
        </>
    );
};

export default BestProduct;