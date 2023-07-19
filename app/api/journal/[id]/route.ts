import { getUser } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { content } = await req.json();
  const user = await getUser();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      id: params.id,
      userId: user.id,
    },
    data: {
      content,
    },
  });

  return NextResponse.json({ data: updatedEntry });
};
