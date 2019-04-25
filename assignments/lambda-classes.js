// CODE here for your Lambda Classes

class Person {
    constructor(attributues) {
        this.name = attributues.name;
        this.location = attributues.location;        
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(attributues) {
        super(attributues);
        this.specialty = attributues.specialty;
        this.favLanguage = attributues.favLanguage;
        this.catchPhrase = attributues.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade (student,subject) {
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
    gradeAssignment (student) {
        let calculateGradeAmount = function (){
            let min = Math.ceil(1);
            let max = Math.floor(100);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        let decideAddOrSubtract = Math.random();
        if (decideAddOrSubtract > .49) {
            student.grade = student.grade + calculateGradeAmount();
        } else {
            student.grade = student.grade - calculateGradeAmount();
        }
        console.log(`Assignment was graded by ${this.name}, ${student.name}'s grade is now ${student.grade}`)
    }
}

class Student extends Person{
    constructor(attributues) {
        super(attributues);
        this.previousBackground = attributues.previousBackground;
        this.className = attributues.className;
        this.favSubjects = attributues.favSubjects;
        this.grade = attributues.grade;
    }
    listsSubjects () {
        console.log(`My favorite subjects are`);
        this.favSubjects.forEach(function(subject){
            console.log(`${subject}`);
        });
    };
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge (subject) {
        console.log(`${this.name} has started Sprint Challenge on ${subject}`);
    };
    graduate () {
        if (this.grade >= 70) {
            return console.log(`${this.name} has graduated with ${this.grade}! Way to go!`);
        } else {
            return console.log (`${this.name} did not qualify to graduate yet. Grade: ${this.grade} Womp womp.`);
        }
    };
}

class ProjectManager extends Instructor {
    constructor(attributues) {
        super(attributues);
        this.gradClassName = attributues.gradClassName;
        this.favInstructor = attributues.favInstructor;
    }

    standUp (slack_channel) {
        console.log(`${this.name} announces to ${slack_channel}, @channel standup time!`);
    };

    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    };
}

const instructor_ryan = new Instructor ({
    name: 'Ryan',
    location: 'San Jose',
    age: '32',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'We are a way for the Cosmos to know itself'
});

const pm_amanda = new ProjectManager ({
    name: 'Amanda',
    location: 'San Jose',
    age: '29',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: 'We are star stuff',
    className: 'WebPT6',
    favInstructor: 'Dan'
});

const student_bob = new Student({
    name: 'Bob',
    location: 'Denver',
    previousBackground: 'Retail',
    className: 'WebPT6',
    favSubjects: ['Math', 'Science', 'Programming'],
    grade: 40
});

// Instructor tests
console.log(instructor_ryan);
instructor_ryan.demo('math');
instructor_ryan.grade(student_bob,'math');
instructor_ryan.gradeAssignment(student_bob);
console.log(instructor_ryan.speak())
console.log(instructor_ryan.catchPhrase);

// PM tests
console.log(pm_amanda);
console.log(pm_amanda.speak());
pm_amanda.standUp('Webpt6 sprint 03');
pm_amanda.debugsCode(student_bob,"science");

// Student tests
console.log(student_bob);
console.log(student_bob.speak());
student_bob.listsSubjects();
student_bob.PRAssignment('java');
student_bob.sprintChallenge('Java 3');
// student_bob.graduate();