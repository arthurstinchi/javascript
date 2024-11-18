let dolar = 5.80

let usdinput = document.querySelector("#usd")
let brlinput = document.querySelector("#brl")

usdinput.addEventListener("blur", () => {
    usdinput.value = formatCurrency(usdinput.value)
    convert("usd-to-brl")
})

brlinput.addEventListener("blur", () => {
    brlinput.value = formatCurrency(brlinput.value)
    convert("brl-to-usd")
})

usdinput.addEventListener("keydown",(event) => {
    if (event.key === "Enter"){
        usdinput.value = formatCurrency(usdinput.value);
        convert("usd-to-brl");
    }
})

brlinput.addEventListener("keydown",(event) => {
    if (event.key === "Enter"){
        brlinput.value = formatCurrency(brlinput.value);
        convert("brl-to-usd")
    }
})

usdinput.addEventListener("input", () => {
    usdinput.value = usdinput.value.replace(/[^\d,.-]/g, '').replace(",", ".");
})

brlinput.addEventListener("input", () => {
    brlinput.value = brlinput.value.replace(/[^\d,.-]/g, '').replace(",", ".");
})

//funções 

function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: true,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2, 
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedValue)

}

function fixValue(value){
    let fixedValue = value.replace(/[^\d,.-]/g, '').replace(",",".")
    let floatValue = parseFloat(fixedValue)
    if(isNaN(floatValue)){
        floatValue = 0
    }
    return floatValue
    }



function convert(type) {
    if(type == "usd-to-brl"){
        let fixedValue = fixValue(usdinput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)
        brlinput.value = formatCurrency(result)
    }
    
    if(type == "brl-to-usd"){
        let fixedValue = fixValue(brlinput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)
        usdinput.value = formatCurrency(result)
    }
}