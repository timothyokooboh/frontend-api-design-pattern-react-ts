/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("An integration test between AddInnovatorForm component, Innovator and Innovators component", () => {
  it("renders the newly added author after submitting form", async () => {
    render(<App />);
    const authorInputElement = screen.getByPlaceholderText(/add author/i);
    const productsInputElement = screen.getByPlaceholderText(/add products/i);
    const formElement = screen.getByTestId("form");

    fireEvent.change(authorInputElement, {
      target: {
        value: "jake",
      },
    });

    fireEvent.change(productsInputElement, {
      target: {
        value: "make-up",
      },
    });

    fireEvent.submit(formElement);

    const authorDiv = await screen.findByText(/Author: jake/i);
    expect(authorDiv).toBeVisible();

    // testing implementation details
    // the previous assertion is enough
    // because it's not useful to the user if a new component gets rendered or not
    const comp = await screen.findAllByTestId("innovator-component");
    expect(comp.length).toBe(1);
  });
});
