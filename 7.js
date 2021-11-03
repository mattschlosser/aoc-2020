var fs = require('fs');
let b = fs.readFileSync('7');
let s = b.toString();
let l = s.split('\n');
let k = l.map(e => e.split(' '))

let bags = {}
k.forEach(bag => {
    let id = bag[0] + ' ' + bag[1];

    bags[bag[0] + ' ' +bag[1]] = {
        name: id,
        containsShinyGold: false, 
        visited: false, 
        children: [],
        childCount: []
    };

});
k.forEach(bag => {
    let id = bag[0] + ' ' + bag[1];
    bag.count
    for (let i = 4; i < bag.length; i+=4) {
        let childID = bag[i+1] + ' ' + bag[i+2];
        if (childID == 'other bags.') return;
        let childBag = {
            child: bags[childID], 
            count: Number(bag[i])
        }
        bags[id].children.push(childBag)
    }
})
function visit(node) {
    if (!node.visited) {
        let atLeastOneContainsShinyGold = false;
        for (let i = 0; i < node.children.length; i++) {
            let {child} = node.children[i];
            if (child.name == 'shiny gold') {
                atLeastOneContainsShinyGold = true;
                break;
            } else if (visit(child)) {
                atLeastOneContainsShinyGold = true;
                break;
            }
        }
        node.containsShinyGold = atLeastOneContainsShinyGold;
        node.visited = true;
    }
    return node.containsShinyGold
}
Object.values(bags).forEach(bag => visit(bag))
i = 0;
Object.values(bags).forEach(bag => bag.containsShinyGold ? i++ : '')
console.log(i);
function totalBags(bag) {
    let count = 1;
    for (let i = 0; i < bag.children.length; i++) {
        count += bag.children[i].count * totalBags(bag.children[i].child)
    }
    return count;
}
let n = totalBags(bags['shiny gold']);
console.log(n-1); // every bag except the shiny gold one