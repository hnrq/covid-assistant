import React from "react";
import Message from "./Message";
import { render } from "@testing-library/react";

const message = {
  text: "Test",
  timestamp: new Date(),
};

describe("Message test section", () => {
  it("should render message text", () => {
    const { getByTestId } = render(<Message message={message} />);
    expect(getByTestId("message-text").textContent).toBe(message.text);
  });
  it("should render message timestamp", () => {
    const { getByTestId } = render(<Message message={message} />);
    expect(getByTestId("message-timestamp").textContent).toBe(
      `${message.timestamp}`
    );
  });
});
