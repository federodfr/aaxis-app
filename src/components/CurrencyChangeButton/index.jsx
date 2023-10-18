import './styles.css'

const CurrencyChangeButton = ({ baseCurrency, destinationCurrency, setBaseCurrency, setDestinationCurrency}) => {

    const handleOnClick = () => {
        const temp = baseCurrency
        const newDestination = temp
        const newBase = destinationCurrency
    
        setBaseCurrency(newBase)
        setDestinationCurrency(newDestination)
      }

    return  (
        <button className='button-change'onClick={() => handleOnClick()}>
            <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M10 6L7 3M7 3L4 6M7 3V17M14 18L17 21M17 21L20 18M17 21V7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
            </svg>
        </button>
    )
}

export default CurrencyChangeButton

