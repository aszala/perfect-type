const fs = require('fs');

let domain = "https://perfect-type.com";

let routes = [
    {
        name: "login"
    },
    {
        name: "signup"
    },
    {
        name: "profile"
    },
    {
        name: "leaderboard"
    },
    {
        name: "logout"
    },
    {
        name: "creators"
    }
];

let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

let urls = `
    <url>
        <loc>${domain}</loc>
        <lastmod>${year}-${month}-${date}</lastmod>
    </url>
`;

for (let i=0;i<routes.length;i++) {
    let route = routes[i];

    let url = `
    <url>
        <loc>${domain}/${route.name}</loc>
        <lastmod>${year}-${month}-${date}</lastmod>
    </url>
    `;

    urls += url;
}

let sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', sitemap);