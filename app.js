UserController()

function UserController() {
    var dataStore = new BioService()
    var _currentStudent = dataStore.getCurrentStudent()
    drawCards(dataStore.getStudents())
    drawStudent(_currentStudent)
    function drawStudent(student) {
        var studentElem = $('#current-student')
        var skillsItem1 = '';
        for (var i = 0; i < 3; i++) {
            skillsItem1 += `<li>${student.passions[i]}</li>`
        }
        var skillsItem2 = '';
        for (var i = 3; i < 6; i++) {
            skillsItem2 += `<li>${student.passions[i]}</li>`
        }
        if (student) {
            template = `<div class="row column" id="current-student">
                            <br>
                            <img class="thumbnail" src="${student.imgLink}">
                            <div class="content view" id="no-edit">
                                <div class="row">
                                    <div class="medium-10 columns">
                                        <h4 class="name">${student.name}</h4>
                                    </div>
                                    <div class="medium-2 columns">
                                        <button class="pencil"><i class="fi-pencil"></i></button>
                                    </div>
                                </div>
                                <a href="${student.gitLink}" target="_blank">
                                <i class="fi-social-github"></i>
                                </a>
                                <a href="${student.linkLink}" target="_blank">
                                <i class="fi-social-linkedin"></i>
                                </a>
                                <p class="skills/passions">Skills and areas of interests</p>
                                <div class="row">
                                    <div class="medium-6 columns">
                                        <ul class="skills">
                                        ${skillsItem1}
                                        </ul>   
                                    </div>
                                    <div class="medium-6 columns">
                                        <ul class= "skills">
                                        ${skillsItem2}
                                        </ul>
                                    </div>
                                </div>
                                <p>Current Position</p>
                                <h5 class="current">${student.currentJob}</h5>
                                <h5>${student.email}</h5>
                            </div>
                        </div>`

            studentElem.html(template)
        } else {
            studentElem.html(`<h1>you suck</h1>`)
        }
    }


    function drawCards(arr) {
        var studentElem = $('#all-students')
        template = ''
        for (var i = 0; i < arr.length; i++) {
            var student = arr[i]
            var skillsItem1 = '';
            for (var j = 0; j < 3; j++) {
                skillsItem1 += `<li>${student.passions[j]}</li>`
            }
            var skillsItem2 = '';
            for (var k = 3; k < 6; k++) {
                skillsItem2 += `<li>${student.passions[k]}</li>`
            }
            template += `
                <div class="medium-6 columns">
                    <div>
                        <div class="box">
                            <div>
                                <img src="${student.imgLink}">
                                <div>
                                    <h4 class="name" id="name">${student.name}</h4>
                                    <a href="${student.gitLink}" target="_blank">
                                        <i class="fi-social-github"></i>
                                    </a>
                                    <a href="${student.linkLink}" target="_blank">
                                        <i class="fi-social-linkedin"></i>
                                    </a>

                                    <p>Skills and Areas of Interest</p>
                                    <div class="row">
                                        <div class="medium-6 columns">
                                            <ul>
                                                ${skillsItem1}
                                            </ul>
                                        </div>
                                        <div class="medium-6 columns">
                                            <ul>
                                                ${skillsItem2}
                                            </ul>
                                        </div>
                                    </div>
                                    <p>current position</p>
                                    <h5>${student.currentJob}</h5>
                                    <h5>${student.email}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                        
        }
        studentElem.html(template)
    }
    $('#current-student').on('click', 'button.pencil', function () {
        $('#input-name').val(_currentStudent.name)
        $('#input-git').val(_currentStudent.gitLink)
        $('#input-link').val(_currentStudent.linkLink)
        $('#input-img').val(_currentStudent.imgLink)
        $('#input-grad').val(_currentStudent.gradStatus)
        $('#input-passions').val(_currentStudent.passions)
        $('#input-job').val(_currentStudent.currentJob)
        $('#input-email').val(_currentStudent.email)
        $('#no-edit').addClass('hidden')
        $('#edit').removeClass('hidden')
    })

    $('#current-student').on('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        $('#edit').addClass('hidden')
        $('#no-edit').removeClass('hidden')
        var student = {};
        student.name = form.input-name.value;
        student.gitLink = form.input-git.value;
        student.linkLink = form.input-link.value;
        student.imgLink = form.input-img.value;
        student.gradStatus = form.input-grad.value;
        student.passions = form.input-passions.value;
        student.currentJob = form.input-job.value;
        student.email = form.input-email.value;
        dataStore.updateStudent(student)
    })



}
