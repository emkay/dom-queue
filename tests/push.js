var test = require('tape');
var Queue = require('../');

test('test push', function (t) {
    var q = new Queue('some-list');
    q.push(1);
    q.push(2);
    q.push(3);
    
    var list = document.querySelector('.some-list');
    t.equal(list.children.length, 3);
    t.end();
});
