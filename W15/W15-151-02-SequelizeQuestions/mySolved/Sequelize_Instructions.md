* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  	An npm package
		Sequelize is a promise-based ORM for Node.js
		Supports dialects MySQL, SQLite, Postgresql, MSsql

  	- Answer: What advantages does it offer?
	  	We can use only javascript instead of SQL to define the Tables.

  	- Answer: How do I install it? How do I incorporate it into my app?
	  	Installation:   npm install --save sequelize
		Incorporation: 
			const Sequelize = require('sequelize');
			const sequelize = new Sequelize('database', 'username', 'password', {
			host: 'localhost',
			dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
			operatorsAliases: false,

			pool: {
				max: 5,
				min: 0,
				acquire: 30000,
				idle: 10000
			},

			// SQLite only
			storage: 'path/to/database.sqlite'
			});

  	- Answer: What the heck is a Sequelize model? What role will it play?
	  	Model: It is a JS representation of a DB table.
		The role is: To map a JS object with a SQL table.

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

			const Country = sequelize.define('country', {
				country: Sequelize.STRING,
				phonecode: Sequelize.INTEGER,
				capital: Sequelize.STRING,
				independence: Sequelize.INTEGER,
			})

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  	Country.findAll({
				where: {
					independence: {[Op.lte]: 10}
				}
				});

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
