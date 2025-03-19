"use server";

export const fetchSongs = async () => {
  try {
    const response = await fetch(
      "https://api.deezer.com/playlist/7241549564/tracks",
      {
        mode: "no-cors",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopPlayList = async () => {
  try {
    const response = await fetch(
      "https://api.deezer.com/playlist/1479458365/tracks"
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSongsBySearch = async (query) => {
  try {
    const response = await fetch(
      `https://api.deezer.com/search/track?q=${query}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecentPlay = async () => {
  try {
    const response = await fetch(
      "https://api.deezer.com/playlist/1910878662/tracks"
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
