import fromarray from './fromarray' ;
export default kernel => ( s , i , j )  => fromarray( kernel( s , i , j ) ) ;
