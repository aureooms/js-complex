import fromarray from './fromarray' ;
export default kernel => ( { real : a , img : b } )  => fromarray( kernel( a , b ) ) ;
