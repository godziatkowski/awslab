var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./lab/example_1").lab;
var ec2_get_instance = require("./lab/ec2_get_instance").lab;

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1}, 
		{path: "ec2getinstance", action ec2_get_instance}
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

