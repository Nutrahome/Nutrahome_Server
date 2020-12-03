const { HOST, PORT } = require('./config');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./util/swaggerDocs')
var logger = require('./log_format');

var public_routes = require('./routes/publicRoutes');
var user_routes = require('./routes/userRoutes');
var dietitian_routes = require('./routes/dietitianRoutes');
var booth_routes = require('./routes/boothRoutes');
var meals_routes = require('./routes/mealRoutes')
var paymethods_routes = require('./routes/payMethodRoutes')

var app = express();
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((error, req, res, next) => {
    return res.status(500).json({ error: error.toString() });
});

// user route
var userRoutes = express.Router();
userRoutes.use(cors());
userRoutes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE");
    next();
});
userRoutes.use(bodyParser.urlencoded({ extended: true }));
userRoutes.use(bodyParser.json());
// userRoutes.use((req, res, next) => {
//     let auth = req.header('Authorization')
//     if (id > 0 && auth.startsWith('Bearer ')){
//         let token = auth.split(' ')[1]
//         SQL(query.authUser(id, token))
//         .then((result) => {
//             console.log(result)
//             if (result[0].countUser === 1){
//                 logger('info', `Authorized Access From ${req.connection.remoteAddress}`);
//                 next();
//             } else {
//                 logger('warning', `Unauthorize Access From ${req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.remoteAddress}`);
//                 res.status(401).send({status: 401, message: "Unauthorized - User not found"});
//             }
//         })
//         .catch((error) => {
//             logger('warning', `Unauthorize Access From ${req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.remoteAddress}`);
//             res.status(401).send({status: 401, message: "Unauthorized - User not found"});
//         })
//     } else {
//         logger('warning', `Unauthorize Access From ${req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.remoteAddress}`);
//         res.status(401).send({status: 401, message: "Unauthorized - Invalid user authorization"});
//     }
// });

// dietitian routes
var dietitianRoutes = express.Router();
dietitianRoutes.use(cors());
dietitianRoutes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE");
    next();
});
dietitianRoutes.use(bodyParser.urlencoded({ extended: true }));
dietitianRoutes.use(bodyParser.json());

// booth routes
var boothRoutes = express.Router();
boothRoutes.use(cors());
boothRoutes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE");
    next();
});
boothRoutes.use(bodyParser.urlencoded({ extended: true }));
boothRoutes.use(bodyParser.json());

// meals routes
var mealRoutes = express.Router();
mealRoutes.use(cors());
mealRoutes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE");
    next();
});
mealRoutes.use(bodyParser.urlencoded({ extended: true }));
mealRoutes.use(bodyParser.json());

// paymethods routes
var paymethodRoutes = express.Router();
paymethodRoutes.use(cors());
paymethodRoutes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, OPTION, DELETE");
    next();
});
paymethodRoutes.use(bodyParser.urlencoded({ extended: true }));
paymethodRoutes.use(bodyParser.json());

userRoutes.use(user_routes);
dietitianRoutes.use(dietitian_routes)
boothRoutes.use(booth_routes)
mealRoutes.use(meals_routes)
paymethodRoutes.use(paymethods_routes)
app.use(public_routes);

app.use('/api', userRoutes);
app.use('/api', dietitianRoutes);
app.use('/api', boothRoutes);
app.use('/api', mealRoutes);
app.use('/api', paymethodRoutes);

app.use('/img', express.static('img'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(PORT, HOST, function(){
    console.log(`               Server is running on ${HOST}:${PORT}`);
    logger('info', `RUNNING ON ${HOST}:${PORT}`);
})