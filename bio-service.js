function BioService(){

    var _students = [
        {
            name: 'Jersh',
            id: 001,
            gitLink: 'https://github.com/JoshOlds',
            imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
            linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
            gradStatus: false,
            passions: ['Robits','Things','Fire'],
            currentJob: 'Absolutely Nothing',
            email: 'Joshua.Olds@Outlook.com'
        },
        {
        name: 'Mark',
        id: 002,
        gitLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
        linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
        gradStatus: false,
        passions: ['Stuff','Things','Other Jazz'],
        currentJob: 'Absolutely Nothing',
        email: 'Joshua.Olds@Outlook.com'  
        },
        {
        name: 'Mark',
        id: 003,
        gitLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
        linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
        gradStatus: false,
        passions: ['Stuff','Things','Other Jazz'],
        currentJob: 'Absolutely Nothing',
        email: 'Joshua.Olds@Outlook.com'  
        },
        {
        name: 'Mark',
        id: 004,
        gitLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
        linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
        gradStatus: false,
        passions: ['Stuff','Things','Other Jazz'],
        currentJob: 'Absolutely Nothing',
        email: 'Joshua.Olds@Outlook.com'  
        },
        {
        name: 'Mark',
        id: 005,
        gitLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
        linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
        gradStatus: false,
        passions: ['Stuff','Things','Other Jazz'],
        currentJob: 'Absolutely Nothing',
        email: 'Joshua.Olds@Outlook.com'  
        },
        {
        name: 'Mark',
        id: 006,
        gitLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0',
        imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
        linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
        gradStatus: false,
        passions: ['Stuff','Things','Other Jazz'],
        currentJob: 'Absolutely Nothing',
        email: 'Joshua.Olds@Outlook.com'  
        }
    ]

    function Student(id){
        this.name;
        this.id;
        this.gitLink;
        this.imgLink;
        this.linkLink;
        this.gradStatus;
        this.passions = []
        this.currentJob;
        this.email;
    }


    this.loadStudents = function(){
        var localData = localStorage.getItem("bio-users")
        if (localData) {
            _students = JSON.parse(localData)
        }
    }

    this.saveStudents = function(){
        localStorage.setItem("bio-users", JSON.stringify(_students))
    }

    this.getStudents = function(){
        return _students
    }

    this.getCurrentStudent = function(){
        return {
            name: 'Jersh',
            id: 001,
            gitLink: 'https://github.com/JoshOlds',
            imgLink: 'https://avatars0.githubusercontent.com/u/8272568?v=3&s=466',
            linkLink: 'https://www.linkedin.com/in/joshua-olds-91499b122',
            gradStatus: false,
            passions: ['Robits','Things','Fire'],
            currentJob: 'Absolutely Nothing',
            email: 'Joshua.Olds@Outlook.com'
        }
    }

    this.getStudentById = function(id){
        for (var i = 0; i < _students.length; i++) {
            var item = _students[i];
            if (item.id == id) {
                return item;
            }
            
        }
    }

    this.getStudentsByName = function(name){
        var arr = [];
        for (var i = 0; i < _students.length; i++) {
            var item = _students[i];
            if (item.name.includes(name)) {
                arr.push(item)
            }
        }
        return arr
    }

    this.getStudentsByGradStatus = function(status){
        var arr = [];
        for (var i = 0; i < _students.length; i++) {
            var item = _students[i];
            if (item.gradStatus === status) {
                arr.push(item)
            }
        }
        return arr
    }

    this.getStudentsByPassion = function(passion){
        var arr = [];
        for (var i = 0; i < _students.length; i++) {
            var item = _students[i];
            var found = false
            for (var j = 0; j < item.passion.length; j++) {
                var currentPassion = item.passion[j];
                if (currentPassion.contains(passion)) {
                    found = true
                }
            }
            if (found) {
                arr.push(item)
            }
        }
        return arr
    }

    this.getStudentsByJob = function(job){
        var arr = [];
        for (var i = 0; i < _students.length; i++) {
            var items = _students[i];
            if (item.job.includes(job)) {
                arr.push(item)
            }
        }
        return arr
    }

    this.getStudentsByAny = function(searchTerm){
        var arr = [];
        arr = arr.concat(this.getStudentsByName(searchTerm))
        arr = arr.concat(this.getStudentsByPassion(searchTerm))
        arr = arr.concat(this.getStudentsByJob(searchTerm))
        arr = this.eliminateDuplicates(arr)
        return arr 
    }

    this.eliminateDuplicates = function (arr) {
        var newArr = [];
        arr.forEach(function (item) {
            var exists = false;
            newArr.forEach(function (item2) {
                if (item2.id == item.id) {
                    exists = true;
                }
            });
            if (!exists) {
                newArr.push(item);
            }
        });
        return newArr;
    }    


    this.updateStudent = function(id,student){
        var currentStudent = this.getStudentById(id);
        if (student.name != undefined) {
            currentStudent.name = student.name
        }
        if (student.gitLink != undefined) {
            currentStudent.gitLink = student.gitLink
        }
        if (student.imgLink != undefined) {
            currentStudent.imgLink = student.imgLink
        }
        if (student.gradStatus != undefined) {
            currentStudent.gradStatus = student.gradStatus
        }
        if (student.passions != undefined) {
            currentStudent.passions = student.passions
        }
        if (student.currentJob != undefined) {
            currentStudent.currentJob = student.currentJob
        }
        if (student.email != undefined) {
            currentStudent.email = student.email
        }
        return currentStudent
    }



}