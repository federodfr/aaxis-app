import CurrencyInput from "../CurrencyInput"
import CurrencySelector from "../CurrencySelector"

import './styles.css'
const CurrencyContainer = ({ 
currencies,
selected,
setSelected,
setShowModal,
typeOfCurrency,
price,
amount,
setAmount}) => {
    return(
        <div className='selector-container'>
            <CurrencySelector 
                currencies={currencies} 
                selected={selected} 
                setSelected={setSelected}
                setShowModal={setShowModal}
                typeOfCurrency={typeOfCurrency}
            /> 
            <CurrencyInput 
                typeOfCurrency={typeOfCurrency}
                price={price} 
                amount={amount} 
                setAmount={setAmount}
            />
        </div>
    )
}

export default CurrencyContainer