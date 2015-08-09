
$(document).ready(function() {



for (var i=1; i<100; i++){

if((i%3==0)&&(i%5==0)){
	$("#box").append('<p>FizzBuzz</p>');
}


else if(i%3==0){
	$("#box").append('<p>Fizz</p>');
	
}
else if(i%5==0){

	$("#box").append('<p>Buzz</p>');
}
else{
	$("#box").append('<p>' + i + '</p>');

}


}



});