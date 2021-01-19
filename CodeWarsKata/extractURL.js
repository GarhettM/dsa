Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"



function domainName(url){

  let regexWWW = /w{3}/g;
  let regexSlash = /\/{2}/g;
  
  if(regexWWW.test(url)) {
  
    let reg = /\./g;
    let newUrl = url.split(reg, 2);
    return newUrl[1];
    
  } else if(regexSlash.test(url)) {
    
    let reg2 = /\/{2}(.*?)\./g;
    let newThing = url.split(reg2);
    return newThing[1];
    
  } else {
    
    let newString = url.split('.');
    return newString[0]
  }
  
}
