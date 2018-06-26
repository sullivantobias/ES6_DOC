/** Declaring Parent class **/
class Persons {
  constructor(type) {
    this._type = type;
  }

  get type() {
    return "method returned from parent class : " + this._type;
  }

  infos() {
    return "Parent method infos()";
  }
}

/** Declaring child class **/
class Caracter extends Persons {
  constructor(pseudo, type) {
    super(type);
    this._pseudo = pseudo;
    this._life = 100;
    this._speed = 5;
  }

  /** Declaring Methods **/
  removeLife(lifeRemoved) {
    this._life -= lifeRemoved;
  }

  increaseSpeed() {
    this._speed += 5;
  }

  accessParentMethod() {
    return "Child method is calling parent method | " + super.infos();
  }

  /** Getters And Setters
   ** Be sure your variables have not the same name as getters and setters to prevent self call function
   **/
  get life() {
    return this._life;
  }
  set life(newLife) {
    this._life = newLife;
  }
  get speed() {
    return this._speed;
  }
  set speed(newSpeed) {
    this._speed = newSpeed;
  }
  get pseudo() {
    return this._pseudo;
  }
}

/** Instanciation **/
const myCaracter = new Caracter("Remoh", "A Guy");

console.log(
  "Before All : " + myCaracter.life,
  myCaracter.speed,
  myCaracter.pseudo
);

myCaracter.life = 2000;
myCaracter.speed = 10;

console.log("After Setters : " + myCaracter.life, myCaracter.speed);

myCaracter.removeLife(1000);
myCaracter.increaseSpeed();

console.log("After Calling Methods : " + myCaracter.life, myCaracter.speed);

/** You can use destructuring here, i feel it's very useful
 ** You can do this like that.
 */

const { pseudo, life, speed } = myCaracter;

console.log(pseudo, life, speed);

/** Calling parent method **/

const { type } = myCaracter;

console.log(type);

/** Trying to call parentMethod inside Children Method **/

console.log(myCaracter.accessParentMethod());
