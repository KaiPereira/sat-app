import { Configuration, OpenAIApi } from "openai";

export class OpenAIWrapper {
    public openai: OpenAIApi;

    constructor(apiKey: string) {
        const configuration = new Configuration({
            apiKey,
        });

        this.openai = new OpenAIApi(configuration);
    }

    public async generate(prompt: string, maxTokens: number) {
        const response = await this.openai.createCompletion({
            model: "text-davinci-002",
            prompt,
            max_tokens: maxTokens,
        });

        return response.data.choices[0].text;
    }
}
