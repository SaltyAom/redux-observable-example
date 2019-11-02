import { Fragment } from 'react'

import Head from 'next/head'

import { connect } from 'react-redux'

import InitStyle from 'styles/initStyle'

const mapStateToProps = (state) => {
    return {
        store: state.toObject()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: {
            ping: () => dispatch({
                type: "PING"
            }),
            pong: () => dispatch({
                type: "PONG"
            }),
            update: (counter) => dispatch({
                type: "UPDATE_EPIC",
                payload: {
                    counter: ++counter
                }
            })
        }
    }
}

const App = ({ store, dispatch }) => {
    let { isPinging, counter} = store
    let { ping, pong, update } = dispatch

    return(
        <Fragment>
            <Head>
                <title>Redux Observable Example</title>
            </Head>
            <main id="layout">
                <h1 id="title">Redux Observable Example</h1>

                <h2 className="status">{ isPinging ? "Pinging" : "Is not Pingning" }</h2>
                <h2 className="status">Debounce Counter: { counter }</h2>

                <form id="controller" onSubmit={e => e.preventDefault()}>
                    <button className="update" onClick={() => ping()} aria-label="PING">PING</button>
                    <button className="update" onClick={() => update(counter)} aria-label="Increase counter">Increase</button>
                </form>

                <a id="github" href="https://github.com/aomkirby123/redux-observable-example" rel="noreferrer noopener">Github</a>
            </main>
        </Fragment>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)