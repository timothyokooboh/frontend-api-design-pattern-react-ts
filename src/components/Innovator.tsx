import React from "react";
import { InnovatorType } from "../types";

const Innovator: React.FC<InnovatorType> = ({ id, author, products }) => {
  const productList = products.map((product, idx) => {
    return <li key={idx}>{product} </li>;
  });

  return (
    <>
      <div data-testid="author">Author: {author}</div>
      <ul data-testid="product-list">{productList} </ul>
    </>
  );
};

export default Innovator;
