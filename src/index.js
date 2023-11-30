const studentsData = require("./controller/studentController");
const { add,display,remove,findById,findByMany,updateStudent,updateManyStudents} = studentsData;
 //------------------Add new Item  call function-----------
 let newStudent = {
   
    Name:"cyiza Dosite",
    grade:"A",

 };
 add ( newStudent);
 //----------------listing students--------
 display();

 //------------FindById --------

 findById(5);
 findByMany("A");
 // ---------Remove students -------
 remove(1);
 //---------Update students---------
 updateStudent (3,"Name","Umutoni Carine");
 //---------Update  many students---------
 const update={
 Name:"lucky romeo",
 grade:"E"
 }
 
 updateManyStudents (1,update);
 const update1={
   Name:"keza romeo",
   grade:"B"
   }
   
   updateManyStudents (2,update1);
  