// (a+ib)^{c+id} = e^{log_e(abs(a+ib))(c+id)+i arg(a+ib)(c+id)}
//               = e^{( c * \log_e(abs(a+ib)) - d * arg(a+ib) ) + i ( d * \log_e(abs(a+ib)) + c * arg(a+ib) ) }
export default ( exp , abs , arg , loge , mul , sub , add ) => ( a , b , c , d ) => {
	const _log = loge(abs(a,b)) ;
	const _arg = arg(a,b) ;
	return exp(sub(mul(c,_log),mul(d,_arg)), add(mul(d,_log),mul(c,_arg))) ;
} ;
