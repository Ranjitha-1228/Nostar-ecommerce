var offer_bar = document.querySelector(".offer_bar")
var offer = document.getElementById("offer_closed")
offer.addEventListener("click",function(){
    offer_bar.style.display="none";
})

var sidenav = document.getElementById("side_nav")
var menu = document.getElementById("menu")
var close = document.getElementById("close")

menu.addEventListener("click",function(){
    sidenav.style.left=0
})
close.addEventListener("click",function(){
    sidenav.style.left="-40%"
})

var product = document.getElementById("product")
var search =  document.getElementById("search")
var productlist = product.querySelectorAll("div")
console.log(productlist)
search.addEventListener("keyup",function(){
    var entervalue = this.target.value.toUpperCase()

    for (count=0;count<productlist.length;count=count+1){
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(entervalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})