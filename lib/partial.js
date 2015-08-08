'use strict';

// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log,
	pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( r, p )
*	Partially applies number of failures until the experiment is stopped `r` and success probability `p` and returns a function for evaluating the moment-generating function (MGF) for a Negative Binomial distribution.
*
* @param {Number} r - number of failures until the experiment is stopped
* @param {Number} p - success probability
* @returns {Function} MGF
*/
function partial( r, p ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Negative Binomial distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		if ( t >= -ln( p ) ) {
			return NaN;
		}
		return pow( ( (1 - p) * exp( t ) ) / ( 1 - p * exp( t ) ), r );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
