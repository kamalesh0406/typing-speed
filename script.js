var text = document.getElementById("text");
var character = 0;
var check = document.getElementById("test").textContent;
var text1=''
var start = 0;
var stop=0;
var speed = 0;
text.addEventListener('keydown',function(){
	if(character==0){
		start = new Date().getTime();
	}
	text1 = text.value
	if (check[character]!==text1[character]){
		text.style.color = "red";
		text.maxLength=character+1;
	}
	else{
		text.style.color = "green" ;
		character++;
		text.maxLength = check.length;
	}
	if(character == check.length){
		stop = new Date().getTime();
		speed = Math.floor((check.length)/((stop-start)/1000));
		alert("Your typing speed is "+speed+" words/second")
		character = 0;
		text.value = '';
	}
})
