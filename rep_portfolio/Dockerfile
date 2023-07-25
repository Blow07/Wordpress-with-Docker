FROM debian:latest
RUN apt update && apt upgrade -y && apt update && apt install -y php && apt install -y apt-transport-https lsb-release curl
RUN apt update && apt install -y apache2
RUN curl -sSLo /usr/share/keyrings/deb.sury.org-php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/deb.sury.org-php.gpg] https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/sury-php.list
RUN apt update && apt autoremove -y php* libapache2-mod-php && apt install -y libapache2-mod-php8.1 php8.1 && apt update && apt upgrade -y && apt install -y php8.1-curl php8.1-gd php8.1-intl php8.1-memcache php8.1-xml php8.1-zip php8.1-mbstring php8.1-mysql && apt upgrade && apt install -y zip
RUN php -r "copy('https://getcomposer.org/installer', '/root/composer-setup.php');"
RUN php /root/composer-setup.php --install-dir="/usr/bin"
RUN apt update && apt install -y git
RUN git clone https://github.com/Blow07/ProjetSAE104.git /var/www/html/site/
WORKDIR /var/www/html/site
RUN composer.phar -n update && composer.phar -n install
RUN apt update && apt install -y lynx nano
COPY site.conf /etc/apache2/sites-available/ 
RUN a2ensite site.conf 
RUN a2dissite 000-default.conf
RUN a2enmod rewrite 
RUN chmod -R 770 /var/www/html/site/var/log
RUN chown -R www-data:www-data /var/www/html/site/var/log
CMD /usr/sbin/service apache2 start & bash 
EXPOSE 80