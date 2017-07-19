import ZeroDivisionError from './ZeroDivisionError' ;

import COMPLEX_DEFAULT_DISPLAY from './COMPLEX_DEFAULT_DISPLAY' ;

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

	toString ( representation = COMPLEX_DEFAULT_DISPLAY ) {
		// TODO use proper representation conversion
		return this.representation.kernel.stringify( this.real , this.img ) ;
	}

	add ( other ) {

		const [ real , img ] = this.representation.kernel.add( this.real , this.img , other.real , other.img ) ;

		return new Complex( this.representation , real , img ) ;

	}

	iadd ( other ) {
		// TODO optimize but be careful with side effects
		return this.add(other).move(this);
	}

	sub ( other ) {

		const [ real , img ] = this.representation.kernel.sub( this.real , this.img , other.real , other.img ) ;

		return new Complex( this.representation , real , img ) ;

	}

	isub ( other ) {
		// TODO optimize but be careful with side effects
		return this.sub(other).move(this);
	}

	mul ( other ) {

		const [ real , img ] = this.representation.kernel.mul( this.real , this.img , other.real , other.img ) ;

		return new Complex( this.representation , real , img ) ;

	}

	imul ( other ) {
		// TODO optimize but be careful with side effects
		return this.mul(other).move(this);
	}

	/**
	 * Computes <code>this</code> raised to the <code>other</code>th power.
	 *
	 * @param {Complex} other The power to raise <code>this</code> to.
	 * @return {Complex} <code>this ^ other</code>
	 */
	pow ( other ) {
		// TODO optimize for special cases
		const [ real , img ] = this.representation.kernel.pow( this.real , this.img , other.real , other.img ) ;
		return new Complex( this.representation , real , img ) ;
	}

	ipow ( other ) {
		// TODO optimize but be careful with side effects
		return this.pow(x).move(this);
	}

	square ( ) {
		// TODO optimize
		return this.mul(this);
	}

	isquare ( ) {
		// TODO optimize but be careful with side effects
		return this.square().move(this);
	}

	div ( other ) {
		return this.__truediv__( other ) ;
	}

	idiv ( other ) {
		// TODO optimize but be careful with side effects
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
		const [ real , img ] = this.representation.kernel.div( this.real , this.img , other.real , other.img ) ;
		return new Complex( this.representation , real , img ) ;
	}

	__floordiv__ ( other ) {
		throw new TypeError( "can't take floor of complex number." ) ;
	}

	opposite ( ) {
		return new Complex( this.representation , this.representation.model.neg( this.real ) , this.representation.model.neg( this.img ) ) ;
	}

	conjugate ( ) {
		return new Complex( this.representation , this.real , this.representation.model.neg( this.img ) ) ;
	}

	negate ( ) {
		// TODO optimize but be careful with side effects
		// TODO what would be the name for in-place conjugate -_- ?
		return this.opposite().move(this);
	}

	signum ( ) {
		return this.iszero() ? this : this.divide_knowing_model_contains( this.abs() ) ;
	}

	iszero ( ) {
		return this.representation.model.eq( this.representation.model.$0() , this.real ) &&
		this.representation.model.eq( this.representation.model.$0() , this.img ) ;
	}

	isone ( ) {
		return this.representation.model.eq( this.representation.model.$1() , this.real ) &&
		this.representation.model.eq( this.representation.model.$0() , this.img ) ;
	}

	nonzero ( ) {
		return !this.iszero();
	}

	divides ( other ) {
		return other.mod( this ).iszero( ) ;
	}

	divide_knowing_divisible_by ( other ) {
		return this.div( other ) ;
	}

	divide_knowing_model_contains ( other ) {
		const real = this.representation.model.div( this.real , other ) ;
		const img = this.representation.model.div( this.img , other ) ;
		return new Complex( this.representation , real , img ) ;
	}

	abs ( ) {
		return this.representation.kernel.abs( this.real , this.img ) ;
	}

	cmp ( other ) {
		// TODO could also be
		// throw TypeError: no ordering relation is defined for complex numbers
		return this.representation.model.increasing( this.abs() , other.abs() ) ;
	}

	eq ( other ) {
		return this.representation.model.eq(this.real, other.real) && this.representation.model.eq(this.img, other.img) ;
	}

	ne ( other ) {
		return !this.eq(other) ;
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

}
