function convert() {
    let amount = Number(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("chuyendoi1").value;
    let toCurrency = document.getElementById("chuyendoi2").value;

    let result = 0;
    if(fromCurrency=="USD" && toCurrency=="VND")
    {
        result = amount*23000 + toCurrency;
    }
    else
        {
        if(fromCurrency=="VND" && toCurrency=="USD")
        {
            result = amount/23000 + toCurrency;
        }
        else
            {
            result = "nhap lai";
        }
    }
    document.getElementById("result").innerText=result;

}