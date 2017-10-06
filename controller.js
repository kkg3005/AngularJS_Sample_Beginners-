var myController= function($scope){
	var employee={
		firstname:"Tumpa",
		lastname:"Roy",
		subject:"ComputerScience"
	};

	var mypet=[
	
	{
		"name": "Whiskers",
		"species" : "cat",
		"foods": {
			"likes": ["celery", "strawberries"],
			"dislikes": ["carrots","milk"]
		}
	},
	{
		"name": "Woof",
		"species" : "dog",
		"foods": {
			"likes": ["dog food"],
			"dislikes": ["cat food"]
		}
	},
	{
		"name": "Fluffy",
		"species" : "cat",
		"foods": {
			"likes": ["canned food"],
			"dislikes": ["dry food","dry fish"]
		}
	},
	{
		"name": "Kitty",
		"species" : "cat",
		"foods": {
			"likes": ["fresh food"],
			"dislikes": ["stale food"]
		}
	},
	{
		"name": "Pupster",
		"species" : "dog",
		"foods": {
			"likes": ["tomatoes", "peas"],
			"dislikes": ["bread"]
		}
	},
	{
		"name": "Tux",
		"species" : "cat",
		"foods": {
			"likes": ["fancy dishes"],
			"dislikes": ["basic cat food"]
		}
	}

	];
	var country=[
	{
		name:"USA",
		capital:"Washington, D.C.",
		flag:"USAflag.GIF"

	},
	{
		name:"INDIA",
		capital:"New Delhi",
		flag:"indiaflag.png"	
	},
	{
		name:"UK",
		capital:"London",
		flag:"UKflag.png"	
	}
	];

	var technologies=[
	{
		Name: "SQL",
		Likes: 0,
		Dislikes : 0,
	},
	{
		Name: "JAVA",
		Likes: 0,
		Dislikes : 0,
	},
	{
		Name: "JavaScript",
		Likes: 0,
		Dislikes : 0,
	},
	{
		Name: "HTLM",
		Likes: 0,
		Dislikes : 0,
	},
	{
		Name: "CSS",
		Likes: 0,
		Dislikes : 0,
	},
	];


	//var myName= "Tumpa Roy"; 
	
	//how to access Any Data directle
	$scope.message = "AngularJS first application";
	//How to access an object
	$scope.employee=employee;
	//how to access object array
	$scope.mypet=mypet;
	//how to access object with image source
	$scope.country=country;
	// To show two way data Binding
	$scope.myName="Tumpa Roy";
	//To show Event Handling
	$scope.technologies=technologies;
	$scope.incrimentLikes=function(technology){
		technology.Likes++;
	}
	$scope.incrimentDislikes=function(technology){
		technology.Dislikes++;
	}
};
myApp.controller("myController", myController);