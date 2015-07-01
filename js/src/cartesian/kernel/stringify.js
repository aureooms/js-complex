

/**
 * Stringify
 */

const stringify = function (base, eq, gt, zero, one, minusone, symbol) {

	return function ( a , b ) {

		const azero = eq(a, zero);

		const bzero = eq(b, zero);

		if (azero && bzero) {
			return "0";
		}

		let out = "";

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
};

exports.stringify = stringify;
