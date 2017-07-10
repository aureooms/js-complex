
export default kernel => ( { rho : a , theta : b } , { rho : c , theta : d } )  => fromarray( kernel( a , b , c , d ) ) ;

