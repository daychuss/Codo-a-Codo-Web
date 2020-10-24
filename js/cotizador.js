var subtotal = document.getElementById('calcular');

subtotal.addEventListener('click', funcionC);

function funcionC(){

    var pasedia = document.getElementById('pase_dia');

    var pasetot = document.getElementById('pase_completo');

    var pasex2 = document.getElementById('pase_dosdias');

    var camisetas = document.getElementById('camisa_evento');

    var etiketas = document.getElementById('etiquetas');

    var totdia = pasedia.value * 30;

    console.log(totdia)

    var tottot = pasetot.value * 50;

    console.log(tottot)

    var totx2 = pasex2.value * 45;

    console.log(totx2)

    var camisas = camisetas.value * 10;   
    
    console.log(camisas)

    var dtocam = camisas - ((camisas * 7)/100);

    console.log(dtocam)

    var toteti = etiketas.value * 2;

    console.log(toteti)

    document.getElementById('lista-productos').style.display = 'block';

   var textoAgregado = document.getElementById('lista-productos');

   var resumen = totdia + tottot + totx2 + camisas + toteti;
   
   textoAgregado.textContent = '$' + resumen + ' (sin descuentos)';

   var textoA = document.getElementById('suma-total');

   var total = totdia + tottot + totx2 + dtocam + toteti;

   textoA.textContent = '$' + total;

}

var agregarOverlay = document.getElementById('btnRegistro')

agregarOverlay.addEventListener('click', activarModal)

function activarModal(){

    document.getElementById('overlay').style.display = 'block'

    document.getElementById('modal').style.display = 'block'

    console.log('Probando modal')
}

var cerrarModal = document.getElementById('hide-modal')

cerrarModal.addEventListener('click', salir)

function salir(){

    document.getElementById('overlay').style.display = 'none';

    document.getElementById('modal').style.display = 'none';

    alert('Aguarde, se lo redireccionara a la pagina para que haga el pago');

}