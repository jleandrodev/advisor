import { TitleStyled } from "./Title.style";

interface PageTitleProps {
  title: string | JSX.Element;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
    </>
  );
};

export default PageTitle;
