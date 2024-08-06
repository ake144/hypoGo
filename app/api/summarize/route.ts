import { NextApiRequest, NextApiResponse } from 'next';
import { generateText, tool } from 'ai';
import * as mathjs from 'mathjs';
import { z } from 'zod';
import { createOpenAI as createGroq } from '@ai-sdk/openai';
import { NextResponse } from 'next/server';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

const toolsConfig = {
  math: tool({
    description: "A tool for evaluating mathematical expressions. Example expressions: '1.2 * (2 + 4.5)', '12.7 cm to inch', 'sin(45 deg) ^ 2'.",
    parameters: z.object({ expression: z.string() }),
    execute: async ({ expression }) => {
      try {
        return mathjs.evaluate(expression);
      } catch (error:any) {
        return `Error evaluating expression: ${error.message}`;
      }
    },
  }),
  physics: tool({
    description: "A tool for solving physics problems. Example expressions: 'force = mass * acceleration', 'velocity = distance / time', 'E = mc^2'.",
    parameters: z.object({ expression: z.string() }),
    execute: async ({ expression }) => {
      try {
        return mathjs.evaluate(expression);
      } catch (error:any) {
        return `Error evaluating expression: ${error.message}`;
      }
    },
  }),
  chemistry: tool({
    description: "A tool for solving chemistry problems. Example expressions: 'moles = mass / molar_mass', 'PV = nRT', 'molarity = moles / volume'.",
    parameters: z.object({ expression: z.string() }),
    execute: async ({ expression }) => {
      try {
        return mathjs.evaluate(expression);
      } catch (error:any) {
        return `Error evaluating expression: ${error.message}`;
      }
    },
  }),
  economics: tool({
    description: "A tool for solving economics problems. Example expressions: 'GDP = C + I + G + (X - M)', 'elasticity = % change in quantity / % change in price', 'profit = total revenue - total cost'.",
    parameters: z.object({ expression: z.string() }),
    execute: async ({ expression }) => {
      try {
        return mathjs.evaluate(expression);
      } catch (error:any) {
        return `Error evaluating expression: ${error.message}`;
      }
    },
  }),
};

type Subject = keyof typeof toolsConfig;

export async function POST(req: Request) {
  const { problem, subject }: { problem: string, subject: Subject } = await req.json();

  console.log(`PROBLEM: ${problem}`);
  console.log(`SUBJECT: ${subject}`);

  try {
    const { text: answer } = await generateText({
      model: groq('llama3-8b-8192'),
      system: `You are solving ${subject} problems. Reason step by step. Use the calculator when necessary. When you give the final answer, provide an explanation for how you arrived at it.`,
      prompt: problem,
      tools: { calculate: toolsConfig[subject] },
      maxToolRoundtrips: 10,
    });

    

    console.log(`ANSWER: ${answer}`);

    return NextResponse.json({ answer }, { status: 200 });
  } catch (error) {
    console.error('Error generating answer:', error);
    return NextResponse.json({ error: 'Error generating answer' }, { status: 500 });
  }
}
