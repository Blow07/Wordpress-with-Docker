docker build -t img_portfolio rep_portfolio
docker run -d -tid --network sae23_boye -p 82:80 --name portfolio_container img_portfolio