import animateScrollTo from 'animated-scroll-to';
const firstBtn = document.querySelector('.first-fact');
const secondBtn = document.querySelector('.second-fact');
const listFacts = document.querySelector('.all-facts');
const burger = document.querySelector('.hiden-burger');
const burgerbtn = document.querySelector('.open');

burgerbtn.addEventListener('click', makeBurger);
function makeBurger() {
  document.querySelector('.nav-bar').classList.toggle('not-hiden');
  document.querySelector('.nav-bar').classList.toggle('hiden-burger');
  burger.classList.toggle('hiden-burger');
  burger.classList.toggle('open-burger');
  burgerbtn.classList.toggle('open');
  burgerbtn.classList.toggle('not-open');
  if (burger.classList.contains('hiden-burger')) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

secondBtn.addEventListener('click', e => {
  listFacts.innerHTML = ` <p>35:Rick’s surname, Sanchez, only makes one appearance in an episode title in the episode Big Trouble In Little
                Sanchez in
                Season 2.</p>
            <p>36:Morty’s name appears in three different episode titles: Mortynight Run from Season 2, alongside Morty’s Mind
                Blowers and
                The Rickchurian Mortydate from Season 3.</p>
            <p>37:The Rickchurian Mortydate is the only episode title to feature both Rick and Morty’s names in the title.</p>
            <p>38:Other than these two titular characters, Beth is the only other character to have her name in an episode, in
                Season 3’s
                The ABC’s of Beth.</p>
            <p>39:In the episode Close Rick-counters of the Rick Kind we are first introduced to the Trans-Dimensional Council
                of Ricks,
                the Citadel of Ricks’ ruling council that is made up of six different Ricks. The Council’s spokesperson is
                called Riq
                IV, whilst the other council members are called Rick Prime, Quantum Rick, Maximums Rickimus, Zeta Alpha Rick and
                Ricktiminus Sancheziminius.</p>
            <p>40:Rick C-137 was offered a place on the Council which he refused, thinking them to be “Rick-sheep.”</p>
            <p>41:In this episode, the word “Rick” is said 84 total times. With one piece of dialogue between Rick C-137 and his
                Rick
                guards having the word “Rick” said 8 times in 8 seconds!</p>
            <p>42:In this episode Doofus Rick has a Morty that was assigned to him as he doesn’t have his own children. Doofus
                Rick’s
                Morty looks like Eric Stoltz, who was originally cast as Marty McFly in Back to the Future – he even recorded a
                lot of
                the film before being recast.</p>
            <p>43:At the end of this episode, it is revealed that Eyepatch Morty was the evil mastermind behind the episode’s
                events, For
                The Damaged Coda by Blonde Redhead. In Season 3, Episode 7, The Ricklantis Mixup, we follow the story of the
                first
                democratic election in the Citadel of Ricks. As the episode closes out and we come to realize that the
                now-President
                Morty is Eyepatch Morty from Season 1, For The Damaged Coda by Blonde Redhead booms, cementing this piece of
                music as
                Evil Morty’s theme.</p>
            <p>44:For Season 3’s Rest and Ricklaxation, Justin Roiland and Chaos Chaos (who did Can You Feel It? from Season 2’s
                Auto
                Erotic Assimilation) collaborated on an original song together for the episode called Terry-Folds. This song is
                the song
                playing when Morty turns on the radio in Rick’s car during their trip home together from their spa vacation, and
                again
                during the episode’s credits.</p>
            <p>45:Many fans of the show believe it is set in the same universe as Gravity Falls, an animated series made by Alex
                Hirsch.
                Hirsch and Roiland shared a desk together at Disney and made a pact to reference each other. During the chase
                scene when
                Rick opens up a bunch or portals to lose his pursuers we see a pen, notepad and a mug emerge from one of the
                portals. In
                Gravity Falls, Stan loses these items in a portal.</p>
            <p>46:In the episode Big Trouble In Little Sanchez in Season 2 of Rick and Morty, a picture of Bill Cipher, the
                antagonist of
                Gravity Falls, can be seen on a monitor when Beth and Jerry go to counselling.</p>
            <p>47:In The Rickshank Rickdemption, there are a few frames in The Citadel of Ricks where you can see two Morty
                twins in the
                background, a boy and a girl dressed in the same clothes as the two main character twins in Gravity Falls.</p>
            <p>48:In Rest and Ricklaxation, a decaying version of 8 Ball, Bill Cipher’s friend from the Nightmare Realm, can be
                seen in
                the toxin tank.</p>
            <p>49:In Morty’s Mind Blowers, there are several bulbs that reference Gravity Falls, including a blue one with the
                word
                ‘”STANDFORD” written on it. It is a reference to Ford Pines, one of Gravity Falls’ main characters, and one
                labelled
                “Bill C.” in reference to Bill Cipher.</p>
            <p>50:Rick and Morty also appear in Gravity Falls’ universe. In the real-life published version of Journal 3 from
                Gravity
                Falls, there’s the silhouette of a Plumbus, and a Zigerion on another page. There’s also a copy of Ford Pines’
                wanted
                poster with an encoded message on the corner which translates as “RICK WAS HERE.”</p>
            <p>51:The episode Rixty Minutes was released before it aired on Adult Swim via 109 consecutive 15-second Instagram
                videos.</p>
            <p>52:In the Season 3 opener, Rick repeatedly references McDonalds’ McNugget Szechuan sauce that was released in
                1998 as a
                promotion for the Disney film Mulan. In addition to getting the show’s creators a box of Szechuan sauce from
                McDonald’s,
                this caused uproar among fans who all wanted a taste, with police having to attend many fan gatherings at
                McDonald’s
                restaurants and restraining fans, earning disrepute for Rick and Morty fans everywhere and becoming known as
                “The Sauce
                Riots.”</p>
            <p>53:Although the episode Total Rickall was the first time we’d seen Mr. Poopybutthole, the producers edited him
                into each of
                the scenarios in the episode’s intro to make it look like he’d been part of the show all along. This is similar
                to the
                way the parasites featured in this episode manifest themselves through fictional memories.</p>
            <p>54:We saw Mr. Poopybutthole again in the Season 2 and Season 3 finale after-credits scenes, where each time he
                was the
                first person to give the fans any indication of how long they’d be waiting for the next season, telling them
                both times
                they’d be waiting a long time.</p>
            <p>55:For Thanksgiving in 2017, Roiland and Harmon released an emotional and touching two-minute clip called The
                Poop In My
                Pants. The clip featured Mr. Poopybutthole flicking off the TV after the end of Season 3 and picking up a
                scrapbook
                titled “The Poop In My Pants.” Mr. Poopybutthole then flicks through the scrapbook which details how he went
                back to
                school, met his wife, got married and started a family.</p>
            <p>56:The Poop In My Pants is chock-full of brilliant little easter eggs for the observant fan, including the reveal
                that Mr.
                and Mrs. Poopybutthole are from dimension C-137, a Varrix hiding during their picnic, and Pickle Rick’s
                helicopter with
                Jaguar leaping from it during their tandem bike ride, to name but a few.</p>
            <p>57:Rick and Morty have appeared in a couple TV promos. In an advert for Carl’s Jr. & Hardee’s Burgers made in
                2015, Rick
                brings living Carl’s Jr. burgers into Morty’s room while he is sleeping. The burgers go crazy and end up
                stealing a
                bunch of stuff from Morty’s room, leaving it in a right mess.</p>
            <p>58:In another TV promo for Alien: Covenant, we see Rick and Morty wandering the dark halls of an abandoned
                spaceship. A
                Facehugger jumps out, latching onto Rick’s face before quickly shriveling and dying of toxicity due to all the
                various
                things swirling about in Rick’s system.</p>
            <p>59:In the Season 26 finale of The Simpsons, Rick and Morty featured in the episode’s opening couch-gag.</p>
            <p>60:Between October 2016 and July 2017, a series of 16 Claymation Rick and Morty shorts ran on Adult Swim during
                the
                adverts. They featured Rick and Morty in parodies of iconic film scenes. In order, the shorts parodied: The
                Thing, The
                Fly, Honey I Shrunk the Kids, Ex Machina, Halloween, 2001: A Space Odyssey, Blade Runner, Poltergeist,
                Re-Animator,
                Aliens,T., Gremlins, A Clockwork Orange, Invasion of the Body Snatchers, The Matrix and Ghostbusters.</p>
            <p>61:In the episode Morty’s Mind Blowers, during the end-credits scene we see Jerry come across a small selection
                of his own
                “mind blowers.” One of these tapes is labelled “Apples Campaign,” referencing his disastrously awful “Hungry For
                Apples?” campaign that saw him get fired in the post-credits scene for Season 1’s Night Shaym-Aliens!.</p>
            <p>62:Another one of Jerry’s “mind blowers” tapes is labelled “Sleepy Gary,” referencing his affair with Beth’s
                imaginary
                parasite husband in Season 2’s Total Rickall.</p>
            <p>63:Jerry’s car is inspired by the Wagon Queen Family Truckster from National Lampoon’s Vacation.</p>
            <p>64:Rick and Morty quite often references and parodies TV shows and films. Whilst most of them are fairly
                transparent
                parodies such as Anatomy Park/Jurassic Park, some hints can be a little more low-key however. Pickle Rick is
                obviously a
                parody of Die Hard, one of Dan Harmon’s favorite films, but it also has subtle undertones of John Wick woven
                into it,
                with Pickle Rick using pencils to kill people as John Wick sometimes does and also having a Russian nickname,
                “Solenya,”
                as John Wick the “Baba Yaga” does.</p>
            <p>65:Originally, Mr. Meeseeks was supposed to be a neon-brown color, but this didn’t sit well with test audiences
                so he was
                changed by the producers to the familiar blue color we know and love.</p>
            <p>66:In the Season 3 finale, The Rickchurian Mortydate, it is casually revealed that Rick Sanchez is autistic. When
                playing
                Minecraft with Morty, Rick asks “Is this game popular with autistic people?” To which Morty replies “Why would
                you say
                something like that?” Rick in turn responds with “’Cos I’m starting to love it.” Rick fits many of the
                behavioral
                aspects of autism, including inappropriate social interaction, poor eye contact, compulsive behavior,
                impulsivity,
                repetitive movements, self-harm, and persistent repetition of words or actions.</p>
            <p>67:Bird Person is a parody of “The Hawk” from Buck Rodgers.</p>
            <p>68:Dan Harmon wore a Bird Person costume to Comic-Con in 2015.</p>
            <p>69:In 2016, Rick And Morty fans started a petition to convince Adult Swim to greenlight the production of a
                feature-length
                Rick And Morty. However, if the many fan attempts to bring Metalocalypse back are anything to go by, then we’re
                all
                going to die before a Rick and Morty movie is released!</p>
        
            <p>70As all Rick and Morty fans have come to realize, Dan Harmon is a terrible procrastinator. Because of this, when
                making
                the show’s pilot, Justin Roiland refused to let Harmon leave his unfurnished Community office until the first
                draft was
                finished.</p>`;
  secondBtn.classList.add('current');
  firstBtn.classList.remove('current');

  const cord = document.querySelector('header');
  animateScrollTo(cord, 3000);
});
firstBtn.addEventListener('click', e => {
  listFacts.innerHTML = `       Unless you’ve been living on a tiny planet or inside a Microverse car battery since 2013, there’s a very high chance
            you’ve at least heard of Adult Swim’s Rick and Morty.
        
            This wonderfully hallucinogenic animation is about Rick Sanchez, the smartest mammal in the galaxy as well as a
            sociopathic narcissist, and his grandson Morty, a simple, neurotic teenage boy.
            With him along for the ride is his granddaughter Summer, a sharp-tongued sharp-witted older teenager, his daughter
            Beth,
            an aggressive, highly-intelligent horse-surgeon, and her husband Jerry, a wet paper bag.
        
            Here are the 70 most Ricktastic facts about Rick and Morty!
            <p>1:Justin Roiland himself voices both Rick and Morty.</p>
            <p>2:Roiland originally wanted the show to run in eleven-minute segments, but Adult Swim pushed for half-hour
                episodes.</p>
            <p>3:Rick and Morty has shown its popularity by picking up a raft of awards since it started, including the IGN
                People’s
                Choice Award for Best Animated Series in 2015 and 2017, and the IGN Award for Best Animated Series in 2015 and
                2017.</p>
            <p>4:The show’s animation is done using Toon Boom Harmony, with all of the show’s background art being created on
                Adobe
                Photoshop. Post production takes place using Adobe After Effects.</p>
            <p>5:The show’s two titular characters are based on a pair of characters from an animated short by co-creator Justin
                Roiland
                called The Real Animated Adventures of Doc and Mharti.</p>
            <p>6:Justin Roiland created a small animated show called House of Cosbys, which led to him getting numerous cease
                and desist
                letters from Bill Cosby’s lawyers. As a humorous protest he decided to create a vulgar Back to the Future parody
                called
                The Real Animated Adventures of Doc and Mharti, with his two characters being named Doc Smith and Mharti
                McDonhalds to
                avoid a lawsuit. When Roiland was editing the audio for this he fell in love with the voices he’d done for the
                two
                characters, deciding to drop his protest and develop the characters more, eventually shaping them into Rick and
                Morty.</p>
            <p>7:Rick and Morty’s intro and theme song are a parody mix of Doctor Who and Tintin.</p>
            <p>8:Rick re-joined the Smith family one month before the events of the show’s pilot episode.</p>
            <p>9:The universe where we see most of the events take place on Earth is Earth Cesium-137. That’s why Rick and Morty
                often
                refer to themselves, or are referred to, as “Rick C-137” and “Morty C-137.”</p>
            <p>10:The second episode of the show’s first season (Lawnmower Dog) is based on a pilot that Justin Roiland
                developed for
                Cartoon Network called DogWorld, where two kids find a portal to a world inhabited by intelligent dogs with
                human pets.</p>
            <p>11:Also in this episode Rick refers to Snuffles as “Ruffles,” which is the name of the human pet that the dog
                family in
                DogWorld.</p>
            <p>12:In Lawnmower Dog, the voice of Snowball’s accountant is that of Maurice LaMarche, who voiced The Brain in
                Pinky and The
                Brain.</p>
            <p>13:When recording the dialogue for the show, Roiland improvises a lot on set, which he feels makes the lines more
                natural.
                Roiland calls the improvisations “Alts” and will record a whole bunch of improvised one-liners and jokes quipped
                by Rick
                or Morty before choosing one to make the episode’s cut.</p>
            <p>14:As Rick spends most of his time drunk, Roiland once tried method acting and getting drunk before doing the
                recording of
                Rick’s dialogue. It didn’t go well, and he barely got any recording done!</p>
            <p>15:Ever thought that Rick’s daughter Beth sounds familiar? Well that’s because she’s voiced by actress Sarah
                Chalke, who
                played Elliot in Scrubs, Stella in How I Met Your Mother and Amy in Backstrom.</p>
            <p>16:Sarah Chalke is also a huge fan of Rick and Morty’s artwork.</p>
            <p>17:In fact, Beth is the third time Sarah Chalke has played a blonde doctor. Although if you ask Jerry, he’d say
                she’s only
                played a blonde doctor twice as being a horse surgeon apparently isn’t the same as being a “real doctor.”</p>
            <p>18:Each one of Rick’s characteristic burps is a real burp.</p>
            <p>19:Rick’s burping only came to be because, when voicing Doc in The Real Animated Adventures of Doc and Mharti,
                Roiland
                accidentally burped in the middle of a line. He said it was so gross and funny he thought “let’s see if I can do
                that
                again for a couple more lines.”</p>
            <p>20:Although he does all the burps, Roiland has said before it’s not easy for him. He sits in the studio with a
                can of
                low-calorie beer and a bottle of water, waiting for them to come naturally as he can’t force them or burp on
                command. He
                tells the engineers recording the show “Just leave it rolling, because I don’t know when this burp is coming!”
            </p>
            <p>21:Justin Roiland has also said that Sarah Chalke can burp on command and that he’s very jealous of her.</p>
            <p>22:When traveling in cars Rick never wears a seatbelt, while all the other characters do.</p>
            <p>23:Every time we see a vehicle door open with Rick inside, empty beer cans and bottles either come pouring out or
                can be
                heard rattling around.</p>
            <p>24:Spencer Grammar who voices Summer, said that if she could travel back in time she’d kill Hitler. Whilst this
                would do
                the world as a whole some good, it’d be shame for Rick and Morty fans as it would never give us the joyous
                combination
                of Adolf Hitler and Abraham Lincoln rolled into one character in Abradolf Lincler, a “misguided venture” of
                Rick’s to
                create a morally neutral super leader by combining the DNA of the two. Prepare to be emancipated from your own
                inferior
                genes!</p>
            <p>25:In the episode Get Schwifty in Season 2, we find out that Rick, Bird Person and Squanchy were in a rock band
                together
                called “The Flesh Curtains.”</p>
            <p>26:Rick and Morty has had a raft of celebrity guest stars doing voices on the show over the duration of its run
                to-date.
                Just a few notable names include Stephen Colbert, Dana Carvey, Claudia Black, Nathan Fillion, Susan Sarandon,
                Joel
                McHale, Rich Fulcher, Christian Slater and Danny Trejo.</p>
            <p>27:In the episode Night Shaym-Aliens! in Season 1, we are introduced to the Zigerions, alien scammers after
                Rick’s formula
                for concentrated dark matter. Their leader, Prince Nebulon (Yes, a scamming Zigerion Prince), was voiced by
                David Cross
                who played Tobias Fünke in Arrested Development. Both the Zigerions and Tobias Fünke are massively uncomfortable
                with
                nudity.</p>
            <p>28:In the episode Auto Erotic Assimilation in Season 2, we are introduced to Unity, a hive-mind entity which Rick
                used to
                date. Rick gets Unity to create a TV show for him, which is actually a copy of Dan Harmon’s show Community, and
                features
                all the main characters in the show: Jeff, Annie, Shirley, Pierce, Troy, Abed, and Britta. It even references
                Community
                being cancelled and bought back when Rick tells Unity “Now cancel it! Okay now put it back on.”</p>
            <p>29:At the end of this episode, we see Rick attempt suicide before choosing not to. Just before he does this he
                drinks an
                orange liquid from an Erlenmeyer flask. This orange liquid synchronizes all of the possible Ricks in every
                conceivable
                reality, meaning had Rick not bowed his head down and actually killed himself, that every single Rick across the
                entire
                multiverse would have ceased to exist.</p>
            <p>30:The way in which Rick says the word “bitch” is style after how Jesse Pinkman said the word in Breaking Bad.
            </p>
            <p>31:Rick’s swearing isn’t the only thing the Rick and Morty team were inspired by from Breaking Bad. The
                inspiration for the
                premise of Pickle Rick came from Breaking Bad’s episode 4 Days Out in Season 2, where Jesse and Walt are
                stranded in the
                desert and Walt shows some true ingenuity to work with nothing and save them both. This led to Dan Harmon
                wanting to
                test Rick’s genius, saying “How smart is Rick, though? Is he so smart that with his mouth alone he could gain an
                advantage over biological killing machines in an environment that wasn’t built to sustain him?”</p>
            <p>32:In the early stages of production, Breaking Bad’s Bryan Cranston auditioned for the role of Jerry.</p>
            <p>33:The word “Rick” is often used in episode titles in lieu of other words, such as Close Rick-counters of the
                Rick Kind, A
                Rickle In Time, Total Rickall, and The Rickshank Rickdemption, to name a few.</p>
            <p>34:In fact, Rick’s name appears 16 times in episode names out of 31 total episodes.</p>`;
  secondBtn.classList.remove('current');
  firstBtn.classList.add('current');
  const cord = document.querySelector('header');
  animateScrollTo(cord, 3000);
});
