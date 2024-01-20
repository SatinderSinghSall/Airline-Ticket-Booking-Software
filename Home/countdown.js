//Countdown until maintenance end

document.addEventListener('DOMContentLoaded', function ()
{
    const countdownElement = document.getElementById('countdown');
    const maintenanceEnd = new Date('2024-02-25T12:00:00Z').getTime();

    const interval = setInterval(function ()
    {
        const now = new Date().getTime();
        const distance = maintenanceEnd - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24) );
        const hours = Math.floor( (distance % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) );
        const minutes = Math.floor( (distance % (1000 * 60 * 60) ) / (1000 * 60) );
        const seconds = Math.floor( (distance % (1000 * 60) ) / 1000);

        countdownElement.innerHTML = `Maintenance will be completed in ${days}day(s) ${hours}hour(s) ${minutes}minute(s) ${seconds}second(s). `;

        // If the countdown is over, display a message
        if (distance < 0)
        {
            clearInterval(interval);
            countdownElement.innerHTML = "Maintenance completed!";
        }
    }, 1000);
});