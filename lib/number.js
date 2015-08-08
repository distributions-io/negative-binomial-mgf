'use strict';

// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log,
	pow = Math.pow;


// MGF //

/**
* FUNCTION: mgf( x, r, p )
*	Evaluates the moment-generating function (MGF) for a Negative Binomial distribution with number of failures until the experiment is stopped `r` and success probability `p` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} r - number of failures until the experiment is stopped
* @param {Number} p - success probability
* @returns {Number} evaluated MGF
*/
function mgf( t, r, p ) {
	if ( t >= -ln( p ) ) {
		return NaN;
	}
	return pow( ( (1 - p) * exp( t ) ) / ( 1 - p * exp( t ) ), r );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
