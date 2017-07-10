"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Addition algorithm.
 *
 * Returns the result of (a + bi) + (c + di).
 */

exports.default = function (base) {
  return function (a, b, c, d) {
    return [base(a, c), base(b, d)];
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2FkZC5qcyJdLCJuYW1lcyI6WyJhIiwiYiIsImMiLCJkIiwiYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztrQkFNZTtBQUFBLFNBQVEsVUFBRUEsQ0FBRixFQUFNQyxDQUFOLEVBQVVDLENBQVYsRUFBY0MsQ0FBZDtBQUFBLFdBQXNCLENBQUVDLEtBQU1KLENBQU4sRUFBVUUsQ0FBVixDQUFGLEVBQWtCRSxLQUFNSCxDQUFOLEVBQVVFLENBQVYsQ0FBbEIsQ0FBdEI7QUFBQSxHQUFSO0FBQUEsQyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQWRkaXRpb24gYWxnb3JpdGhtLlxuICpcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiAoYSArIGJpKSArIChjICsgZGkpLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2UgPT4gKCBhICwgYiAsIGMgLCBkICkgID0+IFsgYmFzZSggYSAsIGMgKSAsIGJhc2UoIGIgLCBkICkgXSA7XG5cbiJdfQ==