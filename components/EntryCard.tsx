import { JournalEntry } from '@prisma/client';

const EntryCard = ({ entry }: { entry: JournalEntry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="shadow-sm bg-white p-4">
      <p>{date}</p>
      <p>{entry.content}</p>
    </div>
  );
};

export default EntryCard;
