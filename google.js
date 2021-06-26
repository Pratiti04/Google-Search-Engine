let query = document.querySelector('.query');
let SearchBtn = document.querySelector('.SearchBtn');

SearchBtn.onclick = function() {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url, '_self');
}
var textbox = document.getElementById("textbox");
textbox.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        SearchBtn.onclick();
    }
});