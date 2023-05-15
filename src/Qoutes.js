import React from "react";
const famousQoutations = [
  "Be yourself; everyone else is already taken. ― Oscar Wilde",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
  "So many books, so little time. ― Frank Zappa",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ― Dr. Seuss",
  "You only live once, but if you do it right, once is enough. ― Mae West",
  "In three words I can sum up everything I've learned about life: it goes on. ― Robert Frost",
  "If you tell the truth, you don't have to remember anything. ― Mark Twain",
  "A friend is someone who knows all about you and still loves you. ― Elbert Hubbard",
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ― Maya Angelou",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ― Ralph Waldo Emerson",
  "It is better to be hated for what you are than to be loved for what you are not. ― Andre Gide",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. ― H. Jackson Brown Jr.7",
];
export function RandomQoutes(props) {
  return famousQoutations[Math.floor(Math.random() * famousQoutations.length)];
}
