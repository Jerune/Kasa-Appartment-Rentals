import React from 'react';
import ReactDOM from 'react-dom/client';
import { Wrapper } from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import reportWebVitals from './reportWebVitals';
import "./style/fonts.css";
import "./style/main.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      <Header />
    </Wrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
