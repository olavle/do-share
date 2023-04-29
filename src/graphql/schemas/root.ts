const root = `
    scalar Date

    type Query {
        users: [User!]!
    }

    type Mutation {
        # For adding a user
        addUser(user: UserInput!): User!
        # For patching a user
        patchUser(id: String! user: UserPatchInput!): User!
    }
`;

export default [root];
