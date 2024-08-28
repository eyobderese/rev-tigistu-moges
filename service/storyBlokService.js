const StoryblokClient = require("storyblok-js-client");

export default async function getStoryblokClient(slug) {
  let Storyblok = new StoryblokClient({
    accessToken: "CzR2c8HKZCrgreuphOcbJQtt",
  });

  try {
    const response = await Storyblok.get(`cdn/stories/${slug}`, {
      version: "published",
      cv: 172363546,
    });

    const components = response.data.story.content.body.reduce(
      (acc, component) => {
        acc[component.component] = component;
        return acc;
      },
      {}
    );

    return components;
  } catch (error) {
    console.error(error);
  }
}

// You need to call the async function inside an async function or use then() to handle the Promise
