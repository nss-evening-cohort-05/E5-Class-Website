const getStudents = async (url) => {
    try {
        const students = await $.ajax(url);
        return students;
    } catch (error) {
        console.log(error);
    }
};

let studentBox = document.getElementById('studentBox');

let printStudent = (student) => {
    studentBox.innerHTML += `<div class="card student-card">
    <div class="card-image">
        <figure class="image is-4by4">
            <img src="${student.photo}" alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">${student.name}</p>
            </div>
        </div>

        <div class="content">
            <!--<p>${student.bio}</p>-->
            <br>
            <div class="icon-links">
                <a href="${student.github}"><img src="img/Github-Mark.png"></a>
                <a href="${student.linkedin}"><img class="linkedin-logo" src="img/linkedin-icon.png"/></a>
                <a href="${student.github}"><img src="img/website-icon.png"/></a>
            </div>
        </div>
    </div>
</div>`;
};

let printStudents = () => getStudents('students.json').then((results) => {
    results.students.map((student) => {
        printStudent(student);
    });
});
printStudents();


