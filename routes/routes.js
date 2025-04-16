const auth = require('./auth.routes');
const tables = require('./table.routes')
const user = require('./user.routes');

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.use("/api/auth/", auth);
    app.use("/api/tables/", tables);
    app.use("/api/users/", user)
    
};