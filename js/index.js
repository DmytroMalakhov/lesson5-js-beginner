const str = 'Dima';
const anAge = 24;
const married = true;
const lawViolation = undefined;
const empty = null;
const someObj = '{}';
const someSym = 'Symbol()';
const bye = 'Goodbye';

document.write('7 types of data:' + '<br><br>');
document.write('The string is: ' + '\'' + str + '\'' +';<br>');
document.write('The number is: ' + anAge + ';<br>'); 
document.write('The boolean (true/false) is: ' + married + ';<br>'); 
document.write('The undefined is: ' + lawViolation + ';<br>');
document.write('The null is: ' + empty + ';<br>'); 
document.write('The object is: ' + someObj + ';<br>');
document.write('The symbol is: ' + someSym + ';<br><br><br>')


const user = prompt('Enter your name');
document.write('Hello ' + user + '<br>');

let greet = 'Hello ' + user;
alert(greet);

const age = parseFloat(prompt('Enter your age'));
const nextAge = age + 1;
document.write('Next year you will be ' + nextAge + '<br>');

function rightAge () {
    if( age <= 18 ){
        document.write('Your are a child');
    } else if ( age <= 70 ){
        document.write('Your are an Adult');
    } else 
        console.log(bye); 
}

rightAge(age);