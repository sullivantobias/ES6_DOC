function defaultParameter  (a , b)  {
	if (a === undefined) a = 20;
    if (b === undefined) b = 45
    
    return a+b
}

console.log(defaultParameter());