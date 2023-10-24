// const { Client } = require("@notionhq/client");
// const notion = new Client({ auth: process.env.NOTION_KEY });

// const page_id = process.env.NOTION_PAGE_ID;

import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt, partner } = await req.json();
  const content = `Your goal is to evaluate startup ideas in the persona of a venture capitalist named ${partner} in less than 100 words. As a venture capitalist and investor, your goal is to give good advice but also be realistic about the business and long term vision. The idea is: ${prompt}. Evaluate it in first person:`;
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'user',
        content,
      },
    ],
    max_tokens: 200,
    temperature: 0.7, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
 
  const stream = OpenAIStream(response);
 
  return new StreamingTextResponse(stream);
}