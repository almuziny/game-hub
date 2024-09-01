import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/ScreenShot";
import APIClient from "../services/api-client";

const useScreenshots = (gameId: number) => {
  const apiClinent = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClinent.getAll,
  });
};

export default useScreenshots;
