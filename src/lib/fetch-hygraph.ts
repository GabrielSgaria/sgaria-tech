'use server'


const url = process.env.HYGRAPH_URL as string;
const token = process.env.HYGRAPH_TOKEN as string;

export async function fetchHygraphQuery(query: string) {

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ query }),
            next: {
                revalidate: 1000,
            }
        });
        if (!res.ok) {
            throw new Error(`response error! status: ${res.status}`);
        }
        const result = await res.json();
        return result.data;
    } catch (err) {
        console.error(`Error fetching data: ${err}`)
        return null
    }
}