export const GET_POSTS = `
  {
    posts {
      nodes {
        id
        title
        slug
        date
        excerpt
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_SERVICES = `
  {
    pages(where: { parent: 0 }) {
      nodes {
        title
        slug
        serviceDetails {
          tagline
          icon
          priceFrom
        }
      }
    }
  }
`;
