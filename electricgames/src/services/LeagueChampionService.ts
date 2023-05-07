import { ResultType } from "@remix-run/router/dist/utils";
import axios from "axios";
import ILeagueChampion from "../interfaces/ILeagueChampions";
import ImageUploadService from "./ImageUploadService";

/**
 * LeagueChampionService
 *
 *
 */

const LeagueChampionService = (() => {
  const electricGamesApiEndpoints = {
    leagueChampionsEndpoints: "https://localhost:7259/LeagueChampion",
  };

  // Funksjon for å hente alle champions

  const getAllLeagueChampions = async () => {
    const result = await axios.get(
      electricGamesApiEndpoints.leagueChampionsEndpoints
    );
    // console.log(result.data);
    return result.data;
  };

  //Funksjon for å hente champion etter id

  const getLeagueChampionById = async (id: number) => {
    const result = await axios.get(
      `${electricGamesApiEndpoints.leagueChampionsEndpoints}/${id}`
    );
    return result.data;
  };

  //Funksjon for å hente champion etter navn
  const getLeagueChampionByName = async (name: string) => {
    const result = await axios.get(
      `${electricGamesApiEndpoints.leagueChampionsEndpoints}/Name/${name}`
    );
    return result.data;
  };

  //Funksjon for å hente champion etter origin
  const getLeagueChampionByOrigin = async (origin: string) => {
    const result = await axios.get(
      `${electricGamesApiEndpoints.leagueChampionsEndpoints}/Origin/${origin}`
    );
    return result.data;
  };

  //Funksjon for å hente champion etter releaseyear
  const getLeagueChampionByReleaseyear = async (releaseyear: number) => {
    const result = await axios.get(
      `${electricGamesApiEndpoints.leagueChampionsEndpoints}/ReleaseYear/${releaseyear}`
    );
    return result.data;
  };

  //Funksjon for å slette etter id
  const deleteChampionById = async (id: number) => {
    const result = await axios.delete(
      `${electricGamesApiEndpoints.leagueChampionsEndpoints}/${id}`
    );
    return result.data;
  };

  // Funksjon for å laste opp bilde
  const uploadChampionImage = async (file: File) => {
    const result = await ImageUploadService.uploadImage(file);
    return result;
  };

  //Funksjon for å lage en ny champion
  const createNewChampion = async (newChampion: ILeagueChampion) => {
    const result = await axios.post(
      electricGamesApiEndpoints.leagueChampionsEndpoints,
      newChampion
    );
    return result;
  };

  //Funksjon for å oppdatere en champion
  const updateChampion = async (updatedChampion: ILeagueChampion) => {
    const result = await axios.put(
      electricGamesApiEndpoints.leagueChampionsEndpoints,
      updatedChampion
    );
    return result;
  };

  // Returnerer alle funksjoner, så de kan brukes.
  return {
    getAllLeagueChampions,
    getLeagueChampionById,
    deleteChampionById,
    uploadChampionImage,
    createNewChampion,
    updateChampion,
    getLeagueChampionByName,
    getLeagueChampionByOrigin,
    getLeagueChampionByReleaseyear,
  };
})();

export default LeagueChampionService;
