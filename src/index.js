import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import mainReducer from './redux/reducers/mainReducer';
import { GoogleOAuthProvider } from '@react-oauth/google';

const reduxStore = configureStore({ reducer: mainReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <Provider store={reduxStore}>
  <GoogleOAuthProvider clientId="478026476083-p7etbhheefgflbe53eeo4ffd00agv7ck.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


