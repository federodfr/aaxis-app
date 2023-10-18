import { useEffect, useState } from "react";
import CurrencyModal from "./components/CurrencyModal"
import CurrencyContainer from "./components/CurrencyContainer";
import CurrencyChangeButton from "./components/CurrencyChangeButton";

import './App.css';

const App = () => {
  const { REACT_APP_API_KEY, REACT_APP_API } = process.env
  const [ currencies, setCurrencies ] = useState([])
  const [ baseCurrency, setBaseCurrency ] = useState('USD')
  const [ destinationCurrency, setDestinationCurrency ] = useState('EUR')
  const [ amount, setAmount ] = useState(0)
  const [ price, setPrice ] = useState(0)
  const [ typeOfCurrency, setTypeOfCurrency ] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${REACT_APP_API}/currencies?apikey=${REACT_APP_API_KEY}`
        )
          .then(response => response.json())
          .then(data => {
            const currenciesArray = [];

            for(const currency in data.data){
              const currentCurrency = data.data[currency]
              currenciesArray.push({
                code: currentCurrency.code,
                name: currentCurrency.name
              })
            }

            setCurrencies(currenciesArray)
          })
          .catch( e => console.log(e))
    }

    fetchData()
  })

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `${REACT_APP_API}/latest?apikey=${REACT_APP_API_KEY}&base_currency=${baseCurrency}`
        )
          .then(response => response.json())
          .then(data => {
            const currenciesObj = data.data[destinationCurrency]
            setPrice(currenciesObj)
          })
          .catch( e => console.log(e))
    }

    fetchData()

  },[baseCurrency, destinationCurrency, REACT_APP_API_KEY, REACT_APP_API])

  return (
    <div className="App">
      <CurrencyContainer 
        currencies={currencies} 
        selected={baseCurrency} 
        setSelected={setBaseCurrency}
        setShowModal={setTypeOfCurrency}
        typeOfCurrency={'base'}
        price={price} 
        amount={amount} 
        setAmount={setAmount}
        />
     <CurrencyChangeButton 
      baseCurrency={baseCurrency}
      destinationCurrency={destinationCurrency}
      setBaseCurrency={setBaseCurrency}
      setDestinationCurrency={setDestinationCurrency}
     />
      <CurrencyContainer 
        currencies={currencies} 
        selected={destinationCurrency} 
        setSelected={setDestinationCurrency}
        setShowModal={setTypeOfCurrency}
        typeOfCurrency={'destination'}
        price={price} 
        amount={amount} 
        setAmount={setAmount}
        />
        {typeOfCurrency !== '' && 
          <CurrencyModal
            currencies={currencies}
            setShowModal={setTypeOfCurrency}
            typeOfCurrency={typeOfCurrency}
            setBaseCurrency={setBaseCurrency}
            setDestinationCurrency={setDestinationCurrency}
        /> }
    </div>
  );
}

export default App;
