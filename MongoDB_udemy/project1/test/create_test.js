const assert = require('assert');
const User = require('../src/user');
describe('creating a records',()=> {
    it('user created',(done)=>{
        const joe = new User({name: "swapnil"});

        joe.save()
            .then(()=>{
                assert(!joe.isNew);
                done();

            });

    });
});

