"use server";

import { connectToDatabase } from '../mongoose';

export async function createQuestion(params) {
  try {
    await connectToDatabase();
  } catch (error) {

  }
}