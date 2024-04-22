import _ from "lodash";

class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get address() {
    return this._address;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(year) {
    this._birthYear = year;
  }

  set address(addr) {
    this._address = addr;
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`;
  }
}

class Student extends Peson {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }
}

class Address {
  constructor(country, state, city, zip, street) {
    this._country = country;
    this._state = state;
    this._city = city;
    this._zip = zip;
    this._street = street;
  }

  get street() {
    return this._street;
  }

  get city() {
    return this._city;
  }

  get state() {
    return this._state;
  }

  get zip() {
    return this._zip;
  }

  get country() {
    return this._country;
  }
}

const p1 = new Person("David", "Hilbert", "555-55-5555");
p1.address = new Address("Germany");
p1.birthYear = 1903;

const p2 = new Person("Alan", "Turing", "666-66-6666");
p2.address = new Address("England");
p2.birthYear = 1912;

const p3 = new Person("Stephen", "Kleene", "777-77-7777");
p3.address = new Address("US");
p3.birthYear = 1909;

const p4 = new Person("Alonzo", "Church", "333-33-3333");
p4.address = new Address("US");
p4.birthYear = 1879;

const p5 = new Person("Haskell", "Curry", "111-11-1111");
p5.address = new Address("US");
p5.birthYear = 1901;

const persons = [p1, p2, p3, p4, p5];

const isValid = (value) => !_.isUndefined(value) && !_.isNull(value);
const gatherStats = (accum, element) => {
  if (!isValid(accum[element])) {
    accum[element] = { name: element, count: 0 };
  } else {
    accum[element].count++;
  }

  return accum;
};

const firstCountryName = _.chain(persons)
  .filter(isValid)
  .map(_.property("address.country"))
  .reduce(gatherStats, {})
  .values()
  .sortBy("count")
  .reverse()
  .first()
  .value().name;
