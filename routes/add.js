var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	name = request.query.name;
	description = request.query.description;
	var json = {
		'name': name,
		'description': description,
		'imageURL': 'http://lorempixel.com/400/400/people/'
	}
	console.log(json);
	data.friends.push(json);
	response.render('index', {
		"data": data.friends
	});
 }