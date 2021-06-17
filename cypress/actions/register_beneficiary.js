export class RegisterBeneficiary {
    add_beneficiary(user){
        cy.findByLabelText("Name(s)").type(user.name)
        cy.findByLabelText("Last name").type(user.lastName)
        cy.findByLabelText("Birthdate").type(user.birthdate)
        cy.findByText("Kinship").click()
        cy.findByText(user.kinship).click()
        cy.findByRole("textbox", {name: "Benefit percentage"}).type(user.percentage)
        cy.findByRole("button", {name: "Add"}).click()
        
        return this;
    }
}