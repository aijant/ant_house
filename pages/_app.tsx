import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../styles/tailwind/tailwind.css';

import type { AppProps } from 'next/app'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
