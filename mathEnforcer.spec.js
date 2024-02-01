import { mathEnforcer } from './mathEnforcer.js';
import { expect } from 'chai';

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when addFive function has parameter that is not number', () => {
            // Arrange
            const num = 'someText';
    
            // Act
            const result = mathEnforcer.addFive(num);
    
            // Assert
            expect(result).to.be.undefined;
        });
        it('should return parameter plus five when parameter in addFive function is number', () => {
            // Arrange
            const num = 7;
    
            // Act
            const result = mathEnforcer.addFive(num);
    
            // Assert
            expect(result).to.equals(12);
        });
        it('should return parameter plus five when parameter in addFive function is floating number', () => {
            // Arrange
            const num = 7.5;
    
            // Act
            const result = mathEnforcer.addFive(num);
    
            // Assert
            expect(result).to.be.closeTo(12.5, 0.01);
        });
        it('should return parameter plus five when parameter in addFive function is negative number', () => {
            // Arrange
            const num = -7;
    
            // Act
            const result = mathEnforcer.addFive(num);
    
            // Assert
            expect(result).to.equals(-2);
        });
    });
    describe('subtractTen', () => {
        it('should return undefined when subtractTen function has parameter that is not number', () => {
            // Arrange
            const num = 'someText';
    
            // Act
            const result = mathEnforcer.subtractTen(num);
    
            // Assert
            expect(result).to.be.undefined;
        });
        it('should return undefined when subtractTen function has parameter that is floating number', () => {
            // Arrange
            const num = 5.4;
    
            // Act
            const result = mathEnforcer.subtractTen(num);
    
            // Assert
            expect(result).to.be.closeTo(-4.6, 0.01);
        });
        it('should return undefined when subtractTen function has parameter that is negative number', () => {
            // Arrange
            const num = -5;
    
            // Act
            const result = mathEnforcer.subtractTen(num);
    
            // Assert
            expect(result).to.equals(-15);
        });
        it('should return parameter minus ten when parameter in subtractTen function is number', () => {
            // Arrange
            const num = 15;
    
            // Act
            const result = mathEnforcer.subtractTen(num);
    
            // Assert
            expect(result).to.equals(5);
        });
    });
    describe('sum', () => {
        it('should return undefined when first parameter in sum function is not number', () => {
            // Arrange
            const firstElement = 'someText';
            const secondElement = 8;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.be.undefined;
        });
        it('should return undefined when second parameter in sum function is not number', () => {
            // Arrange
            const firstElement = 8;
            const secondElement = 'someText';
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.be.undefined;
        });
        it('should return undefined when first parameter in sum function is number as string', () => {
            // Arrange
            const firstElement = '8';
            const secondElement = 5;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.be.undefined;
        });
        it('should return undefined when both parameters in sum function are not number', () => {
            // Arrange
            const firstElement = 'someText1';
            const secondElement = 'someText2';
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.be.undefined;
        });
        it('should return sum of both parameters in sum function when they are positive numbers', () => {
            // Arrange
            const firstElement = 8;
            const secondElement = 15;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.equals(23);
        });
        it('should return sum of both parameters in sum function when one of the numbers is negative', () => {
            // Arrange
            const firstElement = -8;
            const secondElement = 15;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.equals(7);
        });
        it('should return sum of both parameters in sum function when they are negative numbers', () => {
            // Arrange
            const firstElement = -8;
            const secondElement = -15;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.equals(-23);
        });
        it('should return sum in sum function when one of the parameters is floating number', () => {
            // Arrange
            const firstElement = 8.5;
            const secondElement = 1;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.be.closeTo(9.5, 0.01);
        });
        it('should return sum in sum function when one of the numbers is zero and the other is floating number', () => {
            // Arrange
            const firstElement = 0;
            const secondElement = 0.1;
    
            // Act
            const result = mathEnforcer.sum(firstElement, secondElement);
    
            // Assert
            expect(result).to.be.closeTo(0.1, 0.01);
        });
    });
});