import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { contentfulSdkMock } from "./testUtils";

test("renders learn react link", () => {
  const { getByText } = render(<App sdk={contentfulSdkMock} />);
  const linkElement = getByText(/Choose question type/i);
  expect(linkElement).toBeInTheDocument();
});
