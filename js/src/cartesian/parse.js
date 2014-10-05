

/**
 * Parse
 *
 * /!\ DOES NOT CURRENTLY KNOW WHAT
 *     WOULD BE THE BEST IMPLEMENTATION
 */

var __parse__ = function (base, zero, one, minusone, symbol) {

	var parse = function (s, i, j) {

		var c, ai, aj, bi, bj, dflt;

		if (i === j) {
			return [zero, zero];
		}

		ai = i;

		c = s[i];

		for (;;) {

			if (c === symbol) {
				if (ai === i) {
					return [zero, one];
				}
				else if (ai === i - 1) {
					if (s[ai] === '-') {
						return [zero, minusone];
					}
					else if (s[ai] === '+') {
						return [zero, one];
					}
					else {
						return [zero, base(s, ai, i)];
					}
				}
				else {
					return [zero, base(s, ai, i)];
				}
			}

			++i;

			if (i >= j) {
				return [base(s, ai, j), zero];
			}

			c = s[i];

			if ( c === '+' ) {
				dflt = one;
				aj = i;
				bi = i;
				break;
			}
			else if ( c === '-' ) {
				dflt = minusone;
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
					return [base(s, ai, aj), dflt];
				}
				else {
					return [base(s, ai, aj), base(s, bi, i)];
				}
			}

		}

	};

	return parse;
};

exports.__parse__ = __parse__;
