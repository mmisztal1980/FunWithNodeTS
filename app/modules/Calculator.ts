export interface ICalculator {
     /**
     * \brief adds to numbers together and returns the result
     * \param x: number
     * \param y: number
     * \returns add result
     */
    add: (x: number, y: number) => number;
    
    /**
     * \brief subtracts y from x and returns the result
     * \param x: number
     * \param y: number
     * \returns subtract result
     */
    sub: (x:number, y: number) => number;
    
    /**
     * \brief multiplies x by y and returns the result
     * \param x: number
     * \param y: number
     * \returns subtract result
     */
    mult: (x:number, y: number) => number;
    
    /**
     * \brief divides x by y and returns the result
     * \param x: number
     * \param y: number
     * \returns subtract result
     */
    div: (x:number, y: number) => number;
}; // ICalculator

export class Calculator implements ICalculator {   
    public add(x: number, y: number): number {
        return x + y;
    } // add
    
    public sub(x: number, y: number): number {
        return x - y;
    } // sub
    
    public mult(x: number, y: number): number {
        return x * y;
    } // mult
    
    public div(x: number, y: number): number {
        if(y === 0) throw 'Attempted to divide by zero';
        
        return x / y;
    } // div
}; // Calculator