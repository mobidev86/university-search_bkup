## University Search ##

This application will search universities by country, name, or domain.

## Technology Stack ##
1. Laravel 10
2. React v18
3. Laravel Sail
4. Tailwind CSS
5. Larastan


## Steps to run application ##

1. Git clone "https://github.com/mobidev86/university-search.git"
2. composer install
3. php artisan sail:install (choose option mysql and redis)
4. npm install
5. ./vendor/bin/sail up
6. ./vendor/bin/sail artisan migrate
7. ./vendor/bin/sail artisan db:seed
8. npm run dev


## Cache ##
We have used Redis(Laravel default) cache on server side and on client side we are using UseMemo Hook.


## Example credentials ##
Username: test@example.app
Password: password123


## Additional Comments ##
We have used larastan plugin to maintain quality of code. reference link : https://packagist.org/packages/nunomaduro/larastan


## Screenshots ##
<a href="https://prnt.sc/mN_eQucaxtsQ" target="_blank">Screen 1 </a>
<a href="https://prnt.sc/XERoAMN0XogD" target="_blank">Screen 2 </a>

## Video Demo ##
<a href="https://screenrec.com/share/5tjni1FRcr" target="_blank">Click here to see</a>