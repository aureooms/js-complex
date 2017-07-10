import fromarray from './fromarray' ;
export default kernel => ( { real : a , img : b } , { real : c , img : d } )  => fromarray( kernel( a , b , c , d ) ) ;
