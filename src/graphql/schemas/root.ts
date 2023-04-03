const root = `
    type Query {
        users: [User!]!
    }

    type Mutation {
        addUser(user: UserInput!): User!
    }
`;

export default [root];
