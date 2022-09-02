const carrito=[];

function ropa(marca,color,talle) {

    this.marca=marca;
    this.color=color;
    this.talle=talle;
}
const buzo1= new ropa("yor","negro","Saxl");
const gorro2= new ropa("yor","bordo","unico");
const jogger3= new ropa("yor","negro","salxl");

let buzocanguro=document.getElementById("buzo1");
let gorrolana=document.getElementById("gorro2");
let joggers=document.getElementById("jogger3");

buzocanguro.onclick=()=>{    
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
      });
    carrito.push(buzo1);
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


gorrolana.onclick=()=>{    
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
      });
    carrito.push(gorro2);
    console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(carrito));
}

joggers.onclick=()=>{    
    Swal.fire({
        position: 'mid',
        icon: 'success',
        title: 'Agregaste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
      });
    carrito.push(jogger3);
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));
}



