import { SyntaxLanguage } from "../ComponentLanguage/SyntaxLanguage";

export interface SyntaxtComponentProps {
  title: string;
  description: string
  code: string
}

export const SyntaxtComponent = (item: SyntaxtComponentProps) => {
  return (
    <article className="pt-10">
      <header>
        <h1 className="h1-article text-3xl sm:text-4xl font-extrabold">
          {item.title}
        </h1>        
        <p className="template-p">
          {item.description}
        </p>
      </header>
      <SyntaxLanguage code={item.code} />
    </article>
  );
}