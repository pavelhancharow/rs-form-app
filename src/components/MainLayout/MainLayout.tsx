import { memo, ReactNode } from 'react';
import MainLayoutUI from './MainLayout.styles.ts';

interface MainLayoutProps {
  children: ReactNode;
  hasContent: boolean;
}

function MainLayout(props: MainLayoutProps) {
  return (
    <MainLayoutUI $content={props.hasContent}>
      <div>{props.children}</div>
    </MainLayoutUI>
  );
}

export default memo(MainLayout);
