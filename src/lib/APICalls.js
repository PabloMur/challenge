const apiUrl = "https://challenge.crossmint.io/api/";
const candidateId = "6f96f282-0dfe-4d1e-bdb6-7a77bac1d688";

const APIGetPlanet = async () => {
  try {
    const response = await fetch(`${apiUrl}map/${candidateId}/goal`);
    if (!response.ok) {
      throw new Error("Error fetching the planet");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const APIcreatePolyanet = async (row, column) => {
  try {
    const requestBody = {
      row,
      column,
      candidateId,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const requestConfig = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(`${apiUrl}polyanets`, requestConfig);

    if (!response.ok) {
      throw new Error("Error creating the Polyanet");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the Polyanet:", error);
  }
};

const APIDeletePolyanet = async (row, column) => {
  try {
    const response = await fetch(`${apiUrl}polyanets`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ row, column, candidateId }),
    });
    if (!response.ok) {
      throw new Error("Error deleting the Polyanet");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting the Polyanet:", error);
  }
};

const APIcreateSoloons = async (row, column, color) => {
  try {
    const requestBody = {
      row,
      column,
      color,
      candidateId,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const requestConfig = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(`${apiUrl}soloons`, requestConfig);

    if (!response.ok) {
      throw new Error("Error creating the Soloons");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the Soloons:", error);
  }
};

const APIDeleteSoloons = async (row, column) => {
  try {
    const response = await fetch(`${apiUrl}soloons`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ row, column, candidateId }),
    });
    if (!response.ok) {
      throw new Error("Error deleting the Soloons");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting the Soloons:", error);
  }
};

const APIcreateComeths = async (row, column, direction) => {
  try {
    const requestBody = {
      row,
      column,
      direction,
      candidateId,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const requestConfig = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(`${apiUrl}comeths`, requestConfig);

    if (!response.ok) {
      throw new Error("Error creating the Comeths");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating the Comeths:", error);
  }
};

const APIDeleteComeths = async (row, column) => {
  try {
    const response = await fetch(`${apiUrl}comeths`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ row, column, candidateId }),
    });
    if (!response.ok) {
      throw new Error("Error deleting the Cometh");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting the Cometh:", error);
  }
};

export {
  APIGetPlanet,
  APIcreatePolyanet,
  APIDeletePolyanet,
  APIcreateSoloons,
  APIDeleteSoloons,
  APIcreateComeths,
  APIDeleteComeths,
};
