import { useSelector } from "react-redux";

const initalState = {
    clients: []
};




const clientsReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case 'CLIENTS':
            return { ...state, clients: payload }

        default:
            return state;
    };
};

export default clientsReducer;