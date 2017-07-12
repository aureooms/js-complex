import Complex from './Complex' ;
import COMPLEX_DEFAULT_DISPLAY from './COMPLEX_DEFAULT_DISPLAY' ;
import { TypeError , ValueError } from '@aureooms/js-error' ;

export default class ComplexField {

	constructor ( name , representation ) {
		this.name = name ;
		this.base = representation ;
	}

	characteristic ( ) {
		return this.$0() ;
	}

	from ( object , base = undefined , is_negative = 0 ) {

		if ( object === null || object === undefined ) return this.$0();

		switch ( object.constructor.prototype ) {

			case Number.prototype :
				if ( base !== undefined ) throw new ValueError('ComplexField#from: using the base parameter does not make sense when passing a Number.') ;
				return this.from_number( object , is_negative ) ;

			case String.prototype :
				if ( base === undefined ) base = COMPLEX_DEFAULT_DISPLAY ;
				return this.from_string( object , base , is_negative ) ;

			case Array.prototype :
				if ( base === undefined ) base = this.base ;
				return this.from_digits( object , base , is_negative ) ;

			case Boolean.prototype :
				if ( base !== undefined ) throw new ValueError('ComplexField#from: using the base parameter does not make sense when passing a Boolean.') ;
				return this.from_number( +object , is_negative ) ;

			case Complex.prototype :
				if ( base !== undefined ) throw new ValueError('ComplexField#from: using the base parameter does not make sense when passing an Complex.') ;
				return new Complex( object.base , object.is_negative ^ is_negative , object.limbs ) ;

			default:
				throw new TypeError(`ComplexField#from cannot handle ${object.constructor.prototype}`) ;

		}

	}

	from_number ( number , is_negative = 0 ) {

		if ( number < 0 ) {
			is_negative = ~is_negative ;
			number = -number ;
		}

		const limbs = convert( 0x20000000000000 , this.base , [ number ] , 0 , 1 ) ;

		return new Complex( this.base , is_negative , limbs ) ;

	}

	from_string ( string , base = 10 , is_negative = 0  ) {

		if ( string.length === 0 ) throw new ValueError( 'ComplexField#from_string cannot parse empty string.' ) ;

		if ( string[0] === '-' ) return this.from_string( string.slice(1) , base , ~is_negative ) ;

		if ( string[0] === '+' ) return this.from_string( string.slice(1) , base , is_negative ) ;

		const limbs = parse( base , this.base , string ) ;

		return new Complex( this.base , is_negative , limbs ) ;

	}

	from_digits ( digits , base , is_negative ) {

		const limbs = convert( base , this.base , digits.slice().reverse() , 0 , digits.length ) ;

		return new Complex( this.base , is_negative , limbs ) ;

	}

	toString ( ) {
		return this.name ;
	}

	$0 ( ) {
		return new Complex( this.base , 0 , [ 0 ] ) ;
	}

	$1 ( ) {
		return new Complex( this.base , 0 , [ 1 ] ) ;
	}

}
