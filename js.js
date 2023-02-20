let card = Array.from(document.getElementsByClassName('flip-card'))
let cardFliping = Array.from(document.getElementsByClassName('flip-card-inner'))
let cardBack= Array.from(document.getElementsByClassName('flip-card-back'))

cardBack[0].style.backgroundColor='blue'
cardBack[1].style.backgroundColor='green'
cardBack[2].style.backgroundColor='red'
cardBack[3].style.backgroundColor='yellow'
cardBack[4].style.backgroundColor='green'
cardBack[6].style.backgroundColor='blue'
cardBack[5].style.backgroundColor='yellow'
cardBack[7].style.backgroundColor='red'

let containers=[]
let c=0;

for (const [key, value] of card.entries()){
    card[key].onclick = function(){
        cardFliping[key].classList.add('trans')
        let newCard={
            newColor:cardBack[key].style.backgroundColor,
            newKey:key,
        }
        containers.push(newCard)
        if(containers.length===2){
            checkTheCard()
        }
    }
}
function checkTheCard(){
    if(containers[containers.length-1].newColor===containers[containers.length-2].newColor){
        c++;
        if(c===(card.length/2)){
            alert(`your score is ${c}`)
            for(let i=0;i<card.length;i++){
                cardFliping[i].classList.remove('trans')
            }
        }
        containers=[]
    }
    else{
        cardFliping[containers[containers.length-1].newKey].classList.remove('trans')
        cardFliping[containers[containers.length-2].newKey].classList.remove('trans')
        containers=[]

    }
}
