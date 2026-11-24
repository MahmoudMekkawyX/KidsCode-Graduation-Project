(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var COURSES=[
 {id:'scratch',n:1,name:'Scratch Basics',ico:'🧩',bg:'#ffe08a',tag:'k1',age:'7-12',hours:8,teacher:0,sum:'Learn programming by snapping blocks together and building your first game.',
  lessons:['Meet the Scratch stage','Sprites and costumes','Moving and turning','Events: when this happens, do that','Build a catch-the-star game'],
  quiz:[{q:'In Scratch, what do you snap together to make a program?',o:['Blocks','Wires','Pipes'],a:0},{q:'Which block starts a script when the green flag is clicked?',o:['Forever','When flag clicked','Say hello'],a:1},{q:'A sprite is...',o:['A character or object on the stage','A sound file','A keyboard key'],a:0}]},
 {id:'loops',n:2,name:'Loops and Conditions',ico:'🔁',bg:'#bfe6ff',tag:'k2',age:'8-14',hours:10,teacher:0,sum:'Repeat, decide and debug with colorful puzzle games.',
  lessons:['Why computers repeat things','Repeat blocks','If this, then that','If-else decisions','Debug the broken robot'],
  quiz:[{q:'A loop is used to...',o:['Repeat steps','Delete a program','Change the color'],a:0},{q:'"If it is raining, take an umbrella" is a...',o:['Condition','Sprite','Costume'],a:0},{q:'What does debugging mean?',o:['Finding and fixing mistakes','Drawing bugs','Turning the computer off'],a:0}]},
 {id:'chemistry',n:3,name:'Fun Chemistry',ico:'⚗️',bg:'#c8f3e6',tag:'k3',age:'10-16',hours:6,teacher:1,sum:'Safe experiments, states of matter and the periodic table.',
  lessons:['Solid, liquid, gas','Mixing and dissolving','Meet the periodic table','Elements and symbols','Safe lab rules'],
  quiz:[{q:'Water turns into steam when it is...',o:['Heated','Frozen','Stirred'],a:0},{q:'The symbol for oxygen is...',o:['O','Ox','Oy'],a:0},{q:'Which is a state of matter?',o:['Liquid','Color','Sound'],a:0}]},
 {id:'math',n:4,name:'Math Adventures',ico:'➗',bg:'#ffd1d1',tag:'k4',age:'7-12',hours:8,teacher:0,sum:'Fractions, shapes and mental math through play.',
  lessons:['Number quests','Fractions as pizza slices','Shapes around us','Mental math tricks','Boss level: mixed puzzles'],
  quiz:[{q:'What is 1/2 + 1/2?',o:['1','2','1/4'],a:0},{q:'How many sides does a triangle have?',o:['3','4','5'],a:0},{q:'7 x 6 = ?',o:['42','36','48'],a:0}]}
];
var TEACHERS=[{id:1,name:'Sara Mansour',role:'Math and programming',degree:'Master',email:'teacher@demo.kidscode',color:'#5b4bff',bio:'Math and programming teacher who loves turning loops and fractions into games.'},
 {id:2,name:'Karim Fawzy',role:'Chemistry',degree:'Bachelor',email:'karim@demo.kidscode',color:'#22c3a6',bio:'Chemistry educator making experiments fun and safe for young learners.'}];
var GAMES=[
 {n:'Learn Chemistry',d:'Explore the periodic table and chemical reactions by playing.',a:'13-18',img:'chemical.jpg',href:'games/Learn chemistry/index.html',t:'Science'},
 {n:'Brain Train',d:'A math puzzle workout. Pick a difficulty and train your brain.',a:'13-18',img:'brain_train_logo.png',href:'games/Brain-Train/index.html',t:'Math',contain:1},
 {n:'Math4Kids',d:'Learn the fundamentals of math with playful practice.',a:'7-12',img:'Math2.jpg',href:'games/Math4Kids-main/Math/index.html',t:'Math'},
 {n:'Speed Test',d:'Test your reflexes and accuracy with rapid-fire tasks.',a:'13-18',img:'speed-test.jpg',href:'games/speed-test/index.html',t:'Reflex'},
 {n:'Code Arranger',d:'Put snippets of code into the right order to solve each challenge.',a:'13-18',img:'game arrengment.PNG',href:'games/game-arrengment/index.html',t:'Coding'},
 {n:'Adventure Directions',d:'Learn right, left, up and down by guiding a character through mazes.',a:'7-12',img:'pacman.PNG',href:'games/pacman/index.html',t:'Coding'},
 {n:'Flowchart Explorer',d:'Arrange flowchart symbols in order to understand coding logic.',a:'13-18',img:'Flowchart.PNG',href:'games/Flowchart/index.html',t:'Coding'},
 {n:'Conditional Loop Game',d:'Learn conditions and loops by setting up a small program.',a:'13-18',img:'Loopgame.PNG',href:'Conditional_Loop_Game.html',t:'Coding'}
];
var CREDS={'student@demo.kidscode':{role:'student',name:'Layla Hassan',to:'student.html'},'teacher@demo.kidscode':{role:'teacher',name:'Sara Mansour',to:'teacher.html'},'admin@demo.kidscode':{role:'admin',name:'Admin Demo',to:'admin.html'}};
var PW='demo1234';
function seed(){return {students:[{id:1,name:'Layla Hassan',email:'student@demo.kidscode',grade:'Grade 4'},{id:2,name:'Omar Ali',email:'omar@demo.kidscode',grade:'Grade 5'},{id:3,name:'Nour Samy',email:'nour@demo.kidscode',grade:'Grade 3'}],
 courses:COURSES.map(function(c){return {id:c.id,name:c.name,teacher:c.teacher+1,hours:c.hours}}),
 enroll:[{s:1,c:'scratch',d:'2024-01-08'},{s:1,c:'loops',d:'2024-01-08'},{s:2,c:'scratch',d:'2024-01-08'},{s:3,c:'chemistry',d:'2024-01-08'},{s:2,c:'math',d:'2024-01-08'}],
 msgs:[{id:1,name:'Hala Ahmed',subject:'Course question',email:'hala@example.com',text:'Do you offer a summer course for 8 year olds?'},{id:2,name:'Youssef Ali',subject:'Teacher application',email:'youssef@example.com',text:'I would like to teach chemistry on the platform.'}],
 grades:[{t:'Quiz 1: Scratch basics',g:9},{t:'Quiz 2: Loops',g:8}],progress:{scratch:80,loops:45}};}
var S;try{S=JSON.parse(localStorage.getItem('kp_state'))}catch(e){}
if(!S||!S.students)S=seed();
function save(){try{localStorage.setItem('kp_state',JSON.stringify(S))}catch(e){}}
function user(){try{return JSON.parse(sessionStorage.getItem('kp_user'))}catch(e){return null}}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function toast(m){var t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';t.setAttribute('role','status');document.body.appendChild(t)}t.textContent=m;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('on')},3200)}
function cById(id){return COURSES.filter(function(c){return c.id===id})[0]}
var NAV=[['index.html','Home'],['courses.html','Courses'],['games.html','Games'],['teachers.html','Teachers'],['team.html','Team'],['contact.html','Contact']];
function chrome(page){
 var u=user();
 var links=NAV.map(function(l){return '<li><a href="'+l[0]+'"'+(l[0]===page?' class="on" aria-current="page"':'')+'>'+l[1]+'</a></li>'}).join('');
 var cta=u?'<a class="btn sm" href="'+(CREDS[u.email]?CREDS[u.email].to:'student.html')+'">My dashboard</a>':'<a class="btn sm sun" href="login.html">Log in</a>';
 $('#nav').innerHTML='<a class="skip" href="#main">Skip to content</a><div class="wrap"><a class="brand" href="index.html"><b>K</b><span>Kids<em>Code</em></span></a><button class="burger" aria-label="Menu" aria-expanded="false">☰</button><ul class="menu">'+links+'</ul>'+cta+'</div>';
 $('#foot').innerHTML='<div class="wrap"><div class="cols"><div><a class="brand" style="color:#fff" href="index.html"><b>K</b><span>Kids<em style="color:var(--sun)">Code</em></span></a><p style="margin-top:14px;max-width:26em">A learning platform that teaches children math, chemistry and programming through games.</p></div><div><h4>Explore</h4><ul>'+NAV.map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>'}).join('')+'</ul></div><div><h4>Project</h4><ul><li><a href="https://github.com/MahmoudMekkawyX/KidsCode-Graduation-Project">Source on GitHub</a></li><li><a href="login.html">Try the demo</a></li><li><a href="team.html">The team</a></li></ul></div></div><div class="legal">KidsCode is a graduation project (B.Sc. Computer Engineering, Modern Academy for Engineering, 2024). This site is a static demo with sample content. Data you change here stays in your browser.</div></div>';
 $('.burger').addEventListener('click',function(){var m=$('.menu');var o=m.classList.toggle('open');this.setAttribute('aria-expanded',o)});
}
function reveal(){var els=$$('.reveal');if(location.hash==='#shot'){els.forEach(function(e){e.classList.add('in')});return}if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
function courseCard(c,extra){var t=TEACHERS[c.teacher];return '<a class="card cc hov reveal" href="course.html?c='+c.id+'" style="text-decoration:none;color:inherit"><div class="course-ico" style="background:'+c.bg+'">'+c.ico+'</div><span class="tag '+c.tag+'">Ages '+c.age+'</span><h3 style="margin-top:10px">'+c.name+'</h3><p>'+c.sum+'</p><small style="font-weight:700;color:var(--muted)">'+c.hours+' hours · '+t.name+'</small>'+(extra||'')+'</a>'}
function gameCard(g){return '<a class="card cc hov reveal" href="'+encodeURI(g.href)+'" style="text-decoration:none;color:inherit" data-age="'+g.a+'" data-t="'+g.t+'"><div class="thumb'+(g.contain?' contain':'')+'"><img loading="lazy" src="img/'+encodeURI(g.img)+'" alt="'+esc(g.n)+' screenshot"></div><div style="display:flex;gap:8px;margin-bottom:8px"><span class="tag">Ages '+g.a+'</span><span class="tag k2">'+g.t+'</span></div><h3>'+g.n+'</h3><p>'+g.d+'</p><span class="btn sm" style="margin-top:auto;align-self:flex-start">Play now</span></a>'}
var P={};
P.index=function(){
 $('#courseGrid').innerHTML=COURSES.map(function(c){return courseCard(c)}).join('');
 $('#gameGrid').innerHTML=GAMES.slice(0,3).map(gameCard).join('');
};
P.courses=function(){$('#courseGrid').innerHTML=COURSES.map(function(c){return courseCard(c)}).join('')};
P.games=function(){
 var grid=$('#gameGrid');grid.innerHTML=GAMES.map(gameCard).join('');
 $$('.fbtn').forEach(function(b){b.addEventListener('click',function(){$$('.fbtn').forEach(function(x){x.classList.remove('on')});b.classList.add('on');var f=b.dataset.f;$$('#gameGrid .card').forEach(function(c){c.style.display=(f==='all'||c.dataset.age===f||c.dataset.t===f)?'':'none'})})});
};
P.teachers=function(){
 $('#teacherGrid').innerHTML=TEACHERS.map(function(t){var cs=COURSES.filter(function(c){return c.teacher===t.id-1});
  return '<div class="card reveal" style="text-align:center"><div class="avatar" style="background:'+t.color+'">'+t.name[0]+'</div><h3>'+t.name+'</h3><span class="tag">'+t.degree+' · '+t.role+'</span><p style="margin-top:14px;color:var(--muted)">'+t.bio+'</p><p style="margin:0;font-weight:700">Teaches: '+cs.map(function(c){return '<a href="course.html?c='+c.id+'">'+c.name+'</a>'}).join(', ')+'</p></div>'}).join('');
};
P.course=function(){
 var id=(new URLSearchParams(location.search)).get('c')||'scratch';var c=cById(id);
 if(!c){c=COURSES[0];id=c.id}
 document.title=c.name+' · KidsCode';var t=TEACHERS[c.teacher];
 $('#cname').textContent=c.name;$('#cname2').textContent=c.name;$('#csum').textContent=c.sum;$('#cmeta').innerHTML='<span class="tag '+c.tag+'">Ages '+c.age+'</span> <span class="tag">'+c.hours+' hours</span> <span class="tag">'+c.lessons.length+' lessons</span>';
 $('#cico').style.background=c.bg;$('#cico').textContent=c.ico;
 $('#ov').innerHTML='<h3>What you will learn</h3><p>'+c.sum+' Each lesson is short, hands-on and ends with a challenge you can finish in one sitting.</p><h3>Taught by</h3><p><a href="teachers.html"><b>'+t.name+'</b></a>, '+t.role+' teacher.</p>';
 $('#ls').innerHTML=c.lessons.map(function(l,i){return '<li><b>'+(i+1)+'</b>'+l+'</li>'}).join('');
 var qi=0,score=0,box=$('#quizBox');
 function render(){if(qi>=c.quiz.length){box.innerHTML='<h3>Quiz complete</h3><p style="font-size:1.4rem;font-weight:800">Your score: '+score+' / '+c.quiz.length+'</p><button class="btn" id="again">Try again</button>';$('#again').onclick=function(){qi=0;score=0;render()};return}
  var q=c.quiz[qi];box.innerHTML='<p class="eyebrow">Question '+(qi+1)+' of '+c.quiz.length+'</p><h3>'+q.q+'</h3>'+q.o.map(function(o,i){return '<button class="opt" data-i="'+i+'">'+o+'</button>'}).join('');
  $$('.opt',box).forEach(function(b){b.onclick=function(){var i=+b.dataset.i;$$('.opt',box).forEach(function(x){x.disabled=true});if(i===q.a){score++;b.classList.add('ok')}else{b.classList.add('no');$$('.opt',box)[q.a].classList.add('ok')}setTimeout(function(){qi++;render()},900)}})}
 render();
 $$('.tab').forEach(function(b){b.addEventListener('click',function(){$$('.tab').forEach(function(x){x.classList.remove('on')});b.classList.add('on');$$('.tp').forEach(function(p){p.style.display=p.id===b.dataset.t?'':'none'})})});
 var u=user(),btn=$('#enrol');
 function sync(){var st=u&&u.role==='student'?S.students.filter(function(s){return s.email===u.email})[0]:null;var en=st&&S.enroll.some(function(e){return e.s===st.id&&e.c===id});btn.textContent=en?'Enrolled ✓':'Enroll in this course';btn.disabled=!!en}
 sync();
 btn.addEventListener('click',function(){if(!u){toast('Log in as the demo student to enroll.');setTimeout(function(){location.href='login.html'},1200);return}
  if(u.role!=='student'){toast('Only students can enroll. Log in as the demo student.');return}
  var st=S.students.filter(function(s){return s.email===u.email})[0];if(!st){st={id:S.students.length+10,name:u.name,email:u.email,grade:'New'};S.students.push(st)}
  S.enroll.push({s:st.id,c:id,d:new Date().toISOString().slice(0,10)});S.progress[id]=S.progress[id]||0;save();sync();toast('You are enrolled in '+c.name+'.')});
};
P.contact=function(){var f=$('#cf');f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
 $$('[data-req]',f).forEach(function(i){var m=i.parentNode.querySelector('.err');var v=i.value.trim(),bad=!v||(i.type==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));m.textContent=bad?(i.type==='email'?'Enter a valid email address.':'This field is required.'):'';if(bad)ok=false});
 if(!ok)return;S.msgs.push({id:Date.now(),name:$('#cn').value.trim(),subject:$('#cs').value.trim(),email:$('#ce').value.trim(),text:$('#cm').value.trim()});save();f.reset();toast('Thanks! Your message was added to the demo admin inbox (stored only in this browser).')})};
P.login=function(){
 var f=$('#lf'),err=$('#lerr');
 function go(email){var c=CREDS[email];sessionStorage.setItem('kp_user',JSON.stringify({email:email,role:c.role,name:c.name}));location.href=c.to}
 f.addEventListener('submit',function(e){e.preventDefault();var em=$('#le').value.trim().toLowerCase(),pw=$('#lp').value;
  if(!em||!pw){err.textContent='Enter your email and password.';return}
  if(CREDS[em]&&pw===PW){go(em)}else{err.textContent='Wrong email or password. Use one of the demo accounts on the right (password: '+PW+').'}});
 $$('.demo-acc button').forEach(function(b){b.addEventListener('click',function(){$('#le').value=b.dataset.e;$('#lp').value=PW;err.textContent='';$('#lf button[type=submit]').focus()})});
 var j=$('#jf');j.addEventListener('submit',function(e){e.preventDefault();var n=$('#jn').value.trim(),em=$('#je').value.trim().toLowerCase(),pw=$('#jp').value,m=$('#jerr');
  if(n.length<2){m.textContent='Enter your name.';return}if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){m.textContent='Enter a valid email address.';return}if(pw.length<8){m.textContent='Password needs at least 8 characters.';return}
  if(CREDS[em]){m.textContent='That email belongs to a demo account. Log in instead.';return}
  sessionStorage.setItem('kp_user',JSON.stringify({email:em,role:'student',name:n}));var st={id:S.students.length+10,name:n,email:em,grade:'New'};S.students.push(st);save();location.href='student.html'});
 $$('.mode').forEach(function(b){b.addEventListener('click',function(){$$('.mode').forEach(function(x){x.classList.toggle('on',x===b)});$('#lf').style.display=b.dataset.m==='in'?'':'none';$('#jf').style.display=b.dataset.m==='join'?'':'none'})});
};
/* dashboards */
function guard(role){var u=user();if(!u||u.role!==role){sessionStorage.setItem('kp_next',location.pathname.split('/').pop());location.replace('login.html');return null}return u}
function sidebar(u,items){var h='<div class="me"><div class="av" style="background:var(--indigo)">'+esc(u.name[0])+'</div><div><b>'+esc(u.name)+'</b><br><small style="color:var(--muted);text-transform:capitalize">'+u.role+'</small></div></div>';
 h+=items.map(function(i,k){return '<button class="s'+(k?'':' on')+'" data-p="'+i[0]+'">'+i[1]+'</button>'}).join('')+'<button class="s" id="logout">🚪 Log out</button>';$('#side').innerHTML=h;
 $$('#side button[data-p]').forEach(function(b){b.addEventListener('click',function(){$$('#side button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');$$('.panel').forEach(function(p){p.classList.toggle('on',p.id===b.dataset.p)})})});
 $('#logout').addEventListener('click',function(){sessionStorage.removeItem('kp_user');location.href='login.html'})}
function bars(list,max){return '<div class="bars">'+list.map(function(i){return '<div class="bar"><span>'+esc(i[0])+'</span><div class="t"><i style="width:'+Math.round(i[1]/max*100)+'%;background:'+i[2]+'"></i></div><b>'+i[1]+'</b></div>'}).join('')+'</div>'}
function me(u){return S.students.filter(function(s){return s.email===u.email})[0]}
P.student=function(){var u=guard('student');if(!u)return;var st=me(u);
 sidebar(u,[['p1','🏠 Overview'],['p2','📚 My courses'],['p3','🔎 Discover'],['p4','👤 Profile']]);
 $('#hello').textContent=u.name;
 function draw(){var mine=st?S.enroll.filter(function(e){return e.s===st.id}).map(function(e){return e.c}):[];
  var prog=mine.map(function(id){return S.progress[id]||0});var avg=prog.length?Math.round(prog.reduce(function(a,b){return a+b},0)/prog.length):0;
  $('#ring').style.setProperty('--p',avg);$('#ring span').textContent=avg+'%';
  $('#grades').innerHTML=st&&st.id===1?bars(S.grades.map(function(g,i){return [g.t,g.g,['var(--mint)','var(--sky)'][i%2]]}),10):'<p class="note">No grades yet. Finish a course quiz to see them here.</p>';
  $('#up').innerHTML=mine.length?'<div class="note">Next up: <b>'+esc(cById(mine[0]).name)+'</b>, lesson '+(Math.floor((S.progress[mine[0]]||0)/20)+1)+'</div>':'<div class="note">You are not enrolled yet. Pick a course in Discover.</div>';
  $('#mine').innerHTML=mine.length?mine.map(function(id){var c=cById(id),p=S.progress[id]||0;return '<div class="card" style="margin-bottom:18px;display:flex;gap:18px;align-items:center;flex-wrap:wrap"><div style="font-size:2.4rem;background:'+c.bg+';width:70px;height:70px;border-radius:20px;display:grid;place-items:center;border:2px solid var(--ink)">'+c.ico+'</div><div style="flex:1;min-width:200px"><h3 style="margin:0">'+c.name+'</h3><div class="progress" style="margin:10px 0 4px"><i style="width:'+p+'%"></i></div><small style="font-weight:700">'+p+'% complete</small></div><button class="btn sm" data-adv="'+id+'">+1 lesson</button> <a class="btn sm sun" href="course.html?c='+id+'" style="color:var(--ink)">Open</a></div>'}).join(''):'<p class="note">No courses yet.</p>';
  $$('[data-adv]').forEach(function(b){b.onclick=function(){var id=b.dataset.adv;S.progress[id]=Math.min(100,(S.progress[id]||0)+20);save();draw();toast('Nice work! Progress saved in this browser.')}});
  $('#disc').innerHTML=COURSES.map(function(c){var en=mine.indexOf(c.id)>-1;return courseCard(c,'<span class="btn sm'+(en?' ghost':'')+'" style="margin-top:12px;align-self:flex-start">'+(en?'Enrolled ✓':'View course')+'</span>')}).join('');$$('#disc .reveal').forEach(function(e){e.classList.add('in')});
 }
 draw();
 $('#pn').value=u.name;$('#pe').value=u.email;$('#pg').value=st?st.grade:'';
 $('#pf').addEventListener('submit',function(e){e.preventDefault();var n=$('#pn').value.trim();if(n.length<2){toast('Enter a name.');return}u.name=n;sessionStorage.setItem('kp_user',JSON.stringify(u));if(st){st.name=n;st.grade=$('#pg').value.trim();save()}$('#hello').textContent=n;toast('Profile saved in this browser.')});
};
P.teacher=function(){var u=guard('teacher');if(!u)return;
 sidebar(u,[['p1','🏠 Overview'],['p2','📚 My courses'],['p3','🧑‍🎓 Enrollments'],['p4','➕ Add course']]);$('#hello').textContent=u.name;
 function draw(){var mine=S.courses.filter(function(c){return c.teacher===1});var ids=mine.map(function(c){return c.id});
  var en=S.enroll.filter(function(e){return ids.indexOf(e.c)>-1});
  $('#stats').innerHTML=[['Courses',mine.length,'var(--indigo)'],['Enrollments',en.length,'var(--mint)'],['Students',new Set(en.map(function(e){return e.s})).size,'var(--coral)']].map(function(s){return '<div class="card stat"><b style="color:'+s[2]+'">'+s[1]+'</b><span>'+s[0]+'</span></div>'}).join('');
  var cols=['var(--indigo)','var(--mint)','var(--coral)','var(--sky)','var(--grape)'];
  $('#per').innerHTML=bars(mine.map(function(c,i){return [c.name,S.enroll.filter(function(e){return e.c===c.id}).length,cols[i%5]]}),Math.max(3,en.length));
  $('#recent').innerHTML=en.length?'<div class="tblwrap"><table class="tbl"><tr><th>Student</th><th>Course</th><th>Date</th></tr>'+en.slice().reverse().slice(0,6).map(function(e){var s=S.students.filter(function(x){return x.id===e.s})[0];var c=S.courses.filter(function(x){return x.id===e.c})[0];return '<tr><td>'+esc(s?s.name:'Student')+'</td><td>'+esc(c.name)+'</td><td>'+e.d+'</td></tr>'}).join('')+'</table></div>':'<p class="note">No enrollments yet.</p>';
  $('#recent2').innerHTML=$('#recent').innerHTML;
  $('#mycs').innerHTML=mine.map(function(c){var cc=cById(c.id);return '<div class="card" style="margin-bottom:16px;display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap"><div><h3 style="margin:0">'+esc(c.name)+'</h3><small style="font-weight:700;color:var(--muted)">'+c.hours+' hours · '+S.enroll.filter(function(e){return e.c===c.id}).length+' students</small></div>'+(cc?'<a class="btn sm" href="course.html?c='+c.id+'">Preview</a>':'<span class="tag">New</span>')+'</div>'}).join('');
 }
 draw();
 $('#af').addEventListener('submit',function(e){e.preventDefault();var n=$('#an').value.trim(),h=parseInt($('#ah').value,10);if(n.length<3){toast('Course name needs at least 3 characters.');return}if(!(h>0&&h<=200)){toast('Hours must be a number from 1 to 200.');return}
  S.courses.push({id:'c'+Date.now(),name:n,teacher:1,hours:h});save();draw();this.reset();$$('#side button')[1].click();toast('Course added (stored only in this browser).')});
};
P.admin=function(){var u=guard('admin');if(!u)return;
 sidebar(u,[['p1','🏠 Overview'],['p2','🧒 Students'],['p3','🧑‍🏫 Teachers'],['p4','📚 Courses'],['p5','📝 Enrollments'],['p6','✉️ Messages']]);$('#hello').textContent=u.name;
 function tbl(h,rows){return '<div class="tblwrap"><table class="tbl"><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr>'+rows+'</table></div>'}
 function draw(){
  $('#stats').innerHTML=[['Students',S.students.length,'var(--indigo)'],['Teachers',TEACHERS.length,'var(--mint)'],['Courses',S.courses.length,'var(--coral)'],['Messages',S.msgs.length,'var(--grape)']].map(function(s){return '<div class="card stat"><b style="color:'+s[2]+'">'+s[1]+'</b><span>'+s[0]+'</span></div>'}).join('');
  var cols=['var(--indigo)','var(--mint)','var(--coral)','var(--sky)','var(--grape)'];
  $('#chart').innerHTML=bars(S.courses.map(function(c,i){return [c.name,S.enroll.filter(function(e){return e.c===c.id}).length,cols[i%5]]}),Math.max(3,S.enroll.length));
  $('#t2').innerHTML=tbl(['ID','Name','Email',''],S.students.map(function(s){return '<tr><td>'+s.id+'</td><td>'+esc(s.name)+'</td><td>'+esc(s.email)+'</td><td><button class="btn sm danger" data-d="s:'+s.id+'">Delete</button></td></tr>'}).join(''));
  $('#t3').innerHTML=tbl(['ID','Name','Email'],TEACHERS.map(function(t){return '<tr><td>'+t.id+'</td><td>'+t.name+'</td><td>'+t.email+'</td></tr>'}).join(''));
  $('#t4').innerHTML=tbl(['Course','Teacher','Hours',''],S.courses.map(function(c){return '<tr><td>'+esc(c.name)+'</td><td>'+TEACHERS[c.teacher-1].name+'</td><td>'+c.hours+'</td><td><button class="btn sm danger" data-d="c:'+c.id+'">Delete</button></td></tr>'}).join(''));
  $('#t5').innerHTML=tbl(['Student','Course','Date',''],S.enroll.map(function(e,i){var s=S.students.filter(function(x){return x.id===e.s})[0],c=S.courses.filter(function(x){return x.id===e.c})[0];return '<tr><td>'+esc(s?s.name:'?')+'</td><td>'+esc(c?c.name:'?')+'</td><td>'+e.d+'</td><td><button class="btn sm danger" data-d="e:'+i+'">Delete</button></td></tr>'}).join(''));
  $('#t6').innerHTML=S.msgs.length?S.msgs.map(function(m){return '<div class="card" style="margin-bottom:16px"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><div><h3 style="margin:0">'+esc(m.subject)+'</h3><small style="font-weight:700;color:var(--muted)">'+esc(m.name)+' · '+esc(m.email)+'</small></div><div><button class="btn sm" data-r="'+m.id+'">Reply</button> <button class="btn sm danger" data-d="m:'+m.id+'">Delete</button></div></div><p style="margin:12px 0 0">'+esc(m.text)+'</p></div>'}).join(''):'<p class="note">Inbox is empty.</p>';
  $$('[data-d]').forEach(function(b){b.onclick=function(){var p=b.dataset.d.split(':'),k=p[0],v=p[1];
   if(k==='s'){S.students=S.students.filter(function(x){return String(x.id)!==v});S.enroll=S.enroll.filter(function(e){return String(e.s)!==v})}
   if(k==='c'){S.courses=S.courses.filter(function(x){return x.id!==v});S.enroll=S.enroll.filter(function(e){return e.c!==v})}
   if(k==='e')S.enroll.splice(+v,1);if(k==='m')S.msgs=S.msgs.filter(function(x){return String(x.id)!==v});
   save();draw();toast('Deleted (this browser only).')}});
  $$('[data-r]').forEach(function(b){b.onclick=function(){var m=S.msgs.filter(function(x){return String(x.id)===b.dataset.r})[0];$('#rto').textContent=m.email;$('#rmod').classList.add('on');$('#rtxt').focus()}});
 }
 draw();
 $('#rsend').onclick=function(){var t=$('#rtxt').value.trim();if(!t){toast('Write a reply first.');return}$('#rmod').classList.remove('on');$('#rtxt').value='';toast('Reply recorded in the demo. No email is sent.')};
 $('#rcancel').onclick=function(){$('#rmod').classList.remove('on')};
 $('#reset').onclick=function(){S=seed();save();draw();toast('Demo data reset.')};
};
document.addEventListener('DOMContentLoaded',function(){
 var page=document.body.dataset.page;chrome(document.body.dataset.nav||'');
 if(/^(student|teacher|admin)$/.test(page)){var fl=document.createElement('div');fl.className='demo-flag';fl.textContent='Demo · sample data · saved in your browser only';document.body.appendChild(fl)}
 if(P[page])P[page]();reveal();
});
})();
