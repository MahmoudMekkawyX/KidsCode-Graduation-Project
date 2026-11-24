-- KidsCode schema reconstructed from the application queries
CREATE DATABASE IF NOT EXISTS edubin CHARACTER SET utf8mb4;
USE edubin;

CREATE TABLE IF NOT EXISTS `account` (
  `user_id` INT AUTO_INCREMENT PRIMARY KEY,
  `User_Name` VARCHAR(255),
  `email` VARCHAR(255),
  `User_password` VARCHAR(255),
  `UserType` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `student` (
  `student_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT,
  `student_fname` VARCHAR(255),
  `student_lname` VARCHAR(255),
  `Email` VARCHAR(255),
  `Gender` VARCHAR(255),
  `Country` VARCHAR(255),
  `phoneNum` VARCHAR(255),
  `Birthday` VARCHAR(255),
  `plan_of_adge` VARCHAR(255),
  `GPA` VARCHAR(255),
  `image` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `teacher` (
  `Teacher_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT,
  `teacher_fname` VARCHAR(255),
  `teacher_lname` VARCHAR(255),
  `email` VARCHAR(255),
  `teacher_description` VARCHAR(255),
  `Country` VARCHAR(255),
  `phoneNum` VARCHAR(255),
  `Birthday` VARCHAR(255),
  `ED_Level` VARCHAR(255),
  `image` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `teacher_social_media` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `teacher_ID` INT,
  `platform` VARCHAR(255),
  `profile_url` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `course` (
  `Course_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Teacher_ID` INT,
  `Course_Name` VARCHAR(255),
  `Total_Level` INT,
  `Description` VARCHAR(255),
  `Start_Time` VARCHAR(255),
  `End_Time` VARCHAR(255),
  `Date_of_Create` VARCHAR(255),
  `Course_Image` VARCHAR(255),
  `Intro_Video` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `lesson` (
  `Lesson_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Course_ID` INT,
  `Teacher_ID` INT,
  `Lesson_Name` VARCHAR(255),
  `Duration` VARCHAR(255),
  `link_video` VARCHAR(255),
  `Upload_Date` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `task` (
  `Task_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Teacher_ID` INT,
  `Course_ID` INT,
  `Title` VARCHAR(255),
  `Upload_Date` VARCHAR(255),
  `Due_Date` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `questions` (
  `Question_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Task_ID` INT,
  `Question` VARCHAR(255),
  `option1` VARCHAR(255),
  `option2` VARCHAR(255),
  `option3` VARCHAR(255),
  `correctAnswer` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `questionoption` (
  `Option_ID` INT AUTO_INCREMENT PRIMARY KEY,
  `Task_ID` INT,
  `Question_ID` INT,
  `OptionText` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `student_course_registration` (
  `registration_id` INT AUTO_INCREMENT PRIMARY KEY,
  `student_ID` INT,
  `Course_ID` INT,
  `registration_date` VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `student_task_submission` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `task_id` INT,
  `student_ID` INT,
  `grade` INT
);

CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255),
  `subject` VARCHAR(255),
  `email` VARCHAR(255),
  `phone_number` VARCHAR(255),
  `message` VARCHAR(255)
);
