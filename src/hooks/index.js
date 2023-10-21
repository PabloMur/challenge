import { APIcreatePolyanet, APIcreateComeths } from "@/lib/APICalls";

export const useCreatePlanetsPhaseOne = () => {
  const faseOneRef = [2, 3, 4, 5, 6, 7, 8];

  function generateFirstLine(ref) {
    return ref.map(async (row, index) => {
      const col = ref[ref.length - 1 - index];
      await APIcreatePolyanet(row.toString(), col.toString());
      return { row, col };
    });
  }

  function generateSecondLine(ref) {
    return ref.map(async (row) => {
      const col = row;
      await APIcreatePolyanet(row.toString(), col.toString());
      return { row, col };
    });
  }

  generateFirstLine(faseOneRef);
  generateSecondLine(faseOneRef);
};

export const useCreatePlanetsPhaseTwo = async () => {
  const processMatrix = async () => {
    try {
      const planetData = await APIGetPlanet();

      if (!planetData || !planetData.goal) {
        console.error("cant finde goal map");
        return;
      }

      const matrix = planetData.goal;

      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          const element = matrix[row][col];

          if (element === "POLYANET") {
            await APIcreatePolyanet(row, col);
          } else if (element === "RIGHT_COMETH") {
            await APIcreateComeths(row, col, "right");
          } else if (element === "UP_COMETH") {
            await APIcreateComeths(row, col, "up");
          } else if (element === "LEFT_COMETH") {
            await APIcreateComeths(row, col, "left");
          } else if (element === "DOWN_COMETH") {
            await APIcreateComeths(row, col, "down");
          } else if (element === "BLUE_SOLOON") {
            await APIcreateSoloons(row, col, "blue");
          } else if (element === "PURPLE_SOLOON") {
            await APIcreateSoloons(row, col, "purple");
          } else if (element === "RED_SOLOON") {
            await APIcreateSoloons(row, col, "red");
          } else if (element === "WHITE_SOLOON") {
            await APIcreateSoloons(row, col, "white");
          }
        }
      }
    } catch (error) {
      console.error("Error al procesar la matriz:", error);
    }
  };

  processMatrix();
};
