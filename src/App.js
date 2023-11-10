import productData from "./content";
import { Products } from "./components/Products";
const App = () => {
  return (
    <div className="App">
      {productData.map((product) => (
        <Products
          key={product.id}
          images={product.image}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default App;
