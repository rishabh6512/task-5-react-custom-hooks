import useFetch from "./hooks/useFetch";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {

    const { data, loading, error } =
        useFetch("https://api.escuelajs.co/api/v1/products");

    if (loading) {
        return (
            <div className="center-state">
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="center-state">
                <h2>Error: {error}</h2>
            </div>
        );
    }

    return (
        <div>
            <h1>Products</h1>
            <ProductList data={data} />
        </div>
    );
}

export default App;