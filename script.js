let allTotal=0

function addToCart(element){
let mainEl=element.closest('.single-item')
let name= mainEl.querySelector('h3').innerText;
let price= mainEl.querySelector('.price').innerText;

let cartItems= document.querySelector('.cart-items');
price= price.substring(1);
price= parseInt(price);
let total= price 
allTotal += price

cartItems.innerHTML += `<div class="cart-single-item">
                        <h3> ${name}</h3>
                        <p><span> ${price}</span>$ </p> 
                        <button onclick="removeFromCart(this)" class="remove-item"> Ukloni </button>
                       </div>
                       
`;
document.querySelector('.total').innerText=`Ukupno: ${allTotal}$`
element.innerText='Dodato';
element.setAttribute('disabled','true');


}

function removeFromCart(element){
    let mainEl= element.closest('.cart-single-item');
    let price= mainEl.querySelector('p span').innerText
    let name= mainEl.querySelector('h3').innerText
    let items= document.querySelectorAll('.single-item');
    price= parseInt(price);
    allTotal -=price;
    document.querySelector('.total').innerText=`Total: ${allTotal}$`
    mainEl.remove();
    items.forEach(function(item){
        if(item.querySelector('.si-content h3').innerText === name){
           
            item.querySelector ('.actions button').removeAttribute('disabled');
            item.querySelector('.actions button').innerText ='Dodaj';
        }
     
    })


    
    
}