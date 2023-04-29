const user = `
    type UserProfile {
        firstName: String!
        lastName: String!
        email: String!
    }

    type User {
        _id: String!
        profile: UserProfile!
    }

    input ProfileInput {
        firstName: String!
        lastName: String!
        email: String!
    }

    input UserInput {
        profile: ProfileInput!
    }

    input ProfilePatchInput {
        firstName: String
        lastName: String
    }

    input UserPatchInput {
        profile: ProfilePatchInput
    }
`;

export default [user];
