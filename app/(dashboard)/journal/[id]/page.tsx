import { Editor } from '@/components/Editor';
import { getUser } from '@/utils/auth';
import { prisma } from '@/utils/db';

const getEntry = async (id: string) => {
  const user = await getUser();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!entry) {
    throw new Error('Entry not found');
  }

  return entry;
};

export default async function Page({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);
  return <Editor entry={entry} />;
}
