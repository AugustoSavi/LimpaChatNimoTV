# LimpaChatNimoTV

cole no console do seu navegador na aba da stream

amanha eu monto uma extensão para ficar mais facil de usar

```
(() => {
Array.from(document.getElementsByClassName('nimo-room__rank n-as-rel'))[0].style.display = 'none';
Array.from(document.getElementsByClassName('nimo-gift-banner n-as-abs n-as-of-hidden n-as-no-evt n-fx-col n-fx-sn n-as-padh n-as-bd-box'))[0].style.display = 'none';
setInterval(function(){
 Array.from(document.getElementsByClassName('n-as-mrgb n-as-mrgh n-fx-sc c2')).forEach((element)=> {
    element.style.display = "none";
});
},100)
})()

```
