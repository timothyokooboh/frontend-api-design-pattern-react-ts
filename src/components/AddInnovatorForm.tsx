import React, { useState, useContext } from "react";
import { InnovatorsContext } from "../context/InnovatorsContext";
import { v4 as uuidv4 } from "uuid";

const AddInnovatorForm: React.FC = () => {
  const [author, setAuthor] = useState("");
  const [products, setProducts] = useState("");
  const { addInnovator } = useContext(InnovatorsContext);

  const payload = {
    id: uuidv4(),
    author,
    products: products.split(", "),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addInnovator(payload);

    setAuthor("");
    setProducts("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          data-testid="author-input"
          placeholder="add author"
        />
      </div>

      <div>
        <label htmlFor="products">Products</label>
        <input
          id="products"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
          data-testid="products-input"
          placeholder="add products"
        />
      </div>

      <button>Add Innovator</button>
    </form>
  );
};

export default AddInnovatorForm;
