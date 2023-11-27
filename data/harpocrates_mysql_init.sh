
echo "Initiating Harpocrates-database.."

# FIRST SQL
sudo mysql < harpocrates_create.sql

echo ""
echo "Harpocrates mysql login:"

# SECOND SQL
mysql -u harpocrates -p harpocratesDB < populate_harpocrates.sql

echo "\ndone."

