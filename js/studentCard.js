export default studentCard = (student) => {
    return `<div class="card student-card">
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
</div>`
};
