// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if (typeof math === 'number' && typeof english === 'number' && typeof science === 'number' && typeof social === 'number' && typeof language === 'number') {
            const totalMarks = math + english + science + social + language;
            resolve(totalMarks);
        } else {
            reject('Null values for marks');
        }
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        if (typeof totalMarks === 'number') {
            const averageMarks = totalMarks / 5;
            resolve(averageMarks);
        } else {
            reject('Invalid input for total marks. Please provide a valid numeric value.');
        }
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        if (typeof averageMarks === 'number') {
            let grade = '';
            if (averageMarks >= 90) {
                grade = 'A+';
            } else if (averageMarks >= 80) {
                grade = 'A';
            } else if (averageMarks >= 70) {
                grade = 'B';
            } else if (averageMarks >= 60) {
                grade = 'C';
            } else if (averageMarks >= 50) {
                grade = 'E';
            } else {
                grade = 'F';
            }
            resolve(grade);
        } else {
            reject('Invalid input for average marks. Please provide a valid numeric value.');
        }
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
