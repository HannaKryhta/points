const button=document.querySelector('.btn');
button.addEventListener('click',answer);

const par=document.querySelector('#result');

function answer(e){
    e.preventDefault();
     let points=0;
   

     if(document.querySelector('#answer1').checked ){
     points++;
     }

     if(document.querySelector('#answer2').checked ){
        points++;
        }

        if(document.querySelector('#answer3').checked ){
            points++;
            }
            if(document.querySelector('#answer4').checked ){
                points++;
                }
                if(document.querySelector('#answer5').checked ){
                    points++;
                    }
                    if(document.querySelector('#answer6').checked ){
                        points++;
                        }

                        if(document.querySelector('#answer7').checked ){
                            points++;
                            }
                            if(document.querySelector('#answer8').checked ){
                                points++;
                                }

 par.textContent="Ваши ответы: " + points;

}
