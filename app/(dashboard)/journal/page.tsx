import { getUser } from '@/utils/auth';
import { prisma } from '@/utils/db';

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
  console.log({ entries });
  return <div>journal</div>;
}
