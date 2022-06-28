import { combineReducers } from "redux";
// menggabungkan semua reducer menjadi 1
import getAllSuratReducer from "./getAllSurat";
import getDetailSuratReducer from "./getDetailSurat";
import readReducer from "./read";


const reducers = combineReducers({
    getAllSurat : getAllSuratReducer,
    getDetailSurat : getDetailSuratReducer,
    read :readReducer
});

export default reducers;