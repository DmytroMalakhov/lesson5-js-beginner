const user = prompt('Enter your name');
const age = parseFloat(prompt('Enter your age'));
const married = true;
const lawViolation = undefined;
const empty = null;
const someObj = '{}';
const someSym = 'Symbol()';
const bye = 'Goodbye';

document.write('7 types of data:' + '<br><br>');
document.write('The string is: ' + '\'' + user + '\'' +';<br>');
document.write('The number is: ' + age + ';<br>'); 
document.write('The boolean (true/false) is: ' + married + ';<br>'); 
document.write('The undefined is: ' + lawViolation + ';<br>');
document.write('The null is: ' + empty + ';<br>'); 
document.write('The object is: ' + someObj + ';<br>');
document.write('The symbol is: ' + someSym + ';<br><br><br>')

document.write('Hello ' + user + '<br>');
let greet = 'Hello ' + user;
alert(greet);

const nextAge = age + 1;
document.write('Next year you will be ' + nextAge + '<br>');

function rightAge () {
    if( age <= 18 ){
        document.write('Your are a child');
    } else if ( age <= 75 ){
        document.write('Your are an Adult');
    } else {
        document.write('See  a console'); 
        console.log(bye);
    }
         
}

rightAge(age);