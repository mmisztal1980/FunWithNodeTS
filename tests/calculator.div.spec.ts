/// <reference path="../typings/jasmine.d.ts" />
/// <reference path="../app/modules/Calculator.ts"/>

'use strict';

import { ICalculator, Calculator } from '../app/modules/Calculator';

describe('ICalculator.div', () => {
    let calculator: ICalculator = null;
    
    beforeAll(() => {
        // Arrange
        calculator = new Calculator(); 
    });
       
    it('2/2=1', () => {
        // Act
        var result = calculator.div(2, 2);
        
        // Assert
        expect(result).toEqual(1);          
    });
        
    it('4/2=2', () => {
        // Act
        var result = calculator.div(4, 2);
        
        // Assert
        expect(result).toEqual(2);
    });
    
    it('1/0 exception', () => {
        // Act
        let thrown:boolean = false;
        try {
            var result = calculator.div(2, 0);
        } catch(e) {
            thrown = true;
        }
        // Assert
        expect(thrown).toEqual(true);
    });
    
    it('0/1=0', () => {
        // Act
        var result = calculator.div(0, 1);
        
        // Assert
        expect(result).toEqual(0);
    });
}); // div