"use strict"
const fetch =require("node-fetch")
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(data => data.json())
    .then(data => {
    let uno = data.filter((e)=>  e.userId===4)
      uno.forEach(e=>console.log(e.id)) 

    let due= data.filter((e)=>e.id%2!==0
        ) 
      due.forEach(e=>console.log(e.id))
    
    let tre=
        data.filter(el=> el.title.split(" ").length%2===0
        )
        tre.forEach(e=>console.log(e.id))
       
     
    let quattro= data.filter(element => element.body.split("").length%3===0)
      quattro.forEach(e=>console.log(e.id))
   
    let acc = data.reduce((acc, e) => {  if(e.body.split("")[0]==="s"){
      return acc+=e.body}
      return acc
    }, "")
    console.log(acc)
  })
      