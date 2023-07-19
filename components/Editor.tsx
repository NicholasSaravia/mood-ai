'use client';
import { updateEntry } from '@/utils/entry-api';
import { JournalEntry } from '@prisma/client';
import { useEffect, useState } from 'react';

export const Editor = ({ entry }: { entry: JournalEntry }) => {
  const [value, setValue] = useState<string>(entry.content);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (value !== entry.content) {
        await updateEntry(entry.id, value);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <textarea
      className="w-full h-full p-4 text-xl shadow-sm bg-white outline-none"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
