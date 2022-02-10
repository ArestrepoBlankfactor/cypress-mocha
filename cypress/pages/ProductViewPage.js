/// <reference types="cypress" />

import { addToCartTexts } from "../constants/addToCart";

class ProductViewPage {
  elements = {
    iframeViewProduct: () => "[id^=fancybox-frame]",
    productsQuantityInput: () => "#quantity_wanted_p > input",
    sizeProductSelect: () => "#group_1",
    colorProductList: () => "#color_to_pick_list",
    addToCartBtn: () => "#add_to_cart > button",
    addtoCartResultTitle: () => ".layer_cart_product > h2",
    addtoCartResultInfoText: () => ".layer_cart_product_info",
    checkoutBtn: () => "a > span:contains(Proceed to checkout)",
  };

  /**
   * Add product searched to cart, customizing the order with color,
   * size, quantity
   * @param {object} productOrderDetail
   */
  addCardProductDetails(productOrderDetail) {
    cy.switchToIframeProductView()
      .find(this.elements.productsQuantityInput())
      .clear()
      .type(productOrderDetail.quantity);

    cy.switchToIframeProductView()
      .find(this.elements.sizeProductSelect())
      .select(productOrderDetail.size);

    cy.switchToIframeProductView()
      .find(this.elements.colorProductList())
      .find(`li > a[name=${productOrderDetail.color}]`)
      .click();

    cy.switchToIframeProductView().find(this.elements.addToCartBtn()).click();
  }

  /**
   * validate successful result adding product to cart
   */
  isAddedSuccessfully() {
    cy.get(this.elements.addtoCartResultTitle())
      .should("be.visible")
      .and("contain", addToCartTexts.PRODUCT_ADDED);
    cy.log("result was successfully added to cart");
  }
}

export default ProductViewPage;
