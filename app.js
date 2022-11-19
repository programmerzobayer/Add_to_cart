function updateProductNumber(proruct,price,incriment){
  const proructInput= document.getElementById(proruct + "-number");
  let productNumber = proructInput.value ;
  if(incriment == true){
    productNumber = parseInt(productNumber) + 1 ;
  } else if(incriment == false && productNumber >0){
    productNumber = parseInt(productNumber) - 1 ;
  }
  proructInput.value = productNumber ;
  const proructTotal = document.getElementById(proruct + "-total");
    proructTotal.innerText= productNumber * price ;
  calculateTotal();
}



document.getElementById("black-plus").addEventListener("click", function(){
 updateProductNumber("black", 10 , true)
})
document.getElementById("black-minus").addEventListener("click", function(){
 updateProductNumber("black", 10 , false)
})
document.getElementById("white-plus").addEventListener("click", function(){
 updateProductNumber("white", 8 , true)
})
document.getElementById("white-minus").addEventListener("click", function(){
 updateProductNumber("white", 8 , false)
})

 function  findInput(product){
    const inputFeiled =document.getElementById(product + "-number");
    const parseInteger= parseInt(inputFeiled.value);
    return parseInteger ;
 }
  function calculateTotal(){
    const balckNumber = findInput("black") * 10 ;
    const whiteNumber = findInput("white") *  8 ;
    const subtotal = balckNumber + whiteNumber ;
    const tax = subtotal /10 ;
    const total = subtotal + tax ;
    document.getElementById("subTotal").innerText= subtotal;
    document.getElementById("Tax").innerText= tax ;
    document.getElementById("Total").innerText= total;
  }
 
  function close(product, names ,price){
    const cancel =document.getElementById(product);
     cancel.addEventListener("click", function(){
        document.getElementById(names).remove()
        const sub= document.getElementById("subTotal").innerText;
       const  subtotal= sub -price ; 
        const tax = subtotal /10 ;
        document.getElementById("subTotal").innerText= subtotal;
    document.getElementById("Tax").innerText= tax ;
    document.getElementById("Total").innerText=subtotal;
        
     })
  }
  
  close("whiteClose", "white", valuess('white-total'))
  close("blackClose" ,"black", valuess('black-total'))

  function valuess(color){
   let val=  document.getElementById(color).innerText
   return val ;
  }

  


  document.getElementById("chackOut").addEventListener("click" , function(){
  const product= document.querySelector(".product");
  const fun= document.getElementById("fun");
  product.remove()
  fun.style.display= "block" ;

  })