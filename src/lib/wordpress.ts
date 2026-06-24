const WP_GRAPHQL_URL =
    "https://steelblue-vulture-864814.hostingersite.com/graphql";

export async function fetchGraphQL(query: string, variables = {}) {
    const res = await fetch(WP_GRAPHQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 3600 }, // revalidate every hour
    });

    if (!res.ok) throw new Error("GraphQL fetch failed");

    const { data } = await res.json();
    return data;
}
