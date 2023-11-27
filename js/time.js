function updateClock() {
    const now = new Date();

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agus', 'Sep', 'Okt', 'Nov', 'Des'];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const clockElement = document.querySelector('.clock');
    const dateElement = document.querySelector('.date');

    clockElement.innerHTML = `${formatTime(hours)}:${formatTime(minutes)} ${ampm}`;
    dateElement.innerHTML = `${day}, ${formatDate(date)} ${month}`;

    document.getElementById('formattedDate').textContent = `${day}, ${formatDate(date)} ${month}`;

    setTimeout(updateClock, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatDate(date) {
    return date < 10 ? `0${date}` : date;
}

updateClock();