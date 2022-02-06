function myButton(){
    var correct=0;
    var currentAnswer=document.questions.question1.value;
    var currentAnswer=document.questions.question2.value;
    var currentAnswer=document.questions.question3.value;
    var currentAnswer=document.questions.question4.value;
    var currentAnswer=document.questions.question5.value;
    if (currentAnswer=="Boolean"){correct+=20};
    if (currentAnswer=="one cannot write multiple codes without executing them"){correct+=20}
    if (currentAnswer=="It is a collection of codes that can be reused")
    document.write("your score"+correct);
}