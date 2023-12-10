import Home from "../../../../app/(website)/page.js";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Calculator", () => {
    it("renders a home page for techshop", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByText("Shop Now")).toBeInTheDocument();
      expect(screen.getByText("Get amazing prices at TechShop using our discount vouchers")).toBeInTheDocument
      
    });
  });