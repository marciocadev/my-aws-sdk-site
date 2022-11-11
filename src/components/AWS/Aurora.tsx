import { SyntaxtComponent } from "../ComponentLanguage/SyntextComponent";

export const Aurora = () => {
  const title = 'Amazon Aurora';

  const description = 'Template com um código básico do para inserir dados no Amazon Aurora';

  const code = `import 'source-map-support/register';
import { RDSDataClient, ExecuteStatementCommand, ExecuteStatementCommandInput } from '@aws-sdk/client-rds-data';
import { v4 as uuidv4 } from 'uuid';

const client = new RDSDataClient({ region: process.env.AWS_REGION });
  
export const handler = async(event: any) => {

  const { username, password, email } = JSON.parse(event);
  const dt = Date.now() / 1000;

  const insert = 'INSERT INTO accounts '
      + '(user_id, username, password, email, created_on) '
      + 'VALUES (:id, :user, :pw, :email, TO_TIMESTAMP(:dt))';

  const input: ExecuteStatementCommandInput = {
    resourceArn: process.env.CLUSTER_ARN,
    secretArn: process.env.SECRET_ARN,
    database: process.env.DB_NAME,
    sql: insert,
    parameters: [
      { name: 'id', typeHint: 'UUID', value: { stringValue: uuidv4() } },
      { name: 'user', value: { stringValue: username } },
      { name: 'pw', value: { stringValue: password } },
      { name: 'email', value: { stringValue: email } },
      { name: 'dt', value: { longValue: dt } },
    ],
  };

  await client.send(new ExecuteStatementCommand(param));
};`

  return <SyntaxtComponent code={code} title={title} description={description}/>;
}