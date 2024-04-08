const quotes=[

    "You will face many defeats in life, but never let yourself be defeated.", "And Still I Rise",
"In three words I can sum up everything I've learned about life: It goes on." ,
"Life is a long lesson in humility.","The Little Minister",
"To live is the rarest thing in the world. Most people exist, that is all.",
"The most important thing is to enjoy your life to be happy it's all that matters." ,
"To succeed in life, you need three things: a wishbone, a backbone and a funnybone." ,
"We must be willing to let go of the life we planned so as to have the life that is waiting for us." ,
"Life is a succession of lessons which must be lived to be understood." ,
"Love the life you live. Live the life you love.",
"I was taught that the way of progress was neither swift nor easy.",
"He who has a why to live for can bear almost any how." ,
"You only live once, but if you do it right, once is enough." ,
"The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
"In order to write about life first you must live it." ,
"Life has no limitations, except the ones you make.",
"It's your outlook on life that counts. If you take yourself lightly and don't take yourself too seriously, pretty soon you can find the humor in our everyday lives. And sometimes it can be a lifesaver." ,
"Live for each second without hesitation." ,
"The most wasted of all days is one without laughter.",
"Start each day with a positive thought and a grateful heart." ,
"All you need in this life is ignorance and confidence; then success is sure." ,
"I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving." ,
"Many of life's failures are people who did not realize how close they were to success when they gave up.",
"I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
"Life is like riding a bicycle. To keep your balance, you must keep moving." ,
"Life shrinks or expands in proportion to one's courage." ,
"You do not find the happy life. You make it." ,
"A life is not important except in the impact it has on other lives." ,
"The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience." ,
"The biggest adventure you can ever take is to live the life of your dreams." ,
"If you own this story you get to write the ending.",
"Life is like a coin. You can spend it any way you wish, but you only spend it once.",
"Life is about making an impact, not making an income." ,
"There are no regrets in life, just lessons." ,
"Accept no one's definition of your life, define yourself.",
"The longer I live the more beautiful life becomes." ,
"If you love life, don't waste time, for time is what life is made up of." ,
"Mistakes are a fact of life. It is the response to the error that counts.",
"Life is not a problem to be solved, but a reality to be experienced.",
"Your time is limited, so don't waste it living someone else's life." ,
"If everything was perfect, you would never learn and you would never grow." ,
"If we don't change, we don't grow. If we don't grow, we aren't really living." ,
"I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed." ,
"Life doesn't have to be perfect to be wonderful." ,
"The big lesson in life, baby, is never be scared of anyone or anything.",
"I think I've discovered the secret of life you just hang around until you get used to it." ,
"Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
"Challenges are what make life interesting and overcoming them is what makes life meaningful." ,
"Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can't build on it; it's only good for wallowing in." ,
"The most important trip you may take in life is meeting people halfway.",
"Life isn't about finding yourself. Life is about creating yourself." ,


]
const usedState= new Set();
const randomQuote=document.getElementById("quote")



function getQuote(){
    randomIdx=Math.floor(Math.random()*quotes.length);

    const randQuote=quotes[randomIdx];

    randomQuote.innerText=randQuote;
   
}
