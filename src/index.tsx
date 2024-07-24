import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container:HTMLElement = document.getElementById("container")!;
const root = createRoot(container);

root.render(<App />)