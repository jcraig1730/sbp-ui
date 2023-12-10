import axios from "axios";
import {
  Album,
  CreateContact,
  CreateEventDto,
  CreateEventResponseDto,
  Photo,
  User,
} from "./dtoTypes";
import { getApiUrl } from "@/utils";

const apiUrl = getApiUrl();

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
  const result = await axios.post(
    apiUrl + "users/" + userId + "/albums",
    {
      userId,
      name,
    },
    { withCredentials: true, headers: { Authorization: document.cookie } }
  );
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

export const uploadPhotos = async (albumId: string, formData: FormData) => {
  const result = await axios.post(
    apiUrl + "albums/" + albumId + "/photos",
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: document.cookie,
      },
    }
  );
  return result.data as Photo[];
};

export const createContact = async (data: CreateContact) => {
  const result = await axios.post(apiUrl + "email/contact-form", data);
  return result.status;
};

export const getPaymentIntent = (description: string) => {
  return axios.post(
    apiUrl + "payments",
    {
      description,
    },
    { withCredentials: true, headers: { Authorization: document.cookie } }
  );
};

export const updatePaymentIntent = async (
  description: string,
  intentId: string
) => {
  return await axios.put(
    apiUrl + "payments/update-intent?id=" + intentId,
    {
      description,
    },
    { withCredentials: true, headers: { Authorization: document.cookie } }
  );
};

export const getUsers = () =>
  axios.get(apiUrl + "users/test-route", {
    withCredentials: true,
    headers: { Authorization: document.cookie },
  });

export const confirmEmail = (
  username: string,
  password: string,
  token: string
) =>
  axios.post(
    apiUrl + "auth/confirm-email?token=" + token,
    {
      username,
      password,
      confirmationCode: token,
    },
    {
      withCredentials: true,
      headers: { Authorization: document.cookie },
    }
  );

export const loginUser = (username: string, password: string) =>
  axios.post(
    apiUrl + "auth/login",
    {
      username,
      password,
    },
    {
      withCredentials: true,
      headers: { Authorization: document.cookie },
    }
  );

export const registerUser = (data: {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
  };
}) => axios.post(apiUrl + "auth/register", data);

export const initiateForgotPassword = (email: string) => {
  return axios.post(apiUrl + "auth/forgot-password?email=" + email);
};

export const updatePassword = (
  confirmationCode: string,
  email: string,
  newPassword: string
) => {
  return axios.patch(
    apiUrl + "auth/update-password?token=" + confirmationCode,
    { email, newPassword }
  );
};

export const getOpenTimeslots = () => axios.get(apiUrl + "schedule/timeslots");
