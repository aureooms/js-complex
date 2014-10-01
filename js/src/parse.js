

/**
 * Parse
 *
 * /!\ DOES NOT CURRENTLY KNOW WHAT
 *     WOULD BE THE BEST IMPLEMENTATION
 */

var __parse__ = function (base, zero, symbol) {

	var parse = function (s, i, j) {

		var c, rea, img, ai, aj, bi, bj;

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
				else {
					return [zero, base(ai, i)];
				}
			}

			++i;

			if (i >= j) {
				return [base(ai, j), zero];
			}

			c = s[i];

			if ( c === '+' || c === '-') {
				aj = i;
				bi = i;
				break;
			}

		}


		for (;;) {

			++i;
			c = s[i];

			if (c === symbol) {
				if (bi === i) {
					return [base(ai, aj), one];
				}
				else {
					return [base(ai, aj), base(bi, i)];
				}
			}

		}

	};

	return parse;
};

exports.__parse__ = __parse__;
