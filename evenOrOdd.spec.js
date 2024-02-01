import { isOddOrEven } from './evenOrOdd.js';
import { expect } from 'chai';

describe('isOddOrEven', () => {
    it('should return undefined when input is not string', () => {
        // Arrange
        const input = 123;

        // Act
        const result = isOddOrEven(input);

        // Assert
        expect(result).to.be.undefined;
    });
    it('should return odd when string length is odd number long', () => {
        // Arrange
        const input = 'car';

        // Act
        const result = isOddOrEven(input);

        // Assert
        expect(result).to.equals('odd');
    });
    it('should return even when string length is even number long', () => {
        // Arrange
        const input = 'banana';

        // Act
        const result = isOddOrEven(input);

        // Assert
        expect(result).to.equals('even');
    });
});