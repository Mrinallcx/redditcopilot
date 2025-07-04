import { wrapLanguageModel, customProvider, extractReasoningMiddleware } from 'ai';

import { openai } from '@ai-sdk/openai';
import { xai } from '@ai-sdk/xai';
import { groq } from '@ai-sdk/groq';
import { anthropic } from '@ai-sdk/anthropic';
import { google } from '@ai-sdk/google';
import { mistral } from '@ai-sdk/mistral';

const middleware = extractReasoningMiddleware({
  tagName: 'think',
});

export const scira = customProvider({
  languageModels: {
    'scira-default': xai('grok-3-mini'),
  },
});
