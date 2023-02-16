import React, { createContext } from "react";
const CurrencyContext = createContext();
const CurrencyConsumer = CurrencyContext.Consumer

class CurrencyProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        money: '$'
    }
  }

  handleCurrency = event => {
    this.setState({
        money: event.target.value
    })
  }

  render() {
    const money = this.state.money
    const handleCurrency = this.handleCurrency

    return(
        <CurrencyContext.Provider value={{ money, handleCurrency }}>
          {this.props.children}
        </CurrencyContext.Provider>
      )
  }
}

export { CurrencyProvider, CurrencyConsumer}