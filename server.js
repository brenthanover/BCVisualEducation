// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// const port = process.env.PORT || 5000;
// var cors = require('cors');
//
// var indexRouter = require('./index');
// var reviewsRouter = require('./reviews');
// var testRouter = require('./test');
//
// const server = express();
//
// server.use(cors());
//
// server.set('views', path.join(__dirname, 'views'));
// server.set('view engine', 'jade');
//
// server.use(express.json());
// server.use(bodyParser.urlencoded({extended: false}));
// server.use(express.urlencoded({ extended: false }));
// server.use(express.static(path.join(__dirname, 'public')));
//
// server.use('/', indexRouter);
// server.use('/reviews', reviewsRouter);
// server.use('/test', testRouter);
//
// // console.log that your server is up and running
// server.listen(port, () => console.log('Listening on port ' + port));
//
// // catch 404 and forward to error handler
// server.use(function(req, res, next) {
//     next(createError(404));
// });
//
// // error handler
// server.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
//
// module.exports = server;
//
//
//
