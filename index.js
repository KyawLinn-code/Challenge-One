function getInDays(){
    var birthYear = prompt("Enter your birth year : ");
    var totalDays = ( 2020-birthYear ) * 365;
    var h1 = document.createElement('h1');
    var textNode = document.createTextNode('You are '+totalDays+' days old.')
    h1.appendChild(textNode)
    document.getElementById('result').appendChild(h1);
}