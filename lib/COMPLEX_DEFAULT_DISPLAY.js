'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsNumber = require('@aureooms/js-number');

var number = _interopRequireWildcard(_jsNumber);

var _compile = require('./cartesian/kernel/compile');

var _compile2 = _interopRequireDefault(_compile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var model = number;
var symbol = 'j';

exports.default = {
	type: 'cartesian', // cartesian or polar
	model: model,
	symbol: symbol,
	kernel: (0, _compile2.default)(model, symbol)
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DT01QTEVYX0RFRkFVTFRfRElTUExBWS5qcyJdLCJuYW1lcyI6WyJudW1iZXIiLCJtb2RlbCIsInN5bWJvbCIsInR5cGUiLCJrZXJuZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztJQUFZQSxNOztBQUVaOzs7Ozs7OztBQUVBLElBQU1DLFFBQVFELE1BQWQ7QUFDQSxJQUFNRSxTQUFTLEdBQWY7O2tCQUVlO0FBQ2RDLE9BQU8sV0FETyxFQUNPO0FBQ3JCRixhQUZjO0FBR2RDLGVBSGM7QUFJZEUsU0FBUyx1QkFBU0gsS0FBVCxFQUFpQkMsTUFBakI7QUFKSyxDIiwiZmlsZSI6IkNPTVBMRVhfREVGQVVMVF9ESVNQTEFZLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbnVtYmVyIGZyb20gJ0BhdXJlb29tcy9qcy1udW1iZXInIDtcblxuaW1wb3J0IGNvbXBpbGUgZnJvbSAnLi9jYXJ0ZXNpYW4va2VybmVsL2NvbXBpbGUnIDtcblxuY29uc3QgbW9kZWwgPSBudW1iZXIgO1xuY29uc3Qgc3ltYm9sID0gJ2onIDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlIDogJ2NhcnRlc2lhbicgLCAvLyBjYXJ0ZXNpYW4gb3IgcG9sYXJcblx0bW9kZWwgLFxuXHRzeW1ib2wgLFxuXHRrZXJuZWwgOiBjb21waWxlKCBtb2RlbCAsIHN5bWJvbCApICxcbn0gO1xuIl19