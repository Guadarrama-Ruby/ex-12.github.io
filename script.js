var myText = document.getElementById("message");
var result = document.getElementById("result");
var limit = 60;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function() {
    var textLength = myText.value.length;
    console.log(textLength)
    result.textContent = textLength + "/" + limit;

    if(textLength >= limit) {
        myText.style.borderColor = "red";
        myText.style.color = "red";
        result.style.color = "red";
    }
    else {
        myText.style.borderColor = "black";
        myText.style.color = "black";
        result.style.color = "black";
    }
});