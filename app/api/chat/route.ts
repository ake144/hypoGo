import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

     console.log(messages.map((message:any) => message.content).join('\n'));

    const completion = await groq.chat.completions.create({
      
      
      messages: [
        {
          role: 'user',
          content: messages.map((message:any) => message.content).join('\n'),
        },
      ],
      model: 'mixtral-8x7b-32768',
    });

    const responseContent = completion.choices[0]?.message?.content || '';
console.log(responseContent)
    return NextResponse.json({ content: responseContent });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
