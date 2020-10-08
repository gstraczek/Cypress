/// <reference types="cypress" />
describe('Test suite: add an item to the cart', () => {
    it('Visits website', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('#searchbox').type('dre')
        cy.get('.button-search').click()
        //check the amount of items
        cy.get('.ajax_block_product').should('have.length', 7)
        cy.get('.ajax_block_product').eq(2).find('.ajax_add_to_cart_button').click()
        //make sure it's in the cart
        cy.get('.layer_cart_product').should('contain.text', 'Product successfully added to your shopping cart')
        //get multiple products
        cy.get('ul.product_list:visible').find('li.ajax_block_product')
    })
})