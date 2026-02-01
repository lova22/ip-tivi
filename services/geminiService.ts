
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getPlanRecommendation(userQuery: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userQuery,
    config: {
      systemInstruction: `You are a helpful sales assistant for IPTVAGIL. 
      We offer 3 plans: Standard (Affordable, FHD), VIP Elite (Best value, 4K, VPN included, Priority support), and Ultimate (Maximum content, True 4K, Premium VPN, VIP Manager).
      Your goal is to suggest the best plan based on the user's preferences (devices, content, quality).
      Be professional, concise, and persuasive. Translate your answer to German as the website is in German.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendedPlan: { type: Type.STRING, description: 'The ID of the plan (standard, vip-elite, ultimate)' },
          reasoning: { type: Type.STRING, description: 'Explanation in German why this plan fits the user' },
          followUp: { type: Type.STRING, description: 'A short call to action in German' }
        },
        required: ['recommendedPlan', 'reasoning', 'followUp']
      }
    }
  });

  return JSON.parse(response.text);
}
