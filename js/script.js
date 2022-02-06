function myButton(){
    var correct=0;
    var currentAnswer=document.questions.question1.value;
    var currentAnswer=document.questions.question2.value;
    var currentAnswer=document.questions.question3.value;
    var currentAnswer=document.questions.question4.value;
    var currentAnswer=document.questions.question5.value;
    if (currentAnswer=="Boolean"){correct+=20};
    document.write("your score"+correct);
}