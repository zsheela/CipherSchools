 
  /*Lecture_10
  oop in JavaSript

  Objects: It is a unique entity that contains some properties and methods
  Charcteristics are properties
  actions are methods
 objects are instances of class
  Two ways to create object
    1. object literal
    2. object constructor
    3. Object.creat()

    Classes: classes are blue prints of an object
    There are no classes in js
    JavaScript is a protype based oop, so we have only objects in javaScript.
  

  Abstraction: Displaying only the essential information and hiding the details.
  Encapsulation: The process of wraping props and functions in single unit.
    
  Inheritance: Objects inherit objects
  */


    // let person = {
    //   firstName: "Sheela",
    //   lastName: "Boorla",

    //   getFullName: function(){
    //     return `The name  of the person is ${person.firstName} ${person.lastName}`;
    //   },

    //   phoneNum: {
    //     mobile: "2553",
    //     landline: "99551",
    //   },
    // };

    // console.log(person.getFullName());
    // console.log(person.phoneNum.landline);




    // function person(firstName, lastName){
    //   this.firstName=firstName;
    //   this.lastName=lastName;
    // }
    // let person1 = new person("Sheela", "Boorla");
    // let person2 = new person("Shantanu", "Shubham");
    // console.log(person1.firstName);
    // console.log(`${person2.firstname} ${person2.lastName}`);




    // const coder = {
    //   isStudying: false,
    //   printIntroduction: function() {
    //     console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`)
    //   },
    // };

    // const me = Object.create(coder);
    // me.name = "Sheela Boorla";

    // me.isStudying = true;

    // me.printIntroduction();



    // class Vechile {
    //   constructor(name, maker, engine) {
    //     this.name=name;
    //     this.maker=maker;
    //     this.engine=engine;
    //   }

    //   getDetails() {
    //     return `The name of the vechile is ${this.name}`;
    //   }
    // }

    // let v1 = new Vechile("Creta", "Hyundai", "2500cc");
    // let v2 = new Vechile("Q5", "Audi", "3000cc");

    // console.log(v1.name)
    // console.log(v2.maker)
    // console.log(v1.getDetails());



    // function Vechile(name, maker, engine) {
    //     this.name = name;
    //     this.maker = maker;
    //     this.engine = engine;
    // }

    // Vechile.prototype.getDetails() = function () {
    //   return `The name of the vechile is ${this.name}`;
    // };

    // let v1 = new Vechile("Creta", "Hyundai", "2500cc");
    // let v2 = new Vechile("Q5", "Audi", "3000cc");

    // console.log(v1.name)
    // console.log(v2.maker)
    // console.log(v1.getDetails());




  //   class Person {
  //     constructor(firstName, lastName){
  //       this.firstName = firstName;
  //       this.lastName = lastName;
      

  //     // addAddress(newAddress){
  //     //   this.address = newAddress;
  //     // }

  //     // getdetails() {
  //     //   console.log(`Name is: ${this.name}, and address is: ${this.address}`);
  //     // }

  //     // let getDetails_NoAccess = function() {
  //     //   return `firstName is ${this.firstName} and lastName is ${this.lastName}`;
  //     // };

  //     this.getDetails_Access = function() {
  //       return `firstName is ${this.firstName} and lastName is ${this.lastName}`;
  //     }

    
  //   }
  // }

  //   let person1 = new Person("Sheela", "voorla");
  //   console.log(person1.firstName);
  //   console.log(person1.getDetails_NoAccess());
  //   console.log(person1.getDetails_Access());


    class Person {
      constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
      }
    

    getDetails = function() {
        console.log(`firstName is ${this.firstName} and lastName is ${this.lastName}`);
   };
  }

  class Student extends Person {
    constructor(firstName, lastName, rollno){
      super(firstName, lastName);
      this.rollno = rollno;

      getDetails() =function() {
        return `firstName is ${this.firstName} and lastName is ${this.lastName} and the rollnumber is: ${this.rollno}`;
      };
    }
  }

  let person1 = new Person("Sheela", "Boorla");
  console.log(person1.firstName);
  console.log(person1.getDetails());

  let student1 = new Student("Shantanu", "Shubham", 7);
  console.log(student1.getDetails());

