"use server"

import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import { GetTopInteractedTagsParams } from './shared.types';

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    await connectToDatabase();
    const { userId, limit } = params;
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Find interactions for the user and group by tags

    return ['tag1', 'tag2', 'tag3']
  } catch (error) {
    console.log(error);
    throw error;
  }
}