import Complex from './Complex' ;
import COMPLEX_DEFAULT_DISPLAY from './COMPLEX_DEFAULT_DISPLAY' ;
import { TypeError , ValueError } from '@aureooms/js-error' ;

export default class ComplexField {

	constructor ( name , representation ) {
		this.name = name ;
		this.representation = representation ;
	}

	characteristic ( ) {
		return this.$0() ;
	}

	toString ( ) {
		return this.name ;
	}

	from ( object , representation = undefined ) {

		if ( object === null || object === undefined ) return this.$0();

		switch ( object.constructor.prototype ) {

			case Number.prototype :
				if ( representation !== undefined ) throw new ValueError('ComplexField#from: using the representation parameter does not make sense when passing a Number.') ;
				return this.from_number( object ) ;

			case String.prototype :
				if ( representation === undefined ) representation = COMPLEX_DEFAULT_DISPLAY ;
				return this.from_string( object , representation ) ;

			case Array.prototype :
				if ( representation === undefined ) representation = this.representation ;
				return new Complex( representation , object[0] , object[1] ) ;

			case Boolean.prototype :
				if ( representation !== undefined ) throw new ValueError('ComplexField#from: using the representation parameter does not make sense when passing a Boolean.') ;
				const { $0 , $1 } = representation.model ;
				return new Complex( representation , object ? $1() : $0() , $0() ) ;

			case Complex.prototype :
				if ( representation !== undefined ) throw new ValueError('ComplexField#from: using the representation parameter does not make sense when passing an Complex.') ;
				return new Complex( object.representation , object.real , object.img ) ;

			case Object.prototype :
				return new Complex( representation , object.real , object.img ) ;

			default:
				throw new TypeError(`ComplexField#from cannot handle ${object.constructor.prototype}`) ;

		}

	}

	from_number ( number ) {

		const real = this.representation.model.parse( number ) ;
		const img = this.representation.model.$0() ;

		return new Complex( this.representation , real , img ) ;

	}

	from_string ( string , representation = COMPLEX_DEFAULT_DISPLAY ) {

		if ( string.length === 0 ) throw new ValueError( 'ComplexField#from_string cannot parse empty string.' ) ;

		const [ real , img ] = representation.kernel.parse( string , 0 , string.length ) ;

		// TODO should convert representations
		return new Complex( representation , real , img ) ;

	}

	$0 ( ) {
		return new Complex( this.representation , 0 , 0 ) ;
	}

	$1 ( ) {
		return new Complex( this.representation , 1 , 0 ) ;
	}

	$j ( ) {
		return new Complex( this.representation , 0 , 1 ) ;
	}

}
