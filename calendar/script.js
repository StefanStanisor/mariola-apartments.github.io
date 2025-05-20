// const calendar1 = document.getElementById("calendarDays1");
// const calendar2 = document.getElementById("calendarDays2");
// const monthYear1 = document.getElementById("monthYear1");
// const monthYear2 = document.getElementById("monthYear2");

// let currentBaseDate = new Date();
// let selectedStart = null;
// let selectedEnd = null;
// const today = new Date();
// today.setHours(0, 0, 0, 0);

// function renderCalendar(date, target, monthYearEl) {
//     target.innerHTML = "";
//     const year = date.getFullYear();
//     const month = date.getMonth();

//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
//     const firstWeekday = firstDay.getDay();
//     const daysInMonth = lastDay.getDate();

//     romanianDate = date.toLocaleString("ro-RO", {
//     month: "long",
//     year: "numeric",
//     });
//     romanianDate = romanianDate.charAt(0).toUpperCase() + romanianDate.slice(1);
//     monthYearEl.textContent = romanianDate;


//     for (let i = 0; i < firstWeekday; i++) {
//     const empty = document.createElement("div");
//     empty.classList.add("empty");
//     target.appendChild(empty);
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//     const day = document.createElement("div");
//     const fullDate = new Date(year, month, i);
//     day.textContent = i;
//     day.dataset.date = fullDate.toISOString();

//     if (fullDate < today) {
//         day.classList.add("disabled");
//     } else {
//         day.addEventListener("click", () => handleDateClick(fullDate));
//     }

//     if (selectedStart && selectedEnd) {
//         const dateVal = fullDate.getTime();
//         const start = selectedStart.getTime();
//         const end = selectedEnd.getTime();
//         if (dateVal === start || dateVal === end) {
//         day.classList.add("selected");
//         } else if (dateVal > start && dateVal < end) {
//         day.classList.add("in-range");
//         }
//     } else if (selectedStart && fullDate.getTime() === selectedStart.getTime()) {
//         day.classList.add("selected");
//     }

//     target.appendChild(day);
//     }
// }

// function handleDateClick(date) {
//     if (!selectedStart || (selectedStart && selectedEnd)) {
//     selectedStart = date;
//     selectedEnd = null;
//     } else if (date < selectedStart) {
//     selectedStart = date;
//     } else {
//     selectedEnd = date;
//     }
//     updateCalendars();
// }

// function updateCalendars() {
//     const thisMonth = new Date(currentBaseDate.getFullYear(), currentBaseDate.getMonth(), 1);
//     const nextMonth = new Date(currentBaseDate.getFullYear(), currentBaseDate.getMonth() + 1, 1);
//     renderCalendar(thisMonth, calendar1, monthYear1);
//     renderCalendar(nextMonth, calendar2, monthYear2);
// }

// function changeMonth(offset) {
//     currentBaseDate.setMonth(currentBaseDate.getMonth() + offset);
//     updateCalendars();
// }

// updateCalendars();