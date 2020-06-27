module.exports = function (app, pool) {  
    app.get('/wtf', function (req, res) {  
            res.send("Welcome to C-sharp corner Api");  
        });  
    };