function OriginalRoll(number, glaze) {
    this.num = number;
    this.glaze = glaze;
    this.numSet = false;
    this.glazeSet = false;
}

var originalRoll = new OriginalRoll(1, "none");

var rollCart = [];

// adds rolls to the local storage
function addRoll() {
    var stringInfo = '' + originalRoll.num + ' ,' + originalRoll.glaze + '';
    if (sessionStorage.rolls) {
        sessionStorage.rolls = Number(sessionStorage.rolls) + 1;
        sessionStorage.cart = sessionStorage.cart.concat(',',stringInfo);
    }
    else {
        sessionStorage.rolls = 1;
        sessionStorage.cart = stringInfo;
    }
}


// removes the listing of the selected item via remove button
function removeItem(item) {
    var currRoll = item.parentNode.parentNode;
    var cart = currRoll.parentNode;
    var quantity = currRoll.firstChild.childNodes[1].textContent.slice(10);
    var glazing = currRoll.firstChild.childNodes[2].textContent.slice(9);

    // remove the selected item
    cart.removeChild(roll);

    var total = Number(sessionStorage.rolls);
    var rolls = sessionStorage.cart.split(',');
    // go through storage, find item
    for (i = 0; i < (2*total); i += 2) {
        if ((rolls[i] == quantity) && (rolls[i+1] == glazing)) 
        {
            // remove the item from storage
            rolls.splice(i, 2);
        }
    }
}

function fillCart() {
    var total = Number(sessionStorage.rolls);
    var rolls = sessionStorage.cart.split(',');
    var i, printInfo;
    var cart = document.getElementById("cart");
    var prices = 0;
    if (total > 0) {
        for (i = 0; i < total*2; i += 2) {
            var rollItem = document.createElement("DIV");
            var prodDetails = document.createElement("DIV");
            prodDetails.className = "details";
            var currNum = rolls[i];
            var currGlaze = rolls[i + 1];
            prices += parseInt(currNum) * 4

            // going through current item
            var currPrice = parseInt(currNum) * 4;
            var flavor = "Original Roll";
            var quant = "Quantity: " + currNum;
            var glaze = "Glazing: " + currGlaze;
            var price = "Cost: $" + currPrice;

            // now make text
            var prodElem = document.createElement("H3");
            prodElem.appendChild(document.createTextNode(flavor));
            var quantElem = document.createElement("H4");
            quantElem.appendChild(document.createTextNode(quant));
            var glazeElem = document.createElement("H4");
            glazeElem.appendChild(document.createTextNode(glaze));
            var priceElem = document.createElement("H4");
            priceElem.appendChild(document.createTextNode(price));

            // now add text
            prodDetails.appendChild(prodElem);
            prodDetails.appendChild(quantElem);
            prodDetails.appendChild(glazeElem);
            prodDetails.appendChild(priceElem);

            // now add the button to remove the item
            var removeDiv = document.createElement("DIV");
            var removeButton = document.createElement("BUTTON");
            removeButton.appendChild(document.createTextNode("Remove"));
            removeButton.onclick = function() {removeItem(this)};
            removeDiv.appendChild(removeButton);
            removeDiv.className = "remove";

            rollItem.appendChild(prodDetails);
            rollItem.appendChild(removeDiv);

            cart.appendChild(rollItem);
        }
    }
}


// this was inspired by code from
// github.com/18satoy/18satoy.github.io
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
    var none = document.getElementById("none");
    var sugar = document.getElementById("sugar");
    var van = document.getElementById("vanilla");
    var choc = document.getElementById("chocolate");
    if (item.id == "none"){
        none.style.backgroundColor = "#495B60";
        none.style.color = "white"
        sugar.style.backgroundColor = "#c4e9f2";
        sugar.style.color = "#495B60"
        van.style.backgroundColor = "#c4e9f2";
        van.style.color = "#495B60"
        choc.style.backgroundColor = "#c4e9f2";
        choc.style.color = "#495B60"
        originalRoll.glaze = "none";
    }
    else if (item.id == "sugar") {
        none.style.backgroundColor = "#c4e9f2";
        none.style.color = "#495B60"
        sugar.style.backgroundColor = "#495B60";
        sugar.style.color = "white"
        van.style.backgroundColor = "#c4e9f2";
        van.style.color = "#495B60"
        choc.style.backgroundColor = "#c4e9f2";
        choc.style.color = "#495B60"
        originalRoll.glaze = "sugar-milk";
    }
    else if (item.id == "vanilla") {
        none.style.backgroundColor = "#c4e9f2";
        none.style.color = "#495B60"
        sugar.style.backgroundColor = "#c4e9f2";
        sugar.style.color = "#495B60"
        van.style.backgroundColor = "#495B60";
        van.style.color = "white"
        choc.style.backgroundColor = "#c4e9f2";
        choc.style.color = "#495B60"
        originalRoll.glaze = "vanilla-milk";
    }
    else {
        none.style.backgroundColor = "#c4e9f2";
        none.style.color = "#495B60"
        sugar.style.backgroundColor = "#c4e9f2";
        sugar.style.color = "#495B60"
        van.style.backgroundColor = "#c4e9f2";
        van.style.color = "#495B60"
        choc.style.backgroundColor = "#495B60";
        choc.style.color = "white"  
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