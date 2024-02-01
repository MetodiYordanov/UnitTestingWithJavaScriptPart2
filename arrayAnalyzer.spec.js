import { analyzeArray } from './arrayAnalyzer.js';
import { expect } from 'chai';

describe('analyzeArray', () => {
    it('should return min and max values and length of array when input is correct', () => {
        // Arrange
        const inputArr = [1, 2, 3, 4, 5];

        // Act
        const result = analyzeArray(inputArr);

        // Assert
        expect(result).to.deep.equal({ min: 1, max: 5, length: 5 });
    });
    it('should return undefined when the input is an empty array', () => {
        // Arrange
        const inputArr = [];

        // Act
        const result = analyzeArray(inputArr);

        // Assert
        expect(result).to.be.undefined;
    });
    it('should return undefined when the input is not array', () => {
        // Arrange
        const inputArr = 12345

        // Act
        const result = analyzeArray(inputArr);

        // Assert
        expect(result).to.be.undefined;
    });
    it('should return min, max and length to be equal when input is single element array', () => {
        // Arrange
        const inputArr = [1];

        // Act
        const result = analyzeArray(inputArr);

        // Assert
        expect(result).to.deep.equal({ min: 1, max: 1, length: 1 });
    });
    it('should return min and max to be equal when all input elements are same', () => {
        // Arrange
        const inputArr = [1, 1, 1, 1];

        // Act
        const result = analyzeArray(inputArr);

        // Assert
        expect(result).to.deep.equal({ min: 1, max: 1, length: 4 });
    });
});