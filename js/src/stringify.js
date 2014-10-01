

/**
 * Stringify
 */

var __stringify__ = function (base, eq, gt, zero, one, minusone, symbol) {

	var stringify = function (a, b) {

		var out, azero, bzero;

		azero = eq(a, zero);

		bzero = eq(b, zero);

		if (azero && bzero) {
			return "0";
		}

		out = "";

		if (!azero) {

			out += base(a);

			if (gt(b, zero)) {
				out += "+";
			}

		}

		if (!bzero) {

			if (eq(b, minusone)) {
				out += "-";
			}
			else if (!eq(b, one)) {
				out += base(b);
			}

			out += symbol;
		}

		return out;

	};

	return stringify;
};

exports.__stringify__ = __stringify__;
