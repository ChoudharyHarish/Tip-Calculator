let tipAmount = 0;
var length = document.querySelectorAll(".btn").length;
for(let i = 0; i < length; i++){
    var button = document.querySelectorAll(".btn")[i];
    button.addEventListener("click",function(){
        this.classList.toggle("btn2");
        var bill = document.querySelector('#bill');
        var people = document.querySelector('#people');
        var tipPercent = parseInt(this.innerHTML); 
        tipAmount =  (tipPercent * bill.value)/100;
        document.querySelector(".amount-cal").innerHTML = "$" + tipAmount;
        
    })
}

 function calVal() {
        var people = document.querySelector("#people").value;
        var totalAmount = tipAmount * people;
        document.querySelector(".amount-total").innerHTML = "$" + totalAmount;
    }
document.querySelector(".reset").addEventListener('click',function(){
    document.querySelector(".amount-cal").innerHTML = '$0.00';
    document.querySelector(".amount-total").innerHTML = '$0.00';
    for(let i = 0; i < 6; i++){
    let btn = document.querySelectorAll(".btn")[i];
        btn.classList.remove("btn2");
    }
})

