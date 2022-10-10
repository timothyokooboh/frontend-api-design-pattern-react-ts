import { useContext } from "react";
import { InnovatorsContext } from "../context/InnovatorsContext";
import Innovator from "./Innovator";

const Innovators: React.FC = () => {
  const { innovators, loadingInnovators, error } =
    useContext(InnovatorsContext);

  return (
    <div>
      {loadingInnovators && <p>Loading...</p>}

      {error && <p>An error occured</p>}

      {Array.isArray(innovators) &&
        innovators.length > 0 &&
        innovators.map((innovator) => {
          return (
            <div key={innovator.id} data-testid="innovator-component">
              <Innovator
                id={innovator.id}
                author={innovator.author}
                products={innovator.products}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Innovators;
