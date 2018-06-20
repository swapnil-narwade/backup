const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
let joe;

describe('reading the username of the database',() =>{
    beforeEach((done)=>{
        var joe = new User({name:"joe"});
        joe.save()
            .then(()=>{
                done()});
    });
    it('find all users with name joe',(done)=>{
        User.find({name:'joe'})
            .then((users)=>{

                console.log(users[0]._id);
                console.log(joe._id);
                assert(users[0]._id.toString()===joe._id.toString());
                done();
            });
    });
});