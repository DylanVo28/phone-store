/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/
function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- We'll render the URLs for our sitemap here. -->
  </urlset>
`;

res.setHeader("Content-Type", "text/xml");
res.write(sitemap);
res.end();

return {
  props: {},
};
}

export default SiteMap;
