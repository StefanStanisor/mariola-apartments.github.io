import fs from 'fs';

const calendar_d1_url = 'https://calendar.google.com/calendar/ical/896d215ee020a365063c3cf27122ef4689e14df4ed2a64552153674b2722d020%40group.calendar.google.com/private-647d677a83af9b5c6da12537dd14bcf4/basic.ics';
const calendar_d2_url = 'https://calendar.google.com/calendar/ical/28e5eef4e776bd326c6de00c02b7985b9ebfc01ee9d021865e61cc77d8b8cdd5%40group.calendar.google.com/private-5823e5cd52122127d982ea3bb169bc74/basic.ics';
const calendar_s1_url = 'https://calendar.google.com/calendar/ical/af77a040a19b2478cb6a61e681ed9822e220b3ef727f113b5007aeeff158dd84%40group.calendar.google.com/private-f72ab22dcde8e8b5905d6ada7d34d7c5/basic.ics';
const calendar_s3_url = 'https://calendar.google.com/calendar/ical/072e2a4aa953722168f566523772a68ae21a570672291b3833826485d29f1531%40group.calendar.google.com/private-2eeee66eca875683c2dc570d756ca0b0/basic.ics';
const calendar_s4_url = 'https://calendar.google.com/calendar/ical/13fe60fee856b8fad7941a28cf5ae240cc606fe2e7ee61460ed51073daa33c8e%40group.calendar.google.com/private-a33a192a6e2b62cef4af5d767ca4b102/basic.ics';
const calendar_s5_url = 'https://calendar.google.com/calendar/ical/b237a8ed5042994b99b0b13b9042afa4f95e7f3f251df1798f28812f46392c56%40group.calendar.google.com/private-80685a39e6383d341aa72bb78e76f535/basic.ics';

const save_path_d1 = './calendars/deluxe1.ics';
const save_path_d2 = './calendars/deluxe2.ics';
const save_path_s1 = './calendars/studio1.ics';
const save_path_s3 = './calendars/studio3.ics';
const save_path_s4 = './calendars/studio4.ics';
const save_path_s5 = './calendars/studio5.ics';

const response_d1 = await fetch(calendar_d1_url);
const response_d2 = await fetch(calendar_d2_url);
const response_s1 = await fetch(calendar_s1_url);
const response_s3 = await fetch(calendar_s3_url);
const response_s4 = await fetch(calendar_s4_url);
const response_s5 = await fetch(calendar_s5_url);

fs.writeFileSync(save_path_d1, await response_d1.text(), 'utf8');
fs.writeFileSync(save_path_d2, await response_d2.text(), 'utf8');
fs.writeFileSync(save_path_s1, await response_s1.text(), 'utf8');
fs.writeFileSync(save_path_s3, await response_s3.text(), 'utf8');
fs.writeFileSync(save_path_s4, await response_s4.text(), 'utf8');
fs.writeFileSync(save_path_s5, await response_s5.text(), 'utf8');





