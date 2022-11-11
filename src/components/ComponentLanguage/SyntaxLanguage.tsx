import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SyntaxLanguageProps {
  code: string
}

export const SyntaxLanguage = (props: SyntaxLanguageProps) => {

  const lineNum = 1;
  const showLineNum = true;
  
  return (
    <div className='shrink'>
      <SyntaxHighlighter language="typescript" style={oneDark}  
        startingLineNumber={lineNum}
        showLineNumbers={showLineNum}>
        {props.code}
      </SyntaxHighlighter>
    </div>    
  );
};