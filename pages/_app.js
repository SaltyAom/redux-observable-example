import App from 'next/app'

import { Provider } from 'react-redux'
import store from 'stores'

import InitStyle from 'styles/initStyle'

class MyApp extends App {
    render(){
        const { Component, pageProps } = this.props

        return(
            <Provider store={store}>
                <Component {...pageProps} />
                <InitStyle />
            </Provider>
        )
    }
}

export default MyApp