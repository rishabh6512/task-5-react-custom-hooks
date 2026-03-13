const ProductList = ({ data }) => {

    return (
        <div className="grid">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <div className="img-wrapper">
                        <img src={product.images[0]} alt={product.title} />
                    </div>
                    <h3>{product.title}</h3>
                    <p>₹{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;