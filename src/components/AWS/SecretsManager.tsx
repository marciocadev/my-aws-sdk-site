import { SyntaxtComponent } from "../ComponentLanguage/SyntextComponent";

export const SecretsManager = () => {
  const title = 'AWS Secrets Manager';

  const description = 'Template com um código básico de como recuperar dados do AWS Secrets Manager';

  const code = `import 'source-map-support/register';
import { SecretsManagerClient, GetSecretValueCommand, GetSecretValueCommandInput } from '@aws-sdk/client-secrets-manager';
  
const client = new SecretsManagerClient({ region: process.env.AWS_REGION });
  
export const handler = async() => {

  const input: GetSecretValueCommandInput = {
    SecretId: process.env.SECRET_MANAGER_ID,
  };

  const response = await client.send(new GetSecretValueCommand(input));
  console.log(JSON.parse(response.SecretString!));
};`

  return <SyntaxtComponent code={code} title={title} description={description}/>;
}