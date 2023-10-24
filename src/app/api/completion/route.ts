import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { TRANSLATION_PROMPTS, TRANSLATION_TYPE } from '@/lib/constants';
 
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt, translateType } = await req.json();
  const content = TRANSLATION_PROMPTS[translateType as TRANSLATION_TYPE] + prompt;
  console.log(content);
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