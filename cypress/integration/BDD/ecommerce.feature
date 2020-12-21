Feature: End to end Ecommerce validation

    application Regression
    Scenario: Ecommerce checkout shopping list
    Given I open Ecommerce webpage
    When  I add products to the Cart
    And Proceeding to the checkout
    Then Validate the total prices in the checkout