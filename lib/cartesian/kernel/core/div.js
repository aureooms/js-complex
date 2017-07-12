"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

/**
 * Division algorithm
 */

exports.default = function (base, pow2, mul, add, sub) {
	return function (a, b, c, d) {

		var tmp = add(pow2(c), pow2(d));

		var real = base(add(mul(a, c), mul(b, d)), tmp);
		var img = base(sub(mul(b, c), mul(a, d)), tmp);

		return [real, img];
	};
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYXJ0ZXNpYW4va2VybmVsL2NvcmUvZGl2LmpzIl0sIm5hbWVzIjpbImJhc2UiLCJwb3cyIiwibXVsIiwiYWRkIiwic3ViIiwiYSIsImIiLCJjIiwiZCIsInRtcCIsInJlYWwiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O2tCQUllLFVBQUVBLElBQUYsRUFBU0MsSUFBVCxFQUFnQkMsR0FBaEIsRUFBc0JDLEdBQXRCLEVBQTRCQyxHQUE1QjtBQUFBLFFBQXNDLFVBQVdDLENBQVgsRUFBZUMsQ0FBZixFQUFtQkMsQ0FBbkIsRUFBdUJDLENBQXZCLEVBQTJCOztBQUUvRSxNQUFNQyxNQUFNTixJQUFLRixLQUFNTSxDQUFOLENBQUwsRUFBaUJOLEtBQU1PLENBQU4sQ0FBakIsQ0FBWjs7QUFFQSxNQUFNRSxPQUFPVixLQUFNRyxJQUFLRCxJQUFLRyxDQUFMLEVBQVNFLENBQVQsQ0FBTCxFQUFvQkwsSUFBS0ksQ0FBTCxFQUFTRSxDQUFULENBQXBCLENBQU4sRUFBMkNDLEdBQTNDLENBQWI7QUFDQSxNQUFNRSxNQUFPWCxLQUFNSSxJQUFLRixJQUFLSSxDQUFMLEVBQVNDLENBQVQsQ0FBTCxFQUFvQkwsSUFBS0csQ0FBTCxFQUFTRyxDQUFULENBQXBCLENBQU4sRUFBMkNDLEdBQTNDLENBQWI7O0FBRUEsU0FBTyxDQUFFQyxJQUFGLEVBQVNDLEdBQVQsQ0FBUDtBQUVBLEVBVGM7QUFBQSxDIiwiZmlsZSI6ImRpdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBEaXZpc2lvbiBhbGdvcml0aG1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoIGJhc2UgLCBwb3cyICwgbXVsICwgYWRkICwgc3ViICkgID0+IGZ1bmN0aW9uICggYSAsIGIgLCBjICwgZCApIHtcblxuXHRjb25zdCB0bXAgPSBhZGQoIHBvdzIoIGMgKSAsIHBvdzIoIGQgKSApIDtcblxuXHRjb25zdCByZWFsID0gYmFzZSggYWRkKCBtdWwoIGEgLCBjICkgLCBtdWwoIGIgLCBkICkgKSAsIHRtcCApIDtcblx0Y29uc3QgaW1nICA9IGJhc2UoIHN1YiggbXVsKCBiICwgYyApICwgbXVsKCBhICwgZCApICkgLCB0bXAgKSA7XG5cblx0cmV0dXJuIFsgcmVhbCAsIGltZyBdIDtcblxufVxuXG5cbiJdfQ==