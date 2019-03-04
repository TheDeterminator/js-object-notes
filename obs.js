/*function Human(name, age) { //What was...
  this.name = name;
  this.age = age
}

Human.prototype.reproduce = function() {
	console.log("reproducing...")
}

Human.prototype.grow = function() {
	return `${this.name} went from ${this.age} to ${++this.age}`
} //..9 lines*/

class Human {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	reproduce() {
		console.log("reproducing...")
	}

	grow() {
		return `${this.name} went from ${this.age} to ${++this.age}`
	}

	static declareRights() {
		console.log("I'm a (WO)MAN!!! and I have rights!!!")
	}
}

const me = new Human("Alec", 23)
const jim = new Human("Jim", 45)

/*function Janitor(name, age, salary) {
	new Human.call(this, name, age)

	this.salary = salary
}

Janitor.prototype.mop = function() {
	console.log(`${this.name} mops the floor...`)
}

Janitor.prototype = Object.create(Human.prototype);

const carl = new Janitor("Carl", 21, 80125)
*/

class Janitor extends Human {
	constructor(name, age, salary) {
		super(name, age)
		this.salary = salary
	}

	mop() {
		console.log(`${this.name} mops the floor...`)
	}
}

const carl = new Janitor("Carl", 21, 80125)



