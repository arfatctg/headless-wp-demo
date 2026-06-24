export type Post = {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
};

export type ServicePage = {
    title: string;
    slug: string;
    serviceDetails: {
        tagline: string;
        icon: string;
        priceFrom: string;
    };
};

export type SinglePost = {
    title: string;
    content: string;
    date: string;
    excerpt: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
            altText: string;
        };
    };
};
