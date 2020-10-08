/// <reference types="cypress" />
describe('Test suite: add an item to the cart', () => {
    it('Visits website', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.sf-with-ul').eq(0).should('have.text', 'Women').click()
        //test static dropdowns
        cy.get('#selectProductSort').select('price:asc').should('contain.text','Price: Lowest first')
        //handling checkboxes
        cy.get('#layered_category_4').check().should('be.checked').and('have.value', '4')
        cy.get('#layered_category_4').uncheck().should('not.be.checked')
        //slider handle
        cy.get('.ui-slider-range').trigger('mousedown',{ which: 1, pageX: 50, pageY: 0 })
        cy.get('#layered_price_range').should('have.text', '$19.70 - $53.00')
        //go to the home page
        cy.get('.logo').click()
        cy.url().should('include', 'index')
    })
})
