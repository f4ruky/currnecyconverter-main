
const exchangeInput = document.querySelectorAll(".currency")
const btn = document.getElementById("btn")
const input = document.getElementById("input")
const convertedResult = document.getElementById("result")

async function GetJsonForeingValues() {
    const url = "https://api.frankfurter.app/currencies";
    await $.get( url, function( data ) {
        return EmbadedDatas(Object.keys(data));
      });
}

function EmbadedDatas(ObjectForeingData) {
    for(var i = 0; i<ObjectForeingData.length; i++){
        exchangeInput[0].innerHTML += `<option value="${ObjectForeingData[i]}">${ObjectForeingData[i]}</option>}`    
        exchangeInput[1].innerHTML += `<option value="${ObjectForeingData[i]}">${ObjectForeingData[i]}</option>}`    
    }
}

function SendDbData(objectTypeExchange) {
  console.log(objectTypeExchange)
    const url = "http://localhost/exchange";
    console.log(objectTypeExchange)
    $.post( url, {
       ExchangeType:{ "Target": objectTypeExchange[0], "Destination": objectTypeExchange[1] },
       ExchangeAmount:{ "Target": objectTypeExchange[2], "Destination": objectTypeExchange[3] }
      })
    .done(function( data ) {
      console.log(data);
    });
}

$(document).ready(async function() {
    await GetJsonForeingValues();
    btn.addEventListener("click",() => {
        if(exchangeInput[0].value != exchangeInput[1].value){
            var url = 
            `https://api.frankfurter.app/latest?amount=${input.value}&from=${exchangeInput[0].value}&to=${exchangeInput[1].value}`

            $.get(url)
            .done(function( data ) {
              convertedResult.value =  Object.values(data.rates)[0];
              var objectTypeExchange = 
              [exchangeInput[0].value,exchangeInput[1].value,
              input.value, convertedResult.value];
              SendDbData(objectTypeExchange)
            });
        }
        else{
          convertedResult.value = input.value;
        }
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
  }