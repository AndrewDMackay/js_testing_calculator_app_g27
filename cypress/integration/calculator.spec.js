
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })


  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })


  it('should update the display if number buttons are clicked', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '123');
  })


  it('should update the display with the result of an arithmetical operation', () => {
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
  })


  it('should be able to chain together multiple operations', () => {
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5');
  })


  it('should be ablt to chain together multiple operations for a range of numbers, positive, negative, decimals and very large numbers)', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4993.9');
  })

})


// UI Integration Tests..

// You need to write front-end integration tests to ensure the Calculator model.. 
// And, browser UI are working to meet the user requirements. The framework provided to do this is Cypress.. 
// There is one sample test written in `/cypress/integration/App.spec.js` and you should continue writing your tests in this file..

// You should write tests to ensure the following requirements are met..

// Do the number buttons update the display of the running total?

// Do the arithmetical operations update the display with the result of the operation?

// Can multiple operations be chained together?

// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?

// What does the code do in exceptional circumstances? Specifically, if you divide by zero..

// What is the effect? Write a test to describe what you'd prefer to happen..
 
// And then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement)..

