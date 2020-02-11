bundle exec middleman build --clean
cp -R "build"/* /var/www/html
rm -r build
