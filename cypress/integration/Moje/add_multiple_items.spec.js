/// <reference types="cypress" />
import ProductPage from '../pageObjects/ProductPage'
import SummaryPage from '../pageObjects/SummaryPage'
describe('Test suite: add an item to the cart', () => {
//use fixtures to organize data
    before(function(){
        cy.fixture('example').then((data) =>
        {
this.data=data
        })
    })
    it('Visits website', function()  {
        cy.visit(Cypress.env('url'))
        const productPage=new ProductPage()
        const summaryPage=new SummaryPage()
//get multiple products to the shopping list
        productPage.getProductsList().each(($el, index, $list) => {
            if($el.text().includes(this.data.productName))
            {
                let dress = 0;
                dress++
                productPage.getAddToCartButton().eq(index).click()
                productPage.getContinueButton().click()
                productPage.getCartInfo().then(function(element)
                {
                    const actualText=element.text()
                    if(dress > 1)
                    {
                        expect(actualText.includes(`There are ${dress} in your cart.`)).to.be.true
                    } else if (dress === 0)
                    { 
                        cy.log(dress)
                        expect(actualText.includes(`There is ${dress} in your cart.`)).to.be.true
                    } 
                    
                })
            }
        })
        //go to the checkout
        productPage.getCheckoutButton().click()
        //find price of every product on the list
        let sum = 0
        summaryPage.getProductsPrice().each(($el, index, $list) => {
            const amount = $el.text() 
            let res = amount.trim().slice(1,6)
            sum = Number(sum)+Number(res)
            sum = sum.toFixed(2)
            cy.log(sum)
        }).then(function(){

            cy.log(sum)
        })
        summaryPage.getTotalPrice().then(function(element)
        {
            const elTrim = element.text().slice(1)
            cy.log(elTrim)
            cy.expect(sum).to.equal(elTrim)
        })
    })
})