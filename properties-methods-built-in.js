// PROPERTIES

 console.log('the length of this sentence including spaces is 50'.length)

 /*
 ↑ in the above example every string instance has a property called length that
 stores the number of characters in the entire string, including spaces
 
 retrieve property information by appending the string with a '.' period
 and the property name, ex. '.length' , and then log it to the console

 side note:
 we call the '.' the 'dot operator'
 */

 // METHODS

 console.log('Can you feel it now Mr. Krabs?!'.toUpperCase); // prints 'CAN YOU FEEL IT NOW MR.KRABS?!'

 /*
 Different from properties, instead of retrieving information, we are performing actions on our input,
 in this case we perform the action of converting our string (which has some title case) into entirely uppercase
 */

 console.log('            lots of whitespace            '.trim()); // prints 'lots of whitespace'