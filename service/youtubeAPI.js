import axios from "axios";

const API_KEY = "AIzaSyDDxNQM0QXVHS-bhjNUBCYu-RUkKP0HDD4";

export function getVideoId(url) {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search);
  return params.get("v");
}

function formatViews(n) {
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(1) + "M";
  } else if (n >= 1_000) {
    return (n / 1_000).toFixed(1) + "K";
  }
  return n;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

export default async function getVideoDetailsFromUrls(urls) {
  const videoDetailsArray = [];

  for (let url of urls) {
    const videoId = getVideoId(url);
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics`
    );
    const { snippet, statistics } = response.data.items[0];

    const videoDetails = {
      title: snippet.title,
      description: snippet.description,
      thumbnail: snippet.thumbnails.high.url,
      dateOfPost: formatDate(snippet.publishedAt),
      views: formatViews(statistics.viewCount),
      url: url,
    };

    videoDetailsArray.push(videoDetails);
  }

  return videoDetailsArray;
}
