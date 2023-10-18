import axios from "axios";

const apiUrl = "https://challenge.crossmint.io/api/";
const candidateId = "6f96f282-0dfe-4d1e-bdb6-7a77bac1d688";

export const APIGetPlanet = async () => {
  try {
    const response = await axios.get(`${apiUrl}map/${candidateId}/goal`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const APIcreatePolyanet = async (row: string, column: string) => {
  try {
    const response = await axios.post(
      `https://challenge.crossmint.io/api/polyanets`,
      {
        row,
        column,
        candidateId,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear el Polyanet:", error);
    throw error;
  }
};
