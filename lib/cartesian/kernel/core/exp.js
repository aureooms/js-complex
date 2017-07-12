"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// e^(a+ib) = (e^a)(e^(ib)) = (e^a)((cos b) + i(sin b)) = e^a cos b + i e^a sin b
exports.default = function (exp, cos, sin, mul) {
  return function (a, b) {
    return [mul(exp(a), cos(b)), mul(exp(a), sin(b))];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvZXhwLmpzIl0sIm5hbWVzIjpbImV4cCIsImNvcyIsInNpbiIsIm11bCIsImEiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtrQkFDZSxVQUFFQSxHQUFGLEVBQVFDLEdBQVIsRUFBY0MsR0FBZCxFQUFvQkMsR0FBcEI7QUFBQSxTQUE2QixVQUFFQyxDQUFGLEVBQU1DLENBQU47QUFBQSxXQUFhLENBQUVGLElBQUtILElBQUlJLENBQUosQ0FBTCxFQUFhSCxJQUFJSSxDQUFKLENBQWIsQ0FBRixFQUEwQkYsSUFBS0gsSUFBSUksQ0FBSixDQUFMLEVBQWFGLElBQUlHLENBQUosQ0FBYixDQUExQixDQUFiO0FBQUEsR0FBN0I7QUFBQSxDIiwiZmlsZSI6ImV4cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGVeKGEraWIpID0gKGVeYSkoZV4oaWIpKSA9IChlXmEpKChjb3MgYikgKyBpKHNpbiBiKSkgPSBlXmEgY29zIGIgKyBpIGVeYSBzaW4gYlxuZXhwb3J0IGRlZmF1bHQgKCBleHAgLCBjb3MgLCBzaW4gLCBtdWwgKSA9PiAoIGEgLCBiICkgPT4gWyBtdWwoIGV4cChhKSwgY29zKGIpICkgLCBtdWwoIGV4cChhKSwgc2luKGIpICkgXSA7XG4iXX0=