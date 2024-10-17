const number = document.querySelector("#quiz-nr");
const question = document.querySelector("#question");
const btnPoke = document.querySelector('#whatPok');
const fa1 = document.querySelector("#fa1");
const fa2 = document.querySelector("#fa2");
const fa3 = document.querySelector("#fa3");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
var curInd = 1;
var points = 0;

function nextAns(){
    if(curInd == 1){
        number.innerText = 'Question 2: ';
        question.innerText = "What's your greates weakness?";
        fa1.innerText = 'Selfish';
        fa2.innerText = 'Stubborn';
        fa3.innerText = 'Perfection-ist';
        if(a1.checked == true){
            points += 30;
        } else if(a2.checked == true){
            points += 10;
        } else if(a3.checked == true){
            points += 20;  
        }
    } else
    if(curInd == 2){
        number.innerText = 'Question 3: ';
        question.innerText = 'Are you strong?';
        fa1.innerText = 'I lift weights every morning!';
        fa2.innerText = 'Sometimes';
        fa3.innerText = 'I am a complete weakling!';
        if(a1.checked == true){
            points += 10;
        } else if(a2.checked == true){
            points += 20;
        } else if(a3.checked == true){
            points += 30;
        }
    } else if(curInd == 3){
        number.innerText = 'Question 4: ';
        question.innerText = 'Do you like fire types?';
        fa1.innerText = 'Yes!';
        fa2.innerText = 'No, I prefer water types.';
        fa3.innerText = 'No, I prefer grass types.';
        if(a1.checked == true){
            points += 30;
        } else if(a2.checked == true){
            points += 20;
        } else if(a3.checked == true){
            points += 10;
        }
    } else if(curInd == 4){
        number.innerText = 'Question 5: ';
        question.innerText = 'What do you prefer?';
        fa1.innerText = 'Attacking really well.';
        fa2.innerText = 'Defending really well.';
        fa3.innerText = 'Sleeping!';
        if(a1.checked == true){
            points += 30;
        } else if(a2.checked == true){
            points += 20;
        } else if(a3.checked == true){
            points += 10;
        }
    } else if(curInd == 5){
        
        if(a1.checked == true){
            points += 20;
        } else if(a2.checked == true){
            points += 10;
        } else if(a3.checked == true){
            points += 30;
        }
        whatPokemon(points);
    }
    
    a1.checked = false;
    a2.checked = false;
    a3.checked = false;
    curInd++;
    console.log(curInd, points);
};

function whatPokemon(points){
    let srcPath;
    let source;
    let name;
    btnPoke.disabled = false;
    if(points <= 70){
        name = "magikarp";
        srcPath = "129";
    } else if(points > 70 && points <= 90){
        name = "diglett";
        srcPath = "50";
    } else if(points > 90 && points <= 110){
        name = "rattata";
        srcPath = "19";
    } else if(points > 100 && points <= 130){
        name = "pikachu";
        srcPath = "25";
    } else if(points > 130){
        name = "snorlax";
        srcPath = "143";
    }

    document.querySelector('.card-title').innerText = 'You are: ' + name;
    number.innerText = "";
    question.innerText = "Your PokeDex-Index is " + srcPath;
    document.querySelector('#form').innerHTML = "";
    document.querySelector('.card-text').innerHTML = "";
    document.querySelector('.card').classList.add("text-center");
    source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${srcPath}.png`;
    document.querySelector('.card-text').innerHTML = `<img src="${source}" height="300"></img>`;
}