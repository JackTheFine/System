// A bunch of this was copied from my friend because I'm dumb https://replit.com/@junk4nv7/TheAuthor

function markovChainGenerator(text) {
    const lines = text.split("\n");
    const chain = { start: [], words: {} };
    
    lines.forEach(x => {
        let words = x.split(" ");

        if (!chain.start.find(x => x.word == words[0])) chain.start.push({ word: words[0], count: 1 });
        else chain.start.find(x => x.word == words[0]).count++;

        words.forEach((x, i) => {
            let word = x.toLowerCase();

            if (!chain.words[word]) chain.words[word] = [];

            if (words[i + 1]) {
                if (!chain.words[word].find(x => x.word == words[i + 1].toLowerCase())) chain.words[word].push({ word: words[i + 1].toLowerCase(), count: 1 });
                else chain.words[word].find(x => x.word == words[i + 1].toLowerCase()).count++;
            }
        });
    });

    return chain;
}

function pickRandom(words) {
    let count = 0;
    
    words.forEach(x => count += x.count);

    for (var current = 0; current <= count; current++) {
        words.forEach(x => {
            x.ids = [];
            
            for (var i = 0; i < x.count; i++) {
                x.ids.push(current);
                current++;
            }
        });
    }

    let random = Math.floor(Math.random() * count);
    
    return words.find(x => x.ids.indexOf(random) != -1);
}

function textGenerator(chain, sentences) {
    let word, text = "";
    
    for (var i = 0; i < sentences; i++) {
        word = pickRandom(chain.start).word;
        text += word + " ";

        for (var j = 0; j < 20; j++) {
            if (text.endsWith(". ") || text.endsWith("? ") || text.endsWith("! ")) break;

            let next = chain.words[word.toLowerCase()];
            if (!next || !next.length) break;
            word = pickRandom(next).word;
            if (!word) break;
            text += word + " ";
        }

        text += "\n";
    }

    return text;
}

function makeRandomSentence() {
  $("#generateBtn").attr("disabled", true);
  $("#generateBtnSpinner").show();
  
  let sentence = (textGenerator(markovChainGenerator(`Frisbee Tournament Link: 
Soccer Tournament Link: 
Writers' Guild Sweatshirts! 
Happy birthday Meir Perl!
Shiur starts at 9:15!
Early Morning Learners please come to my office.
Happy birthday Boaz Duftler!
Happy birthday to the Rosh Mesivta, Rabbi Zev Meir Friedman!
Shiur starts 9:07!
Reminder of the Reminder
Happy birthday Shimon Sprei!
Shiur starts at 9:10!
Happy birthday Avi Pearlman!
Of the Week Winners please come to my office after Shiur:  CJ Berkowitz Menachem Weiss Boaz Duftler 
Smash Bros. Tourney Winners! The Champ: Dani Roth! Runner-up: Raphael Nektalov!
Shiur starts at 9:15!
To sign up and pay for the Paintball trip, please click on the link below:
To Sign up for Park please click on the link below:
Happy birthday Ariel Tilis!!!
Happy birthday Coach Joe Wertman!
Shiur starts 9:07!
Happy birthday Meir “Got Ya” Bahn!
Shiur starts 9:14!
All Sugya Yomi guys please go to the Shul now.
Join the Rambam Yachad Inclusion Chat! 
Shiur starts 9:09!
Halacha Yomi Meeting at 8:57 in Room 211!
Happy birthday Akiva Roffe!
Happy birthday Eli Luban!
Masmidim Trip moved to May 16th!
Happy birthday Mr. Simonds!
Attention All Those Going to Paintball! Please click in the link here to fill out a Waiver: [link]
Title: Lag B’Omer Trip Details
Shiur starts at 9:10!
Happy birthday Eli Luban!
11B/10B in 214 today for Davening
Shiur starts at 9:09!
Shiur starts 9:18!
Shiur starts at 9:10!
Happy birthday Ms. DiBenedetto!
All AP Physics, AP Bio, and AP English students please go to Room 205 now
Shiur starts 9:20
Chess Championship Update: Two wins so far. No losses...
Donuts were served by lunch in honor of the Chess Team's Co-Championship Win!!
Shiur starts at 9:10!
Book Chat meeting in Room 205 during lunch
Happy birthday Abe Weiss!
Happy birthday Shimon Steingold!
Happy birthday Avichai Yosipov!
Happy birthday Mr. Lazar!
Happy birthday Yehuda Nissani!
Happy birthday Michael Gordon!
Glory Update! Daniel Stein wins Honorable Mention at the UNHRC Committee of the Inaugural Yeshiva League Model UN!
Rambam Yachad Inclusion Club Sensitivity Training Session today, 3:00PM, in the Shul!
All Seniors in the Shul at 3:35PM for meeting about elections.
Women's League Ice-Cream Truck is coming today 1:30PM-3:30PM! Please wait to be called down. Thank you to the Women's League for sponsoring this treat!
Congratulations to the Writing Contest Winners! Honorable Mention: Isaac Stern! Winner: Meir Bahn!
Shiur starts 9:07!
Happy birthday Avi Masri!
Happy birthday Siggy Orenbuch!!
Happy birthday Alex Tusher!!
501 Book Challenge BBQ reservation link: [link]
Shiur starts at 9:10!
Happy birthday Ms. Newmark!
Happy birthday Elazar Schwartz!
Happy birthday Mr. Balsam!
Shiur starts at 9:05!
Freshmen on bus 16. Sophomores on bus 1036. Juniors and seniors on bus 279. Start boarding.
Happy birthday Mrs. Friedman!
501 Book Challenge BBQ reservation link: [link]
Pics courtesy of Mr. Josh Justic!
Happy birthday Rabbi Fink!!
Happy birthday Yechiel Amitai!
Happy birthday Mr. Ganeles!
Happy birthday Joseph Shedlo!
501 Book Challenge BBQ reservation link: [link]
Happy birthday Jared Ehrenreich!
Happy birthday Abie Steiner!
Happy birthday Ben Zakinov!
Thanks to all who participated in the 501 Book Challenge to benefit Achiezer! Please make good on your pledges and contribute at the following link: [link]
Happy birthday Jonathan Kogan!
Motzei Shabbos ball in the Rambam Gym! All Rambam students are invited since most of them are finished with finals/Regents and even those who are still studying might need a break!  10:15PM-11:45PM open play! Please enter through the back-door that leads into the Gym. RSVP with Mr. Goldman through WhatsApp.
Shkoach to all!
Thanks to all who participated in the 501 Book Challenge to benefit Achiezer! Please make good on your pledges and contribute at the following link: [link]
Happy birthday Raphael Nektalov!
Motzei Shabbos ball in the Rambam Gym! All Rambam students are invited since most of them are finished with finals/Regents and even those who are still studying might need a break!  10:15PM-11:45PM open play! Please enter through the back-door that leads into the Gym. RSVP with Mr. Goldman through WhatsApp.
Happy birthday Ari Khavulya!
Happy birthday Joshua Aminov!
Happy birthday Mrs. Eliza Gordon!
Happy birthday Rabbi Eliach!
Link to tonight's Meet The Rabbi Interview Club, 9:30PM-9:50PM: [link]
Happy birthday Jacob Gordon!
Happy birthday Mr. Jerushalmy!
Happy birthday Cantor Weiss!
Happy birthday Yoni Gross!
Learning and Ball Tuesday night, July 11th, at Rambam! 
Happy birthday Zachary Haironson!
Happy birthday Shmuli Morgenstern!
Happy birthday Noam Rosenbaum!
Happy birthday Ariel Saitskiy!
Happy birthday Shaya Lubner!
Join the WhatsApp Group at: [link]
Happy birthday Dovid Koenigsberg!
Tonight!!! Learning and Ball, July 11th, at Rambam! 
All those attending tonight’s learning and ball please enter through the front entrance. We will be checking the door periodically so sit tight if you can’t get in right away.
Join the WhatsApp Group at: [link]
Meeting tonight at 9:00 on Zoom!
Happy birthday Michael Natanov!
Happy birthday Rabbi Knoll!
Happy birthday Daniel Felus!
Happy birthday Yonatan Hucul!
Happy birthday Mr. Nissim Pinto!
Happy birthday Yechiel Levine!
Happy birthday Avi Lax!
Happy birthday David Saar!
Happy birthday Ariel Fried!
Happy birthday Jeremy Sicklick!
Happy birthday Rabbi Rosensweig!
Happy birthday Chaim Gutleizer!
Happy birthday Elan Klein!
Happy birthday Shachar Klein!
Happy birthday Rafi Taubenfeld!
Happy birthday Rabbi Ziskind!
Happy birthday Dr. Sternberg!
Happy birthday Michael Kikov!
Happy birthday Dovi Zidele!
Happy birthday Noah Mayer!
Happy birthday Daniel Shulman!
Happy birthday Menachem Lotwin!
Happy birthday Yosef Ben-Ishay!
Happy birthday Noam Leban!
Happy birthday Eliyahu Yunaev!
Happy birthday Shlomo Inoyatov!
Happy birthday Akiva Arastehmenesh!
Happy birthday Etai Kreitner!
Happy birthday Ms. Dixon!
Happy birthday Shimon Dahan!
Happy birthday Mrs. Farrell!
Happy birthday Aidan Mayer!
Happy birthday Dani Roth!
Happy birthday Henach Barningham!
Happy birthday David Mastour!
Happy birthday Zevi Herskowitz!
Welcome to all the new members of Rambam Wide especially the Class of 2027!
Happy birthday Coach Azose!
Chess Tryout Link: [link]
Happy birthday Bernardo!
9A and 9B in Room 214 for Shacharis. 10-12 grades in the Shul.
All Minyanim starting at 8:15 today due to bus delays.
Please note: There is no mandatory Minyanim for 10-12th grades. This post is for 10th-12th graders who came in early due to busing.
Shiur starts for 9A and 9B at 9:20.
Rabbi Meth periods 1-2 are in Room 216.
Happy birthday Daniel Stein!
Today’s Morning Schedule!
Shiur starts 9:13!
Happy birthday Abraham Kupczyk!
Happy birthday Daniel Boruchov!
Happy birthday Aaron Greenfield!
Happy birthday Mordechai Engelsohn!
Today’s Morning Schedule!
Happy birthday Michael Justic!
Rambam Chanukas Habayos - September 10th, 2023  [link]
9/11 Assembly for 9th and 10th graders only.
Mock Trial Team Info Session today during lunch in Room 010.  For anyone at all interested in the law and/or the team, please attend to gather more information.
Today’s Morning Schedule!
Happy birthday Moshe Lowenstein!
Happy birthday Yehoshua Milchman!
Reminder: Chesed Club Info Session today during lunch in Room 010. Join up to do some good!
Today’s Morning Schedule!
Robotics Team Tryout link above
All members of Rambam Chess please go the Shul now.
Happy birthday Ezra Stein!
Happy birthday Rabbi Meth!
Happy (early) birthday (the 17th) Eitan Greenberg!
Happy (early) birthday (the 17th) Yosef Klein!
Monday, September 18, Tzom Gedalia- Half Day Classes on Zoom. 
Zoom Link for all classes: [link]
Subject: Opportunity for a Mitzvah - Mishnayot for נשמת ברוך מרדכי בן שמעון
Happy birthday Micha Levy!
Updated Link: [link]
Reminder: Two-Ball Tournament starts tomorrow!
Happy birthday Gavriel Koenig!
Happy birthday Nathan Pinkhasov!
Glory Update! Congratulations to the Rambam Rhetoric Team on finishing 5-3 in last night's Extemporaneous Debate Competition! Menachem Lotwin Shoutout: 3-1 on the night!
Congratulations to Rabbi Meth! Best Masterclass Mishmar Title! "A Whale of a Good Time:  Sefer Yonah Trivia"
Last call for eSports registration!
Shiur starts at 9:05!
Happy birthday Avi Wollner!
Shiur starts at 9:07
Congratulations to the 2023-2024 Rambam Mock Trial Team!
Happy birthday Joseph Natanov!
Happy birthday Zachary Babaev!
Happy birthday Bernie Weiner!
Rabbi Yehoshua Konig, Rambam Class of 2004, and former Rambam Rebbe, shared this message with his friends and family and we felt it was important for everyone to read. Am Yisrael chai! 
Video from last night's Rambam Tehillim Zoom/Message from Rosh Mesivta, Rabbi Zev Meir Friedman: [link]
The intelligence community has asked that no specific full names or pictures of people in Israel be posted on any social media so we have taken down the original lists of names and pictures.  
Reminder: Goods Drive to Help Israeli Soldiers-all goods will be sent to Israeli Bases
Another Way to Help Israel: A Message from Rambam Alumni Parents
Tehillim Link to Daven for specific soldiers in Israel: [link]
*Hi! We are at JFK right now and we realized how much the soldiers want HAND WRITTEN LETTERS!!!!!! We are planning to come back in a couple of hours. If you can get as many people as possible to write letters and drop them off in the mailbox of * 21 lotus street Cedarhurst 
Help an Israeli Paratrooper Battalion: [link]
Letters for Soldiers: We are collecting handwritten letters of support and chizuk for IDF soldiers.  Art is also appreciated. Please bring the letters to the "Donation" table outside the Main Office.
Preparing for battle with all the notes and love from children around Israel ❤
Rambam students packing supplies for Israel at local distribution center
From Boaz Duftler, Rambam Class of 2023. "Just wanted to share something unbelievable that happened today. As a yeshiva we have been making tzitzis for chayalim. Last night we made around 250 pairs of tzitzis. Tonight we had another order of 500 pairs of tzitzis coming in. When we got to yeshiva we were told that Israel is all out of tzitzis begadim from so many people around the country making tzitzis for chayalim to the point where they just gave us dry fit shirts and we cut them to make them into pairs of tzitzis for the chayalim!! Mi ki’amcha yisroel!!!! Tizku limitzvos everyone!!"
Shiur starts at 9:22
All Night Tehillim and Learning for the 
Rabbi Haar will be available to learn tonight from 9:45PM-10:30PM at the Rambam All-Night Learning-A-Thon and Tehillim with those who are learning for the NCSY Bekius program.
Help feed an Israeli Soldier on the front lines.
Rabbi Sicklick Siyum-Rambam All Night Learning and Tehillim for the Z’Chus of the Chayalim and the Safety of Am Yisroel
Rambam All Night Learning and Tehillim for the Z’Chus of the Chayalim and the Safety of Am Yisroel
Rambam All Night Learning and Tehillim for the Z’Chus of the Chayalim and the Safety of Am Yisroel
Optional Shiur given by Mr. Oren Teeter, midnight Room 114.
Ariel Saitskiy’s surprise Siyum in the Shul now!
Avi Masri Shiur in Room 114 now
Rabbi Ziskind Shiur in Room 114 at 5:10AM.
Shacharis is at 6:42AM
Please come to the Shul for the completion of Tehillim
Duffle Bags needed at 79 Maplewood St., West Hempstead, NY 11552. All bags to be filled with goods to support the IDF. Please donate whatever you have.
Shiur starts 9:33.
First period will go to 9:55AM.
Sam Cohen Class of 2014  in Milluim in צה"ל on Israeli TV tonight! Rambam Man! 🇮🇱🇮🇱🇮🇱
More duffle bags needs. Please drop them off at the school.
Note: Extracurricular Activities will resume Tuesday night.
Writing Letters to Mourners in Israel 
Judaism, Zionism and the Land of Israel [link]
Support Israel! Please bring to Rambam any new and used Winter Fleeces for soldiers up North.
Support Israel! Thermal socks and underwear needed as well!
Happy birthday Yoni Pfeifer!
Join us in making a meaningful impact! We're raising funds to relocate a displaced family in Israel to a safer home in Jerusalem. Your contribution will provide them with the security, stability, and support they urgently need. Every donation brings us closer to ensuring a brighter future for this family in their time of crisis.
Please note: Our credit card system is temporarily offline. Sorry for any inconvenience.
Credit card system is now back online.
Join the Halacha Yomi WhatsApp group! This week featuring Rabbi Sicklick!  
Join the Sugya Yomi WhatsApp group! This week features Rambam Rabbinic Fellow Jake Fuchs! 
Tourniquets needed for units in Israel! If you have any tourniquets or ability to get them, please bring them to Rambam immediately. Thank you!
This is the link: [link]
Note: No School this Sunday
Happy birthday Zachary Samuels!
Happy birthday Gavi Weiss!
Halacha Yomi featuring Rabbi Sicklick meeting in Room 012 now
Shiur starts 9:15
Happy birthday Zeke Newman!
Happy birthday Joey Dan!
NEW NAMES ADDED TO THE BOTTOM OF THE LIST: Rambam Family in Israel: Please have them in mind in your Tefillos.
West Hempstead Tisch Breaking News! Rambam Mesivta will be providing Shaleshudes for all students who come to West Hempstead for Shabbos!! Followed by Maariv and a special Havdalah! Details to follow!
Attention all Parents: There will be a Zoom meeting with the Administration Tuesday night, 9:00PM-9:15PM to address some of the recent developments at school. Students are welcome to attend as well.
Math Team Update: Those students wishing to take part in this year’s Math Team should meet with Mr. Ganeles in Room 213 during Lunch.
Club Hour Update: Please note that with the PSATs this Wednesday we are going to carve out regular Club Hour time on Thursday. So, on Thursday, from 3:47-4:28 there will be Club Hour.  Otherwise, Thursday is a regular Thursday schedule. All students who are assisting in running Clubs this year please be ready for Thursday. Thank you!
Happy birthday Aryeh Pam!
Happy birthday Mendel Rosenberg!
Glory Update! Varsity Hockey Ravens win home opener 5-2! Zevi Herskowitz 4 goals!
Shiur starts at 9:08!
Happy birthday Chanie!
Happy birthday Jonathan Khaimov!
Note: New Date for Book Chat: Oct. 31. Story packets available in Mr. Goldman's office.
Club Hour Today, Thursday, from 3:47PM-4:28PM.
Sugya Yomi today at 4:30 in Room 012!
Interview Zoom link for alumni and parents: [link]
Done!
Anyone arriving in the next five minutes should Daven in 204.
After 8:30, next new minyan starts in room 214
New minyan starting now in 010
Shiur starts at 9:40 for everyone except those davening in room 010.
Morning Schedule:Period 1 9:40 - 10:10. Period 2. 10:12 - 10:42. Period 3. 10:44 - 11:14. Period 4  11:16 - 11:52. Back on the bells.
Shiur starts at 9:07!
Happy birthday Noach Borenstein!
More Get Well Letters Needed! Please drop off letters by the main office for people who were injured on October 7th, the first day of the attacks in Israel. Someone is visiting them in Israel at the hospital and will bring the letters. They must be in by tomorrow morning.
Glory update! Ravens Varsity Basketball wins over Kushner!
Attention 12B: Van leaves with Rabbi Wertman for reverse-inclusion Minyan at Kulanu at 8:00AM
Happy birthday Zev Jearolmon!
Happy birthday Isaac Masri!
Happy birthday Ms. Chanona!
Happy birthday Rabbi Korngold!
Rally in Washington, DC, November 14th!!!
Shiur starts 9:07!
If anyone is interested in signing up, my family would appreciate it tremendously. All the money will go to that chayalim. We have 3 nephews there (all in different places) on the front lines and haven't received much as of yet. It's been very difficult for them, so we are trying to raise money to get what they need.
Happy birthday Moe Goldstein!
The Friday, Nov. 10, 9th Grade Rabbi Sicklick Tefillah Quiz has now been moved to the 17th due to the 10th now being a Zoom day.
Glory Update!: The Rambam Rhetoric Team's Shmuel Rabinow Wins 3rd Place in Impromptu Speaking Tournament!
Halacha Yomi Featuring Rabbi Haar concludes Thursday, 11/9, Period 7 in Room 211.
Shiur starts 9:20!
Happy birthday Ephraim Twersky!
Starting at 1:59! Halacha Yomi Featuring Rabbi Haar concludes Thursday, 11/9, Period 7 in Room 211.
Glory Update! Rambam Torah Bowl goes 2-0 on the day!
Friday, November 10th- Zoom. 
Please note the following new classroom assignments starting Monday, Nov. 13. 
Happy birthday Noach Dorwitt!
Happy birthday Akiva Leider!
Shiur starts 9:07
Happy birthday Yehuda Fistel!
Happy birthday to Yechiel Litvintchouk!
Early Morning Learning with Rabbi Sicklick starting now in Room 010.
Reminder: Please note the following new classroom assignments starting Monday, Nov. 13. 
Club Hour Boardgame Club WhatsApp Link: [link]
Same seats on the way back.
Bus 2 estimated time of arrival back at Rambam is 9:00PM.
Happy Alex Sigelman!
Shiur starts 9:23
Donut Update! Donuts will be arriving tomorrow at noon in honor of the recent Rambam Ravens sports wins!
Shiur starts at 9:12
Model Chinuch League Award Ceremony in the Shul at 1:10.
Glory Update: David Mastour wins Best Teacher Award at Model Chinuch League Tournament!
Happy birthday Shaya Shvartsman!
Classic Film Club and Meet The Author Book Club meeting now in Room 010!
Reminder there is regular class today for all those not participating in the 4-Corner Dodgeball Tournament.
Happy birthday Ezra Masri!
Join the Rambam Yachad Inclusion Chat! 
Writers’ Guild story packets available in the Main Office.
Shiur starts at 9:09!
Room 012 Minyan Shiur start time is 9:20.
Happy birthday Elan Beilis!
Writers' Guild meeting in Room 012 now!
Just a reminder to think about the shevatim
Happy birthday Lior Benhayun!
Glory Update! Shmuel Feder advances to the semifinals in National eSports League!
Happy birthday Yehuda Mayefsky!
Happy birthday Jonathan Pilosav!
Happy birthday Dani Scheiner!
Donuts coming by lunch in honor of the Rambam Hockey, Flagfootball, eSports, and Rambam Rhetoric Teams!
Chemistry in Room 012.
Sugya Yomi featuring Aryeh Pam please go to Room 213 now.
Rambam Mesivta Alumnus Chezkie Frieden addressed Congress today.  There was a hearing on Anti Semitism at US Universities. Chezkie is a Law Student at Harvard Law School:
Shiur starts 9:07!
Zoom Link: [link]
Zoom Link: [link]
Zoom Link: [link]
Happy birthday Yona Greenfield!
Happy birthday Ben Yasbin!
Happy birthday Rami Kessock!
Chanukah Trip Sign-Up!
Shiur starts 9:21.
Chanukah Trip Sign-Up!
Soccer WhatsApp: [link]
Last Call! Deadline to sign up is 6:30PM tonight. Space is limited! Chanukah Trip Sign-Up!
Chanukah Trips Tomorrow! 
Happy birthday Daniel Davydov!
Rambam is proud of our Orenbuch family! Please join Rachel and Yissy Orenbuch and their family on their lawn (West Hempstead, NY) for 
Mincha Now! 9th Grade in Room 214.  10-12 grades in the Shul.
Shiur starts 9:23
Happy birthday Rabbi Dr. Sicklick!
Happy birthday Noah Rosenberg!
Latka Tasting Contest sponsored by The Rambam Cooking Club in the dining room now!
Shiur starts 9:30! First period goes until 10:00 and then back on the bells.
Happy birthday Yossi Harris!
Happy birthday Shmuel Rabinow!
Happy birthday Yechiel Levine!
Or is it?
Happy birthday Avi Katz!
Reminder to bring in Tefillin tomorrow.
Shacharis is starting 8:05
Shiur starts 9:19.
Halacha Yomi featuring Rabbi Schimmel concludes today in Room 010, 9:05-9:18.
Happy birthday Joseph Niyazov!
Happy birthday Nataniel Niyazov!
Soccer WhatsApp: [link]
Shiur starts 9:09!
Soccer WhatsApp: [link]
Happy birthday Joseph Menashy!
Glory Update! JV basketball beats HANC 57-49!
Tough Books Books Club meeting in Room 012 at 12:02 to discuss Kafka’s The Metamorphosis!
Glory Update! Henach Barningham, David Mastour, and Yosef Harris for the Rambam Rhetoric place first, third, and eighth respectively in Citron December Congress Tournament!
Shiur starts 9:20!
Reminder
Happy birthday Gabriel Khaimov!
Happy birthday Nathaniel Khaimov!
Happy birthday Mordechai Jedwab!
Soccer Tournament Update: Players need to wear the same color. Goalies should wear something different from the rest of the team. Team One Red. Team Two White. Team Three Black. Team Four Gray. Team Five Blue. Team Six Yellow. If you don’t have that color, please reach out to a friend to bring one in for you tomorrow.
Happy birthday Netanel Mammon!
Happy birthday David Kalbo!
Shiur starts 9:15.
Glory Update! Rambam Chess goes 14-0 on the day against MDY!
Happy birthday Noach Yovits!
Happy birthday Yitzy Manne!
Schedule Reminder
Please note Clubs are cancelled tomorrow due to select in-class Midterms.
Open this link to join my WhatsApp Group: 
Rambam Raven's Hockey Hype Video: A Siggy Orenbuch Production: https://drive.google.com/file/d/11bTKx_FQr5svJpmnVAeHdplkxRixG2go/view?usp=drivesdk
Mazal tov to Rabbi and Rebbetzin Rosensweig and the whole family on the birth of a baby girl!
Writers' Guild meeting in Room 012 at 5:45PM!
Congratulations to the
Join the Book Chat WhatsApp Chat:
Happy birthday Cantor Weiss!
Happy birthday Dr. Sal!
Happy birthday Yaakov Englard!
Happy birthday David Aulov!
Shiur start 9:22
Happy birthday Rabbi Kuznicki!
Happy birthday David Miller!
Good luck tomorrow to the Rambam Rambots Robotics team as they head to the FTC Robotics Qualifiers!
Reminder for Minyan this morning:
Congratulations to the Rambam Rambots Robotics team on their semifinal finish in yesterday’s FTC Robotics Qualifiers tournament!
BH almost everyone is at school! Minyan starts at 8:10.
Happy birthday Moshe Holzer!
Writers’ Guild in room 010 now for Edgar Allan Prose Volume II distribution!
GLORY UPDATE! Rambam team comes in 3rd place in Mr. China’s Malverne APUSH Trivia Night!
Happy birthday Avi Barningham!
Happy birthday Gershon Brill!
Happy birthday Chaim Lebowitz!
Happy birthday Tzvi Wolf!
Happy birthday Ms. Straker!
Tefillin reminder! Looking forward to a great Spring Semester!
Shiur starts 9:13.
Happy birthday Daniel Pinkhasov!
Shiur starts 9:10.
Happy birthday Ephraim Masheyev!
Open this link to join my WhatsApp Group: 
Feb. 15-Senior Pic Day!
Shiur starts 9:05!
Rambam is proud to participate in the IDF Unity Shabbat!
Open this link to join my WhatsApp Group: [link]
Deadline to join is Friday before 3:00PM.
Glory Update! Yoni Pfeifer Places 3rd in the Citron January Congressional Debate!
Shiur starts 9:21.
Happy birthday Mark Khaimov!
*PLEASE VOTE “NO”* on this *public poll* that asks if people support South Africa’s push for a ceasefire from Israel through the International Court of Justice. 
Seniors will be meeting last period.
Shiur starts at 9:20
Happy birthday Coach Daniel Steiner!!
Tefillin reminder!
Happy birthday Menachem Lezell!
Happy birthday Yosef Lezell!
Happy birthday Dovid Gerlitz!
Happy birthday Shlomo Stern!
Shiur starts 9:12!
Happy birthday Naomi!
Shiur starts at 9:12.
Open this link to join my WhatsApp Group: [link]
Join the WhatsApp Group at: [link]
Due to popular request an Israel session for Alumni Short Story Club has been added!
Join the WhatsApp Group at: [link]
Shiur starts 9:31.
Happy birthday Dani Meir!
Happy birthday Noam Smus!
There will be a Code Names Tournament for anyone not playing in the February Madness Tournament.
All are welcome on Zoom tonight to meet Dr. Khaimov!
Happy birthday Rabbi Herschman!
New Photo of the Week Contest: WhatsApp your best fun in the snow pics to 516-551-1211.
Shiur starts at 9:09!
The Fall Semester Masmidim lunch, Guest Speaker, Surprise Trip Extravaganza has been rescheduled for February 27th.
Reminder: Yearbook Picture Day! Suits for Seniors!
Shiur starts 9:20.
9th and 10th graders to the Shul please for an Israel Assembly.
11th and 12th graders to the Shul please for an Israel Assembly.
Senior Photo group shot will be taken at 12:30 in the Shul. Please suit up by then.
Happy birthday Gavriel Rubin!
Happy birthday Michoel Groyer!
Paint Night for Rambam Students and Alumni! [link]
Happy birthday Yossi Davidovits!
Congratulations to Shlomo Inoyatov on winning the Rambam Ping-Pong Tournament and to Shmuel Feder 2nd place! Thanks to Mordechai Engelsohn for running the tournament!
Shiur starts at 9:12.
Happy birthday to Gabe Mosheyev!
Happy birthday Shmuel Feder!
Schedule Changes: Due to a scheduling conflict we are back to the Fall Schedule for Periods 1-2. 9A has Rabbi Kuznicki Period 1 and Rabbi Meth Period 2.  9B has Rabbi Meth Period 1 and Rabbi Kuznicki Period 2.  Additional Schedule Change: Anyone with a Study Period Periods 1-2 should go to Room 010.
Paint Night for Rambam Students and Alumni! [link]
Mincha Update: There will be Mincha at 2:30PM in the Shul and Mincha in individual classrooms at the end of Period 9 from 3:34PM-3-44PM.
Sunday Learning with Rabbi Sicklick in Room 010 at 8:55AM.
Shiur starts 9:20.
Happy birthday Elie Moradi!
Happy birthday Rabbi Haar!
Glory Update! Rambam Yeshiva League Model Congress Success!
Glory Update! College Bowl Mavens go 5-1 on the day!
Classic Film Club Meeting in Room 010 now
Happy birthday Yosef Bruckenstein!
Happy birthday Aaron Soleimani!
Tough Books Book Club will be meeting in 012.
Writers' Guild in Room 010 now!
Happy birthday Ezra Mimun!
Happy birthday Dovid Bondar!
Good skill to the Rambam Rambots Robotics Team in the LI FTC Championships!
Happy birthday Jakey Ahdout!
Spike Ball Tournament Tomorrow during lunch! Gym is reserved for the Tournament.
Spike Ball Tournament Continues Tomorrow during lunch! The far side of the Gym (closer to the back parking lot) is reserved for the Tournament.
Shiur starts at 9:12
Gym Gear: The Gym and locker rooms are being cleaned out over the next few days. If you have any hockey equipment, gear, jerseys, clothes, etc. please collect it. Anything left anywhere in the Gym-including the locker rooms, Coach Azose's closet, the bleacher areas, the balcony, etc. will be hefker as of Thursday night, March 7, 10:30PM.
Happy birthday Schnear Zalman Katz!
Shiur starts 9:17
Happy birthday Coach Shlomo Shalomoff!
History Bowl Tournament Championship in Room 012 now!
History Bowl Glory Update! Congratulations to Yoni Pfiefer, Yossi Harris, and Zeke Newman on their championship win 19-17!
Happy birthday Itamar Ben-Oni!
Happy birthday CJ Berkowitz!
Glory Update: Rambam Chess wins Best School at MTA Chess Tournament!
Glory Update! Michael Gordon wins Best Presentation at Central’s Inaugural Model Chinuch League Tournament!
Shiur starts at 9:10!
Glory Update! Shmuel Rabinow receives Certificate of Appreciation from the Office of the Nassau County Executive for his involvement with volunteering for the Friendship Circle
Happy birthday Mrs. Pfeifer!
Happy birthday Jakey Glass!
Happy birthday Coach Yakov Farrell!
12th grade champions!
Current MVP leader highest single game total: Mendel
Congratulations to the 9th grade bowling champions! 770 total! Noach W, Noach Y, Wolf, and Alex S!
Junior champs! 845 Total! Kreitner, Smus, Chasser, and Haironson!
11B will be leaving Rambam with Rabbi Ziskind at 8:00AM this morning for a reverse-inclusion Minyan at Kulana.
Happy birthday Rabbi Schimmel!
10th grade Bowling results are in: congratulations to Mimun, Elan K, J. Gordon, and G. Weiss.
Smash Bros. Tourney Chat: [link]
Happy birthday Binyamin Fass!
Happy birthday Eitan Sonnenblick!
Shiur starts at 9:20.
Happy birthday Shalom Yovits!
Glory Update! Congrats to Daniel Stein on winning first place in the House  for Model Congress National Qualifiers!!
Happy birthday Elnatan Chasser!
Halacha Yomi with Rabbi Ziskind concludes today in room 010 at 9:00AM!
Shiur starts 9:12.
Reminder: Memorize Pi Contest tomorrow during lunch!
9th and 10th grade IDF Soldier Assembly is now over. 11th and 12th graders please come to the Shul now for your IDF Soldier Assembly
Shiur starts at 9:10!
Anything But a Backpack Contest Today at 1:48.  Please line up at Room 213. Plaques!
Memorize Pi Contest at 12:15 today on the Shul!
Happy birthday Daniel Chechkov!
Happy birthday Jake Bench!
5th period is now when everyone will have lunch. Costume Contest, Talent Show, and Purim Video at the 11:35 in The Shul.
School resumes with the middle of 6th period, 1:25.
Joshua Aminov and Mark Khaimov win the Talent Show!
Reminder: March 26th-Shakespeare Festival/Ides of March 
Shakespeare Festival is postponed. Will be rescheduled for next week.
Happy birthday Adam Kaykov!
Happy birthday Rabbi Kovitz!
Shiur starts 9:12
Happy early birthday Isaac Stern!
Shiur starts 9:18.
Halacha Yomi with Rabbi Haar in Room 205 now.
Shakespeare Festival tomorrow during lunch in the Shul!
Shiur starts 9:15
Tzitzis for Tzahal! We need ten volunteers to make five pairs each so we can send our full quota to Israel before Pesach! WhatsApp Rabbi Meth to sign up at 718-751-6162. (You can volunteer for fewer than five pairs too.) And thank you to everyone who’s been working on this for the past few weeks!
Classic Film Club Hitchcock Day screening today: 2:00PM-4:20PM in room 010.
Schedule Reminder
Happy birthday Ari Zurndorfer!
Happy birthday Mr. Simmons!
Good luck to Model Beis Din today as they compete at Landers College!
Happy birthday Moshe Feldman!
Happy birthday Mr. China!
Good skill to Rambam Chess at today's Championship!
In honor of the Rambam Chess Championship, donuts will be distributed at dismissal tomorrow!
Shiur starts at 9:10.
Happy birthday Mr. Kelly!
Please join us today, Period 10 in Room 203, for the conclusion of Avi Lax's Sugya Yomi!
Tzitzits for the IDF Update: Close to 70 pairs of Tzitzits have been completed and we need to send the Tzitzits to Israel asap. If you have any Tzitzits, finished not finished etc., please bring them to the Main Office tomorrow so we can complete them and send them to where they are needed. Thank you!
Shiur starts 9:05!
Shiur starts 9:06!
Happy birthday Gavriel Koptiev!
Happy birthday David Bondar!
Happy birthday Coach Rudi Weinberg!
Happy birthday Ezra Rydzinski!
Happy birthday Joshua Rackman!
Happy birthday to Rosh Mesivta, Rabbi Zev Meir Friedman!
Happy early birthday Shimon Sprei! (April 29)
Happy birthday Avi Pearlman!
Happy birthday Ariel Tilis!
Shiur starts 9:20.
Happy birthday Yonah Meir!
Happy birthday Meir Bahn!
Happy birthday Rabbi Joseph Wertman!
Happy birthday Eli Luban!
Happy birthday Noah Weiner!
Shiur starts 9:12.
11th and 12th graders in the Shul today for Shacharis
Happy birthday Shalom Solomon!
New sign up link for Seneca Getaway coming soon!
Project Chazon. ([link]), an initiative which is using AI to spread pro-Israel content on Twitter/X. We need people to create Twitter accounts and connect them to our service.
Congratulations to the 501 Book Challenge Club! They have reached their goal of 501 books read to benefit OHEL! If you did not receive your 501 Book Treat at the 501 Assembly please come to my office. Stay tuned for news about the BBQ!
All 10th graders will be Davening Shacharis today in the Shul
First Period Shiur goes for 9, 11, 12 grades from 9:40-10:00. 10th grade starts at 10:00am.
Happy birthday Eli Luban!
The phone number at Camp Seneca Lake is (570) 253-3850. In case of an emergency please contact Mr. Goldman at (516) 551-1211 via WhatsApp, reception isn’t always so great up there!
Shiur starts 9:05!
Tefillin reminder
Shiur starts 9:15.
The phone number at Camp Seneca Lake is (570) 253-3850. In case of an emergency please contact Mr. Goldman at (516) 551-1211 via WhatsApp, reception isn’t always so great up there!
Flag Football Tournament at Seneca WhatsApp Group: Join if you are playing! 
Homerun Derby & Gold Glove Tournament at Seneca! Join if you are interested in playing. Space is limited! 
Thanks to the generous assistance of the Rambam Women’s League, the Rambam Seneca Trip is back on!
The phone number at Camp Seneca Lake is (570) 253-3850. In case of an emergency please contact Mr. Goldman at (516) 551-1211 via WhatsApp, reception isn’t always so great up there!
The phone number at Camp Seneca Lake is (570) 253-3850. In case of an emergency please contact Mr. Goldman at (516) 551-1211 via WhatsApp, reception isn’t always so great up there!
Good skill to the Rambam JV College Bowl Mavens today in their playoff/championship matches!
Reminder for the Seneca trip you need to bring linens, pillows, blankets, and towels.
Getaway: What to Bring
Shiur starts 9:09!
Happy birthday Tzviki Gaerman!
Happy birthday Abe Wiess!
JV College Bowl Divisional Champs please come to my office
Breaking News! Volleyball Tournament with Trophies added to Seneca Getaway! Space is limited!
A few rules from Seneca for the Seneca Getaway!
Seneca Trip: Bus 1-9th and 10th grade with Mr. Dani Jakubowitz. Bus 2: 11th and 12th grade with Rabbi Korngold. Tefillin Reminder!
Bus 1-9th and 10th grades loading bus now.
Knicks game by the Playhouse near the indoor basketball gym!
Kahoot in the Lounge at 6:00PM tonight! Plaques and Prize!
Dinner at 6:50!
Massive soccer game on the soccer field 8:15PM-9:15PM!
Frisbee 10:00-11:00PM by the bunks tonight!
Mincha and learning and Maariv in the Shul 7:23PM.
Lunch and Club Hour Award Ceremony and Chess Championship Presentation at 1:00!
The Rambam Seneca Getaway was a huge success! Boys are on their way back to Rambam! Maariv upon arrival.
Both buses expected back in the 8:45-9:00PM range.
Frisbee Tournament is postponed. New date to be announced asap.
Happy birthday Gavriel Ovits!
Happy birthday Avichai Yosipov!
Club Hour Awards Ceremony and Chess Championship Presentation Pics!
Go Ravens, FC! Reminder, no fans can miss a final to go on the fan bus.
Happy birthday Michael Gordon!
CIJE trip should return about 9:00PM
Paintball Sign-up: [link]
Sports at the Park Trip: [link]
Paintball Waiver Link: [link]
If anyone accidently took someone else's medium sized black Nike bag from the Seneca trip please bring it into school tomorrow. Thanks!
Good skill to the Ravens, FC on their Soccer Playoff game tonight at TABC!
Rambam Ravens, FC playoff game link: [link]
Shiur starts 9:10!
Happy early birthday Gabriel Honikman (May 25)!
Congratulations to Dr. Josh Wolf on winning last night’s Best Masterclass Mishmar Title: 
Paintball Sign-up: [link]
Sports at the Park Trip: [link]
If anyone accidently took someone else's medium sized black Nike bag from the Seneca trip please contact me. Thanks!
Paintball Sign-up: [link]
Sports at the Park Trip: [link]
Paintball Sign-up: [link]
Sports at the Park Trip: [link]
Shiur starts 9:07!
Bathrooms at the Park are being closed in the next few minutes. Last call for bathroom at the Park!
Shiur starts at 9:10!
Happy birthday Avi Masri!
Happy birthday Siggy Orenbuch!
Rambam Onion Sweatshirts in my office now!
Shiur starts 9:10!
Finals also start at 9:10!
Happy birthday Ms. Newmark!
Shiur starts at 9: 17
Bus returning to Rambam from parade is 338.
Going to Parade: Seniors and juniors on bus 338. Sophomores on 318. Freshmen on 1034.
No bus back to Brooklyn. Anyone hitching a ride back from the parade is going van to Rambam on Bus 338.
Mincha in the Shul when the bus returns
Message from SeniorCorp: Today is the last day they will be selling breakfast. Moving forward for finals, students need to bring their own breakfast. As per usual school rules, students are not allowed to leave campus during breakfast time.
Shiur starts at 9:17.
Congratulations to our Spring Semester Masmidim! 
Surprise BBQ and Inflatable Foosball today! 4:30PM BBQ food in the lunchroom-open play in the gym until 5:30PM! Thank you to the Rambam Women's League for making this happen!
Happy birthday Mr. Balsam!
Happy birthday Bezalel Graber!
Happy birthday Shimon Steingold!
Glory Update: Junior Daniel Stein Awarded History Award from Rock Hall Museum
Please WhatsApp me privately if you are coming!
Happy birthday Mr. Ganeles!
Writers’ Guild meeting now in Room 012!
Happy birthday Abie Steiner!
Happy birthday Ms. Gottheil!
Happy birthday Mr. Jared Ehrenreich!
Happy early birthday Ben Zakinov! (June 13)
Happy birthday Yoni Kogan!
Happy birthday Eli Mlynsky!
Happy birthday Raphael Nektalov!
Mazel tov to Rebbetzin and Rabbi Meth on the birth of a baby boy!
Happy birthday Ari Khavulya!
Happy birthday Leo Brandler!
Glory Update! Daniel Stein makes it to Quarterfinal Round in Congress Category at National Debate Competition in Iowa!
Happy birthday Moshe Dahan!
Last Birthday Post for Class of 2024: Happy birthday Joshua Aminov!
Happy birthday Mrs. Eliza Gordon!
Happy birthday Rabbi Eliach!
Happy birthday Joshua Horowitz!
Happy birthday Jacob Gordon!
Happy birthday Yoni Gross!
Happy birthday Mr. Jerushalmy!
Happy birthday Cantor Weiss!
Happy birthday Ariel Saitskiy!
Happy birthday Shmuli Morgenstern!
Happy birthday Zachary Haironson!
Glory Update: Congratulations to Zevi Herskowitz on being named MVP of the Yeshiva Hockey League!
Happy birthday Shaya Lubner!
Learning and Ball Tuesday night, July 16th, at Rambam! 
Happy birthday Michael Natanov!
Reminder: Learning and Ball Tuesday night, July 16th, at Rambam! 
Happy birthday Daniel Felus!
Featuring Shiur by Rabbi Haar! Learning and Ball tonight, July 16th, at Rambam! 
Happy birthday Reb Oren Teeter!
Happy birthday Coach Dani Jakubowitz!
Happy birthday Yonatan Hucul!
Happy birthday Mr. Nissim Pinto!
Happy birthday Jonathan Mosheyev!
Happy birthday David Kohane!
Happy birthday Avi Lax!
Happy birthday David Saar!
Happy birthday Jacob Kalantarov!
Happy birthday Rabbi Ariel Rosensweig!
Happy birthday Yaakov Gensler!
Happy birthday Shachar Klein!
Happy birthday Elan Klein!
Happy birthday Rafi Taubenfeld!
Happy early birthday (August 10) Rabbi Ziskind!
Happy early birthday (August 10) Tami!
Happy birthday Nate Cohen!
Happy birthday Daniel Shulman!
Happy birthday Ethan Mordukhay!
Happy birthday Noam Leban!
Happy birthday Eliyahu Yunaev!
Happy birthday Etai Kreitner!
Happy birthday Mrs. Farrell!
Happy birthday Aidan Mayer!
Happy birthday Henach Barningham!
School is coming! Get pumped!
Happy birthday David Mastour!
Happy birthday Coach Aaron Azose!
Happy birthday Aaron Elazar!
Bagel breakfast for all freshmen in the lunchroom/lounge!
Swag giveaway in the Shul now!💥
Donuts on the way out!
Happy birthday to Bernardo!
Free bagel breakfast from the school! Bagels are Chalav Yisroel!
Locker numbers posted outside Room 211 and by the Main Office.
SeniorCorp Breakfast food link above!
Happy early birthday (June 7) Daniel Stein!
Please Note: Varsity Flagfootball Tryouts are on September 13-details to follow. The JV Flagfootball League is a Spring League and more details to follow in a few months.
Open this link to join my WhatsApp Group: [link]
Open this link to join my WhatsApp Group: [link]
Meet The Teacher Night Details: Tuesday, Sep. 10, 7:30PM in the Shul for Introductory Remarks.  8:00PM Meet the Actual Teachers.
Shiur starts at 9:10!
Mock Trial Team Information Meeting Room 12
To try to secure a place in the highly coveted Rambam Seneca Getaway Homerun Derby and Gold Glove Tournament join the following link: 
Open this link to join my WhatsApp Group: [link]
Happy birthday Aaron Greenfield!
Tech Help: Rambam’s Director of Technology, Mr. Yoni Gross, will be a having a Zoom meeting tonight, 8:30PM-9:00PM for any student or parent having difficulty navigating Google Classroom. He will also be able to answer technical questions after going through the tutorial. His Zoom link is: [link]
Have you ever wanted to run the camera or announce for a stream? Join the Rambam Ravens Stream Team today! 
Tech Help: Rambam’s Director of Technology, Mr. Yoni Gross, will be a having a Zoom meeting tonight, 8:30PM-9:00PM for any student or parent having difficulty navigating Google Classroom. He will also be able to answer technical questions after going through the tutorial. His Zoom link is: [link]
Happy birthday Mordechai Engelsohn!
Happy birthday Moshe Lowenstein!
Calling all parents, alumni, and faculty on Wide!
The 2nd and last cut for JV Basketball is tonight, AFTER Mishmar, from 6:30PM-8:00PM.
Calling all parents, alumni, and faculty on Wide!
Thank you to everyone who voted! Congratulations to Rabbi Ilan Schimmel on winning tonight’s Masterclass Mishmar Title! “Carry on Wayward Son and the Loss of Freedom”
Schoolwide Special Sunday Breakfast today sponsored by Rosh Mesivta Rabbi Avi Herschman and Principal Mr. Hillel Goldman!
Breaking News! Kahoot Champ will get a Mystery Boardgame Prize in addition to the highly coveted Kahoot Plaque!
Thank you to Elnatana Chasser, Shimon Sprei, Noam Smus, and Shalom Yovits for helping distribute today's special breakfast!
And especially Etai Kreitner!
Reminder to pack up your Tefillin!
Phone session: 8:27-8:52. Winding down now.
Yisher Koach to Rabbi Yitz Milworn and the whole team for a great Getaway! Thank you to Avi Katz and Elazar Schwartz for the start of a meaningful Senior/Freshman Big Brother Program!
Happy birthday Nathan Pinkhasov!
The Question, The Torah Question, The Photo, The Caption.. of the Week is back!
Happy birthday Effie Neuman!
Happy birthday Judge Ronald Goldman!
Masmidim Zoom learning tonight! 7:00PM-8:00PM on Rabbi Ariel Rosensweig’s Zoom! [link]
Lashon Tov Assembly has concluded. Shiur starts 9:28.
Glory Update! Mordechai Engelsohn earns National Merit Scholarship Letter of Commendation!
Open this link to join my WhatsApp Group: [link]
Happy birthday Avi Wollner!
Tefillin reminder
Happy birthday Joseph Natanov!
GLORY UPDATE! VARSITY FLAGFOOTBALL WINS 25-0 VS SHAARE!`), 1));
  
  $("#sentence").html(`<span class="placeholder col-${Math.round(sentence.length / 10)}"></span>`);

  setTimeout(() => {
    $("#sentence").html(sentence);
    
    $("#generateBtn").attr("disabled", false);
    $("#generateBtnSpinner").hide();
  }, 250);
}