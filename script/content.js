//Função de aparecer o conteudo

  const buttonContent = document.querySelector('#show-content');
  buttonContent.addEventListener('click', ()=>{
     document.querySelector('#home-content').style.cssText = "margin-top:140vh;";
     document.querySelector('.container-content').style.cssText = "opacity:100%; scale:1; transform:rotateY(0deg); margin-left:0;";
    document.querySelector('body').style.cssText = "overflow:hidden;"
    document.querySelector('.card1').style.cssText = " opacity:100%; transform:rotateY(0deg)";
  });

//Função de rolagem do conteudo

 const buttonAlert = document.querySelector('#button-alert');
 buttonAlert.addEventListener('click', () =>{
   document.querySelector('.card1').style.cssText = "margin-left:-100vw; opacity:0; transform:rotateY(90deg)";
   document.querySelector('.card2').style.cssText = "opacity:100%; transform:rotateY(0deg)";
});

const buttonIntroReturn = document.querySelector('#button-intro-return');
 buttonIntroReturn.addEventListener('click', () => {
   document.querySelector('.card1').style.cssText = "margin-left:0; opacity:100%; transform:rotateY(0deg)";
   document.querySelector('.card2').style.cssText = "opacity:0; transform:rotateY(90deg)";
});


  const buttonIntro = document.querySelector('#button-intro');
  buttonIntro.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-200vw;"
    document.querySelector('.card2').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card3').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });

const buttonObsoletasReturn = document.querySelector('#button-obsoletas-return');
 buttonObsoletasReturn.addEventListener('click', () => {
   document.querySelector('.card1').style.cssText = "margin-left:-100vw; opacity:0; transform:rotateY(90deg)";
   document.querySelector('.card2').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card3').style.cssText = "opacity:0; transform:rotateY(90deg)"; 
});

const buttonObsoletas = document.querySelector('#button-obsoletas');
  buttonObsoletas.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-300vw;"
    document.querySelector('.card3').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card4').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });

const buttonCriacaoReturn = document.querySelector('#button-criacao-return');
 buttonCriacaoReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-200vw;"
    document.querySelector('.card3').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card4').style.cssText = "opacity:0%; transform:rotateY(90deg)";
});

const buttonCriacao = document.querySelector('#button-criacao');
  buttonCriacao.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-400vw;"
    document.querySelector('.card4').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card5').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });

const buttonEvolucaoReturn = document.querySelector('#button-evolucao-return');
 buttonEvolucaoReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-300vw;"
    document.querySelector('.card4').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card5').style.cssText = "opacity:0%; transform:rotateY(90deg)";
});

const buttonEvolucao = document.querySelector('#button-evolucao');
  buttonEvolucao.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-500vw;"
    document.querySelector('.card5').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card6').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });


const buttonAltonivelReturn = document.querySelector('#button-altonivel-return');
 buttonAltonivelReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-400vw;"
    document.querySelector('.card5').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card6').style.cssText = "opacity:0%; transform:rotateY(90deg)";
});

const buttonAltonivel = document.querySelector('#button-altonivel');
  buttonAltonivel.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-600vw;"
    document.querySelector('.card6').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card7').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });

const buttonHibridasReturn = document.querySelector('#button-hibridas-return');
 buttonHibridasReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-500vw;"
    document.querySelector('.card6').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card7').style.cssText = "opacity:0; transform:rotateY(90deg)";
});

const buttonHibridas = document.querySelector('#button-hibridas');
  buttonHibridas.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-700vw;"
    document.querySelector('.card7').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card8').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });


const buttonFrameworksReturn = document.querySelector('#button-frameworks-return');
 buttonFrameworksReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-600vw;"
    document.querySelector('.card7').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card8').style.cssText = "opacity:0; transform:rotateY(90deg)";
});

const buttonFrameworks = document.querySelector('#button-frameworks');
  buttonFrameworks.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-800vw;"
    document.querySelector('.card8').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card9').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });


const buttonConclusaoReturn = document.querySelector('#button-conclusao-return');
 buttonConclusaoReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-700vw;"
    document.querySelector('.card8').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card9').style.cssText = "opacity:0; transform:rotateY(90deg)";
});


const buttonConclusao = document.querySelector('#button-conclusao');
  buttonConclusao.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:-900vw;"
    document.querySelector('.card9').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('.card10').style.cssText = "opacity:100%; transform:rotateY(0deg)";
  });

const buttonFinalizarReturn = document.querySelector('#button-finalizar-return');
 buttonFinalizarReturn.addEventListener('click', () => {
    document.querySelector('.card1').style.cssText = "margin-left:-800vw;"
    document.querySelector('.card9').style.cssText = "opacity:100%; transform:rotateY(0deg)";
    document.querySelector('.card10').style.cssText = "opacity:0; transform:rotateY(90deg)";
});

const buttonFinalizar = document.querySelector('#button-finalizar');
  buttonFinalizar.addEventListener('click', () =>{
    document.querySelector('.card1').style.cssText = "margin-left:0vw; opacity:0;"
    document.querySelector('.card10').style.cssText = "opacity:0; transform:rotateY(90deg)";
    document.querySelector('#home-content').style.cssText = "margin-top:0;";
    document.querySelector('.container-content').style.cssText = 
  "opacity:0; scale:.9; transform:rotateY(90deg); margin-left:0;";
    document.querySelector('body').style.cssText = "overflow:none;"
  });


