import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Oval } from 'react-loader-spinner';
import { Substrate } from './App.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
    {/* <Substrate>
      <Oval
        height={100}
        width={100}
        color='#a94d86'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#a94da4'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Substrate> */}
  </Provider>,
);
