import fs from 'fs';

const calendarm1_url = 'https://calendar.google.com/calendar/ical/896d215ee020a365063c3cf27122ef4689e14df4ed2a64552153674b2722d020%40group.calendar.google.com/private-647d677a83af9b5c6da12537dd14bcf4/basic.ics';
const calendarm2_url = 'https://calendar.google.com/calendar/ical/28e5eef4e776bd326c6de00c02b7985b9ebfc01ee9d021865e61cc77d8b8cdd5%40group.calendar.google.com/private-5823e5cd52122127d982ea3bb169bc74/basic.ics';
const calendars_url = 'https://calendar.google.com/calendar/ical/af77a040a19b2478cb6a61e681ed9822e220b3ef727f113b5007aeeff158dd84%40group.calendar.google.com/private-f72ab22dcde8e8b5905d6ada7d34d7c5/basic.ics';

const save_path_m1 = './calendars/calendar_m1.ics';
const save_path_m2 = './calendars/calendar_m2.ics';
const save_path_s = './calendars/calendar_s.ics';

const response_m1 = await fetch(calendarm1_url);
const response_m2 = await fetch(calendarm2_url);
const response_s = await fetch(calendars_url);

fs.writeFileSync(save_path_m1, await response_m1.text(), 'utf8');
fs.writeFileSync(save_path_m2, await response_m2.text(), 'utf8');
fs.writeFileSync(save_path_s, await response_s.text(), 'utf8');





