import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "./styles/globals.css";

const activeChain = "ethereum";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ThirdwebProvider
      desiredChainId={ChainId.Goerli}
    >      
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  
);
