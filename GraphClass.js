import { NodeClass } from './NodeClass.js';

class GraphClass {
    constructor() {
        this.nodes = [];
    }

    addNode(node){
        this.nodes.push(node);
    }

    removeNode(nodeName){
        let names = [];
        for(let i = 0; i < this.nodes.length; i++){
            names.push(this.nodes[i].getName());
        }

        console.log(names);
        let index = names.indexOf(nodeName);
        this.nodes.splice(index, 1);
    }

    getLength(){
        return this.nodes.length;
    }

    printGraph(){
        console.log(this.nodes);
    }

    printInOrder(){
        let orderedString = '';
        for(let i = 0; i < this.nodes.length - 1; i++){
            orderedString += this.nodes[i].getName() + ' -> ';
        }

        orderedString += this.nodes[this.nodes.length - 1].getName();
        console.log(orderedString);
        
    }
}

const obj = new NodeClass("NYC", ["DC", "FireBall"]);
const obj2 = new NodeClass("DC", ["Black", "Forest"]);
const obj4 = new NodeClass("DC", ["Black", "Forest"]);

const obj3 = new NodeClass("Meep", ["Foo", "Poo"]);

const graph = new GraphClass();
graph.addNode(obj);
graph.addNode(obj2);
graph.addNode(obj3);

graph.removeNode(obj4.getName());
console.log(graph.getLength());
graph.printGraph();
graph.printInOrder();