let btn = document.querySelector(".icon");

btn.addEventListener("click", () => {

    let days = document.querySelector(".days");
    let months = document.querySelector(".months");
    let years = document.querySelector(".years");
    let dayinput = document.querySelector(".dayinput");
    let monthinput = document.querySelector(".monthinput");
    let yearinput = document.querySelector(".yearinput");
    let daylbl = document.querySelector(".daylabel");
    let monthlbl = document.querySelector(".monthlabel");
    let yearlbl = document.querySelector(".yearlabel");
    let daymessage = document.querySelector(".error-message-day");
    let monthmessage = document.querySelector(".error-message-month");
    let yearmessage = document.querySelector(".error-message-year");


    if (dayinput.value === '' || monthinput.value === '' || yearinput.value === '') {
        if (dayinput.value <= 0 || dayinput.value > 30 || monthinput.value <= 0 || monthinput.value > 12 || yearinput > 2024) {
            dayinput.style.borderColor = "red";
            daylbl.style.color = "red";
            daymessage.style.display = 'block';

            monthinput.style.borderColor = "red";
            monthlbl.style.color = "red";
            monthmessage.style.display = 'block';

            yearinput.style.borderColor = "red";
            yearlbl.style.color = "red";
            yearmessage.style.display = 'block';
        }
    } else {
        days.textContent = dayinput.value;
        months.textContent = monthinput.value;
        years.textContent = yearinput.value;
    }



});