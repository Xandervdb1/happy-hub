# Welcome to the Happy Hub README

## Table of Contents
* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Setup](#setup)
* [Usage](#usage)
* [Authentication](#authentication)
* [Error handling](#error-handling)
* [Contact](#contact)


## Introduction
- Welcome to the Happy Hub README, this file will give you a short introduction on what this web-app is, what functions it has and how to work with it.

- Happy Hub is your company's motivational platform for giving clear goals and rewards for your team and employees.

- Add quests (assignments) and assign the coins with which the employee can buy rewards. The company or teamleader decides what form these rewards will take.

- built with Laravel framework in PHP with modern monolith Inertia.

- Incentivise your goals through a reward system. 

<img src="public/images/assets/home.png">


## Prerequisites
- An IDE like VS code to open the files and read the code.
- Terminal to run the scripts
- A databasemanagement system (e.g.: TablePlus)
- Browser to render the website
- A mailgun account to send out the keys

## Installation

1. Create a Laravel project
```
composer create-project laravel/laravel .
```
2. Add breeze (Laravel starterkit) to your project
```
composer require laravel/breeze --dev
```
3. Let breeze install react into your project (using inertia.js)
```
php artisan breeze:install react
```
4. Install and run vite
```
npm i
npm run dev
```
5. Set up your database settings in .env

6. Migrate database and start your server
```
php artisan migrate
php artisan serve
```
7. Done!

## Setup

### Database Manager

In your database manager you will need to set up a database with the corresponding tables:
- users 
- companies
- keys
- logs
- quest-team
- quest-user
- quests
- reward-team
- reward-user
- rewards
- roles
- teams

---

Navigate in your prefered IDE to the root folder of the project and create a new **.env** file. Copy the contents of the **.env.example** in it. Add the following:

```
HOST=**localhost**
PORT= 4000
DB_NAME = webshop
DB_USER = root
DB_HOST = localhost
DB_PASSWORD = (your password)

JWT_ACCESS_TOKEN = (your access token)

MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=
```
- Fill in the credentials and requirements from your mailgun account.
---

**_Muy Importante!_**

In the project folder, make sure you add a .gitignore file, and add the following files:

- .env
- node_modules
- *.css.map
- index.css.map

---

## Usage

When the client gets the link to register after they have bought the HappyHub package, they will be send to the form where they can make their account. After making the account, the registration key will be sent to their email, which will be checked in the next stage of the registration process. 
If the key is validated, the client will be redirected to add their company. In the company form the client will have to add the company's credentials in order to register it in the database.

After having registrated the company, the user will be redirected to the company-dashboard. Here the client will be able to add teams, quests and rewards.

- The admin adds the team to the dashboard and asigns members.
- The admin adds rewards to the dashboard, from these he will be able to asign them to the quests
- The admin adds quests to the team or user and defines the reward for each quest

The admin can see from the company dashboard which quests are tracking for their team and members. He can also validate the quests and give coins to the company members if they are completed.

As soon as an employee has been added to a team they will be added to the database and receive a generated password in their mailbox. When this user logs in with this given password on the login page for the users, they will be invited to change it to a new password.
After having changed it they will be redirected to add a username and their birthday.
Now they are logged in and are send to the user-dashboard and here they can see the added quests by the admin or teamleader.

In the wallet the user can see how much coins the user have assembled and how much of the quests have been completed. From here the users can also claim rewards that are available according to their amount of coins. For example: If the user has 1000 coins, the user can only claim rewards that are less than 1000 coins in price.

When a user or team completes a quest or claims a reward it will also be logged in the company dashboard and wallet.

Finally, when going out of the application the user clicks on the logout button.

## Authentication

The authentication starts with the homepage. Only guests can reach this page. When you are logged in, you won't be able to reach this page.
After the registration, you are logged in as an admin. The admin has basically access to every route of the app, aside from the login and register pages.
The user authentication allows the user to access their own dashboard, with their quests and rewards. The admin authentication however, prevents the user from accessing the admin registration AND the company-dashboard. Hence, the user cannot add teams, quests or rewards. 

## Error handling

For the error handling we used a Request folder with for each of the form validations a file to specify the required fields and error messages. These messages, if handled correctly in the frontend will be shown if the form is submitted incorrectly.

## Team-members

Created by:

[Jitske De herdt](https://github.com/Jitskedh) - Frontend developer
[Niels De Clercq](https://github.com/Nielsington) - Frontend developer
[Raoul Vandevelde](https://github.com/RalloField) - Backend developer
[Sofie Van Den Abeele](https://github.com/Sofievdabeele) - Fullstack developer
[Xander Van den Bossche](https://github.com/Xandervdb1) - Fullstack developer





