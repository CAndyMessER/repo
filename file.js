function InserisciIntero(numero) {
	numero=prompt("inserisci numero")
	do{
		
	}while(numero)
	

}
function Pari(num){
	
	if(num%2===0){
		return true 
	}
	else{
		return false
	}
}

let min=prompt(" inserisci valore min")
let max=prompt("inserisci valore max")
let n=prompt("inserisci valore n")
let p=0
let q=0
let med=0
if (InserisciIntero(min,max,n)===true) {
	let list=[]
	for ( i = 0; i < n; i++) {
		list.push("inserisci numero")

		while(list[i]<min|| list[i]>max){
			list.push("inserisci numero")
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
	let mediamax=med/q
	}
	alert("hai inserito "+n+" compresi tra"+min+ " e "+max+ " contenente "+p+" numeri pari e "+q+" numeri sopra la media tra "+min+ " e "+max+
		" la cui media è "+ mediamax)
}