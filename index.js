var divContainer = document.createElement('div');
function getInDays(){
    //var birthYear = prompt("Enter your birth year : ");

    var students = [
        {
            "name": "Kyaw Kyaw",
            "age" : "19",
            "university": "University Of Technology Yatanarpon Cyber City",
            "town": "Myingyan"
        },
        {
            "name": "Zyaw Zyaw",
            "age" : "18",
            "university": "University Of Mandalay",
            "town": "Yangon"
        },
        {
            "name": "Mya Mya",
            "age" : "20",
            "university": "University Of Yangon",
            "town": "Mandalay"
        }
    ]

    /*var totalDays = ( 2020-birthYear ) * 365;
    var h1 = document.createElement('h1');
    var textNode = document.createTextNode('You are '+totalDays+' days old.')*/
    

    /*h1.setAttribute('class','test');
    h1.appendChild(textNode)*/
    for(let i = 0; i < students.length; i++){
        createElements((students[i]));
    }

    
}
function createElements(student){
    var divS = document.createElement('div');
    var parent = document.createElement('h3');
    var br = document.createElement("br");

    var name = document.createTextNode('\nName:\t'+student.name);
    var age = document.createTextNode('Age:\t'+ student.age);
    var university = document.createTextNode('Universtiy:\t'+student.university);
    var town = document.createTextNode('Town:\t'+student.town);

    parent.appendChild(name);
    parent.appendChild(br);
    parent.appendChild(age);
    parent.appendChild(br);
    parent.appendChild(university);
    parent.appendChild(br);
    parent.appendChild(town);

    divS.classList.add('card');
    divS.classList.add('margin')
    divS.classList.remove('remove');
    divS.appendChild(parent);
    
    if(divContainer.hasChildNodes){
        divContainer.remove();
        document.getElementById('result').appendChild(divS);
    }
    else{
        //divContainer.appendChild(divS);
    document.getElementById('result').appendChild(divS);
    }

}
function remove(){
    var nodeName = document.getElementById('result').getAttributeNames;
    console.log(document.getElementById('result').getBoundingClientRect());
    document.getElementById('result').classList.add('remove');
    
}