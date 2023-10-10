"use server"

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'

export async function getUserById(params: any) {
  try {
    const { userId } = params;
    await connectToDatabase()
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}