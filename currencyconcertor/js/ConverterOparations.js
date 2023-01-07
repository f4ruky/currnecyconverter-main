
const select = document.querySelectorAll(".currency")
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
        select[0].innerHTML += `<option value="${ObjectForeingData[i]}">${ObjectForeingData[i]}</option>}`    
        select[1].innerHTML += `<option value="${ObjectForeingData[i]}">${ObjectForeingData[i]}</option>}`    
    }
}

function SendDbData(targetCurrency, destinationCurrency) {

    const url = "http://localhost:2331/Sendcurrency";

    $.post( url, { TargetCurrency: targetCurrency, DestinationCurrency: destinationCurrency })
    .done(function( data ) {
      alert( "Data Loaded: " + data );
    });
}




$(document).ready(async function() {
    await GetJsonForeingValues();
    btn.addEventListener("click",() => {
        if(select[0].value != select[1]){
            var url = `https://api.frankfurter.app/latest?amount=${input.value}&from=${select[0].value}&to=${select[1].value}`
            // fetch (
                
            // ).then((val) => {
            //     console.log(val.rates);
            //     convertedResult.value =  Object.values(JSON.stringify(val.rates))[0];
            // });

            $.get(url)
            .done(function( data ) {
              console.log();
              convertedResult.value =  Object.values(data.rates)[0];
            });
        }
        else{
            alert("Choose Diffrent Currencies !!!")
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