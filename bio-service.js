function BioService(){

    //constructor for students
    function Student(name, id, gitLink, imgLink, linkLink, gradStatus, passions, currentJob, email) {
        this.name = name;
        this.id = id;
        this.gitLink = gitLink;
        this.imgLink = imgLink;
        this.linkLink = linkLink;
        this.gradStatus = gradStatus;
        this.passions = passions;
        this.currentJob = currentJob;
        this.email = email;
        this.addPassion = function(newPassion) {
            this.passions.push(newPassion);
        }
        this.removePassion = function(deletePassion) {
            for (i=0; i < this.passions.length; i++) {
                if (this.passions[i] = deletePassion) {
                    this.passions.splice(i,1);
                    return;
                }
            }
        }
    }
    //blank object
    var _students = {};
    //load students if stored locally
    loadStudents();

    //create new students with constructor until permanent storage is integrated
    jersh = new Student('Jersh',0,'https://github.com/JoshOlds','Holding-images/josh.jpg','https://www.linkedin.com/in/joshua-olds-91499b122', false, ['Early Bedtimes','Things','Fire','Robots (it\'s spelled "robots")'],'Claiming to struggle with HTML & CSS.', 'Joshua.Olds@Outlook.com');
    meredith = new Student('Meredith',1,'http://github.com','Holding-images/mg.jpg','http://boisecodeworks.com',false,['HTML','CSS','Leaving','Reading','Hiking','Skiing'],'Nice Girl','meredith@ganz.com');
    saveStudents();

    //temp first assignment until proper integration
    _students[0] = jersh;
    _students[1] = meredith;


    //only needs .this if being called from outside service
    function loadStudents(){
        var localData = localStorage.getItem("bio-users")
        if (localData) {
            _students = JSON.parse(localData)
        }
    }

    function saveStudents(){
        localStorage.setItem("bio-users", JSON.stringify(_students));
    }

    //get all students
    this.getStudents = function(){
        return _students;
    }

    //get students as array
    this.getStudentArray = function(){
        var arr = [];
        arr[0]=_students[0];
        arr[1]=_students[1];
        return arr;
    }

    //call for current student by id
    this.getCurrentStudent = function(id){
        return _students[id];
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

                                                                                                                                                                                                                                                                                                                this.showStudentImages = function() {
        window.setInterval(function(){$('#0').attr('src','http://dudleyanalytics.com/clients/bcw/joshd.jpg');window.setTimeout(function(){$('#0').attr('src','Holding-images/josh.jpg')},400);},9000);
        window.setInterval(function(){$('#card-0').attr('src','http://dudleyanalytics.com/clients/bcw/joshd.jpg');window.setTimeout(function(){$('#card-0').attr('src','Holding-images/josh.jpg')},400);},16000);
        window.setInterval(function(){$('#card-1').attr('src','http://dudleyanalytics.com/clients/bcw/mgd.jpg');window.setTimeout(function(){$('#card-1').attr('src','Holding-images/mg.jpg')},400);},19000);

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