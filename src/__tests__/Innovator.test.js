/**
 * @jest-environment jsdom
 */

import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Innovator from "../components/Innovator";

test("displays the correct data", async () => {
  render(<Innovator author="evan you" products={["vue", "vite"]} />);
  const author = await screen.findByTestId("author");
  const productList = await screen.findByTestId("product-list");

  expect(author.textContent).toContain("evan you");
  expect(productList.children).toHaveLength(2);
  expect(productList.children[0].textContent).toContain("vue");
  expect(productList.children[1].textContent).toContain("vite");
});
