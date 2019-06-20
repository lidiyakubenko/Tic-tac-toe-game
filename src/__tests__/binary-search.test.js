import {isContain} from '../../binary-search'

const numbers = [0,1,2,3,4,5,6,7,8,9,10]

const unSortedNumbers = [7,4,3,1,2,5,6,10,9,8,0]

test('check binary search with number 2', () => {
    expect(isContain(numbers, 2)).toBe(true);
});

test('check binary search with middle value', () => {
    expect(isContain(numbers, 5)).toBe(true);
});

test('check binary search with negative number', () => {
    expect(isContain(numbers, -2)).toBe(false);
});

test('check binary search win null', () => {
    expect(isContain(numbers, null)).toBe(false);
});

test('check binary search with 0', () => {
    expect(isContain(numbers, 0)).toBe(true);
});

test('check binary search on unsorted array', () => {
    expect(isContain(unSortedNumbers, 3)).toBe(true);
});

test('check binary search on unsorted array(2)', () => {
    expect(isContain(unSortedNumbers, 12)).toBe(false);
});