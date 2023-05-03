## University Search ##

This application will search universities by country, name, or domain.

## Technology Stack ##
1. Laravel 10
2. React v18
3. Laravel Sail
4. Tailwind CSS
5. Larastan


## Steps to run application ##

Assuming you have docker installed in your system.

1. Git clone "https://github.com/mobidev86/university-search.git"
2. cd /university-search
3. Run command:
    `docker run --rm `&#92; \
        `-u "$(id -u):$(id -g)" `&#92; \
        `-v $(pwd):/var/www/html `&#92; \
        `-w /var/www/html `&#92; \
        `laravelsail/php82-composer:latest `&#92; \
        `composer install --ignore-platform-reqs ` \
        `composer require laravel/passport ` \
        `cp .env.example .env ` \
        `php artisan key:generate ` \
        `./vendor/bin/sail up`

4. `./vendor/bin/sail artisan passport:install && ./vendor/bin/sail artisan migrate && ./vendor/bin/sail artisan db:seed`
5. Open http://localhost OR http://127.0.0.1




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