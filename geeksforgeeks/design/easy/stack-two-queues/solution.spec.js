import { QueueStack, Queue } from "./solution.js";

describe('test name', () => {
  it('test 1', () => {
    // Arrange // Act
    const stack = new QueueStack();
    stack.push(2);
    stack.push(3);
    // Assert
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    stack.push(4);
    // Assert
    expect(stack.pop()).toEqual(4);
  });
  it('test 2', () => {
    // Arrange // Act
    const stack = new QueueStack();
    stack.push(2);
    // Assert
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(-1);
    stack.push(4);
  });
  it('test 3', () => {
    // Arrange // Act
    const stack = new QueueStack();
    stack.push(78);
    expect(stack.pop()).toEqual(78);
    expect(stack.pop()).toEqual(-1);
    expect(stack.pop()).toEqual(-1);
    stack.push(93);
    expect(stack.pop()).toEqual(93);
    expect(stack.pop()).toEqual(-1);
    stack.push(28);
    stack.push(60);
    expect(stack.pop()).toEqual(60);
    stack.push(41);
    stack.push(73);
    stack.push(12);
    stack.push(68);
    expect(stack.pop()).toEqual(68);
    stack.push(31);
    stack.push(24);
    expect(stack.pop()).toEqual(24);
    expect(stack.pop()).toEqual(31);
    expect(stack.pop()).toEqual(12);
    stack.push(23);
    stack.push(70);
    expect(stack.pop()).toEqual(70);
    expect(stack.pop()).toEqual(23);
    stack.push(12);
    stack.push(30);
    expect(stack.pop()).toEqual(30);
    expect(stack.pop()).toEqual(12);
    expect(stack.pop()).toEqual(73);
    stack.push(38);
    stack.push(25);
    expect(stack.pop()).toEqual(25);
    stack.push(14);
    stack.push(92);
    stack.push(57);
    expect(stack.pop()).toEqual(57);
    stack.push(71);
    stack.push(82);
    expect(stack.pop()).toEqual(82);
    expect(stack.pop()).toEqual(71);
    stack.push(28);
    stack.push(6);
    stack.push(30);
    expect(stack.pop()).toEqual(30);
    expect(stack.pop()).toEqual(6);
    stack.push(96);
    stack.push(46);
    stack.push(68);
    stack.push(65);
    expect(stack.pop()).toEqual(65);
    stack.push(88);
    stack.push(77);
    stack.push(89);
    stack.push(4);
    expect(stack.pop()).toEqual(4);
    stack.push(100);
    stack.push(61);
    stack.push(69);
    expect(stack.pop()).toEqual(69);
    stack.push(27);
    stack.push(95);
    expect(stack.pop()).toEqual(95);
    expect(stack.pop()).toEqual(27);
    stack.push(35);
    stack.push(68);
    expect(stack.pop()).toEqual(68);
    expect(stack.pop()).toEqual(35);
    stack.push(18);
    stack.push(53);
    stack.push(2);
    stack.push(87);
    expect(stack.pop()).toEqual(87);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(53);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toEqual(30);
    expect(stack.pop()).toEqual(20);
    expect(stack.pop()).toEqual(18);
    expect(stack.pop()).toEqual(61);
    expect(stack.pop()).toEqual(100);
    expect(stack.pop()).toEqual(89);
    expect(stack.pop()).toEqual(77);
    expect(stack.pop()).toEqual(88);
  });
});
