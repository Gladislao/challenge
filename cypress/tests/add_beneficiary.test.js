import {user1, user2, beneficiary} from "../fixtures/data"
import {Login} from "../actions/login"
import {RegisterBeneficiary} from "../actions/register_beneficiary";


const login = new Login();
const registerBeneficiary = new RegisterBeneficiary();

describe('Add beneficiary', () => {
    beforeEach(() => {
        cy.visit('https://devmalta.bitso.com/')
    })

    it.only('Verify beneficiary is added for user in Mexico', () => {
        login.signup(user1);

        cy.visit('https://devmalta.bitso.com/r/user/beneficiaries/add')
        registerBeneficiary.add_beneficiary(beneficiary)

        cy.get(".modal-content").should("contain", beneficiary.name + " " + beneficiary.lastName)
        cy.get(".modal-content").should("contain", beneficiary.kinship)
        cy.get(".modal-content").should("contain", beneficiary.percentage)
  })

    it('Verify beneficiary is added for user in Argentina', () => {
        login.signup(user2);

        cy.visit('https://devmalta.bitso.com/r/user/beneficiaries/add')
        registerBeneficiary.add_beneficiary(beneficiary)

        cy.get(".modal-content").should("contain", beneficiary.name + " " + beneficiary.lastName)
        cy.get(".modal-content").should("contain", beneficiary.kinship)
        cy.get(".modal-content").should("contain", beneficiary.percentage)
    })

})