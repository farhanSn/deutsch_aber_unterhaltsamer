import App from './App.tsx'
import './index.css'

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter basename={'/deutsch_aber_unterhaltsamer'}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);