"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Conjugate for polar representation
 */

exports.default = function (neg) {
  return function (a, b) {
    return [a, neg(b)];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb2xhci9rZXJuZWwvY29uLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwibmVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7OztrQkFJZTtBQUFBLFNBQU8sVUFBRUEsQ0FBRixFQUFNQyxDQUFOO0FBQUEsV0FBYyxDQUFFRCxDQUFGLEVBQU1FLElBQUtELENBQUwsQ0FBTixDQUFkO0FBQUEsR0FBUDtBQUFBLEMiLCJmaWxlIjoiY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbmp1Z2F0ZSBmb3IgcG9sYXIgcmVwcmVzZW50YXRpb25cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBuZWcgPT4gKCBhICwgYiApICA9PiBbIGEgLCBuZWcoIGIgKSBdIDtcblxuIl19