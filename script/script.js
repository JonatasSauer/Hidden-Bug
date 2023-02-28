//funções cabeçalho
    const menu = document.querySelector('.navegation');
    const bodyGet = document.querySelector('body')
    const btnClosed = document.querySelector('#btn-closed'); 
      btnClosed.addEventListener('click', () => {
      backBlur.style.cssText = "scale:1; opacity:100%; left:0;"
      menu.style.cssText = "transform: translateX(-100%);"
      bodyGet.style.cssText = "overflow: hidden;"
    });

    const btnOpen = document.querySelector('#btn-open');
    btnOpen.addEventListener('click', () => {
      backBlur.style.cssText = "scale:0; opacity: 0;left:100%;"
      menu.style.cssText = "transform: translateX(0);"
      bodyGet.style.cssText = "overflow: none;"
    });

    const backBlur = document.querySelector('.back-blur')
      backBlur.addEventListener('click', () => {
      backBlur.style.cssText = "scale:0; opacity: 0;left:100%;"
      menu.style.cssText = "transform: translateX(0)"
      bodyGet.style.cssText = "overflow: none;"
});

//funções rodape
    const contatoTexto = document.querySelector('#title-contact');
    const boxContact = document.querySelector('.container-redirect');
    const contentMain = document.querySelector('#home-content')
    const flexRedirect = document.querySelector('.flex-redirect');
    const boxLinkedin = document.querySelector('#icone-linkedin');
    const boxGithub = document.querySelector('#icone-github');
    const boxWhats = document.querySelector('#icone-whats');
    const iconLinkedin = document.querySelector('.icon-linkedin');
    iconLinkedin.addEventListener('mousemove',() =>{
        contatoTexto.innerHTML = "Linkedin"
        contatoTexto.style.color = " #2b63ea"
    });iconLinkedin.addEventListener('mouseout',() =>{
        contatoTexto.innerHTML = "Contatos"
        contatoTexto.style.color = "#bbb"
    });iconLinkedin.addEventListener('click', () => {
        boxContact.style.cssText = "top:50%; background: rgba(43, 99, 234, .8); box-shadow: 0px 0px 10px #2b63ea; border: 2px solid #2b63ea;"
        flexRedirect.style.cssText = "margin-left: 0; transform:rotateY(0);"
        boxLinkedin.style.scale = "2.7"
        boxGithub.style.scale = "1.8"
        boxWhats.style.scale = "1.8"
        contentMain.style.cssText = "filter:blur(5px);"
        bodyGet.style.cssText = "overflow: hidden;"
    });

    const iconGithub = document.querySelector('.icon-github');
    iconGithub.addEventListener('mousemove',() =>{
        contatoTexto.innerHTML = "GitHub"
        contatoTexto.style.cssText = "color: #fff;"
    });iconGithub.addEventListener('mouseout',() =>{
        contatoTexto.innerHTML = "Contatos"
        contatoTexto.style.cssText = "color: #bbb;"
    });iconGithub.addEventListener('click', () => {
        boxContact.style.cssText = " background: rgba(0, 0, 0, .8); box-shadow: 0px 0px 10px #000; top:50%; border:2px solid #222;"
        flexRedirect.style.cssText = "margin-left:-600px; transform:rotateY(180deg);"
        boxLinkedin.style.scale = "1.8"
        boxGithub.style.scale = "2.7"
        boxWhats.style.scale = "1.8"
        contentMain.style.cssText = "filter:blur(5px);"
        bodyGet.style.cssText = "overflow: hidden;"
    });

    const iconWhats = document.querySelector('.icon-whats');
    iconWhats.addEventListener('mousemove',() =>{
        contatoTexto.innerHTML = "Whatsapp"
        contatoTexto.style.cssText = "color: #3ddb8f;"
    });iconWhats.addEventListener('mouseout',() =>{
        contatoTexto.innerHTML = "Contatos"
        contatoTexto.style.cssText = "color: #bbb;"
    });iconWhats.addEventListener('click', () => {
        boxContact.style.cssText = "background: rgba(18, 179, 105, .8); border:solid 2px #12B269; top:50%; box-shadow: 0px 0px 10px #12B269;"
        flexRedirect.style.cssText = "margin-left: -1200px; transform:rotateY(360deg);"
        boxLinkedin.style.scale = "1.8"
        boxGithub.style.scale = "1.8"
        boxWhats.style.scale = "2.7"
        contentMain.style.cssText = "filter:blur(5px);"
        bodyGet.style.cssText = "overflow: hidden;"
    });

//Funções contatos

    boxLinkedin.addEventListener('mousemove', () => {
         boxContact.style.cssText = "top:50%; background: rgba(43, 99, 234, .8); box-shadow: 0px 0px 10px #2b63ea; border: 2px solid #2b63ea;"
        flexRedirect.style.cssText = "margin-left: 0; transform:rotateY(0);"
        boxLinkedin.style.scale = "2.7"
        boxGithub.style.scale = "1.8"
        boxWhats.style.scale = "1.8"
    });

    VanillaTilt.init(document.querySelectorAll(".redirect-linkedin"),{
          scale: 1.00, //escala
          reverse: true, //direção
          glare:false, //brilho
          "maxglare": 0.5, //opacidade
      });

    boxGithub.addEventListener('mousemove', () => {
         boxContact.style.cssText = " background: rgba(0, 0, 0, .8); box-shadow: 0px 0px 10px #000; top:50%; border:2px solid #222;"
        flexRedirect.style.cssText = "margin-left:-600px; transform:rotateY(180deg);"
        boxLinkedin.style.scale = "1.8"
        boxGithub.style.scale = "2.7"
        boxWhats.style.scale = "1.8"
    });
    VanillaTilt.init(document.querySelectorAll(".redirect-github"),{
          scale: 1.00, //escala
          reverse: false, //direção
          glare:false, //brilho
          "maxglare": 0.5, //opacidade
      });

    boxWhats.addEventListener('mousemove',() =>{
      boxContact.style.cssText = "background: rgba(18, 179, 105, .8); border:solid 2px #12B269; top:50%; box-shadow: 0px 0px 10px #12B269;"
        flexRedirect.style.cssText = "margin-left: -1200px; transform:rotateY(360deg);"
        boxLinkedin.style.scale = "1.8"
        boxGithub.style.scale = "1.8"
        boxWhats.style.scale = "2.7"
    });
    VanillaTilt.init(document.querySelectorAll(".redirect-whats"),{
          scale: 1.00, //escala
          reverse: true, //direção
          glare: false, //brilho
          "maxglare": 0.1, //opacidade
      });

     const voltarLinkedin = document.querySelector('#voltar-linkedin')
     voltarLinkedin.addEventListener('click', () => {
        boxContact.style.top = "-50%"
        contentMain.style.cssText = "filter:blur(0);"
        bodyGet.style.cssText = "overflow: none;"
     });

    const voltarGithub = document.querySelector('#voltar-github')
        voltarGithub.addEventListener('click', () => {
        boxContact.style.top = "-50%"
        contentMain.style.cssText = "filter:blur(0);"
        bodyGet.style.cssText = "overflow: none;"
     });

    const voltarWhats = document.querySelector(' #voltar-whats')
     voltarWhats.addEventListener('click', () => {
        boxContact.style.top = "-50%"
        contentMain.style.cssText = "filter:blur(0);"
        bodyGet.style.cssText = "overflow: none;"
     });

const termosAbrir = document.querySelector('.terms span');
termosAbrir.addEventListener('click', () =>{
    document.querySelector('.termos').style.cssText = "scale:1;"
    document.querySelector('body').style.cssText = "overflow: hidden;"
    document.querySelector('#home-content').style.cssText = "filter: blur(7px);"
});

const termosFechar = document.querySelector('.termos')
termosFechar.addEventListener('click', () =>{
    document.querySelector('.termos').style.cssText = "scale:0;"
    document.querySelector('body').style.cssText = "overflow: none;"
    document.querySelector('#home-content').style.cssText = "filter: blur(0);"
});


