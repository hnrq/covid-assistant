import React from "react";
import { Message as MessageModel } from "models/Message";
import { format } from "date-fns";
import classNames from "classnames";
import "./Message.scss";

type Props = {
  message: MessageModel,
  align: "left" | "right",
};

export default ({ message: { text, timestamp }, align }: Props) => (
  <div className={classNames("message", align)}>
    <div className="text" data-testid="message-text">
      {text}
    </div>
    <small className="timestamp" data-testid="message-timestamp">
      {format(timestamp, "HH:mm")}
    </small>
  </div>
);
