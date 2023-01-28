function rev(str,first,last){
		let temp;		
		while (first <= last)
		{
			temp = str[first];
			str[first]=str[last];
			str[last]=temp;
			first++;
			last--;
		}
	}	
let str = "Hi Inzint I am John ";
str=str.split("");
let first = 0;
	for (let last = 0; last < str.length; last++){
		if (str[last] == ' ')
		{
			rev(str, first, last);
			first = last + 1;
		}
	}
rev(str, 0, str.length - 1);
let newval = str.join("");	
console.log(newval);
