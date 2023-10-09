import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved?: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  picture: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  portfolioWebsite: {
    type: String,
  },
  reputation: {
    type: Number,
    default: 0, // You can set a default value if needed
  },
  saved: [{
    type: Schema.Types.ObjectId,
    ref: 'SomeModel', // Replace 'SomeModel' with the appropriate reference model's name if you're referencing other documents
  }],
  joinedAt: {
    type: Date,
    required: true,
    default: Date.now, // You can set a default value to the current date
  },
});

const User = models.Question || model<IUser>('User', UserSchema);
export default User;