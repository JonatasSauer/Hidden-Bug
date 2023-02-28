     let contDeg = 0
     let contDegBack = 0
     let contInfo = -1170
     let carroselAuto = true
     const expandeInfos = document.querySelector('#expande-info');
     const carrossel = document.querySelector('.carrosel');
     const backCarrossel = document.querySelector('#back-carrossel')
     const btnLeft = document.querySelector('.button-left');
     btnLeft.addEventListener('click', () => {
       contDeg += 36
       contDegBack -= 36
       contInfo += 130
       if(contInfo == 130){
          contInfo = -1170
        }
       carrossel.style.cssText = `transform: rotateY(${contDeg}deg);`
       backCarrossel.style.cssText = `transform: rotateY(${contDegBack}deg);`
       expandeInfos.style.cssText = `margin-top: ${contInfo}px;`
     });btnLeft.addEventListener('mousemove', () => {carroselAuto = false});
    

    const btnRight = document.querySelector('.button-right');
    btnRight.addEventListener('click', () => {
        contDeg -= 36
        contDegBack += 36
        contInfo -= 130
        if(contInfo == -2470){
          contInfo = -1170
        }
        carrossel.style.cssText = `transform: rotateY(${contDeg}deg);`
        backCarrossel.style.cssText = `transform: rotateY(${contDegBack}deg);`
        expandeInfos.style.cssText = `margin-top: ${contInfo}px;`
    });btnRight.addEventListener('mousemove', () => {carroselAuto = false});
 

    setInterval(function(){
      if(carroselAuto){
        contDeg -= 36
        contDegBack += 36
        contInfo -= 130
        if(contInfo == -2470){
          contInfo = -1170
        }
        carrossel.style.cssText = `transform: rotateY(${contDeg}deg);`
        backCarrossel.style.cssText = `transform: rotateY(${contDegBack}deg);`
        expandeInfos.style.cssText = `margin-top: ${contInfo}px;`
      } 
    }, 4000);