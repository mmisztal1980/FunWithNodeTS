/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../app/modules/Calculator.ts"/>

'use strict';

import { ICalculator, Calculator } from '../app/modules/Calculator';

describe('ICalculator.add', () => {
    let calculator: ICalculator = null;
    
    beforeAll(() => {
        // Arrange
        calculator = new Calculator(); 
    });
       
    it('2+2=4', () => {
        // Act
        var result = calculator.add(2, 2);
        
        // Assert
        expect(result).toEqual(4);              
    });
        
    it('3+2=5', () => {
        // Act
        var result = calculator.add(3, 2);
        
        // Assert
        expect(result).toEqual(5);
    });
    
    it('2+3=5', () => {
        // Act
        var result = calculator.add(2, 3);
        
        // Assert
        expect(result).toEqual(5);
    });
    
    it('4+4=8', () => {
        // Act
        var result = calculator.add(4, 4);
        
        // Assert
        expect(result).toEqual(8);
    });     
}); // add