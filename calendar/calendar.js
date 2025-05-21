class Calendar extends HTMLElement {
    connectedCallback(){
        const apartment = this.getAttribute("apartment");

        if (apartment === "deluxe1") {
            this.apartment_link = "https://www.airbnb.com/rooms/43694210?guests=1&adults=1&s=67&unique_share_id=4204ac16-06c1-4938-9b3d-87c96024f200";
            this.apartment_ical = "/calendars/deluxe1.ics";
        } else if (apartment === "deluxe2") {
            this.apartment_link = "https://www.airbnb.com/rooms/49754956?guests=1&adults=1&s=67&unique_share_id=32642ac9-dea5-469d-a7b2-0ab3febe3447";
            this.apartment_ical = "/calendars/deluxe2.ics";
        } else if (apartment === "studio1") {
            this.apartment_link = "https://www.airbnb.com.au/rooms/1420306070215664353?guests=1&adults=1&s=67&unique_share_id=9d32849a-104e-4406-9f72-c23349758e01";
            this.apartment_ical = "/calendars/studio1.ics";
        } else if (apartment === "studio3") {
            this.apartment_link = "https://www.airbnb.com.au/rooms/1420315211053944492?guests=1&adults=1&s=67&unique_share_id=6bc52999-d696-451c-a902-74effdfcd456";
            this.apartment_ical = "/calendars/studio3.ics";
        } else if (apartment === "studio4") {
            this.apartment_link = "https://www.airbnb.com.au/rooms/1420344414722070152?guests=1&adults=1&s=67&unique_share_id=2e61e9f7-6920-4cee-98ae-bdfce177573b";
            this.apartment_ical = "/calendars/studio4.ics";
        } else if (apartment === "studio5") {
            this.apartment_link = "https://www.airbnb.com.au/rooms/1420891060677687453?guests=1&adults=1&s=67&unique_share_id=820ce739-e1f1-49f4-96ce-5eb7f4b35eff";
            this.apartment_ical = "/calendars/studio5.ics";
        }

        this.innerHTML =`
    <div class="calendar-reservation">
        <div class="container">
            <div class="calendar-container">

                <!-- Calendar -->
                <div class="calendar">
                    <div class="calendar-nav">
                        <button class="btn-prev btn">&lt;</button>
                        <div class="month-year" id="monthYear1"></div>
                    </div>
                    <div class="week-days">
                    <div class="week-day text-sm">Du</div>
                    <div class="week-day text-sm">Lu</div>
                    <div class="week-day text-sm">Ma</div>
                    <div class="week-day text-sm">Mi</div>
                    <div class="week-day text-sm">Jo</div>
                    <div class="week-day text-sm">Vi</div>
                    <div class="week-day text-sm">Sa</div>
                    </div>
                    <div class="calendar-days" id="calendarDays1"></div>
                </div>
    
                <div class="calendar">
                    <div class="calendar-nav">
                        <div class="month-year" id="monthYear2"></div>
                        <button class="btn-next btn">&gt;</button>
                    </div>
                    <div class="week-days">
                        <div class="week-day text-sm">Du</div>
                        <div class="week-day text-sm">Lu</div>
                        <div class="week-day text-sm">Ma</div>
                        <div class="week-day text-sm">Mi</div>
                        <div class="week-day text-sm">Jo</div>
                        <div class="week-day text-sm">Vi</div>
                        <div class="week-day text-sm">Sa</div>
                    </div>
                    <div class="calendar-days" id="calendarDays2"></div>
                </div>
            </div>

            <!-- Reservation -->
            <div class="reservation">
                <p class="text-md">
                    Recomandarile noastre de rezervare.
                </p>
                <a href="${this.apartment_link}"
                class="airbnb btn text-md"
                target="_blank">
                    <i class="fa-brands fa-airbnb"></i>
                    Airbnb
                </a>
                <p class="text-md">
                    sau
                </p>
                <a href="/contact.html" class="phone btn text-md" target="_blank">
                    <i class="fa-solid fa-phone"></i>
                    Suna
                </a>
            </div>
        </div>
    </div>
    `;
    this.querySelector(".btn-prev").addEventListener("click", () => {this.changeMonth(-1);});
    this.querySelector(".btn-next").addEventListener("click", () => {this.changeMonth(1);});
    this.calendar1 = this.querySelector("#calendarDays1");
    this.calendar2 = this.querySelector("#calendarDays2");
    this.monthYear1 = this.querySelector("#monthYear1");
    this.monthYear2 = this.querySelector("#monthYear2");

    this.currentBaseDate = new Date();
    this.selectedStart = null;
    this.selectedEnd = null;
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    this.updateCalendars();

    }
    async getBlockedDates(icsUrl) {
        const response = await fetch(icsUrl, {});
        const text = await response.text();
      
        let blockedDates = [];
        const events = text.split('BEGIN:VEVENT');
      
        for (const event of events) {
          const dtstartMatch = event.match(/DTSTART(?:;[^:]+)?:([^\r\n]+)/);
          const dtendMatch = event.match(/DTEND(?:;[^:]+)?:([^\r\n]+)/);
      
          if (dtstartMatch && dtendMatch) {
            const start = this.parseICalDate(dtstartMatch[1]);
            const end = this.parseICalDate(dtendMatch[1]);
            let currDate = new Date(start);
            while (currDate < end) {
                blockedDates.push(currDate.toISOString().slice(0,10));
                currDate.setDate(currDate.getDate() + 1);
            }
          }
        }
        return blockedDates;
    }
      
    parseICalDate(dateStr) {
        if (dateStr.length === 8) {
          return new Date(`${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`);
        }
        return new Date(dateStr);
      }


    async updateCalendars() {
        const thisMonth = new Date(this.currentBaseDate.getFullYear(), this.currentBaseDate.getMonth(), 1);
        const nextMonth = new Date(this.currentBaseDate.getFullYear(), this.currentBaseDate.getMonth() + 1, 1);
        this.blockedDates = await this.getBlockedDates(this.apartment_ical);
        this.renderCalendar(thisMonth, this.calendar1, this.monthYear1);
        this.renderCalendar(nextMonth, this.calendar2, this.monthYear2);
    }

    handleDateClick(date) {
        if (!this.selectedStart || (this.selectedStart && this.selectedEnd)) {
        this.selectedStart = date;
        this.selectedEnd = null;
        } else if (date < this.selectedStart) {
        this.selectedStart = date;
        } else {
        this.selectedEnd = date;
        }
        this.updateCalendars();
    }

    changeMonth(offset) {
        this.currentBaseDate.setMonth(this.currentBaseDate.getMonth() + offset);
        this.updateCalendars();
    }

    renderCalendar(date, target, monthYearEl) {
        target.innerHTML = "";
        const year = date.getFullYear();
        const month = date.getMonth();
    
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const firstWeekday = firstDay.getDay();
        const daysInMonth = lastDay.getDate();
    
        let romanianDate = date.toLocaleString("ro-RO", {
        month: "long",
        year: "numeric",
        });
        romanianDate = romanianDate.charAt(0).toUpperCase() + romanianDate.slice(1);
        monthYearEl.textContent = romanianDate;
    
    
        for (let i = 0; i < firstWeekday; i++) {
        const empty = document.createElement("div");
        empty.classList.add("empty");
        target.appendChild(empty);
        }
    
        for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement("div");
        const fullDate = new Date(year, month, i);
        day.textContent = i;
        day.dataset.date = fullDate.toISOString();
        const fullDateStr = fullDate.toISOString().slice(0,10);
        
        if (fullDate < this.today || this.blockedDates.includes(fullDateStr)) {
            day.classList.add("disabled");
        } else {
            day.addEventListener("click", () => this.handleDateClick(fullDate));
        }
    
        if (this.selectedStart && this.selectedEnd) {
            const dateVal = fullDate.getTime();
            const start = this.selectedStart.getTime();
            const end = this.selectedEnd.getTime();
            if (dateVal === start || dateVal === end) {
            day.classList.add("selected");
            } else if (dateVal > start && dateVal < end) {
            day.classList.add("in-range");
            }
        } else if (this.selectedStart && fullDate.getTime() === this.selectedStart.getTime()) {
            day.classList.add("selected");
        }
    
        target.appendChild(day);
        }
    }
}

customElements.define('my-calendar', Calendar);
