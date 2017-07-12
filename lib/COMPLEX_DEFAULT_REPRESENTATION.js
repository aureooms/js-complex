'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _COMPLEX_DEFAULT_DISPLAY = require('./COMPLEX_DEFAULT_DISPLAY');

var _COMPLEX_DEFAULT_DISPLAY2 = _interopRequireDefault(_COMPLEX_DEFAULT_DISPLAY);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Biggest power of DEFAULT_DISPLAY whose square holds in a single double
 * with full precision. For working correctly with multiplication algorithms
 * and for fast base DEFAULT_DISPLAY printing. On older machines with no
 * native doubles, it might be worth to only use ints.
 */
exports.default = _COMPLEX_DEFAULT_DISPLAY2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DT01QTEVYX0RFRkFVTFRfUkVQUkVTRU5UQVRJT04uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBIiwiZmlsZSI6IkNPTVBMRVhfREVGQVVMVF9SRVBSRVNFTlRBVElPTi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDT01QTEVYX0RFRkFVTFRfRElTUExBWSBmcm9tICcuL0NPTVBMRVhfREVGQVVMVF9ESVNQTEFZJyA7XG5cbi8qXG4gKiBCaWdnZXN0IHBvd2VyIG9mIERFRkFVTFRfRElTUExBWSB3aG9zZSBzcXVhcmUgaG9sZHMgaW4gYSBzaW5nbGUgZG91YmxlXG4gKiB3aXRoIGZ1bGwgcHJlY2lzaW9uLiBGb3Igd29ya2luZyBjb3JyZWN0bHkgd2l0aCBtdWx0aXBsaWNhdGlvbiBhbGdvcml0aG1zXG4gKiBhbmQgZm9yIGZhc3QgYmFzZSBERUZBVUxUX0RJU1BMQVkgcHJpbnRpbmcuIE9uIG9sZGVyIG1hY2hpbmVzIHdpdGggbm9cbiAqIG5hdGl2ZSBkb3VibGVzLCBpdCBtaWdodCBiZSB3b3J0aCB0byBvbmx5IHVzZSBpbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBDT01QTEVYX0RFRkFVTFRfRElTUExBWSA7XG4iXX0=