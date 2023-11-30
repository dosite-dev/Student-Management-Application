const {studentsData} = require("../db/student");
//--------Add student-------
const add = (student) => {
    student.id = (studentsData.length)+1;
    studentsData.push(student);
    console.log("new student added");
    console.log("1 ADD NEW STUDENT -------");
    console.log(studentsData);
}

//-------listing students------------

const display = () =>{
    console.log(" 2 Display----------");
    console.log(studentsData);

}

//----------findById -----------
const findById = (id) => {
    let foundStudent = {};
    foundStudent = studentsData.find(student => student.id === id);
    if(!foundStudent){
        console.log("student not exist");
    }
    else{
        console.log("3------findById------")
        console.log("Student exist");
        console.log(foundStudent);
    }
}
//------------findByMany---------

const findByMany = (grade) => {
    let foundStudents = [];
     foundStudents =studentsData .filter(student => student .grade === grade);

 if (!foundStudents){
    console.log("student does not graded ");
 }
 else{
    console.log("4 ----findByMany -----");
    console.log("student exists");
    console.log(foundStudents);
 }
}
//------------Remove Student ---------

const remove = (id) => {
    studentExists = {};
    studentExists = studentsData.find( studentExists => studentExists.id === id);
    if (! studentExists){
        console.log("student doesn't exist");

    }
    else{
        var remainingStudents=[];
        remainingStudents = studentsData .filter (studentExists => studentExists.id !== id)
;        
        console.log(" 5-------removeStudent--------");
        console.log("student exists");
        console.log (remainingStudents);
    }

}
//---------update Student---------
const updateStudent = (id,key,value ) => {
    var studentExist = {};
    studentExist = studentsData.find( studentExist => studentExist.id === id);
    console.log("studentExist");
    if(!studentExist){
        console.log("student not exist");
    }
    else{
        studentExist[key] = value;
        console.log("6------updateStudent------");
        console.log(studentExist);
        
    }



}

// -------------UPdate Many students --------------------------------

const updateManyStudents = ( id,student) => {
   
    var studentExist ={};
    studentExist = studentsData .find(studentExist => studentExist.id === id);
    console.log("exist");
    if(!studentExist){
    
    console.log("student does not Exist");

}
else{
    for ( key in student) {
        studentExist[key] = student[key];
         }
         console.log("7------updateManyStudents------");
         console.log(studentExist);
    }
}



module.exports ={
    add,
    display,
    findById,
    findByMany,
    remove,
    updateStudent,
    updateManyStudents,
}