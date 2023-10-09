"use server"

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'

export async function getUserById(params: any) {
  const { userId } = params;
  connectToDatabase()
  const user = await User.findOne({ clerkId: userId });
  return user;
}