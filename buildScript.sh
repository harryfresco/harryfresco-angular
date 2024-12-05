ng build --base-href="https://harryfresco.co.uk/"
cd docs
mv browser/* .
cp index.html 404.html
echo harryfresco.co.uk >CNAME