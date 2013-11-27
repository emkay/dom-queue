dom-queue
=========
[![browser support](https://ci.testling.com/emkay/dom-queue.png)](https://ci.testling.com/emkay/dom-queue)

A queue for the DOM

### Example

```
var Queue = require('dom-queue');
var q = Queue('some-list');

q.push('a');
q.push('b');
q.push('c');
```

Outputs:
```
<ul class="some-list">
    <li class="item">a</li>
    <li class="item">b</li>
    <li class="item">c</li>
</ul>
```

### push

`q.push(item)`

### pop

`q.pop()`

### shift

`q.shift()`
