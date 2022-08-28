function reverseString(str) {
  let reverseArr=[];
  for (x=str.length-1; x>=0; x--){  
    reverseArr.push(str[x]);
  }
  reverseArr.join();
  return (reverseArr.toString().replaceAll(',',''));
}

if (require.main === module) {
  console.log("Expecting: 'eM esreveR'");
  console.log("=>", reverseString("Reverse Me"));

 console.log("");
 
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

//I will iterate through this string going through each charachter as an index that is set up as 'x' in a for loop and then subtracting 1 from x each time until the for loop reaches the beginning of the string. 
