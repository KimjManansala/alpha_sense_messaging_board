import { configureStore  } from "@reduxjs/toolkit";
import {commonReducer, messageBoardReducer} from "./reducers";

export  default configureStore({
    reducer: {
        messageBoard: messageBoardReducer,
        common: commonReducer,
    },
})