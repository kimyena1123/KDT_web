import ProductItem from '../components/ProductItem';

const ProductList = (props) => {
    const {products} = props;
    console.group('ProductList >>> ');
    console.log(products); // []
    
    return(
        <div className="ProductList">
            {products.map((product) => {
                return <ProductItem key = {product.id} product = {product} />;
            })}
        </div>
    )
}

export default ProductList;