async function getBlockedDates(icsUrl) {
  const response = await fetch(icsUrl);
  const text = await response.text();

  const blockedDates = [];
  const events = text.split('BEGIN:VEVENT');
  console.log(text);

  for (const event of events) {
    const dtstartMatch = event.match(/DTSTART(?:;[^:]+)?:([^\r\n]+)/);
    const dtendMatch = event.match(/DTEND(?:;[^:]+)?:([^\r\n]+)/);
    
    if (dtstartMatch && dtendMatch) {
      const start = parseICalDate(dtstartMatch[1]);
      const end = parseICalDate(dtendMatch[1]);
      let currDate = new Date(start);
      while (currDate < end) {
        blockedDates.push(currDate.toISOString().slice(0,10));
        currDate.setDate(currDate.getDate() + 1);
      }
      blockedDates.push({ start, end });
    }
  }

  return blockedDates;
}

// Helper: convert iCal date to JS Date
function parseICalDate(dateStr) {
  // Handles formats like "20250416T140000Z" or "20250416"
  if (dateStr.length === 8) {
    return new Date(`${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`);
  }
  return new Date(dateStr);
}



getBlockedDates('https://calendar.google.com/calendar/ical/896d215ee020a365063c3cf27122ef4689e14df4ed2a64552153674b2722d020%40group.calendar.google.com/private-647d677a83af9b5c6da12537dd14bcf4/basic.ics')
  .then(dates => {
    console.log('Blocked Dates:', dates);
    // Now you can use these to mark dates in your calendar UI
  })
  .catch(err => console.error('Failed to load iCal:', err));

console.log("plmplmplm")
