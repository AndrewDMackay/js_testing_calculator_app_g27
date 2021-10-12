
import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })


  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })


  it('should add 1 to 4, and get 5', () => {
    const button1 = container.find('#number1');
    const buttonAdd = container.find('#operator-add');
    const button4 = container.find('#number4');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })


  it('should subtract 4 from 7, and get 3', () => {
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const button7 = container.find('#number7');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })


  it('should multiply 3 by 5, and get 15', () => {
    const button3 = container.find('#number3');
    const buttonMultiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })


  it('should divide 21 by 7, and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const buttonDivide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })


  it('should concatenate multiple number button clicks', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('123');
  })


  it('should chain multiple operations together', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const buttonAdd = container.find('#operator-add');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonMultiply.simulate('click');
    button2.simulate('click');
    buttonAdd.simulate('click');
    button3.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
})
  

// Unit Tests..

// You need to test the Calculator model using the React testing library..

// Write your tests in src/tests/Calculator.test.js..

// Test the following functions perform the following tasks..

// calculator.add() - add 1 to 4 and get 5..
// calculator.subtract() subtract 4 from 7 and get 3..
// calculator.multiply() - multiply 3 by 5 and get 15..
// calculator.divide() - divide 21 by 7 and get 3..
// calculator.numberClick() - concatenate multiple number button clicks..
// calculator.operatorClick() - chain multiple operations together..

