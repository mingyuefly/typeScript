// function greeter(person) {
//     return "Hello, " + person;
// }
   
// let user = "Jane User";
// document.body.textContent = greeter(user);


// 类型注解，编译错误，无法数组转化为字符串
// function greeter(person: string) {
//     return "Hello, " + person;
//   }
  
//   let user = [0, 1, 2];
  
//   document.body.textContent = greeter(user);


// interface 接口
// interface Person {
//     firstName: string;
//     lastName: string;
//   }
  
//   function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
//   }
  
//   let user = { firstName: "Jane", lastName: "User" };
  
//   document.body.textContent = greeter(user);


// 类 class
class Student {
    fullName: string
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
  
  interface Person {
    firstName: string
    lastName: string
  }
  
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
  }
  
  let user = new Student("Jane", "M.", "User")
  
  document.body.textContent = greeter(user)

