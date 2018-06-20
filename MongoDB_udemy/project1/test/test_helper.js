const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/user_test');
before((done)=>{
    mongoose.connection
        .once('open', ()=>{done();})

        .on('error',(error)=>{
            console.log("warning ",error)
        });

});

beforeEach((done)=>{
    mongoose.connection.collections.users.drop(()=>{
        done();
    });
});