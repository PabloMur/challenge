import { APIcreatePolyanet } from "@/lib/APICalls";

export const useCreatePlanets = () => {
  const start = 2;
  const end = 8;

  return async () => {
    await APIcreatePolyanet();
  };
};
