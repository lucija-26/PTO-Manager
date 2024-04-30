// Selecting elements from the DOM
const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

// Selecting elements for the end date calendar
const header_end_date = document.querySelector(".calendar-end-date h3");
const dates_end_date = document.querySelector(".dates-end-date");
const navs_end_date = document.querySelectorAll("#prev-end-date, #next-end-date");

// Array of month names
const months = [
  "January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"
];

// Initializing current date values
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

// Initializing end date values
let date_end = new Date();
let month_end = date.getMonth();
let year_end = date.getFullYear();

// Function to render the calendar
function renderCalendar() {
  // Extracting details for the start date calendar
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  // HTML content for the calendar dates
  let datesHtml = "";

  // Adding inactive days from the previous month
  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  // Adding active days for the current month
  for (let i = 1; i <= endDate; i++) {
    let className =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? ' class="today"'
        : "";
    datesHtml += `<li${className}>${i}</li>`;
  }

  // Adding inactive days from the next month
  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  // Updating the HTML content and header for the start date calendar
  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;

  // Updating the HTML content and header for the end date calendar
  dates_end_date.innerHTML = datesHtml;
  header_end_date.textContent = `${months[month]} ${year}`;
}

// Initializing start and end months and years
let startMonth = date.getMonth();
let startYear = date.getFullYear();

let endMonth = date_end.getMonth();
let endYear = date_end.getFullYear();

// Adding event listeners to the navigation buttons for the start date calendar
navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    // Updating the month and year based on the clicked button
    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    // Rendering the updated calendar
    renderCalendar();
  });
});

// Adding event listeners to the navigation buttons for the end date calendar
navs_end_date.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    // Updating the end month and year based on the clicked button
    if (btnId === "prev-end-date" && month_end === 0) {
      year_end--;
      month_end = 11;
    } else if (btnId === "next-end-date" && month_end === 11) {
      year_end++;
      month_end = 0;
    } else {
      month_end = btnId === "next-end-date" ? month_end + 1 : month_end - 1;
    }

    // Rendering the updated end date calendar
    renderCalendar();
  });
});

// Rendering the initial calendar
renderCalendar();