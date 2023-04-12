let Stages = 0;
let UserName = 0;
let Password = 0;
let RE_SaveData = 0;
UserName = $.cookie('UserName');
Password = $.cookie('Password');
RE_SaveData = $.cookie('RE_SaveData');

let o_wave = 0;
let o_wave_t = 0;
let o_wave_th = 0;
let o_wave_f = 0;
let o_wave_fi = 0;
let o_wave_s = 0;
let o_wave_se = 0;
let t_wave = 0;
let t_wave_t = 0;
let t_wave_th = 0;
let t_wave_f = 0;
let t_wave_fi = 0;
let th_wave = 0;
let th_wave_t = 0;
let th_wave_th = 0;
let th_wave_f = 0;
let th_wave_fi = 0;
let f_wave = 0;
let f_wave_t = 0;
let f_wave_th = 0;
let f_wave_f = 0;
let f_wave_fi = 0;
let f_wave_s = 0;
let fi_wave = 0;
let fi_wave_t = 0;
let fi_wave_f = 0;
let fi_wave_fi = 0;
let s_wave = 0;
let s_wave_t = 0;
let s_wave_th = 0;
let se_wave = 0;
let se_wave_t = 0;
let se_wave_th = 0;
let se_wave_f = 0;
let se_wave_fi = 0;
let se_wave_s = 0;
let se_wave_se = 0;
let e_wave = 0;
let e_wave_t = 0;
let e_wave_th = 0;
let e_wave_f = 0;
let e_wave_fi = 0;
let e_wave_s = 0;
let e_wave_se = 0;
let n_wave = 0;
let n_wave_t = 0;
let n_wave_th = 0;
let n_wave_f = 0;
let n_wave_fi = 0;
let n_wave_s = 0;
let te_wave = 0;
let te_wave_t = 0;
let te_wave_th = 0;
let te_wave_f = 0;
let te_wave_fi = 0;
let te_wave_s = 0;
let z_wave = 0;
let exe_wave = 0;

let delta_one_wave = 0;
let delta_two_wave = 0;

let Master_Stars = 0;
let Master_Stars_EX = 0;
let Master_Delta = 0;
let Master_Delta_EX = 0;
let Master_Performance = 0;

function Submit() {
   Stages = $('#stage-select').val();
   if (Stages == "0") {
      location.href = "https://figseu-technology.github.io/zero_index.html?f=0";
   } else if (Stages == "1") {
      location.href = "https://figseu-technology.github.io/one_index.html?f=1";
   } else if (Stages == "2") {
      location.href = "https://figseu-technology.github.io/one_index.html?f=2";
   } else if (Stages == "3") {
      location.href = "https://figseu-technology.github.io/one_index.html?f=3";
   } else if (Stages == "4") {
      location.href = "https://figseu-technology.github.io/two_index.html?f=4";
   } else if (Stages == "5") {
      location.href = "https://figseu-technology.github.io/two_index.html?f=5";
   } else if (Stages == "6") {
      location.href = "https://figseu-technology.github.io/two_index.html?f=6";
   } else if (Stages == "7") {
      location.href = "https://figseu-technology.github.io/two_index.html?f=7";
   } else if (Stages == "8") {
      location.href = "https://figseu-technology.github.io/two_index.html?f=8";
   } else if (Stages == "9") {
      location.href = "https://figseu-technology.github.io/three_index.html?f=9";
   } else if (Stages == "10") {
      location.href = "https://figseu-technology.github.io/three_index.html?f=10";
   } else if (Stages == "11") {
      location.href = "https://figseu-technology.github.io/three_index.html?f=11";
   } else if (Stages == "12") {
      location.href = "https://figseu-technology.github.io/three_index.html?f=12";
   } else if (Stages == "13") {
      location.href = "https://figseu-technology.github.io/three_index.html?f=13";
   } else if (Stages == "14") {
      location.href = "https://figseu-technology.github.io/four_index.html?f=14";
   } else if (Stages == "15") {
      location.href = "https://figseu-technology.github.io/four_index.html?f=15";
   } else if (Stages == "16") {
      location.href = "https://figseu-technology.github.io/four_index.html?f=16";
   } else if (Stages == "17") {
      location.href = "https://figseu-technology.github.io/four_index.html?f=17";
   } else if (Stages == "52") {
      location.href = "https://figseu-technology.github.io/ten_index.html?f=52";
   } else if (Stages == "57") {
      location.href = "https://figseu-technology.github.io/one_index.html?f=57";
   } else if (Stages == "61") {
      location.href = "https://figseu-technology.github.io/Delta/Delta1_u36WTVFd8jpG64.html";
   } else if (Stages == "62") {
      location.href = "https://figseu-technology.github.io/Delta/Delta3_j5iR3Ny5ipd9cfD5FQQVH.html";
   } else if (Stages == "63") {
      location.href = "https://figseu-technology.github.io/Delta/Delta13_XG9WmaheuETEMrwnBgCLEbgQDBTZBVLt.html?f=63";
   } else if (Stages == "69") {
      location.href = "https://figseu-technology.github.io/Delta/Delta60_6Yaj6fWSr5wJJznWEjHy224.html?f=69";
   } else {
      location.href = "https://figseu-technology.github.io/UD/";
   }
}

function MenuSubmit() {
   Stages = $('#menu-select').val();
   if (Stages == "1") {
      location.href = "https://figseu-technology.github.io/RCN_6N7eGCtczZLUxhJAud24RSH4D6QCdbTJpM9nYpFtQetriKYnka.html";
   } else if (Stages == "2") {
      location.href = "https://figseu-technology.github.io/UD/Editor/";
   } else if (Stages == "3") {
      location.href = "https://figseu-technology.github.io/Profile.html";
   } else if (Stages == "4") {
      location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfJbkQZCSZqEZEJyhGgCciNL6CHkh0lHhPD7h_SKnj0ovMr2g/viewform?usp=sf_link";
   } else if (Stages == "5") {
      if (typeof UserName == 'undefined' && typeof Password == 'undefined' && typeof RE_SaveData == 'undefined') {
       location.href = "https://figseu-technology.github.io/Signup.html";
      }
o_wave = $.cookie('o_wave');
o_wave_t = $.cookie('o_wave_t');
o_wave_th = $.cookie('o_wave_th');
o_wave_f = $.cookie('o_wave_f');
o_wave_fi = $.cookie('o_wave_fi');
o_wave_s = $.cookie('o_wave_s');
o_wave_se = $.cookie('o_wave_se');
t_wave = $.cookie('t_wave');
t_wave_t = $.cookie('t_wave_t');
t_wave_th = $.cookie('t_wave_th');
t_wave_f = $.cookie('t_wave_f');
t_wave_fi = $.cookie('t_wave_fi');
th_wave = $.cookie('th_wave');
th_wave_t = $.cookie('th_wave_t');
th_wave_th = $.cookie('th_wave_th');
th_wave_f = $.cookie('th_wave_f');
th_wave_fi = $.cookie('th_wave_fi');
f_wave = $.cookie('f_wave');
f_wave_t = $.cookie('f_wave_t');
f_wave_th = $.cookie('f_wave_th');
f_wave_f = $.cookie('f_wave_f');
fi_wave = $.cookie('fi_wave');
fi_wave_t = $.cookie('fi_wave_t');
fi_wave_f = $.cookie('fi_wave_f');
fi_wave_fi = $.cookie('fi_wave_fi');
s_wave = $.cookie('s_wave');
s_wave_t = $.cookie('s_wave_t');
s_wave_th = $.cookie('s_wave_th');
se_wave = $.cookie('se_wave');
se_wave_t = $.cookie('se_wave_t');
se_wave_th = $.cookie('se_wave_th');
se_wave_f = $.cookie('se_wave_f');
se_wave_fi = $.cookie('se_wave_fi');
se_wave_s = $.cookie('se_wave_s');
se_wave_se = $.cookie('se_wave_se');
e_wave = $.cookie('e_wave');
e_wave_t = $.cookie('e_wave_t');
e_wave_th = $.cookie('e_wave_th');
e_wave_f = $.cookie('e_wave_f');
e_wave_fi = $.cookie('e_wave_fi');
e_wave_s = $.cookie('e_wave_s');
e_wave_se = $.cookie('e_wave_se');
n_wave = $.cookie('n_wave');
n_wave_t = $.cookie('n_wave_t');
n_wave_th = $.cookie('n_wave_th');
n_wave_f = $.cookie('n_wave_f');
n_wave_fi = $.cookie('n_wave_fi');
n_wave_s = $.cookie('n_wave_s');
te_wave = $.cookie('te_wave');
te_wave_t = $.cookie('te_wave_t');
te_wave_th = $.cookie('te_wave_th');
te_wave_f = $.cookie('te_wave_f');
te_wave_fi = $.cookie('te_wave_fi');
te_wave_s = $.cookie('te_wave_s');
z_wave = $.cookie('z_wave');
exe_wave = $.cookie('exe_wave');
delta_one_wave = $.cookie('delta_one_wave');
delta_two_wave = $.cookie('delta_two_wave');
if (exe_wave >= 1 && n_wave_s >= 1 && n_wave_f >= 1 && te_wave >= 1 && te_wave_fi >= 1 && te_wave_s >= 1) {
   Master_Stars = "ENDE2000CCA";
} else if (z_wave >= 1 && n_wave_s >= 1) {
   Master_Stars = "DED1000AAZE";
} else if (te_wave >= 1 && te_wave_t >= 1 && te_wave_th >= 1 && te_wave_f >= 1 && te_wave_fi >= 1 && te_wave_s >= 1) {
   Master_Stars = "EZGH998E990";
} else if (n_wave >= 1 && n_wave_t >= 1 && n_wave_th >= 1 && n_wave_f >= 1 && n_wave_fi >= 1 && n_wave_s >= 1) {
   Master_Stars = "7740510EZ66";
} else if (e_wave >= 1 && e_wave_t >= 1 && e_wave_th >= 1 && e_wave_f >= 1 && e_wave_fi >= 1 && e_wave_s >= 1 && e_wave_se >= 1) {
   Master_Stars = "210156JTGDN";
} else if (se_wave >= 1 && se_wave_t >= 1 && se_wave_th >= 1 && se_wave_f >= 1 && se_wave_fi >= 1) {
   Master_Stars = "M147EEZE694";
} else if (s_wave >= 1 && s_wave_t >= 1 && s_wave_th >= 1) {
   Master_Stars = "AC9866875DD";
} else if (fi_wave >= 1 && fi_wave_t >= 1 && fi_wave_th >= 1 && fi_wave_f >= 1 && fi_wave_fi >= 1) {
   Master_Stars = "DGDR807765D";
} else if (f_wave >= 1 && f_wave_t >= 1 && f_wave_th >= 1 && f_wave_f >= 1) {
   Master_Stars = "DTGI55AVVZE";
} else if (th_wave >= 1 && th_wave_t >= 1 && th_wave_th >= 1 && th_wave_f >= 1 && th_wave_fi >= 1) {
   Master_Stars = "EMTA37EE5P8";
} else if (t_wave >= 1 && t_wave_t >= 1 && t_wave_th >= 1 && t_wave_f >= 1 && t_wave_fi >= 1) {
   Master_Stars = "GEGTJJKA227";
} else if (o_wave >= 1 && o_wave_t >= 1 && o_wave_th >= 1 && o_wave_f >= 1 && o_wave_fi >= 1 && o_wave_s >= 1) {
   Master_Stars = "ANCC1200000";
} else {
   Master_Stars = "MEJCCCD0000";
}

Master_Stars_EX = encodeURIComponent(atob(Master_Stars));

location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfhTYoOczTHoCenmZBIjH-MdQmd9SPT_xjpIQ3yKDJVnomEHw/viewform?usp=pp_url&entry.1747807555=" + UserName + "&entry.242844452=" + Master_Stars_EX + "&submit=Submit";

   } else {
      location.href = "https://figseu-technology.github.io/UD/";
   }
}
