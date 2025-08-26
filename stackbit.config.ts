import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ["content"],
            models: [
                // Page Models
                {
                    name: "HomePage",
                    type: "page",
                    urlPath: "/",
                    filePath: "content/pages/index.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "heroTitle", type: "string" },
                        { name: "heroSubtitle", type: "string" },
                        { name: "heroImage", type: "image", required: true },
                        { name: "servicesTitle", type: "string" },
                        { name: "servicesSubtitle", type: "string" },
                        { name: "services", type: "list", items: { type: "reference", models: ["Service"] } },
                        { name: "featuresTitle", type: "string" },
                        { name: "featuresSubtitle", type: "string" },
                        { name: "features", type: "list", items: { type: "reference", models: ["Feature"] } },
                        { name: "ingredientsTitle", type: "string" },
                        { name: "ingredientsSubtitle", type: "string" },
                        { name: "ingredients", type: "list", items: { type: "reference", models: ["Ingredient"] } },
                        { name: "teamTitle", type: "string" },
                        { name: "teamMembers", type: "list", items: { type: "reference", models: ["TeamMember"] } },
                        { name: "aboutTitle", type: "string" },
                        { name: "aboutContent", type: "markdown" },
                        { name: "aboutImage", type: "image" },
                        { name: "reviewsTitle", type: "string" },
                        { name: "testimonials", type: "list", items: { type: "reference", models: ["Testimonial"] } },
                        { name: "seo", type: "object", fields: [
                            { name: "title", type: "string" },
                            { name: "description", type: "string" },
                            { name: "keywords", type: "list", items: { type: "string" } }
                        ]}
                    ]
                },
                {
                    name: "PricingPage",
                    type: "page",
                    urlPath: "/pricing",
                    filePath: "content/pages/pricing.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "subtitle", type: "string" },
                        { name: "pricingPlans", type: "list", items: { type: "reference", models: ["PricingPlan"] } },
                        { name: "content", type: "markdown" },
                        { name: "seo", type: "object", fields: [
                            { name: "title", type: "string" },
                            { name: "description", type: "string" },
                            { name: "keywords", type: "list", items: { type: "string" } }
                        ]}
                    ]
                },
                {
                    name: "GalleryPage",
                    type: "page",
                    urlPath: "/gallery",
                    filePath: "content/pages/gallery.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "subtitle", type: "string" },
                        { name: "galleryItems", type: "list", items: { type: "reference", models: ["GalleryItem"] } },
                        { name: "categories", type: "list", items: { type: "string" } },
                        { name: "seo", type: "object", fields: [
                            { name: "title", type: "string" },
                            { name: "description", type: "string" },
                            { name: "keywords", type: "list", items: { type: "string" } }
                        ]}
                    ]
                },
                {
                    name: "BlogPage",
                    type: "page",
                    urlPath: "/blog",
                    filePath: "content/pages/blog.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "subtitle", type: "string" },
                        { name: "featuredPosts", type: "list", items: { type: "reference", models: ["BlogPost"] } },
                        { name: "seo", type: "object", fields: [
                            { name: "title", type: "string" },
                            { name: "description", type: "string" },
                            { name: "keywords", type: "list", items: { type: "string" } }
                        ]}
                    ]
                },
                {
                    name: "BlogPost",
                    type: "page",
                    urlPath: "/blog/{slug}",
                    filePath: "content/blog/{slug}.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "date", type: "date", required: true },
                        { name: "author", type: "reference", models: ["TeamMember"] },
                        { name: "featuredImage", type: "image" },
                        { name: "excerpt", type: "string" },
                        { name: "content", type: "markdown", required: true },
                        { name: "tags", type: "list", items: { type: "string" } },
                        { name: "seo", type: "object", fields: [
                            { name: "title", type: "string" },
                            { name: "description", type: "string" },
                            { name: "keywords", type: "list", items: { type: "string" } }
                        ]}
                    ]
                },
                {
                    name: "ServicePage",
                    type: "page",
                    urlPath: "/services/{slug}",
                    filePath: "content/services/{slug}.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "description", type: "string" },
                        { name: "featuredImage", type: "image" },
                        { name: "content", type: "markdown", required: true },
                        { name: "pricing", type: "list", items: { type: "object", fields: [
                            { name: "name", type: "string", required: true },
                            { name: "price", type: "string", required: true },
                            { name: "description", type: "string" },
                            { name: "duration", type: "string" }
                        ]}},
                        { name: "seo", type: "object", fields: [
                            { name: "title", type: "string" },
                            { name: "description", type: "string" },
                            { name: "keywords", type: "list", items: { type: "string" } }
                        ]}
                    ]
                },
                
                // Data Models
                {
                    name: "Service",
                    type: "data",
                    filePath: "content/data/services/{slug}.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "description", type: "string" },
                        { name: "image", type: "image" },
                        { name: "price", type: "string" },
                        { name: "detailsPage", type: "reference", models: ["ServicePage"] }
                    ]
                },
                {
                    name: "Feature",
                    type: "data",
                    filePath: "content/data/features/{slug}.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "description", type: "string" },
                        { name: "icon", type: "string" },
                        { name: "image", type: "image" }
                    ]
                },
                {
                    name: "Ingredient",
                    type: "data",
                    filePath: "content/data/ingredients/{slug}.json",
                    fields: [
                        { name: "name", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "benefit", type: "string" },
                        { name: "image", type: "image" }
                    ]
                },
                {
                    name: "TeamMember",
                    type: "data",
                    filePath: "content/data/team/{slug}.json",
                    fields: [
                        { name: "name", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "role", type: "string" },
                        { name: "description", type: "string" },
                        { name: "image", type: "image" },
                        { name: "socialLinks", type: "list", items: { type: "object", fields: [
                            { name: "platform", type: "string", required: true },
                            { name: "url", type: "string", required: true }
                        ]}}
                    ]
                },
                {
                    name: "Testimonial",
                    type: "data",
                    filePath: "content/data/testimonials/{slug}.json",
                    fields: [
                        { name: "text", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "author", type: "string", required: true },
                        { name: "rating", type: "number" },
                        { name: "image", type: "image" }
                    ]
                },
                {
                    name: "PricingPlan",
                    type: "data",
                    filePath: "content/data/pricing/{slug}.json",
                    fields: [
                        { name: "name", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "price", type: "string", required: true },
                        { name: "description", type: "string" },
                        { name: "features", type: "list", items: { type: "string" } },
                        { name: "isFeatured", type: "boolean" }
                    ]
                },
                {
                    name: "GalleryItem",
                    type: "data",
                    filePath: "content/data/gallery/{slug}.json",
                    fields: [
                        { name: "title", type: "string", required: true },
                        { name: "slug", type: "string", required: true },
                        { name: "image", type: "image", required: true },
                        { name: "category", type: "string" },
                        { name: "description", type: "string" }
                    ]
                }
            ],
        })
    ],
    "siteMap": ({ documents, models }) => {
        // 1. Filter all page models
        const pageModels = models.filter((m) => m.type === "page");

        return documents
            // 2. Filter all documents which are of a page model
            .filter((d) => pageModels.some(m => m.name === d.modelName))
            // 3. Map each document to a SiteMapEntry
            .map((document) => {
                // Get the model for this document
                const model = pageModels.find(m => m.name === document.modelName);
                
                // Generate URL path based on the model's urlPath pattern
                let urlPath = model?.urlPath || '/';
                
                // Replace any {slug} placeholders with actual values from the document
                if (urlPath.includes('{slug}') && document.fields.slug) {
                    urlPath = urlPath.replace('{slug}', document.fields.slug);
                }
                
                return {
                    stableId: document.id,
                    urlPath: urlPath,
                    document,
                    isHomePage: urlPath === '/',
                };
            })
            .filter(Boolean) as SiteMapEntry[];
    },
    "postInstallCommand": "npm i --no-save @stackbit/types"
})