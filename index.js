// Your code here
class Polygon {
    constructor(side){
        this.side = side 
        this.count = this.side.length
    }
    get countSides(){
        return this.side.length
    }
    get perimeter(){
        let sum= 0;
        if(!Array.isArray(this.side)) return;
        for (let i of this.side){
            sum +=i
        }
        return sum      
    }
}
class Triangle extends Polygon{
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        return this.sides[0] * this.sides[0]
    }
}   
class Square extends Polygon{
    constructor(sides){
        super(sides);
    }
    get isvalid(){
        if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3] && this.sides[3] === this.sides[0]){
            return true;
        }else{
            return false;
        }
    }
    get area(){
        if (this.isvalid){
        return this.sides[0]*this.sides[3];
    }}
} 
