const createURL = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (id: string, content: string) => {
  const res = await fetch(createURL(`/api/journal/${id}`), {
    method: 'PUT',
    body: JSON.stringify({ content }),
  });
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};

export const createNewEntry = async () => {
  const res = await fetch(createURL('/api/journal'), {
    method: 'POST',
  });
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
