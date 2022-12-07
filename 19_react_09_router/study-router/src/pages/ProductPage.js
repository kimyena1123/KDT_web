import ProductList from '../components/ProductList';

const ProductPage = ({products}) => {
    /*
    {products} = props; 중괄호 포함까지가 props이다.
    console.log(props);

    const{products} = props;
    */
    return(
        <main className="ProductPage">
            <div>여기는 상품목록</div>
            
            <ProductList products = {products} />
        
        </main>
    )
}

export default ProductPage;