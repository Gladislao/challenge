export class Login {
    signup(user){
     
        cy.get(".bitso-hamburger-menu").click();
        cy.findByText("Log in").click();
        cy.findByRole("textbox", { name: "Email or ID" }).type(user.email);
        cy.findByLabelText("Password").type(user.password);
        cy.findByRole("button", {name: "Log in"}).click();
            
      return this;
    }
}