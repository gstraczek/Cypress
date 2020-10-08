class SummaryPage
{
    getProductsPrice()
    {
        return cy.get('tr td:nth-child(4)')
    }
    getTotalPrice()
    {
        return cy.get('#total_product.price')
    }
}
export default SummaryPage;