import Header from "../partial/Header";
import Footer from "../partial/Footer";
import BestProduct from "../partial/BestProduct";
import LastAddedProducts from "../partial/LastAddedProducts";

const Home = () => {
    const products = [
        { id: 1, title: "Canapé cuir", price: 1000, rating: 4.5, isPublished: true, },
        { id: 2, title: "Canapé tissu", price: 800, rating: 3.5, isPublished: false, },
        { id: 3, title: "Canapé velours", price: 1200, rating: 5, isPublished: true, },
        { id: 4, title: "Canapé lin", price: 900, rating: 2.5, isPublished: false, },
        { id: 5, title: "Canapé cotton", price: 900, rating: 2.2, isPublished: true, },
        { id: 6, title: "Canapé cuir de vache", price: 600, rating: 1.5, isPublished: false, },
        { id: 7, title: "Canapé cuir de chèvre", price: 700, rating: 2, isPublished: true, },
    ];

    return (
        <div className="App">
            <Header />
            <BestProduct products={products} />
            <LastAddedProducts products={products} />
            <Footer />
        </div>
    );
};

export default Home;

// TODO: page 