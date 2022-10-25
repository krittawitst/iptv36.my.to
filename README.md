## IPTV M3U Playlist

เพียงนำ IPTV Playlist URL ของเรา ด้านล่างนี้ ไปใส่ในโปรแกรมที่รองรับ M3U file

# https://iptv36.netlify.app/free

## XMLTV EPG

นอกจากนี้ เรายังมี Electronic programming guides (EPG) ในรูปแบบ XMLTV ให้คุณนำไปใช้ด้วย

# https://iptv36.netlify.app/epg

## นี่คืออะไร

นี่คือ **IPTV Playlist** ที่ออกแบบมาเพื่อใช้กับ **Android TV** หรือ **Android Box** ที่มาพร้อมกับรีโมทที่มีปุ่มกดตัวเลข 0-9 โดยเฉพาะ

**IPTV ทำให้คุณสามารถรับชมทีวีสดได้ โดยใช้เพียงสัญญาณอินเตอร์เน็ตเท่านั้น** ไม่จำเป็นต้องใช้เสาอากาศ หรือกล่องทีวีดิจิตอลใด ๆ เพิ่มเติม
และด้วยการใช้ควบคู่กับ IPTV Playlist นี้ คุณจะได้รับประสบการณ์การใช้งานเสมือนการใช้ทีวีดิจิตอลปกติ **สามารถใช้ปุ่มกดตัวเลขบนรีโมททีวีเพื่อเปลี่ยนช่องได้เลย**

IPTV Playlist โดยทั่วไปจะอยู่ในลักษณะของรูปแบบ URL เช่น `https://hostname.site/playlist-name.m3u`
เมื่อนำไปใช้กับโปรแกรมที่รองรับ **จะปรากฎช่องรายการสดต่าง ๆ ขึ้นมาให้เลือกรับชม**
ซึ่งคุณสามารถตั้งค่าให้โปรแกรมคอยอัพเดตช่องรายการต่าง ๆ แบบอัตโนมัติ โดยใช้ IPTV Playlist URL เดิมได้
(เราเป็นเพียงผู้รวบรวมสัญญาณ Streaming จากแหล่งต่าง ๆ เท่านั้น ซึ่งเมื่อเกิดปัญหาไม่สามารถรับชมได้
เราจะเปลี่ยนแหล่งที่มาของ Stream ซึ่งคุณจำเป็นต้องทำการอัพเดต Playlist ใหม่ จึงจะสามารถรับชมได้อีกครั้ง)

ทั้งนี้ คุณยังสามารถนำ IPTV Playlist นี้ ไปใช้กับ Android Smartphone หรือ ระบบอื่นใดก็ได้ที่รองรับ
โดย Android Application ที่เราใช้และแนะนำ คือ

- IPTV Core (ของ Alexander Sofronov)  
  `https://play.google.com/store/apps/details?id=ru.iptvremote.android.iptv.core`
- IPTV Core Launcher (ของ Alexander Sofronov)  
  `https://play.google.com/store/apps/details?id=ru.iptvremote.android.iptv.core.launcher`

(ต้องติดตั้งทั้งสองแอพ)

## จุดเด่น

- **หมายเลขช่องตรงตามระบบทีวีดิจิตอลไทย** เช่น กดหมายเลข 3 ต้องได้รับชมช่อง ThaiPBS
  และ กดหมายเลข 36 ต้องได้รับชมช่อง PPTV เป็นต้น ด้วยการจัดเรียงช่องรูปแบบนี้ จะลดความสับสน ทำให้ผู้สูงอายุและเด็กก็สามารถใช้งานได้
- **คงไว้เพียง 36 ช่องเท่านั้น มั่นใจดูได้ทุกช่อง** ใช่ว่ามีช่องเยอะแล้วจะดี หากกดไปแล้วไม่มีสัญญาณ หรือ ดูไม่ได้ จะเสียอารมณ์เปล่า ๆ
  โดยเราได้นำช่องดาวเทียมบางช่อง และช่องสำรองของทีวีดิจิตอลที่ได้รับความนิยม ไปเติมเต็มไว้ในหมายเลขช่องที่ไม่มีในระบบทีวีดิจิตอลไทยแทน
- **คุณภาพคมชัดระดับ HD** เกือบทุกช่องใน Playlist ของเรา มีความละเอียด HD ขึ้นไป
  **(รวมถึงช่องที่แพร่ภาพในระบบทีวีดิจิตอลด้วยความละเอียด SD ปกติ)** ซึ่งต้องใช้สัญณาณอินเตอร์เน็ตที่เร็วพอสมควร
  เราคาดว่า Android TV ของคุณ จะเชื่อมต่อสัญญาณอินเตอร์เน็ตจากเน็ตบ้านไฟเบอร์ ที่มีความเร็วเพียงพอ

## ช่องรายการ

| เลขช่อง | Playlist V1           | Playlist V2 (Coming Soon) |
| ------- | --------------------- | ------------------------- |
| 1       | Workpoint TV Backup   | NBT HD                    |
| 2       | NBT HD                | Thai PBS HD               |
| 3       | Thai PBS HD           | ALTV HD                   |
| 4       | ALTV HD               | TV5 HD                    |
| 5       | TV5 HD                | T-Sports                  |
| 6       | PPTV HD Backup        | TPTV                      |
| 7       | T-Sports              | TNN16 HD                  |
| 8       | CH8 Backup            | TNN16 Backup              |
| 9       | Cartoon Club          | JKN18                     |
| 10      | TPTV                  | Nation TV HD              |
| 11      | ONE HD Backup         | Nation TV Backup          |
| 12      | Thairath TV HD Backup | Workpoint TV HD           |
| 13      | CH3 HD Backup         | Workpoint TV Backup       |
| 14      | Amarin TV HD Backup   | True4U                    |
| 15      | CH7 HD Backup         | True4U Backup             |
| 16      | TNN16 HD              | GMM25                     |
| 17      | TNN16 Backup          | GMM25 Backup              |
| 18      | JKN18                 | CH8 HD                    |
| 19      | TVB Thai              | CH8 Backup                |
| 20      | News 1 HD             | MONO29 Soundtrack         |
| 21      | Top News HD           | MONO29 QHD                |
| 22      | Nation TV HD          | MONO29 HD Backup          |
| 23      | Workpoint TV HD       | MCOT HD                   |
| 24      | True4U                | MCOT HD Backup            |
| 25      | GMM25                 | ONE HD                    |
| 26      | GMM25 Backup          | ONE HD Backup             |
| 27      | CH8 HD                | Thairath TV HD            |
| 28      | MONO29 Soundtrack     | Thairath TV HD Backup     |
| 29      | MONO29 QHD            | CH3 HD                    |
| 30      | MCOT HD               | CH3 HD Backup             |
| 31      | ONE HD                | Amarin TV HD              |
| 32      | Thairath TV HD        | Amarin TV HD Backup       |
| 33      | CH3 HD                | CH7 HD                    |
| 34      | Amarin TV HD          | CH7 HD Backup             |
| 35      | CH7 HD                | PPTV HD                   |
| 36      | PPTV HD               | PPTV HD Backup            |
