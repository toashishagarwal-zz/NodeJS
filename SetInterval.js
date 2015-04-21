var intervalId = setInterval(recur, 1000);


function recur(){
	console.log("Hello");
	intervalId.unref();
}