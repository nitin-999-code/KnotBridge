import { Model, Types } from "mongoose";
import { Patient as IPatient, Doctor as IDoctor } from "@prisma/client";

export interface IPayment {
    patient: Types.ObjectId | IPatient;
    doctor?: Types.ObjectId | IDoctor;
    transactionId?:string;
    orderId?:string;
    paymentMethod:"ONLINE" | "OFFLINE";
    amount: string;
}
export type IPaymentModel = Model<IPayment, {}>;