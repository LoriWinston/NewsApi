const QUOTE_COUNT = 5;

const mungeQuotes = (json) =>
json.articles.map(({ author, title, description, url, urlToImage }) => ({
    author: author,
    title: title,
    description: description,
    url: url,
    urlToImage: urlToImage,

}));

export const fetchNews = async () => {
    const res = await fetch('https://newsapi.org/v2/everything?q=today&apiKey=074c7a2073204c1da5e54e08f656a24b');
    const json = await res.json();

    return mungeQuotes(json);
};

export const fetchNewsByTopic = async (newsName) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${newsName}&apiKey=074c7a2073204c1da5e54e08f656a24b`);

    const json = await res.json();

    return mungeQuotes(json);
};