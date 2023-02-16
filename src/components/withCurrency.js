import React from 'react'
import { CurrencyConsumer } from './CurrencyContext'

const withCurrency = (WrappedComponent) => {
    class WithCurrency extends React.Component {
        render() {
            return(
              <CurrencyConsumer>
                {(context) => <WrappedComponent {...this.props} {...context} />}
              </CurrencyConsumer>
              )
        }
    }
    return WithCurrency
}

export default withCurrency