// <!-- Fullcalendar Script -->

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid']
    });

    calendar.render();
});

