import {user1, user2} from "../fixtures/data"
import {Login} from "../actions/login"
import {Validations} from "../actions/validations"

const login = new Login();
const validations = new Validations();

describe('Verify warning message', () => {
  beforeEach(() => {
    cy.visit('https://devmalta.bitso.com/')
  })
  //Users needs to be verify manually before these tests are run
  it('Displays warning message for exceeding limit for mexican user', () => {
    login.signup(user1);
    
    validations.exceed_message("btc");
    validations.exceed_message("eth");
    validations.exceed_message("bch");
    validations.exceed_message("ltc");  
  })

  it('Displays warning message for exceeding limit for argentinian user', () => {
    login.signup(user2);

    validations.exceed_message("btc");
    validations.exceed_message("eth");
    validations.exceed_message("bch");
    validations.exceed_message("ltc");   
    
  })

})