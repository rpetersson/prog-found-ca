// question 1

var strVariable = "this is a Str variable";

// question 2

var person = {"height": 180, "weight": 85};

// question 3

var outOfStock = true;

if (outOfStock === true){

    console.log("Out of stock")

} else {

    console.log("In stock")
}

// question 4

var array = [1,2,3,4,5];

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// question 5

for ( i = 15; i <= 25; i++ ) {
    console.log(i)
}

// question 6

for ( i = 15; i <= 25; i++ ) {
    if (i === 20) {
        console.log(i)
    }
}

// question 7

var arrayTwoObjects = [ {"String":"StrValue","Number":123,"Boolean":true}, {"String:":"StrValue2","Number":345,"Boolean":false}];

// question 8

var people = "idiots";

function whatIDontLike(people) {
    console.log("I dont like", people)

}

whatIDontLike(people);

// question 9

function twoArgumentFunction(value1,value2) {
    console.log(value2 - value1)
}

twoArgumentFunction(10,5);

// question 10

var emptyArray = [];

function oneArgument(value) {
    emptyArray.push(value);

}

oneArgument(1);

// LEVEL 2

// question 1

for ( i = 15; i <= 25; i++ ) {
    var remainder = i % 2;

    if (remainder === 0) {
        console.log(i)
    }
}

// question 2

function firstFunction() {
    console.log("I am a function");
}

var innerFunction = firstFunction();

function outerFunction(arg1) {
    arg1();
}

outerFunction(innerFunction);

