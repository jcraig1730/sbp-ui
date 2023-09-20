export interface CreateEventDto {
  start: string;
  type: "standard" | "infant" | "wedding";
  summary: "package 1" | "package 2" | "package 3" | "lifestyle/newborn";
}

export type PackageTypes =
  | "package 1"
  | "package 2"
  | "package 3"
  | "lifestyle/newborn";

export interface CreateEventResponseDto {
  start: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  hash: string;
  salt: string;
  emailConfirmed?: boolean;
  confirmationCode?: string;
  profile?: Profile;
  stripeId: string;
  appointments: Appointment[];
  albums: Album[];
}

export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  street: string;
  state: string;
  city: string;
  zip: string;
}

export interface Appointment {
  id: string;
  userId: string;
  user?: User;
  paid: boolean;
  startTime: string;
  type: "package 1" | "package 2" | "package 3" | "lifestyle/newborn";
}

export interface Album {
  id: string;
  userId: string;
  photos: Photo[];
  name: string;
}

export interface Photo {
  id: string;
  name: string;
  url: string;
}

export interface CreateContact {
  email: string;
  name: string;
  subject: string;
  text: string;
}
