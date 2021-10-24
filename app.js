// api stands for application programming interface
// it is a bridge between the client and the server
// it is used to fetch data from a server

// SCOPES:- it means range
// let has a block scope. its scope is limited to the block it is declared in.
// var has a global scope. that is var can be accessed throughout the file. but in function var doesn't have a global scope
// (this.alert('hii')) will throw a message on the browser window saying hii. this is an object which points towards the parent object

/* create an object 'student' which has a name and a class. */
let student = {
  n: "shaina",
  c: " sybcs",
  print: function() {
    console.log(this);
    console.log(this.n + this.c);
  }
}
student.print()
