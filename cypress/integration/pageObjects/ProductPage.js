class HomePage
{
getProductsList()
{
    return cy.get('ul.product_list:visible').find('li.ajax_block_product')
}
getAddToCartButton()
{
    return cy.get('.ajax_add_to_cart_button')
}
getContinueButton()
{
    return cy.get('.continue')
}
getCartInfo()
{
    return cy.get('.ajax_cart_product_txt')
}
getCheckoutButton()
{
    return cy.get('.button-medium')
}
}

export default HomePage;