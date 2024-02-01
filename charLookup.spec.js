import { lookupChar } from './charLookup.js';
import { expect } from 'chai';

describe('lookupChar', () => {
    it('should return undefined if type of input is not string', () => {
        // Arrange
        const notString = 123;

        // Act
        const notStringResult = lookupChar(notString, 2);

        // Assert
        expect(notStringResult).to.be.undefined;
    });
    it('should return undefined if index is not integer', () => {
        // Arrange
        const indexNotInteger = 2.5;

        // Act
        const indexNotIntegerResult = lookupChar('apple', indexNotInteger);

        // Assert
        expect(indexNotIntegerResult).to.be.undefined;
    });
    it('should return that index is incorrect when both parameters are ok but index is bigger', () => {
        // Arrange
        const inputString = 'apple';
        const inputIndex = 6;

        // Act
        const result = lookupChar(inputString, inputIndex);

        // Assert
        expect(result).to.equals('Incorrect index');
    });
    it('should return that index is incorrect when both parameters are ok but index is smallest', () => {
        // Arrange
        const inputString = 'apple';
        const inputIndex = -2;

        // Act
        const result = lookupChar(inputString, inputIndex);

        // Assert
        expect(result).to.equals('Incorrect index');
    });
    it('should return the character at index when all parameters are ok', () => {
        // Arrange
        const inputString = 'apple';
        const inputIndex = 2;

        // Act
        const result = lookupChar(inputString, inputIndex);

        // Assert
        expect(result).to.equals('p');
    });
});