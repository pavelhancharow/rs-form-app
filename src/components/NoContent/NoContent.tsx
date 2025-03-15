import NoContentUI from './NoContent.styles.ts';

interface NoContentProps {
  message: string;
}

function NoContent(props: NoContentProps) {
  return <NoContentUI>{props.message}</NoContentUI>;
}

export default NoContent;
