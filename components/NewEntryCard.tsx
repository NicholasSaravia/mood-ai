'use client';

import { createNewEntry } from '@/utils/entry-api';
import { useRouter } from 'next/navigation';

const NewEntryCard = () => {
  const router = useRouter();

  return (
    <button
      className="rounded-lg bg-white shadow text-3xl px-4 py-2"
      onClick={async () => {
        const data = await createNewEntry();
        router.push(`/journal/${data.id}`);
      }}
    >
      New Entry
    </button>
  );
};

export default NewEntryCard;
