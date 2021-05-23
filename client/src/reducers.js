export const actionTypes = {
    UPDATE_CHANNEL_LIST: "UPDATE_CHANNEL_LIST",
    UPDATE_MESSAGE_LIST: "UPDATE_MESSAGE_LIST",
    UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
};


const messageBoardReducerDefaultState = {
    channels: [],
    messages: [],
};

export const messageBoardReducer = (state = messageBoardReducerDefaultState, action) => {
    const { type } = action;
    swtich (type) {
        case actionTypes.UPDATE_CHANNEL_LIST:
            return {
                ...state,
                channels: action.payload,
            };
        case actionTypes.UPDATE_MESSAGE_LIST:
        return {
            ...state,
            messages: action.payload,
        };
        default: {
            return {
                ...state
            }
        }
    }
}

const commonDefaultState = {
    currentPage: ''
}

export const commonReducer = (state = commonDefaultState, action) => {
    const { type } = action;
    swtich(type) {
    case actionTypes.UPDATE_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.payload,
        };
    default: {
            return {
                ...state
            }
        }
    }
}