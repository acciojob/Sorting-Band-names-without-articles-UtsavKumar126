//your code here
let arr1 = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let arr2=arr1.map(f);

let f = (element)=>{
	if(element.substring(0,3).toLowerCase().equals("the"))
		return s.substring(4,element.length);
	else if(element.substring(0,1).toLowerCase().equals("a"))
		return s.substring(2,element.length);
	else if(element.substring(0,2).toLowerCase().equals("an"))
		return s.substring(3,element.length);
}

let obj={};
let j=0;
for(j=0;j<arr.length;j++){
	obj[arr2[j]]=arr1[j];
}
arr2.sort();
let k=0;
for(k=0;k<arr1.length;k++){
	Console.log(obj.get(arr2[i]));
}




