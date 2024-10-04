const youtubeLinks = [
    "https://www.youtube.com/watch", // Standard URL, Playlist URL, Timestamped URL (Standard), Live Stream URL
    "https://youtu.be/", // Shortened URL, Timestamped URL (Shortened)
    "https://www.youtube.com/embed/", // Embedded URL
    "https://www.youtube.com/playlist", // Playlist-only URL
    "https://www.youtube.com/channel/", // Channel URL
    "https://www.youtube.com/user/" // User URL
  ];

const songRequestPrompt = "!sr"
export function filterYoutubeLinks(chatMessage : string) {
    const messageString = String(chatMessage);
    console.log(messageString);
    
    messageString.split(' ')
}