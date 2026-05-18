/* =========================================================
   VEDB STORY SNAPSHOT MASTER OVERRIDE v3 — PLOT-FIRST
   Paste at the VERY BOTTOM of script.js.

   Purpose:
   - Replaces review-style descriptions with plot-first summaries.
   - Keeps descriptions spoiler-safe.
   - Uses simple "what is this about?" wording.
   - Covers title pages and franchise pages.

   Does NOT touch:
   - startup
   - Zendaya fix
   - search
   - actor pages
   - Full Page memory
========================================================= */

(function () {
  if (window.vedbStorySnapshotMasterOverrideV3Installed) return;
  window.vedbStorySnapshotMasterOverrideV3Installed = true;

  const VEDB_TITLE_STORY_SNAPSHOTS_V3 = [
    {
      match: ["dune"],
      story:
        "Dune follows Paul Atreides, the son of a powerful noble family assigned to rule Arrakis, a desert planet that produces the most valuable resource in the universe. As his family arrives on Arrakis, Paul is pulled into political danger, conflict with rival houses, and a mysterious future tied to the planet’s people. The story follows his first steps into a much larger struggle over power, survival, and destiny."
    },
    {
      match: ["euphoria"],
      story:
        "Euphoria follows Rue Bennett, a teenager dealing with addiction, school, family pressure, and complicated relationships. The series also follows the lives of her classmates as they face love, identity, friendship, secrets, and personal struggles. Each episode shows how their choices affect one another as they try to handle growing up in a difficult and intense world."
    },
    {
      match: ["iron man"],
      story:
        "Iron Man follows Tony Stark, a billionaire inventor and weapons manufacturer whose life changes after he is captured overseas. While trying to escape, he builds a powerful armored suit and begins rethinking the role his technology plays in the world. The movie follows Tony as he turns that first suit into a new identity and faces threats connected to his own company and inventions."
    },
    {
      match: ["top gun maverick", "top gun: maverick"],
      story:
        "Top Gun: Maverick follows Pete “Maverick” Mitchell as he returns to train a new group of elite Navy pilots for a dangerous mission. Among the pilots is the son of Maverick’s late friend Goose, which brings old guilt and tension back into his life. The movie follows Maverick as he prepares the team while proving he still belongs in the air."
    },
    {
      match: ["devil wears prada", "the devil wears prada"],
      story:
        "The Devil Wears Prada follows Andy Sachs, a young journalist who gets a job as assistant to Miranda Priestly, the powerful editor of a major fashion magazine. Andy enters a demanding workplace where the expectations are high, the pace is brutal, and every mistake matters. The movie follows her as she tries to succeed in a world she does not fully understand while deciding what kind of career and life she wants."
    },
    {
      match: ["titanic"],
      story:
        "Titanic follows Jack Dawson and Rose DeWitt Bukater, two passengers who meet aboard the RMS Titanic during its first voyage across the Atlantic. Jack is a free-spirited artist traveling in third class, while Rose is a wealthy young woman traveling with her fiancé and family. As they grow closer, the ship continues toward one of the most famous disasters in history."
    },
    {
      match: ["inception"],
      story:
        "Inception follows Dom Cobb, a thief who steals secrets by entering people’s dreams. He is offered a chance to clear his past if he can perform a much harder job: planting an idea inside someone’s mind. The movie follows Cobb and his team as they build a layered dream mission where each level becomes more dangerous and harder to control."
    },
    {
      match: ["revenant", "the revenant"],
      story:
        "The Revenant follows Hugh Glass, a frontiersman traveling through the wilderness with a fur-trapping expedition. After a brutal attack leaves him badly injured, he is separated from the group and forced to survive in harsh conditions. The movie follows his journey through the wilderness as he struggles to stay alive and find his way forward."
    },
    {
      match: ["wolf of wall street", "the wolf of wall street"],
      story:
        "The Wolf of Wall Street follows Jordan Belfort, a stockbroker who builds a financial empire through aggressive sales tactics and risky behavior. As his firm grows, so do the money, parties, scams, and attention from law enforcement. The movie follows Jordan’s rise in the world of Wall Street and the chaos that comes with his choices."
    },
    {
      match: ["the help", "help"],
      story:
        "The Help takes place in 1960s Mississippi and follows a young writer who begins interviewing Black maids about their experiences working for white families. The story focuses on Skeeter, Aibileen, and Minny as their lives become connected through a secret writing project. The movie follows the risks they take as private stories begin to challenge the rules of their community."
    },

    {
      match: ["spider man no way home", "spider-man no way home", "spiderman no way home", "no way home"],
      story:
        "Spider-Man: No Way Home follows Peter Parker after his secret identity is revealed to the world. Looking for help, Peter turns to Doctor Strange, but the attempt to fix his situation creates even bigger problems. The movie follows Peter as he deals with new dangers, familiar relationships, and the consequences of trying to change what everyone knows."
    },
    {
      match: ["malcolm x"],
      story:
        "Malcolm X follows the life of Malcolm Little as he grows from a troubled young man into a major public figure and civil rights leader. The movie traces his time in prison, his religious transformation, and his rise as a powerful speaker. It follows his changing beliefs, public influence, and the personal journey behind his leadership."
    },
    {
      match: ["training day"],
      story:
        "Training Day follows Jake Hoyt, a rookie police officer spending his first day with veteran narcotics detective Alonzo Harris. As Alonzo takes Jake through the streets of Los Angeles, Jake begins to question the methods, motives, and rules he is being taught. The movie follows one dangerous day that tests Jake’s judgment and sense of right and wrong."
    },
    {
      match: ["fences"],
      story:
        "Fences follows Troy Maxson, a working-class husband and father living in Pittsburgh with his wife Rose and their family. Troy’s past, his job, and his disappointed dreams shape the way he treats the people closest to him. The story follows the conflicts inside his household as family members struggle with love, duty, resentment, and hope."
    },
    {
      match: ["creed"],
      story:
        "Creed follows Adonis Johnson, the son of boxing champion Apollo Creed, as he tries to build his own boxing career. He travels to Philadelphia to train with Rocky Balboa, who becomes his mentor. The movie follows Adonis as he prepares for a major fight while trying to step out from behind his father’s legacy."
    },
    {
      match: ["john wick"],
      story:
        "John Wick follows a retired assassin who is pulled back into the criminal underworld after a violent encounter disrupts his quiet life. As he returns to old contacts and enemies, the movie reveals a hidden world with its own rules, currency, and consequences. The story follows John as he moves through that world with a reputation everyone understands."
    },
    {
      match: ["matrix", "the matrix"],
      story:
        "The Matrix follows Neo, a computer hacker who begins to suspect that the world around him is not what it seems. He meets Morpheus and Trinity, who introduce him to a hidden reality and a conflict against powerful machines. The movie follows Neo as he learns the truth about his world and discovers what role he may play in the fight for freedom."
    },
    {
      match: ["speed"],
      story:
        "Speed follows Los Angeles police officer Jack Traven as he tries to stop a bomber who has rigged a city bus to explode if it slows down. Jack must work with passenger Annie Porter and the people onboard to keep the bus moving while searching for a way to save everyone. The movie follows the crisis in real time as the danger keeps escalating."
    },
    {
      match: ["everything everywhere all at once", "everything everywhere"],
      story:
        "Everything Everywhere All at Once follows Evelyn Wang, a laundromat owner dealing with family stress, business problems, and an IRS audit. Her ordinary day changes when she is pulled into a strange multiverse conflict involving different versions of herself. The movie follows Evelyn as she tries to understand what is happening while reconnecting with her family."
    },
    {
      match: ["a star is born"],
      story:
        "A Star Is Born follows Ally, a singer-songwriter whose talent is discovered by famous musician Jackson Maine. As Ally’s career begins to rise, her relationship with Jackson becomes tied to fame, music, pressure, and personal struggle. The movie follows their partnership as they navigate love, performance, and the demands of public success."
    },

    {
      match: ["house of gucci"],
      story:
        "House of Gucci follows Patrizia Reggiani as she marries into the Gucci family and becomes part of a world of fashion, wealth, and business power. As family relationships and control of the brand become more complicated, tensions grow inside the dynasty. The movie follows the ambition, conflict, and personal rivalries surrounding one of fashion’s most famous names."
    },
    {
      match: ["joker"],
      story:
        "Joker follows Arthur Fleck, a struggling clown and aspiring comedian living in Gotham City. As Arthur faces rejection, poverty, and isolation, his life begins to move in a darker direction. The movie follows his transformation while showing the city around him becoming more unstable."
    },
    {
      match: ["dark knight", "the dark knight"],
      story:
        "The Dark Knight follows Batman, Lieutenant Gordon, and district attorney Harvey Dent as they try to fight organized crime in Gotham City. Their efforts are challenged by the Joker, a criminal who creates chaos and forces Gotham’s leaders into impossible choices. The movie follows Batman as he tries to protect the city while facing a threat unlike the criminals he has fought before."
    },
    {
      match: ["batman begins"],
      story:
        "Batman Begins follows Bruce Wayne as he travels the world after the murder of his parents and trains to fight crime. He returns to Gotham City and creates the Batman identity to confront corruption and fear spreading through the city. The movie follows the beginning of Batman’s mission and the forces that push him into becoming a symbol."
    },
    {
      match: ["interstellar"],
      story:
        "Interstellar follows Cooper, a former pilot and farmer living on a struggling future Earth. When he is recruited for a space mission, he leaves his family behind to search for a possible new home for humanity. The movie follows Cooper and the crew as they travel beyond Earth while time, distance, and survival create difficult choices."
    },
    {
      match: ["social network", "the social network"],
      story:
        "The Social Network follows Mark Zuckerberg during the creation and early rise of Facebook. The movie shows the idea growing from a college project into a major company while friendships, business partnerships, and legal disputes become tangled together. It follows the people around the platform as success creates conflict over credit, ownership, and loyalty."
    },
    {
      match: ["la la land"],
      story:
        "La La Land follows Mia, an aspiring actress, and Sebastian, a jazz musician, as they try to build creative careers in Los Angeles. Their relationship grows while both pursue dreams that require sacrifice and persistence. The movie follows their romance, ambitions, setbacks, and the choices that come with chasing a life in the arts."
    },
    {
      match: ["barbie"],
      story:
        "Barbie follows Barbie as she begins questioning her perfect life in Barbie Land and travels into the real world for answers. Along the way, she encounters new ideas about identity, expectations, and what it means to choose a life for herself. The movie follows Barbie and Ken as their journey changes how they see themselves and their world."
    },
    {
      match: ["oppenheimer"],
      story:
        "Oppenheimer follows physicist J. Robert Oppenheimer as he becomes involved in the secret effort to build the atomic bomb during World War II. The movie follows his work with scientists, military leaders, and government officials as the project grows in scale and consequence. It also follows the personal and political pressures surrounding him before and after the project."
    },
    {
      match: ["catch me if you can"],
      story:
        "Catch Me If You Can follows Frank Abagnale Jr., a young con artist who uses fake identities to pass as a pilot, doctor, and lawyer. FBI agent Carl Hanratty begins tracking him as Frank moves from city to city staying one step ahead. The movie follows their long chase while showing how Frank’s charm and loneliness shape the life he invents for himself."
    },

    {
      match: ["django unchained"],
      story:
        "Django Unchained follows Django, an enslaved man who is freed by bounty hunter Dr. King Schultz. Together they travel through the South as Django learns the bounty-hunting trade and searches for his wife. The movie follows their journey through dangerous territory controlled by slave owners, criminals, and powerful plantation figures."
    },
    {
      match: ["once upon a time in hollywood"],
      story:
        "Once Upon a Time in Hollywood follows Rick Dalton, a fading television actor, and Cliff Booth, his longtime stunt double, in 1969 Los Angeles. As the film industry changes around them, Rick tries to keep his career alive while Cliff moves through the city beside him. The movie follows their daily lives in Hollywood during a period when old television, new movies, and real history begin to overlap."
    },
    {
      match: ["pulp fiction"],
      story:
        "Pulp Fiction follows several connected crime stories in Los Angeles involving hitmen, a boxer, a gangster’s wife, and small-time criminals. The movie moves out of order, letting different characters cross paths in surprising ways. It follows conversations, deals, mistakes, and dangerous encounters inside a violent but often strange criminal world."
    },
    {
      match: ["kill bill"],
      story:
        "Kill Bill follows a former assassin known as the Bride as she searches for the people who betrayed her. Her journey takes her through a world of trained killers, old allies, and enemies with deep personal history. The movie follows her path of revenge through stylized fights, martial arts influences, and chapters tied to her past."
    },
    {
      match: ["mission impossible", "mission: impossible"],
      story:
        "Mission: Impossible follows Ethan Hunt and his team as they take on dangerous covert missions involving spies, stolen information, and global threats. The stories often involve disguises, betrayals, advanced technology, and plans that can fail in seconds. Each mission follows the team as they try to stop a crisis while staying ahead of enemies who know how they operate."
    },
    {
      match: ["edge of tomorrow", "live die repeat"],
      story:
        "Edge of Tomorrow follows Major William Cage, a soldier with little combat experience who is sent into battle during a war against alien invaders. After a strange event, he finds himself reliving the same day over and over. The movie follows Cage as he uses each reset to learn, improve, and work with warrior Rita Vrataski to find a way forward."
    },
    {
      match: ["jerry maguire"],
      story:
        "Jerry Maguire follows a successful sports agent who loses his job after writing a mission statement about making the business more personal. With only one major client staying by his side, Jerry tries to rebuild his career and his relationships. The movie follows his attempt to balance work, loyalty, love, and a new idea of success."
    },
    {
      match: ["forrest gump"],
      story:
        "Forrest Gump follows Forrest, a kind and unusual man from Alabama whose life intersects with major events in American history. Through childhood, war, friendship, love, and unexpected success, Forrest keeps moving forward in his own simple way. The movie follows his life story as he remembers the people and moments that shaped him."
    },
    {
      match: ["cast away"],
      story:
        "Cast Away follows Chuck Noland, a FedEx systems engineer whose life changes after a plane crash leaves him stranded on a remote island. Alone and far from rescue, Chuck must learn how to survive with limited tools and no contact with the outside world. The movie follows his struggle with isolation, time, and the hope of returning home."
    },
    {
      match: ["avengers endgame", "avengers: endgame", "endgame"],
      story:
        "Avengers: Endgame follows the surviving Avengers after a devastating defeat changes the universe. With the team broken, scattered, and grieving, they search for a way to undo what was lost and bring everyone back together. The movie follows the heroes as they take one final, risky mission that forces them to face their past, their losses, and the future of the world."
    },
    {
      match: ["black widow"],
      story:
        "Black Widow follows Natasha Romanoff after she is forced to confront parts of her past that she tried to leave behind. While separated from the Avengers, Natasha becomes involved in a dangerous mission connected to the program that trained her. The movie follows her as she reconnects with people from her earlier life and faces the system that helped shape who she became."
    },
    {
      match: ["marriage story"],
      story:
        "Marriage Story follows Charlie and Nicole, a married couple going through a painful separation while trying to protect their young son. As their lives move in different directions, private disagreements become part of a larger legal and emotional process. The movie follows both sides of the breakup as love, anger, parenting, and identity become tangled together."
    },
    {
      match: ["lost in translation"],
      story:
        "Lost in Translation follows Bob Harris, an aging American actor, and Charlotte, a young woman staying in Tokyo with her husband. Both feel disconnected from the people around them and from the lives they expected to have. The movie follows their quiet friendship as they spend time together in a city that feels unfamiliar, beautiful, and lonely."
    },
    {
      match: ["pretty woman"],
      story:
        "Pretty Woman follows Vivian Ward, a woman working in Los Angeles, who meets wealthy businessman Edward Lewis. What begins as a business arrangement turns into a connection that changes how both of them see themselves and their lives. The movie follows Vivian as she enters Edward’s world while deciding what she wants for her own future."
    },
    {
      match: ["erin brockovich"],
      story:
        "Erin Brockovich follows a single mother who gets a job at a small law office and discovers a major environmental case. As she investigates medical problems in a California community, she begins connecting those problems to contaminated water and corporate wrongdoing. The movie follows Erin as she pushes for answers while proving that determination can matter as much as formal training."
    },
    {
      match: ["notting hill"],
      story:
        "Notting Hill follows William Thacker, a quiet bookstore owner in London, whose life changes when famous actress Anna Scott walks into his shop. Their relationship grows across two very different worlds: his ordinary neighborhood life and her public celebrity life. The movie follows their romance as they deal with fame, privacy, friendship, and the difficulty of finding something real."
    },
    {
      match: ["the woman king", "woman king"],
      story:
        "The Woman King follows General Nanisca and the Agojie, an all-female warrior unit protecting the West African kingdom of Dahomey. As new threats rise and a young recruit joins the group, the warriors prepare to defend their people and their way of life. The movie follows training, loyalty, leadership, and the fight to protect a kingdom under pressure."
    },
    {
      match: ["ma raineys black bottom", "ma rainey's black bottom"],
      story:
        "Ma Rainey’s Black Bottom follows blues singer Ma Rainey and her band during a recording session in 1920s Chicago. As the musicians wait, rehearse, argue, and share stories, tensions grow between artistic control, ambition, race, and the music business. The movie follows one intense day inside the studio as personal pain and professional pressure come to the surface."
    },
    {
      match: ["how to get away with murder"],
      story:
        "How to Get Away with Murder follows Annalise Keating, a brilliant law professor and defense attorney, and a group of her students. Their lives become connected through criminal cases, secrets, and dangerous choices that pull them deeper into legal and personal trouble. The series follows the group as classroom lessons, real cases, and hidden actions begin to overlap."
    },
    {
      match: ["shawshank redemption", "the shawshank redemption"],
      story:
        "The Shawshank Redemption follows Andy Dufresne, a banker sent to Shawshank prison after being convicted of murder. Inside the prison, Andy forms a friendship with longtime inmate Red while learning how to survive a harsh and controlled world. The movie follows Andy’s years behind bars as hope, patience, friendship, and quiet resistance shape his life."
    },
    {
      match: ["million dollar baby"],
      story:
        "Million Dollar Baby follows Maggie Fitzgerald, a determined woman who wants to become a professional boxer, and Frankie Dunn, a trainer who is reluctant to work with her at first. As Maggie trains and improves, their bond grows into something deeper than a normal boxing partnership. The movie follows ambition, trust, sacrifice, and the emotional cost of chasing a dream."
    },
    {
      match: ["se7en", "seven"],
      story:
        "Se7en follows two detectives investigating a series of disturbing murders in a dark and rain-soaked city. Detective Somerset is nearing retirement, while Detective Mills is new to the job and eager to prove himself. The movie follows their search for a killer whose crimes are built around a pattern that becomes more dangerous as the case unfolds."
    },
    {
      match: ["driving miss daisy"],
      story:
        "Driving Miss Daisy follows Daisy Werthan, an older woman in Atlanta, and Hoke Colburn, the driver hired to help her after she can no longer drive herself. Their relationship begins with resistance and distance, but slowly changes over many years. The movie follows their conversations, routines, disagreements, and growing trust as time changes the world around them."
    },
    {
      match: ["sherlock holmes"],
      story:
        "Sherlock Holmes follows detective Sherlock Holmes and Dr. John Watson as they investigate a dangerous case involving murder, mystery, and a larger threat to London. Holmes uses observation, deduction, and unusual methods to follow clues that others miss. The movie follows Holmes and Watson as their partnership is tested by a case that grows more complicated with each discovery."
    },
    {
      match: ["chaplin"],
      story:
        "Chaplin follows the life and career of Charlie Chaplin, from his difficult early years to his rise as one of the most recognizable performers in film history. The movie follows his work in silent comedy, his public fame, his personal relationships, and the challenges that came with becoming a major cultural figure. It shows the person behind the famous screen character."
    },
    {
      match: ["her", "her 2013"],
      story:
        "Her follows Theodore Twombly, a lonely man in the near future who forms a relationship with an advanced operating system named Samantha. As their connection grows, Theodore begins to question love, companionship, technology, and what it means to be understood. The movie follows his emotional journey as a digital relationship becomes deeply personal."
    },
    {
      match: ["oceans eleven", "ocean's eleven", "ocean’s eleven"],
      story:
        "Ocean’s Eleven follows Danny Ocean as he gathers a skilled team to pull off a major casino heist in Las Vegas. Each member of the group brings a different talent to the plan, from deception and explosives to technology and inside knowledge. The movie follows the crew as they prepare a complicated robbery where timing, trust, and style all matter."
    },
    {
      match: ["equalizer", "the equalizer"],
      story:
        "The Equalizer follows Robert McCall, a quiet man with a hidden past who tries to live a peaceful life. When he sees people being threatened and abused, he uses his skills to step in and protect those who cannot protect themselves. The movie follows McCall as his private sense of justice pulls him back into danger."
    },
    {
      match: ["dune part two", "dune: part two"],
      story:
        "Dune: Part Two follows Paul Atreides as he joins the Fremen on Arrakis and moves deeper into the conflict over the desert planet. As Paul learns their ways and grows into a larger role, political power, prophecy, revenge, and survival become tightly connected. The movie follows his path as the struggle for Arrakis becomes even bigger and more dangerous."
    },
    {
      match: ["spider man homecoming", "spider-man homecoming", "spiderman homecoming"],
      story:
        "Spider-Man: Homecoming follows Peter Parker as he tries to balance high school life with his growing role as Spider-Man. After working with the Avengers, Peter wants to prove he is ready for bigger hero work, but he still has to deal with school, friends, and everyday teenage problems. The movie follows Peter as he learns what kind of hero he wants to become."
    },
    {
      match: ["challengers"],
      story:
        "Challengers follows Tashi Duncan, a former tennis player turned coach, as her life becomes tied to two players who share a complicated past with her. The story moves through friendship, rivalry, romance, ambition, and competition on and off the court. The movie follows how personal history and professional pressure collide around one major tennis match."
    },
    {
      match: ["sophies choice", "sophie's choice", "sophie’s choice"],
      story:
        "Sophie’s Choice follows Stingo, a young writer who moves to Brooklyn and becomes close to Sophie and Nathan, a couple with a complicated and painful relationship. As Stingo gets to know Sophie, he learns more about her past, her survival, and the emotional weight she carries. The movie follows memory, trauma, love, and the difficulty of living after devastating loss."
    },
    {
      match: ["mamma mia", "mamma mia!"],
      story:
        "Mamma Mia! follows Sophie, a young woman preparing for her wedding on a Greek island. Wanting to learn more about her father, she secretly invites three men from her mother Donna’s past. The movie follows Sophie, Donna, and their guests as family questions, old relationships, music, and celebration come together before the wedding."
    },
    {
      match: ["the iron lady", "iron lady"],
      story:
        "The Iron Lady follows Margaret Thatcher across different stages of her life, from her early political rise to her years as Britain’s prime minister. The movie shows her public career, private memories, personal relationships, and the pressures of leadership. It follows how power, conviction, aging, and legacy shape the story of a major political figure."
    },
    {
      match: ["top gun"],
      story:
        "Top Gun follows Pete “Maverick” Mitchell, a talented Navy fighter pilot sent to an elite flight school for advanced training. Maverick competes with other pilots while dealing with friendship, romance, risk, and the pressure to prove himself. The movie follows his growth as a pilot as confidence, discipline, and teamwork become just as important as skill."
    },
    {
      match: ["point break"],
      story:
        "Point Break follows Johnny Utah, a young FBI agent investigating a group of bank robbers who may be connected to the surfing world. To get closer to the suspects, Johnny goes undercover and becomes involved with surfers who live for risk, freedom, and adrenaline. The movie follows the tension between duty, loyalty, and the pull of a dangerous lifestyle."
    },
    {
      match: ["spider man far from home", "spider-man far from home", "spiderman far from home"],
      story:
        "Spider-Man: Far From Home follows Peter Parker as he travels to Europe on a school trip while still dealing with the pressure of being Spider-Man. Peter wants a break from hero life, but new threats and unexpected responsibilities pull him back in. The movie follows Peter as he tries to understand trust, loss, and what it means to step into a larger role."
    },
    {
      match: ["uncharted"],
      story:
        "Uncharted follows Nathan Drake, a young treasure hunter who is recruited for a dangerous search connected to lost fortune and hidden history. He teams up with Victor “Sully” Sullivan as they follow clues, face rivals, and chase artifacts across different locations. The movie follows Nathan’s first steps into a larger adventure world built on maps, secrets, and risky discoveries."
    },
    {
      match: ["reginald the vampire"],
      story:
        "Reginald the Vampire follows Reginald Baskin, an ordinary man whose life changes after he becomes a vampire. Instead of fitting the usual image of a powerful vampire, Reginald has to deal with insecurity, workplace problems, romance, and supernatural rules he does not fully understand. The series follows him as he tries to survive vampire life while still holding onto who he is."
    },
    {
      match: ["the greatest showman", "greatest showman"],
      story:
        "The Greatest Showman follows P. T. Barnum as he builds a new kind of live entertainment show around performers who have been pushed aside or overlooked. As the show grows, Barnum chases success, fame, and acceptance while the people around him search for belonging and respect. The movie follows ambition, family, performance, and the cost of wanting the world to applaud."
    },
    {
      match: ["malcolm and marie", "malcolm & marie"],
      story:
        "Malcolm & Marie follows a filmmaker and his partner after they return home from a movie premiere. What begins as a private night together turns into a long conversation about love, credit, resentment, ambition, and emotional honesty. The movie follows one relationship over the course of a tense night as old wounds and unspoken feelings come forward."
    },
    {
      match: ["space jam a new legacy", "space jam: a new legacy", "space jam new legacy"],
      story:
        "Space Jam: A New Legacy follows basketball star LeBron James as he is pulled into a digital world with his son. To escape, he must team up with Bugs Bunny and the Looney Tunes for a high-stakes basketball game. The movie follows family pressure, teamwork, cartoons, and sports as the characters try to reconnect and win their way home."
    },
    {
      match: ["glory"],
      story:
        "Glory follows the 54th Massachusetts Infantry Regiment, one of the first Black regiments to fight for the Union during the American Civil War. The story follows the soldiers and their commander as they train, face racism, and prepare for battle. The movie focuses on courage, sacrifice, leadership, and the fight to be treated with dignity while serving a larger cause."
    },
    {
      match: ["philadelphia"],
      story:
        "Philadelphia follows Andrew Beckett, a lawyer who believes he was fired after his firm learned he had AIDS. He hires attorney Joe Miller to help him bring a discrimination case against his former employer. The movie follows the legal fight while also showing fear, prejudice, illness, dignity, and the effort to be seen as fully human."
    },
    {
      match: ["remember the titans"],
      story:
        "Remember the Titans follows a newly integrated high school football team in Virginia during a time of racial tension. Coach Herman Boone is brought in to lead the team as players from different backgrounds learn to work together. The movie follows football, leadership, friendship, conflict, and the difficult process of becoming one team."
    },
    {
      match: ["man on fire"],
      story:
        "Man on Fire follows John Creasy, a former operative hired to protect a young girl named Pita in Mexico City. At first distant and guarded, Creasy slowly forms a bond with her and begins to find purpose again. The movie follows protection, trust, violence, and revenge after danger tears through the life he was hired to guard."
    },
    {
      match: ["american gangster"],
      story:
        "American Gangster follows Frank Lucas, a Harlem crime figure who builds a powerful drug operation, and Richie Roberts, the detective investigating him. The movie moves between organized crime, police work, corruption, and ambition as both men rise in their own worlds. The story follows power, money, law enforcement, and the cost of building an empire through crime."
    },
    {
      match: ["flight"],
      story:
        "Flight follows Whip Whitaker, an airline pilot who saves many lives during a terrifying plane emergency. After the crash, investigators begin looking closely at what happened before the flight and at Whip’s personal life. The movie follows heroism, addiction, responsibility, and the difficult difference between surviving a disaster and facing the truth."
    },
    {
      match: ["kramer vs kramer", "kramer vs. kramer"],
      story:
        "Kramer vs. Kramer follows Ted Kramer, a father whose life changes when his wife Joanna leaves and he must suddenly become the primary parent to their young son. As Ted learns how to care for his child, both parents are forced to confront what family, responsibility, and love mean to them. The movie follows parenting, separation, custody, and emotional change inside one family."
    },
    {
      match: ["the book of eli", "book of eli"],
      story:
        "The Book of Eli follows Eli, a lone traveler moving across a dangerous post-apocalyptic America. He carries a book that he believes must be protected and delivered, while others want it for their own power. The movie follows survival, faith, violence, and the struggle to protect something meaningful in a broken world."
    },
    {
      match: ["john q", "john q."],
      story:
        "John Q. follows John Quincy Archibald, a father whose young son needs a life-saving heart transplant. When money, insurance, and hospital rules block the surgery, John becomes desperate to save his child. The movie follows a family medical crisis that turns into a public standoff about love, fear, and the cost of health care."
    },
    {
      match: ["the hurricane", "hurricane"],
      story:
        "The Hurricane follows Rubin Carter, a boxer whose life and career are changed after he is convicted of a crime he says he did not commit. While he spends years fighting from prison, people outside begin working to understand his case and help him seek justice. The movie follows boxing, imprisonment, hope, and the long effort to challenge a conviction."
    },
    {
      match: ["roman j israel esq", "roman j. israel esq", "roman j israel, esq", "roman j. israel, esq.", "roman j israel esq."],
      story:
        "Roman J. Israel, Esq. follows Roman Israel, a defense attorney with strong ideals and an unusual way of working. After a major change at his small law office, Roman is pushed into a different legal world where money, pressure, and compromise challenge his beliefs. The movie follows his attempt to hold onto justice while facing choices that test who he is."
    },
    {
      match: ["the deer hunter", "deer hunter"],
      story:
        "The Deer Hunter follows a group of friends from a Pennsylvania steel town whose lives are changed by the Vietnam War. The story moves from home life and friendship into the trauma of war and its aftermath. The movie follows how violence, memory, loyalty, and loss affect the people who return and the community waiting for them."
    },
    {
      match: ["out of africa"],
      story:
        "Out of Africa follows Karen Blixen, a Danish woman who runs a coffee plantation in Kenya and builds a complicated life far from home. Her relationships, her land, and her independence shape the story as she faces love, loss, and change. The movie follows romance, colonial life, personal ambition, and the difficulty of belonging to a place that may never fully belong to her."
    },
    {
      match: ["the bridges of madison county", "bridges of madison county"],
      story:
        "The Bridges of Madison County follows Francesca Johnson, a woman living a quiet family life in Iowa, whose world changes when she meets traveling photographer Robert Kincaid. Over a few days, their connection forces Francesca to think about love, duty, regret, and the life she chose. The movie follows a brief relationship with lasting emotional weight."
    },
    {
      match: ["the hours", "hours"],
      story:
        "The Hours follows three women in different time periods whose lives are connected through Virginia Woolf’s novel Mrs. Dalloway. Each woman faces private emotional pressure, questions about identity, and the weight of expectations. The movie follows how one book, one day, and separate lives can echo across time."
    },
    {
      match: ["doubt"],
      story:
        "Doubt follows Sister Aloysius, a strict Catholic school principal, who becomes suspicious of Father Flynn’s relationship with a student. Without clear proof, she begins pressing for answers while others question what is true, what is fair, and what should be done. The movie follows suspicion, authority, morality, and uncertainty inside a tightly controlled school community."
    },
    {
      match: ["julie and julia", "julie & julia"],
      story:
        "Julie & Julia follows two connected stories: Julia Child discovering French cooking and Julie Powell trying to cook her way through Child’s recipes decades later. As both women face frustration, ambition, marriage, and creative purpose, food becomes a path toward identity and confidence. The movie follows cooking, writing, persistence, and the joy of finding a voice."
    },
    {
      match: ["k.c. undercover", "kc undercover"],
      story:
        "K.C. Undercover follows K.C. Cooper, a smart high school student who discovers that her parents are spies and that she is expected to join the family business. The series follows her as she balances school, friendships, family life, and secret missions. It connects comedy, action, family teamwork, and the pressure of living two very different lives."
    },
    {
      match: ["cry freedom"],
      story:
        "Cry Freedom follows journalist Donald Woods as he learns more about anti-apartheid activist Steve Biko and the movement against racial injustice in South Africa. After Biko’s death, Woods faces danger as he tries to tell the world what happened. The movie follows activism, journalism, political oppression, and the cost of speaking the truth."
    },
    {
      match: ["julia"],
      story:
        "Julia follows writer Lillian Hellman as she remembers her friendship with Julia, a woman involved in dangerous anti-fascist resistance work before World War II. Their connection pulls Lillian into a risky mission that tests loyalty, courage, and memory. The movie follows friendship, politics, danger, and the emotional weight of looking back."
    },
    {
      match: ["the french lieutenant's woman", "french lieutenant's woman"],
      story:
        "The French Lieutenant's Woman follows two connected stories: a Victorian-era romance being filmed and the modern actors playing those roles. As the film within the film explores forbidden attraction and social judgment, the actors’ own relationship begins to blur with the characters they portray. The movie follows love, performance, choice, and the distance between image and reality."
    },
    {
      match: ["silkwood"],
      story:
        "Silkwood follows Karen Silkwood, a worker at a nuclear facility who becomes concerned about safety, contamination, and the way employees are treated. As she starts asking questions and pushing for accountability, the pressure around her grows. The movie follows workplace danger, whistleblowing, personal risk, and the fight to expose the truth."
    },
    {
      match: ["heartburn"],
      story:
        "Heartburn follows Rachel and Mark, a couple whose marriage is tested by disappointment, betrayal, and the difficult realities behind romance. The story follows Rachel as she tries to balance love, family, motherhood, and her own sense of self. The movie follows marriage, humor, heartbreak, and the painful difference between the life someone imagines and the life they actually live."
    },
    {
      match: ["a cry in the dark"],
      story:
        "A Cry in the Dark follows Lindy and Michael Chamberlain after their baby daughter disappears during a family trip in Australia. As the tragedy becomes a public spectacle, suspicion and media pressure grow around the family. The movie follows grief, judgment, public opinion, and the damage that can happen when a private nightmare becomes a national obsession."
    },
    {
      match: ["postcards from the edge"],
      story:
        "Postcards from the Edge follows Suzanne Vale, an actress trying to rebuild her life and career after a crisis. As she returns to work, she also has to deal with her complicated relationship with her famous mother. The movie follows recovery, Hollywood pressure, family tension, humor, and the struggle to stand on her own."
    },
    {
      match: ["adaptation", "adaptation."],
      story:
        "Adaptation. follows screenwriter Charlie Kaufman as he struggles to adapt a nonfiction book into a movie. His creative block, insecurity, and strange connection to the story begin to twist the film into something unexpected. The movie follows writing, obsession, identity, Hollywood pressure, and the messy process of turning real life into art."
    },
    {
      match: ["into the woods"],
      story:
        "Into the Woods follows familiar fairy-tale characters whose wishes bring them together in a dark and magical forest. As they chase what they want, they discover that getting a wish can create new problems and consequences. The movie follows fantasy, family, choices, music, and what happens after the happy ending."
    },
    {
      match: ["the post"],
      story:
        "The Post follows the Washington Post as its leaders decide whether to publish the Pentagon Papers despite legal and political pressure. Publisher Katharine Graham and editor Ben Bradlee must weigh risk, responsibility, and the role of a free press. The movie follows journalism, government secrecy, courage, and the decision to stand behind the public’s right to know."
    },
    {
      match: ["little women"],
      story:
        "Little Women follows the March sisters as they grow up, chase dreams, face hardship, and define what kind of lives they want. The story centers on family, creativity, love, independence, and the different paths each sister takes. The movie follows sisterhood, ambition, memory, and the challenge of becoming yourself while staying connected to home."
    },
    {
      match: ["only murders in the building"],
      story:
        "Only Murders in the Building follows three neighbors who become connected by their love of true crime and a suspicious death in their apartment building. As they start recording a podcast, they uncover secrets about the building and each other. The series follows mystery, comedy, friendship, obsession, and the strange community that forms around solving a crime."
    },
    {
      match: ["this boy's life", "this boys life"],
      story:
        "This Boy's Life follows Tobias Wolff as he grows up with his mother and tries to survive life under an abusive stepfather. The story follows a young person searching for identity, safety, and a way out while adults around him fail or disappoint him. The movie follows family conflict, adolescence, control, and the need to escape a damaging home."
    },
    {
      match: ["what's eating gilbert grape", "whats eating gilbert grape"],
      story:
        "What's Eating Gilbert Grape follows Gilbert, a young man caring for his family in a small town while feeling trapped by responsibility. He looks after his younger brother Arnie and struggles with his own hopes for a different life. The movie follows family duty, small-town pressure, love, patience, and the quiet desire for change."
    },
    {
      match: ["the basketball diaries", "basketball diaries"],
      story:
        "The Basketball Diaries follows Jim Carroll, a talented young basketball player whose life begins to spiral as addiction takes hold. What starts as teenage rebellion becomes a dangerous struggle that affects his friendships, future, and survival. The movie follows youth, addiction, talent, loss, and the painful distance between promise and reality."
    },
    {
      match: ["the quick and the dead", "quick and the dead"],
      story:
        "The Quick and the Dead follows a mysterious gunslinger who enters a deadly quick-draw tournament in a violent frontier town. As the contest moves forward, old secrets and revenge come to the surface. The movie follows western showdowns, power, fear, revenge, and the danger of surviving by the gun."
    },
    {
      match: ["total eclipse"],
      story:
        "Total Eclipse follows the intense and destructive relationship between poets Arthur Rimbaud and Paul Verlaine. Their connection becomes tied to art, obsession, jealousy, rebellion, and emotional chaos. The movie follows poetry, desire, self-destruction, and the painful cost of a relationship built on brilliance and damage."
    },
    {
      match: ["romeo + juliet", "romeo and juliet"],
      story:
        "Romeo + Juliet follows two young lovers from rival families whose relationship grows in a violent, modernized version of Verona. Their love becomes caught between family loyalty, impulsive choices, and a feud that keeps escalating. The movie follows romance, youth, conflict, fate, and the tragedy of love inside a world already at war with itself."
    },
    {
      match: ["marvin's room", "marvins room"],
      story:
        "Marvin's Room follows two estranged sisters who are brought back together by illness and family responsibility. As they reconnect, old wounds and different life choices come forward. The movie follows caregiving, forgiveness, family tension, illness, and the complicated love between people who have been apart for too long."
    }
  ];

  const VEDB_FRANCHISE_STORY_SNAPSHOTS_V3 = [
    {
      match: ["dark knight trilogy", "batman trilogy", "nolan batman"],
      story:
        "The Dark Knight Trilogy follows Bruce Wayne from the beginning of his Batman mission through major threats to Gotham City. Across the three films, Bruce faces criminals, corruption, public fear, and the personal cost of becoming Batman. The franchise connects Batman Begins, The Dark Knight, and The Dark Knight Rises into one continuous version of Gotham’s story."
    },
    {
      match: ["john wick"],
      story:
        "The John Wick franchise follows retired assassin John Wick as he is pulled back into a criminal underworld filled with assassins, rules, debts, and powerful organizations. Each movie expands the world around him, including the Continental hotels, markers, contracts, and alliances. The franchise follows John as he tries to survive enemies connected to the life he left behind."
    },
    {
      match: ["matrix", "the matrix"],
      story:
        "The Matrix franchise follows Neo, Trinity, Morpheus, and others fighting inside and outside a simulated reality controlled by machines. The story expands from Neo learning the truth about the Matrix to a larger conflict involving humans, machines, choice, and control. The franchise connects action, technology, philosophy, and rebellion across multiple titles."
    },
    {
      match: ["dune"],
      story:
        "The Dune franchise follows the political and spiritual struggles surrounding Arrakis, a desert planet that produces a powerful resource called spice. The story includes noble houses, native Fremen communities, imperial power, prophecy, and control over the planet. The franchise follows characters and factions as they fight over Arrakis and the future tied to it."
    },
    {
      match: ["spider man", "spider-man", "spiderman"],
      story:
        "The Spider-Man franchise follows Peter Parker and other Spider-heroes as they balance ordinary life with the responsibility of protecting people. The stories often include school, friendship, family, villains, secret identities, and the pressure of being a hero while still growing up. The franchise connects different films, actors, villains, timelines, and versions of the Spider-Man story."
    },
    {
      match: ["top gun"],
      story:
        "The Top Gun franchise follows elite Navy pilots training and flying high-risk missions. The stories focus on competition, friendship, mentorship, dangerous flying, and the pressure of making decisions in the air. The franchise connects pilots, aircraft, missions, rivalries, and the legacy between the original Top Gun and Top Gun: Maverick."
    },
    {
      match: ["creed", "rocky"],
      story:
        "The Creed and Rocky franchise follows boxers, trainers, and families connected through the world of professional fighting. The story moves from Rocky Balboa’s boxing career to Adonis Creed building his own path while carrying the Creed name. The franchise connects fights, mentors, rivalries, family history, and the personal reasons each fighter steps into the ring."
    },
    {
      match: ["marvel", "mcu"],
      story:
        "The Marvel franchise connects superheroes, teams, villains, and major events across a shared universe. Individual movies follow different heroes, while larger storylines bring characters together across films and series. The franchise includes origin stories, team-ups, battles, powers, technology, and character arcs that connect from one title to another."
    },
    {
      match: ["mission impossible", "mission: impossible"],
      story:
        "The Mission: Impossible franchise follows Ethan Hunt and the IMF team as they take on secret missions involving espionage, stolen technology, and global threats. The stories often involve disguises, betrayals, dangerous stunts, and plans that must be completed under extreme pressure. The franchise connects team members, villains, missions, and high-risk operations across the series."
    },
    {
      match: ["batman"],
      story:
        "The Batman franchise follows Bruce Wayne as he becomes Batman and protects Gotham City from criminals, villains, and corruption. Different versions of the franchise focus on different parts of Batman’s world, including detective work, crime drama, superhero action, and the villains who challenge him. The franchise connects actors, films, timelines, Gotham, and the larger Batman mythology."
    },
    {
      match: ["equalizer", "the equalizer"],
      story:
        "The Equalizer franchise follows Robert McCall, a quiet man with a hidden past who uses his skills to protect people facing danger. Across the franchise, McCall is pulled into violent situations when ordinary people are threatened by criminals, corruption, or abuse of power. The franchise follows his personal code of justice, his careful methods, and the consequences of stepping back into danger."
    },
    {
      match: ["mamma mia", "mamma mia!"],
      story:
        "The Mamma Mia! franchise follows family, romance, friendship, and music across stories connected to Donna, Sophie, and the people in their lives. The films use ABBA songs to explore weddings, memories, old relationships, new beginnings, and questions about family. The franchise connects island life, music, love stories, and multiple generations trying to understand one another."
    },
    {
      match: ["sherlock holmes"],
      story:
        "The Sherlock Holmes franchise follows detective Sherlock Holmes and Dr. John Watson as they solve dangerous mysteries involving clues, criminals, disguises, and larger threats. Different versions of the franchise focus on Holmes’s intelligence, Watson’s partnership, and the cases that challenge their methods. The franchise connects mystery, investigation, action, deduction, and the famous detective world around Baker Street."
    },
    {
      match: ["oceans", "ocean's", "ocean’s", "oceans franchise", "ocean's franchise", "ocean’s franchise"],
      story:
        "The Ocean’s franchise follows skilled crews planning stylish heists built around timing, teamwork, deception, and high-risk targets. The stories often center on casinos, wealthy marks, clever plans, and teams where each person has a special role. The franchise connects Danny Ocean, his crew, later spin-off teams, and a world where the robbery is as much about planning and charm as the prize."
    },
    {
      match: ["dc screen universe", "dc universe", "dc extended universe", "dceu"],
      story:
        "The DC Screen Universe connects superheroes, villains, teams, and major events across DC-based movies and shows. The franchise includes characters such as Batman, Superman, Wonder Woman, Aquaman, the Flash, and other figures tied to larger conflicts. The universe follows hero origins, team-ups, rivalries, city-level threats, world-level danger, and different screen versions of DC mythology."
    }
  ];

  function vedbV3Clean(value) {
    return String(value || "").trim();
  }

  function vedbV3Normalize(value) {
    return vedbV3Clean(value)
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function vedbV3Safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function vedbV3EntityName(entity) {
    return vedbV3Clean(entity?.name || entity?.title);
  }

  function vedbV3FindStory(entity, masterList) {
    const entityName = vedbV3Normalize(vedbV3EntityName(entity));

    if (!entityName || !Array.isArray(masterList)) return "";

    /*
      Safer Story Snapshot matching:
      1. Try exact title matches first.
      2. Then try longer/specific matches before short matches.
      This prevents "Dune: Part Two" from accidentally grabbing "Dune".
    */

    const exactMatch = masterList.find(function (item) {
      return item.match.some(function (word) {
        return entityName === vedbV3Normalize(word);
      });
    });

    if (exactMatch) return exactMatch.story;

    const sortedMatches = masterList
      .slice()
      .sort(function (a, b) {
        const aLongest = Math.max.apply(
          null,
          a.match.map(function (word) {
            return vedbV3Normalize(word).length;
          })
        );

        const bLongest = Math.max.apply(
          null,
          b.match.map(function (word) {
            return vedbV3Normalize(word).length;
          })
        );

        return bLongest - aLongest;
      });

    const found = sortedMatches.find(function (item) {
      return item.match.some(function (word) {
        const cleanWord = vedbV3Normalize(word);
        return cleanWord && entityName.includes(cleanWord);
      });
    });

    return found ? found.story : "";
  }

  function vedbV3TitleFallback(title) {
    const name = vedbV3EntityName(title) || "This title";

    return (
      vedbV3Clean(title?.storySnapshotLong) ||
      vedbV3Clean(title?.storySnapshot) ||
      vedbV3Clean(title?.description) ||
      vedbV3Clean(title?.overview) ||
      vedbV3Clean(title?.summary) ||
      `${name} is part of the VEDB title library. Add a short plot summary here that explains the main character, setting, and central conflict without revealing major spoilers.`
    );
  }

  function vedbV3FranchiseFallback(franchise) {
    const name = vedbV3EntityName(franchise) || "This franchise";

    return (
      vedbV3Clean(franchise?.storySnapshotLong) ||
      vedbV3Clean(franchise?.storySnapshot) ||
      vedbV3Clean(franchise?.description) ||
      vedbV3Clean(franchise?.overview) ||
      vedbV3Clean(franchise?.summary) ||
      `${name} is a VEDB franchise sphere that connects related movies, shows, actors, characters, and storylines. Add a short franchise summary here that explains what the franchise follows without revealing major spoilers.`
    );
  }

  function vedbV3GetTitleStory(title) {
    return vedbV3FindStory(title, VEDB_TITLE_STORY_SNAPSHOTS_V3) || vedbV3TitleFallback(title);
  }

  function vedbV3GetFranchiseStory(franchise) {
    return vedbV3FindStory(franchise, VEDB_FRANCHISE_STORY_SNAPSHOTS_V3) || vedbV3FranchiseFallback(franchise);
  }

  function vedbV3StoryCard(story) {
    return `
      <article class="info-card vedb-story-snapshot-card">
        <h3>Story Snapshot</h3>
        <p class="vedb-story-snapshot-text">${vedbV3Safe(story)}</p>
      </article>
    `;
  }

  function vedbV3ApplyTitleStories() {
    if (typeof titles === "undefined" || !Array.isArray(titles)) return;

    titles.forEach(function (title) {
      const story = vedbV3FindStory(title, VEDB_TITLE_STORY_SNAPSHOTS_V3);

      if (story) {
        title.storySnapshot = story;
        title.storySnapshotLong = story;
        title.description = story;
        title.overview = story;
      }
    });
  }

  function vedbV3ApplyFranchiseStories() {
    if (typeof franchises === "undefined" || !Array.isArray(franchises)) return;

    franchises.forEach(function (franchise) {
      const story = vedbV3FindStory(franchise, VEDB_FRANCHISE_STORY_SNAPSHOTS_V3);

      if (story) {
        franchise.storySnapshot = story;
        franchise.storySnapshotLong = story;
        franchise.description = story;
        franchise.overview = story;
      }
    });
  }

  vedbV3ApplyTitleStories();
  vedbV3ApplyFranchiseStories();

  const previousTitleSectionV3 =
    typeof titleSection === "function" ? titleSection : null;

  if (previousTitleSectionV3) {
    window.titleSection = function (sectionId) {
      if (
        (sectionId === "story" ||
          sectionId === "overview" ||
          sectionId === "storySnapshot") &&
        typeof currentMode !== "undefined" &&
        currentMode === "title" &&
        typeof currentEntity !== "undefined" &&
        currentEntity
      ) {
        return vedbV3StoryCard(vedbV3GetTitleStory(currentEntity));
      }

      return previousTitleSectionV3(sectionId);
    };

    try {
      titleSection = window.titleSection;
    } catch (error) {}
  }

  const previousFranchiseSectionV3 =
    typeof franchiseSection === "function" ? franchiseSection : null;

  if (previousFranchiseSectionV3) {
    window.franchiseSection = function (sectionId) {
      if (
        (sectionId === "story" ||
          sectionId === "overview" ||
          sectionId === "storySnapshot") &&
        typeof currentMode !== "undefined" &&
        currentMode === "franchise" &&
        typeof currentEntity !== "undefined" &&
        currentEntity
      ) {
        return vedbV3StoryCard(vedbV3GetFranchiseStory(currentEntity));
      }

      return previousFranchiseSectionV3(sectionId);
    };

    try {
      franchiseSection = window.franchiseSection;
    } catch (error) {}
  }

  if (
    typeof currentMode !== "undefined" &&
    (currentMode === "title" || currentMode === "franchise") &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  console.log("VEDB Story Snapshot Master Override v3 plot-first installed.");
})();