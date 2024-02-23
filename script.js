let offer_bar = document.querySelector(".offer_bar")
let offer = document.getElementById("offer_closed")
offer.addEventListener("click",function(){
    offer_bar.style.display="none";
})

let sidenav = document.getElementById("side_nav")
let menu = document.getElementById("menu")
let close = document.getElementById("close")

menu.addEventListener("click",function(){
    sidenav.style.left=0
})
close.addEventListener("click",function(){
    sidenav.style.left="-40%"
})

let product = document.getElementById("product")
let search =  document.getElementById("search")
let productlist = product.querySelectorAll("div")
console.log(productlist)
search.addEventListener("keyup",function(){
    let entervalue = event.target.value.toUpperCase()

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