	
"use strict"
const fetch =require("node-fetch")	
	 console.log("ciao")
	 fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data=> data.json())
	.then(data=> {
		let acc= data.reduce((acc,e)=>{
		return acc+=e.userId
		},0)

		console.log(acc)})

/*	.filter((e)=>{if(e.userId===10){return true}})
.forEach((e)=> 
console.log(e.id+ " " +e.body)) */
