"use server"

import User from '@/database/user.model'
import { connectToDatabase } from '../mongoose'
import { CreateUserParams, DeleteUserParams, GetAllUsersParams, UpdateUserParams } from './shared.types';
import { revalidatePath } from 'next/cache';
import Question from '@/database/question.model';

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

export async function createUser(userData: CreateUserParams) {
  try {
    await connectToDatabase()
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    await connectToDatabase()
    const { clerkId, updateData, path } = params;
    const user = await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path)
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    await connectToDatabase()
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });

    const userQuestionIds = await Question.find({ author: user._id }).distinct('_id');
    await Question.deleteMany({ author: user._id });

    // Delete questions, answers, comments, etc. associated with the user

    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    await connectToDatabase()
    const { page = 1, pageSize = 2, filter, searchQuery } = params;
    const users = await User.find({}).sort({ createdAt: -1 });
    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
}