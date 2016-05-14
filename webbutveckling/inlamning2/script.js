window.onload = setUp;

function setUp() {
    var button1 = document.getElementById('knappt');
    button1.onclick = alerttext;
    var button2 = document.getElementById('prompten');
    button2.onclick = prompttext;
    var button3 = document.getElementById('styleSet');
    button3.onclick = colorChange;
}

function alerttext() {
    alert("Knapp med knapp text så det blir knappt")
}

function prompttext() {
    var prompta = prompt("Skriv in något/någon du älskar :)")
    if (prompta == ""){
        document.getElementById("prompttexten").innerHTML = "Varför skrev du inget? ;)";
    }
    else if (prompta.toLowerCase() == "robin"){
        document.getElementById("prompttexten").innerHTML = "Robin ser en positiv framtid hos dig!";
    }
    else {
        document.getElementById("prompttexten").innerHTML = "Du vet om att " + prompta + " älskar dig tillbaka? <3";
    }
}

function colorChange() {
    var Container = document.getElementById("wrapper");
	Container.className = "styleName";
}