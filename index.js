	
"use strict"
const fetch =require("node-fetch")	
	 console.log("ciao")
	 fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data=> data.json())
	.then(data=>{
		for (let i=0 ; i<=50 ;i++){
			data[i].userId+=1
			if (data[i].userId%2===0) {
				console.log( data[i])
				
			}
				
			}
		}) 