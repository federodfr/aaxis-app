import './styles.css'
const CurrencyInput = ({ typeOfCurrency, amount, setAmount, price }) => {
    return ( 
        <input 
            type='number'
            className='input-amount'
            disabled={typeOfCurrency === 'destination'}
            value={typeOfCurrency === 'destination' ? (amount * price).toFixed(2) : amount }
            onChange={(event) => setAmount(event.target.value)}
            onFocus={event => event.target.value = '' }
        />)
} 

export default CurrencyInput 