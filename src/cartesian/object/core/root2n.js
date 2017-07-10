import fromarray from './fromarray' ;
export default kernel => ( l )  => fromarray( kernel( l ) ) ;
