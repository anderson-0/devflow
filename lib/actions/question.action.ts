"use server";

import Question from '@/database/question.model';
import { connectToDatabase } from '../mongoose';
import Tag from '@/database/tag.model';

export async function createQuestion(params) {
  try {
    await connectToDatabase();
    const { title, content, tags, author, path } = params;

    // Create the question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments: any[] = []

    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    // Add the tags to the question
    await Question.findByIdAndUpdate(question._id, { $push: { tags: { $each: tagDocuments } } });

    // Create an interaction record for the user's ask_question action

    // Increment the user author's reputation by +5 for creation a question
  } catch (error) {
    console.log(error);
  }
}