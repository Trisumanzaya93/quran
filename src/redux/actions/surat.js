import { ACTION_STRING } from "./actionString";
import { getAllSurat, getDetailSurat } from "../../utils/quran";

export const getAllSuratAction = (body) => {
    return {
      type: ACTION_STRING.getAllSurat,
      payload: getAllSurat(),
    };
  };
  export const getDetailSuratAction = (nomor) => {
    return {
      type: ACTION_STRING.getDetailSurat,
      payload: getDetailSurat(nomor),
    };
  };

  export const readAction = (payload) => {
    return {
      type: ACTION_STRING.read,
      payload,
    };
  };