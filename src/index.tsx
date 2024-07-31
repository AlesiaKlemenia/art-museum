import React from 'react';
import ReactDOM from 'react-dom/client';
import InitialComponent from "./pages/Home";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <InitialComponent />
    </React.StrictMode>,
);
