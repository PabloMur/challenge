import { APIcreatePolyanet } from "@/lib/APICalls";

export const useCreatePlanetsOne = () => {
  const faseOneRef = [2, 3, 4, 5, 6, 7, 8];

  function generateFirstLine(ref: number[]) {
    return ref.map(async (row, index) => {
      const col = ref[ref.length - 1 - index];
      await APIcreatePolyanet(row.toString(), col.toString());
      return { row, col };
    });
  }

  function generateSecondLine(ref: number[]) {
    return ref.map(async (row) => {
      const col = row;
      await APIcreatePolyanet(row.toString(), col.toString());
      return { row, col };
    });
  }

  generateFirstLine(faseOneRef);
  generateSecondLine(faseOneRef);
};
