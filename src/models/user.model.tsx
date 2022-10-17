export type UserT = {
  _id?: string;
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  grade?: string;
  section?: string;
  id_type: number;
  platforms?: {
    moodle: boolean;
    pfsense: boolean;
    myon: boolean;
    digibooks: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
};
