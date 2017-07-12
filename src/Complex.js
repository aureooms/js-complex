import ZeroDivisionError from './ZeroDivisionError' ;

import { increasing } from '@aureooms/js-number' ;

import COMPLEX_DEFAULT_CARTESIAN_KERNEL from './COMPLEX_DEFAULT_CARTESIAN_KERNEL' ;

const {
	stringify ,
	add ,
	sub ,
	mul ,
	div ,
	abs ,
	arg ,
	pow ,
	exp ,
} = COMPLEX_DEFAULT_CARTESIAN_KERNEL ;

export default class Complex {

	constructor ( representation , real , img ) {
		this.representation = representation ;
		this.real = real ;
		this.img = img ;
	}

	move ( other ) {
		other.representation = this.representation ;
		other.real = this.real ;
		other.img = this.img ;
		return other ;
	}

	copy ( ) {
		return new Complex( this.representation , this.real , this.img ) ;
	}

	toString ( representation = DEFAULT_DISPLAY_REPRESENTATION ) {
		return stringify( this.real , this.img ) ;
	}

	add ( other ) {

		const [ real , img ] = add( this.real , this.img , other.real , other.img ) ;

		return Complex( this.representation , real , img ) ;

	}

	iadd ( other ) {
		return this.add(other).move(this);
	}

	sub ( other ) {

		const [ real , img ] = sub( this.real , this.img , other.real , other.img ) ;

		return Complex( this.representation , real , img ) ;

	}

	isub ( other ) {
		return this.sub(other).move(this);
	}

	mul ( other ) {

		const [ real , img ] = mul( this.real , this.img , other.real , other.img ) ;

		return Complex( this.representation , real , img ) ;

	}

	imul ( other ) {
		// TODO optimize but be careful with side effects
		return this.mul(other).move(this);
	}

	/**
	 * Computes <code>this</code> raised to the <code>x</code>th power.
	 * <code>x</code> is a double smaller or equal to 2^53.
	 *
	 * @param {Number} x The power to raise <code>this</code> to.
	 * @return {Integer} <code>this ^ x</code>
	 */
	pow ( x ) {
		return this.polar( ).pow( x.polar( ) ).cartesian( ) ;
	}

	ipow ( x ) {
		// TODO optimize but be careful with side effects
		return this.pow(x).move(this);
	}

	square ( ) {
		// TODO optimize but be careful with side effects
		return this.pow(2);
	}

	isquare ( ) {
		// TODO optimize
		return this.ipow(2);
	}

	div ( other ) {
		return this.__truediv__( other ) ;
	}

	idiv ( other ) {
		return this.div(other).move(this);
	}

	mod ( other ) {
		throw new TypeError( "can't mod complex numbers." ) ;
	}

	imod ( other ) {
		throw new TypeError( "can't mod complex numbers." ) ;
	}

	divmod ( other ) {
		throw new TypeError( "can't take floor or mod of complex number." ) ;
	}

	__truediv__ ( other ) {
		const [ real , img ] = div( this.real , this.img , other.real , other.img ) ;
		return new Complex( this.representation , real , img ) ;
	}

	__floordiv__ ( other ) {
		throw new TypeError( "can't take floor of complex number." ) ;
	}

	opposite ( ) {
		return new Complex( this.representation , ~this.is_negative , this.real , this.img ) ;
	}

	conjugate ( ) {
		return new Complex( this.representation , ~this.is_negative , this.real , this.img ) ;
	}

	negate ( ) {
		// TODO optimize but be careful with side effects
		return this.opposite().move(this);
	}

	sign ( ) {
		return this.iszero() ? 0 : this.is_negative ? -1 : 1 ;
	}

	iszero ( ) {
		return _jz( this.real , this.img ) ;
	}

	isone ( ) {
		if ( this.is_negative ) return false ;
		return _eq( this.limbs , 0 , this.limbs.length , [ 1 ] , 0 , 1 ) ;
	}

	nonzero ( ) {
		return !this.iszero();
	}

	bin ( ) {
		return this.toString( 2 ) ;
	}

	oct ( ) {
		return this.toString( 8 ) ;
	}

	hex ( ) {
		return this.toString( 16 ) ;
	}

	digits ( base = DEFAULT_DISPLAY_BASE ) {
		return convert( this.base , base , this.limbs , 0 , this.limbs.length ).reverse( ) ;
	}

	bits ( ) {
		return this.digits( 2 ) ;
	}

	divides ( other ) {
		return other.mod( this ).iszero( ) ;
	}

	divide_knowing_divisible_by ( other ) {
		return this.div( other ) ;
	}

	abs ( ) {
		return abs( this.real , this.img ) ;
	}

	cmp ( other ) {
		return increasing( this.abs() , other.abs() ) ;
	}

	eq ( other ) {
		return this.cmp( other ) === 0 ;
	}

	ge ( other ) {
		return this.cmp( other ) >= 0 ;
	}

	gt ( other ) {
		return this.cmp( other ) > 0 ;
	}

	le ( other ) {
		return this.cmp( other ) <= 0 ;
	}

	lt ( other ) {
		return this.cmp( other ) < 0 ;
	}

	ne ( other ) {
		return this.cmp( other ) !== 0 ;
	}

}
