### Перед запуском проекта!
проект использует бд PosgreSQL и поэтому перед запуском проекта необходимо через терминал зайти в пользователя posgresql
***
`sudo -u postgres psql`
***
и ввести эти команды:
***
`create user adminproject with password '13052013';`
`CREATE DATABASE users;`
`grant all privileges on database users to adminproject;`
***
Они создадут роль, базу данных и привяжут к ним эту роль.
***
### запуск
`npm start`