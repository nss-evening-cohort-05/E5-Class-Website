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
        <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">${student.name}</p>
                <p class="subtitle is-6">@${student.github}</p>
            </div>
        </div>

        <div class="content">
            <p>${student.bio}</p>
            <br>
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


