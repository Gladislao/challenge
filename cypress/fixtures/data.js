import faker from "faker";

const user1 = {
    email: "gcuzcanor+2@gmail.com",
    password: "Accept12@"
}

const user2 = {
    email:"gcuzcanor+4@gmail.com",
    password: "Accept23#"
}

const beneficiary = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthdate: "10/12/1990",
    kinship: "Relative",
    percentage: "50"
}

export default {user1, user2, beneficiary}