import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import "./styles.css"; //이렇게하면 전부 설정돼 버리니 직접 컴포넌트에 style로 설정하면 힘들겟지


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//npm i prop-types
