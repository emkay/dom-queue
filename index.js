module.exports = Queue;

function Queue(container) {
    this.node = document.createElement('ul');
    this.node.className = container;
    document.body.appendChild(this.node);
}

Queue.prototype.push = function (item) {
    var child = document.createElement('li');
    child.innerHTML = item;
    child.className = 'item';
    this.node.appendChild(child);
};

Queue.prototype.pop = function () {
    if (this.node.lastChild) {
        this.node.removeChild(this.node.lastChild);
    }
};

Queue.prototype.shift = function () {
    if (this.node.firstChild) {
        this.node.removeChild(this.node.firstChild);
    }
};
