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
                                <h5 class="current">${currentJob}</h5>
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
            template += `<div class="row">
                            <div class="medium-2 columns"></div>
                            <div class="medium-5 columns">
                                <div class="card flip front face">
                                    <div class="box">
                                        <div class="image">
                                            <img src="${student.imgLink}">
                                            <div class="content">
                                                <h4 class="name" id="name">${student.name}</h4>
                                                <a href="${student.gitLink}" target="_blank">
                                                    <i class="fi-social-github"></i>
                                                </a>
                                                <a href="${student.linkLink}" target="_blank">
                                                    <i class="fi-social-linkedin"></i>
                                                </a>

                                                <p class="skills/passions" id="passions">Skills and Areas of Interest</p>
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
                                                <p>current position</p>
                                                <h5 class="current" id="currentJob">${student.currentJob}</h5>
                                                <h5>${student.email}</h5>
                                            </div>
                                               </div>
                                        </div>
                                    </div>
                                </div>
                                <!--end front of card-->

                                <!--back of card-->
                                <div class="medium-5 columns">
                                    <div class="box box-info">
                                        <div class="card flip back">
                                        </div>
                                    </div>
                                </div>
                                <!--end back of card-->


                            </div>
                            <!--end card row-->
                        </div>`
        }
        studentElem.html(template)
    }
    $('#current-student').on('click', 'button.pencil', function () {
        debugger
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
