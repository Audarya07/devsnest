const initialForm = {
    name: "",
    email: ""
}

const formReducer = (state = initialForm, action) => {
    if(action.type === "UPDATE_NAME"){
        return {
            ...state,
            name: action.payload
        }
    }
    else if(action.type === "UPDATE_EMAIL"){
        return {
            ...state,
            email: action.payload
        }
    }
    return state;
}

export default formReducer;