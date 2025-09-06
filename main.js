let questions= [
{
    question: 'what is the capital of france?',
    Option:['madrid','cairo','tokyo','paris'],
    answer:'paris'
},
{ question:'which planet is known as red planet?',
    Option:['earth','mars','jupitor','saturn'],
    answer:'mars'},


 

{
    question: 'who painted the mona lisa?',
    Option:['picaso','van goph','da vincie','medhat'],
    answer:'da vincie'
},

{
    question: 'which is the largest ocean on earth?',
    Option:['altlantic','arctic','pacific ','indian'],
    answer:'pacific'
}

]
let q=document.getElementById('question')

let s=document.getElementById('score')
let btn=document.querySelectorAll('.obox .btn')
let end=document.getElementById('end')




let currentq=0
let score=0

function loadquestion(){


let load= questions[currentq]
q.innerText=load.question



btn.forEach((button , index) =>{

    button.textContent=load.Option[index]
    button.style.backgroundColor=''

})
 


}


function check(selected){

let correct=questions[currentq].answer

let selectedbutton=document.querySelector(`[onclick="check(${selected})"]` )

if( selectedbutton.textContent === correct   ){
score++;
s.textContent=`score: ${score}`
selectedbutton.style.background="green"

}else {selectedbutton.style.background="red"
} 


btn.forEach(button =>{

button.disabled=true

})


}
function nextquestion(){
currentq++ 

if(currentq < questions.length){loadquestion()

btn.forEach(button =>{

button.disabled=false})
end.style.backgroundColor= 'black'

}else{
alert(`quiz is over your finale score is (${score})`)}

 }


  loadquestion()

 

































