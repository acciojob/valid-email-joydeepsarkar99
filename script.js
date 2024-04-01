function validEmail(str) {
	let flag = false; 
	if(str.length<5){
		flag = false;
	}else if(str[0] === "@" || str[str.length-1] === "@" || str[0] === "." || str[str.length-1] === "."){
		flag =  false;
	}else if(str.includes("@") && str.includes(".")){
		flag = true;
	}else{
		flag = false;
	}
	return flag;
}

Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

