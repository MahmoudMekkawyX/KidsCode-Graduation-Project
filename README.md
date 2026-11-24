# 🎓 KidsCode - Graduation Project

Graduation project for the B.Sc. in Computer Engineering (Modern Academy for Engineering, 2024).

**KidsCode** is an educational platform that teaches children math, chemistry and programming through interactive games, with student/teacher accounts, course enrollment and an admin dashboard.

## ✨ Features

- Interactive games for math, chemistry and programming basics
- Courses with enrollment and progress tracking
- Teacher and admin dashboards
- User registration and login

## 🛠️ Tech Stack

- HTML, CSS, JavaScript, Bootstrap
- PHP
- MySQL

## 🌐 Live demo

**https://mahmoudmekkawyx.github.io/KidsCode-Graduation-Project/**

A static, front-end-only demo (folder `demo/`) with a fresh design for a kids learning platform: home, courses with lessons and a quiz, 8 playable games, teachers, the graduation team, contact form, login, and student / teacher / admin dashboards.

- Demo logins (password `demo1234`): `student@demo.kidscode`, `teacher@demo.kidscode`, `admin@demo.kidscode`
- The demo runs entirely in the browser. Enrolling, adding a course, deleting rows and sending contact messages are saved in `localStorage` only (the admin page has a "Reset demo data" button). No server, no real accounts, no emails.
- Dashboards redirect to the login page when you are not logged in, and each role only opens its own dashboard.
- It is separate from the PHP + MySQL app in the repository root, which is the real implementation of the project.

### Demo structure

```
demo/
  index.html, courses.html, course.html, games.html, teachers.html, team.html, contact.html, login.html
  student.html, teacher.html, admin.html
  css/kp.css          design system (colors, type, components)
  js/kp.js            shared layout, sample data, page logic
  img/                images (img/team for the team photos)
  games/              the 7 mini-games, plus Conditional_Loop_Game.html
```

Old page names (`studentDach.html`, `Games.html`, ...) redirect to the new pages.

## 🚀 How to Run

1. Clone the repository into a PHP server directory (e.g. XAMPP `htdocs`)
2. Create the database with `schema.sql` (MySQL). Connection settings come from `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME` (defaults: localhost / root / empty / edubin). For the admin reply mailer set `SMTP_USER` and `SMTP_PASS` (an app password) in your environment
3. Open `index.php` from your local server

## 👨‍💻 Author

Developed by **Mahmoud Mekkawy** and the graduation project team
