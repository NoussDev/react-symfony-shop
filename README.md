react-symfony-shop

You have :
- PHP 7.1 for symfony4
- composer installed
- Symfony in your computer for run the internal server
- MySql and Apache server (or others)
- Npm and yarn

You must :
- git clone https://github.com/NoussDev/react-symfony-shop.git
- cd react-symfony-shop
- composer install
- php bin/console doctrine:database:create (look at your .env file to configure the database if you have an error)
- php bin/console doctrine:migrations:migrate
- npm install
- symfony server:start
- To develop you have to => yarn encore dev --watch (it's for generate the css and js in symfony structure)



TODO : 
React : 
- display stars on product's page
- manage duplicate on chart's page with quantity
- add payment's page

Symfony : 
- manage users, read and delete
- when i'm connect and i'm on the login page, i'm auto redirect to dashboard
- javascript stars on the product form