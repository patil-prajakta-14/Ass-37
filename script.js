// script.js
document.getElementById('search').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase();
    const participants = document.querySelectorAll('.participant');

    participants.forEach(participant => {
        const name = participant.getAttribute('data-name').toLowerCase();
        if (name.includes(searchValue)) {
            participant.style.display = '';
        } else {
            participant.style.display = 'none';
        }
    });
});
