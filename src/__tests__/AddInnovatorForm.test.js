/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import AddInnovatorForm from "../components/AddInnovatorForm";

test("input fields are cleared after a user submits the form", async () => {
  // arrange
  render(<AddInnovatorForm />);
  const authorInput = screen.getByTestId("author-input");
  const productInput = screen.getByTestId("products-input");
  const form = screen.getByTestId("form");

  // act
  fireEvent.change(authorInput, {
    target: {
      value: "bella",
    },
  });

  fireEvent.change(productInput, {
    target: {
      value: "make-up",
    },
  });

  // assert
  expect(authorInput.value).toBe("bella");
  expect(productInput.value).toBe("make-up");

  fireEvent.submit(form);

  expect(authorInput.value).toBe("");
  expect(productInput.value).toBe("");
});
