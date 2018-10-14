function f_a (callback){
		setTimeout(() => {
			console.log("A is done");
      callback();
		},4000)
}

function f_b (callback){
		setTimeout(() => {
			console.log("B is done");
      callback();
		},2000);
}

function f_c (){
	console.log("All done");
}

f_a(f_b(f_c));
