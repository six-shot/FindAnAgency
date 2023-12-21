export default async function getUpdate(updateId: string) {
  const res = await fetch(
    `https://gind-agencies.onrender.com/api/agency/${updateId}`
  );

  if (!res.ok) throw new Error("failed to fetch data");

  const responseData = await res.json();

  const data = responseData.data;
  console.log(data);
  return data;
}
