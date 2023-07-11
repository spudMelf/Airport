export class NodeClass {
    constructor(name, connections){
        this.name = name;
        this.connections = connections;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getConnections(){
        return this.connections;
    }

    addConnections(newConnection){
        this.connections.push(newConnection);
    }

    resetConnections(){
        this.connections = [];
    }

}

//const obj = new NodeClass("NYC", ["DC", "FireBall"]);
//console.log(obj.getName());
//console.log(obj.getConnections());
