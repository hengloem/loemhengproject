export interface MenuItem {
    title: string;
    icon: string;
    route: string;
}

export interface PortfolioItem {
    title: string;
    category: string;
    client: string;
    languages: string;
    previewLink: string;
    imageUrl: string;
    videoUrl?: string;
}