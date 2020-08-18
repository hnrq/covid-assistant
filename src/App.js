import React from "react";
import "./App.scss";
import { ReactComponent as VirusIcon } from "assets/common/virus.svg";
import { ReactComponent as HeartIcon } from "assets/common/heart.svg";
import { RecoilRoot } from "recoil";
import { PacmanLoader } from "react-spinners";

const ChatContainer = React.lazy(() =>
  import("containers/ChatContainer/ChatContainer")
);

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="header">
          <h2>
            <VirusIcon height="24px" width="24px" /> COVID-19 Chatbot
          </h2>
        </div>
        <div className="content">
          <React.Suspense
            fallback={
              <div className="spinner">
                <PacmanLoader size={32} color={"#fafafa"} loading />
              </div>
            }
          >
            <ChatContainer />
          </React.Suspense>
        </div>
        <div className="footer">
          <span>
            Made with <HeartIcon height="16px" width="16px" /> by{" "}
            <a href="https://www.twitter.com/alberoneramos">Henrique</a>.
          </span>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
