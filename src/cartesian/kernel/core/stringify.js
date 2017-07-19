
/**
 * Stringify
 */

export default function ( stringify , eq0 , eq1 , eq_1 , gt0 , symbol ) {

	return function ( a , b ) {

		const azero = eq0(a);

		const bzero = eq0(b);

		if (azero && bzero) {
			return "0";
		}

		let out = "";

		if (!azero) {

			out += stringify(a);

			if (gt0(b)) {
				out += "+";
			}

		}

		if (!bzero) {

			if (eq_1(b)) {
				out += "-";
			}
			else if (!eq1(b)) {
				out += stringify(b);
			}

			out += symbol;
		}

		return out;

	};
}

