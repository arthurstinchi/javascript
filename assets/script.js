let dolar = 5.80

let usdinput = document.querySelector("#usd")
let brlinput = document.querySelector("#brl")

usdinput.addEventListener("keyup", () => {
    usdinput.value = formatCurrency(usdinput.value)
})

brlinput.addEventListener("keyup", () => {
    brlinput.value = formatCurrency(brlinput.value)
})

usdinput.value = "1000,00"
convert("usd-to-brl")


//funções 

function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2, 
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)

}

function fixValue(value){
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}

function convert(type) {
    if(type == "usd-to-brl"){

    }
    
    if(type == "brl-to-usd"){

    }
}