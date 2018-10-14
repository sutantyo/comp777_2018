function f_a (){
		setTimeout(() => {
			console.log("A is done");
		},4000)
}

function f_b (){
		setTimeout(() => {
			console.log("B is done");
		},2000);
}

function f_c (){
		setTimeout(() => {
			console.log("C is done");
		},1000);
}

function f_d (){
	console.log("All done");
}

f_a();
f_b();
f_c();
f_d();
