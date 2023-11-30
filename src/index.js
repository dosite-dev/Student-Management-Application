const studentsData = require("./controller/studentController");
const { add,display,remove,findById,findByMany,update,updateManyElements} = studentsData;
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
