
/**
 * Parse
 *
 * /!\ DOES NOT CURRENTLY KNOW WHAT
 *     WOULD BE THE BEST IMPLEMENTATION
 */

export default function (parse, $0, $1, $_1, symbol) {

	return function (s, i, j) {

		let aj , bi , dflt ;

		if (i === j) {
			return [$0(), $0()];
		}

		let ai = i;

		let c = s[i];

		for (;;) {

			if (c === symbol) {
				if (ai === i) {
					return [$0(), $1()];
				}
				else if (ai === i - 1) {
					if (s[ai] === '-') {
						return [$0(), $_1()];
					}
					else if (s[ai] === '+') {
						return [$0(), $1()];
					}
					else {
						return [$0(), parse(s.slice( ai , i))];
					}
				}
				else {
					return [$0(), parse(s.slice( ai , i))];
				}
			}

			++i;

			if (i >= j) {
				return [parse(s.slice( ai , j)), $0()];
			}

			c = s[i];

			if ( c === '+' ) {
				dflt = $1;
				aj = i;
				bi = i;
				break;
			}
			else if ( c === '-' ) {
				dflt = $_1;
				aj = i;
				bi = i;
				break;
			}

		}


		for (;;) {

			++i;
			c = s[i];

			if (c === symbol) {
				if (bi === i - 1) {
					return [parse(s.slice( ai , aj)), dflt()];
				}
				else {
					return [parse(s.slice( ai , aj)), parse(s.slice( bi , i))];
				}
			}

		}

	};
}

