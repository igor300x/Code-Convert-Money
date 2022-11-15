const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.2;
const btc = 102110.8;
const euro = 5.15; 

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);
    
    if (select.value === 'US$ Dólar americano') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar); }
    
   
    if (select.value === 'Bitcoin') {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-WO',
        { style: 'currency', currency: 'BTC' }
    ).format(inputReais / btc); }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro); }

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "img/estados-unidos (1) 1.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "img/eua.svg"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "BTC"
        currencyImg.src = "img/btc.png"
    }  
    convertValues ()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)