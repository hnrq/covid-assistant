import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ChatContainer from "./ChatContainer";

describe("ChatContainer test section", () => {
  it("should render all messages", () => {
    const { getAllByTestId } = render(<ChatContainer />);
    expect(getAllByTestId("message-text").length).toBe(5);
  });

  it("should render a textarea", () => {
    const { queryByTestId } = render(<ChatContainer />);
    expect(queryByTestId("message-input")).toBeTruthy();
  });

  it("should render a submit button", () => {
    const { queryByTestId } = render(<ChatContainer />);
    expect(queryByTestId("submit-button")).toBeTruthy();
  });

  it("should trigger submit on enter", () => {
    const { getByTestId } = render(<ChatContainer />);
    fireEvent.keyDown(queryByTestId("message-input"), {
      key: "Enter",
      keyCode: 13,
    });
  });
});
