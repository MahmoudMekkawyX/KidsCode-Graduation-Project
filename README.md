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

A read-only static demo (sample data, no real accounts) is hosted on GitHub Pages: **https://mahmoudmekkawyx.github.io/KidsCode-Graduation-Project/**

Demo logins (password `demo1234`): `student@demo.kidscode`, `teacher@demo.kidscode`, `admin@demo.kidscode`.
The demo is a rendered snapshot of the PHP pages (folder `demo/`), so saving data is disabled there. A few mini-games in the demo are simplified stand-ins; the original game files are not in this repository.

## 🚀 How to Run

1. Clone the repository into a PHP server directory (e.g. XAMPP `htdocs`)
2. Create the database with `schema.sql` (MySQL). Connection settings come from `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME` (defaults: localhost / root / empty / edubin). For the admin reply mailer set `SMTP_USER` and `SMTP_PASS` (an app password) in your environment
3. Open `index.php` from your local server

## 👨‍💻 Author

Developed by **Mahmoud Mekkawy** and the graduation project team
