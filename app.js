UserController();

function UserController() {
    var dataStore = new BioService()
    var _students = dataStore.getStudents();
    var _currentStudent = dataStore.getCurrentStudent(0);
    drawCards(dataStore.getStudentArray());
    drawStudent(_currentStudent);
    function drawStudent(student) {
        var studentElem = $('#current-student')
        var skillsItem1 = '';
        var skillsItem2 = '';
        // don't hardcode for a certain number of passions or else you will hit an undefined value in the array if there are less
        for (var i = 0; i < student.passions.length; i++) {
            if (i < 3) {
                skillsItem1 += `<li>${student.passions[i]}</li>`;
            } else {
                skillsItem2 += `<li>${student.passions[i]}</li`;
            };
        };
        dataStore.showStudentImages();
        if (student) {
            template = `<br>
                            <img class="thumbnail" src="${student.imgLink}" id="${student.id}">
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
                                <h5>Current Position</h5>
                                <p class="current">${student.currentJob}</p>
                                <h5>E-Mail: <a href="mailto:${student.email}">${student.email}</a></h5>`
            studentElem.html(template);
        } else {
            studentElem.html(`<h1>you suck</h1>`)
        }
    }


    function drawCards(arr) {
        var studentElem = $('#all-students')
        console.log(arr);
        console.log(arr.length);
        template = '';
        for (var i = 0; i < arr.length; i++) {
            var student = arr[i];
            var skillsItem1 = '';
            var skillsItem2 = '';
            // don't hardcode for a certain number of passions or else you will hit an undefined value in the array if there are less
            for (var j = 1; j < student.length; j++) {
                if (j < 3) {
                    skillsItem1 += `<li>${student.passions[j]}</li>`;
                } else {
                    skillsItem2 += `<li>${student.passions[j]}</li`;
                };
            };
            template += `
                <div class="medium-6 columns">
                    <div>
                        <div class="box">
                            <div>
                                <img src="${student.imgLink}" id="${student.id}">
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
                                    <h5>Current Position</h5>
                                    <p class="current">${student.currentJob}</p>
                                    <h5>E-Mail: <a href="mailto:${student.email}">${student.email}</a></h5>
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
        console.log(_currentStudent);
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
        $('#no-edit').addClass('hidden')
        var student = {};
        student.name = form.input-name.value;
        student.gitLink = form.input-git.value;
        student.linkLink = form.input-link.value;
        student.imgLink = form.input-img.value;
        student.gradStatus = form.input-grad.value;
        student.passions = form.input-passions.value;
        student.currentJob = form.input-job.value;
        student.email = form.input-email.value;
        //NOTE: need to feed proper student id into the updateStudent function
        dataStore.updateStudent(0, student);
    })



}
