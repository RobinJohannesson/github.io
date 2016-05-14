window.onload = setUp;

function setUp() {
    var button = document.getElementById('red');
    button.onclick = setStyle;
    var button = document.getElementById('green');
    button.onclick = setStyle;
    var button = document.getElementById('blue');
    button.onclick = setStyle;
}

function setStyle() {
    var styleName = this.id;
    document.getElementById("message").className = styleName;
}