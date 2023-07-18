import { UserButton } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full">
        <aside className="h-full w-full max-w-xs border-r border-black/10">
          Mood
        </aside>
        <div className="flex flex-col w-full h-full">
          <header className="h-12 border-b border-black/10">
            <div className="h-full w-full px-6 flex items-center justify-end">
              <UserButton />
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
