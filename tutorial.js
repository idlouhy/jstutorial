// ES5

typeof "String"
typeof 0
typeof null
typeof undefined
typeof []
typeof {}

var a = {
    property: 15,
    add: function (a, b) {
        return a+b;
    }
}

// VARIABLE / SCOPE / CLOSURE

var accumulator_builder = function (value) {
    return function accumulator(step) {
        value += step;
        return value;
    };
}
accumulator = accumulator_builder(10);
console.log(accumulator(4));
console.log(accumulator(2));

// COMPARISON
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

var a = ''
var b = false
var c = [];
var d = '1';
var e = 1;
var o1 = { 0: "value" };
var o2 = ["value"];

a == b
a == undefined
a === b

var x = x || 'default';

// THIS

"use strict"
var o = {
    vp: false,
    what: function() {
        console.log(this.vp);
        console.log(this);
    }
};
var reference = o.what;

console.log(this);
o.what();
reference();
var reference_bind = reference.bind(o);
reference_bind();
reference.call(o); // args
reference.apply(o); // [args]

// REQUIRE

define('tutorial/add', [], function () {
    return function add (x, y) {
        return x+y;
    }
});

define('tutorial/multiply', ['tutorial/add'], function (add) {
    return function multiply (x, y) {
        var result = 0;
        for (var i=0; i<y; i++) {
            result = add(result, x);
        }
        return result;
    }
});

require(['tutorial/multiply'], function (multiply) {
    console.log(multiply)
    console.log(multiply(3, 8));
});


require(['tutorial/multiply'], function (multiply) {
    window.multiply = multiply; //manual only
});


// PROMISE

var divide_callback = function (x, y, callback) {
    if (y === 0) {
        callback('Zero division');
    }
    callback(x/y);
};

divide_callback(8, 2, function (data) { console.log(data); });

var divide_promise = function (x, y) {
    return new Promise(function (resolve, reject) {
        if (y === 0) {
            reject('Zero division');
        }
        resolve(x/y);
    });
};

divide_promise(8, 2).then(function (data) { console.log(data); }); // resolve
divide_promise(8, 0).then(function (data) { console.log(data); }, function (error) { console.log(error); }); // resolve + reject