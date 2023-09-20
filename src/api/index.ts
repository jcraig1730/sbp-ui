import axios from "axios";
import {
  Album,
  CreateContact,
  CreateEventDto,
  CreateEventResponseDto,
  Photo,
  User,
} from "./dtoTypes";

const apiUrl = "http://localhost:3000/";

export const createAppointment = async (
  dto: CreateEventDto
): Promise<CreateEventResponseDto> => {
  const result = await axios.post(apiUrl + "schedule", dto, {
    withCredentials: true,
    headers: { Authorization: document.cookie },
  });
  return result.data;
};

export const verifyToken = async () => {
  const result = await axios.post(
    apiUrl + "auth/verify-token",
    {},
    { withCredentials: true, headers: { Authorization: document.cookie } }
  );
  return result.data as User;
};

export const authenticateMaster = async () => {
  return await axios.post(
    apiUrl + "auth/authenticate-master",
    {},
    {
      withCredentials: true,
      headers: { Authorization: document.cookie },
    }
  );
};

export const createAlbum = async (userId: string, name: string) => {
  const result = await axios.post(apiUrl + "users/" + userId + "/albums", {
    userId,
    name,
  });
  return result.data as Album;
};

export const uploadPhoto = async (albumId: string, formData: FormData) => {
  const result = await axios.post(
    apiUrl + "albums/" + albumId + "/photos",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return result.data as Photo;
};

export const createContact = async (data: CreateContact) => {
  const result = await axios.post(apiUrl + "email/contact-form", data);
  return result.status;
};
