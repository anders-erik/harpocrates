
echo "Initiating Chains-database.."

# FIRST SQL
sudo mysql < chains_create.sql

echo ""
echo "Chains-login:"

# SECOND SQL
mysql -u chains -p chainsDB < populate_db.sql

echo "\ndone."

