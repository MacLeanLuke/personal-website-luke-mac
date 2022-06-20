const settings = {
  "name": "personal-website-luke-mac",
  "state": {
    "frontity": {
      "url": "https://techyschmecky.wordpress.com",
      "title": "Luke MacLean's Portfolio",
      "description": "Luke MacLean's Portfolio"
    }
  },
  "packages": [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "Luke MacLean",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
          // the top-level navigation labels and links
          menu: [
            ["Frontity","/category/frontity"],
            ["Wordpress","/category/wordpress"]
            ["React","/category/react"],
            ["Javascript", "/category/javascript"],
            ["Python", "/category/python"],
            ["Java", "/category/java"],
            ["C++", "/category/c"],
          ],
          // the social links
          socialLinks: [
            ["linkedin", "https://www.linkedin.com/in/luke-maclean/"],
            ["github", "https://github.com/MacLeanLuke"],
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              50: "#def8ff",
              100: "#b7e5f9",
              200: "#8dd1f1",
              300: "#62bfea",
              400: "#3aade3",
              500: "#2293c9",
              600: "#15729d",
              700: "#085271",
              800: "#003146",
              900: "#00121c",
            },
            accent: {
              50: "#fffada",
              100: "#fff0ad",
              200: "#fff0ad",
              300: "#ffdc4b",
              400: "#ffd21a",
              500: "#e6b900",
              600: "#b38f00",
              700: "#806700",
              800: "#4e3d00",
              900: "#1c1500",
            },
          },
        },
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://techyschmecky.wordpress.com"
        }
      }
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-WM9TMR5",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
