let arr1 = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let f = (element)=>{
	if(element.substring(0,3).toLowerCase()==='the')
		return element.substring(4,element.length);

	else if(element.substring(0,1).toLowerCase==='a')
		return element.substring(2,element.length);

	else if(element.substring(0,2).toLowerCase()==='an')
		return element.substring(3,element.length);

	else
		return element;
}

let arr2=arr1.map(f);

let obj={};
let j=0;
for(j=0;j<arr1.length;j++){
	obj[arr2[j]]=arr1[j];
}
arr2.sort();
let k=0;
for(k=0;k<arr1.length;k++){
	console.log(obj[arr2[k]]);
}




