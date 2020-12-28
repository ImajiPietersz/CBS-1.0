const db = require('../../config/database');
const conf = require('../../config/api-config');
const authenticModel = require("../model/authentic.model");


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.hbs'));
});

app.post('views/login', function(request, response) {


    var authenticData=request.body;
    authenticModel.authentic(authenticData).then(() => {
            request.session.loggedin = true;
            request.session.username = username;
        });

		

app.get('views/admin_dashboard', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
}

)

app.get('views/customer_dashboard', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
}

)

app.get('views/employee_dashboard', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
}

)


});