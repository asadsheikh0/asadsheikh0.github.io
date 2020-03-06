function OriginalRoll(number, glaze) {
    this.num = number;
    this.glaze = glaze;
    this.numSet = false;
    this.glazeSet = false;
}
var originalRoll = new OriginalRoll(1, "none");

var rollCart = [];

function addRoll() {
    rollCart.push(originalRoll)
}


// this was inspired by code from classmate 
// github.com/18satoy/18satoy.github.io/blob/master/PUI_S20/homework_6/main.js
function pickQuantity(item) {
    var one = document.getElementById("one");
    var three = document.getElementById("three");
    var six = document.getElementById("six");
    var twelve = document.getElementById("twelve");
    if (item.id == "one"){
        one.style.backgroundColor = "#495B60";
        one.style.color = "white"
        three.style.backgroundColor = "#c4e9f2";
        three.style.color = "#495B60"
        six.style.backgroundColor = "#c4e9f2";
        six.style.color = "#495B60"
        twelve.style.backgroundColor = "#c4e9f2";
        twelve.style.color = "#495B60"
        originalRoll.num = 1;
    }
    else if (item.id == "three") {
        one.style.backgroundColor = "#c4e9f2";
        one.style.color = "#495B60"
        three.style.backgroundColor = "#495B60";
        three.style.color = "white"
        six.style.backgroundColor = "#c4e9f2";
        six.style.color = "#495B60"
        twelve.style.backgroundColor = "#c4e9f2";
        twelve.style.color = "#495B60"
        originalRoll.num = 3;
    }
    else if (item.id == "six") {
        one.style.backgroundColor = "#c4e9f2";
        one.style.color = "#495B60"
        three.style.backgroundColor = "#c4e9f2";
        three.style.color = "#495B60"
        six.style.backgroundColor = "#495B60";
        six.style.color = "white"
        twelve.style.backgroundColor = "#c4e9f2";
        twelve.style.color = "#495B60"
        originalRoll.num = 6;
    }
    else {
        one.style.backgroundColor = "#c4e9f2";
        one.style.color = "#495B60"
        three.style.backgroundColor = "#c4e9f2";
        three.style.color = "#495B60"
        six.style.backgroundColor = "#c4e9f2";
        six.style.color = "#495B60"
        twelve.style.backgroundColor = "#495B60";
        twelve.style.color = "white"  
        originalRoll.num = 12;
    }
    originalRoll.numSet = true;
    updateOrder(originalRoll)
}

function pickGlaze(item) {
    var one = document.getElementById("none");
    var three = document.getElementById("sugar");
    var six = document.getElementById("vanilla");
    var twelve = document.getElementById("chocolate");
    if (item.id == "none"){
        one.style.backgroundColor = "#495B60";
        one.style.color = "white"
        three.style.backgroundColor = "#c4e9f2";
        three.style.color = "#495B60"
        six.style.backgroundColor = "#c4e9f2";
        six.style.color = "#495B60"
        twelve.style.backgroundColor = "#c4e9f2";
        twelve.style.color = "#495B60"
        originalRoll.glaze = "none";
    }
    else if (item.id == "sugar") {
        one.style.backgroundColor = "#c4e9f2";
        one.style.color = "#495B60"
        three.style.backgroundColor = "#495B60";
        three.style.color = "white"
        six.style.backgroundColor = "#c4e9f2";
        six.style.color = "#495B60"
        twelve.style.backgroundColor = "#c4e9f2";
        twelve.style.color = "#495B60"
        originalRoll.glaze = "sugar-milk";
    }
    else if (item.id == "vanilla") {
        one.style.backgroundColor = "#c4e9f2";
        one.style.color = "#495B60"
        three.style.backgroundColor = "#c4e9f2";
        three.style.color = "#495B60"
        six.style.backgroundColor = "#495B60";
        six.style.color = "white"
        twelve.style.backgroundColor = "#c4e9f2";
        twelve.style.color = "#495B60"
        originalRoll.glaze = "vanilla-milk";
    }
    else {
        one.style.backgroundColor = "#c4e9f2";
        one.style.color = "#495B60"
        three.style.backgroundColor = "#c4e9f2";
        three.style.color = "#495B60"
        six.style.backgroundColor = "#c4e9f2";
        six.style.color = "#495B60"
        twelve.style.backgroundColor = "#495B60";
        twelve.style.color = "white"  
        originalRoll.glaze = "double-chocolate";
    }
    originalRoll.glazeSet = true;
    updateOrder(originalRoll)
}

function updateOrder(originalRoll) {
    if (originalRoll.numSet && originalRoll.glazeSet) {
        var obj = document.getElementById("order")
        obj.style.background = "#B3DDC9";
        obj.style.color = "#495B60";
    }
}