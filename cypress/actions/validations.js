export class Validations {
    exceed_message(currency){  
            cy.findByText(currency).click();
            cy.get(".moon-arrow_deposit").click();
            cy.get(".modal-content").and("contain", "Oops! Something went wrong");
            cy.get(".modal-content").and("contain", "This transaction exceeds your limit. Increase your account limit to continue.");
            cy.contains("Oops! Something went wrong").type("{esc}");

        return this;
    }
}