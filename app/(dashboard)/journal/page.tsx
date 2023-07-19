import EntryCard from '@/components/EntryCard';
import NewEntryCard from '@/components/NewEntryCard';
import { getUser } from '@/utils/auth';
import { prisma } from '@/utils/db';
import Link from 'next/link';

const getEntries = async () => {
  const user = await getUser();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return entries;
};

export default async function Page() {
  const entries = await getEntries();
  return (
    <div className="p-10 h-full bg-zinc-400/10">
      <h2 className="text-3xl mb-8">Journal</h2>
      <NewEntryCard />
      <div className="flex flex-auto flex-wrap gap-4 mt-8">
        {entries.map((entry) => (
          <Link key={entry.id} href={`/journal/${entry.id}`}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
}
