
const updateName = (input) => {
    return {
        type: "UPDATE_NAME",
        payload: input
    };
};


const updateEmail = (input) => {
    return {
        type: "UPDATE_EMAIL",
        payload: input
    };
};

export { updateName, updateEmail};