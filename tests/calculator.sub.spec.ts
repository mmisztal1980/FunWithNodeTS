/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../app/modules/Calculator.ts"/>

'use strict';

import { ICalculator, Calculator } from '../app/modules/Calculator';

describe('ICalculator.sub', () => {
    let calculator: ICalculator = null;
    
    beforeAll(() => {
        // Arrange
        calculator = new Calculator(); 
    });
       
    it('2-2=0', () => {
        // Act
        var result = calculator.sub(2, 2);
        
        // Assert
        expect(result).toEqual(0);              
    });
        
    it('3-2=1', () => {
        // Act
        var result = calculator.sub(3, 2);
        
        // Assert
        expect(result).toEqual(1);
    });
    
    it('2-3=-1', () => {
        // Act
        var result = calculator.sub(2, 3);
        
        // Assert
        expect(result).toEqual(-1);
    });
    
    it('4-4=0', () => {
        // Act
        var result = calculator.sub(4, 4);
        
        // Assert
        expect(result).toEqual(0);
    });     
}); // sub