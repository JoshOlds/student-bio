UserController()

function UserController() {
    var dataStore = new BioService()
    var _currentStudent = dataStore.getCurrentStudent()
    drawCards(dataStore.getStudents())
    function drawCurrentStudent(student){
        var studentElem = $('#current-student')
        var studentElem = $('#all-students')
        if(_currentStudent){
            template = `
        `
        studentElem.html(template)
        }else{
             studentElem.html(`<h1>you suck</h1>`)
        }   
    }

}
    function drawCards(arr){
        var studentElem = $('#all-students')
        template = ''
        for(var i=0; i < arr.length; i++){
            var student = arr[i]
            template += `
            I'm a template
            `
        }
        studentElem.html(template)
    }
    $('#current-student').on('click', 'button.edit', function(){
        $('#').className = 'hidden'
        $('#').className = 'view'
    })

    $('#current-student').on('submit', 'button.save', function(event){
        event.preventDefault();
        var form = event.target;
        $('#').className = 'hidden';
        $('#').className = 'view';
        var student = {};
        student.name = form.name.value;
        student.gitLink = form.git.value;
        student.imgLink = form.img.value;
        student.gradStatus = form.grad.value;
        student.passions = form.passions.value;
        student.currentJob = form.job.value;
        student.email = form.email.value;
    })    
    


}
