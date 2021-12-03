const bbirong = {
    name: "Bbirong",
    age: 29,
    gender: "male"
};

const resolvers = {
    Query: {
        person:() => bbirong
    }
};

export default resolvers;