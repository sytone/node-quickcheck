"use strict";

var c = require("rho-contracts");

function arbBool() {
  return Math.random() > 0.5 ? true : false;
}

exports.arbBool = arbBool;

function arbDouble() {
  var sign = Math.random() > 0.5 ? 1 : -1;
  return sign * Math.random() * Number.MAX_VALUE;
}

exports.arbDouble = arbDouble;

function arbInt() {
  var sign = Math.random() > 0.5 ? 1 : -1;
  return sign * Math.floor(Math.random() * 9007199254740991);
}

exports.arbInt = arbInt;

function arbByte() {
  return Math.floor(Math.random() * 256);
}

exports.arbByte = arbByte;

function arbChar() {
  return String.fromCharCode(arbByte());
}

exports.arbChar = arbChar;

function arbArray(generator) {
  var
  len = Math.floor(Math.random() * 100),
  array = [],
  i;

  for (i = 0; i < len; i++) {
    array.push(generator());
  }

  return array;
}

exports.arbArray = arbArray;

function arbString() {
  return arbArray(arbChar).join("");
}

exports.arbString = arbString;

var forAll = c.fun({ property: c.fun().extraArgs(c.any).returns(c.bool) })
      .extraArgs(c.array(c.fun().returns(c.any)))
      .returns(c.or(c.truthy, c.array(c.any)))
      .wrap(
        function(property) {
          var
          generators = Array.prototype.slice.call(arguments, 1),
          fn = function (f) { return f(); },
          i,
          values;

          for (i = 0; i < 100; i++) {
            values = generators.map(function(f) { return f.call(); });

            if (!property.apply(null, values)) {
              return values;
            }
          }

          return true;
        }
      );

exports.forAll = forAll;
