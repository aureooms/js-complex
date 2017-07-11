// e^(a+ib) = (e^a)(e^(ib)) = (e^a)((cos b) + i(sin b)) = e^a cos b + i e^a sin b
export default ( exp , cos , sin , mul ) => ( a , b ) => [ mul( exp(a), cos(b) ) , mul( exp(a), sin(b) ) ] ;
