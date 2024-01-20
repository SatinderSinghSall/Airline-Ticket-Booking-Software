//Javascript code below.

//Navbar onclick function.
function toggleNavbar()
{
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('show');
}

function submitForm()
{
    const form = document.getElementById('bookingForm');
    if (!form.checkValidity() )
    {
        alert('Please fill in all required fields.');
        return;
    }

    const summary = document.getElementById('bookingSummary');
    const summaryName = document.getElementById('summaryName');
    const summaryFrom = document.getElementById('summaryFrom');
    const summaryTo = document.getElementById('summaryTo');
    const summaryAirline = document.getElementById('summaryAirline');
    const summaryFnumber = document.getElementById('SummaryFnumber');
    const summaryNumTickets = document.getElementById('summaryNumTickets');
    const summaryDate = document.getElementById('summaryDate');
    const summaryTime = document.getElementById('summaryTime');
    const summaryClass = document.getElementById('summaryClass');

    summaryName.textContent = form.elements['Cname'].value;
    summaryFrom.textContent = form.elements['from'].value;
    summaryTo.textContent = form.elements['to'].value;
    summaryAirline.textContent = form.elements['airline-select'].value;
    summaryFnumber.textContent = form.elements['fNumber'].value;
    summaryNumTickets.textContent = form.elements['numTickets'].value;
    summaryDate.textContent = form.elements['date'].value;
    summaryTime.textContent = form.elements['time'].value;
    summaryClass.textContent = form.elements['class'].value;

    summary.style.display = 'block';

    // Generate and download PDF
    const pdfButton = document.createElement('button');
    pdfButton.textContent = 'Download PDF';
    pdfButton.addEventListener('click', function (){
        const element = document.getElementById('bookingSummary');
        html2pdf(element); // Corrected from html2pdf(bookingSummary);
    });
    

    summary.appendChild(pdfButton);
}