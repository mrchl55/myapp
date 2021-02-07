// GET DATE
const today = new Date();
function getDay(){
   
    let dd = String(today.getDate()).padStart(2, '0');
    
    return dd;
   
    
}
function getYear(){

    let yyyy = today.getFullYear();
    
    return yyyy;
   
    
}
function getMonth(){

    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
return mm;
   
    
}


// /GET DATE

// FIRST COLUMN
var currencyName = '';
fetch('https://api.exchangeratesapi.io/latest?base=PLN').then((response) => {
    response.json().then((data) => {
      

        for (const rates in data.rates) {
            document.querySelector('.rates').innerHTML += `<li> <a href="#"> <span class="currency-name">${rates}</span> : <span style="color:green">${data.rates[rates]}</span> </a></li>`


          }

          getListItems();
       
    })
})
function getListItems(){
    const itemList = document.querySelectorAll('.rates li a');

    itemList.forEach((item) => {
       item.addEventListener('click', () => {
           itemList.forEach((item) => {
removeRecentData();
              removeCurrencyName();
            item.classList.remove("selected");
           })
           
           item.classList.add("selected");

      
              setCurrencyName();
    getRecentData();

       })
    })

}

function setSelectedItem(){

    
    const selectedItem = document.querySelector('.selected ');
    
}


function setCurrencyName(){
    currencyName = document.querySelector('.rates li a.selected .currency-name').textContent;

}
function removeCurrencyName(){
    currencyName = '';
}
// END OF FIRST COLUMN 



// SECOND COLUMN
function removeRecentData(){
    document.querySelector('.rates2').innerHTML = '';
}
function getRecentData(){
fetch(`https://api.exchangeratesapi.io/history?start_at=2021-02-01&end_at=${getYear()}-${getMonth()}-${getDay()}&base=PLN`).then((response) => {
    response.json().then((data) => {
      

        for (const rates in data.rates) {
            value = data.rates[rates];
            document.querySelector('.rates2').innerHTML += `<li> <a href="#"> <b>${rates}</b> : <span style="color:green">` + value[''+currencyName+''] + `</span> </a></li>`
        //   console.log(value.USD);
          
            // for(let key in value){
            //     console.log(key + value[key]);
            // }
          }
          

      
    })
})
}

// END OF SECOND COLUMN