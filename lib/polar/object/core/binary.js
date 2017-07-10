"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (kernel) {
  return function (_ref, _ref2) {
    var a = _ref.rho,
        b = _ref.theta;
    var c = _ref2.rho,
        d = _ref2.theta;
    return fromarray(kernel(a, b, c, d));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wb2xhci9vYmplY3QvY29yZS9iaW5hcnkuanMiXSwibmFtZXMiOlsiYSIsInJobyIsImIiLCJ0aGV0YSIsImMiLCJkIiwiZnJvbWFycmF5Iiwia2VybmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQ2U7QUFBQSxTQUFVO0FBQUEsUUFBVUEsQ0FBVixRQUFJQyxHQUFKO0FBQUEsUUFBc0JDLENBQXRCLFFBQWNDLEtBQWQ7QUFBQSxRQUFvQ0MsQ0FBcEMsU0FBOEJILEdBQTlCO0FBQUEsUUFBZ0RJLENBQWhELFNBQXdDRixLQUF4QztBQUFBLFdBQTBERyxVQUFXQyxPQUFRUCxDQUFSLEVBQVlFLENBQVosRUFBZ0JFLENBQWhCLEVBQW9CQyxDQUFwQixDQUFYLENBQTFEO0FBQUEsR0FBVjtBQUFBLEMiLCJmaWxlIjoiYmluYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBrZXJuZWwgPT4gKCB7IHJobyA6IGEgLCB0aGV0YSA6IGIgfSAsIHsgcmhvIDogYyAsIHRoZXRhIDogZCB9ICkgID0+IGZyb21hcnJheSgga2VybmVsKCBhICwgYiAsIGMgLCBkICkgKSA7XG5cbiJdfQ==