
function confirmed() {
    var name=document.getElementById("bookname").value;
    var quantity=document.getElementById("quantity").value;
    var p=Number(quantity)*100;    
    alert("Book name "+name+" and quantity of books "+quantity);
    alert("Total price in rupees is: "+p);
    var x=confirm("Continue payment method???");
    return x;
}