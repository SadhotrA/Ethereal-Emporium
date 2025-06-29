'use server';

import { 
  generateProductDescription as generateProductDescriptionFlow, 
  type GenerateProductDescriptionInput 
} from '@/ai/flows/generate-product-description';

export async function generateDescriptionAction(input: GenerateProductDescriptionInput) {
  // Add a fake delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  try {
    const result = await generateProductDescriptionFlow(input);
    return { success: true, description: result.generatedDescription };
  } catch (error) {
    console.error('AI description generation failed:', error);
    return { success: false, error: 'Failed to generate description. Please try again.' };
  }
}
