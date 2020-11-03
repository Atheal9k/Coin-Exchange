
import React from 'react';
import styled from 'styled-components';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance'
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';


const Div = styled.div`
    text-align: center;
    background-color: rgb(58, 58, 163);
    color: #cccccc;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999

        },

        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 300

        },{
          name: 'Tether',
          ticker: 'USDT',
          price: 1

        },{
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2

        }

        
      ]
    }
  }


  render() {
    return(
    <Div className='App'>
   
    <ExchangeHeader/>
    <AccountBalance amount={this.state.balance}/>
    <CoinList coinData={this.state.coinData}/>
    
     
      </Div>
    
    )

  }
    
   


}

export default App;
