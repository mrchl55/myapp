const path = require('path');
const express = require('express');
const got = require('got'); 


const app = express();
app.set('view engine', 'hbs')




app.use(express.static(__dirname));
(async () => {
	try {
		app.get('', (req, res) => {
			res.render('index', {
				
			});
		});
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

app.listen(9000, () => {

})