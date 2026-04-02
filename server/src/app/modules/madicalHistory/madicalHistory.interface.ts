import { Model, Types } from "mongoose";
import { Patient as IPatient, Doctor as IDoctor } from "@prisma/client";

export interface IMadicalHistory {
    patient: Types.ObjectId | IPatient;
    doctor?: Types.ObjectId | IDoctor;
    appointementedDate?:string;
    patientCondion?:string;
    describeProblem?:string;
    diagnosis?:string;
    disease?:string;
}
export type IMadicalHistoryModel = Model<IMadicalHistory, {}>;