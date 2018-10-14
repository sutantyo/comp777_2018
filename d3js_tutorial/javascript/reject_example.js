function promise_a (){
  return new Promise( (resolve,reject) => {
		setTimeout(() => {
      	resolve('A is done');
		},4000)
  })
}

function promise_b (input){
  console.log(input)
  return new Promise( (resolve,reject) => {
		return reject('B was rejected');
		setTimeout(() => {
			resolve('B is done');
		},2000);
  })
}

function promise_c (input){
  console.log(input);
  console.log('All done');
}

promise_a()
    .then( (value) => promise_b(value) )
    .then( (value) => promise_c(value) )
		.catch( (error) => console.log(error) )
