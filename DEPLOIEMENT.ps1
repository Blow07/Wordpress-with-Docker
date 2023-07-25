docker network create sae23_boye
docker run -p 3306:3306 --volume C:\Users\admin\Documents\SAE2.03\Conteneurs\badowordpress:/var/lib/mysql --detach --name some-mariadb --env MARIADB_USER=boye-user --env MARIADB_PASSWORD=rootjunior --env MARIADB_ROOT_PASSWORD=root --env MARIADB_DATABASE=Dockerbase --network sae23_boye mariadb:latest
docker run -d --volume C:\Users\admin\Documents\SAE2.03\Conteneurs\htmlwordpress:/var/www/html --name some-wordpress -p 80:80 --network sae23_boye --env WORDPRESS_DB_HOST=some-mariadb --env WORDPRESS_DB_USER=boye-user --env WORDPRESS_DB_PASSWORD=rootjunior --env WORDPRESS_DB_NAME=Dockerbase wordpress
docker run --name phpmyadmin -d --network sae23_boye -p 9000:80 --env PMA_HOST=some-mariadb phpmyadmin
docker build -t img_portfolio rep_portfolio
docker run -d -tid --network sae23_boye -p 82:80 --name portfolio_container img_portfolio