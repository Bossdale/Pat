
import { GoogleGenAI, Type } from "@google/genai";
import { LoveLetterParams } from "../types";

export const generateLoveLetter = async (params: LoveLetterParams): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Write a beautiful, deeply romantic, and creative "Will You Be My Valentine?" love letter or poem.
  From: ${params.myName}
  To: ${params.partnerName}
  Tone: ${params.vibe} (romantic, funny, poetic, or sweet)
  Key memory to include: "${params.favoriteMemory}"
  
  Make it feel personal and heartfelt. Use vivid imagery. Keep it to about 150-200 words.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.9,
        topP: 0.95,
      }
    });

    return response.text || "I love you more than words can say. Happy Valentine's Day!";
  } catch (error) {
    console.error("Error generating love letter:", error);
    return "Roses are red, violets are blue, I wanted to write something sweet, but I'm just lost in you! Will you be my Valentine?";
  }
};
