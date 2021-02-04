function InserisciNumero(Message,min,max){
	let number=+prompt(Message)
	while(number<min || number>max){
        number = +prompt(messaggio)
    }
    return number
}
function Pari(num){
	
	if(num%2===0){
		return true 
	}
	else{
		return false
	}
}


function esercizio(min,max,n){
let mediamax
let p=0
let q=0
let med=0

	let list=[]
	for ( i = 0; i < n; i++) {
		list.push(InserisciNumero("inserisci valore",0, Infinity))

		while(list[i]<min || list[i]>max){
			list.push(InserisciNumero("inserisci valore",0, Infinity))
		}
	}
	for ( i = 0; i < n; i++){
		if (Pari(list[i])===true) {
			p+=1

		}
	}
	for ( i = 0; i < n; i++){
		if (list[i]>(min+max)/2) {
			q+=1
			med+=list[i]


		}
	 
	}
	mediamax=med/q
	alert("hai inserito "+n+" compresi tra "+min+ " e "+max+ " contenente "+p+" numeri pari e "+q+" numeri sopra la media tra "+min+ " e "+max+
		" la cui media è "+ mediamax)
}