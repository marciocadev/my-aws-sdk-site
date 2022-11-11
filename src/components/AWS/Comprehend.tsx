import { SyntaxtComponent } from "../ComponentLanguage/SyntextComponent";

export const Comprehend = () => {
  const title = 'Amazon Comprehend';

  const description = 'Template com um código básico de como detectar linguagens de um texto com o Amazon Comprehend';

  const code = `import 'source-map-support/register';
import { ComprehendClient, DetectDominantLanguageCommand,
    DetectDominantLanguageCommandInput,
    DetectDominantLanguageCommandOutput} from '@aws-sdk/client-comprehend';
  
const client = new ComprehendClient({ region: process.env.AWS_REGION });
  
export const handler = async(event: any) => {

  const { text } = event;

  const input :DetectDominantLanguageCommandInput = { Text: text };

  const command = new DetectDominantLanguageCommand(params);
  const response = await client.send(command);
  
  return {
    message: text,
    language: response.Languages
  }
};`

  return <SyntaxtComponent code={code} title={title} description={description}/>;
}