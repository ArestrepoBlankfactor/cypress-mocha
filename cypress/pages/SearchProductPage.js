class SearchProductPage {
    
    elements={
        productImage : () => cy.get('.product_img_link > .replace-2x'),
        quickViewBtn : () => cy.get('.quick-view')
    }
    /**
     * Open a quick view of the product doing hover over image product 
     * and clicking on to open the Iframe
     */
    quickViewProduct(){
        this.elements.productImage().trigger('mouseover').should('be.visible');
        this.elements.quickViewBtn().click();
    }
}



export default SearchProductPage;





