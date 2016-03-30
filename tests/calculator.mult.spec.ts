/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../app/modules/Calculator.ts"/>

'use strict';

import { ICalculator, Calculator } from '../app/modules/Calculator';

describe('ICalculator.mult', () => {
    let calculator: ICalculator = null;
    
    beforeAll(() => {
        // Arrange
        calculator = new Calculator(); 
    });
       
    it('2*2=4', () => {
        // Act
        var result = calculator.mult(2, 2);
        
        // Assert
        expect(result).toEqual(4);                
    });
        
    it('3*2=6', () => {
        // Act
        var result = calculator.mult(3, 2);
        
        // Assert
        expect(result).toEqual(6);
    });
    
    it('2*3=6', () => {
        // Act
        var result = calculator.mult(2, 3);
        
        // Assert
        expect(result).toEqual(6);
    });
    
    it('4*4=16', () => {
        // Act
        var result = calculator.mult(4, 4);
        
        // Assert
        expect(result).toEqual(16);
    });
}); // mult*