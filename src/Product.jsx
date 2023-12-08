const Product = ({ product }) => {
    return (
        <>
            <article className='product-card'>
                <h3>{product.title}</h3>
                <hr />
                <div className='product-details'>
                    <div className='detail-element'>
                        <p>Prix</p>
                        <p>{product.price}€</p>
                    </div>
                    <div className='detail-element'>
                        <p>Note</p>
                        <p>{product.rating} / 5</p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Product;