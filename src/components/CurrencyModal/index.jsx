import './styles.css'

const CurrencyModal = ({ currencies, typeOfCurrency, setShowModal, setBaseCurrency, setDestinationCurrency}) => {

    const handleOnClick = (code) => {
        if(typeOfCurrency === 'base') {
            setBaseCurrency(code)
        }
        if(typeOfCurrency === 'destination') {
            setDestinationCurrency(code)
        }
        
        setShowModal('')
    }
    
    return(
        <>
            <div className='darkBG' onClick={() => setShowModal('')}/>
            <div className='centered'>
                <div className='modal'>
                    <div className='modal-header'>
                        <div className='modal-title'> {typeOfCurrency.toUpperCase()}</div>
                        <button className='button-close' onClick={() => setShowModal('')}>
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="white"/>
                                <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div className='modal-container'>
                        {currencies.map(({code}) => (
                            <button className='currency-selector'key={code} onClick={() => handleOnClick(code)}>{code}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default CurrencyModal