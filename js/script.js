function myButton(){
    var score=0;
    var currentAnswer1=document.questions.question1.value;
    var currentAnswer2=document.questions.question2.value;
    var currentAnswer3=document.questions.question3.value;
    var currentAnswer4=document.questions.question4.value;
    var currentAnswer5=document.questions.question5.value;
    var result=document.getElementById('feedback')
    if (currentAnswer1=="Boolean"){score+=20};
    if (currentAnswer2=="One cannot write multiple codes without executing them"){score+=20};
    if (currentAnswer3=="It is a collection code that can be reused"){score+=20};
    if (currentAnswer4=="center"){score+=20};
    if (currentAnswer5=="Allow us to run the code multiple times depending on whether a condition remains true"){score+=20};
    questions.style.display="none"
    result.textContent=score;

if (score>80){
    result.textContent='congratulations! you scored' + score + 'you have excellently passed'
}  else if(score=>50){
    result.textContent='congratulations! you scored' + score + 'you have fairly passed'
}   else{
    result.textContent='you scored'+ score + 'you have scored poorly and you need to retake the test'
}

    // document.write("your score"+correct);
    // document.write(score);
    
}
