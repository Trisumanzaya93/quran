import axios from "axios";

export const getAllSurat = () => {
    const URL = `https://equran.id/api/surat`;
    console.log(URL);
    return axios.get(URL);
  };

  export const getDetailSurat = (nomor) => {
    const URL = `https://equran.id/api/surat/${nomor}`;
    console.log(URL);
    return axios.get(URL);
  };