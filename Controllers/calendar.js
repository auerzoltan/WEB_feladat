async function showCalendar() {
    try {
        const response = await axios.get(`${serverURL}/items/userID/eq/${loggedUser.ID}`);
        const myEvents = response.data.map(item => ({
            title: `${item.tag}:\n${item.amount}`,
            start: item.date,
            allDay: true,
            backgroundColor: item.type === 0 ? '#6c3333' : '#336c56',
            borderColor: item.type === 0 ? '#6c3333' : '#336c56',
        }));

        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prevYear,prev,next,nextYear today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
            },
            initialDate: new Date(),
            navLinks: true,
            editable: false,
            dayMaxEvents: true,
            events: myEvents
        });

        calendar.render();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}