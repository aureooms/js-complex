"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Addition algorithm.
 *
 * Returns the result of (a + bi) + (c + di).
 */

exports.default = function (add) {
  return function (a, b, c, d) {
    return [add(a, c), add(b, d)];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvYWRkLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImQiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7a0JBTWU7QUFBQSxTQUFPLFVBQUVBLENBQUYsRUFBTUMsQ0FBTixFQUFVQyxDQUFWLEVBQWNDLENBQWQ7QUFBQSxXQUFzQixDQUFFQyxJQUFLSixDQUFMLEVBQVNFLENBQVQsQ0FBRixFQUFpQkUsSUFBS0gsQ0FBTCxFQUFTRSxDQUFULENBQWpCLENBQXRCO0FBQUEsR0FBUDtBQUFBLEMiLCJmaWxlIjoiYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEFkZGl0aW9uIGFsZ29yaXRobS5cbiAqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgKGEgKyBiaSkgKyAoYyArIGRpKS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBhZGQgPT4gKCBhICwgYiAsIGMgLCBkICkgID0+IFsgYWRkKCBhICwgYyApICwgYWRkKCBiICwgZCApIF0gO1xuXG4iXX0=