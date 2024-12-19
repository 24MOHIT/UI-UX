class Rectangle extends Shape{

    constructor (length, breadth){

        super();
        this.length = length;
        this.breadth = breadth;

    }
    
    setLength(length) {

        this.length = length;

    }

    getLength(length) {

        return this.length;

    }
    setBreadth(breadth) {

        this.breadth = breadth;

    }

    getBreadth(breadth) {

        return this.breadth;

    }
    area(){
        let area = this.length * this.breadth;

    }
}