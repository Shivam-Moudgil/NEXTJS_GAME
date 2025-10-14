import { Document, model, models, Schema } from "mongoose";

export interface FreeEntrySchemaIn extends Document {
  userId: Schema.Types.ObjectId; // Reference to the User model
  name:string;
  phone:string;
  address:string;
  email:string;
  isWinner:boolean
}

const AmoeSchema = new Schema<FreeEntrySchemaIn>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    isWinner: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const AmoeModel =
  models.freeEntry || model<FreeEntrySchemaIn>("freeEntry", AmoeSchema);
export default AmoeModel;
