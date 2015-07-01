

/**
 * Stringify
 */

const stringify = function ( base , eq0 , eq1 , eqm1 , gt0 , symbol ) {

	return function ( a , b ) {

		const azero = eq0(a);

		const bzero = eq0(b);

		if (azero && bzero) {
			return "0";
		}

		let out = "";

		if (!azero) {

			out += base(a);

			if (gt0(b)) {
				out += "+";
			}

		}

		if (!bzero) {

			if (eqm1(b)) {
				out += "-";
			}
			else if (!eq1(b)) {
				out += base(b);
			}

			out += symbol;
		}

		return out;

	};
};

exports.stringify = stringify;
