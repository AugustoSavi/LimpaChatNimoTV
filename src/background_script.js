const delay = ms => new Promise(res => setTimeout(res, ms));



async function start() {

    await delay(5000);
    
    function limpaTela(){
        
        Array.from(document.getElementsByClassName('nimo-room__rank n-as-rel'))[0].style.display = 'none';
        
        Array.from(document.getElementsByClassName('nimo-gift-banner n-as-abs n-as-of-hidden n-as-no-evt n-fx-col n-fx-sn n-as-padh n-as-bd-box'))[0].style.display = 'none';
        
        //a poura daquela caixinha que da de arrastar de um lado par ao outro
        document.querySelector("#root > div.n-fx-sn.n-as-w100 > div.n-fx1 > div:nth-child(1) > div > div.nimo-room__main.n-as-padv-lg.n-as-w-min1050 > div:nth-child(2) > div.nimo-room__activity.n-fx-se.n-fx-col > div").style.display = 'none'

        //tira a mensagem que fica se fixando no topo do chat
        //document.querySelector("#root > div.n-fx-sn.n-as-w100 > div.n-fx1 > div:nth-child(1) > div > div.nimo-room__main.n-as-padv-lg.n-as-w-min1050 > div:nth-child(2) > div.nimo-room__theater-section.n-as-mrgh-xxs-back.n-fx-bn.n-as-rel > div.n-as-mrgh-xxs.n-fx0.n-as-w340px.n-fx-bn.n-fx-col.bsc5.n-as-rnd.bc1.n-as-rel > div.n-fx1.bc1.n-as-rel.n-fx-bn.n-fx-col > div > div.n-fx1.n-fx-col.n-fx-bn > div.n-fx1.n-fx-sn.n-fx-col > div > div.top-message-list.n-as-abs.n-as-w100.fade-enter.fade-leave.fade-leave-active").display.display = 'none';
        
    }
    limpaTela();

    setInterval(function(){
        Array.from(document.getElementsByClassName('n-as-mrgb n-as-mrgh n-fx-sc c2')).forEach((element)=> {
            element.style.display = "none";
        });

    },50);

}
start();