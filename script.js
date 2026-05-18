function findActorByName(name) {
  if (typeof actors === 'undefined' || !Array.isArray(actors)) return null;

  const wanted = String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

  return (
    actors.find(function (actor) {
      const actorName = String(actor.name || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();

      return actorName === wanted;
    }) || null
  );
}

const actors = [
  {
    mode: 'actor',
    name: 'Zendaya',
    job: 'Actress • Producer',
    initials: 'Z',
    summary:
      'Zendaya is known for television, fashion visibility, major franchise films, and dramatic streaming performances.',
    bio: 'Original VEDB demo bio: Zendaya grew from youth-focused entertainment into high-profile television and film roles, with work spanning drama, science fiction, and superhero franchises.',
    knownFor: [
      ['Euphoria', 2019],
      ['Dune', 2021],
      ['Spider-Man: Homecoming', 2017],
      ['Challengers', 2024],
    ],
    awards: [
      'Emmy winner',
      'Golden Globe winner',
      'Critics-recognized performer',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Television and film',
      'Common Genres': 'Drama, sci-fi, superhero',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Rue Bennett', 'Chani', 'MJ', 'Tashi Duncan'],
    videos: ['Fashion feature placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Timothée Chalamet', 'Tom Holland', 'Sam Levinson'],
    social: 'Very high social visibility with young and global audiences.',
    buzz: 98,
    sources: ['https://en.wikipedia.org/wiki/Zendaya'],
  },
  {
    mode: 'actor',
    name: 'Denzel Washington',
    job: 'Actor • Director • Producer',
    initials: 'DW',
    summary:
      'Denzel Washington is known for commanding dramatic roles, leadership characters, and a long career across film and stage.',
    bio: 'Original VEDB demo bio: Denzel Washington is recognized for powerful screen presence, dramatic range, and major roles in crime, history, action, and character-driven films.',
    knownFor: [
      ['Training Day', 2001],
      ['Malcolm X', 1992],
      ['Fences', 2016],
      ['The Equalizer', 2014],
    ],
    awards: [
      'Academy Award winner',
      'Tony Award winner',
      'Golden Globe winner',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film, theater, directing',
      'Common Genres': 'Drama, crime, action',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Alonzo Harris', 'Malcolm X', 'Robert McCall'],
    videos: ['Career interview placeholder', 'Scene analysis placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Spike Lee', 'Antoine Fuqua', 'Viola Davis'],
    social:
      'Strong reputation for prestige performances and widely recognized leading roles.',
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Denzel_Washington'],
  },
  {
    mode: 'actor',
    name: 'Meryl Streep',
    job: 'Actress',
    initials: 'MS',
    summary:
      'Meryl Streep is known for dramatic range, character transformations, and one of the most acclaimed acting careers in film history.',
    bio: 'Original VEDB demo bio: Meryl Streep has built a career across drama, comedy, musicals, and literary adaptations.',
    knownFor: [
      ['The Devil Wears Prada', 2006],
      ["Sophie's Choice", 1982],
      ['Mamma Mia!', 2008],
      ['The Iron Lady', 2011],
    ],
    awards: ['Academy Award winner', 'Golden Globe winner', 'Emmy winner'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and television',
      'Common Genres': 'Drama, comedy, musical',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Miranda Priestly', 'Sophie Zawistowski', 'Donna Sheridan'],
    videos: ['Awards speech placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Robert De Niro', 'Amy Adams', 'Stanley Tucci'],
    social:
      'Frequently discussed as one of the most respected actors of her generation.',
    buzz: 93,
    sources: ['https://en.wikipedia.org/wiki/Meryl_Streep'],
  },
  {
    mode: 'actor',
    name: 'Leonardo DiCaprio',
    job: 'Actor • Producer',
    initials: 'LD',
    summary:
      'Leonardo DiCaprio is known for leading roles in dramas, thrillers, historical films, and major box office movies.',
    bio: 'Original VEDB demo bio: Leonardo DiCaprio’s career includes major collaborations with high-profile directors and roles in survival stories, crime films, romances, and psychological dramas.',
    knownFor: [
      ['Titanic', 1997],
      ['Inception', 2010],
      ['The Revenant', 2015],
      ['The Wolf of Wall Street', 2013],
    ],
    awards: ['Academy Award winner', 'Golden Globe winner', 'BAFTA winner'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and producing',
      'Common Genres': 'Drama, thriller, historical',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Jack Dawson', 'Dom Cobb', 'Hugh Glass'],
    videos: ['Trailer hub placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Martin Scorsese', 'Kate Winslet', 'Christopher Nolan'],
    social:
      'Major global name with strong film and environmental public recognition.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Leonardo_DiCaprio'],
  },
  {
    mode: 'actor',
    name: 'Viola Davis',
    job: 'Actress • Producer',
    initials: 'VD',
    summary:
      'Viola Davis is known for emotional intensity, stage-to-screen excellence, and major work across film, television, and theater.',
    bio: 'Original VEDB demo bio: Viola Davis has built a highly respected career through deeply human performances in dramas, legal stories, historical projects, and character-centered films.',
    knownFor: [
      ['Fences', 2016],
      ['The Help', 2011],
      ['How to Get Away with Murder', 2014],
      ['The Woman King', 2022],
    ],
    awards: ['Academy Award winner', 'Emmy winner', 'Tony Award winner'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film, television, theater',
      'Common Genres': 'Drama, historical, legal',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Annalise Keating', 'Rose Maxson', 'Nanisca'],
    videos: ['Performance interview placeholder', 'Awards moment placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: [
      'Denzel Washington',
      'Octavia Spencer',
      'Gina Prince-Bythewood',
    ],
    social: 'Known for powerful acting and major cultural recognition.',
    buzz: 92,
    sources: ['https://en.wikipedia.org/wiki/Viola_Davis'],
  },
  {
    mode: 'actor',
    name: 'Robert Downey Jr.',
    job: 'Actor • Producer',
    initials: 'RDJ',
    summary:
      'Robert Downey Jr. is known for sharp comic timing, dramatic comeback roles, and blockbuster franchise performances.',
    bio: 'Original VEDB demo bio: Robert Downey Jr. became a central modern movie star through a mix of comedy, drama, mystery, and superhero roles.',
    knownFor: [
      ['Iron Man', 2008],
      ['Sherlock Holmes', 2009],
      ['Oppenheimer', 2023],
      ['Chaplin', 1992],
    ],
    awards: ['Academy Award winner', 'Golden Globe winner', 'BAFTA winner'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and producing',
      'Common Genres': 'Action, comedy, drama',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Tony Stark', 'Sherlock Holmes', 'Lewis Strauss'],
    videos: ['Franchise clip placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Jon Favreau', 'Chris Evans', 'Jude Law'],
    social:
      'High recognition from both franchise audiences and prestige film viewers.',
    buzz: 97,
    sources: ['https://en.wikipedia.org/wiki/Robert_Downey_Jr.'],
  },
  {
    mode: 'actor',
    name: 'Scarlett Johansson',
    job: 'Actress • Producer',
    initials: 'SJ',
    summary:
      'Scarlett Johansson is known for drama, action, voice roles, comedy, and major franchise work.',
    bio: 'Original VEDB demo bio: Scarlett Johansson’s career includes independent drama, ensemble superhero films, voice performances, and acclaimed roles.',
    knownFor: [
      ['Lost in Translation', 2003],
      ['Black Widow', 2021],
      ['Marriage Story', 2019],
      ['Her', 2013],
    ],
    awards: ['Tony Award winner', 'Academy Award nominee', 'BAFTA winner'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and stage',
      'Common Genres': 'Drama, action, comedy',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Natasha Romanoff', 'Charlotte', 'Nicole Barber'],
    videos: ['Action role placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Chris Evans', 'Adam Driver', 'Sofia Coppola'],
    social:
      'Strong public recognition across independent film and blockbuster audiences.',
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/Scarlett_Johansson'],
  },
  {
    mode: 'actor',
    name: 'Tom Cruise',
    job: 'Actor • Producer',
    initials: 'TC',
    summary:
      'Tom Cruise is known for action filmmaking, star-driven blockbusters, and long-running franchise roles.',
    bio: 'Original VEDB demo bio: Tom Cruise has remained a major film star through action, drama, science fiction, and stunt-driven franchise movies.',
    knownFor: [
      ['Top Gun', 1986],
      ['Mission: Impossible', 1996],
      ['Jerry Maguire', 1996],
      ['Top Gun: Maverick', 2022],
    ],
    awards: [
      'Golden Globe winner',
      'Academy Award nominee',
      'Major box-office star',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and producing',
      'Common Genres': 'Action, drama, sci-fi',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Ethan Hunt', 'Pete Mitchell', 'Jerry Maguire'],
    videos: ['Stunt feature placeholder', 'Trailer hub placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Christopher McQuarrie', 'Val Kilmer', 'Cameron Crowe'],
    social:
      'Known for practical action, stunts, and global movie-star recognition.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Tom_Cruise'],
  },
  {
    mode: 'actor',
    name: 'Julia Roberts',
    job: 'Actress • Producer',
    initials: 'JR',
    summary:
      'Julia Roberts is known for romantic comedies, dramas, ensemble films, and enduring movie-star appeal.',
    bio: 'Original VEDB demo bio: Julia Roberts built a major career through romantic comedy, drama, legal stories, and ensemble work.',
    knownFor: [
      ['Pretty Woman', 1990],
      ['Erin Brockovich', 2000],
      ["Ocean's Eleven", 2001],
      ['Notting Hill', 1999],
    ],
    awards: ['Academy Award winner', 'Golden Globe winner', 'BAFTA winner'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and television',
      'Common Genres': 'Romance, comedy, drama',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Vivian Ward', 'Erin Brockovich', 'Anna Scott'],
    videos: ['Rom-com feature placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['George Clooney', 'Richard Gere', 'Hugh Grant'],
    social:
      'Broad recognition from romantic comedy, drama, and ensemble movie audiences.',
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Julia_Roberts'],
  },
  {
    mode: 'actor',
    name: 'Morgan Freeman',
    job: 'Actor • Narrator • Producer',
    initials: 'MF',
    summary:
      'Morgan Freeman is known for his distinctive voice, calm screen presence, dramas, thrillers, and narration work.',
    bio: 'Original VEDB demo bio: Morgan Freeman has built a long career across film, television, narration, drama, mystery, and character-centered stories.',
    knownFor: [
      ['The Shawshank Redemption', 1994],
      ['Million Dollar Baby', 2004],
      ['Se7en', 1995],
      ['Driving Miss Daisy', 1989],
    ],
    awards: [
      'Academy Award winner',
      'Golden Globe winner',
      'Screen Actors Guild recognition',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film, narration, television',
      'Common Genres': 'Drama, mystery, thriller',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Ellis Boyd Redding', 'Detective Somerset', 'Eddie Dupris'],
    videos: ['Narration feature placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Clint Eastwood', 'Tim Robbins', 'Brad Pitt'],
    social:
      'Widely recognized for narration, voice, and classic dramatic roles.',
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Morgan_Freeman'],
  },
];

const titles = [
  {
    mode: 'title',
    name: 'Dune',
    job: 'Movie • Science Fiction • Adventure',
    initials: 'D',
    summary:
      'A large-scale science fiction story centered on power, prophecy, family, and survival on Arrakis.',
    overview:
      'Original VEDB demo overview: Dune presents politics, desert survival, futuristic empires, and a young heir pulled into a dangerous destiny.',
    cast: ['Zendaya', 'Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    characters: ['Chani', 'Paul Atreides', 'Lady Jessica', 'Duke Leto'],
    crew: [
      'Director: Denis Villeneuve',
      'Music: Hans Zimmer',
      'Based on the novel by Frank Herbert',
    ],
    awards: [
      'Academy Award winner — technical categories',
      'Major craft recognition',
    ],
    reviews: ['Review hub placeholder', 'Audience reaction placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder', 'Featurette placeholder'],
    similar: ['Dune: Part Two', 'Blade Runner 2049', 'Arrival'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: { 'Release Year': '2021', Type: 'Movie', Franchise: 'Dune' },
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Dune_(2021_film)'],
  },
  {
    mode: 'title',
    name: 'Euphoria',
    job: 'TV Series • Drama',
    initials: 'EU',
    summary:
      'A drama series focused on young people, identity, relationships, addiction, and emotional pressure.',
    overview:
      'Original VEDB demo overview: Euphoria uses intense drama, visual style, and character-focused storytelling around modern teenage life.',
    cast: ['Zendaya', 'Sydney Sweeney', 'Hunter Schafer', 'Jacob Elordi'],
    characters: ['Rue Bennett', 'Cassie Howard', 'Jules Vaughn', 'Nate Jacobs'],
    crew: ['Creator: Sam Levinson', 'Network/streaming info placeholder'],
    awards: ['Emmy recognition placeholder', 'Acting recognition placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['TV viewership placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Trailer placeholder'],
    similar: ['Challengers', 'Dune', 'The Idol'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      Type: 'TV Series',
      Genre: 'Drama',
      'Photo Status': 'Placeholder only',
    },
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Euphoria_(American_TV_series)'],
  },
  {
    mode: 'title',
    name: 'Iron Man',
    job: 'Movie • Superhero • Action',
    initials: 'IM',
    summary:
      'A superhero origin film centered on Tony Stark, technology, responsibility, and the start of a connected film universe.',
    overview:
      'Original VEDB demo overview: Iron Man combines action, technology, character reinvention, and franchise setup.',
    cast: [
      'Robert Downey Jr.',
      'Gwyneth Paltrow',
      'Terrence Howard',
      'Jeff Bridges',
    ],
    characters: ['Tony Stark', 'Pepper Potts', 'James Rhodes', 'Obadiah Stane'],
    crew: ['Director: Jon Favreau', 'Producer: Marvel Studios'],
    awards: ['Awards placeholder', 'Technical nominations placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    similar: ['The Avengers', 'Black Widow', 'Spider-Man: Homecoming'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      'Release Year': '2008',
      Type: 'Movie',
      Franchise: 'Marvel Cinematic Universe',
    },
    buzz: 97,
    sources: ['https://en.wikipedia.org/wiki/Iron_Man_(2008_film)'],
  },
  {
    mode: 'title',
    name: 'Top Gun: Maverick',
    job: 'Movie • Action • Drama',
    initials: 'TG',
    summary:
      'A legacy action drama about elite naval aviation, mentorship, risk, and returning to a defining role.',
    overview:
      'Original VEDB demo overview: Top Gun: Maverick uses practical-feeling flight sequences, nostalgia, and character stakes to continue the Top Gun story.',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Val Kilmer'],
    characters: [
      'Pete Mitchell',
      'Bradley Bradshaw',
      'Penny Benjamin',
      'Tom Kazansky',
    ],
    crew: ['Director: Joseph Kosinski', 'Producer: Jerry Bruckheimer'],
    awards: [
      'Academy Award recognition placeholder',
      'Sound category recognition placeholder',
    ],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    similar: ['Mission: Impossible', 'Top Gun', 'Ford v Ferrari'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: { 'Release Year': '2022', Type: 'Movie', Franchise: 'Top Gun' },
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Top_Gun:_Maverick'],
  },
  {
    mode: 'title',
    name: 'The Devil Wears Prada',
    job: 'Movie • Comedy • Drama',
    initials: 'DP',
    summary:
      'A fashion-world comedy drama about ambition, mentorship, pressure, identity, and career tradeoffs.',
    overview:
      'Original VEDB demo overview: The Devil Wears Prada follows a young assistant entering a demanding fashion magazine culture led by a powerful editor.',
    cast: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
    characters: [
      'Miranda Priestly',
      'Andy Sachs',
      'Emily Charlton',
      'Nigel Kipling',
    ],
    crew: [
      'Director: David Frankel',
      'Based on the novel by Lauren Weisberger',
    ],
    awards: ['Awards placeholder', 'Acting recognition placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    similar: ['Julie & Julia', 'Mamma Mia!', 'Morning Glory'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: { 'Release Year': '2006', Type: 'Movie', Genre: 'Comedy drama' },
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/The_Devil_Wears_Prada_(film)'],
  },
];

const franchises = [
  {
    mode: 'franchise',
    name: 'Dune',
    job: 'Franchise • Science Fiction',
    initials: 'D',
    summary:
      'A science fiction franchise built around Arrakis, political power, prophecy, ecology, and dynastic conflict.',
    overview:
      'Original VEDB demo overview: Dune can connect books, films, characters, houses, planets, timelines, and where-to-watch links in one sphere.',
    titles: ['Dune', 'Dune: Part Two', 'Dune-related series placeholder'],
    timeline: ['Novel source era', '2021 — Dune film', '2024 — Dune: Part Two'],
    cast: ['Zendaya', 'Timothée Chalamet', 'Rebecca Ferguson'],
    characters: ['Chani', 'Paul Atreides', 'Lady Jessica'],
    awards: ['Craft awards hub placeholder'],
    boxOffice: ['Franchise box office placeholder'],
    facts: {
      Type: 'Science fiction franchise',
      'Photo Status': 'Placeholder only',
      'VEDB Status': 'Demo data',
    },
    videos: ['Trailer hub placeholder'],
    social:
      'High science-fiction audience interest and strong visual identity.',
    whereWatch: ['Where-to-watch links can be added later.'],
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Dune_(franchise)'],
  },
  {
    mode: 'franchise',
    name: 'Mission: Impossible',
    job: 'Franchise • Action • Spy',
    initials: 'MI',
    summary:
      'A spy-action franchise known for practical stunts, global missions, and the Ethan Hunt character.',
    overview:
      'Original VEDB demo overview: Mission: Impossible connects action set pieces, recurring characters, global stories, and a long-running star-led franchise identity.',
    titles: [
      'Mission: Impossible',
      'Ghost Protocol',
      'Rogue Nation',
      'Fallout',
      'Dead Reckoning',
    ],
    timeline: [
      '1996 — Film series begins',
      '2011 — Ghost Protocol era',
      '2018 — Fallout era',
      '2020s — New chapters',
    ],
    cast: ['Tom Cruise', 'Ving Rhames', 'Simon Pegg'],
    characters: ['Ethan Hunt', 'Luther Stickell', 'Benji Dunn'],
    awards: ['Awards hub placeholder'],
    boxOffice: ['Franchise box office placeholder'],
    facts: {
      Type: 'Action franchise',
      'Photo Status': 'Placeholder only',
      'VEDB Status': 'Demo data',
    },
    videos: ['Trailer hub placeholder'],
    social: 'Known for major action sequences and stunt-focused marketing.',
    whereWatch: ['Where-to-watch links can be added later.'],
    buzz: 96,
    sources: [
      'https://en.wikipedia.org/wiki/Mission:_Impossible_(film_series)',
    ],
  },
  {
    mode: 'franchise',
    name: 'Marvel Cinematic Universe',
    job: 'Franchise • Superhero • Action',
    initials: 'MCU',
    summary:
      'A large connected superhero franchise built around heroes, teams, crossover stories, and long-running continuity.',
    overview:
      'Original VEDB demo overview: The Marvel Cinematic Universe can connect movies, shows, characters, actors, timelines, awards, and fan activity in one sphere.',
    titles: [
      'Iron Man',
      'The Avengers',
      'Black Widow',
      'Spider-Man: Homecoming',
    ],
    timeline: [
      '2008 — Iron Man starts the film universe',
      '2012 — Major team-up era',
      '2020s — Expanded film and streaming era',
    ],
    cast: ['Robert Downey Jr.', 'Scarlett Johansson', 'Chris Evans'],
    characters: ['Tony Stark', 'Natasha Romanoff', 'Steve Rogers'],
    awards: ['Awards hub placeholder'],
    boxOffice: ['Franchise box office placeholder'],
    facts: {
      Type: 'Superhero franchise',
      'Photo Status': 'Placeholder only',
      'VEDB Status': 'Demo data',
    },
    videos: ['Trailer hub placeholder'],
    social: 'Very high franchise recognition with global audiences.',
    whereWatch: ['Where-to-watch links can be added later.'],
    buzz: 97,
    sources: ['https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe'],
  },
];

const actorCareerLabelInfo = {
  Zendaya: [
    {
      label: 'Breakout Performer',
      description:
        'Zendaya’s early television visibility helped introduce her to a large young audience before she moved into major dramatic and film roles.',
    },
    {
      label: 'Franchise Star',
      description:
        'Her work in Spider-Man and Dune connects her to two highly recognizable entertainment universes.',
    },
    {
      label: 'Award Recognized',
      description:
        'Her acting work has been recognized by major award groups, especially for dramatic television performance.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Zendaya has strong audience affection because of her mix of acting, fashion visibility, and modern pop-culture presence.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'Her producer credit helps show that her career is not only on-screen performance but also creative involvement behind the project.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'She moves across teen drama, science fiction, superhero films, sports drama, music-adjacent work, and fashion-centered public visibility.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Zendaya is still building her long-term legacy, but she already represents a major modern transition from youth star to prestige performer.',
    },
    {
      label: 'Signature Work',
      description:
        'Euphoria, Dune, Spider-Man: Homecoming, and Challengers are the titles VEDB can use as her early signature work.',
    },
  ],
  'Denzel Washington': [
    {
      label: 'Breakout Performer',
      description:
        'Denzel Washington’s early prestige roles helped establish him as a powerful dramatic actor with major screen presence.',
    },
    {
      label: 'Franchise Star',
      description:
        'The Equalizer gives him a clear action-franchise identity connected to the Robert McCall character.',
    },
    {
      label: 'Award Recognized',
      description:
        'He is strongly award recognized through major film, theater, and industry honors.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with his intensity, authority, confidence, and memorable leadership-style characters.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'His directing and producing work, including projects like Fences, makes him more than only an on-screen performer.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He has worked across drama, crime, biography, action, theater, directing, and historical storytelling.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Denzel Washington is a legacy figure because his career has long-term importance in modern acting history.',
    },
    {
      label: 'Signature Work',
      description:
        'Training Day, Malcolm X, Fences, and The Equalizer are strong VEDB signature-work anchors for his page.',
    },
  ],
  'Meryl Streep': [
    {
      label: 'Breakout Performer',
      description:
        'Meryl Streep’s early dramatic work helped establish her as a serious acting force with unusual range.',
    },
    {
      label: 'Franchise Star',
      description:
        'She is not mainly a franchise star, but Mamma Mia! gives her a recognizable recurring musical-comedy franchise connection.',
    },
    {
      label: 'Award Recognized',
      description:
        'She is one of the clearest examples of an award-recognized performer because of her long history of major nominations and wins.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with her transformations, emotional performances, comedy roles, and iconic characters.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'Her influence helps shape the tone and credibility of many projects, even when her main role is performance.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'She has worked across drama, comedy, musical, biography, romance, literary adaptation, and television.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Meryl Streep is a legacy figure because her career is frequently treated as a benchmark for acting excellence.',
    },
    {
      label: 'Signature Work',
      description:
        'The Devil Wears Prada, Sophie’s Choice, Mamma Mia!, and The Iron Lady are major signature-work examples.',
    },
  ],
  'Leonardo DiCaprio': [
    {
      label: 'Breakout Performer',
      description:
        'Leonardo DiCaprio’s early film success helped move him from young actor to global leading man.',
    },
    {
      label: 'Franchise Star',
      description:
        'He is not mainly a franchise star; his VEDB value is stronger as a prestige-film and director-collaboration figure.',
    },
    {
      label: 'Award Recognized',
      description:
        'His work has received major awards attention across drama, survival stories, crime films, and historical roles.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with his intense performances, major movie events, and long-running star status.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'His producer role and project choices help shape the kinds of films and stories attached to his public brand.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He works across romance, science fiction, crime comedy, survival drama, biography, and psychological drama.',
    },
    {
      label: 'Legacy Figure',
      description:
        'His long run as a major film star makes him a legacy figure in modern movie history.',
    },
    {
      label: 'Signature Work',
      description:
        'Titanic, Inception, The Revenant, and The Wolf of Wall Street are strong signature-work anchors for his VEDB page.',
    },
  ],
  'Viola Davis': [
    {
      label: 'Breakout Performer',
      description:
        'Viola Davis’s breakout came through powerful dramatic work that brought wide attention to her emotional depth and screen presence.',
    },
    {
      label: 'Franchise Star',
      description:
        'Her role as Amanda Waller connects her to a larger DC screen universe, while The Woman King gives her major action-drama visibility.',
    },
    {
      label: 'Award Recognized',
      description:
        'She is strongly award recognized across film, television, and theater.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with her emotional honesty, strength, and commanding performances.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'Her producer work and advocacy-minded project choices help shape stories beyond her acting roles.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'She works across drama, legal thriller, historical action, theater, television, and character-centered film.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Viola Davis is a legacy figure because her career carries major cultural and industry importance.',
    },
    {
      label: 'Signature Work',
      description:
        'Fences, The Help, How to Get Away with Murder, and The Woman King are strong VEDB signature-work examples.',
    },
  ],
  'Robert Downey Jr.': [
    {
      label: 'Breakout Performer',
      description:
        'Robert Downey Jr. built early attention through sharp, charismatic performances before becoming a major modern comeback story.',
    },
    {
      label: 'Franchise Star',
      description:
        'Iron Man and the Marvel Cinematic Universe make him one of the clearest franchise stars in the VEDB starter group.',
    },
    {
      label: 'Award Recognized',
      description:
        'His awards recognition includes both earlier dramatic transformation work and later prestige ensemble films.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect strongly with his humor, confidence, comeback story, and Tony Stark identity.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'His producer work and influence on franchise identity make him part of the creative engine behind his public brand.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He has worked across superhero action, mystery, biography, comedy, drama, and prestige historical film.',
    },
    {
      label: 'Legacy Figure',
      description:
        'He is a legacy figure because his career helped define a major era of superhero film and modern franchise storytelling.',
    },
    {
      label: 'Signature Work',
      description:
        'Iron Man, Sherlock Holmes, Oppenheimer, and Chaplin are strong signature-work anchors.',
    },
  ],
  'Scarlett Johansson': [
    {
      label: 'Breakout Performer',
      description:
        'Scarlett Johansson’s early acclaimed film work helped move her from young performer to major adult film star.',
    },
    {
      label: 'Franchise Star',
      description:
        'Black Widow and the Marvel Cinematic Universe give her a strong franchise-star identity.',
    },
    {
      label: 'Award Recognized',
      description:
        'Her work has received major industry recognition across acting, stage work, and acclaimed dramatic films.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with her action roles, voice performance, dramatic work, and long-running public visibility.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'Her producer credit and project choices show creative involvement beyond acting.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'She works across action, drama, comedy, science fiction romance, voice acting, and stage performance.',
    },
    {
      label: 'Legacy Figure',
      description:
        'She is building legacy status through a long career that spans indie film, blockbuster franchises, and prestige drama.',
    },
    {
      label: 'Signature Work',
      description:
        'Lost in Translation, Black Widow, Marriage Story, and Her are strong signature-work examples.',
    },
  ],
  'Tom Cruise': [
    {
      label: 'Breakout Performer',
      description:
        'Tom Cruise’s early leading roles helped turn him into one of the most recognizable movie stars in the world.',
    },
    {
      label: 'Franchise Star',
      description:
        'Mission: Impossible and Top Gun make him one of the strongest franchise-star examples in this VEDB starter group.',
    },
    {
      label: 'Award Recognized',
      description:
        'His work has received major nominations and awards attention across drama, action, and star-driven films.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with his action commitment, stunt work, movie-star energy, and long-running franchises.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'His producing role and control over major action projects make him a major behind-the-scenes builder.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He works across action, drama, romance, comedy drama, science fiction, military stories, and spy thrillers.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Tom Cruise is a legacy figure because his career represents decades of global movie-star power.',
    },
    {
      label: 'Signature Work',
      description:
        'Top Gun, Mission: Impossible, Jerry Maguire, and Top Gun: Maverick are signature-work anchors.',
    },
  ],
  'Julia Roberts': [
    {
      label: 'Breakout Performer',
      description:
        'Julia Roberts’s breakout came through romantic comedy and drama roles that made her a major movie star.',
    },
    {
      label: 'Franchise Star',
      description:
        'She is not mainly a franchise star, but Ocean’s gives her a recognizable ensemble franchise connection.',
    },
    {
      label: 'Award Recognized',
      description:
        'Her work has received major awards recognition, especially for dramatic and star-driven film roles.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with her warmth, charisma, romantic-comedy appeal, and memorable dramatic roles.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'Her producer work and star influence help shape the projects attached to her public brand.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'She works across romantic comedy, legal drama, ensemble heist films, television, and character drama.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Julia Roberts is a legacy figure because of her long-term impact as one of the most recognizable modern film stars.',
    },
    {
      label: 'Signature Work',
      description:
        'Pretty Woman, Erin Brockovich, Ocean’s Eleven, and Notting Hill are strong signature-work examples.',
    },
  ],
  'Morgan Freeman': [
    {
      label: 'Breakout Performer',
      description:
        'Morgan Freeman’s rise came through memorable dramatic work and a screen presence that became instantly recognizable.',
    },
    {
      label: 'Franchise Star',
      description:
        'He is not mainly a franchise star, but The Dark Knight Trilogy gives him a clear franchise connection.',
    },
    {
      label: 'Award Recognized',
      description:
        'His career includes major awards recognition across drama, supporting roles, and classic films.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with his calm presence, voice, narration style, and memorable wise-character roles.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'His narration and producing work help shape the tone and identity of projects beyond standard acting.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He works across drama, thriller, mystery, narration, sports drama, and character-centered storytelling.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Morgan Freeman is a legacy figure because his voice, roles, and screen presence have long-term cultural recognition.',
    },
    {
      label: 'Signature Work',
      description:
        'The Shawshank Redemption, Million Dollar Baby, Se7en, and Driving Miss Daisy are strong signature-work anchors.',
    },
  ],
};

const vedbCareerLabels = [
  {
    label: 'Breakout Performer',
    description:
      'A person whose role helped bring major attention to their career.',
  },
  {
    label: 'Franchise Star',
    description:
      'A person strongly connected to a major entertainment universe or recurring series.',
  },
  {
    label: 'Award Recognized',
    description:
      'A person or title that received major nominations, wins, or industry honors.',
  },
  {
    label: 'Fan Favorite',
    description:
      'A person, character, or title with strong audience affection or cultural popularity.',
  },
  {
    label: 'Behind-the-Scenes Builder',
    description:
      'A creator, crew member, or company whose work shaped the final title even if they were not on screen.',
  },
  {
    label: 'Multi-Genre Talent',
    description:
      'A person known for working successfully across different types of stories or formats.',
  },
  {
    label: 'Legacy Figure',
    description:
      'A person or title with long-term importance in entertainment history.',
  },
  {
    label: 'Signature Work',
    description:
      'The major titles or roles people quickly connect with a performer.',
  },
];

const vedbSectionLabels = [
  {
    label: 'Story Snapshot',
    description:
      'A quick, spoiler-light look at what the movie, show, or episode is about.',
  },
  {
    label: 'Deep Story View',
    description: 'A fuller story explanation for users who want more detail.',
  },
  {
    label: 'Makers & Performers',
    description:
      'The people who performed in, created, shaped, or helped build the title.',
  },
  {
    label: 'Verified Fun Facts',
    description:
      'Short, interesting details that should be verified before public publishing.',
  },
  {
    label: 'Sphere Links',
    description:
      'Connections between people, titles, characters, franchises, and companies.',
  },
  {
    label: 'Money & Reach',
    description:
      'Box office, audience size, platform reach, or business impact.',
  },
  {
    label: 'Production Details',
    description:
      'Details about who made it, how it was made, where it was made, and the creative team behind it.',
  },
  {
    label: 'Recognition',
    description: 'Awards, nominations, honors, and major industry respect.',
  },
  {
    label: 'Industry Updates',
    description:
      'News-style updates about the person, title, franchise, or entertainment world.',
  },
  {
    label: 'Audience Momentum',
    description: 'Popularity, buzz, fan activity, and cultural energy.',
  },
  {
    label: 'Career Timeline',
    description: 'A clear timeline of major career or release milestones.',
  },
  {
    label: 'Audience Reactions',
    description:
      'Fan response, review-style reactions, and audience discussion.',
  },
  {
    label: 'Media Gallery',
    description:
      'Photos, videos, trailers, interviews, stills, and approved media.',
  },
];

const sphereSets = {
  actor: [
    {
      id: 'biography',
      icon: '♙',
      title: 'BIOGRAPHY',
      small: 'life',
      theta: 0.1,
      phi: 2.55,
    },
    {
      id: 'careerLabels',
      icon: '🏷',
      title: 'CAREER LABELS',
      small: 'VEDB',
      theta: 1.05,
      phi: 2.48,
    },
    {
      id: 'photos',
      icon: '📷',
      title: 'MEDIA GALLERY',
      small: 'photos',
      theta: 1.85,
      phi: 2.38,
    },
    {
      id: 'videos',
      icon: '▷',
      title: 'VIDEOS',
      small: 'clips',
      theta: 2.75,
      phi: 2.35,
    },
    {
      id: 'awards',
      icon: '🏆',
      title: 'RECOGNITION',
      small: 'honors',
      theta: 5.65,
      phi: 1.85,
    },
    {
      id: 'filmography',
      icon: '★',
      title: 'SIGNATURE WORK',
      small: 'titles',
      theta: 0.65,
      phi: 1.65,
    },
    {
      id: 'facts',
      icon: '💡',
      title: 'VERIFIED FACTS',
      small: 'quick',
      theta: 2.05,
      phi: 1.55,
    },
    {
      id: 'characters',
      icon: '🎭',
      title: 'CHARACTERS',
      small: 'roles',
      theta: 3.45,
      phi: 1.52,
    },
    {
      id: 'timeline',
      icon: '⌛',
      title: 'CAREER TIMELINE',
      small: 'career',
      theta: 4.85,
      phi: 1.62,
    },
    {
      id: 'social',
      icon: '〽',
      title: 'AUDIENCE MOMENTUM',
      small: 'buzz',
      theta: 0.2,
      phi: 0.72,
    },
    {
      id: 'collaborators',
      icon: '♙♙',
      title: 'SPHERE LINKS',
      small: 'people',
      theta: 1.85,
      phi: 0.62,
    },
    {
      id: 'quotes',
      icon: '❝',
      title: 'AUDIENCE REACTIONS',
      small: 'quotes',
      theta: 3.55,
      phi: 0.68,
    },
    {
      id: 'interviews',
      icon: '🎙',
      title: 'INDUSTRY UPDATES',
      small: 'press',
      theta: 5.15,
      phi: 0.58,
    },
  ],
  title: [
    {
      id: 'storySnapshot',
      icon: '◎',
      title: 'STORY SNAPSHOT',
      small: 'quick',
      theta: 0.1,
      phi: 2.55,
    },
    {
      id: 'deepStory',
      icon: '☰',
      title: 'DEEP STORY',
      small: 'detail',
      theta: 1.05,
      phi: 2.48,
    },
    {
      id: 'makersPerformers',
      icon: '♙',
      title: 'MAKERS & PERFORMERS',
      small: 'cast',
      theta: 1.85,
      phi: 2.38,
    },
    {
      id: 'verifiedFunFacts',
      icon: '💡',
      title: 'VERIFIED FUN FACTS',
      small: 'facts',
      theta: 2.75,
      phi: 2.35,
    },
    {
      id: 'sphereLinks',
      icon: '⬟',
      title: 'SPHERE LINKS',
      small: 'connect',
      theta: 5.65,
      phi: 1.85,
    },
    {
      id: 'moneyReach',
      icon: '$',
      title: 'MONEY & REACH',
      small: 'business',
      theta: 0.65,
      phi: 1.65,
    },
    {
      id: 'productionDetails',
      icon: '🎬',
      title: 'PRODUCTION DETAILS',
      small: 'crew',
      theta: 2.05,
      phi: 1.55,
    },
    {
      id: 'recognition',
      icon: '🏆',
      title: 'RECOGNITION',
      small: 'awards',
      theta: 3.45,
      phi: 1.52,
    },
    {
      id: 'industryUpdates',
      icon: '📰',
      title: 'INDUSTRY UPDATES',
      small: 'news',
      theta: 4.85,
      phi: 1.62,
    },
    {
      id: 'audienceMomentum',
      icon: '〽',
      title: 'AUDIENCE MOMENTUM',
      small: 'buzz',
      theta: 0.2,
      phi: 0.72,
    },
    {
      id: 'careerTimeline',
      icon: '⌛',
      title: 'CAREER TIMELINE',
      small: 'time',
      theta: 1.85,
      phi: 0.62,
    },
    {
      id: 'audienceReactions',
      icon: '★',
      title: 'AUDIENCE REACTIONS',
      small: 'reviews',
      theta: 3.55,
      phi: 0.68,
    },
    {
      id: 'mediaGallery',
      icon: '📷',
      title: 'MEDIA GALLERY',
      small: 'media',
      theta: 5.15,
      phi: 0.58,
    },
  ],
  franchise: [
    {
      id: 'storySnapshot',
      icon: '◎',
      title: 'STORY SNAPSHOT',
      small: 'quick',
      theta: 0.1,
      phi: 2.55,
    },
    {
      id: 'deepStory',
      icon: '☰',
      title: 'DEEP STORY',
      small: 'detail',
      theta: 1.05,
      phi: 2.48,
    },
    {
      id: 'makersPerformers',
      icon: '♙',
      title: 'MAKERS & PERFORMERS',
      small: 'cast',
      theta: 1.85,
      phi: 2.38,
    },
    {
      id: 'verifiedFunFacts',
      icon: '💡',
      title: 'VERIFIED FUN FACTS',
      small: 'facts',
      theta: 2.75,
      phi: 2.35,
    },
    {
      id: 'sphereLinks',
      icon: '⬟',
      title: 'SPHERE LINKS',
      small: 'connect',
      theta: 5.65,
      phi: 1.85,
    },
    {
      id: 'moneyReach',
      icon: '$',
      title: 'MONEY & REACH',
      small: 'business',
      theta: 0.65,
      phi: 1.65,
    },
    {
      id: 'productionDetails',
      icon: '🎬',
      title: 'PRODUCTION DETAILS',
      small: 'details',
      theta: 2.05,
      phi: 1.55,
    },
    {
      id: 'recognition',
      icon: '🏆',
      title: 'RECOGNITION',
      small: 'awards',
      theta: 3.45,
      phi: 1.52,
    },
    {
      id: 'industryUpdates',
      icon: '📰',
      title: 'INDUSTRY UPDATES',
      small: 'news',
      theta: 4.85,
      phi: 1.62,
    },
    {
      id: 'audienceMomentum',
      icon: '〽',
      title: 'AUDIENCE MOMENTUM',
      small: 'buzz',
      theta: 0.2,
      phi: 0.72,
    },
    {
      id: 'careerTimeline',
      icon: '⌛',
      title: 'CAREER TIMELINE',
      small: 'timeline',
      theta: 1.85,
      phi: 0.62,
    },
    {
      id: 'audienceReactions',
      icon: '★',
      title: 'AUDIENCE REACTIONS',
      small: 'fans',
      theta: 3.55,
      phi: 0.68,
    },
    {
      id: 'mediaGallery',
      icon: '📷',
      title: 'MEDIA GALLERY',
      small: 'media',
      theta: 5.15,
      phi: 0.58,
    },
  ],
};

let currentMode = 'actor';
let currentEntity = null;
let currentSection = 'filmography';

let lastActor = null;
let lastTitle = null;
let lastFranchise = null;

let rotY = 0;
let rotX = 0.18;
let isDragging = false;
let lastPointer = { x: 0, y: 0 };
let latestSearchMatches = [];

const $ = (id) => document.getElementById(id);
const allItems = [...actors, ...titles, ...franchises];

function init__duplicate_disabled_1() {
  buildSphereNodes();
  setupSphereDrag();
  setupSearch();

  const startupEntity = getVEDBStartupEntity();

  if (startupEntity) {
    loadEntity(startupEntity);
  }

  animateSphere();
}

function getSections() {
  return sphereSets[currentMode] || sphereSets.actor;
}

function buildSphereNodes() {
  const holder = $('sphereNodes');
  holder.innerHTML = '';

  getSections().forEach((section) => {
    const button = document.createElement('button');
    button.className = 'sphere-node';
    button.dataset.section = section.id;
    button.innerHTML = `
      <div class="node-icon">${section.icon}</div>
      <div class="node-title">${section.title}</div>
      <div class="node-small">${section.small}</div>
    `;

    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      openSectionPage(section.id);
    });

    holder.appendChild(button);
  });

  updateSpherePositions();
}

function rotatePoint(x, y, z) {
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const x1 = x * cosY + z * sinY;
  const z1 = -x * sinY + z * cosY;

  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);
  const y1 = y * cosX - z1 * sinX;
  const z2 = y * sinX + z1 * cosX;

  return { x: x1, y: y1, z: z2 };
}

function updateSpherePositions() {
  const sphere = $('rotatingSphere');
  if (!sphere) return;

  const rect = sphere.getBoundingClientRect();
  const size = rect.width || 540;
  const radius = size * 0.37;
  const center = size / 2;
  const sections = getSections();

  document.querySelectorAll('.sphere-node').forEach((node, index) => {
    const s = sections[index];
    if (!s) return;

    const x = Math.sin(s.phi) * Math.cos(s.theta);
    const y = Math.cos(s.phi);
    const z = Math.sin(s.phi) * Math.sin(s.theta);
    const p = rotatePoint(x, y, z);

    const depth = (p.z + 1) / 2;
    const scale = 0.74 + depth * 0.28;
    const opacity = 0.6 + depth * 0.4;
    const blur = p.z < -0.35 ? 'blur(0.35px)' : 'none';

    const nodeW = node.offsetWidth || 112;
    const nodeH = node.offsetHeight || 64;

    node.style.left = `${center + p.x * radius - nodeW / 2}px`;
    node.style.top = `${center + p.y * radius - nodeH / 2}px`;
    node.style.transform = `scale(${scale})`;
    node.style.opacity = opacity;
    node.style.zIndex = Math.round(100 + p.z * 100);
    node.style.filter = blur;
  });
}

function animateSphere() {
  const toggle = $('autoRotateToggle');
  const shouldRotate = toggle && toggle.checked && !isDragging;

  if (shouldRotate) {
    rotY += 0.0024;
    updateSpherePositions();
  }

  requestAnimationFrame(animateSphere);
}

function setupSphereDrag() {
  const sphere = $('rotatingSphere');
  if (!sphere) return;

  sphere.addEventListener('pointerdown', function (event) {
    if (event.target.closest('.sphere-node')) return;

    isDragging = true;
    lastPointer.x = event.clientX;
    lastPointer.y = event.clientY;
    sphere.setPointerCapture(event.pointerId);
  });

  sphere.addEventListener('pointermove', function (event) {
    if (!isDragging) return;

    const dx = event.clientX - lastPointer.x;
    const dy = event.clientY - lastPointer.y;

    rotY += dx * 0.005;
    rotX -= dy * 0.004;
    rotX = Math.max(-0.95, Math.min(0.95, rotX));

    lastPointer.x = event.clientX;
    lastPointer.y = event.clientY;

    updateSpherePositions();
  });

  sphere.addEventListener('pointerup', function () {
    isDragging = false;
  });

  sphere.addEventListener('pointercancel', function () {
    isDragging = false;
  });

  window.addEventListener('resize', updateSpherePositions);
}

function resetSphere() {
  rotY = 0;
  rotX = 0.18;
  updateSpherePositions();
}

function loadEntity(entity) {
  if (!entity) return;
  rememberVEDBEntity(entity);
  currentEntity = entity;
  currentMode = entity.mode;
  currentSection = defaultSection();

  if (entity.mode === 'actor') lastActor = entity;
  if (entity.mode === 'title') lastTitle = entity;
  if (entity.mode === 'franchise') lastFranchise = entity;

  hideSearch();
  $('searchInput').value = '';

  $('sphereTitle').textContent = labelForMode().toUpperCase();
  $('profileLabel').textContent = labelForMode().toUpperCase();
  $('entityInitials').textContent = entity.initials;
  $('entityName').textContent = entity.name.toUpperCase();
  $('entityJob').textContent = entity.job.toUpperCase();
  $('entitySummary').textContent = entity.summary || entity.overview;

  setQuickButtons();
  buildCards();
  buildSphereNodes();
  highlightSphereNode(currentSection);
  showMainPage();

  window.location.hash = '#/' + currentMode + '/' + makeSlug(entity.name);
  setNavForMode();
}

function defaultSection() {
  if (currentMode === 'actor') return 'filmography';
  return 'storySnapshot';
}

function labelForMode() {
  if (currentMode === 'title') return 'Title Sphere';
  if (currentMode === 'franchise') return 'Franchise Sphere';
  return 'Actor Sphere';
}

function setQuickButtons() {
  const b1 = $('quickButton1');
  const b2 = $('quickButton2');
  const b3 = $('quickButton3');

  if (currentMode === 'actor') {
    b1.textContent = 'Career Labels';
    b2.textContent = 'Signature Work';
    b3.textContent = 'Recognition';
    b1.onclick = () => openSectionPage('careerLabels');
    b2.onclick = () => openSectionPage('filmography');
    b3.onclick = () => openSectionPage('awards');
    return;
  }

  if (currentMode === 'title') {
    b1.textContent = 'Story Snapshot';
    b2.textContent = 'Makers & Performers';
    b3.textContent = 'Recognition';
    b1.onclick = () => openSectionPage('storySnapshot');
    b2.onclick = () => openSectionPage('makersPerformers');
    b3.onclick = () => openSectionPage('recognition');
    return;
  }

  b1.textContent = 'Story Snapshot';
  b2.textContent = 'Sphere Links';
  b3.textContent = 'Career Timeline';
  b1.onclick = () => openSectionPage('storySnapshot');
  b2.onclick = () => openSectionPage('sphereLinks');
  b3.onclick = () => openSectionPage('careerTimeline');
}

function buildCards() {
  const grid = $('cardsGrid');

  if (currentMode === 'actor') {
    grid.innerHTML = `
      <article class="info-card wide">
        <h3>🏷 Career Labels</h3>
        <p>Open this page to see ${
          currentEntity.name
        }'s own VEDB career labels, including Breakout Performer, Franchise Star, Fan Favorite, Legacy Figure, and Signature Work.</p>
        <button onclick="openSectionPage('careerLabels')">View ${
          currentEntity.name
        }'s Career Labels →</button>
      </article>

      <article class="info-card">
        <h3>★ Signature Work</h3>
        ${previewPairs(currentEntity.knownFor)}
        <button onclick="openSectionPage('filmography')">View Signature Work →</button>
      </article>

      <article class="info-card">
        <h3>🏆 Recognition</h3>
        ${previewList(currentEntity.awards)}
        <button onclick="openSectionPage('awards')">View Recognition →</button>
      </article>

      <article class="info-card">
        <h3>💡 Verified Fun Facts</h3>
        ${previewFacts(currentEntity.facts)}
        <button onclick="openSectionPage('facts')">View Facts →</button>
      </article>

      <article class="info-card wide">
        <h3>📷 Media Gallery</h3>
        ${photoTiles(currentEntity.initials, 4)}
        <button onclick="openSectionPage('photos')">View Media Gallery →</button>
      </article>

      <article class="info-card">
        <h3>〽 Audience Momentum</h3>
        <div class="buzz-score">${currentEntity.buzz}</div>
        <button onclick="openSectionPage('social')">View Momentum →</button>
      </article>
    `;
    return;
  }

  if (currentMode === 'title') {
    grid.innerHTML = `
      <article class="info-card wide">
        <h3>◎ Story Snapshot</h3>
        <p>${currentEntity.summary}</p>
        <button onclick="openSectionPage('storySnapshot')">Open Story Snapshot →</button>
      </article>

      <article class="info-card">
        <h3>♙ Makers & Performers</h3>
        ${previewList(currentEntity.cast)}
        <button onclick="openSectionPage('makersPerformers')">View Makers & Performers →</button>
      </article>

      <article class="info-card">
        <h3>🎭 Characters</h3>
        ${previewList(currentEntity.characters)}
        <button onclick="openSectionPage('characters')">View Characters →</button>
      </article>

      <article class="info-card">
        <h3>🏆 Recognition</h3>
        ${previewList(currentEntity.awards)}
        <button onclick="openSectionPage('recognition')">View Recognition →</button>
      </article>

      <article class="info-card wide">
        <h3>📷 Media Gallery</h3>
        ${photoTiles(currentEntity.initials, 4)}
        <button onclick="openSectionPage('mediaGallery')">View Media Gallery →</button>
      </article>

      <article class="info-card">
        <h3>〽 Audience Momentum</h3>
        <div class="buzz-score">${currentEntity.buzz}</div>
        <button onclick="openSectionPage('audienceMomentum')">View Momentum →</button>
      </article>
    `;
    return;
  }

  grid.innerHTML = `
    <article class="info-card wide">
      <h3>◎ Story Snapshot</h3>
      <p>${currentEntity.summary}</p>
      <button onclick="openSectionPage('storySnapshot')">Open Story Snapshot →</button>
    </article>

    <article class="info-card">
      <h3>⬟ Sphere Links</h3>
      ${previewList(currentEntity.titles)}
      <button onclick="openSectionPage('sphereLinks')">View Sphere Links →</button>
    </article>

    <article class="info-card">
      <h3>⌛ Career Timeline</h3>
      ${previewList(currentEntity.timeline)}
      <button onclick="openSectionPage('careerTimeline')">View Timeline →</button>
    </article>

    <article class="info-card">
      <h3>♙ Makers & Performers</h3>
      ${previewList(currentEntity.cast)}
      <button onclick="openSectionPage('makersPerformers')">View Makers & Performers →</button>
    </article>

    <article class="info-card wide">
      <h3>📷 Media Gallery</h3>
      ${photoTiles(currentEntity.initials, 4)}
      <button onclick="openSectionPage('mediaGallery')">View Media Gallery →</button>
    </article>

    <article class="info-card">
      <h3>〽 Audience Momentum</h3>
      <div class="buzz-score">${currentEntity.buzz}</div>
      <button onclick="openSectionPage('audienceMomentum')">View Momentum →</button>
    </article>
  `;
}

function previewPairs(items) {
  return (items || [])
    .slice(0, 4)
    .map(
      ([title, year]) =>
        `<div class="preview-row"><span>${title}</span><b>${year}</b></div>`
    )
    .join('');
}

function previewList(items) {
  return (items || [])
    .slice(0, 4)
    .map((item) => `<p><b>${item}</b></p>`)
    .join('');
}

function previewFacts(facts) {
  return Object.entries(facts || {})
    .slice(0, 4)
    .map(
      ([key, value]) =>
        `<div class="preview-row"><span>${key}</span><b>${value}</b></div>`
    )
    .join('');
}

function labelCards(labels) {
  return `
    <div class="cards-grid">
      ${(labels || [])
        .map(
          (item) => `
        <article class="info-card">
          <h3>${item.label}</h3>
          <p>${item.description}</p>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function highlightSphereNode(sectionId) {
  document.querySelectorAll('.sphere-node').forEach((node) => {
    node.classList.toggle('active', node.dataset.section === sectionId);
  });
}

function openSectionPage(sectionId) {
  currentSection = sectionId;
  highlightSphereNode(sectionId);
  hideSearch();

  const section = getSections().find((item) => item.id === sectionId);
  const sectionTitle = section ? section.title : sectionId.toUpperCase();

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">${labelForMode().toUpperCase()} SECTION PAGE</div>
          <h2>${currentEntity.name} — ${sectionTitle}</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to ${labelForMode()}</button>
      </div>

      <div class="section-page-content">
        ${buildSectionContent(sectionId)}
      </div>
    </div>
  `;

  window.location.hash =
    '#/' + currentMode + '/' + makeSlug(currentEntity.name) + '/' + sectionId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToSphere() {
  showMainPage();
  window.location.hash =
    '#/' + currentMode + '/' + makeSlug(currentEntity.name);
}

function showMainPage() {
  $('sectionPage').style.display = 'none';
  $('mainPage').style.display = 'grid';
}

function buildSectionContent(sectionId) {
  if (currentMode === 'actor') return actorSection(sectionId);
  if (currentMode === 'title') return titleSection(sectionId);
  return franchiseSection(sectionId);
}

function actorSection(sectionId) {
  const a = currentEntity;

  if (sectionId === 'careerLabels') {
    const customLabels = actorCareerLabelInfo[a.name] || vedbCareerLabels;

    return `
      <p>
        These are ${
          a.name
        }'s VEDB Career Labels. Each card explains how this actor fits into your entertainment database language.
      </p>
      ${labelCards(customLabels)}
    `;
  }

  if (sectionId === 'biography')
    return `<p>${a.bio}</p><p>${a.summary}</p>${sourceBlock(a)}`;
  if (sectionId === 'filmography')
    return listWithSources(
      (a.knownFor || []).map(([title, year]) => `<b>${title}</b> — ${year}`),
      a
    );
  if (sectionId === 'awards') return listWithSources(a.awards, a);
  if (sectionId === 'facts')
    return listWithSources(
      Object.entries(a.facts || {}).map(
        ([key, value]) => `<b>${key}:</b> ${value}`
      ),
      a
    );
  if (sectionId === 'photos')
    return `<p>Use actor-approved photos, licensed images, official press-kit images, or your own legally cleared photography.</p>${photoTiles(
      a.initials,
      8
    )}`;
  if (sectionId === 'videos') return listHTML(a.videos);
  if (sectionId === 'characters') return listHTML(a.characters);
  if (sectionId === 'timeline')
    return listHTML([
      'Early work: add early career milestones.',
      'Breakout period: add major breakout titles.',
      'Current period: add recent public projects.',
    ]);
  if (sectionId === 'social')
    return `<p><b>Audience Momentum score:</b> ${a.buzz}</p><p>${a.social}</p>`;
  if (sectionId === 'collaborators') return linkedActorList(a.collaborators);
  if (sectionId === 'quotes') return listHTML(a.quotes);
  if (sectionId === 'interviews')
    return `<p>Industry Updates placeholder. Add publicist-approved Q&A, press tour videos, verified news, or your own VEDB interviews.</p>`;

  return `<p>This section is ready to be expanded.</p>`;
}

function titleSection(sectionId) {
  const t = currentEntity;

  if (sectionId === 'storySnapshot')
    return `<p><b>Story Snapshot:</b> ${t.summary}</p>${sourceBlock(t)}`;
  if (sectionId === 'deepStory')
    return `<p><b>Deep Story View:</b> ${t.overview}</p><p>Later, you can add spoiler controls here so users can choose how much story detail they want.</p>`;
  if (sectionId === 'makersPerformers')
    return `<h3>Performers</h3>${linkedActorList(
      t.cast
    )}<h3>Makers</h3>${listHTML(t.crew)}`;
  if (sectionId === 'verifiedFunFacts') return listHTML(t.trivia);
  if (sectionId === 'sphereLinks') return linkedTitleList(t.similar);
  if (sectionId === 'moneyReach') return listHTML(t.boxOffice);
  if (sectionId === 'productionDetails') return listHTML(t.crew);
  if (sectionId === 'recognition') return listWithSources(t.awards, t);
  if (sectionId === 'industryUpdates')
    return `<p>Industry Updates placeholder. Add verified updates, release news, casting updates, production news, and VEDB editorial notes here.</p>`;
  if (sectionId === 'audienceMomentum')
    return `<p><b>Audience Momentum score:</b> ${t.buzz}</p><p>This section can later include popularity, social activity, trending status, and fan interest.</p>`;
  if (sectionId === 'careerTimeline')
    return listHTML([
      t.facts?.['Release Year']
        ? `${t.facts['Release Year']} — Release year`
        : 'Release timeline placeholder.',
      'Add production dates, festival dates, streaming dates, and major milestones here.',
    ]);
  if (sectionId === 'audienceReactions') return listHTML(t.reviews);
  if (sectionId === 'mediaGallery')
    return `<p>Use licensed stills, official press images, trailers, interviews, and approved media only.</p>${photoTiles(
      t.initials,
      8
    )}`;

  if (sectionId === 'overview')
    return `<p>${t.overview}</p><p>${t.summary}</p>${sourceBlock(t)}`;
  if (sectionId === 'cast') return linkedActorList(t.cast);
  if (sectionId === 'characters') return listHTML(t.characters);
  if (sectionId === 'crew') return listHTML(t.crew);
  if (sectionId === 'awards') return listWithSources(t.awards, t);
  if (sectionId === 'reviews') return listHTML(t.reviews);
  if (sectionId === 'boxOffice') return listHTML(t.boxOffice);
  if (sectionId === 'trivia') return listHTML(t.trivia);
  if (sectionId === 'photos')
    return `<p>Use licensed stills, official press images, or approved images only.</p>${photoTiles(
      t.initials,
      8
    )}`;
  if (sectionId === 'videos') return listHTML(t.videos);
  if (sectionId === 'similar') return linkedTitleList(t.similar);
  if (sectionId === 'whereWatch') return listHTML(t.whereWatch);

  return `<p>This section is ready to be expanded.</p>`;
}

function franchiseSection(sectionId) {
  const f = currentEntity;

  if (sectionId === 'storySnapshot')
    return `<p><b>Story Snapshot:</b> ${f.summary}</p>${sourceBlock(f)}`;
  if (sectionId === 'deepStory')
    return `<p><b>Deep Story View:</b> ${f.overview}</p><p>Later, this page can explain the full franchise universe, major eras, story arcs, and spoiler-controlled details.</p>`;
  if (sectionId === 'makersPerformers') return linkedActorList(f.cast);
  if (sectionId === 'verifiedFunFacts')
    return listHTML(
      Object.entries(f.facts || {}).map(
        ([key, value]) => `<b>${key}:</b> ${value}`
      )
    );
  if (sectionId === 'sphereLinks') return linkedTitleList(f.titles);
  if (sectionId === 'moneyReach') return listHTML(f.boxOffice);
  if (sectionId === 'productionDetails')
    return listHTML(
      Object.entries(f.facts || {}).map(
        ([key, value]) => `<b>${key}:</b> ${value}`
      )
    );
  if (sectionId === 'recognition') return listHTML(f.awards);
  if (sectionId === 'industryUpdates')
    return `<p>Industry Updates placeholder. Add verified franchise news, release updates, casting updates, and production notes here.</p>`;
  if (sectionId === 'audienceMomentum')
    return `<p><b>Audience Momentum score:</b> ${f.buzz}</p><p>${f.social}</p>`;
  if (sectionId === 'careerTimeline') return listHTML(f.timeline);
  if (sectionId === 'audienceReactions')
    return `<p>Audience Reactions placeholder. Add fan response, review summaries, and community discussion here.</p>`;
  if (sectionId === 'mediaGallery')
    return `<p>Use licensed or approved franchise images, trailers, interviews, and official media only.</p>${photoTiles(
      f.initials,
      8
    )}`;

  if (sectionId === 'overview')
    return `<p>${f.overview}</p><p>${f.summary}</p>${sourceBlock(f)}`;
  if (sectionId === 'titles') return linkedTitleList(f.titles);
  if (sectionId === 'timeline') return listHTML(f.timeline);
  if (sectionId === 'characters') return listHTML(f.characters);
  if (sectionId === 'cast') return linkedActorList(f.cast);
  if (sectionId === 'boxOffice') return listHTML(f.boxOffice);
  if (sectionId === 'awards') return listHTML(f.awards);
  if (sectionId === 'facts')
    return listHTML(
      Object.entries(f.facts || {}).map(
        ([key, value]) => `<b>${key}:</b> ${value}`
      )
    );
  if (sectionId === 'photos')
    return `<p>Use licensed or approved franchise images only.</p>${photoTiles(
      f.initials,
      8
    )}`;
  if (sectionId === 'videos') return listHTML(f.videos);
  if (sectionId === 'social')
    return `<p><b>Buzz score:</b> ${f.buzz}</p><p>${f.social}</p>`;
  if (sectionId === 'whereWatch') return listHTML(f.whereWatch);

  return `<p>This section is ready to be expanded.</p>`;
}

function linkedActorList(names) {
  return `<ul>${(names || [])
    .map((name) => {
      const found = actors.find((actor) => actor.name === name);
      return found
        ? `<li><button class="inline-link" onclick="loadEntityByName('actor','${escapeForClick(
            name
          )}')">${name}</button></li>`
        : `<li>${name}</li>`;
    })
    .join('')}</ul>`;
}

function linkedTitleList(names) {
  return `<ul>${(names || [])
    .map((name) => {
      const found = titles.find((title) => title.name === name);
      return found
        ? `<li><button class="inline-link" onclick="loadEntityByName('title','${escapeForClick(
            name
          )}')">${name}</button></li>`
        : `<li>${name}</li>`;
    })
    .join('')}</ul>`;
}

function listHTML(items) {
  return `<ul>${(items || []).map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

function listWithSources(items, entity) {
  return `${listHTML(items)}${sourceBlock(entity)}`;
}

function sourceBlock(entity) {
  if (!entity.sources || entity.sources.length === 0) return '';
  return `
    <div class="source-list">
      <p><b>Starter source link for verification:</b></p>
      ${entity.sources
        .map(
          (source) =>
            `<p><a href="${source}" target="_blank" rel="noopener">${source}</a></p>`
        )
        .join('')}
    </div>
  `;
}

function photoTiles(initials, count) {
  return `<div class="placeholder-photos">
    ${Array.from(
      { length: count },
      () => `<div class="photo-tile">${initials}</div>`
    ).join('')}
  </div>`;
}

function setupSearch__duplicate_disabled_1() {
  $('searchInput').addEventListener('input', runSearch);

  $('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') chooseFirstSearchMatch();
    if (event.key === 'Escape') hideSearch();
  });

  $('searchButton').addEventListener('click', chooseFirstSearchMatch);

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.search-area')) hideSearch();
  });
}

function runSearch__duplicate_disabled_1() {
  const query = $('searchInput').value.trim().toLowerCase();

  if (!query) {
    hideSearch();
    return;
  }

  latestSearchMatches = allItems.filter((item) =>
    searchText(item).includes(query)
  );

  const exactMatch = allItems.find((item) => item.name.toLowerCase() === query);
  if (exactMatch) {
    latestSearchMatches = [
      exactMatch,
      ...latestSearchMatches.filter((item) => item.name !== exactMatch.name),
    ];
  }

  if (latestSearchMatches.length === 0) {
    $(
      'searchResults'
    ).innerHTML = `<div class="result-row">No results found</div>`;
    $('searchResults').style.display = 'block';
    return;
  }

  renderSearchResults(latestSearchMatches.slice(0, 12));
}

function renderSearchResults__duplicate_disabled_1(matches) {
  const box = $('searchResults');
  box.innerHTML = '';

  matches.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'result-row';
    row.innerHTML = `
      <span><b>${item.name}</b><br><small>${modeName(item.mode)} • ${
      item.job
    }</small></span>
      <span>Open →</span>
    `;

    row.addEventListener('mousedown', function (event) {
      event.preventDefault();
      chooseEntity(item);
    });

    box.appendChild(row);
  });

  box.style.display = 'block';
}

function chooseFirstSearchMatch__duplicate_disabled_1() {
  const query = $('searchInput').value.trim();

  if (!query) {
    hideSearch();
    return;
  }

  runSearch();

  if (latestSearchMatches.length > 0) {
    chooseEntity(latestSearchMatches[0]);
  }
}

function chooseEntity__duplicate_disabled_1(entity) {
  $('searchInput').value = '';
  hideSearch();
  loadEntity(entity);
}

function searchText__duplicate_disabled_1(item) {
  const careerLabelText = Object.values(actorCareerLabelInfo)
    .flat()
    .map((row) => row.label + ' ' + row.description)
    .join(' ');

  return [
    item.name,
    item.job,
    item.summary,
    item.bio,
    item.overview,
    item.knownFor?.map((row) => row[0]).join(' '),
    item.awards?.join(' '),
    item.characters?.join(' '),
    item.collaborators?.join(' '),
    item.cast?.join(' '),
    item.crew?.join(' '),
    item.titles?.join(' '),
    item.timeline?.join(' '),
    item.similar?.join(' '),
    item.social,
    careerLabelText,
    vedbCareerLabels.map((label) => label.label).join(' '),
    vedbSectionLabels.map((label) => label.label).join(' '),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function hideSearch() {
  $('searchResults').style.display = 'none';
  $('searchResults').innerHTML = '';
}

function loadEntityByName(mode, name) {
  const found = findVEDBEntityLoose(mode, name) || findVEDBEntityAnywhere(name);

  if (found) {
    loadEntity(found);
    return true;
  }

  console.warn('VEDB could not find entity:', mode, name);
  return false;
}

function showActors() {
  const fallbackActor =
    lastActor ||
    findActorByName?.('Denzel Washington') ||
    actors.find((actor) => actor.name !== 'Zendaya') ||
    actors[0];

  if (fallbackActor) {
    loadEntity(fallbackActor);
  }

  setNavActive('actors');
}

function showCharts() {
  hideSearch();

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB CHARTS PAGE</div>
          <h2>VEDB Starter Charts</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back</button>
      </div>

      <div class="section-page-content">
        <h3>Top Audience Momentum Actors</h3>
        ${listHTML(
          [...actors]
            .sort((a, b) => b.buzz - a.buzz)
            .slice(0, 5)
            .map((a, i) => `${i + 1}. ${a.name} — Momentum ${a.buzz}`)
        )}

        <h3>Top Audience Momentum Titles</h3>
        ${listHTML(
          [...titles]
            .sort((a, b) => b.buzz - a.buzz)
            .slice(0, 5)
            .map((t, i) => `${i + 1}. ${t.name} — Momentum ${t.buzz}`)
        )}

        <h3>Top Audience Momentum Franchises</h3>
        ${listHTML(
          [...franchises]
            .sort((a, b) => b.buzz - a.buzz)
            .slice(0, 5)
            .map((f, i) => `${i + 1}. ${f.name} — Momentum ${f.buzz}`)
        )}

        <h3>VEDB Section Names</h3>
        ${labelCards(vedbSectionLabels)}
      </div>
    </div>
  `;

  window.location.hash = '#/charts';
  setNavActive('charts');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
  if (currentEntity && currentEntity.mode === 'actor') {
    loadEntity(currentEntity);
  } else if (lastActor) {
    loadEntity(lastActor);
  } else {
    loadEntity(actors[0]);
  }

  setNavActive('home');
}

function setNavForMode() {
  if (currentMode === 'actor') setNavActive('actors');
  if (currentMode === 'title') setNavActive('titles');
  if (currentMode === 'franchise') setNavActive('franchises');
}

function setNavActive(which) {
  document
    .querySelectorAll('.nav button')
    .forEach((button) => button.classList.remove('active'));

  const map = {
    home: 0,
    actors: 1,
    titles: 2,
    franchises: 3,
    charts: 4,
  };

  const buttons = document.querySelectorAll('.nav button');
  buttons[map[which]]?.classList.add('active');
}

function modeName(mode) {
  if (mode === 'title') return 'Title';
  if (mode === 'franchise') return 'Franchise';
  return 'Actor';
}

function makeSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeForClick(text) {
  return text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function addDenzelMoviesAndFranchise() {
  const existingTitleNames = titles.map((item) => item.name);

  if (!existingTitleNames.includes('Training Day')) {
    titles.push({
      mode: 'title',
      name: 'Training Day',
      job: 'Movie • Crime • Drama',
      initials: 'TD',
      summary:
        'A crime drama centered on a rookie officer and a veteran narcotics detective during one intense day in Los Angeles.',
      overview:
        'Original VEDB demo overview: Training Day connects Denzel Washington, crime drama, major awards recognition, character work, and a gritty police story.',
      cast: ['Denzel Washington', 'Ethan Hawke', 'Scott Glenn', 'Eva Mendes'],
      characters: ['Alonzo Harris', 'Jake Hoyt'],
      crew: ['Director: Antoine Fuqua', 'Writer: David Ayer'],
      awards: [
        'Academy Award winner — Denzel Washington',
        'Academy Award nomination — Ethan Hawke',
      ],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Malcolm X', 'Fences', 'The Equalizer'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: { 'Release Year': '2001', Type: 'Movie', Genre: 'Crime drama' },
      buzz: 95,
      sources: ['https://en.wikipedia.org/wiki/Training_Day'],
    });
  }

  if (!existingTitleNames.includes('Malcolm X')) {
    titles.push({
      mode: 'title',
      name: 'Malcolm X',
      job: 'Movie • Biography • Drama',
      initials: 'MX',
      summary:
        'A biographical drama about the life, transformation, leadership, and legacy of Malcolm X.',
      overview:
        'Original VEDB demo overview: Malcolm X connects Denzel Washington, Spike Lee, biography, history, and major dramatic performance work.',
      cast: [
        'Denzel Washington',
        'Angela Bassett',
        'Delroy Lindo',
        'Al Freeman Jr.',
      ],
      characters: ['Malcolm X', 'Betty Shabazz'],
      crew: ['Director: Spike Lee', 'Based on The Autobiography of Malcolm X'],
      awards: [
        'Academy Award nomination — Denzel Washington',
        'Major biography-film recognition',
      ],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Training Day', 'Fences', 'The Equalizer'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '1992',
        Type: 'Movie',
        Genre: 'Biographical drama',
      },
      buzz: 94,
      sources: ['https://en.wikipedia.org/wiki/Malcolm_X_(1992_film)'],
    });
  }

  if (!existingTitleNames.includes('Fences')) {
    titles.push({
      mode: 'title',
      name: 'Fences',
      job: 'Movie • Drama',
      initials: 'F',
      summary:
        'A drama about family, responsibility, disappointment, love, and personal struggle.',
      overview:
        'Original VEDB demo overview: Fences connects Denzel Washington, Viola Davis, stage-to-screen drama, family conflict, and awards recognition.',
      cast: [
        'Denzel Washington',
        'Viola Davis',
        'Stephen McKinley Henderson',
        'Jovan Adepo',
      ],
      characters: ['Troy Maxson', 'Rose Maxson'],
      crew: [
        'Director: Denzel Washington',
        'Based on the play by August Wilson',
      ],
      awards: [
        'Academy Award winner — Viola Davis',
        'Academy Award nomination — Denzel Washington',
      ],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Training Day', 'Malcolm X', 'The Equalizer'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: { 'Release Year': '2016', Type: 'Movie', Genre: 'Drama' },
      buzz: 91,
      sources: ['https://en.wikipedia.org/wiki/Fences_(film)'],
    });
  }

  if (!existingTitleNames.includes('The Equalizer')) {
    titles.push({
      mode: 'title',
      name: 'The Equalizer',
      job: 'Movie • Action • Thriller',
      initials: 'EQ',
      summary:
        'An action thriller centered on Robert McCall, a quiet man with a violent skill set and a personal moral code.',
      overview:
        'Original VEDB demo overview: The Equalizer connects Denzel Washington, action storytelling, Robert McCall, and a franchise pathway.',
      cast: [
        'Denzel Washington',
        'Chloë Grace Moretz',
        'Marton Csokas',
        'David Harbour',
      ],
      characters: ['Robert McCall'],
      crew: ['Director: Antoine Fuqua'],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Training Day', 'Man on Fire', 'Mission: Impossible'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2014',
        Type: 'Movie',
        Franchise: 'The Equalizer',
      },
      buzz: 92,
      sources: ['https://en.wikipedia.org/wiki/The_Equalizer_(film)'],
    });
  }

  const existingFranchiseNames = franchises.map((item) => item.name);

  if (!existingFranchiseNames.includes('The Equalizer')) {
    franchises.push({
      mode: 'franchise',
      name: 'The Equalizer',
      job: 'Franchise • Action • Thriller',
      initials: 'EQ',
      summary:
        'An action-thriller franchise centered on Robert McCall, justice, protection, and personal codes of right and wrong.',
      overview:
        'Original VEDB demo overview: The Equalizer franchise connects Denzel Washington, Robert McCall, action stories, titles, characters, and franchise timeline.',
      titles: ['The Equalizer', 'The Equalizer 2', 'The Equalizer 3'],
      timeline: [
        '2014 — The Equalizer',
        '2018 — The Equalizer 2',
        '2023 — The Equalizer 3',
      ],
      cast: ['Denzel Washington'],
      characters: ['Robert McCall'],
      awards: ['Awards hub placeholder'],
      boxOffice: ['Franchise box office placeholder'],
      facts: {
        Type: 'Action thriller franchise',
        'Photo Status': 'Placeholder only',
        'VEDB Status': 'Demo data',
      },
      videos: ['Trailer hub placeholder'],
      social:
        'Known for Denzel Washington’s Robert McCall character and action-thriller audience appeal.',
      whereWatch: ['Where-to-watch links can be added later.'],
      buzz: 92,
      sources: ['https://en.wikipedia.org/wiki/The_Equalizer_(film_series)'],
    });
  }
}

function addTitleOnce(record) {
  const existing = titles.find((item) => item.name === record.name);

  const fullRecord = {
    mode: 'title',
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      Type: 'Movie',
      'Photo Status': 'Placeholder only',
      'VEDB Status': 'Demo data',
    },
    buzz: 90,
    sources: [
      'https://en.wikipedia.org/wiki/' + record.name.replaceAll(' ', '_'),
    ],
    ...record,
  };

  if (existing) {
    Object.assign(existing, fullRecord);
  } else {
    titles.push(fullRecord);
    allItems.push(fullRecord);
  }
}

function addFranchiseOnce(record) {
  const existing = franchises.find((item) => item.name === record.name);

  const fullRecord = {
    mode: 'franchise',
    awards: ['Awards hub placeholder'],
    boxOffice: ['Franchise box office placeholder'],
    facts: {
      Type: 'Franchise',
      'Photo Status': 'Placeholder only',
      'VEDB Status': 'Demo data',
    },
    videos: ['Trailer hub placeholder'],
    whereWatch: ['Where-to-watch links can be added later.'],
    buzz: 90,
    sources: [
      'https://en.wikipedia.org/wiki/' + record.name.replaceAll(' ', '_'),
    ],
    ...record,
  };

  if (existing) {
    Object.assign(existing, fullRecord);
  } else {
    franchises.push(fullRecord);
    allItems.push(fullRecord);
  }
}

function syncAllItemsForSearch() {
  [...actors, ...titles, ...franchises].forEach((item) => {
    const alreadyInSearch = allItems.some(
      (existing) => existing.mode === item.mode && existing.name === item.name
    );

    if (!alreadyInSearch) {
      allItems.push(item);
    }
  });
}

function addRemainingActorMoviesAndFranchises() {
  addTitleOnce({
    name: 'Spider-Man: Homecoming',
    job: 'Movie • Superhero • Action',
    initials: 'SM',
    summary:
      'A superhero movie following Peter Parker as he balances high school life with becoming Spider-Man.',
    overview:
      'Original VEDB demo overview: Spider-Man: Homecoming connects Zendaya, Peter Parker, superhero storytelling, and the Marvel universe.',
    cast: ['Zendaya', 'Tom Holland', 'Michael Keaton', 'Marisa Tomei'],
    characters: ['MJ', 'Peter Parker', 'Adrian Toomes'],
    crew: ['Director: Jon Watts', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    similar: ['Dune', 'Euphoria', 'Challengers'],
    facts: { 'Release Year': '2017', Type: 'Movie', Franchise: 'Spider-Man' },
    buzz: 93,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man:_Homecoming'],
  });

  addTitleOnce({
    name: 'Challengers',
    job: 'Movie • Sports • Drama',
    initials: 'CH',
    summary:
      'A sports drama centered on tennis, ambition, rivalry, relationships, and competition.',
    overview:
      'Original VEDB demo overview: Challengers connects Zendaya, tennis drama, relationship tension, and modern star-driven film buzz.',
    cast: ['Zendaya', "Josh O'Connor", 'Mike Faist'],
    characters: ['Tashi Duncan', 'Art Donaldson', 'Patrick Zweig'],
    crew: ['Director: Luca Guadagnino'],
    awards: ['Awards hub placeholder'],
    similar: ['Euphoria', 'Dune', 'Spider-Man: Homecoming'],
    facts: { 'Release Year': '2024', Type: 'Movie', Genre: 'Sports drama' },
    buzz: 92,
    sources: ['https://en.wikipedia.org/wiki/Challengers_(film)'],
  });

  addTitleOnce({
    name: "Sophie's Choice",
    job: 'Movie • Drama',
    initials: 'SC',
    summary:
      'A drama about memory, trauma, love, survival, and devastating personal history.',
    overview:
      "Original VEDB demo overview: Sophie's Choice connects Meryl Streep, major dramatic performance work, awards recognition, and literary adaptation.",
    cast: ['Meryl Streep', 'Kevin Kline', 'Peter MacNicol'],
    characters: ['Sophie Zawistowski', 'Nathan Landau', 'Stingo'],
    crew: ['Director: Alan J. Pakula', 'Based on the novel by William Styron'],
    awards: ['Academy Award winner — Meryl Streep'],
    similar: ['The Devil Wears Prada', 'Mamma Mia!', 'The Iron Lady'],
    facts: { 'Release Year': '1982', Type: 'Movie', Genre: 'Drama' },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/Sophie%27s_Choice_(film)'],
  });

  addTitleOnce({
    name: 'Mamma Mia!',
    job: 'Movie • Musical • Comedy',
    initials: 'MM',
    summary:
      'A musical comedy built around family, romance, identity, and ABBA songs.',
    overview:
      'Original VEDB demo overview: Mamma Mia! connects Meryl Streep, musical storytelling, ensemble cast energy, and a franchise pathway.',
    cast: ['Meryl Streep', 'Amanda Seyfried', 'Pierce Brosnan', 'Colin Firth'],
    characters: ['Donna Sheridan', 'Sophie Sheridan', 'Sam Carmichael'],
    crew: ['Director: Phyllida Lloyd', 'Music based on ABBA songs'],
    awards: ['Musical film recognition placeholder'],
    similar: ['The Devil Wears Prada', 'The Iron Lady', "Sophie's Choice"],
    facts: { 'Release Year': '2008', Type: 'Movie', Franchise: 'Mamma Mia!' },
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Mamma_Mia!_(film)'],
  });

  addTitleOnce({
    name: 'The Iron Lady',
    job: 'Movie • Biography • Drama',
    initials: 'IL',
    summary:
      'A biographical drama centered on Margaret Thatcher, memory, leadership, politics, and personal cost.',
    overview:
      'Original VEDB demo overview: The Iron Lady connects Meryl Streep, transformation acting, biography, politics, and awards recognition.',
    cast: ['Meryl Streep', 'Jim Broadbent'],
    characters: ['Margaret Thatcher', 'Denis Thatcher'],
    crew: ['Director: Phyllida Lloyd'],
    awards: ['Academy Award winner — Meryl Streep'],
    similar: ["Sophie's Choice", 'The Devil Wears Prada', 'Mamma Mia!'],
    facts: {
      'Release Year': '2011',
      Type: 'Movie',
      Genre: 'Biographical drama',
    },
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/The_Iron_Lady_(film)'],
  });

  addTitleOnce({
    name: 'Titanic',
    job: 'Movie • Romance • Drama',
    initials: 'T',
    summary:
      'A historical romance drama centered on love, class, disaster, and memory aboard the Titanic.',
    overview:
      'Original VEDB demo overview: Titanic connects Leonardo DiCaprio, romance, disaster spectacle, box-office history, and global movie recognition.',
    cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
    characters: ['Jack Dawson', 'Rose DeWitt Bukater', 'Cal Hockley'],
    crew: ['Director: James Cameron'],
    awards: [
      'Academy Award winner — Best Picture',
      'Major box-office recognition',
    ],
    similar: ['Inception', 'The Revenant', 'The Wolf of Wall Street'],
    facts: { 'Release Year': '1997', Type: 'Movie', Genre: 'Romantic drama' },
    buzz: 98,
    sources: ['https://en.wikipedia.org/wiki/Titanic_(1997_film)'],
  });

  addTitleOnce({
    name: 'Inception',
    job: 'Movie • Science Fiction • Thriller',
    initials: 'IN',
    summary:
      'A science fiction thriller about dreams, memory, grief, heists, and layered realities.',
    overview:
      'Original VEDB demo overview: Inception connects Leonardo DiCaprio, Christopher Nolan, dream-world storytelling, and puzzle-box action.',
    cast: [
      'Leonardo DiCaprio',
      'Joseph Gordon-Levitt',
      'Elliot Page',
      'Tom Hardy',
    ],
    characters: ['Dom Cobb', 'Arthur', 'Ariadne', 'Eames'],
    crew: ['Director: Christopher Nolan'],
    awards: ['Academy Award winner — technical categories'],
    similar: ['Titanic', 'The Revenant', 'The Wolf of Wall Street'],
    facts: {
      'Release Year': '2010',
      Type: 'Movie',
      Genre: 'Science fiction thriller',
    },
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Inception'],
  });

  addTitleOnce({
    name: 'The Revenant',
    job: 'Movie • Survival • Drama',
    initials: 'RV',
    summary:
      'A survival drama about endurance, revenge, wilderness, violence, and physical hardship.',
    overview:
      'Original VEDB demo overview: The Revenant connects Leonardo DiCaprio, survival storytelling, harsh landscapes, and awards recognition.',
    cast: ['Leonardo DiCaprio', 'Tom Hardy', 'Domhnall Gleeson'],
    characters: ['Hugh Glass', 'John Fitzgerald', 'Andrew Henry'],
    crew: ['Director: Alejandro G. Iñárritu'],
    awards: ['Academy Award winner — Leonardo DiCaprio'],
    similar: ['Titanic', 'Inception', 'The Wolf of Wall Street'],
    facts: { 'Release Year': '2015', Type: 'Movie', Genre: 'Survival drama' },
    buzz: 95,
    sources: ['https://en.wikipedia.org/wiki/The_Revenant_(2015_film)'],
  });

  addTitleOnce({
    name: 'The Wolf of Wall Street',
    job: 'Movie • Biography • Crime • Comedy',
    initials: 'WW',
    summary:
      'A darkly comic crime biography about wealth, greed, salesmanship, excess, and downfall.',
    overview:
      'Original VEDB demo overview: The Wolf of Wall Street connects Leonardo DiCaprio, Martin Scorsese, finance-world excess, and high-energy performance work.',
    cast: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie'],
    characters: ['Jordan Belfort', 'Donnie Azoff', 'Naomi Lapaglia'],
    crew: ['Director: Martin Scorsese'],
    awards: ['Awards nomination hub placeholder'],
    similar: ['Titanic', 'Inception', 'The Revenant'],
    facts: {
      'Release Year': '2013',
      Type: 'Movie',
      Genre: 'Biographical crime comedy',
    },
    buzz: 95,
    sources: [
      'https://en.wikipedia.org/wiki/The_Wolf_of_Wall_Street_(2013_film)',
    ],
  });

  addTitleOnce({
    name: 'The Help',
    job: 'Movie • Drama',
    initials: 'H',
    summary:
      'A drama about domestic workers, racism, friendship, social pressure, and storytelling.',
    overview:
      'Original VEDB demo overview: The Help connects Viola Davis, ensemble drama, civil rights-era themes, and awards attention.',
    cast: ['Viola Davis', 'Octavia Spencer', 'Emma Stone'],
    characters: ['Aibileen Clark', 'Minny Jackson', 'Skeeter Phelan'],
    crew: ['Director: Tate Taylor', 'Based on the novel by Kathryn Stockett'],
    awards: ['Academy Award recognition placeholder'],
    similar: ['Fences', 'The Woman King', 'How to Get Away with Murder'],
    facts: { 'Release Year': '2011', Type: 'Movie', Genre: 'Drama' },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/The_Help_(film)'],
  });

  addTitleOnce({
    name: 'How to Get Away with Murder',
    job: 'TV Series • Legal Drama',
    initials: 'HTG',
    summary:
      'A legal thriller series about criminal defense, secrets, power, law school, and personal consequences.',
    overview:
      'Original VEDB demo overview: How to Get Away with Murder connects Viola Davis, television drama, legal suspense, and award-winning lead performance work.',
    cast: ['Viola Davis', 'Billy Brown', 'Alfred Enoch', 'Jack Falahee'],
    characters: ['Annalise Keating', 'Nate Lahey', 'Wes Gibbins'],
    crew: ['Creator: Peter Nowalk', 'Produced with Shonda Rhimes'],
    awards: ['Emmy winner — Viola Davis'],
    similar: ['Fences', 'The Help', 'The Woman King'],
    facts: { Type: 'TV Series', Genre: 'Legal drama' },
    buzz: 92,
    sources: ['https://en.wikipedia.org/wiki/How_to_Get_Away_with_Murder'],
  });

  addTitleOnce({
    name: 'The Woman King',
    job: 'Movie • Historical • Action • Drama',
    initials: 'WK',
    summary:
      'A historical action drama about warriors, leadership, protection, duty, and power.',
    overview:
      'Original VEDB demo overview: The Woman King connects Viola Davis, historical action, leadership, training, and ensemble warrior storytelling.',
    cast: ['Viola Davis', 'Thuso Mbedu', 'Lashana Lynch', 'John Boyega'],
    characters: ['Nanisca', 'Nawi', 'Izogie', 'King Ghezo'],
    crew: ['Director: Gina Prince-Bythewood'],
    awards: ['Awards hub placeholder'],
    similar: ['Fences', 'The Help', 'How to Get Away with Murder'],
    facts: {
      'Release Year': '2022',
      Type: 'Movie',
      Genre: 'Historical action drama',
    },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/The_Woman_King'],
  });

  addTitleOnce({
    name: 'Sherlock Holmes',
    job: 'Movie • Mystery • Action',
    initials: 'SH',
    summary:
      'A mystery action film centered on Sherlock Holmes, deduction, danger, and partnership.',
    overview:
      'Original VEDB demo overview: Sherlock Holmes connects Robert Downey Jr., detective storytelling, action mystery, and a franchise pathway.',
    cast: ['Robert Downey Jr.', 'Jude Law', 'Rachel McAdams', 'Mark Strong'],
    characters: ['Sherlock Holmes', 'Dr. John Watson', 'Irene Adler'],
    crew: ['Director: Guy Ritchie'],
    awards: ['Golden Globe recognition placeholder'],
    similar: ['Iron Man', 'Oppenheimer', 'Chaplin'],
    facts: {
      'Release Year': '2009',
      Type: 'Movie',
      Franchise: 'Sherlock Holmes',
    },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/Sherlock_Holmes_(2009_film)'],
  });

  addTitleOnce({
    name: 'Oppenheimer',
    job: 'Movie • Biography • Drama',
    initials: 'OP',
    summary:
      'A biographical drama about science, power, war, politics, guilt, and legacy.',
    overview:
      'Original VEDB demo overview: Oppenheimer connects Robert Downey Jr., historical biography, ensemble performance, and awards recognition.',
    cast: ['Robert Downey Jr.', 'Cillian Murphy', 'Emily Blunt', 'Matt Damon'],
    characters: ['Lewis Strauss', 'J. Robert Oppenheimer', 'Kitty Oppenheimer'],
    crew: ['Director: Christopher Nolan'],
    awards: ['Academy Award winner — Robert Downey Jr.'],
    similar: ['Iron Man', 'Sherlock Holmes', 'Chaplin'],
    facts: {
      'Release Year': '2023',
      Type: 'Movie',
      Genre: 'Biographical drama',
    },
    buzz: 97,
    sources: ['https://en.wikipedia.org/wiki/Oppenheimer_(film)'],
  });

  addTitleOnce({
    name: 'Chaplin',
    job: 'Movie • Biography • Drama',
    initials: 'CP',
    summary:
      'A biographical drama about Charlie Chaplin, creativity, fame, art, and personal conflict.',
    overview:
      'Original VEDB demo overview: Chaplin connects Robert Downey Jr., transformation acting, classic Hollywood, and biography.',
    cast: ['Robert Downey Jr.', 'Marisa Tomei', 'Dan Aykroyd'],
    characters: ['Charlie Chaplin'],
    crew: ['Director: Richard Attenborough'],
    awards: ['Academy Award nomination — Robert Downey Jr.'],
    similar: ['Iron Man', 'Sherlock Holmes', 'Oppenheimer'],
    facts: {
      'Release Year': '1992',
      Type: 'Movie',
      Genre: 'Biographical drama',
    },
    buzz: 88,
    sources: ['https://en.wikipedia.org/wiki/Chaplin_(film)'],
  });

  addTitleOnce({
    name: 'Lost in Translation',
    job: 'Movie • Comedy • Drama',
    initials: 'LT',
    summary:
      'A quiet comedy drama about loneliness, connection, travel, uncertainty, and friendship.',
    overview:
      'Original VEDB demo overview: Lost in Translation connects Scarlett Johansson, Sofia Coppola, intimate drama, and modern film recognition.',
    cast: ['Scarlett Johansson', 'Bill Murray'],
    characters: ['Charlotte', 'Bob Harris'],
    crew: ['Director: Sofia Coppola'],
    awards: ['Awards recognition placeholder'],
    similar: ['Black Widow', 'Marriage Story', 'Her'],
    facts: { 'Release Year': '2003', Type: 'Movie', Genre: 'Comedy drama' },
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/Lost_in_Translation_(film)'],
  });

  addTitleOnce({
    name: 'Black Widow',
    job: 'Movie • Superhero • Action',
    initials: 'BW',
    summary:
      'A superhero action film centered on Natasha Romanoff, family, espionage, and unfinished history.',
    overview:
      'Original VEDB demo overview: Black Widow connects Scarlett Johansson, the Marvel Cinematic Universe, spy action, and character backstory.',
    cast: [
      'Scarlett Johansson',
      'Florence Pugh',
      'David Harbour',
      'Rachel Weisz',
    ],
    characters: ['Natasha Romanoff', 'Yelena Belova', 'Alexei Shostakov'],
    crew: ['Director: Cate Shortland', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    similar: ['Iron Man', 'Lost in Translation', 'Marriage Story'],
    facts: {
      'Release Year': '2021',
      Type: 'Movie',
      Franchise: 'Marvel Cinematic Universe',
    },
    buzz: 92,
    sources: ['https://en.wikipedia.org/wiki/Black_Widow_(2021_film)'],
  });

  addTitleOnce({
    name: 'Marriage Story',
    job: 'Movie • Drama',
    initials: 'MS',
    summary:
      'A drama about marriage, divorce, parenting, love, grief, and legal pressure.',
    overview:
      'Original VEDB demo overview: Marriage Story connects Scarlett Johansson, intimate drama, awards recognition, and emotionally detailed performance work.',
    cast: ['Scarlett Johansson', 'Adam Driver', 'Laura Dern'],
    characters: ['Nicole Barber', 'Charlie Barber', 'Nora Fanshaw'],
    crew: ['Director: Noah Baumbach'],
    awards: ['Academy Award recognition placeholder'],
    similar: ['Lost in Translation', 'Black Widow', 'Her'],
    facts: { 'Release Year': '2019', Type: 'Movie', Genre: 'Drama' },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/Marriage_Story'],
  });

  addTitleOnce({
    name: 'Her',
    job: 'Movie • Science Fiction • Romance',
    initials: 'HER',
    summary:
      'A science fiction romance about loneliness, technology, voice, intimacy, and emotional connection.',
    overview:
      'Original VEDB demo overview: Her connects Scarlett Johansson, voice performance, near-future romance, and technology-centered storytelling.',
    cast: ['Scarlett Johansson', 'Joaquin Phoenix', 'Amy Adams'],
    characters: ['Samantha', 'Theodore Twombly', 'Amy'],
    crew: ['Director: Spike Jonze'],
    awards: ['Awards recognition placeholder'],
    similar: ['Lost in Translation', 'Marriage Story', 'Black Widow'],
    facts: {
      'Release Year': '2013',
      Type: 'Movie',
      Genre: 'Science fiction romance',
    },
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Her_(film)'],
  });

  addTitleOnce({
    name: 'Top Gun',
    job: 'Movie • Action • Drama',
    initials: 'TG',
    summary:
      'An action drama about elite naval pilots, competition, confidence, risk, and friendship.',
    overview:
      'Original VEDB demo overview: Top Gun connects Tom Cruise, aviation action, star-making appeal, and a franchise foundation.',
    cast: ['Tom Cruise', 'Kelly McGillis', 'Val Kilmer', 'Anthony Edwards'],
    characters: [
      'Pete Mitchell',
      'Charlotte Blackwood',
      'Tom Kazansky',
      'Nick Bradshaw',
    ],
    crew: ['Director: Tony Scott'],
    awards: ['Awards hub placeholder'],
    similar: ['Top Gun: Maverick', 'Mission: Impossible', 'Jerry Maguire'],
    facts: { 'Release Year': '1986', Type: 'Movie', Franchise: 'Top Gun' },
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Top_Gun'],
  });

  addTitleOnce({
    name: 'Mission: Impossible',
    job: 'Movie • Action • Spy',
    initials: 'MI',
    summary:
      'A spy action film about impossible missions, betrayal, deception, and Ethan Hunt.',
    overview:
      'Original VEDB demo overview: Mission: Impossible connects Tom Cruise, spy action, franchise identity, and stunt-driven spectacle.',
    cast: ['Tom Cruise', 'Ving Rhames', 'Jon Voight', 'Emmanuelle Béart'],
    characters: ['Ethan Hunt', 'Luther Stickell', 'Jim Phelps'],
    crew: ['Director: Brian De Palma'],
    awards: ['Awards hub placeholder'],
    similar: ['Top Gun', 'Top Gun: Maverick', 'Jerry Maguire'],
    facts: {
      'Release Year': '1996',
      Type: 'Movie',
      Franchise: 'Mission: Impossible',
    },
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Mission:_Impossible_(film)'],
  });

  addTitleOnce({
    name: 'Jerry Maguire',
    job: 'Movie • Comedy • Drama • Romance',
    initials: 'JM',
    summary:
      'A comedy drama about sports business, loyalty, love, conscience, and career reinvention.',
    overview:
      'Original VEDB demo overview: Jerry Maguire connects Tom Cruise, romantic drama, sports agency, memorable character work, and awards recognition.',
    cast: ['Tom Cruise', 'Renée Zellweger', 'Cuba Gooding Jr.'],
    characters: ['Jerry Maguire', 'Dorothy Boyd', 'Rod Tidwell'],
    crew: ['Director: Cameron Crowe'],
    awards: ['Academy Award recognition placeholder'],
    similar: ['Top Gun', 'Top Gun: Maverick', 'Mission: Impossible'],
    facts: { 'Release Year': '1996', Type: 'Movie', Genre: 'Comedy drama' },
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Jerry_Maguire'],
  });

  addTitleOnce({
    name: 'Pretty Woman',
    job: 'Movie • Romantic Comedy',
    initials: 'PW',
    summary:
      'A romantic comedy about love, money, class, self-worth, and transformation.',
    overview:
      'Original VEDB demo overview: Pretty Woman connects Julia Roberts, romantic comedy, movie-star appeal, and a defining breakout role.',
    cast: ['Julia Roberts', 'Richard Gere'],
    characters: ['Vivian Ward', 'Edward Lewis'],
    crew: ['Director: Garry Marshall'],
    awards: ['Golden Globe recognition placeholder'],
    similar: ['Erin Brockovich', "Ocean's Eleven", 'Notting Hill'],
    facts: { 'Release Year': '1990', Type: 'Movie', Genre: 'Romantic comedy' },
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Pretty_Woman'],
  });

  addTitleOnce({
    name: 'Erin Brockovich',
    job: 'Movie • Biography • Drama',
    initials: 'EB',
    summary:
      'A legal biography drama about persistence, justice, corporate accountability, and community harm.',
    overview:
      'Original VEDB demo overview: Erin Brockovich connects Julia Roberts, legal drama, real-world activism, and awards recognition.',
    cast: ['Julia Roberts', 'Albert Finney', 'Aaron Eckhart'],
    characters: ['Erin Brockovich', 'Ed Masry', 'George'],
    crew: ['Director: Steven Soderbergh'],
    awards: ['Academy Award winner — Julia Roberts'],
    similar: ['Pretty Woman', "Ocean's Eleven", 'Notting Hill'],
    facts: {
      'Release Year': '2000',
      Type: 'Movie',
      Genre: 'Biographical legal drama',
    },
    buzz: 93,
    sources: ['https://en.wikipedia.org/wiki/Erin_Brockovich_(film)'],
  });

  addTitleOnce({
    name: "Ocean's Eleven",
    job: 'Movie • Heist • Comedy • Crime',
    initials: 'OE',
    summary:
      'A heist film about planning, charm, deception, casinos, teamwork, and risk.',
    overview:
      "Original VEDB demo overview: Ocean's Eleven connects Julia Roberts, ensemble heist storytelling, casino settings, and a franchise pathway.",
    cast: ['Julia Roberts', 'George Clooney', 'Brad Pitt', 'Matt Damon'],
    characters: ['Tess Ocean', 'Danny Ocean', 'Rusty Ryan'],
    crew: ['Director: Steven Soderbergh'],
    awards: ['Awards hub placeholder'],
    similar: ['Pretty Woman', 'Erin Brockovich', 'Notting Hill'],
    facts: { 'Release Year': '2001', Type: 'Movie', Franchise: "Ocean's" },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/Ocean%27s_Eleven'],
  });

  addTitleOnce({
    name: 'Notting Hill',
    job: 'Movie • Romantic Comedy',
    initials: 'NH',
    summary:
      'A romantic comedy about fame, ordinary life, privacy, love, and vulnerability.',
    overview:
      'Original VEDB demo overview: Notting Hill connects Julia Roberts, romantic comedy, celebrity themes, and international star appeal.',
    cast: ['Julia Roberts', 'Hugh Grant'],
    characters: ['Anna Scott', 'William Thacker'],
    crew: ['Director: Roger Michell', 'Writer: Richard Curtis'],
    awards: ['Awards hub placeholder'],
    similar: ['Pretty Woman', 'Erin Brockovich', "Ocean's Eleven"],
    facts: { 'Release Year': '1999', Type: 'Movie', Genre: 'Romantic comedy' },
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Notting_Hill_(film)'],
  });

  addTitleOnce({
    name: 'The Shawshank Redemption',
    job: 'Movie • Drama',
    initials: 'SR',
    summary:
      'A prison drama about hope, friendship, endurance, injustice, and freedom.',
    overview:
      'Original VEDB demo overview: The Shawshank Redemption connects Morgan Freeman, narration, classic drama, friendship, and long-term audience affection.',
    cast: ['Morgan Freeman', 'Tim Robbins', 'Bob Gunton'],
    characters: ['Ellis Boyd Redding', 'Andy Dufresne', 'Samuel Norton'],
    crew: ['Director: Frank Darabont', 'Based on Stephen King source material'],
    awards: ['Academy Award nominations placeholder'],
    similar: ['Million Dollar Baby', 'Se7en', 'Driving Miss Daisy'],
    facts: { 'Release Year': '1994', Type: 'Movie', Genre: 'Drama' },
    buzz: 98,
    sources: ['https://en.wikipedia.org/wiki/The_Shawshank_Redemption'],
  });

  addTitleOnce({
    name: 'Million Dollar Baby',
    job: 'Movie • Sports • Drama',
    initials: 'MDB',
    summary:
      'A boxing drama about ambition, mentorship, dignity, sacrifice, and difficult choices.',
    overview:
      'Original VEDB demo overview: Million Dollar Baby connects Morgan Freeman, Clint Eastwood, boxing drama, narration, and awards recognition.',
    cast: ['Morgan Freeman', 'Clint Eastwood', 'Hilary Swank'],
    characters: ['Eddie Dupris', 'Frankie Dunn', 'Maggie Fitzgerald'],
    crew: ['Director: Clint Eastwood'],
    awards: [
      'Academy Award winner — Best Picture',
      'Academy Award winner — Morgan Freeman',
    ],
    similar: ['The Shawshank Redemption', 'Se7en', 'Driving Miss Daisy'],
    facts: { 'Release Year': '2004', Type: 'Movie', Genre: 'Sports drama' },
    buzz: 93,
    sources: ['https://en.wikipedia.org/wiki/Million_Dollar_Baby'],
  });

  addTitleOnce({
    name: 'Se7en',
    job: 'Movie • Crime • Thriller',
    initials: 'S7',
    summary:
      'A dark crime thriller about detectives, murder, obsession, morality, and dread.',
    overview:
      'Original VEDB demo overview: Se7en connects Morgan Freeman, crime mystery, thriller atmosphere, and detective storytelling.',
    cast: ['Morgan Freeman', 'Brad Pitt', 'Gwyneth Paltrow', 'Kevin Spacey'],
    characters: ['Detective Somerset', 'Detective Mills', 'Tracy Mills'],
    crew: ['Director: David Fincher'],
    awards: ['Awards hub placeholder'],
    similar: [
      'The Shawshank Redemption',
      'Million Dollar Baby',
      'Driving Miss Daisy',
    ],
    facts: { 'Release Year': '1995', Type: 'Movie', Genre: 'Crime thriller' },
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Seven_(1995_film)'],
  });

  addTitleOnce({
    name: 'Driving Miss Daisy',
    job: 'Movie • Drama',
    initials: 'DMD',
    summary:
      'A drama about aging, friendship, race, dignity, and changing relationships over time.',
    overview:
      'Original VEDB demo overview: Driving Miss Daisy connects Morgan Freeman, character drama, friendship, and awards-era film history.',
    cast: ['Morgan Freeman', 'Jessica Tandy', 'Dan Aykroyd'],
    characters: ['Hoke Colburn', 'Daisy Werthan', 'Boolie Werthan'],
    crew: ['Director: Bruce Beresford'],
    awards: ['Academy Award winner — Best Picture'],
    similar: ['The Shawshank Redemption', 'Million Dollar Baby', 'Se7en'],
    facts: { 'Release Year': '1989', Type: 'Movie', Genre: 'Drama' },
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/Driving_Miss_Daisy'],
  });

  addFranchiseOnce({
    name: 'Spider-Man',
    job: 'Franchise • Superhero',
    initials: 'SM',
    summary:
      'A superhero franchise centered on Spider-Man, Peter Parker, friends, villains, and connected universe stories.',
    overview:
      'Original VEDB demo overview: Spider-Man connects Zendaya, MJ, superhero films, youth identity, action, and Marvel-linked storytelling.',
    titles: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'Spider-Man: No Way Home',
    ],
    timeline: [
      '2017 — Homecoming',
      '2019 — Far From Home',
      '2021 — No Way Home',
    ],
    cast: ['Zendaya', 'Tom Holland'],
    characters: ['MJ', 'Peter Parker'],
    social: 'High global superhero recognition and strong fan activity.',
    buzz: 95,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man_in_film'],
  });

  addFranchiseOnce({
    name: 'Mamma Mia!',
    job: 'Franchise • Musical • Comedy',
    initials: 'MM',
    summary:
      'A musical comedy franchise built around ABBA songs, family, romance, memory, and island energy.',
    overview:
      'Original VEDB demo overview: Mamma Mia! connects Meryl Streep, musical ensemble work, ABBA songs, and feel-good franchise identity.',
    titles: ['Mamma Mia!', 'Mamma Mia! Here We Go Again'],
    timeline: ['2008 — Mamma Mia!', '2018 — Mamma Mia! Here We Go Again'],
    cast: ['Meryl Streep', 'Amanda Seyfried', 'Pierce Brosnan'],
    characters: ['Donna Sheridan', 'Sophie Sheridan'],
    social: 'Strong musical and feel-good audience recognition.',
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/Mamma_Mia!_(film_series)'],
  });

  addFranchiseOnce({
    name: 'Sherlock Holmes',
    job: 'Franchise • Mystery • Action',
    initials: 'SH',
    summary:
      'A mystery action franchise centered on Sherlock Holmes, Dr. Watson, deduction, danger, and style.',
    overview:
      'Original VEDB demo overview: Sherlock Holmes connects Robert Downey Jr., Jude Law, detective action, mystery, and franchise identity.',
    titles: ['Sherlock Holmes', 'Sherlock Holmes: A Game of Shadows'],
    timeline: ['2009 — Sherlock Holmes', '2011 — A Game of Shadows'],
    cast: ['Robert Downey Jr.', 'Jude Law'],
    characters: ['Sherlock Holmes', 'Dr. John Watson'],
    social:
      'Recognized for action-mystery style and a famous detective character.',
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Sherlock_Holmes_(2009_film)'],
  });

  addFranchiseOnce({
    name: 'Top Gun',
    job: 'Franchise • Action • Aviation',
    initials: 'TG',
    summary:
      'An aviation action franchise centered on elite pilots, risk, speed, legacy, and mentorship.',
    overview:
      'Original VEDB demo overview: Top Gun connects Tom Cruise, naval aviation, practical-feeling flight action, and legacy sequel success.',
    titles: ['Top Gun', 'Top Gun: Maverick'],
    timeline: ['1986 — Top Gun', '2022 — Top Gun: Maverick'],
    cast: ['Tom Cruise', 'Val Kilmer'],
    characters: ['Pete Mitchell', 'Tom Kazansky'],
    social: 'High recognition for aviation action and legacy movie appeal.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Top_Gun'],
  });

  addFranchiseOnce({
    name: "Ocean's",
    job: 'Franchise • Heist • Comedy',
    initials: 'OC',
    summary:
      'A heist franchise built around stylish teams, planning, casinos, deception, and ensemble casts.',
    overview:
      "Original VEDB demo overview: Ocean's connects Julia Roberts, ensemble heist comedy, casino settings, and franchise storytelling.",
    titles: ["Ocean's Eleven", "Ocean's Twelve", "Ocean's Thirteen"],
    timeline: [
      "2001 — Ocean's Eleven",
      "2004 — Ocean's Twelve",
      "2007 — Ocean's Thirteen",
    ],
    cast: ['Julia Roberts', 'George Clooney', 'Brad Pitt', 'Matt Damon'],
    characters: ['Tess Ocean', 'Danny Ocean', 'Rusty Ryan'],
    social:
      'Recognized for stylish heist storytelling and ensemble movie-star appeal.',
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/Ocean%27s_(film_series)'],
  });

  addFranchiseOnce({
    name: 'DC Screen Universe',
    job: 'Franchise • Superhero',
    initials: 'DC',
    summary:
      'A superhero screen franchise connected to DC characters, teams, villains, and cross-title story worlds.',
    overview:
      'Original VEDB demo overview: DC Screen Universe connects Viola Davis, Amanda Waller, superhero ensembles, and franchise appearances.',
    titles: ['Suicide Squad', 'The Suicide Squad', 'Black Adam', 'Peacemaker'],
    timeline: [
      '2016 — Suicide Squad',
      '2021 — The Suicide Squad',
      '2020s — Expanded appearances',
    ],
    cast: ['Viola Davis'],
    characters: ['Amanda Waller'],
    social: 'High superhero fan awareness and cross-title franchise interest.',
    buzz: 90,
    sources: ['https://en.wikipedia.org/wiki/DC_Extended_Universe'],
  });

  addFranchiseOnce({
    name: 'The Dark Knight Trilogy',
    job: 'Franchise • Superhero • Crime Drama',
    initials: 'TDK',
    summary:
      'A Batman trilogy centered on crime, fear, justice, corruption, identity, and sacrifice.',
    overview:
      'Original VEDB demo overview: The Dark Knight Trilogy connects Morgan Freeman, Lucius Fox, Batman, Gotham, and prestige superhero storytelling.',
    titles: ['Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'],
    timeline: [
      '2005 — Batman Begins',
      '2008 — The Dark Knight',
      '2012 — The Dark Knight Rises',
    ],
    cast: ['Morgan Freeman', 'Christian Bale', 'Michael Caine', 'Gary Oldman'],
    characters: ['Lucius Fox', 'Bruce Wayne', 'Alfred Pennyworth'],
    social: 'Very high recognition among superhero and crime-drama audiences.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/The_Dark_Knight_Trilogy'],
  });

  syncAllItemsForSearch();
}

function showTitles() {
  openRelatedDirectoryPage('title');
}

function showFranchises() {
  openRelatedDirectoryPage('franchise');
}

function openRelatedDirectoryPage(kind) {
  const isTitle = kind === 'title';
  const navKey = isTitle ? 'titles' : 'franchises';

  let list = isTitle ? titles : franchises;
  let heading = isTitle ? 'Titles Directory' : 'Franchises Directory';
  let label = isTitle ? 'TITLE DIRECTORY' : 'FRANCHISE DIRECTORY';

  if (currentMode === 'actor') {
    const actorName = currentEntity.name;
    const actorKnownFor = (currentEntity.knownFor || []).map((row) => row[0]);

    if (isTitle) {
      list = titles.filter(
        (item) =>
          (item.cast || []).includes(actorName) ||
          actorKnownFor.includes(item.name)
      );

      heading = actorName + ' — Movies & Shows';
      label = 'ACTOR TITLE DIRECTORY';
    } else {
      list = franchises.filter(
        (item) =>
          (item.cast || []).includes(actorName) ||
          (item.titles || []).some((titleName) =>
            actorKnownFor.includes(titleName)
          )
      );

      heading = actorName + ' — Franchises';
      label = 'ACTOR FRANCHISE DIRECTORY';
    }
  }

  hideSearch();

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">${label}</div>
          <h2>${heading}</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        ${
          list.length === 0
            ? `<p>No ${isTitle ? 'titles' : 'franchises'} have been added for ${
                currentEntity.name
              } yet.</p>`
            : `<div class="cards-grid">
                ${list
                  .map(
                    (item) => `
                  <article class="info-card">
                    <h3>${item.initials} ${item.name}</h3>
                    <p>${item.summary}</p>
                    <button onclick="loadEntityByName('${kind}', '${escapeForClick(
                      item.name
                    )}')">
                      Open ${isTitle ? 'Title' : 'Franchise'} →
                    </button>
                  </article>
                `
                  )
                  .join('')}
              </div>`
        }
      </div>
    </div>
  `;

  window.location.hash = isTitle ? '#/related-titles' : '#/related-franchises';
  setNavActive(navKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

addDenzelMoviesAndFranchise();
addRemainingActorMoviesAndFranchises();
/* init moved to the bottom for CodePen Full Page safety */
function addActorOnce(record) {
  const existing = actors.find((item) => item.name === record.name);

  const fullRecord = {
    mode: 'actor',
    job: 'Actor',
    initials: 'A',
    summary: 'Actor summary placeholder.',
    bio: 'Original VEDB demo bio: Add actor biography here.',
    knownFor: [],
    awards: ['Awards placeholder'],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and television',
      'Common Genres': 'Drama, action, comedy',
      'Photo Status': 'Placeholder only',
    },
    characters: [],
    videos: ['Interview placeholder', 'Trailer placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: [],
    social: 'Audience momentum placeholder.',
    buzz: 85,
    sources: [],
    ...record,
  };

  if (existing) {
    Object.assign(existing, fullRecord);
  } else {
    actors.push(fullRecord);
    allItems.push(fullRecord);
  }
}

function addKeanuReevesAddon() {
  addActorOnce({
    name: 'Keanu Reeves',
    job: 'Actor • Producer • Musician',
    initials: 'KR',
    summary:
      'Keanu Reeves is known for action films, science fiction, dramatic roles, and long-running audience affection.',
    bio: 'Original VEDB demo bio: Keanu Reeves built a career across action, science fiction, drama, romance, and franchise films, becoming strongly associated with characters like Neo and John Wick.',
    knownFor: [
      ['The Matrix', 1999],
      ['John Wick', 2014],
      ['Speed', 1994],
      ['Point Break', 1991],
    ],
    awards: [
      'MTV Movie Award recognition',
      "People's Choice recognition",
      'Fan-favorite recognition',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and franchise acting',
      'Common Genres': 'Action, sci-fi, thriller, drama',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Neo', 'John Wick', 'Jack Traven', 'Johnny Utah'],
    videos: ['Action role placeholder', 'Interview placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: [
      'Laurence Fishburne',
      'Carrie-Anne Moss',
      'Chad Stahelski',
      'Sandra Bullock',
    ],
    social: 'Very strong audience affection and long-running fan recognition.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Keanu_Reeves'],
  });

  actorCareerLabelInfo['Keanu Reeves'] = [
    {
      label: 'Breakout Performer',
      description:
        'Keanu Reeves became widely visible through major action and drama roles before becoming strongly tied to science fiction and action franchises.',
    },
    {
      label: 'Franchise Star',
      description:
        'The Matrix and John Wick give him two major franchise identities, making this one of his strongest VEDB labels.',
    },
    {
      label: 'Award Recognized',
      description:
        'His career includes major public and fan recognition, especially for action, science fiction, and franchise roles.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Keanu Reeves is a strong fan favorite because audiences connect with his calm personality, action roles, humility, and long-running screen presence.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'His producing work and close connection to the John Wick creative world make him more than only an on-screen performer.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He has worked across action, science fiction, thriller, romance, drama, comedy, and voice work.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Keanu Reeves is a legacy figure because characters like Neo and John Wick have long-term importance in modern movie culture.',
    },
    {
      label: 'Signature Work',
      description:
        'The Matrix, John Wick, Speed, and Point Break are strong VEDB signature-work anchors for his actor page.',
    },
  ];

  addTitleOnce({
    name: 'The Matrix',
    job: 'Movie • Science Fiction • Action',
    initials: 'TM',
    summary:
      'A science fiction action film about reality, control, identity, machines, and awakening.',
    overview:
      'Original VEDB demo overview: The Matrix connects Keanu Reeves, Neo, science fiction, action design, philosophical themes, and a major franchise identity.',
    cast: [
      'Keanu Reeves',
      'Laurence Fishburne',
      'Carrie-Anne Moss',
      'Hugo Weaving',
    ],
    characters: ['Neo', 'Morpheus', 'Trinity', 'Agent Smith'],
    crew: ['Directors: The Wachowskis'],
    awards: ['Academy Award winner — technical categories'],
    similar: ['John Wick', 'Speed', 'Point Break'],
    facts: {
      'Release Year': '1999',
      Type: 'Movie',
      Franchise: 'The Matrix',
    },
    buzz: 97,
    sources: ['https://en.wikipedia.org/wiki/The_Matrix'],
  });

  addTitleOnce({
    name: 'John Wick',
    job: 'Movie • Action • Thriller',
    initials: 'JW',
    summary:
      'An action thriller centered on a retired assassin, grief, revenge, rules, and an underground criminal world.',
    overview:
      'Original VEDB demo overview: John Wick connects Keanu Reeves, stylized action, assassin mythology, world-building, and franchise momentum.',
    cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen', 'Willem Dafoe'],
    characters: ['John Wick', 'Viggo Tarasov', 'Iosef Tarasov'],
    crew: ['Directors: Chad Stahelski and David Leitch'],
    awards: ['Action-film recognition placeholder'],
    similar: ['The Matrix', 'Speed', 'Point Break'],
    facts: {
      'Release Year': '2014',
      Type: 'Movie',
      Franchise: 'John Wick',
    },
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/John_Wick_(film)'],
  });

  addTitleOnce({
    name: 'Speed',
    job: 'Movie • Action • Thriller',
    initials: 'SP',
    summary:
      'An action thriller about a bus that must keep moving above a certain speed to prevent disaster.',
    overview:
      'Original VEDB demo overview: Speed connects Keanu Reeves, Sandra Bullock, high-concept action, suspense, and 1990s action-star visibility.',
    cast: ['Keanu Reeves', 'Sandra Bullock', 'Dennis Hopper'],
    characters: ['Jack Traven', 'Annie Porter', 'Howard Payne'],
    crew: ['Director: Jan de Bont'],
    awards: ['Academy Award winner — sound categories'],
    similar: ['The Matrix', 'John Wick', 'Point Break'],
    facts: {
      'Release Year': '1994',
      Type: 'Movie',
      Genre: 'Action thriller',
    },
    buzz: 91,
    sources: ['https://en.wikipedia.org/wiki/Speed_(1994_film)'],
  });

  addTitleOnce({
    name: 'Point Break',
    job: 'Movie • Action • Crime',
    initials: 'PB',
    summary:
      'An action crime film about surfing, undercover investigation, loyalty, danger, and adrenaline.',
    overview:
      'Original VEDB demo overview: Point Break connects Keanu Reeves, action crime storytelling, undercover identity, surfing culture, and early star visibility.',
    cast: ['Keanu Reeves', 'Patrick Swayze', 'Lori Petty', 'Gary Busey'],
    characters: ['Johnny Utah', 'Bodhi', 'Tyler Endicott'],
    crew: ['Director: Kathryn Bigelow'],
    awards: ['Action-film recognition placeholder'],
    similar: ['Speed', 'John Wick', 'The Matrix'],
    facts: {
      'Release Year': '1991',
      Type: 'Movie',
      Genre: 'Action crime',
    },
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/Point_Break'],
  });

  addFranchiseOnce({
    name: 'The Matrix',
    job: 'Franchise • Science Fiction • Action',
    initials: 'MX',
    summary:
      'A science fiction action franchise centered on reality, simulation, machines, rebellion, and identity.',
    overview:
      'Original VEDB demo overview: The Matrix franchise connects Keanu Reeves, Neo, sci-fi action, philosophical world-building, and long-term pop-culture influence.',
    titles: [
      'The Matrix',
      'The Matrix Reloaded',
      'The Matrix Revolutions',
      'The Matrix Resurrections',
    ],
    timeline: [
      '1999 — The Matrix',
      '2003 — Reloaded and Revolutions',
      '2021 — Resurrections',
    ],
    cast: ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne'],
    characters: ['Neo', 'Trinity', 'Morpheus'],
    social: 'Very high science-fiction recognition and long-term fan interest.',
    buzz: 97,
    sources: ['https://en.wikipedia.org/wiki/The_Matrix_(franchise)'],
  });

  addFranchiseOnce({
    name: 'John Wick',
    job: 'Franchise • Action • Thriller',
    initials: 'JW',
    summary:
      'An action franchise centered on John Wick, assassin rules, revenge, loyalty, and a hidden criminal world.',
    overview:
      'Original VEDB demo overview: John Wick connects Keanu Reeves, stylized action, world-building, recurring characters, and modern action-franchise identity.',
    titles: [
      'John Wick',
      'John Wick: Chapter 2',
      'John Wick: Chapter 3 — Parabellum',
      'John Wick: Chapter 4',
    ],
    timeline: [
      '2014 — John Wick',
      '2017 — Chapter 2',
      '2019 — Chapter 3',
      '2023 — Chapter 4',
    ],
    cast: ['Keanu Reeves', 'Ian McShane', 'Lance Reddick'],
    characters: ['John Wick', 'Winston', 'Charon'],
    social: 'Strong action-audience momentum and major franchise recognition.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/John_Wick'],
  });

  syncAllItemsForSearch();

  /* Removed auto-open Keanu on startup so Full Page starts on the homepage. */
}

addKeanuReevesAddon();

function init__duplicate_disabled_2() {
  installDynamicSearchStyles();
  buildSphereNodes();
  setupSphereDrag();
  setupSearch();

  const startupEntity = getVEDBStartupEntity();

  if (startupEntity) {
    loadEntity(startupEntity);
  }

  animateSphere();
}

function installDynamicSearchStyles__duplicate_disabled_1() {
  if (document.getElementById('vedb-dynamic-search-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-dynamic-search-style';
  style.textContent = `
    .search-panel-title {
      color: var(--gold);
      font-size: 15px;
      font-weight: 900;
      margin: 8px 8px 6px;
      text-transform: uppercase;
      letter-spacing: .8px;
    }

    .search-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 6px 8px 12px;
    }

    .search-chip {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }

    .search-chip:hover {
      border-color: var(--gold);
      color: var(--gold);
      background: rgba(247, 180, 0, .12);
    }

    .search-row-main {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .search-type-pill {
      display: inline-block;
      width: fit-content;
      border: 1px solid rgba(247, 180, 0, .45);
      color: var(--gold);
      border-radius: 999px;
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .search-row-extra {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
    }

    .search-empty-box {
      padding: 14px;
      color: var(--muted);
      line-height: 1.45;
    }

    .search-clear-button {
      background: transparent;
      border: none;
      color: #6ab6ff;
      font-size: 13px;
      font-weight: 900;
      margin-left: 8px;
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);
}

function setupSearch__duplicate_disabled_2() {
  const input = $('searchInput');
  const button = $('searchButton');
  const results = $('searchResults');

  if (!input || !button || !results) return;
  if (input.dataset.dynamicSearchReady === 'yes') return;

  input.dataset.dynamicSearchReady = 'yes';

  input.addEventListener('focus', function () {
    if (!input.value.trim()) showSearchHomePanel();
  });

  input.addEventListener('input', runSearch);

  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') chooseFirstSearchMatch();
    if (event.key === 'Escape') hideSearch();
  });

  button.addEventListener('click', chooseFirstSearchMatch);

  results.addEventListener('mousedown', function (event) {
    const clearButton = event.target.closest('[data-clear-recent]');
    if (clearButton) {
      event.preventDefault();
      clearRecentSearches();
      showSearchHomePanel();
      return;
    }

    const searchChip = event.target.closest('[data-search-term]');
    if (searchChip) {
      event.preventDefault();
      input.value = searchChip.dataset.searchTerm;
      runSearch();
      input.focus();
      return;
    }

    const row = event.target.closest('[data-open-mode][data-open-name]');
    if (row) {
      event.preventDefault();
      loadEntityByName(row.dataset.openMode, row.dataset.openName);
      saveRecentSearch(row.dataset.openMode, row.dataset.openName);
      input.value = '';
      hideSearch();
    }
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.search-area')) hideSearch();
  });
}

function runSearch__duplicate_disabled_2() {
  const input = $('searchInput');
  const query = input.value.trim().toLowerCase();

  if (!query) {
    showSearchHomePanel();
    return;
  }

  latestSearchMatches = allItems
    .map((item) => ({
      item,
      score: scoreSearchItem(item, query),
    }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.item);

  if (latestSearchMatches.length === 0) {
    showNoSearchResults(query);
    return;
  }

  renderSearchResults(latestSearchMatches.slice(0, 12), query);
}

function scoreSearchItem__duplicate_disabled_1(item, query) {
  const name = (item.name || '').toLowerCase();
  const mode = (item.mode || '').toLowerCase();
  const job = (item.job || '').toLowerCase();
  const full = searchText(item);

  let score = 0;

  if (name === query) score += 1000;
  if (name.startsWith(query)) score += 500;
  if (name.includes(query)) score += 300;
  if (mode.includes(query)) score += 120;
  if (job.includes(query)) score += 80;
  if (full.includes(query)) score += 50;

  if ((item.characters || []).join(' ').toLowerCase().includes(query))
    score += 160;
  if ((item.cast || []).join(' ').toLowerCase().includes(query)) score += 150;
  if (
    (item.knownFor || [])
      .map((row) => row[0])
      .join(' ')
      .toLowerCase()
      .includes(query)
  )
    score += 140;
  if ((item.collaborators || []).join(' ').toLowerCase().includes(query))
    score += 130;
  if ((item.titles || []).join(' ').toLowerCase().includes(query)) score += 130;

  return score;
}

function renderSearchResults__duplicate_disabled_2(matches, query) {
  const box = $('searchResults');
  box.innerHTML = '';

  box.innerHTML += `
    <div class="search-panel-title">
      Search Results
    </div>
  `;

  matches.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'result-row';
    row.dataset.openMode = item.mode;
    row.dataset.openName = item.name;

    row.innerHTML = `
      <div class="search-row-main">
        <span class="search-type-pill">${escapeHTML(modeName(item.mode))}</span>
        <span><b>${highlightMatch(item.name, query)}</b></span>
        <span class="search-row-extra">${escapeHTML(item.job || '')}</span>
        <span class="search-row-extra">${escapeHTML(
          searchPreviewText(item)
        )}</span>
      </div>
      <span>Open →</span>
    `;

    box.appendChild(row);
  });

  box.style.display = 'block';
}

function showSearchHomePanel__duplicate_disabled_1() {
  const box = $('searchResults');
  const recent = getRecentSearches();
  const topActors = [...actors].sort((a, b) => b.buzz - a.buzz).slice(0, 5);
  const topTitles = [...titles].sort((a, b) => b.buzz - a.buzz).slice(0, 5);
  const topFranchises = [...franchises]
    .sort((a, b) => b.buzz - a.buzz)
    .slice(0, 4);

  box.innerHTML = '';

  box.innerHTML += `
    <div class="search-panel-title">
      Recent Searches
      ${
        recent.length > 0
          ? `<button class="search-clear-button" data-clear-recent="yes">Clear</button>`
          : ''
      }
    </div>
  `;

  if (recent.length === 0) {
    box.innerHTML += `
      <div class="search-empty-box">
        No recent searches yet. Search for an actor, movie, franchise, character, or career label.
      </div>
    `;
  } else {
    box.innerHTML += `
      <div class="search-chip-row">
        ${recent
          .map(
            (item) => `
          <button class="search-chip" data-search-term="${escapeHTML(
            item.name
          )}">
            ${escapeHTML(item.name)}
          </button>
        `
          )
          .join('')}
      </div>
    `;
  }

  box.innerHTML += `
    <div class="search-panel-title">Popular Actors</div>
    <div class="search-chip-row">
      ${topActors
        .map(
          (item) => `
        <button class="search-chip" data-search-term="${escapeHTML(item.name)}">
          ${escapeHTML(item.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Popular Titles</div>
    <div class="search-chip-row">
      ${topTitles
        .map(
          (item) => `
        <button class="search-chip" data-search-term="${escapeHTML(item.name)}">
          ${escapeHTML(item.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Popular Franchises</div>
    <div class="search-chip-row">
      ${topFranchises
        .map(
          (item) => `
        <button class="search-chip" data-search-term="${escapeHTML(item.name)}">
          ${escapeHTML(item.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Try Searching</div>
    <div class="search-chip-row">
      <button class="search-chip" data-search-term="Franchise Star">Franchise Star</button>
      <button class="search-chip" data-search-term="Fan Favorite">Fan Favorite</button>
      <button class="search-chip" data-search-term="Award Recognized">Award Recognized</button>
      <button class="search-chip" data-search-term="Career Labels">Career Labels</button>
      <button class="search-chip" data-search-term="John Wick">John Wick</button>
      <button class="search-chip" data-search-term="Tony Stark">Tony Stark</button>
    </div>
  `;

  box.style.display = 'block';
}

function showNoSearchResults__duplicate_disabled_1(query) {
  const box = $('searchResults');

  box.innerHTML = `
    <div class="search-panel-title">No Results Found</div>
    <div class="search-empty-box">
      I could not find <b>${escapeHTML(query)}</b> yet.
      <br><br>
      Try searching for:
      <br>
      actor name, movie title, franchise name, character name, collaborator, or Career Label.
    </div>

    <div class="search-panel-title">Quick Tries</div>
    <div class="search-chip-row">
      <button class="search-chip" data-search-term="Denzel Washington">Denzel Washington</button>
      <button class="search-chip" data-search-term="Zendaya">Zendaya</button>
      <button class="search-chip" data-search-term="Franchise Star">Franchise Star</button>
      <button class="search-chip" data-search-term="Signature Work">Signature Work</button>
      <button class="search-chip" data-search-term="The Matrix">The Matrix</button>
      <button class="search-chip" data-search-term="John Wick">John Wick</button>
    </div>
  `;

  box.style.display = 'block';
}

function chooseFirstSearchMatch__duplicate_disabled_2() {
  const query = $('searchInput').value.trim();

  if (!query) {
    showSearchHomePanel();
    return;
  }

  runSearch();

  if (latestSearchMatches.length > 0) {
    const first = latestSearchMatches[0];
    saveRecentSearch(first.mode, first.name);
    loadEntity(first);
    $('searchInput').value = '';
    hideSearch();
  }
}

function chooseEntity__duplicate_disabled_2(entity) {
  $('searchInput').value = '';
  hideSearch();
  saveRecentSearch(entity.mode, entity.name);
  loadEntity(entity);
}

function saveRecentSearch__duplicate_disabled_1(mode, name) {
  try {
    const recent = getRecentSearches();
    const cleaned = recent.filter(
      (item) => !(item.mode === mode && item.name === name)
    );

    cleaned.unshift({
      mode,
      name,
      savedAt: Date.now(),
    });

    localStorage.setItem(
      'vedb_recent_searches',
      JSON.stringify(cleaned.slice(0, 10))
    );
  } catch (error) {
    console.log('Recent search could not be saved.');
  }
}

function getRecentSearches__duplicate_disabled_1() {
  try {
    const raw = localStorage.getItem('vedb_recent_searches');
    if (!raw) return [];

    const saved = JSON.parse(raw);

    return saved
      .filter((item) =>
        allItems.some(
          (real) => real.mode === item.mode && real.name === item.name
        )
      )
      .slice(0, 10);
  } catch (error) {
    return [];
  }
}

function clearRecentSearches__duplicate_disabled_1() {
  try {
    localStorage.removeItem('vedb_recent_searches');
  } catch (error) {
    console.log('Recent searches could not be cleared.');
  }
}

function searchPreviewText__duplicate_disabled_1(item) {
  if (item.mode === 'actor') {
    const works = (item.knownFor || [])
      .map((row) => row[0])
      .slice(0, 3)
      .join(' • ');
    return works ? 'Known for: ' + works : item.summary || '';
  }

  if (item.mode === 'title') {
    const cast = (item.cast || []).slice(0, 3).join(' • ');
    return cast ? 'Cast: ' + cast : item.summary || '';
  }

  if (item.mode === 'franchise') {
    const titleList = (item.titles || []).slice(0, 3).join(' • ');
    return titleList ? 'Titles: ' + titleList : item.summary || '';
  }

  return item.summary || '';
}

function highlightMatch__duplicate_disabled_1(text, query) {
  const safe = escapeHTML(text || '');
  if (!query) return safe;

  const index = safe.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return safe;

  return (
    safe.slice(0, index) +
    `<span style="color: var(--gold);">` +
    safe.slice(index, index + query.length) +
    `</span>` +
    safe.slice(index + query.length)
  );
}

function escapeHTML__duplicate_disabled_1(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
function init() {
  installDynamicSearchStyles();
  buildSphereNodes();
  setupSphereDrag();
  setupSearch();
  loadEntity(getVEDBStartupEntity() || actors[0]);
  animateSphere();
}

function installDynamicSearchStyles() {
  if (document.getElementById('vedb-dynamic-search-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-dynamic-search-style';
  style.textContent = `
    .search-panel-title {
      color: var(--gold);
      font-size: 15px;
      font-weight: 900;
      margin: 8px 8px 6px;
      text-transform: uppercase;
      letter-spacing: .8px;
    }

    .search-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 6px 8px 12px;
    }

    .search-chip {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }

    .search-chip:hover {
      border-color: var(--gold);
      color: var(--gold);
      background: rgba(247, 180, 0, .12);
    }

    .search-row-main {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .search-type-pill {
      display: inline-block;
      width: fit-content;
      border: 1px solid rgba(247, 180, 0, .45);
      color: var(--gold);
      border-radius: 999px;
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .search-row-extra {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
    }

    .search-empty-box {
      padding: 14px;
      color: var(--muted);
      line-height: 1.45;
    }

    .search-clear-button {
      background: transparent;
      border: none;
      color: #6ab6ff;
      font-size: 13px;
      font-weight: 900;
      margin-left: 8px;
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);
}

function setupSearch() {
  const input = $('searchInput');
  const button = $('searchButton');
  const results = $('searchResults');

  if (!input || !button || !results) return;

  input.addEventListener('focus', function () {
    if (!input.value.trim()) showSearchHomePanel();
  });

  input.addEventListener('input', runSearch);

  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') chooseFirstSearchMatch();
    if (event.key === 'Escape') hideSearch();
  });

  button.addEventListener('click', chooseFirstSearchMatch);

  results.addEventListener('mousedown', function (event) {
    const clearButton = event.target.closest('[data-clear-recent]');
    if (clearButton) {
      event.preventDefault();
      clearRecentSearches();
      showSearchHomePanel();
      return;
    }

    const searchChip = event.target.closest('[data-search-term]');
    if (searchChip) {
      event.preventDefault();
      input.value = searchChip.dataset.searchTerm;
      runSearch();
      input.focus();
      return;
    }

    const row = event.target.closest('[data-open-mode][data-open-name]');
    if (row) {
      event.preventDefault();
      loadEntityByName(row.dataset.openMode, row.dataset.openName);
      saveRecentSearch(row.dataset.openMode, row.dataset.openName);
      input.value = '';
      hideSearch();
    }
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.search-area')) hideSearch();
  });
}

function runSearch() {
  const input = $('searchInput');
  const query = input.value.trim().toLowerCase();

  if (!query) {
    showSearchHomePanel();
    return;
  }

  /*
    VEDB Search Safety Rule:
    Exact title/franchise names should beat partial actor-name matches.

    Example:
    Searching "Her" should find the movie "Her",
    not Josh Hutcherson just because "her" appears inside Hutcherson.
  */

  const exactTitleOrFranchiseMatches = allItems.filter(function (item) {
    const itemName = String(item.name || '').toLowerCase().trim();
    const itemMode = String(item.mode || '').toLowerCase().trim();

    return (
      (itemMode === 'title' || itemMode === 'franchise') &&
      itemName === query
    );
  });

  if (exactTitleOrFranchiseMatches.length > 0) {
    latestSearchMatches = exactTitleOrFranchiseMatches;
    renderSearchResults(latestSearchMatches.slice(0, 12), query, '');
    return;
  }

  const actorMatches = getActorMatchesForQuery(query);

  if (actorMatches.length > 0) {
    latestSearchMatches = buildActorFocusedResults(actorMatches, query);

    if (latestSearchMatches.length === 0) {
      showNoSearchResults(query);
      return;
    }

    renderSearchResults(
      latestSearchMatches.slice(0, 16),
      query,
      actorMatches[0].name
    );
    return;
  }

  latestSearchMatches = allItems
    .map((item) => ({
      item,
      score: scoreSearchItem(item, query),
    }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.item);

  if (latestSearchMatches.length === 0) {
    showNoSearchResults(query);
    return;
  }

  renderSearchResults(latestSearchMatches.slice(0, 12), query, '');
}

function getActorMatchesForQuery(query) {
  const cleanQuery = query.toLowerCase().trim();
  const queryWords = cleanQuery.split(/\s+/).filter(Boolean);

  return actors
    .map((actor) => {
      const actorName = actor.name.toLowerCase();
      const actorWords = actorName.split(/\s+/);

      let score = 0;

      if (actorName === cleanQuery) score += 1000;
      if (actorName.includes(cleanQuery)) score += 700;
      if (cleanQuery.includes(actorName)) score += 700;

      actorWords.forEach((word) => {
        if (queryWords.includes(word)) score += 250;
      });

      if (actorName.startsWith(cleanQuery)) score += 400;

      return { actor, score };
    })
    .filter((row) => row.score >= 250)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.actor);
}

function buildActorFocusedResults(actorMatches, query) {
  const results = [];
  const seen = new Set();

  actorMatches.forEach((actor) => {
    addSearchResult(results, seen, actor);

    const actorTitleNames = new Set(
      (actor.knownFor || []).map((row) => row[0])
    );

    const relatedTitles = titles.filter((title) =>
      titleIsRelatedToActor(title, actor, actorTitleNames)
    );
    relatedTitles.forEach((title) => addSearchResult(results, seen, title));

    const relatedTitleNames = new Set(relatedTitles.map((title) => title.name));

    const relatedFranchises = franchises.filter((franchise) =>
      franchiseIsRelatedToActor(
        franchise,
        actor,
        actorTitleNames,
        relatedTitleNames
      )
    );

    relatedFranchises.forEach((franchise) =>
      addSearchResult(results, seen, franchise)
    );
  });

  return results;
}

function titleIsRelatedToActor(title, actor, actorTitleNames) {
  const actorName = actor.name;

  if ((title.cast || []).includes(actorName)) return true;
  if (actorTitleNames.has(title.name)) return true;

  return false;
}

function franchiseIsRelatedToActor(
  franchise,
  actor,
  actorTitleNames,
  relatedTitleNames
) {
  const actorName = actor.name;

  if ((franchise.cast || []).includes(actorName)) return true;

  const franchiseTitles = franchise.titles || [];

  return franchiseTitles.some(
    (titleName) =>
      actorTitleNames.has(titleName) || relatedTitleNames.has(titleName)
  );
}

function addSearchResult(results, seen, item) {
  const key = item.mode + '::' + item.name;
  if (seen.has(key)) return;

  seen.add(key);
  results.push(item);
}

function scoreSearchItem(item, query) {
  const name = (item.name || '').toLowerCase();
  const mode = (item.mode || '').toLowerCase();
  const job = (item.job || '').toLowerCase();
  const full = searchText(item);

  let score = 0;

  if (name === query) score += 1000;
  if (name.startsWith(query)) score += 500;
  if (name.includes(query)) score += 300;
  if (mode.includes(query)) score += 120;
  if (job.includes(query)) score += 80;
  if (full.includes(query)) score += 50;

  if ((item.characters || []).join(' ').toLowerCase().includes(query))
    score += 160;
  if ((item.cast || []).join(' ').toLowerCase().includes(query)) score += 150;
  if (
    (item.knownFor || [])
      .map((row) => row[0])
      .join(' ')
      .toLowerCase()
      .includes(query)
  )
    score += 140;
  if ((item.collaborators || []).join(' ').toLowerCase().includes(query))
    score += 130;
  if ((item.titles || []).join(' ').toLowerCase().includes(query)) score += 130;

  return score;
}

function renderSearchResults(matches, query, actorFocusName) {
  const box = $('searchResults');
  box.innerHTML = '';

  box.innerHTML += `
    <div class="search-panel-title">
      ${
        actorFocusName
          ? 'Actor-Focused Results: ' + escapeHTML(actorFocusName)
          : 'Search Results'
      }
    </div>
  `;

  if (actorFocusName) {
    box.innerHTML += `
      <div class="search-empty-box">
        Showing only ${escapeHTML(
          actorFocusName
        )}, titles connected to ${escapeHTML(
      actorFocusName
    )}, and franchises connected to ${escapeHTML(actorFocusName)}.
      </div>
    `;
  }

  matches.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'result-row';
    row.dataset.openMode = item.mode;
    row.dataset.openName = item.name;

    row.innerHTML = `
      <div class="search-row-main">
        <span class="search-type-pill">${escapeHTML(modeName(item.mode))}</span>
        <span><b>${highlightMatch(item.name, query)}</b></span>
        <span class="search-row-extra">${escapeHTML(item.job || '')}</span>
        <span class="search-row-extra">${escapeHTML(
          searchPreviewText(item)
        )}</span>
      </div>
      <span>Open →</span>
    `;

    box.appendChild(row);
  });

  box.style.display = 'block';
}

function showSearchHomePanel() {
  const box = $('searchResults');
  const recent = getRecentSearches();
  const topActors = [...actors].sort((a, b) => b.buzz - a.buzz).slice(0, 5);
  const topTitles = [...titles].sort((a, b) => b.buzz - a.buzz).slice(0, 5);
  const topFranchises = [...franchises]
    .sort((a, b) => b.buzz - a.buzz)
    .slice(0, 4);

  box.innerHTML = '';

  box.innerHTML += `
    <div class="search-panel-title">
      Recent Searches
      ${
        recent.length > 0
          ? `<button class="search-clear-button" data-clear-recent="yes">Clear</button>`
          : ''
      }
    </div>
  `;

  if (recent.length === 0) {
    box.innerHTML += `
      <div class="search-empty-box">
        No recent searches yet. Search for an actor, movie, franchise, character, or career label.
      </div>
    `;
  } else {
    box.innerHTML += `
      <div class="search-chip-row">
        ${recent
          .map(
            (item) => `
          <button class="search-chip" data-search-term="${escapeHTML(
            item.name
          )}">
            ${escapeHTML(item.name)}
          </button>
        `
          )
          .join('')}
      </div>
    `;
  }

  box.innerHTML += `
    <div class="search-panel-title">Popular Actors</div>
    <div class="search-chip-row">
      ${topActors
        .map(
          (item) => `
        <button class="search-chip" data-search-term="${escapeHTML(item.name)}">
          ${escapeHTML(item.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Popular Titles</div>
    <div class="search-chip-row">
      ${topTitles
        .map(
          (item) => `
        <button class="search-chip" data-search-term="${escapeHTML(item.name)}">
          ${escapeHTML(item.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Popular Franchises</div>
    <div class="search-chip-row">
      ${topFranchises
        .map(
          (item) => `
        <button class="search-chip" data-search-term="${escapeHTML(item.name)}">
          ${escapeHTML(item.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Try Searching</div>
    <div class="search-chip-row">
      <button class="search-chip" data-search-term="Denzel Washington">Denzel Washington</button>
      <button class="search-chip" data-search-term="Tom Cruise">Tom Cruise</button>
      <button class="search-chip" data-search-term="Franchise Star">Franchise Star</button>
      <button class="search-chip" data-search-term="Fan Favorite">Fan Favorite</button>
      <button class="search-chip" data-search-term="John Wick">John Wick</button>
      <button class="search-chip" data-search-term="Tony Stark">Tony Stark</button>
    </div>
  `;

  box.style.display = 'block';
}

function showNoSearchResults(query) {
  const box = $('searchResults');

  box.innerHTML = `
    <div class="search-panel-title">No Results Found</div>
    <div class="search-empty-box">
      I could not find <b>${escapeHTML(query)}</b> yet.
      <br><br>
      Try searching for:
      <br>
      actor name, movie title, franchise name, character name, collaborator, or Career Label.
    </div>

    <div class="search-panel-title">Quick Tries</div>
    <div class="search-chip-row">
      <button class="search-chip" data-search-term="Denzel Washington">Denzel Washington</button>
      <button class="search-chip" data-search-term="Zendaya">Zendaya</button>
      <button class="search-chip" data-search-term="Tom Cruise">Tom Cruise</button>
      <button class="search-chip" data-search-term="Franchise Star">Franchise Star</button>
      <button class="search-chip" data-search-term="Signature Work">Signature Work</button>
      <button class="search-chip" data-search-term="John Wick">John Wick</button>
    </div>
  `;

  box.style.display = 'block';
}

function chooseFirstSearchMatch() {
  const query = $('searchInput').value.trim();

  if (!query) {
    showSearchHomePanel();
    return;
  }

  runSearch();

  if (latestSearchMatches.length > 0) {
    const first = latestSearchMatches[0];
    saveRecentSearch(first.mode, first.name);
    loadEntity(first);
    $('searchInput').value = '';
    hideSearch();
  }
}

function chooseEntity(entity) {
  $('searchInput').value = '';
  hideSearch();
  saveRecentSearch(entity.mode, entity.name);
  loadEntity(entity);
}

function searchText(item) {
  let actorCareerText = '';

  if (item.mode === 'actor') {
    actorCareerText = (actorCareerLabelInfo[item.name] || [])
      .map((row) => row.label + ' ' + row.description)
      .join(' ');
  }

  return [
    item.name,
    item.job,
    item.summary,
    item.bio,
    item.overview,
    item.knownFor?.map((row) => row[0]).join(' '),
    item.awards?.join(' '),
    item.characters?.join(' '),
    item.collaborators?.join(' '),
    item.cast?.join(' '),
    item.crew?.join(' '),
    item.titles?.join(' '),
    item.timeline?.join(' '),
    item.similar?.join(' '),
    item.social,
    actorCareerText,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function saveRecentSearch(mode, name) {
  try {
    const recent = getRecentSearches();
    const cleaned = recent.filter(
      (item) => !(item.mode === mode && item.name === name)
    );

    cleaned.unshift({
      mode,
      name,
      savedAt: Date.now(),
    });

    localStorage.setItem(
      'vedb_recent_searches',
      JSON.stringify(cleaned.slice(0, 10))
    );
  } catch (error) {
    console.log('Recent search could not be saved.');
  }
}

function getRecentSearches() {
  try {
    const raw = localStorage.getItem('vedb_recent_searches');
    if (!raw) return [];

    const saved = JSON.parse(raw);

    return saved
      .filter((item) =>
        allItems.some(
          (real) => real.mode === item.mode && real.name === item.name
        )
      )
      .slice(0, 10);
  } catch (error) {
    return [];
  }
}

function clearRecentSearches() {
  try {
    localStorage.removeItem('vedb_recent_searches');
  } catch (error) {
    console.log('Recent searches could not be cleared.');
  }
}

function searchPreviewText(item) {
  if (item.mode === 'actor') {
    const works = (item.knownFor || [])
      .map((row) => row[0])
      .slice(0, 3)
      .join(' • ');
    return works ? 'Known for: ' + works : item.summary || '';
  }

  if (item.mode === 'title') {
    const cast = (item.cast || []).slice(0, 3).join(' • ');
    return cast ? 'Cast: ' + cast : item.summary || '';
  }

  if (item.mode === 'franchise') {
    const titleList = (item.titles || []).slice(0, 3).join(' • ');
    return titleList ? 'Titles: ' + titleList : item.summary || '';
  }

  return item.summary || '';
}

function highlightMatch(text, query) {
  const safe = escapeHTML(text || '');
  if (!query) return safe;

  const index = safe.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return safe;

  return (
    safe.slice(0, index) +
    `<span style="color: var(--gold);">` +
    safe.slice(index, index + query.length) +
    `</span>` +
    safe.slice(index + query.length)
  );
}

function escapeHTML(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
function installTailoredPicksAddon() {
  if (window.vedbTailoredPicksInstalled) return;
  window.vedbTailoredPicksInstalled = true;

  installTailoredPicksStyles();
  addTailoredPicksNavButton();
  wrapLoadEntityForTailoredPicks();
  wrapSetNavActiveForTailoredPicks();
  renderTailoredControls();
}

function installTailoredPicksStyles() {
  if (document.getElementById('vedb-tailored-picks-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-tailored-picks-style';
  style.textContent = `
    .tailored-action-button {
      background: rgba(247, 180, 0, .18) !important;
      border: 1px solid rgba(247, 180, 0, .85) !important;
      color: var(--gold) !important;
    }

    .tailored-profile-box {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 18px;
      margin-bottom: 18px;
    }

    .tailored-profile-box h3,
    .tailored-section-title {
      color: var(--gold);
      margin-bottom: 10px;
    }

    .tailored-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 10px 0;
    }

    .tailored-chip {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 900;
    }

    .tailored-mini-note {
      color: var(--muted);
      font-size: 15px;
      line-height: 1.45;
      margin: 8px 0 18px;
    }

    .tailored-danger-button {
      background: rgba(255, 70, 70, .14) !important;
      border: 1px solid rgba(255, 110, 110, .65) !important;
      color: #ffb4b4 !important;
    }
  `;

  document.head.appendChild(style);
}

function addTailoredPicksNavButton() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (document.getElementById('tailoredPicksNavButton')) return;

  const button = document.createElement('button');
  button.id = 'tailoredPicksNavButton';
  button.textContent = 'Tailored Picks';
  button.onclick = openTailoredPicksPage;

  nav.appendChild(button);
}

function wrapSetNavActiveForTailoredPicks() {
  if (window.vedbOriginalSetNavActiveForTailored) return;

  window.vedbOriginalSetNavActiveForTailored = setNavActive;

  setNavActive = function (which) {
    window.vedbOriginalSetNavActiveForTailored(which);

    if (which === 'tailored') {
      document
        .querySelectorAll('.nav button')
        .forEach((button) => button.classList.remove('active'));
      const tailoredButton = document.getElementById('tailoredPicksNavButton');
      if (tailoredButton) tailoredButton.classList.add('active');
    }
  };
}

function wrapLoadEntityForTailoredPicks() {
  if (window.vedbOriginalLoadEntityForTailored) return;

  window.vedbOriginalLoadEntityForTailored = loadEntity;

  loadEntity = function (entity) {
    window.vedbOriginalLoadEntityForTailored(entity);
    recordEntityViewForTailoredPicks(entity);
    renderTailoredControls();
  };
}

function renderTailoredControls() {
  const actions = document.querySelector('.actions');
  if (!actions || !currentEntity) return;

  document
    .querySelectorAll('.tailored-action-button')
    .forEach((button) => button.remove());

  if (currentEntity.mode === 'actor') {
    const likeButton = document.createElement('button');
    likeButton.className = 'tailored-action-button';
    likeButton.textContent = isActorLiked(currentEntity.name)
      ? '♥ Liked Actor'
      : '♡ Like This Actor';
    likeButton.onclick = function () {
      toggleLikedActor(currentEntity.name);
      renderTailoredControls();
    };
    actions.appendChild(likeButton);
  }

  if (currentEntity.mode === 'title') {
    const watchedButton = document.createElement('button');
    watchedButton.className = 'tailored-action-button';
    watchedButton.textContent = isTitleWatched(currentEntity.name)
      ? '✓ Watched'
      : '＋ Mark Watched';
    watchedButton.onclick = function () {
      toggleWatchedTitle(currentEntity.name);
      renderTailoredControls();
    };
    actions.appendChild(watchedButton);
  }

  const picksButton = document.createElement('button');
  picksButton.className = 'tailored-action-button';
  picksButton.textContent = 'Tailored Picks';
  picksButton.onclick = openTailoredPicksPage;
  actions.appendChild(picksButton);
}

function openTailoredPicksPage() {
  hideSearch();

  const profile = getTailoredProfile();
  const titlePicks = getTailoredTitlePicks();
  const actorPicks = getTailoredActorPicks();
  const franchisePicks = getTailoredFranchisePicks();

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB PERSONALIZED PAGE</div>
          <h2>Tailored Picks</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        ${tailoredProfileBox(profile)}

        <h3 class="tailored-section-title">Recommended Titles</h3>
        <p class="tailored-mini-note">
          These are picked from actors you liked, titles you marked watched, cast connections, franchise links, and audience momentum.
        </p>
        ${tailoredCards(titlePicks, 'title')}

        <h3 class="tailored-section-title">Actors You May Like</h3>
        <p class="tailored-mini-note">
          These are based on actors you liked, actors you opened, and people connected to watched titles.
        </p>
        ${tailoredCards(actorPicks, 'actor')}

        <h3 class="tailored-section-title">Franchises To Explore</h3>
        <p class="tailored-mini-note">
          These are franchise worlds connected to your watched titles or preferred actors.
        </p>
        ${tailoredCards(franchisePicks, 'franchise')}

        <h3 class="tailored-section-title">Restart Personalization</h3>
        <p class="tailored-mini-note">
          This only clears the Tailored Picks memory saved inside this browser.
        </p>
        <button class="back-button tailored-danger-button" onclick="clearTailoredPicksData(); openTailoredPicksPage();">
          Clear Tailored Picks Data
        </button>
      </div>
    </div>
  `;

  window.location.hash = '#/tailored-picks';
  setNavActive('tailored');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function tailoredProfileBox(profile) {
  const likedActors = profile.likedActors.length
    ? profile.likedActors
        .map(
          (name) =>
            `<span class="tailored-chip">${safeTailoredText(name)}</span>`
        )
        .join('')
    : `<span class="tailored-chip">No liked actors yet</span>`;

  const watchedTitles = profile.watchedTitles.length
    ? profile.watchedTitles
        .map(
          (name) =>
            `<span class="tailored-chip">${safeTailoredText(name)}</span>`
        )
        .join('')
    : `<span class="tailored-chip">No watched titles yet</span>`;

  return `
    <div class="tailored-profile-box">
      <h3>Your Tailored Profile</h3>
      <p>
        Like actors and mark titles as watched. VEDB will use that to build better recommendations.
      </p>

      <h3>Actors You Like</h3>
      <div class="tailored-chip-row">${likedActors}</div>

      <h3>Titles You Marked Watched</h3>
      <div class="tailored-chip-row">${watchedTitles}</div>
    </div>
  `;
}

function tailoredCards(items, mode) {
  if (!items || items.length === 0) {
    return `
      <div class="tailored-profile-box">
        <p>
          Not enough data yet. Like an actor or mark a title as watched to improve this section.
        </p>
      </div>
    `;
  }

  return `
    <div class="cards-grid">
      ${items
        .map((row) => {
          const item = row.item || row;
          const why =
            row.why ||
            'Suggested because it has strong VEDB audience momentum.';

          return `
          <article class="info-card">
            <h3>${safeTailoredText(item.initials || '')} ${safeTailoredText(
            item.name
          )}</h3>
            <p>${safeTailoredText(
              item.summary || item.overview || item.job || ''
            )}</p>
            <p><b>Why this pick:</b> ${safeTailoredText(why)}</p>
            <button onclick="loadEntityByName('${item.mode}', '${escapeForClick(
            item.name
          )}')">
              Open ${safeTailoredText(modeName(item.mode))} →
            </button>
          </article>
        `;
        })
        .join('')}
    </div>
  `;
}

function getTailoredProfile() {
  return {
    likedActors: getTailoredArray('vedb_liked_actors'),
    watchedTitles: getTailoredArray('vedb_watched_titles'),
    actorViews: getTailoredObject('vedb_actor_views'),
    titleViews: getTailoredObject('vedb_title_views'),
  };
}

function getTailoredTitlePicks() {
  const profile = getTailoredProfile();
  const favoriteActorScores = buildFavoriteActorScores(profile);
  const watchedSet = new Set(profile.watchedTitles);
  const watchedRecords = titles.filter((title) => watchedSet.has(title.name));
  const watchedFranchises = new Set(
    watchedRecords.map((title) => title.facts?.Franchise).filter(Boolean)
  );
  const watchedGenres = getWatchedGenreWords(watchedRecords);

  const scored = titles
    .filter((title) => !watchedSet.has(title.name))
    .map((title) => {
      let score = (title.buzz || 0) / 10;
      const reasons = [];

      const castMatches = (title.cast || []).filter(
        (name) => favoriteActorScores[name]
      );
      if (castMatches.length > 0) {
        score += castMatches.reduce(
          (total, name) => total + favoriteActorScores[name],
          0
        );
        reasons.push(
          'includes actor preference: ' + castMatches.slice(0, 3).join(', ')
        );
      }

      const titleFranchise = title.facts?.Franchise;
      if (titleFranchise && watchedFranchises.has(titleFranchise)) {
        score += 60;
        reasons.push('connected to a franchise you watched');
      }

      const similarToWatched = watchedRecords.some(
        (watched) =>
          (title.similar || []).includes(watched.name) ||
          (watched.similar || []).includes(title.name)
      );

      if (similarToWatched) {
        score += 55;
        reasons.push('similar to a title you watched');
      }

      const genreWords = getGenreWordsFromItem(title);
      const genreOverlap = genreWords.filter((word) => watchedGenres.has(word));

      if (genreOverlap.length > 0) {
        score += 25;
        reasons.push(
          'matches your watched genres: ' + genreOverlap.slice(0, 3).join(', ')
        );
      }

      return {
        item: title,
        score,
        why: reasons.length
          ? reasons.join(' • ')
          : 'high audience momentum in your VEDB catalog',
      };
    })
    .sort((a, b) => b.score - a.score);

  if (profile.likedActors.length === 0 && profile.watchedTitles.length === 0) {
    return [...titles]
      .sort((a, b) => (b.buzz || 0) - (a.buzz || 0))
      .slice(0, 6)
      .map((title) => ({
        item: title,
        why: 'starter pick based on high audience momentum',
      }));
  }

  return scored.slice(0, 6);
}

function getTailoredActorPicks() {
  const profile = getTailoredProfile();
  const favoriteActorScores = buildFavoriteActorScores(profile);
  const watchedSet = new Set(profile.watchedTitles);
  const watchedRecords = titles.filter((title) => watchedSet.has(title.name));
  const likedSet = new Set(profile.likedActors);

  const scored = actors
    .map((actor) => {
      let score = (actor.buzz || 0) / 10;
      const reasons = [];

      if (likedSet.has(actor.name)) {
        score += 120;
        reasons.push('you liked this actor');
      }

      if (profile.actorViews[actor.name]) {
        score += Math.min(70, profile.actorViews[actor.name] * 12);
        reasons.push('you opened this actor before');
      }

      const appearsInWatched = watchedRecords.some((title) =>
        (title.cast || []).includes(actor.name)
      );

      if (appearsInWatched) {
        score += 80;
        reasons.push('appears in a title you marked watched');
      }

      const knownForWatched = (actor.knownFor || []).some((row) =>
        watchedSet.has(row[0])
      );

      if (knownForWatched) {
        score += 60;
        reasons.push('signature work overlaps with your watched list');
      }

      const likedCollaborator = profile.likedActors.some((likedName) =>
        (actor.collaborators || []).includes(likedName)
      );

      if (likedCollaborator) {
        score += 35;
        reasons.push('connected to an actor you like');
      }

      return {
        item: actor,
        score,
        why: reasons.length
          ? reasons.join(' • ')
          : 'strong actor momentum in your VEDB catalog',
      };
    })
    .sort((a, b) => b.score - a.score);

  if (profile.likedActors.length === 0 && profile.watchedTitles.length === 0) {
    return [...actors]
      .sort((a, b) => (b.buzz || 0) - (a.buzz || 0))
      .slice(0, 6)
      .map((actor) => ({
        item: actor,
        why: 'starter pick based on high audience momentum',
      }));
  }

  return scored.slice(0, 6);
}

function getTailoredFranchisePicks() {
  const profile = getTailoredProfile();
  const favoriteActorScores = buildFavoriteActorScores(profile);
  const watchedSet = new Set(profile.watchedTitles);

  const scored = franchises
    .map((franchise) => {
      let score = (franchise.buzz || 0) / 10;
      const reasons = [];

      const castMatches = (franchise.cast || []).filter(
        (name) => favoriteActorScores[name]
      );
      if (castMatches.length > 0) {
        score += castMatches.reduce(
          (total, name) => total + favoriteActorScores[name],
          0
        );
        reasons.push(
          'includes actor preference: ' + castMatches.slice(0, 3).join(', ')
        );
      }

      const watchedFranchiseTitles = (franchise.titles || []).filter(
        (titleName) => watchedSet.has(titleName)
      );
      if (watchedFranchiseTitles.length > 0) {
        score += 100;
        reasons.push(
          'connected to watched title: ' +
            watchedFranchiseTitles.slice(0, 2).join(', ')
        );
      }

      return {
        item: franchise,
        score,
        why: reasons.length
          ? reasons.join(' • ')
          : 'strong franchise momentum in your VEDB catalog',
      };
    })
    .sort((a, b) => b.score - a.score);

  if (profile.likedActors.length === 0 && profile.watchedTitles.length === 0) {
    return [...franchises]
      .sort((a, b) => (b.buzz || 0) - (a.buzz || 0))
      .slice(0, 6)
      .map((franchise) => ({
        item: franchise,
        why: 'starter pick based on high audience momentum',
      }));
  }

  return scored.slice(0, 6);
}

function buildFavoriteActorScores(profile) {
  const scores = {};

  profile.likedActors.forEach((name) => {
    scores[name] = (scores[name] || 0) + 120;
  });

  Object.entries(profile.actorViews || {}).forEach(([name, views]) => {
    scores[name] = (scores[name] || 0) + Math.min(60, Number(views) * 10);
  });

  const watchedRecords = titles.filter((title) =>
    profile.watchedTitles.includes(title.name)
  );

  watchedRecords.forEach((title) => {
    (title.cast || []).forEach((actorName) => {
      scores[actorName] = (scores[actorName] || 0) + 45;
    });
  });

  return scores;
}

function getWatchedGenreWords(watchedRecords) {
  const words = new Set();

  watchedRecords.forEach((item) => {
    getGenreWordsFromItem(item).forEach((word) => words.add(word));
  });

  return words;
}

function getGenreWordsFromItem(item) {
  const text = [
    item.job || '',
    item.facts?.Genre || '',
    item.facts?.Type || '',
    item.facts?.Franchise || '',
  ]
    .join(' ')
    .toLowerCase();

  return text
    .split(/[^a-z0-9]+/g)
    .filter(
      (word) =>
        word.length > 3 &&
        !['movie', 'series', 'film', 'type', 'genre', 'drama'].includes(word)
    );
}

function recordEntityViewForTailoredPicks(entity) {
  if (!entity || !entity.name) return;

  if (entity.mode === 'actor') {
    const views = getTailoredObject('vedb_actor_views');
    views[entity.name] = (views[entity.name] || 0) + 1;
    setTailoredObject('vedb_actor_views', views);
  }

  if (entity.mode === 'title') {
    const views = getTailoredObject('vedb_title_views');
    views[entity.name] = (views[entity.name] || 0) + 1;
    setTailoredObject('vedb_title_views', views);
  }
}

function toggleLikedActor(name) {
  const liked = getTailoredArray('vedb_liked_actors');
  const exists = liked.includes(name);

  const updated = exists
    ? liked.filter((item) => item !== name)
    : [name, ...liked];

  setTailoredArray('vedb_liked_actors', updated.slice(0, 50));
}

function toggleWatchedTitle(name) {
  const watched = getTailoredArray('vedb_watched_titles');
  const exists = watched.includes(name);

  const updated = exists
    ? watched.filter((item) => item !== name)
    : [name, ...watched];

  setTailoredArray('vedb_watched_titles', updated.slice(0, 100));
}

function isActorLiked(name) {
  return getTailoredArray('vedb_liked_actors').includes(name);
}

function isTitleWatched(name) {
  return getTailoredArray('vedb_watched_titles').includes(name);
}

function clearTailoredPicksData() {
  localStorage.removeItem('vedb_liked_actors');
  localStorage.removeItem('vedb_watched_titles');
  localStorage.removeItem('vedb_actor_views');
  localStorage.removeItem('vedb_title_views');
  renderTailoredControls();
}

function getTailoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function setTailoredArray(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Could not save tailored array.');
  }
}

function getTailoredObject(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch (error) {
    return {};
  }
}

function setTailoredObject(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Could not save tailored object.');
  }
}

function safeTailoredText(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installTailoredPicksAddon();
function installPremiereRadarAddon() {
  if (window.vedbPremiereRadarInstalled) return;
  window.vedbPremiereRadarInstalled = true;

  installPremiereRadarStyles();
  addPremiereRadarNavButton();
}

const premiereRadarItems = [
  {
    id: 'mandalorian-grogu-2026',
    name: 'The Mandalorian and Grogu',
    releaseDate: '2026-05-22',
    status: 'Upcoming theatrical release',
    type: 'Movie',
    genre: 'Science Fiction • Adventure',
    platformType: 'theaters',
    providers: ['Movie Theaters', 'Disney'],
    cast: ['Pedro Pascal', 'Sigourney Weaver', 'Jeremy Allen White'],
    studio: 'Lucasfilm / Disney',
    summary:
      'A Star Wars theatrical movie connected to The Mandalorian world, centered on Din Djarin and Grogu.',
    source: 'https://movies.disney.com/star-wars-the-mandalorian-and-grogu',
  },
  {
    id: 'mortal-kombat-ii-2026',
    name: 'Mortal Kombat II',
    releaseDate: '2026-05-08',
    status: 'Upcoming theatrical release',
    type: 'Movie',
    genre: 'Action • Adventure • Fantasy',
    platformType: 'theaters',
    providers: ['Movie Theaters'],
    cast: ['Karl Urban', 'Ludi Lin', 'Jessica McNamee', 'Joe Taslim'],
    studio: 'Warner Bros. Pictures / New Line Cinema',
    summary:
      'A sequel connected to the Mortal Kombat game universe, with fighters pulled into another major battle.',
    source: 'https://www.mortalkombatmovie.com/',
  },
  {
    id: 'narnia-magicians-nephew',
    name: "Narnia: The Magician's Nephew",
    releaseDate: '2027-02-12',
    streamingDate: '2027-04-02',
    status: 'Future theatrical and Netflix release plan',
    type: 'Movie',
    genre: 'Fantasy • Adventure',
    platformType: 'netflix',
    providers: ['Movie Theaters', 'Netflix'],
    cast: ['Cast to be added / verified'],
    studio: 'Netflix',
    summary:
      'A planned Narnia movie with a theatrical window before streaming on Netflix.',
    source:
      'https://www.reuters.com/business/media-telecom/greta-gerwigs-narnia-get-wide-theatrical-imax-release-next-year-2026-05-01/',
  },
];

const premiereRadarServices = [
  {
    id: 'all',
    title: 'ALL',
    icon: '◎',
    small: 'everything',
    theta: 0.08,
    phi: 2.52,
  },
  {
    id: 'theaters',
    title: 'THEATERS',
    icon: '🎟',
    small: 'cinema',
    theta: 1.05,
    phi: 2.42,
  },
  {
    id: 'netflix',
    title: 'NETFLIX',
    icon: 'N',
    small: 'stream',
    theta: 1.95,
    phi: 2.32,
  },
  {
    id: 'hulu',
    title: 'HULU',
    icon: 'H',
    small: 'stream',
    theta: 2.85,
    phi: 2.22,
  },
  {
    id: 'disney',
    title: 'DISNEY+',
    icon: 'D+',
    small: 'stream',
    theta: 5.55,
    phi: 1.78,
  },
  {
    id: 'prime',
    title: 'PRIME VIDEO',
    icon: 'A',
    small: 'amazon',
    theta: 0.55,
    phi: 1.62,
  },
  {
    id: 'cast',
    title: 'CAST',
    icon: '♙',
    small: 'actors',
    theta: 1.65,
    phi: 1.52,
  },
  {
    id: 'calendar',
    title: 'CALENDAR',
    icon: '⌛',
    small: 'dates',
    theta: 2.75,
    phi: 1.48,
  },
  {
    id: 'watchlist',
    title: 'WATCHLIST',
    icon: '★',
    small: 'saved',
    theta: 3.85,
    phi: 1.55,
  },
  {
    id: 'sources',
    title: 'SOURCES',
    icon: '🔗',
    small: 'verify',
    theta: 4.85,
    phi: 1.62,
  },
  {
    id: 'add',
    title: 'ADD MOVIE',
    icon: '+',
    small: 'manual',
    theta: 1.35,
    phi: 0.72,
  },
  {
    id: 'api',
    title: 'API READY',
    icon: '⚙',
    small: 'future',
    theta: 3.35,
    phi: 0.68,
  },
];

function installPremiereRadarStyles() {
  if (document.getElementById('vedb-premiere-radar-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-premiere-radar-style';
  style.textContent = `
    .premiere-radar-layout {
      display: grid;
      grid-template-columns: minmax(340px, 540px) minmax(0, 1fr);
      gap: 18px;
      align-items: start;
    }

    .premiere-radar-sphere {
      width: min(500px, 100%);
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      position: relative;
      margin: 6px auto 18px;
      background:
        radial-gradient(circle at 50% 50%, rgba(11, 45, 85, .78), rgba(0,0,0,.2) 58%, rgba(0, 18, 39, .88) 100%),
        repeating-radial-gradient(circle, rgba(247, 180, 0, .13) 0 2px, transparent 2px 56px);
      border: 2px solid rgba(247, 180, 0, .78);
      box-shadow:
        0 0 38px rgba(247, 180, 0, .55),
        inset 0 0 90px rgba(0, 132, 255, .24);
      overflow: hidden;
    }

    .premiere-radar-core {
      position: absolute;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      left: calc(50% - 40px);
      top: calc(50% - 40px);
      display: grid;
      place-items: center;
      color: var(--gold);
      font-weight: 900;
      background: radial-gradient(circle, rgba(247, 180, 0, .75), rgba(247, 180, 0, .08) 65%, transparent);
      box-shadow: 0 0 40px rgba(247, 180, 0, .65);
      pointer-events: none;
      text-align: center;
      font-size: 12px;
    }

    .premiere-radar-orbit {
      position: absolute;
      inset: 42px;
      border-radius: 50%;
      border: 1px solid rgba(247, 180, 0, .28);
      pointer-events: none;
    }

    .premiere-radar-orbit.two {
      transform: rotate(60deg) scaleX(.44);
      border-color: rgba(0, 132, 255, .32);
    }

    .premiere-radar-orbit.three {
      transform: rotate(-60deg) scaleX(.44);
      border-color: rgba(0, 132, 255, .32);
    }

    .premiere-radar-node {
      position: absolute;
      width: 100px;
      min-height: 62px;
      border-radius: 15px;
      border: 1px solid rgba(247, 180, 0, .62);
      background: rgba(2, 20, 42, .92);
      color: white;
      padding: 7px;
      text-align: center;
      cursor: pointer;
      box-shadow: inset 0 0 22px rgba(247, 180, 0, .08), 0 0 10px rgba(247, 180, 0, .18);
      transition: .2s ease;
    }

    .premiere-radar-node:hover,
    .premiere-radar-node.active {
      border-color: var(--gold);
      background: rgba(55, 39, 0, .95);
      box-shadow: 0 0 24px rgba(247, 180, 0, .8), inset 0 0 24px rgba(247, 180, 0, .14);
    }

    .premiere-radar-node-icon {
      font-size: 20px;
      font-weight: 900;
      line-height: 1;
    }

    .premiere-radar-node-title {
      font-size: 10px;
      font-weight: 900;
      margin-top: 4px;
    }

    .premiere-radar-node-small {
      color: #d7e8ff;
      font-size: 9px;
      margin-top: 2px;
    }

    .premiere-radar-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 0 0 16px;
    }

    .premiere-radar-chip {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }

    .premiere-radar-chip.active,
    .premiere-radar-chip:hover {
      border-color: var(--gold);
      color: var(--gold);
      background: rgba(247, 180, 0, .12);
    }

    .premiere-radar-card {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(6, 25, 49, .84);
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 12px;
    }

    .premiere-radar-card h3 {
      color: var(--gold);
      margin-bottom: 8px;
    }

    .premiere-radar-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 10px 0;
    }

    .premiere-radar-pill {
      border: 1px solid rgba(247, 180, 0, .42);
      color: var(--gold);
      border-radius: 999px;
      padding: 4px 9px;
      font-size: 12px;
      font-weight: 900;
    }

    .premiere-radar-note {
      color: var(--muted);
      line-height: 1.45;
      margin-bottom: 14px;
    }

    .premiere-radar-link {
      color: #6ab6ff;
      word-break: break-word;
      font-weight: 900;
    }

    .premiere-radar-form {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 16px;
      margin-top: 12px;
    }

    .premiere-radar-form input,
    .premiere-radar-form textarea,
    .premiere-radar-form select {
      width: 100%;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(4, 14, 28, .9);
      color: white;
      border-radius: 12px;
      padding: 11px;
      margin: 6px 0 10px;
      font-size: 15px;
    }

    .premiere-radar-form label {
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }

    .premiere-radar-form button,
    .premiere-radar-card button {
      background: rgba(9, 57, 132, .72);
      border: 1px solid var(--blue);
      color: white;
      padding: 10px 16px;
      border-radius: 9px;
      font-weight: 900;
      cursor: pointer;
      margin-top: 8px;
    }

    .premiere-radar-card button.saved {
      background: rgba(247, 180, 0, .18);
      border-color: var(--gold);
      color: var(--gold);
    }

    @media (max-width: 1100px) {
      .premiere-radar-layout {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 700px) {
      .premiere-radar-sphere {
        width: min(340px, 95vw);
      }

      .premiere-radar-node {
        width: 78px;
        min-height: 52px;
        padding: 5px;
      }

      .premiere-radar-node-title {
        font-size: 8px;
      }

      .premiere-radar-node-small {
        display: none;
      }
    }
  `;

  document.head.appendChild(style);
}

function addPremiereRadarNavButton() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (document.getElementById('premiereRadarNavButton')) return;

  const button = document.createElement('button');
  button.id = 'premiereRadarNavButton';
  button.textContent = 'Premiere Radar';
  button.onclick = function () {
    openPremiereRadarPage('all');
  };

  nav.appendChild(button);
}

function openPremiereRadarPage(filter) {
  const activeFilter = filter || 'all';
  hideSearch();

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB PREMIERE RADAR</div>
          <h2>Premiere Radar Sphere</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        <p class="premiere-radar-note">
          Premiere Radar is your coming-soon hub for theatrical releases, streaming premieres, cast lists, release dates, and where a movie may appear. This prototype uses manual records. A real live version should connect to a release-date and streaming-availability API.
        </p>

        <div class="premiere-radar-layout">
          <div>
            ${buildPremiereRadarSphere(activeFilter)}
            ${buildPremiereRadarQuickFilters(activeFilter)}
          </div>

          <div id="premiereRadarResults">
            ${buildPremiereRadarResults(activeFilter)}
          </div>
        </div>
      </div>
    </div>
  `;

  activatePremiereRadarNav();
  window.location.hash = '#/premiere-radar/' + activeFilter;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildPremiereRadarSphere(activeFilter) {
  const size = 500;
  const radius = size * 0.35;
  const center = size / 2;

  const nodes = premiereRadarServices
    .map((service) => {
      const x = Math.sin(service.phi) * Math.cos(service.theta);
      const y = Math.cos(service.phi);
      const z = Math.sin(service.phi) * Math.sin(service.theta);

      const depth = (z + 1) / 2;
      const scale = 0.74 + depth * 0.24;
      const left = center + x * radius - 50;
      const top = center + y * radius - 31;

      return `
      <button
        class="premiere-radar-node ${
          activeFilter === service.id ? 'active' : ''
        }"
        style="left:${left}px; top:${top}px; transform:scale(${scale}); z-index:${Math.round(
        100 + z * 100
      )};"
        onclick="openPremiereRadarPage('${service.id}')"
      >
        <div class="premiere-radar-node-icon">${radarSafe(service.icon)}</div>
        <div class="premiere-radar-node-title">${radarSafe(service.title)}</div>
        <div class="premiere-radar-node-small">${radarSafe(service.small)}</div>
      </button>
    `;
    })
    .join('');

  return `
    <div class="premiere-radar-sphere">
      <div class="premiere-radar-orbit"></div>
      <div class="premiere-radar-orbit two"></div>
      <div class="premiere-radar-orbit three"></div>
      <div class="premiere-radar-core">PREMIERE<br>RADAR</div>
      ${nodes}
    </div>
  `;
}

function buildPremiereRadarQuickFilters(activeFilter) {
  const filters = [
    ['all', 'All'],
    ['theaters', 'Movie Theaters'],
    ['netflix', 'Netflix'],
    ['hulu', 'Hulu'],
    ['disney', 'Disney+'],
    ['prime', 'Prime Video'],
    ['calendar', 'Calendar'],
    ['cast', 'Cast'],
    ['watchlist', 'Watchlist'],
    ['add', 'Add Movie'],
  ];

  return `
    <div class="premiere-radar-toolbar">
      ${filters
        .map(
          ([id, label]) => `
        <button
          class="premiere-radar-chip ${activeFilter === id ? 'active' : ''}"
          onclick="openPremiereRadarPage('${id}')"
        >
          ${radarSafe(label)}
        </button>
      `
        )
        .join('')}
    </div>
  `;
}

function buildPremiereRadarResults(activeFilter) {
  if (activeFilter === 'add') return buildPremiereRadarAddForm();
  if (activeFilter === 'api') return buildPremiereRadarApiPage();
  if (activeFilter === 'sources') return buildPremiereRadarSourcesPage();

  const items = getPremiereRadarItemsForFilter(activeFilter);

  if (activeFilter === 'calendar') {
    return buildPremiereRadarCalendar(items);
  }

  if (activeFilter === 'cast') {
    return buildPremiereRadarCastView(items);
  }

  if (items.length === 0) {
    return `
      <div class="premiere-radar-card">
        <h3>No records yet</h3>
        <p>
          No premiere records have been added for this filter yet. Use the Add Movie node to add one manually.
        </p>
      </div>
    `;
  }

  return items.map((item) => buildPremiereRadarCard(item)).join('');
}

function getPremiereRadarItemsForFilter(filter) {
  const all = getAllPremiereRadarItems();

  if (filter === 'all') return sortPremiereItemsByDate(all);

  if (filter === 'watchlist') {
    const saved = new Set(getPremiereRadarWatchlist());
    return sortPremiereItemsByDate(all.filter((item) => saved.has(item.id)));
  }

  if (filter === 'theaters') {
    return sortPremiereItemsByDate(
      all.filter(
        (item) =>
          item.platformType === 'theaters' ||
          providerMatches(item, 'Movie Theaters')
      )
    );
  }

  if (filter === 'netflix') {
    return sortPremiereItemsByDate(
      all.filter((item) => providerMatches(item, 'Netflix'))
    );
  }

  if (filter === 'hulu') {
    return sortPremiereItemsByDate(
      all.filter((item) => providerMatches(item, 'Hulu'))
    );
  }

  if (filter === 'disney') {
    return sortPremiereItemsByDate(
      all.filter(
        (item) =>
          providerMatches(item, 'Disney') || providerMatches(item, 'Disney+')
      )
    );
  }

  if (filter === 'prime') {
    return sortPremiereItemsByDate(
      all.filter(
        (item) =>
          providerMatches(item, 'Prime Video') ||
          providerMatches(item, 'Amazon')
      )
    );
  }

  return sortPremiereItemsByDate(all);
}

function providerMatches(item, providerName) {
  return (item.providers || []).some((provider) =>
    String(provider).toLowerCase().includes(String(providerName).toLowerCase())
  );
}

function buildPremiereRadarCard(item) {
  const saved = getPremiereRadarWatchlist().includes(item.id);

  const dateLine = item.streamingDate
    ? `${formatPremiereDate(
        item.releaseDate
      )} theatrical • ${formatPremiereDate(item.streamingDate)} streaming`
    : formatPremiereDate(item.releaseDate);

  return `
    <article class="premiere-radar-card">
      <h3>${radarSafe(item.name)}</h3>

      <div class="premiere-radar-meta">
        <span class="premiere-radar-pill">${radarSafe(
          item.type || 'Movie'
        )}</span>
        <span class="premiere-radar-pill">${radarSafe(
          item.status || 'Upcoming'
        )}</span>
        <span class="premiere-radar-pill">${radarSafe(dateLine)}</span>
      </div>

      <p><b>Genre:</b> ${radarSafe(item.genre || 'Genre to be added')}</p>
      <p><b>Where:</b> ${radarSafe((item.providers || []).join(' • '))}</p>
      <p><b>Cast:</b> ${radarSafe((item.cast || []).join(' • '))}</p>
      <p><b>Studio / Distributor:</b> ${radarSafe(
        item.studio || 'To be added'
      )}</p>
      <p>${radarSafe(item.summary || '')}</p>

      ${
        item.source
          ? `<p><b>Source / Verify:</b> <a class="premiere-radar-link" href="${radarSafe(
              item.source
            )}" target="_blank" rel="noopener">${radarSafe(
              item.source
            )}</a></p>`
          : ''
      }

      <button class="${
        saved ? 'saved' : ''
      }" onclick="togglePremiereRadarWatchlist('${radarSafe(
    item.id
  )}'); openPremiereRadarPage('all');">
        ${saved ? '★ Saved to Watchlist' : '☆ Add to Watchlist'}
      </button>
    </article>
  `;
}

function buildPremiereRadarCalendar(items) {
  const sorted = sortPremiereItemsByDate(items);

  return `
    <div class="premiere-radar-card">
      <h3>Release Calendar</h3>
      <p class="premiere-radar-note">
        This is the date-focused view. Later, this can become a real monthly calendar.
      </p>
    </div>

    ${sorted
      .map(
        (item) => `
      <article class="premiere-radar-card">
        <h3>${radarSafe(formatPremiereDate(item.releaseDate))} — ${radarSafe(
          item.name
        )}</h3>
        <p><b>Where:</b> ${radarSafe((item.providers || []).join(' • '))}</p>
        <p><b>Cast:</b> ${radarSafe((item.cast || []).join(' • '))}</p>
        <p>${radarSafe(item.summary || '')}</p>
      </article>
    `
      )
      .join('')}
  `;
}

function buildPremiereRadarCastView(items) {
  const castMap = {};

  items.forEach((item) => {
    (item.cast || []).forEach((person) => {
      if (!castMap[person]) castMap[person] = [];
      castMap[person].push(item.name);
    });
  });

  const people = Object.entries(castMap).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  if (people.length === 0) {
    return `
      <div class="premiere-radar-card">
        <h3>No cast records yet</h3>
        <p>Add movie cast inside Premiere Radar records.</p>
      </div>
    `;
  }

  return `
    <div class="premiere-radar-card">
      <h3>Upcoming Movie Cast Index</h3>
      <p class="premiere-radar-note">
        This shows cast names connected to upcoming Premiere Radar records.
      </p>
    </div>

    <div class="cards-grid">
      ${people
        .map(
          ([person, movieNames]) => `
        <article class="info-card">
          <h3>${radarSafe(person)}</h3>
          <p><b>Upcoming:</b> ${radarSafe(movieNames.join(' • '))}</p>
          ${
            actors.some((actor) => actor.name === person)
              ? `<button onclick="loadEntityByName('actor', '${escapeForClick(
                  person
                )}')">Open Actor Sphere →</button>`
              : `<button onclick="premiereRadarSearchCastName('${escapeForClick(
                  person
                )}')">Search Cast Name →</button>`
          }
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function buildPremiereRadarSourcesPage() {
  const items = getAllPremiereRadarItems();

  return `
    <div class="premiere-radar-card">
      <h3>Source / Verification Center</h3>
      <p class="premiere-radar-note">
        Premiere Radar should always verify release dates, cast, and streaming platform availability before publishing.
      </p>
    </div>

    ${items
      .map(
        (item) => `
      <article class="premiere-radar-card">
        <h3>${radarSafe(item.name)}</h3>
        <p><b>Release:</b> ${radarSafe(
          formatPremiereDate(item.releaseDate)
        )}</p>
        <p><b>Where:</b> ${radarSafe((item.providers || []).join(' • '))}</p>
        ${
          item.source
            ? `<p><a class="premiere-radar-link" href="${radarSafe(
                item.source
              )}" target="_blank" rel="noopener">${radarSafe(
                item.source
              )}</a></p>`
            : `<p>No source link added yet.</p>`
        }
      </article>
    `
      )
      .join('')}
  `;
}

function buildPremiereRadarApiPage() {
  return `
    <div class="premiere-radar-card">
      <h3>API-Ready Future Version</h3>
      <p>
        The real version of Premiere Radar should connect to outside movie data so you do not have to manually type every upcoming release.
      </p>

      <h3>What the real version should pull automatically</h3>
      <ul>
        <li>Upcoming theatrical release dates</li>
        <li>Streaming premiere dates</li>
        <li>Cast and crew</li>
        <li>Trailers and official images</li>
        <li>Provider availability: Netflix, Hulu, Disney+, Prime Video, theaters, and more</li>
        <li>Source links for verification</li>
      </ul>

      <h3>Grandma-simple explanation</h3>
      <p>
        Your CodePen version is like a sample notebook. A real API version is like a live movie calendar that updates itself.
      </p>
    </div>
  `;
}

function buildPremiereRadarAddForm() {
  return `
    <div class="premiere-radar-card">
      <h3>Add Upcoming Movie</h3>
      <p class="premiere-radar-note">
        This saves the movie inside this browser using localStorage. It is good for testing, but a real website should save this in a database.
      </p>
    </div>

    <div class="premiere-radar-form">
      <label>Movie name</label>
      <input id="radarAddName" placeholder="Example: New Movie Title">

      <label>Release date</label>
      <input id="radarAddReleaseDate" type="date">

      <label>Where will it premiere?</label>
      <select id="radarAddProvider">
        <option value="Movie Theaters">Movie Theaters</option>
        <option value="Netflix">Netflix</option>
        <option value="Hulu">Hulu</option>
        <option value="Disney+">Disney+</option>
        <option value="Prime Video">Prime Video</option>
        <option value="Movie Theaters, Netflix">Movie Theaters + Netflix</option>
        <option value="Movie Theaters, Disney+">Movie Theaters + Disney+</option>
        <option value="Movie Theaters, Prime Video">Movie Theaters + Prime Video</option>
      </select>

      <label>Cast names</label>
      <input id="radarAddCast" placeholder="Actor One, Actor Two, Actor Three">

      <label>Genre</label>
      <input id="radarAddGenre" placeholder="Action • Comedy • Drama">

      <label>Studio / Distributor</label>
      <input id="radarAddStudio" placeholder="Studio or distributor">

      <label>Short summary</label>
      <textarea id="radarAddSummary" placeholder="What is this movie about?"></textarea>

      <label>Source / verification link</label>
      <input id="radarAddSource" placeholder="https://">

      <button onclick="savePremiereRadarManualItem()">Save Movie to Premiere Radar</button>
    </div>
  `;
}

function savePremiereRadarManualItem() {
  const name = $('radarAddName')?.value.trim();
  const releaseDate = $('radarAddReleaseDate')?.value;
  const providerText = $('radarAddProvider')?.value || 'Movie Theaters';
  const castText = $('radarAddCast')?.value || '';
  const genre = $('radarAddGenre')?.value || '';
  const studio = $('radarAddStudio')?.value || '';
  const summary = $('radarAddSummary')?.value || '';
  const source = $('radarAddSource')?.value || '';

  if (!name) {
    alert('Please add a movie name first.');
    return;
  }

  const providers = providerText
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const record = {
    id: 'manual-' + makeSlug(name) + '-' + Date.now(),
    name,
    releaseDate: releaseDate || '',
    status: 'Manually added upcoming record',
    type: 'Movie',
    genre,
    platformType: providers.includes('Movie Theaters')
      ? 'theaters'
      : 'streaming',
    providers,
    cast: castText
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean),
    studio,
    summary,
    source,
  };

  const existing = getManualPremiereRadarItems();
  existing.unshift(record);
  localStorage.setItem(
    'vedb_premiere_radar_manual_items',
    JSON.stringify(existing.slice(0, 100))
  );

  openPremiereRadarPage('all');
}

function getAllPremiereRadarItems() {
  return [...premiereRadarItems, ...getManualPremiereRadarItems()];
}

function getManualPremiereRadarItems() {
  try {
    const raw = localStorage.getItem('vedb_premiere_radar_manual_items');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function sortPremiereItemsByDate(items) {
  return [...items].sort((a, b) => {
    const da = a.releaseDate || '9999-12-31';
    const db = b.releaseDate || '9999-12-31';
    return da.localeCompare(db);
  });
}

function formatPremiereDate(dateText) {
  if (!dateText) return 'Date to be added';

  try {
    const date = new Date(dateText + 'T00:00:00');
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    return dateText;
  }
}

function togglePremiereRadarWatchlist(id) {
  const list = getPremiereRadarWatchlist();

  const updated = list.includes(id)
    ? list.filter((item) => item !== id)
    : [id, ...list];

  localStorage.setItem(
    'vedb_premiere_radar_watchlist',
    JSON.stringify(updated.slice(0, 100))
  );
}

function getPremiereRadarWatchlist() {
  try {
    const raw = localStorage.getItem('vedb_premiere_radar_watchlist');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function premiereRadarSearchCastName(name) {
  const input = $('searchInput');
  if (input) {
    input.value = name;
    runSearch();
    input.focus();
  }
}

function activatePremiereRadarNav() {
  document
    .querySelectorAll('.nav button')
    .forEach((button) => button.classList.remove('active'));

  const button = document.getElementById('premiereRadarNavButton');
  if (button) button.classList.add('active');
}

function radarSafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installPremiereRadarAddon();
function installPremiereRadarSphereMotionFix() {
  if (window.vedbPremiereRadarSphereMotionFixed) return;
  window.vedbPremiereRadarSphereMotionFixed = true;

  installPremiereRadarMotionStyles();

  window.premiereRadarRotY = 0;
  window.premiereRadarRotX = 0.18;
  window.premiereRadarIsDragging = false;
  window.premiereRadarLastPointer = { x: 0, y: 0 };

  if (typeof openPremiereRadarPage === 'function') {
    const originalOpenPremiereRadarPage = openPremiereRadarPage;

    openPremiereRadarPage = function (filter) {
      originalOpenPremiereRadarPage(filter);

      setTimeout(function () {
        preparePremiereRadarSphereMotion();
        updatePremiereRadarSpherePositions();
      }, 50);
    };
  }

  preparePremiereRadarSphereMotion();
  startPremiereRadarAnimationLoop();
}

function installPremiereRadarMotionStyles() {
  if (document.getElementById('vedb-premiere-radar-motion-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-premiere-radar-motion-style';
  style.textContent = `
    .premiere-radar-sphere {
      touch-action: none;
      user-select: none;
    }

    .premiere-radar-node {
      transition:
        border-color .2s ease,
        background .2s ease,
        box-shadow .2s ease,
        opacity .2s ease !important;
    }
  `;

  document.head.appendChild(style);
}

function preparePremiereRadarSphereMotion() {
  const sphere = document.querySelector('.premiere-radar-sphere');
  if (!sphere) return;

  const nodes = sphere.querySelectorAll('.premiere-radar-node');

  nodes.forEach(function (node, index) {
    const service = premiereRadarServices[index];
    if (!service) return;

    node.dataset.theta = service.theta;
    node.dataset.phi = service.phi;
  });

  if (sphere.dataset.motionReady === 'yes') return;
  sphere.dataset.motionReady = 'yes';

  sphere.addEventListener('pointerdown', function (event) {
    if (event.target.closest('.premiere-radar-node')) return;

    window.premiereRadarIsDragging = true;
    window.premiereRadarLastPointer.x = event.clientX;
    window.premiereRadarLastPointer.y = event.clientY;

    sphere.setPointerCapture(event.pointerId);
  });

  sphere.addEventListener('pointermove', function (event) {
    if (!window.premiereRadarIsDragging) return;

    const dx = event.clientX - window.premiereRadarLastPointer.x;
    const dy = event.clientY - window.premiereRadarLastPointer.y;

    window.premiereRadarRotY += dx * 0.005;
    window.premiereRadarRotX -= dy * 0.004;
    window.premiereRadarRotX = Math.max(
      -0.95,
      Math.min(0.95, window.premiereRadarRotX)
    );

    window.premiereRadarLastPointer.x = event.clientX;
    window.premiereRadarLastPointer.y = event.clientY;

    updatePremiereRadarSpherePositions();
  });

  sphere.addEventListener('pointerup', function () {
    window.premiereRadarIsDragging = false;
  });

  sphere.addEventListener('pointercancel', function () {
    window.premiereRadarIsDragging = false;
  });
}

function startPremiereRadarAnimationLoop() {
  if (window.vedbPremiereRadarAnimationRunning) return;
  window.vedbPremiereRadarAnimationRunning = true;

  function animatePremiereRadarSphere() {
    const sphere = document.querySelector('.premiere-radar-sphere');

    if (sphere) {
      preparePremiereRadarSphereMotion();

      if (!window.premiereRadarIsDragging) {
        window.premiereRadarRotY += 0.0032;
      }

      updatePremiereRadarSpherePositions();
    }

    requestAnimationFrame(animatePremiereRadarSphere);
  }

  requestAnimationFrame(animatePremiereRadarSphere);
}

function updatePremiereRadarSpherePositions() {
  const sphere = document.querySelector('.premiere-radar-sphere');
  if (!sphere) return;

  const rect = sphere.getBoundingClientRect();
  const size = rect.width || 500;
  const radius = size * 0.35;
  const center = size / 2;

  const nodes = sphere.querySelectorAll('.premiere-radar-node');

  nodes.forEach(function (node) {
    const theta = Number(node.dataset.theta || 0);
    const phi = Number(node.dataset.phi || 0);

    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.cos(phi);
    const z = Math.sin(phi) * Math.sin(theta);

    const rotated = rotatePremiereRadarPoint(x, y, z);

    const depth = (rotated.z + 1) / 2;
    const scale = 0.72 + depth * 0.3;
    const opacity = 0.58 + depth * 0.42;
    const blur = rotated.z < -0.35 ? 'blur(0.35px)' : 'none';

    const nodeW = node.offsetWidth || 100;
    const nodeH = node.offsetHeight || 62;

    node.style.left = `${center + rotated.x * radius - nodeW / 2}px`;
    node.style.top = `${center + rotated.y * radius - nodeH / 2}px`;
    node.style.transform = `scale(${scale})`;
    node.style.opacity = opacity;
    node.style.zIndex = Math.round(100 + rotated.z * 100);
    node.style.filter = blur;
  });
}

function rotatePremiereRadarPoint(x, y, z) {
  const cosY = Math.cos(window.premiereRadarRotY);
  const sinY = Math.sin(window.premiereRadarRotY);

  const x1 = x * cosY + z * sinY;
  const z1 = -x * sinY + z * cosY;

  const cosX = Math.cos(window.premiereRadarRotX);
  const sinX = Math.sin(window.premiereRadarRotX);

  const y1 = y * cosX - z1 * sinX;
  const z2 = y * sinX + z1 * cosX;

  return {
    x: x1,
    y: y1,
    z: z2,
  };
}

window.addEventListener('resize', updatePremiereRadarSpherePositions);

installPremiereRadarSphereMotionFix();
function installPremiereRadarMatchActorSphereFix() {
  installPremiereRadarActorSphereColorMatch();
  installPremiereRadarActorSphereSpeedMatch();
  updatePremiereRadarSpherePositions?.();
}

function installPremiereRadarActorSphereColorMatch() {
  let oldStyle = document.getElementById(
    'vedb-premiere-radar-actor-match-style'
  );
  if (oldStyle) oldStyle.remove();

  const style = document.createElement('style');
  style.id = 'vedb-premiere-radar-actor-match-style';

  style.textContent = `
    .premiere-radar-sphere {
      background:
        radial-gradient(circle at 50% 50%, rgba(11, 45, 85, .78), rgba(0,0,0,.2) 58%, rgba(0, 18, 39, .85) 100%),
        repeating-radial-gradient(circle, rgba(21, 138, 255, .16) 0 2px, transparent 2px 58px) !important;
      border: 2px solid rgba(0, 162, 255, .75) !important;
      box-shadow:
        0 0 38px rgba(0, 132, 255, .85),
        inset 0 0 90px rgba(0, 132, 255, .28) !important;
    }

    .premiere-radar-orbit {
      border: 1px solid rgba(0, 170, 255, .32) !important;
    }

    .premiere-radar-orbit.two,
    .premiere-radar-orbit.three {
      border-color: rgba(0, 170, 255, .32) !important;
    }

    .premiere-radar-core {
      width: 62px !important;
      height: 62px !important;
      left: calc(50% - 31px) !important;
      top: calc(50% - 31px) !important;
      color: var(--gold) !important;
      background: radial-gradient(circle, rgba(247, 180, 0, .75), transparent 65%) !important;
      box-shadow: 0 0 38px rgba(247, 180, 0, .7) !important;
      font-size: 9px !important;
      line-height: 1.05 !important;
    }

    .premiere-radar-node {
      border: 1px solid rgba(0, 150, 255, .72) !important;
      background: rgba(2, 20, 42, .9) !important;
      box-shadow:
        inset 0 0 24px rgba(0, 132, 255, .14),
        0 0 8px rgba(0, 132, 255, .3) !important;
    }

    .premiere-radar-node:hover,
    .premiere-radar-node.active {
      border-color: var(--gold) !important;
      background: rgba(55, 39, 0, .94) !important;
      box-shadow:
        0 0 30px rgba(247, 180, 0, .95),
        inset 0 0 28px rgba(247, 180, 0, .22) !important;
    }
  `;

  document.head.appendChild(style);
}

function installPremiereRadarActorSphereSpeedMatch() {
  if (window.vedbPremiereRadarSpeedMatched) return;
  window.vedbPremiereRadarSpeedMatched = true;

  /*
    Actor Sphere speed = 0.0024
    Earlier Premiere Radar speed = 0.0032
    This correction subtracts 0.0008 per frame,
    making Premiere Radar match the Actor Sphere speed.
  */

  function correctPremiereRadarSpeed() {
    const sphere = document.querySelector('.premiere-radar-sphere');

    if (
      sphere &&
      typeof window.premiereRadarRotY === 'number' &&
      !window.premiereRadarIsDragging
    ) {
      window.premiereRadarRotY -= 0.0008;
      updatePremiereRadarSpherePositions?.();
    }

    requestAnimationFrame(correctPremiereRadarSpeed);
  }

  requestAnimationFrame(correctPremiereRadarSpeed);
}

installPremiereRadarMatchActorSphereFix();
function installTrailerHubAddon() {
  if (window.vedbTrailerHubInstalled) return;
  window.vedbTrailerHubInstalled = true;

  installTrailerHubStyles();
  addTrailerHubNavButton();
  wrapLoadEntityForTrailerHub();
}

function installTrailerHubStyles() {
  if (document.getElementById('vedb-trailer-hub-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-trailer-hub-style';
  style.textContent = `
    .trailer-hub-search-box {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 18px;
      margin-bottom: 18px;
    }

    .trailer-hub-search-box input {
      width: 100%;
      height: 58px;
      border: 2px solid rgba(255,255,255,.24);
      background: rgba(8, 18, 36, .92);
      border-radius: 18px;
      color: white;
      outline: none;
      padding: 0 18px;
      font-size: 20px;
      margin-top: 10px;
    }

    .trailer-hub-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0 16px;
    }

    .trailer-hub-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin-top: 14px;
    }

    .trailer-hub-card {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(6, 25, 49, .84);
      border-radius: 16px;
      padding: 16px;
    }

    .trailer-hub-card h3 {
      color: var(--gold);
      margin-bottom: 8px;
    }

    .trailer-hub-card p {
      color: #e4f0ff;
      line-height: 1.45;
      margin: 8px 0;
    }

    .trailer-hub-card button,
    .trailer-hub-card a,
    .trailer-hub-form button {
      display: inline-block;
      background: rgba(9, 57, 132, .72);
      border: 1px solid var(--blue);
      color: white;
      padding: 10px 15px;
      border-radius: 9px;
      font-weight: 900;
      font-size: 14px;
      margin: 6px 6px 0 0;
      text-decoration: none;
      cursor: pointer;
    }

    .trailer-hub-card a.gold-link {
      border-color: var(--gold);
      background: rgba(247, 180, 0, .13);
      color: var(--gold);
    }

    .trailer-video-frame {
      width: 100%;
      aspect-ratio: 16 / 9;
      border: 1px solid rgba(247, 180, 0, .35);
      border-radius: 14px;
      overflow: hidden;
      margin: 12px 0;
      background: #000;
    }

    .trailer-video-frame iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }

    .trailer-hub-form {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 16px;
      margin-top: 18px;
    }

    .trailer-hub-form label {
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }

    .trailer-hub-form input,
    .trailer-hub-form select {
      width: 100%;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(4, 14, 28, .9);
      color: white;
      border-radius: 12px;
      padding: 11px;
      margin: 6px 0 12px;
      font-size: 15px;
    }

    .trailer-action-button {
      background: rgba(247, 180, 0, .18) !important;
      border: 1px solid rgba(247, 180, 0, .85) !important;
      color: var(--gold) !important;
    }

    @media (max-width: 900px) {
      .trailer-hub-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  document.head.appendChild(style);
}

function addTrailerHubNavButton() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (document.getElementById('trailerHubNavButton')) return;

  const button = document.createElement('button');
  button.id = 'trailerHubNavButton';
  button.textContent = 'Trailers';
  button.onclick = function () {
    openTrailerHubPage('');
  };

  nav.appendChild(button);
}

function wrapLoadEntityForTrailerHub() {
  if (window.vedbOriginalLoadEntityForTrailerHub) return;

  window.vedbOriginalLoadEntityForTrailerHub = loadEntity;

  loadEntity = function (entity) {
    window.vedbOriginalLoadEntityForTrailerHub(entity);
    addTrailerButtonToTitlePage();
  };
}

function addTrailerButtonToTitlePage() {
  const actions = document.querySelector('.actions');
  if (!actions || !currentEntity) return;

  document
    .querySelectorAll('.trailer-action-button')
    .forEach((button) => button.remove());

  if (currentEntity.mode === 'title') {
    const button = document.createElement('button');
    button.className = 'trailer-action-button';
    button.textContent = 'Trailers';
    button.onclick = function () {
      openTrailerHubPage(currentEntity.name);
    };

    actions.appendChild(button);
  }
}

function openTrailerHubPage(startMovieName) {
  hideSearch();

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  const query = startMovieName || '';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB TRAILER HUB</div>
          <h2>Movie Trailer Hub</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        <div class="trailer-hub-search-box">
          <h3>Look Up a Movie Trailer</h3>
          <p class="trailer-hub-note">
            Search for a movie in your VEDB catalog. Trailer Hub will show trailer searches, saved trailer embeds, cast videos, teaser searches, and behind-the-scenes video searches.
          </p>
          <input
            id="trailerHubSearchInput"
            value="${trailerSafeText(query)}"
            placeholder="Type a movie title, actor, franchise, or keyword..."
            oninput="renderTrailerHubResults(this.value)"
          >
        </div>

        <div id="trailerHubResults">
          ${buildTrailerHubResults(query)}
        </div>

        ${buildTrailerAddForm(query)}
      </div>
    </div>
  `;

  activateTrailerHubNav();
  window.location.hash = '#/trailer-hub';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTrailerHubResults(query) {
  const box = document.getElementById('trailerHubResults');
  if (!box) return;

  box.innerHTML = buildTrailerHubResults(query || '');
}

function buildTrailerHubResults(query) {
  const cleanQuery = String(query || '')
    .trim()
    .toLowerCase();

  let matches = titles.filter((title) => {
    if (!cleanQuery) return true;

    const text = [
      title.name,
      title.job,
      title.summary,
      title.overview,
      (title.cast || []).join(' '),
      (title.characters || []).join(' '),
      (title.crew || []).join(' '),
      (title.similar || []).join(' '),
      title.facts?.Franchise || '',
      title.facts?.Genre || '',
    ]
      .join(' ')
      .toLowerCase();

    return text.includes(cleanQuery);
  });

  matches = matches.slice(0, 16);

  if (matches.length === 0) {
    return `
      <div class="trailer-hub-card">
        <h3>No movie found yet</h3>
        <p>
          I could not find that movie in your current VEDB title list. You can still add a trailer manually below.
        </p>
      </div>
    `;
  }

  return `
    <h3 style="color: var(--gold);">Trailer Results</h3>
    <p class="trailer-hub-note">
      These results stay connected to movies already inside your VEDB title database.
    </p>

    <div class="trailer-hub-grid">
      ${matches.map((title) => buildTrailerMovieCard(title)).join('')}
    </div>
  `;
}

function buildTrailerMovieCard(title) {
  const savedTrailers = getSavedTrailersForMovie(title.name);
  const defaultTrailerSearches = getDefaultTrailerSearches(title);

  return `
    <article class="trailer-hub-card">
      <h3>${trailerSafeText(title.name)}</h3>
      <p><b>Movie:</b> ${trailerSafeText(title.job || 'Movie')}</p>
      <p><b>Cast:</b> ${trailerSafeText(
        (title.cast || []).slice(0, 5).join(' • ')
      )}</p>
      <p>${trailerSafeText(title.summary || title.overview || '')}</p>

      ${
        savedTrailers.length > 0
          ? savedTrailers
              .map((trailer) => buildSavedTrailerEmbed(trailer))
              .join('')
          : `<p class="trailer-hub-note">No embedded trailer saved yet. Use the official trailer search buttons below, or add a YouTube trailer link with the form.</p>`
      }

      <p><b>Trailer Searches:</b></p>
      ${defaultTrailerSearches
        .map(
          (search) => `
        <a
          class="${search.type === 'official' ? 'gold-link' : ''}"
          href="${search.url}"
          target="_blank"
          rel="noopener"
        >
          ${trailerSafeText(search.label)}
        </a>
      `
        )
        .join('')}

      <br>

      <button onclick="loadEntityByName('title', '${escapeForClick(
        title.name
      )}')">
        Open Movie Sphere →
      </button>

      <button onclick="prefillTrailerForm('${escapeForClick(title.name)}')">
        Add Trailer Link →
      </button>
    </article>
  `;
}

function getDefaultTrailerSearches(title) {
  const movieName = title.name;
  const castNames = (title.cast || []).slice(0, 2).join(' ');

  return [
    {
      type: 'official',
      label: 'Official Trailer',
      url: makeYouTubeSearchUrl(movieName + ' official trailer'),
    },
    {
      type: 'teaser',
      label: 'Teaser Trailer',
      url: makeYouTubeSearchUrl(movieName + ' teaser trailer'),
    },
    {
      type: 'behind',
      label: 'Behind the Scenes',
      url: makeYouTubeSearchUrl(movieName + ' behind the scenes'),
    },
    {
      type: 'cast',
      label: 'Cast Interviews',
      url: makeYouTubeSearchUrl(movieName + ' cast interview ' + castNames),
    },
  ];
}

function buildSavedTrailerEmbed(trailer) {
  const embedUrl = convertToYouTubeEmbedUrl(trailer.url);

  if (!embedUrl) {
    return `
      <p>
        <b>${trailerSafeText(trailer.label || 'Saved Trailer')}:</b>
        <a class="gold-link" href="${trailerSafeText(
          trailer.url
        )}" target="_blank" rel="noopener">
          Open Trailer
        </a>
      </p>
    `;
  }

  return `
    <div>
      <p><b>${trailerSafeText(trailer.label || 'Saved Trailer')}</b></p>
      <div class="trailer-video-frame">
        <iframe
          src="${trailerSafeText(embedUrl)}"
          title="${trailerSafeText(trailer.label || 'Movie trailer')}"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;
}

function buildTrailerAddForm(movieName) {
  return `
    <div class="trailer-hub-form">
      <h3>Add a Trailer Link</h3>
      <p class="trailer-hub-note">
        Paste a YouTube trailer link here. VEDB will save it in this browser and show it inside Trailer Hub.
      </p>

      <label>Movie title</label>
      <input id="trailerAddMovieName" value="${trailerSafeText(
        movieName || ''
      )}" placeholder="Example: Dune">

      <label>Trailer label</label>
      <select id="trailerAddLabel">
        <option value="Official Trailer">Official Trailer</option>
        <option value="Teaser Trailer">Teaser Trailer</option>
        <option value="Behind the Scenes">Behind the Scenes</option>
        <option value="Cast Interview">Cast Interview</option>
        <option value="Trailer 2">Trailer 2</option>
      </select>

      <label>YouTube trailer link</label>
      <input id="trailerAddUrl" placeholder="Paste YouTube link here">

      <button onclick="saveTrailerHubLink()">Save Trailer</button>
    </div>
  `;
}

function prefillTrailerForm(movieName) {
  const movieInput = document.getElementById('trailerAddMovieName');
  const urlInput = document.getElementById('trailerAddUrl');

  if (movieInput) movieInput.value = movieName;
  if (urlInput) urlInput.focus();

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

function saveTrailerHubLink() {
  const movieName = document
    .getElementById('trailerAddMovieName')
    ?.value.trim();
  const label =
    document.getElementById('trailerAddLabel')?.value || 'Official Trailer';
  const url = document.getElementById('trailerAddUrl')?.value.trim();

  if (!movieName) {
    alert('Please type the movie title first.');
    return;
  }

  if (!url) {
    alert('Please paste a trailer link first.');
    return;
  }

  const all = getSavedTrailerLinks();

  all.unshift({
    id: 'trailer-' + makeSlug(movieName) + '-' + Date.now(),
    movieName,
    label,
    url,
    savedAt: Date.now(),
  });

  localStorage.setItem('vedb_trailer_links', JSON.stringify(all.slice(0, 200)));

  openTrailerHubPage(movieName);
}

function getSavedTrailerLinks() {
  try {
    const raw = localStorage.getItem('vedb_trailer_links');
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function getSavedTrailersForMovie(movieName) {
  const clean = normalizeTrailerMovieName(movieName);

  return getSavedTrailerLinks().filter(
    (trailer) => normalizeTrailerMovieName(trailer.movieName) === clean
  );
}

function normalizeTrailerMovieName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim();
}

function makeYouTubeSearchUrl(query) {
  return (
    'https://www.youtube.com/results?search_query=' + encodeURIComponent(query)
  );
}

function convertToYouTubeEmbedUrl(url) {
  if (!url) return '';

  try {
    const text = String(url).trim();

    if (text.includes('youtube.com/embed/')) {
      return text;
    }

    if (text.includes('youtube.com/watch')) {
      const parsed = new URL(text);
      const videoId = parsed.searchParams.get('v');
      return videoId ? 'https://www.youtube.com/embed/' + videoId : '';
    }

    if (text.includes('youtu.be/')) {
      const parsed = new URL(text);
      const videoId = parsed.pathname.replace('/', '').split('?')[0];
      return videoId ? 'https://www.youtube.com/embed/' + videoId : '';
    }

    return '';
  } catch (error) {
    return '';
  }
}

function activateTrailerHubNav() {
  document
    .querySelectorAll('.nav button')
    .forEach((button) => button.classList.remove('active'));

  const button = document.getElementById('trailerHubNavButton');
  if (button) button.classList.add('active');
}

function trailerSafeText(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installTrailerHubAddon();
function installWhereToWatchAddon() {
  if (window.vedbWhereToWatchInstalled) return;
  window.vedbWhereToWatchInstalled = true;

  installWhereToWatchStyles();
  wrapLoadEntityForWhereToWatch();

  if (typeof buildTrailerMovieCard === 'function') {
    buildTrailerMovieCard = function (title) {
      const savedTrailers = getSavedTrailersForMovie(title.name);
      const defaultTrailerSearches = getDefaultTrailerSearches(title);

      return `
        <article class="trailer-hub-card">
          <h3>${trailerSafeText(title.name)}</h3>
          <p><b>Movie:</b> ${trailerSafeText(title.job || 'Movie')}</p>
          <p><b>Cast:</b> ${trailerSafeText(
            (title.cast || []).slice(0, 5).join(' • ')
          )}</p>
          <p>${trailerSafeText(title.summary || title.overview || '')}</p>

          ${buildWhereToWatchBox(title)}

          ${
            savedTrailers.length > 0
              ? savedTrailers
                  .map((trailer) => buildSavedTrailerEmbed(trailer))
                  .join('')
              : `<p class="trailer-hub-note">No embedded trailer saved yet. Use the official trailer search buttons below, or add a YouTube trailer link with the form.</p>`
          }

          <p><b>Trailer Searches:</b></p>
          ${defaultTrailerSearches
            .map(
              (search) => `
            <a
              class="${search.type === 'official' ? 'gold-link' : ''}"
              href="${search.url}"
              target="_blank"
              rel="noopener"
            >
              ${trailerSafeText(search.label)}
            </a>
          `
            )
            .join('')}

          <br>

          <button onclick="loadEntityByName('title', '${escapeForClick(
            title.name
          )}')">
            Open Movie Sphere →
          </button>

          <button onclick="openWhereToWatchPage('${escapeForClick(
            title.name
          )}')">
            Where to Watch →
          </button>

          <button onclick="prefillTrailerForm('${escapeForClick(title.name)}')">
            Add Trailer Link →
          </button>
        </article>
      `;
    };
  }
}

function installWhereToWatchStyles() {
  if (document.getElementById('vedb-where-to-watch-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-where-to-watch-style';
  style.textContent = `
    .where-watch-box {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 16px;
      padding: 14px;
      margin: 14px 0;
    }

    .where-watch-box h4 {
      color: var(--gold);
      font-size: 18px;
      margin-bottom: 8px;
    }

    .where-watch-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }

    .where-watch-link {
      display: inline-block;
      background: rgba(9, 57, 132, .72);
      border: 1px solid var(--blue);
      color: white;
      padding: 9px 12px;
      border-radius: 999px;
      font-weight: 900;
      font-size: 13px;
      text-decoration: none;
    }

    .where-watch-link.gold {
      border-color: var(--gold);
      background: rgba(247, 180, 0, .14);
      color: var(--gold);
    }

    .where-watch-note {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
      margin-top: 8px;
    }

    .where-watch-action-button {
      background: rgba(247, 180, 0, .18) !important;
      border: 1px solid rgba(247, 180, 0, .85) !important;
      color: var(--gold) !important;
    }
  `;

  document.head.appendChild(style);
}

function wrapLoadEntityForWhereToWatch() {
  if (window.vedbOriginalLoadEntityForWhereToWatch) return;

  window.vedbOriginalLoadEntityForWhereToWatch = loadEntity;

  loadEntity = function (entity) {
    window.vedbOriginalLoadEntityForWhereToWatch(entity);
    addWhereToWatchButtonToTitlePage();
  };
}

function addWhereToWatchButtonToTitlePage() {
  const actions = document.querySelector('.actions');
  if (!actions || !currentEntity) return;

  document
    .querySelectorAll('.where-watch-action-button')
    .forEach((button) => button.remove());

  if (currentEntity.mode === 'title') {
    const button = document.createElement('button');
    button.className = 'where-watch-action-button';
    button.textContent = 'Where to Watch';
    button.onclick = function () {
      openWhereToWatchPage(currentEntity.name);
    };

    actions.appendChild(button);
  }
}

function buildWhereToWatchBox(title) {
  const links = getWhereToWatchLinks(title);

  return `
    <div class="where-watch-box">
      <h4>Where to Watch / Get This Movie</h4>

      <p class="where-watch-note">
        These buttons help users check theaters, streaming, rental, and purchase options. For a real live website, VEDB should connect to a watch-provider API so availability updates automatically.
      </p>

      <div class="where-watch-links">
        ${links
          .map(
            (link) => `
          <a
            class="where-watch-link ${link.featured ? 'gold' : ''}"
            href="${whereWatchSafe(link.url)}"
            target="_blank"
            rel="noopener"
          >
            ${whereWatchSafe(link.label)}
          </a>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function openWhereToWatchPage(movieName) {
  hideSearch();

  const title = titles.find((item) => item.name === movieName);

  if (!title) {
    $('mainPage').style.display = 'none';
    $('sectionPage').style.display = 'block';

    $('sectionPage').innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB WHERE TO WATCH</div>
            <h2>Movie Not Found</h2>
          </div>
          <button class="back-button" onclick="backToSphere()">← Back</button>
        </div>

        <div class="section-page-content">
          <p>I could not find that title in your VEDB title list yet.</p>
        </div>
      </div>
    `;

    return;
  }

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB WHERE TO WATCH</div>
          <h2>${whereWatchSafe(title.name)}</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        <p>
          Use this page to help users find where they can watch, rent, buy, or check theatrical availability for this movie.
        </p>

        ${buildWhereToWatchBox(title)}

        <h3>Movie Details</h3>
        <p><b>Movie:</b> ${whereWatchSafe(title.name)}</p>
        <p><b>Type:</b> ${whereWatchSafe(title.job || 'Movie')}</p>
        <p><b>Cast:</b> ${whereWatchSafe((title.cast || []).join(' • '))}</p>
        <p><b>Summary:</b> ${whereWatchSafe(
          title.summary || title.overview || ''
        )}</p>

        <button class="back-button" onclick="openTrailerHubPage('${escapeForClick(
          title.name
        )}')">
          Open Trailer Hub →
        </button>
      </div>
    </div>
  `;

  window.location.hash = '#/where-to-watch/' + makeSlug(title.name);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getWhereToWatchLinks(title) {
  const movieName = title.name;
  const encoded = encodeURIComponent(movieName);

  const providerHints = getProviderHintsForTitle(title);
  const links = [];

  links.push({
    label: 'Check Movie Theaters',
    url:
      'https://www.google.com/search?q=' + encoded + '+movie+showtimes+near+me',
    featured: true,
  });

  providerHints.forEach((provider) => {
    if (provider === 'Netflix') {
      links.push({
        label: 'Check Netflix',
        url: 'https://www.netflix.com/search?q=' + encoded,
        featured: true,
      });
    }

    if (provider === 'Hulu') {
      links.push({
        label: 'Check Hulu',
        url: 'https://www.hulu.com/search?q=' + encoded,
        featured: true,
      });
    }

    if (provider === 'Disney+') {
      links.push({
        label: 'Check Disney+',
        url: 'https://www.disneyplus.com/search?q=' + encoded,
        featured: true,
      });
    }

    if (provider === 'Prime Video') {
      links.push({
        label: 'Check Prime Video',
        url:
          'https://www.primevideo.com/search/ref=atv_nb_sr?phrase=' + encoded,
        featured: true,
      });
    }
  });

  links.push({
    label: 'Rent / Buy on Amazon',
    url: 'https://www.amazon.com/s?k=' + encoded + '+movie',
    featured: false,
  });

  links.push({
    label: 'Rent / Buy on Apple TV',
    url: 'https://tv.apple.com/search?term=' + encoded,
    featured: false,
  });

  links.push({
    label: 'Rent / Buy on YouTube',
    url:
      'https://www.youtube.com/results?search_query=' + encoded + '+full+movie',
    featured: false,
  });

  links.push({
    label: 'Search Google',
    url: 'https://www.google.com/search?q=where+to+watch+' + encoded,
    featured: false,
  });

  return removeDuplicateWhereWatchLinks(links);
}

function getProviderHintsForTitle(title) {
  const hints = new Set();

  if (
    (title.whereWatch || []).some((text) =>
      String(text).toLowerCase().includes('netflix')
    )
  )
    hints.add('Netflix');
  if (
    (title.whereWatch || []).some((text) =>
      String(text).toLowerCase().includes('hulu')
    )
  )
    hints.add('Hulu');
  if (
    (title.whereWatch || []).some((text) =>
      String(text).toLowerCase().includes('disney')
    )
  )
    hints.add('Disney+');
  if (
    (title.whereWatch || []).some((text) =>
      String(text).toLowerCase().includes('prime')
    )
  )
    hints.add('Prime Video');
  if (
    (title.whereWatch || []).some((text) =>
      String(text).toLowerCase().includes('amazon')
    )
  )
    hints.add('Prime Video');

  const franchise = String(title.facts?.Franchise || '').toLowerCase();
  const titleName = String(title.name || '').toLowerCase();

  if (
    franchise.includes('marvel') ||
    franchise.includes('dune') ||
    titleName.includes('dune')
  )
    hints.add('Disney+');
  if (franchise.includes('star wars')) hints.add('Disney+');
  if (titleName.includes('euphoria')) hints.add('Hulu');
  if (titleName.includes('matrix')) hints.add('Prime Video');

  hints.add('Netflix');
  hints.add('Hulu');
  hints.add('Disney+');
  hints.add('Prime Video');

  return Array.from(hints);
}

function removeDuplicateWhereWatchLinks(links) {
  const seen = new Set();

  return links.filter((link) => {
    const key = link.label + '::' + link.url;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function whereWatchSafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installWhereToWatchAddon();
function installStreamSenseAddon() {
  if (window.vedbStreamSenseInstalled) return;
  window.vedbStreamSenseInstalled = true;

  installStreamSenseStyles();
  addStreamSenseNavButton();
  wrapLoadEntityForStreamSense();
}

function installStreamSenseStyles() {
  if (document.getElementById('vedb-streamsense-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-streamsense-style';
  style.textContent = `
    .streamsense-search-box {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 18px;
      margin-bottom: 18px;
    }

    .streamsense-search-box input {
      width: 100%;
      height: 58px;
      border: 2px solid rgba(255,255,255,.24);
      background: rgba(8, 18, 36, .92);
      border-radius: 18px;
      color: white;
      outline: none;
      padding: 0 18px;
      font-size: 20px;
      margin-top: 10px;
    }

    .streamsense-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0 16px;
    }

    .streamsense-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin-top: 14px;
    }

    .streamsense-card {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(6, 25, 49, .84);
      border-radius: 16px;
      padding: 16px;
    }

    .streamsense-card h3 {
      color: var(--gold);
      margin-bottom: 8px;
    }

    .streamsense-card p,
    .streamsense-card li {
      color: #e4f0ff;
      line-height: 1.45;
      margin: 7px 0;
    }

    .streamsense-card ul {
      margin-left: 20px;
    }

    .streamsense-pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 10px 0;
    }

    .streamsense-pill {
      border: 1px solid rgba(247, 180, 0, .42);
      color: var(--gold);
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 900;
    }

    .streamsense-card button,
    .streamsense-action-button {
      background: rgba(247, 180, 0, .18) !important;
      border: 1px solid rgba(247, 180, 0, .85) !important;
      color: var(--gold) !important;
      padding: 10px 15px;
      border-radius: 9px;
      font-weight: 900;
      font-size: 14px;
      margin: 6px 6px 0 0;
      cursor: pointer;
    }

    .behind-screen-level {
      border-left: 4px solid var(--blue);
      background: rgba(11, 132, 255, .08);
      border-radius: 14px;
      padding: 14px 16px;
      margin: 12px 0;
    }

    .behind-screen-level h3 {
      color: var(--gold);
      margin-bottom: 8px;
    }

    .behind-screen-rank {
      display: inline-block;
      border: 1px solid rgba(247, 180, 0, .55);
      color: var(--gold);
      border-radius: 999px;
      padding: 3px 9px;
      font-size: 12px;
      font-weight: 900;
      margin-bottom: 8px;
    }

    .behind-screen-warning {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 16px;
      margin-bottom: 18px;
    }

    @media (max-width: 900px) {
      .streamsense-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  document.head.appendChild(style);
}

function addStreamSenseNavButton() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (document.getElementById('streamSenseNavButton')) return;

  const button = document.createElement('button');
  button.id = 'streamSenseNavButton';
  button.textContent = 'StreamSense';
  button.onclick = function () {
    openStreamSensePage('');
  };

  nav.appendChild(button);
}

function wrapLoadEntityForStreamSense() {
  if (window.vedbOriginalLoadEntityForStreamSense) return;

  window.vedbOriginalLoadEntityForStreamSense = loadEntity;

  loadEntity = function (entity) {
    window.vedbOriginalLoadEntityForStreamSense(entity);
    addStreamSenseButtonsToPage();
  };
}

function addStreamSenseButtonsToPage() {
  const actions = document.querySelector('.actions');
  if (!actions || !currentEntity) return;

  document
    .querySelectorAll('.streamsense-action-button')
    .forEach((button) => button.remove());

  if (currentEntity.mode === 'actor') {
    const button = document.createElement('button');
    button.className = 'streamsense-action-button';
    button.textContent = 'StreamSense Connections';
    button.onclick = function () {
      openStreamSensePage(currentEntity.name);
    };
    actions.appendChild(button);
  }

  if (currentEntity.mode === 'title') {
    const streamButton = document.createElement('button');
    streamButton.className = 'streamsense-action-button';
    streamButton.textContent = 'StreamSense Cast Links';
    streamButton.onclick = function () {
      openStreamSensePage(currentEntity.name);
    };
    actions.appendChild(streamButton);

    const behindButton = document.createElement('button');
    behindButton.className = 'streamsense-action-button';
    behindButton.textContent = 'Behind the Screen';
    behindButton.onclick = function () {
      openBehindTheScreenPage(currentEntity.name);
    };
    actions.appendChild(behindButton);
  }
}

function openStreamSensePage(startQuery) {
  hideSearch();

  const query = startQuery || '';

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VISIONARY STREAMSENSE SEARCH</div>
          <h2>StreamSense Connections</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        <div class="streamsense-search-box">
          <h3>Search Actor, Movie, or Franchise Connections</h3>
          <p class="streamsense-note">
            StreamSense shows which actors worked together, what movie connected them, and what other projects they also share.
          </p>

          <input
            id="streamSenseSearchInput"
            value="${streamSenseSafe(query)}"
            placeholder="Example: Denzel Washington, Tom Cruise, Iron Man, Dune..."
            oninput="renderStreamSenseResults(this.value)"
          >
        </div>

        <div id="streamSenseResults">
          ${buildStreamSenseResults(query)}
        </div>
      </div>
    </div>
  `;

  activateStreamSenseNav();
  window.location.hash = '#/streamsense';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderStreamSenseResults(query) {
  const box = document.getElementById('streamSenseResults');
  if (!box) return;

  box.innerHTML = buildStreamSenseResults(query || '');
}

function buildStreamSenseResults(query) {
  const cleanQuery = String(query || '')
    .trim()
    .toLowerCase();

  if (!cleanQuery) {
    return buildStreamSenseHome();
  }

  const matchedActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(cleanQuery)
  );

  const matchedTitles = titles.filter((title) =>
    [
      title.name,
      title.summary,
      title.overview,
      title.job,
      (title.cast || []).join(' '),
      (title.characters || []).join(' '),
      (title.crew || []).join(' '),
      title.facts?.Franchise || '',
    ]
      .join(' ')
      .toLowerCase()
      .includes(cleanQuery)
  );

  let html = '';

  if (matchedActors.length > 0) {
    html += `
      <h3 style="color: var(--gold);">Actor Connection Results</h3>
      <div class="streamsense-grid">
        ${matchedActors
          .map((actor) => buildActorStreamSenseCard(actor))
          .join('')}
      </div>
    `;
  }

  if (matchedTitles.length > 0) {
    html += `
      <h3 style="color: var(--gold); margin-top: 22px;">Movie Cast Connection Results</h3>
      <div class="streamsense-grid">
        ${matchedTitles
          .map((title) => buildTitleStreamSenseCard(title))
          .join('')}
      </div>
    `;
  }

  if (!html) {
    html = `
      <div class="streamsense-card">
        <h3>No StreamSense match yet</h3>
        <p>
          I could not find that name in your current VEDB actor/title data.
          Try searching an actor or movie already in your site.
        </p>
      </div>
    `;
  }

  return html;
}

function buildStreamSenseHome() {
  const topActors = [...actors]
    .sort((a, b) => (b.buzz || 0) - (a.buzz || 0))
    .slice(0, 6);
  const topTitles = [...titles]
    .sort((a, b) => (b.buzz || 0) - (a.buzz || 0))
    .slice(0, 6);

  return `
    <div class="streamsense-card">
      <h3>What StreamSense Does</h3>
      <p>
        StreamSense connects actors through shared movies. If two actors were in the same film,
        it can show other titles they also appeared in together.
      </p>
      <p>
        Example: search an actor to see co-stars. Search a movie to see which cast members have shared projects.
      </p>
    </div>

    <h3 style="color: var(--gold); margin-top: 22px;">Try Actors</h3>
    <div class="streamsense-grid">
      ${topActors
        .map(
          (actor) => `
        <article class="streamsense-card">
          <h3>${streamSenseSafe(actor.name)}</h3>
          <p>${streamSenseSafe(actor.summary)}</p>
          <button onclick="openStreamSensePage('${escapeForClick(
            actor.name
          )}')">Analyze Actor Connections →</button>
        </article>
      `
        )
        .join('')}
    </div>

    <h3 style="color: var(--gold); margin-top: 22px;">Try Movies</h3>
    <div class="streamsense-grid">
      ${topTitles
        .map(
          (title) => `
        <article class="streamsense-card">
          <h3>${streamSenseSafe(title.name)}</h3>
          <p>${streamSenseSafe(title.summary)}</p>
          <button onclick="openStreamSensePage('${escapeForClick(
            title.name
          )}')">Analyze Movie Cast →</button>
          <button onclick="openBehindTheScreenPage('${escapeForClick(
            title.name
          )}')">Behind the Screen →</button>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function buildActorStreamSenseCard(actor) {
  const connections = getActorCoStarConnections(actor.name);

  if (connections.length === 0) {
    return `
      <article class="streamsense-card">
        <h3>${streamSenseSafe(actor.name)}</h3>
        <p>No co-star connections have been found yet in your current VEDB title data.</p>
        <button onclick="loadEntityByName('actor', '${escapeForClick(
          actor.name
        )}')">Open Actor Sphere →</button>
      </article>
    `;
  }

  return `
    <article class="streamsense-card">
      <h3>${streamSenseSafe(actor.name)}</h3>
      <p>
        These are actors connected to ${streamSenseSafe(
          actor.name
        )} through shared titles in your VEDB database.
      </p>

      <ul>
        ${connections
          .slice(0, 10)
          .map(
            (connection) => `
          <li>
            <b>${streamSenseSafe(connection.coStar)}</b>
            <br>
            Shared project${connection.sharedTitles.length === 1 ? '' : 's'}:
            ${connection.sharedTitles
              .map((titleName) => streamSenseSafe(titleName))
              .join(' • ')}
          </li>
        `
          )
          .join('')}
      </ul>

      <button onclick="loadEntityByName('actor', '${escapeForClick(
        actor.name
      )}')">Open Actor Sphere →</button>
    </article>
  `;
}

function buildTitleStreamSenseCard(title) {
  const pairConnections = getTitleCastPairConnections(title);

  return `
    <article class="streamsense-card">
      <h3>${streamSenseSafe(title.name)}</h3>
      <p>${streamSenseSafe(title.summary || title.overview || '')}</p>

      <div class="streamsense-pill-row">
        <span class="streamsense-pill">${streamSenseSafe(
          title.job || 'Movie'
        )}</span>
        <span class="streamsense-pill">${streamSenseSafe(
          (title.cast || []).length + ' cast names loaded'
        )}</span>
      </div>

      <h3>Cast Pair Connections</h3>

      ${
        pairConnections.length === 0
          ? `<p>No repeated actor-pair projects have been found yet in your current VEDB title data.</p>`
          : `<ul>
              ${pairConnections
                .slice(0, 12)
                .map(
                  (pair) => `
                <li>
                  <b>${streamSenseSafe(pair.actorA)}</b> + <b>${streamSenseSafe(
                    pair.actorB
                  )}</b>
                  <br>
                  Also connected through:
                  ${pair.sharedTitles
                    .map((titleName) => streamSenseSafe(titleName))
                    .join(' • ')}
                </li>
              `
                )
                .join('')}
            </ul>`
      }

      <button onclick="loadEntityByName('title', '${escapeForClick(
        title.name
      )}')">Open Movie Sphere →</button>
      <button onclick="openBehindTheScreenPage('${escapeForClick(
        title.name
      )}')">Behind the Screen →</button>
    </article>
  `;
}

function getActorCoStarConnections(actorName) {
  const relatedTitles = titles.filter((title) =>
    (title.cast || []).includes(actorName)
  );
  const coStarMap = {};

  relatedTitles.forEach((title) => {
    (title.cast || []).forEach((coStar) => {
      if (coStar === actorName) return;

      if (!coStarMap[coStar]) {
        coStarMap[coStar] = new Set();
      }

      coStarMap[coStar].add(title.name);
    });
  });

  return Object.entries(coStarMap)
    .map(([coStar, titleSet]) => {
      const sharedTitles = Array.from(titleSet);

      return {
        coStar,
        sharedTitles,
        sharedCount: sharedTitles.length,
      };
    })
    .sort(
      (a, b) =>
        b.sharedCount - a.sharedCount || a.coStar.localeCompare(b.coStar)
    );
}

function getTitleCastPairConnections(title) {
  const cast = title.cast || [];
  const pairs = [];

  for (let i = 0; i < cast.length; i++) {
    for (let j = i + 1; j < cast.length; j++) {
      const actorA = cast[i];
      const actorB = cast[j];

      const sharedTitles = findSharedTitlesForActors(actorA, actorB);

      if (sharedTitles.length > 1) {
        pairs.push({
          actorA,
          actorB,
          sharedTitles,
        });
      }
    }
  }

  return pairs.sort((a, b) => b.sharedTitles.length - a.sharedTitles.length);
}

function findSharedTitlesForActors(actorA, actorB) {
  return titles
    .filter(
      (title) =>
        (title.cast || []).includes(actorA) &&
        (title.cast || []).includes(actorB)
    )
    .map((title) => title.name);
}

function openBehindTheScreenPage(movieName) {
  hideSearch();

  const title = titles.find((item) => item.name === movieName);

  if (!title) {
    $('mainPage').style.display = 'none';
    $('sectionPage').style.display = 'block';

    $('sectionPage').innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB BEHIND THE SCREEN</div>
            <h2>Movie Not Found</h2>
          </div>
          <button class="back-button" onclick="backToSphere()">← Back</button>
        </div>

        <div class="section-page-content">
          <p>I could not find that title in your VEDB title list yet.</p>
        </div>
      </div>
    `;

    return;
  }

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB BEHIND THE SCREEN</div>
          <h2>${streamSenseSafe(title.name)} — Behind the Screen</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
      </div>

      <div class="section-page-content">
        <div class="behind-screen-warning">
          <h3>Behind the Screen Credit Ladder</h3>
          <p>
            This page is designed to list everyone involved in making the film from lower-level support roles up to the highest-level creative and studio roles.
          </p>
          <p>
            Your current CodePen data only has starter cast and crew. To truly list every person, you would need to import or manually add full credits for each movie.
          </p>
        </div>

        ${buildBehindTheScreenCredits(title)}

        <button class="back-button" onclick="openStreamSensePage('${escapeForClick(
          title.name
        )}')">
          Open StreamSense Cast Links →
        </button>
      </div>
    </div>
  `;

  window.location.hash = '#/behind-the-screen/' + makeSlug(title.name);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildBehindTheScreenCredits(title) {
  const levels = getBehindTheScreenCreditLevels(title);

  return levels
    .map(
      (level) => `
    <section class="behind-screen-level">
      <span class="behind-screen-rank">Level ${level.level}: ${streamSenseSafe(
        level.rank
      )}</span>
      <h3>${streamSenseSafe(level.title)}</h3>
      <p>${streamSenseSafe(level.description)}</p>

      <ul>
        ${level.people
          .map((person) => `<li>${streamSenseSafe(person)}</li>`)
          .join('')}
      </ul>
    </section>
  `
    )
    .join('');
}

function getBehindTheScreenCreditLevels(title) {
  const crew = title.crew || [];
  const cast = title.cast || [];
  const characters = title.characters || [];

  const directors = crew.filter((item) =>
    item.toLowerCase().includes('director')
  );
  const writers = crew.filter(
    (item) =>
      item.toLowerCase().includes('writer') ||
      item.toLowerCase().includes('based on') ||
      item.toLowerCase().includes('novel') ||
      item.toLowerCase().includes('play')
  );
  const producers = crew.filter(
    (item) =>
      item.toLowerCase().includes('producer') ||
      item.toLowerCase().includes('studio')
  );
  const music = crew.filter(
    (item) =>
      item.toLowerCase().includes('music') ||
      item.toLowerCase().includes('composer')
  );
  const otherCrew = crew.filter(
    (item) =>
      !directors.includes(item) &&
      !writers.includes(item) &&
      !producers.includes(item) &&
      !music.includes(item)
  );

  const castPeople = cast.map((person, index) => {
    const character = characters[index];

    if (character) {
      return `${person} — Performer / role: ${character}`;
    }

    return `${person} — Performer`;
  });

  return [
    {
      level: 1,
      rank: 'Lowest / Support Level',
      title: 'Production Support, Assistants, Runners, Interns',
      description:
        'The entry-level and support workers who help the production operate day to day.',
      people: [
        'Production assistants — add names from full credits',
        'Set runners — add names from full credits',
        'Office assistants — add names from full credits',
        'Interns / trainees — add names from full credits',
        'Additional production support — add names from full credits',
      ],
    },
    {
      level: 2,
      rank: 'Technical Crew',
      title: 'Camera, Lighting, Sound, Grip, Electric, Set Operations',
      description:
        'The technical teams that physically capture the movie and make the set work.',
      people: [
        'Camera department — add names from full credits',
        'Lighting / electric department — add names from full credits',
        'Sound department — add names from full credits',
        'Grip department — add names from full credits',
        'Set operations crew — add names from full credits',
      ],
    },
    {
      level: 3,
      rank: 'Creative Departments',
      title: 'Art, Costumes, Makeup, Hair, Music, Editing, Visual Effects',
      description:
        'The departments that shape the visual, sound, music, and finished style of the movie.',
      people: [
        ...music,
        'Art department — add names from full credits',
        'Costume department — add names from full credits',
        'Makeup and hair department — add names from full credits',
        'Editing department — add names from full credits',
        'Visual effects department — add names from full credits',
      ].filter(Boolean),
    },
    {
      level: 4,
      rank: 'Performers',
      title: 'Cast and Character Performers',
      description:
        'The actors and performers who appear in or voice the characters in the movie.',
      people: castPeople.length ? castPeople : ['Cast names to be added'],
    },
    {
      level: 5,
      rank: 'Story and Writing Level',
      title: 'Writers, Source Material, Story Development',
      description:
        'The people and source material behind the story, screenplay, adaptation, or original idea.',
      people: writers.length
        ? writers
        : ['Writers / story team to be added from full credits'],
    },
    {
      level: 6,
      rank: 'Creative Leadership',
      title: 'Director, Department Heads, Lead Creative Decision-Makers',
      description:
        'The people responsible for guiding the movie’s creative direction.',
      people: [
        ...directors,
        ...otherCrew,
        'Cinematographer / director of photography — add name from full credits',
        'Production designer — add name from full credits',
        'Editor — add name from full credits',
      ].filter(Boolean),
    },
    {
      level: 7,
      rank: 'Highest / Ownership and Business Level',
      title: 'Producers, Studios, Distributors, Rights Holders',
      description:
        'The people and companies responsible for financing, producing, distributing, or owning the project.',
      people: producers.length
        ? producers
        : [
            title.studio ? title.studio : 'Studio / distributor to be added',
            'Executive producers — add names from full credits',
            'Producers — add names from full credits',
            'Production companies — add names from full credits',
            'Distributor / rights holder — add name from full credits',
          ],
    },
  ];
}

function activateStreamSenseNav() {
  document
    .querySelectorAll('.nav button')
    .forEach((button) => button.classList.remove('active'));

  const button = document.getElementById('streamSenseNavButton');
  if (button) button.classList.add('active');
}

function streamSenseSafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installStreamSenseAddon();
function installFinalStrictActorSearchAndTomHollandFix() {
  addTomHollandActorAddon();
  installCleanStrictSearchStyles();
  rebuildSearchBoxWithStrictOnlyLogic();
}

function addTomHollandActorAddon() {
  if (typeof window.addActorOnce !== 'function') {
    window.addActorOnce = function (record) {
      const existing = actors.find((item) => item.name === record.name);

      const fullRecord = {
        mode: 'actor',
        job: 'Actor',
        initials: 'A',
        summary: 'Actor summary placeholder.',
        bio: 'Original VEDB demo bio: Add actor biography here.',
        knownFor: [],
        awards: ['Awards placeholder'],
        facts: {
          'Profile Type': 'Public VEDB Profile',
          'Main Work': 'Film and television',
          'Common Genres': 'Drama, action, comedy',
          'Photo Status': 'Placeholder only',
        },
        characters: [],
        videos: ['Interview placeholder', 'Trailer placeholder'],
        quotes: [
          'Quote section placeholder — add properly sourced quotes later.',
        ],
        collaborators: [],
        social: 'Audience momentum placeholder.',
        buzz: 85,
        sources: [],
        ...record,
      };

      if (existing) {
        Object.assign(existing, fullRecord);
      } else {
        actors.push(fullRecord);
        allItems.push(fullRecord);
      }
    };
  }

  window.addActorOnce({
    name: 'Tom Holland',
    job: 'Actor',
    initials: 'TH',
    summary:
      'Tom Holland is known for playing Spider-Man, action-adventure roles, dramatic performances, and major franchise visibility.',
    bio: 'Original VEDB demo bio: Tom Holland became widely recognized through his role as Peter Parker / Spider-Man, while also working across adventure films, dramas, and character-driven projects.',
    knownFor: [
      ['Spider-Man: Homecoming', 2017],
      ['Spider-Man: Far From Home', 2019],
      ['Spider-Man: No Way Home', 2021],
      ['Uncharted', 2022],
    ],
    awards: [
      'BAFTA Rising Star recognition',
      'Teen Choice recognition',
      'Fan-favorite recognition',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and franchise acting',
      'Common Genres': 'Superhero, action, adventure, drama',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Peter Parker', 'Spider-Man', 'Nathan Drake'],
    videos: ['Spider-Man interview placeholder', 'Action role placeholder'],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: [
      'Zendaya',
      'Robert Downey Jr.',
      'Jacob Batalon',
      'Mark Wahlberg',
    ],
    social:
      'Very high audience recognition from Spider-Man, Marvel, and younger global movie audiences.',
    buzz: 95,
    sources: ['https://en.wikipedia.org/wiki/Tom_Holland'],
  });

  actorCareerLabelInfo['Tom Holland'] = [
    {
      label: 'Breakout Performer',
      description:
        'Tom Holland became a breakout performer through his highly visible role as Peter Parker / Spider-Man.',
    },
    {
      label: 'Franchise Star',
      description:
        'Spider-Man and the Marvel Cinematic Universe make Tom Holland a clear franchise star inside VEDB.',
    },
    {
      label: 'Award Recognized',
      description:
        'His career includes public and industry recognition, especially as a rising star and fan-favorite performer.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Audiences connect with his youthful energy, humor, action work, and emotional version of Spider-Man.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'This label is lighter for Tom Holland right now, but future producer or creative-development work can be added here.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'He has worked across superhero films, action adventure, drama, voice work, and coming-of-age storytelling.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Tom Holland is still building his long-term legacy, but his Spider-Man era is already a major modern franchise identity.',
    },
    {
      label: 'Signature Work',
      description:
        'Spider-Man: Homecoming, Spider-Man: Far From Home, Spider-Man: No Way Home, and Uncharted are strong VEDB signature-work anchors.',
    },
  ];

  addTitleOnce({
    name: 'Spider-Man: Far From Home',
    job: 'Movie • Superhero • Action',
    initials: 'FFH',
    summary:
      'A superhero movie following Peter Parker as he faces new threats while traveling abroad after major events in the Marvel universe.',
    overview:
      'Original VEDB demo overview: Spider-Man: Far From Home connects Tom Holland, Zendaya, Peter Parker, MJ, superhero action, and Marvel franchise storytelling.',
    cast: [
      'Tom Holland',
      'Zendaya',
      'Jake Gyllenhaal',
      'Jacob Batalon',
      'Samuel L. Jackson',
    ],
    characters: [
      'Peter Parker',
      'MJ',
      'Quentin Beck',
      'Ned Leeds',
      'Nick Fury',
    ],
    crew: ['Director: Jon Watts', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    similar: ['Spider-Man: Homecoming', 'Spider-Man: No Way Home', 'Iron Man'],
    facts: {
      'Release Year': '2019',
      Type: 'Movie',
      Franchise: 'Spider-Man',
    },
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man:_Far_From_Home'],
  });

  addTitleOnce({
    name: 'Spider-Man: No Way Home',
    job: 'Movie • Superhero • Action',
    initials: 'NWH',
    summary:
      'A superhero movie about identity, consequences, multiverse danger, and Peter Parker’s struggle to repair his world.',
    overview:
      'Original VEDB demo overview: Spider-Man: No Way Home connects Tom Holland, Zendaya, Spider-Man legacy characters, multiverse storytelling, and major fan momentum.',
    cast: [
      'Tom Holland',
      'Zendaya',
      'Benedict Cumberbatch',
      'Jacob Batalon',
      'Marisa Tomei',
    ],
    characters: [
      'Peter Parker',
      'MJ',
      'Doctor Strange',
      'Ned Leeds',
      'May Parker',
    ],
    crew: ['Director: Jon Watts', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    similar: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'Iron Man',
    ],
    facts: {
      'Release Year': '2021',
      Type: 'Movie',
      Franchise: 'Spider-Man',
    },
    buzz: 98,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home'],
  });

  addTitleOnce({
    name: 'Uncharted',
    job: 'Movie • Action • Adventure',
    initials: 'UC',
    summary:
      'An action-adventure movie about treasure hunting, danger, teamwork, and a young Nathan Drake.',
    overview:
      'Original VEDB demo overview: Uncharted connects Tom Holland, action-adventure storytelling, treasure hunting, and video-game adaptation energy.',
    cast: ['Tom Holland', 'Mark Wahlberg', 'Sophia Ali', 'Antonio Banderas'],
    characters: [
      'Nathan Drake',
      'Victor Sullivan',
      'Chloe Frazer',
      'Santiago Moncada',
    ],
    crew: ['Director: Ruben Fleischer'],
    awards: ['Awards hub placeholder'],
    similar: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'John Wick',
    ],
    facts: {
      'Release Year': '2022',
      Type: 'Movie',
      Genre: 'Action adventure',
    },
    buzz: 89,
    sources: ['https://en.wikipedia.org/wiki/Uncharted_(film)'],
  });

  addFranchiseOnce({
    name: 'Spider-Man',
    job: 'Franchise • Superhero',
    initials: 'SM',
    summary:
      'A superhero franchise centered on Spider-Man, Peter Parker, friends, villains, and connected universe stories.',
    overview:
      'Original VEDB demo overview: Spider-Man connects Tom Holland, Zendaya, Peter Parker, MJ, superhero films, youth identity, action, and Marvel-linked storytelling.',
    titles: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'Spider-Man: No Way Home',
    ],
    timeline: [
      '2017 — Spider-Man: Homecoming',
      '2019 — Spider-Man: Far From Home',
      '2021 — Spider-Man: No Way Home',
    ],
    cast: ['Tom Holland', 'Zendaya', 'Jacob Batalon', 'Marisa Tomei'],
    characters: ['Peter Parker', 'MJ', 'Ned Leeds', 'May Parker'],
    social: 'High global superhero recognition and strong fan activity.',
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man_in_film'],
  });

  syncAllItemsForSearch();
}

function installCleanStrictSearchStyles() {
  if (document.getElementById('vedb-final-strict-search-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-final-strict-search-style';
  style.textContent = `
    .search-panel-title {
      color: var(--gold);
      font-size: 15px;
      font-weight: 900;
      margin: 8px 8px 6px;
      text-transform: uppercase;
      letter-spacing: .8px;
    }

    .search-chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 6px 8px 12px;
    }

    .search-chip {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }

    .search-chip:hover {
      border-color: var(--gold);
      color: var(--gold);
      background: rgba(247, 180, 0, .12);
    }

    .search-row-main {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .search-type-pill {
      display: inline-block;
      width: fit-content;
      border: 1px solid rgba(247, 180, 0, .45);
      color: var(--gold);
      border-radius: 999px;
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .search-row-extra {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
    }

    .search-empty-box {
      padding: 14px;
      color: var(--muted);
      line-height: 1.45;
    }
  `;

  document.head.appendChild(style);
}

function rebuildSearchBoxWithStrictOnlyLogic() {
  const oldInput = $('searchInput');
  const oldButton = $('searchButton');
  const oldResults = $('searchResults');

  if (!oldInput || !oldButton || !oldResults) return;

  const newInput = oldInput.cloneNode(true);
  const newButton = oldButton.cloneNode(true);
  const newResults = oldResults.cloneNode(false);

  newInput.value = '';
  newResults.innerHTML = '';
  newResults.style.display = 'none';

  oldInput.replaceWith(newInput);
  oldButton.replaceWith(newButton);
  oldResults.replaceWith(newResults);

  newInput.addEventListener('focus', function () {
    if (!newInput.value.trim()) finalShowSearchHomePanel();
  });

  newInput.addEventListener('input', finalStrictRunSearch);

  newInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') finalChooseFirstSearchMatch();
    if (event.key === 'Escape') hideSearch();
  });

  newButton.addEventListener('click', finalChooseFirstSearchMatch);

  newResults.addEventListener('mousedown', function (event) {
    const chip = event.target.closest('[data-search-term]');
    if (chip) {
      event.preventDefault();
      newInput.value = chip.dataset.searchTerm;
      finalStrictRunSearch();
      newInput.focus();
      return;
    }

    const row = event.target.closest('[data-open-mode][data-open-name]');
    if (row) {
      event.preventDefault();
      loadEntityByName(row.dataset.openMode, row.dataset.openName);
      newInput.value = '';
      hideSearch();
    }
  });
}

function finalStrictRunSearch() {
  const input = $('searchInput');
  const query = input.value.trim().toLowerCase();

  if (!query) {
    finalShowSearchHomePanel();
    return;
  }

  const actorMatches = finalGetActorMatchesForQuery(query);

  if (actorMatches.length > 0) {
    window.finalLatestSearchMatches =
      finalBuildActorFocusedResults(actorMatches);
    finalRenderSearchResults(
      window.finalLatestSearchMatches,
      query,
      actorMatches
    );
    return;
  }

  window.finalLatestSearchMatches = finalGeneralSearch(query);

  if (window.finalLatestSearchMatches.length === 0) {
    finalShowNoSearchResults(query);
    return;
  }

  finalRenderSearchResults(
    window.finalLatestSearchMatches.slice(0, 12),
    query,
    []
  );
}

function finalGetActorMatchesForQuery(query) {
  const cleanQuery = query.toLowerCase().trim();
  const queryWords = cleanQuery.split(/\s+/).filter(Boolean);

  return actors
    .map((actor) => {
      const actorName = actor.name.toLowerCase();
      const actorWords = actorName.split(/\s+/);

      let score = 0;

      if (actorName === cleanQuery) score += 1000;
      if (actorName.startsWith(cleanQuery)) score += 700;
      if (actorName.includes(cleanQuery)) score += 650;
      if (cleanQuery.includes(actorName)) score += 650;

      actorWords.forEach((word) => {
        if (queryWords.includes(word)) score += 300;
      });

      return { actor, score };
    })
    .filter((row) => row.score >= 300)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.actor);
}

function finalBuildActorFocusedResults(actorMatches) {
  const results = [];
  const seen = new Set();

  actorMatches.forEach((actor) => {
    finalAddSearchResult(results, seen, actor);

    const actorName = actor.name;
    const actorKnownFor = new Set((actor.knownFor || []).map((row) => row[0]));

    const relatedTitles = titles.filter((title) => {
      const titleCast = title.cast || [];

      if (titleCast.includes(actorName)) return true;
      if (actorKnownFor.has(title.name)) return true;

      return false;
    });

    relatedTitles.forEach((title) => {
      finalAddSearchResult(results, seen, title);
    });

    const relatedTitleNames = new Set(relatedTitles.map((title) => title.name));

    const relatedFranchises = franchises.filter((franchise) => {
      const franchiseCast = franchise.cast || [];
      const franchiseTitles = franchise.titles || [];

      if (franchiseCast.includes(actorName)) return true;

      return franchiseTitles.some(
        (titleName) =>
          actorKnownFor.has(titleName) || relatedTitleNames.has(titleName)
      );
    });

    relatedFranchises.forEach((franchise) => {
      finalAddSearchResult(results, seen, franchise);
    });
  });

  return results;
}

function finalGeneralSearch(query) {
  return allItems
    .map((item) => ({
      item,
      score: finalScoreItem(item, query),
    }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.item);
}

function finalScoreItem(item, query) {
  const name = String(item.name || '').toLowerCase();
  const job = String(item.job || '').toLowerCase();
  const summary = String(item.summary || '').toLowerCase();
  const overview = String(item.overview || '').toLowerCase();
  const mode = String(item.mode || '').toLowerCase();

  let score = 0;

  if (name === query) score += 1000;
  if (name.startsWith(query)) score += 700;
  if (name.includes(query)) score += 500;

  if (mode.includes(query)) score += 80;
  if (job.includes(query)) score += 80;
  if (summary.includes(query)) score += 40;
  if (overview.includes(query)) score += 40;

  if ((item.cast || []).join(' ').toLowerCase().includes(query)) score += 160;
  if ((item.characters || []).join(' ').toLowerCase().includes(query))
    score += 150;
  if (
    (item.knownFor || [])
      .map((row) => row[0])
      .join(' ')
      .toLowerCase()
      .includes(query)
  )
    score += 140;
  if ((item.collaborators || []).join(' ').toLowerCase().includes(query))
    score += 120;
  if ((item.titles || []).join(' ').toLowerCase().includes(query)) score += 120;
  if ((item.crew || []).join(' ').toLowerCase().includes(query)) score += 70;

  if (item.mode === 'actor') {
    const actorLabelText = (actorCareerLabelInfo[item.name] || [])
      .map((row) => row.label + ' ' + row.description)
      .join(' ')
      .toLowerCase();

    if (actorLabelText.includes(query)) score += 120;
  }

  return score;
}

function finalRenderSearchResults(matches, query, actorMatches) {
  const box = $('searchResults');
  box.innerHTML = '';

  const isActorFocused = actorMatches && actorMatches.length > 0;
  const actorNames = isActorFocused
    ? actorMatches.map((actor) => actor.name).join(', ')
    : '';

  box.innerHTML += `
    <div class="search-panel-title">
      ${
        isActorFocused
          ? 'Actor-Focused Results: ' + finalSafe(actorNames)
          : 'Search Results'
      }
    </div>
  `;

  if (isActorFocused) {
    box.innerHTML += `
      <div class="search-empty-box">
        Showing only the actor, titles that actor is actually connected to, and franchises that actor is actually connected to.
      </div>
    `;
  }

  matches.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'result-row';
    row.dataset.openMode = item.mode;
    row.dataset.openName = item.name;

    row.innerHTML = `
      <div class="search-row-main">
        <span class="search-type-pill">${finalSafe(modeName(item.mode))}</span>
        <span><b>${finalHighlightMatch(item.name, query)}</b></span>
        <span class="search-row-extra">${finalSafe(item.job || '')}</span>
        <span class="search-row-extra">${finalSafe(
          finalSearchPreviewText(item)
        )}</span>
      </div>
      <span>Open →</span>
    `;

    box.appendChild(row);
  });

  box.style.display = 'block';
}

function finalShowSearchHomePanel() {
  const box = $('searchResults');
  const topActors = [...actors]
    .sort((a, b) => (b.buzz || 0) - (a.buzz || 0))
    .slice(0, 8);

  box.innerHTML = `
    <div class="search-panel-title">Popular Actors</div>
    <div class="search-chip-row">
      ${topActors
        .map(
          (actor) => `
        <button class="search-chip" data-search-term="${finalSafe(actor.name)}">
          ${finalSafe(actor.name)}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="search-panel-title">Try Searching</div>
    <div class="search-chip-row">
      <button class="search-chip" data-search-term="Denzel Washington">Denzel Washington</button>
      <button class="search-chip" data-search-term="Tom Holland">Tom Holland</button>
      <button class="search-chip" data-search-term="Zendaya">Zendaya</button>
      <button class="search-chip" data-search-term="Tom Cruise">Tom Cruise</button>
      <button class="search-chip" data-search-term="Spider-Man">Spider-Man</button>
      <button class="search-chip" data-search-term="Tony Stark">Tony Stark</button>
    </div>
  `;

  box.style.display = 'block';
}

function finalShowNoSearchResults(query) {
  const box = $('searchResults');

  box.innerHTML = `
    <div class="search-panel-title">No Results Found</div>
    <div class="search-empty-box">
      I could not find <b>${finalSafe(query)}</b> yet.
      <br><br>
      Try searching an actor, movie, character, or franchise already loaded into VEDB.
    </div>
  `;

  box.style.display = 'block';
}

function finalChooseFirstSearchMatch() {
  const input = $('searchInput');
  const query = input.value.trim();

  if (!query) {
    finalShowSearchHomePanel();
    return;
  }

  finalStrictRunSearch();

  if (
    window.finalLatestSearchMatches &&
    window.finalLatestSearchMatches.length > 0
  ) {
    const first = window.finalLatestSearchMatches[0];
    loadEntity(first);
    input.value = '';
    hideSearch();
  }
}

function finalAddSearchResult(results, seen, item) {
  const key = item.mode + '::' + item.name;
  if (seen.has(key)) return;

  seen.add(key);
  results.push(item);
}

function finalSearchPreviewText(item) {
  if (item.mode === 'actor') {
    const works = (item.knownFor || [])
      .map((row) => row[0])
      .slice(0, 4)
      .join(' • ');
    return works ? 'Known for: ' + works : item.summary || '';
  }

  if (item.mode === 'title') {
    const cast = (item.cast || []).slice(0, 5).join(' • ');
    return cast ? 'Cast: ' + cast : item.summary || '';
  }

  if (item.mode === 'franchise') {
    const titleList = (item.titles || []).slice(0, 4).join(' • ');
    return titleList ? 'Titles: ' + titleList : item.summary || '';
  }

  return item.summary || '';
}

function finalHighlightMatch(text, query) {
  const safe = finalSafe(text || '');
  if (!query) return safe;

  const index = safe.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return safe;

  return (
    safe.slice(0, index) +
    `<span style="color: var(--gold);">` +
    safe.slice(index, index + query.length) +
    `</span>` +
    safe.slice(index + query.length)
  );
}

function finalSafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installFinalStrictActorSearchAndTomHollandFix();
function installFullNameActorSearchFix() {
  finalGetActorMatchesForQuery = function (query) {
    const cleanQuery = String(query || '')
      .toLowerCase()
      .trim();
    const queryWords = cleanQuery.split(/\s+/).filter(Boolean);
    const isFullNameSearch = queryWords.length >= 2;

    return actors
      .map((actor) => {
        const actorName = actor.name.toLowerCase();
        const actorWords = actorName.split(/\s+/);

        let score = 0;

        if (actorName === cleanQuery) score += 2000;
        if (actorName.startsWith(cleanQuery)) score += 1200;
        if (actorName.includes(cleanQuery)) score += 1000;
        if (cleanQuery.includes(actorName)) score += 1000;

        /*
          Important fix:
          If the user types a full name like "Tom Holland",
          do NOT match another actor just because they share "Tom".
        */
        if (!isFullNameSearch) {
          actorWords.forEach((word) => {
            if (queryWords.includes(word)) score += 300;
          });
        } else {
          const allQueryWordsMatchActor = queryWords.every((word) =>
            actorWords.some((actorWord) => actorWord.startsWith(word))
          );

          if (allQueryWordsMatchActor) score += 900;
        }

        return { actor, score };
      })
      .filter((row) => row.score >= 900)
      .sort((a, b) => b.score - a.score)
      .map((row) => row.actor);
  };

  rebuildSearchBoxWithStrictOnlyLogic();

  const input = $('searchInput');
  if (input) {
    input.value = '';
  }

  const box = $('searchResults');
  if (box) {
    box.innerHTML = '';
    box.style.display = 'none';
  }
}

installFullNameActorSearchFix();
function installEmbeddedTrailerUpgrade() {
  if (window.vedbEmbeddedTrailerUpgradeInstalled) return;
  window.vedbEmbeddedTrailerUpgradeInstalled = true;

  installEmbeddedTrailerStyles();

  if (typeof buildTrailerMovieCard === 'function') {
    buildTrailerMovieCard = function (title) {
      const savedTrailers = getSavedTrailersForMovie(title.name);
      const featuredTrailer = savedTrailers[0];

      return `
        <article class="trailer-hub-card">
          <h3>${trailerSafeText(title.name)}</h3>
          <p><b>Movie:</b> ${trailerSafeText(title.job || 'Movie')}</p>
          <p><b>Cast:</b> ${trailerSafeText(
            (title.cast || []).slice(0, 5).join(' • ')
          )}</p>
          <p>${trailerSafeText(title.summary || title.overview || '')}</p>

          ${
            typeof buildWhereToWatchBox === 'function'
              ? buildWhereToWatchBox(title)
              : ''
          }

          <div class="embedded-trailer-box">
            <h4>Embedded Trailer Player</h4>
            ${
              featuredTrailer
                ? buildEmbeddedTrailerPlayer(featuredTrailer)
                : buildNoEmbeddedTrailerBox(title)
            }
          </div>

          ${
            savedTrailers.length > 1
              ? `
                <h4 class="embedded-trailer-small-title">More Saved Trailers</h4>
                ${savedTrailers
                  .slice(1)
                  .map((trailer) => buildEmbeddedTrailerPlayer(trailer))
                  .join('')}
              `
              : ''
          }

          <button onclick="loadEntityByName('title', '${escapeForClick(
            title.name
          )}')">
            Open Movie Sphere →
          </button>

          ${
            typeof openWhereToWatchPage === 'function'
              ? `<button onclick="openWhereToWatchPage('${escapeForClick(
                  title.name
                )}')">Where to Watch →</button>`
              : ''
          }

          <button onclick="prefillTrailerForm('${escapeForClick(title.name)}')">
            Add Embedded Trailer →
          </button>
        </article>
      `;
    };
  }

  if (typeof buildTrailerAddForm === 'function') {
    buildTrailerAddForm = function (movieName) {
      return `
        <div class="trailer-hub-form">
          <h3>Add Embedded Trailer</h3>
          <p class="trailer-hub-note">
            Paste the YouTube trailer link here. VEDB will embed the player inside your site so the visitor does not have to leave VEDB.
          </p>

          <label>Movie title</label>
          <input id="trailerAddMovieName" value="${trailerSafeText(
            movieName || ''
          )}" placeholder="Example: Dune">

          <label>Trailer type</label>
          <select id="trailerAddLabel">
            <option value="Official Trailer">Official Trailer</option>
            <option value="Teaser Trailer">Teaser Trailer</option>
            <option value="Trailer 2">Trailer 2</option>
            <option value="Behind the Scenes">Behind the Scenes</option>
            <option value="Cast Interview">Cast Interview</option>
          </select>

          <label>YouTube trailer link</label>
          <input id="trailerAddUrl" placeholder="Paste YouTube link here, example: https://www.youtube.com/watch?v=VIDEO_ID">

          <button onclick="saveTrailerHubLink()">Save Embedded Trailer</button>
        </div>
      `;
    };
  }

  if (typeof openTrailerHubPage === 'function') {
    const oldOpenTrailerHubPage = openTrailerHubPage;

    openTrailerHubPage = function (startMovieName) {
      oldOpenTrailerHubPage(startMovieName);

      setTimeout(function () {
        const input = document.getElementById('trailerHubSearchInput');
        if (input && startMovieName) {
          renderTrailerHubResults(startMovieName);
        }
      }, 50);
    };
  }
}

function installEmbeddedTrailerStyles() {
  if (document.getElementById('vedb-embedded-trailer-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-embedded-trailer-style';

  style.textContent = `
    .embedded-trailer-box {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 16px;
      padding: 14px;
      margin: 14px 0;
    }

    .embedded-trailer-box h4,
    .embedded-trailer-small-title {
      color: var(--gold);
      font-size: 18px;
      margin-bottom: 10px;
    }

    .embedded-trailer-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0;
    }

    .embedded-trailer-frame {
      width: 100%;
      aspect-ratio: 16 / 9;
      border: 1px solid rgba(0, 150, 255, .45);
      border-radius: 14px;
      overflow: hidden;
      margin: 12px 0;
      background: #000;
      box-shadow: 0 0 20px rgba(0, 132, 255, .22);
    }

    .embedded-trailer-frame iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }

    .embedded-trailer-empty {
      border: 1px dashed rgba(255,255,255,.28);
      border-radius: 14px;
      padding: 16px;
      background: rgba(4, 14, 28, .65);
    }

    .embedded-trailer-empty b {
      color: var(--gold);
    }
  `;

  document.head.appendChild(style);
}

function buildEmbeddedTrailerPlayer(trailer) {
  const embedUrl = convertToYouTubePrivacyEmbedUrl(trailer.url);

  if (!embedUrl) {
    return `
      <div class="embedded-trailer-empty">
        <p><b>${trailerSafeText(trailer.label || 'Saved Trailer')}</b></p>
        <p class="embedded-trailer-note">
          This trailer link could not be embedded. Make sure it is a normal YouTube watch link or youtu.be link.
        </p>
      </div>
    `;
  }

  return `
    <div>
      <p><b>${trailerSafeText(trailer.label || 'Official Trailer')}</b></p>
      <div class="embedded-trailer-frame">
        <iframe
          src="${trailerSafeText(embedUrl)}"
          title="${trailerSafeText(trailer.label || 'Movie trailer')}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  `;
}

function buildNoEmbeddedTrailerBox(title) {
  return `
    <div class="embedded-trailer-empty">
      <p><b>No embedded trailer saved yet.</b></p>
      <p class="embedded-trailer-note">
        To keep users on VEDB, paste the movie’s official YouTube trailer link into the Add Embedded Trailer form below.
      </p>
      <p class="embedded-trailer-note">
        Best practice: use the official studio trailer or the movie studio’s official YouTube channel.
      </p>
      <button onclick="prefillTrailerForm('${escapeForClick(title.name)}')">
        Add Trailer Link →
      </button>
    </div>
  `;
}

function convertToYouTubePrivacyEmbedUrl(url) {
  if (!url) return '';

  try {
    const text = String(url).trim();
    let videoId = '';

    if (text.includes('youtube.com/embed/')) {
      videoId = text.split('youtube.com/embed/')[1].split('?')[0].split('/')[0];
    } else if (text.includes('youtube.com/watch')) {
      const parsed = new URL(text);
      videoId = parsed.searchParams.get('v') || '';
    } else if (text.includes('youtu.be/')) {
      const parsed = new URL(text);
      videoId = parsed.pathname.replace('/', '').split('?')[0];
    } else if (text.includes('youtube.com/shorts/')) {
      videoId = text
        .split('youtube.com/shorts/')[1]
        .split('?')[0]
        .split('/')[0];
    }

    if (!videoId) return '';

    return (
      'https://www.youtube-nocookie.com/embed/' +
      videoId +
      '?rel=0&modestbranding=1'
    );
  } catch (error) {
    return '';
  }
}

installEmbeddedTrailerUpgrade();
function installSpiderManFarFromHomeOfficialTrailer() {
  const movieName = 'Spider-Man: Far From Home';
  const trailerUrl = 'https://www.youtube.com/watch?v=Nt9L1jCKGnE';

  const existing = getSavedTrailerLinks();
  const alreadySaved = existing.some(
    (trailer) =>
      normalizeTrailerMovieName(trailer.movieName) ===
        normalizeTrailerMovieName(movieName) && trailer.url === trailerUrl
  );

  if (!alreadySaved) {
    existing.unshift({
      id: 'trailer-spider-man-far-from-home-official-' + Date.now(),
      movieName: movieName,
      label: 'Official Trailer',
      url: trailerUrl,
      savedAt: Date.now(),
    });

    localStorage.setItem(
      'vedb_trailer_links',
      JSON.stringify(existing.slice(0, 200))
    );
  }

  if (typeof openTrailerHubPage === 'function') {
    openTrailerHubPage(movieName);
  }
}

installSpiderManFarFromHomeOfficialTrailer();
function installVerifiedWhereToWatchUpgrade() {
  if (window.vedbVerifiedWhereToWatchInstalled) return;
  window.vedbVerifiedWhereToWatchInstalled = true;

  window.verifiedWhereToWatchData = {
    'Spider-Man: Far From Home': {
      verifiedAsOf: 'May 3, 2026',
      note: 'Availability changes over time. These are verified watch options from current lookup sources.',
      streaming: [
        {
          provider: 'Disney+',
          access: 'Subscription streaming',
          url: 'https://www.disneyplus.com/browse/entity-2ca3cca0-bd2b-4934-93c0-c03d27fb249e',
        },
        {
          provider: 'fuboTV',
          access: 'Subscription / live TV streaming availability',
          url: 'https://www.justwatch.com/us/movie/spider-man-far-from-home',
        },
        {
          provider: 'YouTube TV',
          access: 'Subscription / live TV streaming availability',
          url: 'https://www.justwatch.com/us/movie/spider-man-far-from-home',
        },
      ],
      rentBuy: [
        {
          provider: 'Amazon Video',
          access: 'Rent or buy',
          url: 'https://www.amazon.com/Spider-Man-Far-Home-Tom-Holland/dp/B07TKZQFJC',
        },
        {
          provider: 'Apple TV Store',
          access: 'Rent or buy',
          url: 'https://www.justwatch.com/us/movie/spider-man-far-from-home',
        },
        {
          provider: 'Fandango at Home',
          access: 'Rent or buy',
          url: 'https://www.justwatch.com/us/movie/spider-man-far-from-home',
        },
      ],
      sourceLinks: [
        {
          label: 'JustWatch availability page',
          url: 'https://www.justwatch.com/us/movie/spider-man-far-from-home',
        },
        {
          label: 'Disney+ movie page',
          url: 'https://www.disneyplus.com/browse/entity-2ca3cca0-bd2b-4934-93c0-c03d27fb249e',
        },
      ],
    },
  };

  installVerifiedWhereToWatchStyles();

  buildWhereToWatchBox = function (title) {
    const data = getVerifiedWhereToWatchData(title.name);

    if (data) {
      return buildVerifiedWhereToWatchBox(title, data);
    }

    return buildUnverifiedWhereToWatchBox(title);
  };

  openWhereToWatchPage = function (movieName) {
    hideSearch();

    const title = titles.find((item) => item.name === movieName);

    if (!title) {
      $('mainPage').style.display = 'none';
      $('sectionPage').style.display = 'block';

      $('sectionPage').innerHTML = `
        <div class="glass section-page-inner">
          <div class="section-page-header">
            <div>
              <div class="blue-label">VEDB WHERE TO WATCH</div>
              <h2>Movie Not Found</h2>
            </div>
            <button class="back-button" onclick="backToSphere()">← Back</button>
          </div>

          <div class="section-page-content">
            <p>I could not find that title in your VEDB title list yet.</p>
          </div>
        </div>
      `;

      return;
    }

    const data = getVerifiedWhereToWatchData(title.name);

    $('mainPage').style.display = 'none';
    $('sectionPage').style.display = 'block';

    $('sectionPage').innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB WHERE TO WATCH</div>
            <h2>${whereWatchSafe(title.name)}</h2>
          </div>
          <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
        </div>

        <div class="section-page-content">
          ${
            data
              ? buildVerifiedWhereToWatchBox(title, data)
              : buildUnverifiedWhereToWatchBox(title)
          }

          <h3>Movie Details</h3>
          <p><b>Movie:</b> ${whereWatchSafe(title.name)}</p>
          <p><b>Type:</b> ${whereWatchSafe(title.job || 'Movie')}</p>
          <p><b>Cast:</b> ${whereWatchSafe((title.cast || []).join(' • '))}</p>
          <p><b>Summary:</b> ${whereWatchSafe(
            title.summary || title.overview || ''
          )}</p>

          ${
            typeof openTrailerHubPage === 'function'
              ? `<button class="back-button" onclick="openTrailerHubPage('${escapeForClick(
                  title.name
                )}')">Open Trailer Hub →</button>`
              : ''
          }
        </div>
      </div>
    `;

    window.location.hash = '#/where-to-watch/' + makeSlug(title.name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (typeof openTrailerHubPage === 'function') {
    const oldOpenTrailerHubPageVerified = openTrailerHubPage;

    openTrailerHubPage = function (startMovieName) {
      oldOpenTrailerHubPageVerified(startMovieName);

      setTimeout(function () {
        if (startMovieName && typeof renderTrailerHubResults === 'function') {
          renderTrailerHubResults(startMovieName);
        }
      }, 50);
    };
  }
}

function installVerifiedWhereToWatchStyles() {
  if (document.getElementById('vedb-verified-where-watch-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-verified-where-watch-style';

  style.textContent = `
    .verified-watch-box {
      border: 1px solid rgba(0, 150, 255, .45);
      background: rgba(6, 25, 49, .88);
      border-radius: 18px;
      padding: 16px;
      margin: 14px 0;
      box-shadow: inset 0 0 25px rgba(0, 132, 255, .08);
    }

    .verified-watch-box h4 {
      color: var(--gold);
      font-size: 20px;
      margin-bottom: 8px;
    }

    .verified-watch-section {
      margin: 14px 0;
      padding: 12px;
      border-radius: 14px;
      background: rgba(11, 132, 255, .08);
      border: 1px solid rgba(11, 132, 255, .25);
    }

    .verified-watch-section h5 {
      color: var(--gold);
      font-size: 16px;
      margin-bottom: 8px;
    }

    .verified-watch-row {
      display: grid;
      grid-template-columns: 180px 1fr auto;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,.1);
      padding: 10px 0;
    }

    .verified-watch-row:last-child {
      border-bottom: none;
    }

    .verified-provider-name {
      font-weight: 900;
      color: white;
    }

    .verified-access-type {
      color: var(--muted);
      font-size: 14px;
    }

    .verified-watch-button {
      display: inline-block;
      background: rgba(247, 180, 0, .14);
      border: 1px solid var(--gold);
      color: var(--gold);
      padding: 8px 12px;
      border-radius: 999px;
      font-weight: 900;
      font-size: 13px;
      text-decoration: none;
      white-space: nowrap;
    }

    .verified-watch-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0;
    }

    .verified-date-pill {
      display: inline-block;
      border: 1px solid rgba(247, 180, 0, .45);
      color: var(--gold);
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 900;
      margin: 6px 0 10px;
    }

    .unverified-watch-box {
      border: 1px dashed rgba(247, 180, 0, .42);
      background: rgba(247, 180, 0, .07);
      border-radius: 18px;
      padding: 16px;
      margin: 14px 0;
    }

    .unverified-watch-box h4 {
      color: var(--gold);
      margin-bottom: 8px;
    }

    @media (max-width: 800px) {
      .verified-watch-row {
        grid-template-columns: 1fr;
      }

      .verified-watch-button {
        width: fit-content;
      }
    }
  `;

  document.head.appendChild(style);
}

function getVerifiedWhereToWatchData(movieName) {
  const key = Object.keys(window.verifiedWhereToWatchData || {}).find(
    (name) =>
      normalizeVerifiedMovieName(name) === normalizeVerifiedMovieName(movieName)
  );

  return key ? window.verifiedWhereToWatchData[key] : null;
}

function buildVerifiedWhereToWatchBox(title, data) {
  return `
    <div class="verified-watch-box">
      <h4>Verified Where to Watch</h4>

      <span class="verified-date-pill">Verified as of ${whereWatchSafe(
        data.verifiedAsOf || 'date not listed'
      )}</span>

      <p class="verified-watch-note">
        ${whereWatchSafe(
          data.note ||
            'These are actual watch options added to VEDB for this specific movie.'
        )}
      </p>

      <div class="verified-watch-section">
        <h5>Streaming</h5>
        ${
          data.streaming && data.streaming.length
            ? data.streaming.map((item) => buildVerifiedWatchRow(item)).join('')
            : `<p class="verified-watch-note">No verified streaming option added yet.</p>`
        }
      </div>

      <div class="verified-watch-section">
        <h5>Rent / Buy</h5>
        ${
          data.rentBuy && data.rentBuy.length
            ? data.rentBuy.map((item) => buildVerifiedWatchRow(item)).join('')
            : `<p class="verified-watch-note">No verified rent/buy option added yet.</p>`
        }
      </div>

      <div class="verified-watch-section">
        <h5>Verification Sources</h5>
        ${
          data.sourceLinks && data.sourceLinks.length
            ? data.sourceLinks
                .map(
                  (item) => `
                <div class="verified-watch-row">
                  <div class="verified-provider-name">${whereWatchSafe(
                    item.label
                  )}</div>
                  <div class="verified-access-type">Availability source</div>
                  <a class="verified-watch-button" href="${whereWatchSafe(
                    item.url
                  )}" target="_blank" rel="noopener">Verify →</a>
                </div>
              `
                )
                .join('')
            : `<p class="verified-watch-note">No source link added yet.</p>`
        }
      </div>
    </div>
  `;
}

function buildVerifiedWatchRow(item) {
  return `
    <div class="verified-watch-row">
      <div class="verified-provider-name">${whereWatchSafe(item.provider)}</div>
      <div class="verified-access-type">${whereWatchSafe(item.access)}</div>
      <a class="verified-watch-button" href="${whereWatchSafe(
        item.url
      )}" target="_blank" rel="noopener">
        Open →
      </a>
    </div>
  `;
}

function buildUnverifiedWhereToWatchBox(title) {
  return `
    <div class="unverified-watch-box">
      <h4>Where to Watch Not Verified Yet</h4>

      <p class="verified-watch-note">
        VEDB does not have verified availability for <b>${whereWatchSafe(
          title.name
        )}</b> yet.
      </p>

      <p class="verified-watch-note">
        Instead of showing random platform links, this page should wait until verified provider data is added.
      </p>

      <a
        class="verified-watch-button"
        href="https://www.justwatch.com/us/search?q=${encodeURIComponent(
          title.name
        )}"
        target="_blank"
        rel="noopener"
      >
        Check Live Availability →
      </a>
    </div>
  `;
}

function normalizeVerifiedMovieName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim();
}

installVerifiedWhereToWatchUpgrade();
function installInHouseWhereToWatchUpgrade() {
  if (window.vedbInHouseWhereToWatchInstalled) return;
  window.vedbInHouseWhereToWatchInstalled = true;

  installInHouseWhereToWatchStyles();

  buildVerifiedWhereToWatchBox = function (title, data) {
    return `
      <div class="inhouse-watch-box">
        <h4>VEDB In-House Where to Watch</h4>

        <span class="inhouse-date-pill">
          Verified as of ${whereWatchSafe(
            data.verifiedAsOf || 'date not listed'
          )}
        </span>

        <p class="inhouse-watch-note">
          This page keeps the viewer inside VEDB. It shows the verified places where the movie is available, but it does not send the user to an outside website.
        </p>

        <div class="inhouse-watch-section">
          <h5>Streaming Availability</h5>
          ${
            data.streaming && data.streaming.length
              ? data.streaming
                  .map((item) => buildInHouseWatchCard(item))
                  .join('')
              : `<p class="inhouse-watch-note">No verified streaming option has been added yet.</p>`
          }
        </div>

        <div class="inhouse-watch-section">
          <h5>Rent / Buy Availability</h5>
          ${
            data.rentBuy && data.rentBuy.length
              ? data.rentBuy.map((item) => buildInHouseWatchCard(item)).join('')
              : `<p class="inhouse-watch-note">No verified rent/buy option has been added yet.</p>`
          }
        </div>

        <div class="inhouse-watch-section">
          <h5>VEDB Verification Status</h5>
          <div class="inhouse-watch-card">
            <div>
              <strong>Availability stored inside VEDB</strong>
              <p>${whereWatchSafe(
                data.note ||
                  'Availability can change. VEDB should re-check this movie regularly.'
              )}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  buildUnverifiedWhereToWatchBox = function (title) {
    return `
      <div class="inhouse-watch-box unverified">
        <h4>VEDB Where to Watch Not Verified Yet</h4>

        <p class="inhouse-watch-note">
          VEDB does not have verified in-house availability for <b>${whereWatchSafe(
            title.name
          )}</b> yet.
        </p>

        <p class="inhouse-watch-note">
          To keep this page fully in-house, do not show random platform buttons. Add verified availability into VEDB first.
        </p>

        <div class="inhouse-watch-section">
          <h5>What VEDB Needs To Add</h5>

          <div class="inhouse-watch-card">
            <div>
              <strong>Streaming providers</strong>
              <p>Example: Netflix, Hulu, Disney+, Prime Video, Max, Peacock, Paramount+, Apple TV+.</p>
            </div>
          </div>

          <div class="inhouse-watch-card">
            <div>
              <strong>Rent / Buy providers</strong>
              <p>Example: Amazon Video, Apple TV Store, Fandango at Home, Google/YouTube Movies.</p>
            </div>
          </div>

          <div class="inhouse-watch-card">
            <div>
              <strong>Verification date</strong>
              <p>Add the date VEDB last confirmed the movie’s availability.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  buildVerifiedWatchRow = function (item) {
    return buildInHouseWatchCard(item);
  };

  if (
    typeof openWhereToWatchPage === 'function' &&
    currentEntity &&
    currentEntity.mode === 'title'
  ) {
    // Refresh current title page buttons if needed.
    addWhereToWatchButtonToTitlePage?.();
  }
}

function installInHouseWhereToWatchStyles() {
  if (document.getElementById('vedb-inhouse-where-watch-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-inhouse-where-watch-style';

  style.textContent = `
    .inhouse-watch-box {
      border: 1px solid rgba(0, 150, 255, .45);
      background: rgba(6, 25, 49, .88);
      border-radius: 18px;
      padding: 16px;
      margin: 14px 0;
      box-shadow: inset 0 0 25px rgba(0, 132, 255, .08);
    }

    .inhouse-watch-box.unverified {
      border: 1px dashed rgba(247, 180, 0, .55);
      background: rgba(247, 180, 0, .07);
    }

    .inhouse-watch-box h4 {
      color: var(--gold);
      font-size: 22px;
      margin-bottom: 8px;
    }

    .inhouse-watch-section {
      margin: 14px 0;
      padding: 12px;
      border-radius: 14px;
      background: rgba(11, 132, 255, .08);
      border: 1px solid rgba(11, 132, 255, .25);
    }

    .inhouse-watch-section h5 {
      color: var(--gold);
      font-size: 17px;
      margin-bottom: 10px;
    }

    .inhouse-watch-card {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      align-items: center;
      border: 1px solid rgba(255,255,255,.14);
      background: rgba(4, 14, 28, .74);
      border-radius: 14px;
      padding: 13px;
      margin: 10px 0;
    }

    .inhouse-watch-card strong {
      color: white;
      font-size: 17px;
    }

    .inhouse-watch-card p {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.45;
      margin: 5px 0 0;
    }

    .inhouse-watch-badge {
      border: 1px solid var(--gold);
      color: var(--gold);
      background: rgba(247, 180, 0, .12);
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 13px;
      font-weight: 900;
      white-space: nowrap;
    }

    .inhouse-date-pill {
      display: inline-block;
      border: 1px solid rgba(247, 180, 0, .45);
      color: var(--gold);
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 900;
      margin: 6px 0 10px;
    }

    .inhouse-watch-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0;
    }

    @media (max-width: 800px) {
      .inhouse-watch-card {
        grid-template-columns: 1fr;
      }

      .inhouse-watch-badge {
        width: fit-content;
      }
    }
  `;

  document.head.appendChild(style);
}

function buildInHouseWatchCard(item) {
  return `
    <div class="inhouse-watch-card">
      <div>
        <strong>${whereWatchSafe(item.provider)}</strong>
        <p>${whereWatchSafe(item.access)}</p>
      </div>

      <span class="inhouse-watch-badge">
        Listed in VEDB
      </span>
    </div>
  `;
}

installInHouseWhereToWatchUpgrade();
function installSpiderManFarFromHomeDirectWatchExample() {
  window.verifiedWhereToWatchData = window.verifiedWhereToWatchData || {};

  window.verifiedWhereToWatchData['Spider-Man: Far From Home'] = {
    verifiedAsOf: 'May 3, 2026',
    note: 'VEDB verified this title as available on these providers. Availability can change, so VEDB should re-check this regularly.',
    streaming: [
      {
        provider: 'Disney+',
        access: 'Subscription streaming',
        url: 'https://www.disneyplus.com/browse/entity-2ca3cca0-bd2b-4934-93c0-c03d27fb249e',
      },
      {
        provider: 'fuboTV',
        access: 'Subscription streaming / live TV availability',
        url: 'https://www.fubo.tv/welcome/program/MV010390320000/spider-man-far-from-home',
      },
      {
        provider: 'YouTube TV',
        access: 'Subscription / live TV availability',
        url: 'https://tv.youtube.com/search/Spider-Man%3A%20Far%20From%20Home',
      },
    ],
    rentBuy: [
      {
        provider: 'Amazon Video',
        access: 'Rent or buy',
        url: 'https://www.amazon.com/s?k=Spider-Man%3A+Far+From+Home+movie',
      },
      {
        provider: 'Apple TV Store',
        access: 'Rent or buy',
        url: 'https://tv.apple.com/search?term=Spider-Man%3A%20Far%20From%20Home',
      },
      {
        provider: 'Fandango at Home',
        access: 'Rent or buy',
        url: 'https://athome.fandango.com/content/browse/search?searchString=Spider-Man%3A%20Far%20From%20Home',
      },
    ],
    sourceLinks: [
      {
        label: 'VEDB verification source: JustWatch',
        url: 'https://www.justwatch.com/us/movie/spider-man-far-from-home',
      },
      {
        label: 'VEDB verification source: Disney+',
        url: 'https://www.disneyplus.com/browse/entity-2ca3cca0-bd2b-4934-93c0-c03d27fb249e',
      },
      {
        label: 'VEDB verification source: fuboTV',
        url: 'https://www.fubo.tv/welcome/program/MV010390320000/spider-man-far-from-home',
      },
    ],
  };

  installDirectWatchExampleStyles();

  buildVerifiedWhereToWatchBox = function (title, data) {
    return `
      <div class="direct-watch-box">
        <h4>VEDB Direct Watch Options</h4>

        <span class="direct-watch-date">
          Verified as of ${directWatchSafe(
            data.verifiedAsOf || 'date not listed'
          )}
        </span>

        <p class="direct-watch-note">
          ${directWatchSafe(
            data.note || 'These are verified VEDB watch options for this movie.'
          )}
        </p>

        <div class="direct-watch-section">
          <h5>Stream Now</h5>
          ${
            data.streaming && data.streaming.length
              ? data.streaming
                  .map((item) => buildDirectWatchProviderCard(item, 'Stream'))
                  .join('')
              : `<p class="direct-watch-note">No verified streaming provider has been added yet.</p>`
          }
        </div>

        <div class="direct-watch-section">
          <h5>Rent or Buy</h5>
          ${
            data.rentBuy && data.rentBuy.length
              ? data.rentBuy
                  .map((item) => buildDirectWatchProviderCard(item, 'Go'))
                  .join('')
              : `<p class="direct-watch-note">No verified rent/buy provider has been added yet.</p>`
          }
        </div>

        <div class="direct-watch-section">
          <h5>VEDB Verification Notes</h5>
          <p class="direct-watch-note">
            This keeps the movie page inside VEDB, but the final “watch” button sends the user directly to the provider that actually carries the movie.
          </p>
        </div>
      </div>
    `;
  };

  buildUnverifiedWhereToWatchBox = function (title) {
    return `
      <div class="direct-watch-box unverified">
        <h4>VEDB Has Not Verified This Movie Yet</h4>
        <p class="direct-watch-note">
          VEDB does not have confirmed watch-provider data for <b>${directWatchSafe(
            title.name
          )}</b> yet.
        </p>
        <p class="direct-watch-note">
          Once VEDB verifies the providers, this page can show direct provider buttons like Disney+, Netflix, Hulu, Prime Video, Apple TV Store, or Fandango at Home.
        </p>
      </div>
    `;
  };

  if (typeof openWhereToWatchPage === 'function') {
    openWhereToWatchPage('Spider-Man: Far From Home');
  }
}

function installDirectWatchExampleStyles() {
  if (document.getElementById('vedb-direct-watch-example-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-direct-watch-example-style';

  style.textContent = `
    .direct-watch-box {
      border: 1px solid rgba(0, 150, 255, .45);
      background: rgba(6, 25, 49, .9);
      border-radius: 18px;
      padding: 18px;
      margin: 14px 0;
      box-shadow: inset 0 0 25px rgba(0, 132, 255, .1);
    }

    .direct-watch-box.unverified {
      border: 1px dashed rgba(247, 180, 0, .55);
      background: rgba(247, 180, 0, .07);
    }

    .direct-watch-box h4 {
      color: var(--gold);
      font-size: 24px;
      margin-bottom: 8px;
    }

    .direct-watch-date {
      display: inline-block;
      border: 1px solid rgba(247, 180, 0, .55);
      color: var(--gold);
      border-radius: 999px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 900;
      margin: 6px 0 12px;
    }

    .direct-watch-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0;
    }

    .direct-watch-section {
      margin: 16px 0;
      padding: 14px;
      border-radius: 16px;
      background: rgba(11, 132, 255, .08);
      border: 1px solid rgba(11, 132, 255, .25);
    }

    .direct-watch-section h5 {
      color: var(--gold);
      font-size: 18px;
      margin-bottom: 10px;
    }

    .direct-watch-provider-card {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      align-items: center;
      border: 1px solid rgba(255,255,255,.14);
      background: rgba(4, 14, 28, .78);
      border-radius: 15px;
      padding: 14px;
      margin: 10px 0;
    }

    .direct-watch-provider-card strong {
      color: white;
      font-size: 18px;
    }

    .direct-watch-provider-card p {
      color: var(--muted);
      font-size: 14px;
      line-height: 1.4;
      margin: 5px 0 0;
    }

    .direct-watch-button {
      display: inline-block;
      border: 1px solid var(--gold);
      background: rgba(247, 180, 0, .16);
      color: var(--gold);
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 14px;
      font-weight: 900;
      text-decoration: none;
      white-space: nowrap;
    }

    .direct-watch-button:hover {
      background: rgba(247, 180, 0, .26);
      box-shadow: 0 0 18px rgba(247, 180, 0, .35);
    }

    @media (max-width: 800px) {
      .direct-watch-provider-card {
        grid-template-columns: 1fr;
      }

      .direct-watch-button {
        width: fit-content;
      }
    }
  `;

  document.head.appendChild(style);
}

function buildDirectWatchProviderCard(item, actionWord) {
  return `
    <div class="direct-watch-provider-card">
      <div>
        <strong>${directWatchSafe(item.provider)}</strong>
        <p>${directWatchSafe(item.access)}</p>
      </div>

      <a
        class="direct-watch-button"
        href="${directWatchSafe(item.url)}"
        target="_blank"
        rel="noopener"
      >
        ${directWatchSafe(actionWord)} on ${directWatchSafe(item.provider)} →
      </a>
    </div>
  `;
}

function directWatchSafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installSpiderManFarFromHomeDirectWatchExample();
function fixSpiderManFarFromHomeAmazonStreamingLink() {
  window.verifiedWhereToWatchData = window.verifiedWhereToWatchData || {};

  const movieName = 'Spider-Man: Far From Home';

  window.verifiedWhereToWatchData[movieName] = window.verifiedWhereToWatchData[
    movieName
  ] || {
    verifiedAsOf: 'May 3, 2026',
    note: 'VEDB verified this title as available on these providers. Availability can change, so VEDB should re-check this regularly.',
    streaming: [],
    rentBuy: [],
    sourceLinks: [],
  };

  const data = window.verifiedWhereToWatchData[movieName];

  data.verifiedAsOf = 'May 3, 2026';
  data.note =
    'VEDB verified this title with direct provider options. Amazon should point to the Prime Video rent/buy streaming page, not a physical disc listing.';

  data.rentBuy = (data.rentBuy || []).filter(
    (item) =>
      item.provider !== 'Amazon Video' &&
      item.provider !== 'Amazon Prime Video' &&
      item.provider !== 'Prime Video'
  );

  data.rentBuy.unshift({
    provider: 'Prime Video',
    access: 'Rent or buy streaming version',
    url: 'https://www.amazon.com/Spider-Man-Far-Home-Tom-Holland/dp/B07TKZQFJC',
  });

  data.sourceLinks = data.sourceLinks || [];

  const alreadyHasAmazonSource = data.sourceLinks.some(
    (item) =>
      item.url ===
      'https://www.amazon.com/Spider-Man-Far-Home-Tom-Holland/dp/B07TKZQFJC'
  );

  if (!alreadyHasAmazonSource) {
    data.sourceLinks.push({
      label: 'VEDB verification source: Prime Video rent/buy page',
      url: 'https://www.amazon.com/Spider-Man-Far-Home-Tom-Holland/dp/B07TKZQFJC',
    });
  }

  if (typeof openWhereToWatchPage === 'function') {
    openWhereToWatchPage(movieName);
  }
}

fixSpiderManFarFromHomeAmazonStreamingLink();
function installJacobBatalonAndStreamSenseWordingFix() {
  addJacobBatalonActorAndCredits();
  fixStreamSenseConnectionWording();
  fixStreamSensePairSearch();

  if (typeof syncAllItemsForSearch === 'function') {
    syncAllItemsForSearch();
  }

  if (typeof rebuildSearchBoxWithStrictOnlyLogic === 'function') {
    rebuildSearchBoxWithStrictOnlyLogic();
  }

  if (typeof openStreamSensePage === 'function') {
    openStreamSensePage('Tom Holland + Jacob Batalon');
  }
}

function addJacobBatalonActorAndCredits() {
  if (typeof addActorOnce !== 'function') {
    window.addActorOnce = function (record) {
      const existing = actors.find((item) => item.name === record.name);

      const fullRecord = {
        mode: 'actor',
        job: 'Actor',
        initials: 'A',
        summary: 'Actor summary placeholder.',
        bio: 'Original VEDB demo bio: Add actor biography here.',
        knownFor: [],
        awards: ['Awards placeholder'],
        facts: {
          'Profile Type': 'Public VEDB Profile',
          'Main Work': 'Film and television',
          'Common Genres': 'Drama, action, comedy',
          'Photo Status': 'Placeholder only',
        },
        characters: [],
        videos: ['Interview placeholder', 'Trailer placeholder'],
        quotes: [
          'Quote section placeholder — add properly sourced quotes later.',
        ],
        collaborators: [],
        social: 'Audience momentum placeholder.',
        buzz: 85,
        sources: [],
        ...record,
      };

      if (existing) {
        Object.assign(existing, fullRecord);
      } else {
        actors.push(fullRecord);
        allItems.push(fullRecord);
      }
    };
  }

  addActorOnce({
    name: 'Jacob Batalon',
    job: 'Actor',
    initials: 'JB',
    summary:
      'Jacob Batalon is known for playing Ned Leeds in the Spider-Man films starring Tom Holland.',
    bio: 'Original VEDB demo bio: Jacob Batalon became widely recognized through his role as Ned Leeds, Peter Parker’s close friend, in the Tom Holland Spider-Man films.',
    knownFor: [
      ['Spider-Man: Homecoming', 2017],
      ['Spider-Man: Far From Home', 2019],
      ['Spider-Man: No Way Home', 2021],
      ['Reginald the Vampire', 2022],
    ],
    awards: [
      'Fan-favorite recognition',
      'Franchise cast recognition',
      'Young Hollywood visibility',
    ],
    facts: {
      'Profile Type': 'Public VEDB Profile',
      'Main Work': 'Film and television acting',
      'Common Genres': 'Superhero, comedy, drama, fantasy',
      'Photo Status': 'Placeholder only',
    },
    characters: ['Ned Leeds', 'Reginald Andres'],
    videos: [
      'Spider-Man cast interview placeholder',
      'Franchise feature placeholder',
    ],
    quotes: ['Quote section placeholder — add properly sourced quotes later.'],
    collaborators: ['Tom Holland', 'Zendaya', 'Marisa Tomei', 'Jon Watts'],
    social:
      'Strong recognition from Spider-Man fans and younger franchise audiences.',
    buzz: 88,
    sources: ['https://en.wikipedia.org/wiki/Jacob_Batalon'],
  });

  actorCareerLabelInfo['Jacob Batalon'] = [
    {
      label: 'Breakout Performer',
      description:
        'Jacob Batalon became widely visible through his role as Ned Leeds in Spider-Man: Homecoming.',
    },
    {
      label: 'Franchise Star',
      description:
        'His role in the Tom Holland Spider-Man films connects him to a major superhero franchise.',
    },
    {
      label: 'Award Recognized',
      description:
        'This area can track future nominations, wins, or franchise-cast recognition added to VEDB.',
    },
    {
      label: 'Fan Favorite',
      description:
        'Spider-Man fans connect with Ned Leeds because of his humor, loyalty, and friendship with Peter Parker.',
    },
    {
      label: 'Behind-the-Scenes Builder',
      description:
        'This is a lighter label for Jacob right now, but future producer or creative credits can be added here.',
    },
    {
      label: 'Multi-Genre Talent',
      description:
        'His work connects superhero films, comedy, fantasy television, and character-driven acting.',
    },
    {
      label: 'Legacy Figure',
      description:
        'Jacob Batalon is still building his long-term legacy, with the Spider-Man films as his strongest early VEDB anchor.',
    },
    {
      label: 'Signature Work',
      description:
        'Spider-Man: Homecoming, Spider-Man: Far From Home, Spider-Man: No Way Home, and Reginald the Vampire are key VEDB signature-work anchors.',
    },
  ];

  addTitleOnce({
    name: 'Spider-Man: Homecoming',
    job: 'Movie • Superhero • Action',
    initials: 'SM',
    summary:
      'A superhero movie following Peter Parker as he balances high school life with becoming Spider-Man.',
    overview:
      'Original VEDB demo overview: Spider-Man: Homecoming connects Tom Holland, Zendaya, Jacob Batalon, Peter Parker, Ned Leeds, MJ, superhero storytelling, and the Marvel universe.',
    cast: [
      'Tom Holland',
      'Zendaya',
      'Jacob Batalon',
      'Michael Keaton',
      'Marisa Tomei',
      'Robert Downey Jr.',
    ],
    characters: [
      'Peter Parker',
      'MJ',
      'Ned Leeds',
      'Adrian Toomes',
      'May Parker',
      'Tony Stark',
    ],
    crew: ['Director: Jon Watts', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    similar: [
      'Spider-Man: Far From Home',
      'Spider-Man: No Way Home',
      'Iron Man',
    ],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      'Release Year': '2017',
      Type: 'Movie',
      Franchise: 'Spider-Man',
    },
    buzz: 93,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man:_Homecoming'],
  });

  addTitleOnce({
    name: 'Spider-Man: Far From Home',
    job: 'Movie • Superhero • Action',
    initials: 'FFH',
    summary:
      'A superhero movie following Peter Parker as he faces new threats while traveling abroad after major events in the Marvel universe.',
    overview:
      'Original VEDB demo overview: Spider-Man: Far From Home connects Tom Holland, Zendaya, Jacob Batalon, Peter Parker, MJ, Ned Leeds, superhero action, and Marvel franchise storytelling.',
    cast: [
      'Tom Holland',
      'Zendaya',
      'Jacob Batalon',
      'Jake Gyllenhaal',
      'Samuel L. Jackson',
      'Marisa Tomei',
    ],
    characters: [
      'Peter Parker',
      'MJ',
      'Ned Leeds',
      'Quentin Beck',
      'Nick Fury',
      'May Parker',
    ],
    crew: ['Director: Jon Watts', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    similar: ['Spider-Man: Homecoming', 'Spider-Man: No Way Home', 'Iron Man'],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      'Release Year': '2019',
      Type: 'Movie',
      Franchise: 'Spider-Man',
    },
    buzz: 94,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man:_Far_From_Home'],
  });

  addTitleOnce({
    name: 'Spider-Man: No Way Home',
    job: 'Movie • Superhero • Action',
    initials: 'NWH',
    summary:
      'A superhero movie about identity, consequences, multiverse danger, and Peter Parker’s struggle to repair his world.',
    overview:
      'Original VEDB demo overview: Spider-Man: No Way Home connects Tom Holland, Zendaya, Jacob Batalon, Peter Parker, MJ, Ned Leeds, Spider-Man legacy characters, multiverse storytelling, and major fan momentum.',
    cast: [
      'Tom Holland',
      'Zendaya',
      'Jacob Batalon',
      'Benedict Cumberbatch',
      'Marisa Tomei',
    ],
    characters: [
      'Peter Parker',
      'MJ',
      'Ned Leeds',
      'Doctor Strange',
      'May Parker',
    ],
    crew: ['Director: Jon Watts', 'Producer: Marvel Studios'],
    awards: ['Awards hub placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Official trailer placeholder'],
    similar: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'Iron Man',
    ],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      'Release Year': '2021',
      Type: 'Movie',
      Franchise: 'Spider-Man',
    },
    buzz: 98,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home'],
  });

  addTitleOnce({
    name: 'Reginald the Vampire',
    job: 'TV Series • Fantasy • Comedy',
    initials: 'RV',
    summary:
      'A fantasy comedy series centered on Reginald, an unlikely vampire dealing with identity, confidence, danger, and belonging.',
    overview:
      'Original VEDB demo overview: Reginald the Vampire connects Jacob Batalon, fantasy comedy, television leading-role visibility, and character-centered storytelling.',
    cast: ['Jacob Batalon', 'Mandela Van Peebles', 'Em Haine'],
    characters: ['Reginald Andres', 'Maurice Miller', 'Sarah Kinney'],
    crew: ['Creator: Harley Peyton'],
    awards: ['Awards hub placeholder'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['TV viewership placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Trailer placeholder'],
    similar: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'Spider-Man: No Way Home',
    ],
    whereWatch: ['Where-to-watch links can be added later.'],
    facts: {
      Type: 'TV Series',
      Genre: 'Fantasy comedy',
    },
    buzz: 82,
    sources: ['https://en.wikipedia.org/wiki/Reginald_the_Vampire'],
  });

  addFranchiseOnce({
    name: 'Spider-Man',
    job: 'Franchise • Superhero',
    initials: 'SM',
    summary:
      'A superhero franchise centered on Spider-Man, Peter Parker, friends, villains, and connected universe stories.',
    overview:
      'Original VEDB demo overview: Spider-Man connects Tom Holland, Zendaya, Jacob Batalon, Peter Parker, MJ, Ned Leeds, superhero films, youth identity, action, and Marvel-linked storytelling.',
    titles: [
      'Spider-Man: Homecoming',
      'Spider-Man: Far From Home',
      'Spider-Man: No Way Home',
    ],
    timeline: [
      '2017 — Spider-Man: Homecoming',
      '2019 — Spider-Man: Far From Home',
      '2021 — Spider-Man: No Way Home',
    ],
    cast: ['Tom Holland', 'Zendaya', 'Jacob Batalon', 'Marisa Tomei'],
    characters: ['Peter Parker', 'MJ', 'Ned Leeds', 'May Parker'],
    awards: ['Awards hub placeholder'],
    boxOffice: ['Franchise box office placeholder'],
    facts: {
      Type: 'Superhero franchise',
      'Photo Status': 'Placeholder only',
      'VEDB Status': 'Demo data',
    },
    videos: ['Trailer hub placeholder'],
    social: 'High global superhero recognition and strong fan activity.',
    whereWatch: ['Where-to-watch links can be added later.'],
    buzz: 96,
    sources: ['https://en.wikipedia.org/wiki/Spider-Man_in_film'],
  });
}

function fixStreamSenseConnectionWording() {
  if (typeof buildTitleStreamSenseCard === 'function') {
    buildTitleStreamSenseCard = function (title) {
      const pairConnections = getTitleCastPairConnections(title);

      return `
        <article class="streamsense-card">
          <h3>${streamSenseSafe(title.name)}</h3>
          <p>${streamSenseSafe(title.summary || title.overview || '')}</p>

          <div class="streamsense-pill-row">
            <span class="streamsense-pill">${streamSenseSafe(
              title.job || 'Movie'
            )}</span>
            <span class="streamsense-pill">${streamSenseSafe(
              (title.cast || []).length + ' cast names loaded'
            )}</span>
          </div>

          <h3>Cast Pair Connections</h3>

          ${
            pairConnections.length === 0
              ? `<p>No repeated actor-pair projects have been found yet in your current VEDB title data.</p>`
              : `<ul>
                  ${pairConnections
                    .slice(0, 12)
                    .map(
                      (pair) => `
                    <li>
                      <b>${streamSenseSafe(
                        pair.actorA
                      )}</b> + <b>${streamSenseSafe(pair.actorB)}</b>
                      <br>
                      Projects:
                      ${pair.sharedTitles
                        .map((titleName) => streamSenseSafe(titleName))
                        .join(' • ')}
                    </li>
                  `
                    )
                    .join('')}
                </ul>`
          }

          <button onclick="loadEntityByName('title', '${escapeForClick(
            title.name
          )}')">Open Movie Sphere →</button>
          <button onclick="openBehindTheScreenPage('${escapeForClick(
            title.name
          )}')">Behind the Screen →</button>
        </article>
      `;
    };
  }
}

function fixStreamSensePairSearch() {
  if (typeof buildStreamSenseResults !== 'function') return;

  buildStreamSenseResults = function (query) {
    const cleanQuery = String(query || '')
      .trim()
      .toLowerCase();

    if (!cleanQuery) {
      return buildStreamSenseHome();
    }

    const pairActors = findActorsMentionedInStreamSenseQuery(cleanQuery);

    if (pairActors.length >= 2) {
      return buildStreamSenseActorPairResult(pairActors[0], pairActors[1]);
    }

    const matchedActors = actors.filter((actor) =>
      actor.name.toLowerCase().includes(cleanQuery)
    );

    const matchedTitles = titles.filter((title) =>
      [
        title.name,
        title.summary,
        title.overview,
        title.job,
        (title.cast || []).join(' '),
        (title.characters || []).join(' '),
        (title.crew || []).join(' '),
        title.facts?.Franchise || '',
      ]
        .join(' ')
        .toLowerCase()
        .includes(cleanQuery)
    );

    let html = '';

    if (matchedActors.length > 0) {
      html += `
        <h3 style="color: var(--gold);">Actor Connection Results</h3>
        <div class="streamsense-grid">
          ${matchedActors
            .map((actor) => buildActorStreamSenseCard(actor))
            .join('')}
        </div>
      `;
    }

    if (matchedTitles.length > 0) {
      html += `
        <h3 style="color: var(--gold); margin-top: 22px;">Movie Cast Connection Results</h3>
        <div class="streamsense-grid">
          ${matchedTitles
            .map((title) => buildTitleStreamSenseCard(title))
            .join('')}
        </div>
      `;
    }

    if (!html) {
      html = `
        <div class="streamsense-card">
          <h3>No StreamSense match yet</h3>
          <p>
            I could not find that name in your current VEDB actor/title data.
            Try searching an actor or movie already in your site.
          </p>
        </div>
      `;
    }

    return html;
  };
}

function findActorsMentionedInStreamSenseQuery(cleanQuery) {
  return actors.filter((actor) =>
    cleanQuery.includes(actor.name.toLowerCase())
  );
}

function buildStreamSenseActorPairResult(actorA, actorB) {
  const sharedTitles = findSharedTitlesForActors(actorA.name, actorB.name);

  return `
    <div class="streamsense-card">
      <h3>${streamSenseSafe(actorA.name)} + ${streamSenseSafe(actorB.name)}</h3>

      ${
        sharedTitles.length
          ? `
            <p>
              These two actors are connected through shared projects already loaded into your VEDB database.
            </p>

            <div class="streamsense-pill-row">
              ${sharedTitles
                .map(
                  (titleName) =>
                    `<span class="streamsense-pill">${streamSenseSafe(
                      titleName
                    )}</span>`
                )
                .join('')}
            </div>
          `
          : `
            <p>
              These two actors are loaded in VEDB, but no shared project has been found yet in your current title data.
            </p>
          `
      }

      <button onclick="loadEntityByName('actor', '${escapeForClick(
        actorA.name
      )}')">
        Open ${streamSenseSafe(actorA.name)} →
      </button>

      <button onclick="loadEntityByName('actor', '${escapeForClick(
        actorB.name
      )}')">
        Open ${streamSenseSafe(actorB.name)} →
      </button>
    </div>

    ${
      sharedTitles.length
        ? `
          <h3 style="color: var(--gold); margin-top: 22px;">Shared Movie Pages</h3>
          <div class="streamsense-grid">
            ${sharedTitles
              .map((titleName) => {
                const foundTitle = titles.find(
                  (title) => title.name === titleName
                );

                if (!foundTitle) return '';

                return `
                <article class="streamsense-card">
                  <h3>${streamSenseSafe(foundTitle.name)}</h3>
                  <p>${streamSenseSafe(
                    foundTitle.summary || foundTitle.overview || ''
                  )}</p>
                  <p><b>Cast:</b> ${streamSenseSafe(
                    (foundTitle.cast || []).join(' • ')
                  )}</p>
                  <button onclick="loadEntityByName('title', '${escapeForClick(
                    foundTitle.name
                  )}')">Open Movie Sphere →</button>
                  <button onclick="openBehindTheScreenPage('${escapeForClick(
                    foundTitle.name
                  )}')">Behind the Screen →</button>
                </article>
              `;
              })
              .join('')}
          </div>
        `
        : ''
    }
  `;
}

installJacobBatalonAndStreamSenseWordingFix();
function installTailoredProfileIndividualDeleteUpgrade() {
  if (window.vedbTailoredIndividualDeleteInstalled) return;
  window.vedbTailoredIndividualDeleteInstalled = true;

  installTailoredDeleteStyles();

  tailoredProfileBox = function (profile) {
    const likedActors = profile.likedActors.length
      ? profile.likedActors
          .map((name) => buildTailoredDeleteChip(name, 'actor'))
          .join('')
      : `<span class="tailored-chip">No liked actors yet</span>`;

    const watchedTitles = profile.watchedTitles.length
      ? profile.watchedTitles
          .map((name) => buildTailoredDeleteChip(name, 'title'))
          .join('')
      : `<span class="tailored-chip">No watched titles yet</span>`;

    const actorViews = Object.entries(profile.actorViews || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);

    const titleViews = Object.entries(profile.titleViews || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);

    const actorViewChips = actorViews.length
      ? actorViews
          .map(([name, count]) =>
            buildTailoredDeleteChip(
              `${name} (${count} views)`,
              'actorView',
              name
            )
          )
          .join('')
      : `<span class="tailored-chip">No actor view signals yet</span>`;

    const titleViewChips = titleViews.length
      ? titleViews
          .map(([name, count]) =>
            buildTailoredDeleteChip(
              `${name} (${count} views)`,
              'titleView',
              name
            )
          )
          .join('')
      : `<span class="tailored-chip">No title view signals yet</span>`;

    return `
      <div class="tailored-profile-box">
        <h3>Your Tailored Profile</h3>
        <p>
          Like actors and mark titles as watched. VEDB uses that information to build better recommendations.
          You can now remove individual items without erasing your whole profile.
        </p>

        <h3>Actors You Like</h3>
        <div class="tailored-chip-row">${likedActors}</div>

        <h3>Titles You Marked Watched</h3>
        <div class="tailored-chip-row">${watchedTitles}</div>

        <h3>Actor Viewing Signals</h3>
        <p class="tailored-mini-note">
          These are actors VEDB noticed you opened. Removing one lowers its influence on Tailored Picks.
        </p>
        <div class="tailored-chip-row">${actorViewChips}</div>

        <h3>Title Viewing Signals</h3>
        <p class="tailored-mini-note">
          These are movies or shows VEDB noticed you opened. Removing one lowers its influence on Tailored Picks.
        </p>
        <div class="tailored-chip-row">${titleViewChips}</div>

        <h3>Quick Cleanup</h3>
        <div class="tailored-chip-row">
          <button class="tailored-small-delete" onclick="clearTailoredLikedActorsOnly(); openTailoredPicksPage();">
            Clear liked actors only
          </button>
          <button class="tailored-small-delete" onclick="clearTailoredWatchedTitlesOnly(); openTailoredPicksPage();">
            Clear watched titles only
          </button>
          <button class="tailored-small-delete" onclick="clearTailoredViewSignalsOnly(); openTailoredPicksPage();">
            Clear viewing signals only
          </button>
        </div>
      </div>
    `;
  };

  if (typeof openTailoredPicksPage === 'function') {
    openTailoredPicksPage();
  }
}

function installTailoredDeleteStyles() {
  if (document.getElementById('vedb-tailored-delete-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-tailored-delete-style';

  style.textContent = `
    .tailored-delete-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 8px 8px 12px;
      font-size: 13px;
      font-weight: 900;
    }

    .tailored-delete-chip-name {
      max-width: 260px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tailored-delete-x {
      border: 1px solid rgba(255, 120, 120, .75);
      background: rgba(255, 70, 70, .16);
      color: #ffb4b4;
      border-radius: 999px;
      width: 24px;
      height: 24px;
      font-size: 14px;
      line-height: 1;
      font-weight: 900;
      cursor: pointer;
    }

    .tailored-delete-x:hover {
      background: rgba(255, 70, 70, .3);
      color: white;
    }

    .tailored-small-delete {
      border: 1px solid rgba(255, 120, 120, .75);
      background: rgba(255, 70, 70, .16);
      color: #ffb4b4;
      border-radius: 999px;
      padding: 9px 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }

    .tailored-small-delete:hover {
      background: rgba(255, 70, 70, .3);
      color: white;
    }
  `;

  document.head.appendChild(style);
}

function buildTailoredDeleteChip(displayName, type, realName) {
  const itemName = realName || displayName;

  return `
    <span class="tailored-delete-chip">
      <span class="tailored-delete-chip-name">${safeTailoredText(
        displayName
      )}</span>
      <button
        class="tailored-delete-x"
        title="Remove"
        onclick="removeTailoredProfileItem('${safeTailoredClick(
          type
        )}', '${safeTailoredClick(itemName)}'); openTailoredPicksPage();"
      >
        ×
      </button>
    </span>
  `;
}

function removeTailoredProfileItem(type, name) {
  if (type === 'actor') {
    const liked = getTailoredArray('vedb_liked_actors');
    setTailoredArray(
      'vedb_liked_actors',
      liked.filter((item) => item !== name)
    );
  }

  if (type === 'title') {
    const watched = getTailoredArray('vedb_watched_titles');
    setTailoredArray(
      'vedb_watched_titles',
      watched.filter((item) => item !== name)
    );
  }

  if (type === 'actorView') {
    const views = getTailoredObject('vedb_actor_views');
    delete views[name];
    setTailoredObject('vedb_actor_views', views);
  }

  if (type === 'titleView') {
    const views = getTailoredObject('vedb_title_views');
    delete views[name];
    setTailoredObject('vedb_title_views', views);
  }
}

function clearTailoredLikedActorsOnly() {
  setTailoredArray('vedb_liked_actors', []);
}

function clearTailoredWatchedTitlesOnly() {
  setTailoredArray('vedb_watched_titles', []);
}

function clearTailoredViewSignalsOnly() {
  setTailoredObject('vedb_actor_views', {});
  setTailoredObject('vedb_title_views', {});
}

function safeTailoredClick(text) {
  return String(text || '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;');
}

installTailoredProfileIndividualDeleteUpgrade();
function installTailoredNoJumpDeleteFix() {
  if (window.vedbTailoredNoJumpFixInstalled) return;
  window.vedbTailoredNoJumpFixInstalled = true;

  installTailoredNoJumpStyles();
  replaceTailoredProfileBoxWithNoJumpVersion();
  installTailoredNoJumpClickHandler();

  if (
    window.location.hash === '#/tailored-picks' ||
    document
      .getElementById('tailoredPicksNavButton')
      ?.classList.contains('active')
  ) {
    refreshTailoredPicksWithoutJump();
  }
}

function installTailoredNoJumpStyles() {
  if (document.getElementById('vedb-tailored-no-jump-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-tailored-no-jump-style';

  style.textContent = `
    .tailored-delete-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(11, 132, 255, .18);
      color: white;
      border-radius: 999px;
      padding: 8px 8px 8px 12px;
      font-size: 13px;
      font-weight: 900;
    }

    .tailored-delete-chip-name {
      max-width: 260px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tailored-delete-x {
      border: 1px solid rgba(255, 120, 120, .75);
      background: rgba(255, 70, 70, .16);
      color: #ffb4b4;
      border-radius: 999px;
      width: 24px;
      height: 24px;
      font-size: 14px;
      line-height: 1;
      font-weight: 900;
      cursor: pointer;
    }

    .tailored-delete-x:hover {
      background: rgba(255, 70, 70, .3);
      color: white;
    }

    .tailored-small-delete {
      border: 1px solid rgba(255, 120, 120, .75);
      background: rgba(255, 70, 70, .16);
      color: #ffb4b4;
      border-radius: 999px;
      padding: 9px 12px;
      font-size: 13px;
      font-weight: 900;
      cursor: pointer;
    }

    .tailored-small-delete:hover {
      background: rgba(255, 70, 70, .3);
      color: white;
    }
  `;

  document.head.appendChild(style);
}

function replaceTailoredProfileBoxWithNoJumpVersion() {
  tailoredProfileBox = function (profile) {
    const likedActors = profile.likedActors.length
      ? profile.likedActors
          .map((name) => buildTailoredNoJumpDeleteChip(name, 'actor', name))
          .join('')
      : `<span class="tailored-chip">No liked actors yet</span>`;

    const watchedTitles = profile.watchedTitles.length
      ? profile.watchedTitles
          .map((name) => buildTailoredNoJumpDeleteChip(name, 'title', name))
          .join('')
      : `<span class="tailored-chip">No watched titles yet</span>`;

    const actorViews = Object.entries(profile.actorViews || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);

    const titleViews = Object.entries(profile.titleViews || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);

    const actorViewChips = actorViews.length
      ? actorViews
          .map(([name, count]) =>
            buildTailoredNoJumpDeleteChip(
              `${name} (${count} views)`,
              'actorView',
              name
            )
          )
          .join('')
      : `<span class="tailored-chip">No actor view signals yet</span>`;

    const titleViewChips = titleViews.length
      ? titleViews
          .map(([name, count]) =>
            buildTailoredNoJumpDeleteChip(
              `${name} (${count} views)`,
              'titleView',
              name
            )
          )
          .join('')
      : `<span class="tailored-chip">No title view signals yet</span>`;

    return `
      <div class="tailored-profile-box">
        <h3>Your Tailored Profile</h3>
        <p>
          Like actors and mark titles as watched. VEDB uses that information to build better recommendations.
          You can remove individual items without erasing your whole profile.
        </p>

        <h3>Actors You Like</h3>
        <div class="tailored-chip-row">${likedActors}</div>

        <h3>Titles You Marked Watched</h3>
        <div class="tailored-chip-row">${watchedTitles}</div>

        <h3>Actor Viewing Signals</h3>
        <p class="tailored-mini-note">
          These are actors VEDB noticed you opened. Removing one lowers its influence on Tailored Picks.
        </p>
        <div class="tailored-chip-row">${actorViewChips}</div>

        <h3>Title Viewing Signals</h3>
        <p class="tailored-mini-note">
          These are movies or shows VEDB noticed you opened. Removing one lowers its influence on Tailored Picks.
        </p>
        <div class="tailored-chip-row">${titleViewChips}</div>

        <h3>Quick Cleanup</h3>
        <div class="tailored-chip-row">
          <button class="tailored-small-delete" data-tailored-cleanup="likedActors" type="button">
            Clear liked actors only
          </button>

          <button class="tailored-small-delete" data-tailored-cleanup="watchedTitles" type="button">
            Clear watched titles only
          </button>

          <button class="tailored-small-delete" data-tailored-cleanup="viewSignals" type="button">
            Clear viewing signals only
          </button>
        </div>
      </div>
    `;
  };
}

function buildTailoredNoJumpDeleteChip(displayName, type, realName) {
  return `
    <span class="tailored-delete-chip">
      <span class="tailored-delete-chip-name">${tailoredNoJumpSafeText(
        displayName
      )}</span>
      <button
        class="tailored-delete-x"
        type="button"
        title="Remove"
        data-tailored-delete-type="${tailoredNoJumpSafeAttr(type)}"
        data-tailored-delete-name="${tailoredNoJumpSafeAttr(realName)}"
      >
        ×
      </button>
    </span>
  `;
}

function installTailoredNoJumpClickHandler() {
  document.addEventListener('click', function (event) {
    const deleteButton = event.target.closest('[data-tailored-delete-type]');
    const cleanupButton = event.target.closest('[data-tailored-cleanup]');

    if (deleteButton) {
      event.preventDefault();
      event.stopPropagation();

      const type = deleteButton.dataset.tailoredDeleteType;
      const name = deleteButton.dataset.tailoredDeleteName;

      removeTailoredProfileItemNoJump(type, name);
      refreshTailoredPicksWithoutJump();
      return;
    }

    if (cleanupButton) {
      event.preventDefault();
      event.stopPropagation();

      const cleanupType = cleanupButton.dataset.tailoredCleanup;

      if (cleanupType === 'likedActors') {
        setTailoredArray('vedb_liked_actors', []);
      }

      if (cleanupType === 'watchedTitles') {
        setTailoredArray('vedb_watched_titles', []);
      }

      if (cleanupType === 'viewSignals') {
        setTailoredObject('vedb_actor_views', {});
        setTailoredObject('vedb_title_views', {});
      }

      refreshTailoredPicksWithoutJump();
    }
  });
}

function removeTailoredProfileItemNoJump(type, name) {
  if (type === 'actor') {
    const liked = getTailoredArray('vedb_liked_actors');
    setTailoredArray(
      'vedb_liked_actors',
      liked.filter((item) => item !== name)
    );
  }

  if (type === 'title') {
    const watched = getTailoredArray('vedb_watched_titles');
    setTailoredArray(
      'vedb_watched_titles',
      watched.filter((item) => item !== name)
    );
  }

  if (type === 'actorView') {
    const views = getTailoredObject('vedb_actor_views');
    delete views[name];
    setTailoredObject('vedb_actor_views', views);
  }

  if (type === 'titleView') {
    const views = getTailoredObject('vedb_title_views');
    delete views[name];
    setTailoredObject('vedb_title_views', views);
  }
}

function refreshTailoredPicksWithoutJump() {
  const oldScrollY = window.scrollY;
  const content = document.querySelector('#sectionPage .section-page-content');

  if (!content) {
    if (typeof openTailoredPicksPage === 'function') {
      openTailoredPicksPage();
      setTimeout(() => window.scrollTo(0, oldScrollY), 0);
    }
    return;
  }

  content.innerHTML = buildTailoredPicksContentNoJump();

  requestAnimationFrame(function () {
    window.scrollTo(0, oldScrollY);
  });
}

function buildTailoredPicksContentNoJump() {
  const profile = getTailoredProfile();
  const titlePicks = getTailoredTitlePicks();
  const actorPicks = getTailoredActorPicks();
  const franchisePicks = getTailoredFranchisePicks();

  return `
    ${tailoredProfileBox(profile)}

    <h3 class="tailored-section-title">Recommended Titles</h3>
    <p class="tailored-mini-note">
      These are picked from actors you liked, titles you marked watched, cast connections, franchise links, and audience momentum.
    </p>
    ${tailoredCards(titlePicks, 'title')}

    <h3 class="tailored-section-title">Actors You May Like</h3>
    <p class="tailored-mini-note">
      These are based on actors you liked, actors you opened, and people connected to watched titles.
    </p>
    ${tailoredCards(actorPicks, 'actor')}

    <h3 class="tailored-section-title">Franchises To Explore</h3>
    <p class="tailored-mini-note">
      These are franchise worlds connected to your watched titles or preferred actors.
    </p>
    ${tailoredCards(franchisePicks, 'franchise')}

    <h3 class="tailored-section-title">Restart Personalization</h3>
    <p class="tailored-mini-note">
      This clears all Tailored Picks memory saved inside this browser.
    </p>
    <button class="back-button tailored-danger-button" onclick="clearTailoredPicksData(); refreshTailoredPicksWithoutJump();">
      Clear All Tailored Picks Data
    </button>
  `;
}

function tailoredNoJumpSafeText(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function tailoredNoJumpSafeAttr(text) {
  return tailoredNoJumpSafeText(text);
}

installTailoredNoJumpDeleteFix();
function installFullBodyOfWorkAddon() {
  if (window.vedbFullBodyOfWorkInstalled) return;
  window.vedbFullBodyOfWorkInstalled = true;

  installFullBodyOfWorkStyles();
  addFullBodyOfWorkButtonWrapper();
  addFullBodyOfWorkActorSection();
}

function installFullBodyOfWorkStyles() {
  if (document.getElementById('vedb-full-body-work-style')) return;

  const style = document.createElement('style');
  style.id = 'vedb-full-body-work-style';

  style.textContent = `
    .full-body-action-button {
      background: rgba(247, 180, 0, .18) !important;
      border: 1px solid rgba(247, 180, 0, .85) !important;
      color: var(--gold) !important;
    }

    .full-body-box {
      border: 1px solid rgba(0, 150, 255, .45);
      background: rgba(6, 25, 49, .88);
      border-radius: 18px;
      padding: 16px;
      margin: 14px 0;
    }

    .full-body-box h3 {
      color: var(--gold);
      margin-bottom: 10px;
    }

    .full-body-note {
      color: var(--muted);
      line-height: 1.45;
      margin: 8px 0 16px;
    }

    .full-body-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin-top: 14px;
    }

    .full-body-card {
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(6, 25, 49, .84);
      border-radius: 16px;
      padding: 16px;
    }

    .full-body-card h3 {
      color: var(--gold);
      margin-bottom: 8px;
    }

    .full-body-card p {
      color: #e4f0ff;
      line-height: 1.45;
      margin: 7px 0;
    }

    .full-body-pill {
      display: inline-block;
      border: 1px solid rgba(247, 180, 0, .45);
      color: var(--gold);
      border-radius: 999px;
      padding: 4px 9px;
      font-size: 12px;
      font-weight: 900;
      margin: 4px 4px 8px 0;
    }

    .full-body-card button,
    .full-body-form button {
      background: rgba(9, 57, 132, .72);
      border: 1px solid var(--blue);
      color: white;
      padding: 10px 15px;
      border-radius: 9px;
      font-weight: 900;
      font-size: 14px;
      margin: 6px 6px 0 0;
      cursor: pointer;
    }

    .full-body-form {
      border: 1px solid rgba(247, 180, 0, .35);
      background: rgba(247, 180, 0, .08);
      border-radius: 18px;
      padding: 16px;
      margin-top: 18px;
    }

    .full-body-form label {
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }

    .full-body-form input,
    .full-body-form select {
      width: 100%;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(4, 14, 28, .9);
      color: white;
      border-radius: 12px;
      padding: 11px;
      margin: 6px 0 12px;
      font-size: 15px;
    }

    @media (max-width: 900px) {
      .full-body-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  document.head.appendChild(style);
}

function addFullBodyOfWorkButtonWrapper() {
  if (window.vedbOriginalLoadEntityForFullBody) return;

  window.vedbOriginalLoadEntityForFullBody = loadEntity;

  loadEntity = function (entity) {
    window.vedbOriginalLoadEntityForFullBody(entity);
    addFullBodyOfWorkButton();
  };
}

function addFullBodyOfWorkButton() {
  const actions = document.querySelector('.actions');
  if (!actions || !currentEntity) return;

  document
    .querySelectorAll('.full-body-action-button')
    .forEach((button) => button.remove());

  if (currentEntity.mode === 'actor') {
    const button = document.createElement('button');
    button.className = 'full-body-action-button';
    button.textContent = 'Full Body of Work';
    button.onclick = function () {
      openFullBodyOfWorkPage(currentEntity.name);
    };

    actions.appendChild(button);
  }
}

function addFullBodyOfWorkActorSection() {
  if (window.vedbOriginalActorSectionForFullBody) return;

  window.vedbOriginalActorSectionForFullBody = actorSection;

  actorSection = function (sectionId) {
    if (sectionId === 'fullBodyOfWork') {
      return buildFullBodyOfWorkContent(currentEntity.name);
    }

    return window.vedbOriginalActorSectionForFullBody(sectionId);
  };
}

function openFullBodyOfWorkPage(actorName) {
  hideSearch();

  const actor = actors.find((item) => item.name === actorName);

  if (!actor) {
    $('mainPage').style.display = 'none';
    $('sectionPage').style.display = 'block';

    $('sectionPage').innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB FULL BODY OF WORK</div>
            <h2>Actor Not Found</h2>
          </div>
          <button class="back-button" onclick="backToSphere()">← Back</button>
        </div>

        <div class="section-page-content">
          <p>I could not find that actor in your VEDB actor list yet.</p>
        </div>
      </div>
    `;

    return;
  }

  $('mainPage').style.display = 'none';
  $('sectionPage').style.display = 'block';

  $('sectionPage').innerHTML = `
    <div class="glass section-page-inner">
      <div class="section-page-header">
        <div>
          <div class="blue-label">VEDB FULL BODY OF WORK</div>
          <h2>${fullBodySafe(actor.name)} — Full Body of Work</h2>
        </div>
        <button class="back-button" onclick="backToSphere()">← Back to Actor Sphere</button>
      </div>

      <div class="section-page-content">
        ${buildFullBodyOfWorkContent(actor.name)}
      </div>
    </div>
  `;

  window.location.hash =
    '#/actor/' + makeSlug(actor.name) + '/full-body-of-work';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildFullBodyOfWorkContent(actorName) {
  const actor = actors.find((item) => item.name === actorName);
  const credits = getFullBodyOfWorkForActor(actorName);

  if (!actor) {
    return `<p>Actor not found.</p>`;
  }

  return `
    <div class="full-body-box">
      <h3>Signature Work vs. Full Body of Work</h3>
      <p class="full-body-note">
        <b>Signature Work</b> should be selected highlights only. <b>Full Body of Work</b> is where VEDB lists every movie, show, voice role, cameo, producer credit, director credit, or other credit you add for this actor.
      </p>

      <p>
        <span class="full-body-pill">${
          credits.length
        } credits currently loaded</span>
        <span class="full-body-pill">${
          (actor.knownFor || []).length
        } signature titles</span>
      </p>
    </div>

    <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

    ${
      credits.length === 0
        ? `<div class="full-body-box"><p>No credits loaded yet.</p></div>`
        : `<div class="full-body-grid">
            ${credits.map((credit) => buildFullBodyCreditCard(credit)).join('')}
          </div>`
    }

    ${buildAddFullBodyCreditForm(actorName)}
  `;
}

function getFullBodyOfWorkForActor(actorName) {
  const actor = actors.find((item) => item.name === actorName);
  const rows = [];

  if (!actor) return rows;

  (actor.knownFor || []).forEach(([titleName, year]) => {
    rows.push({
      actorName,
      title: titleName,
      year: year || '',
      type: 'Signature Work',
      role: findRoleForActorInTitle(actorName, titleName) || 'Performer',
      source: 'Actor signature list',
      loadedTitle: !!titles.find((title) => title.name === titleName),
    });
  });

  titles.forEach((title) => {
    if ((title.cast || []).includes(actorName)) {
      rows.push({
        actorName,
        title: title.name,
        year: title.facts?.['Release Year'] || '',
        type: inferCreditType(title),
        role: findRoleForActorInTitle(actorName, title.name) || 'Cast member',
        source: 'Loaded VEDB title record',
        loadedTitle: true,
      });
    }
  });

  getManualFullBodyCredits()
    .filter((item) => item.actorName === actorName)
    .forEach((item) => rows.push(item));

  return dedupeFullBodyCredits(rows).sort((a, b) => {
    const yearA = Number(a.year) || 0;
    const yearB = Number(b.year) || 0;

    if (yearA !== yearB) return yearB - yearA;
    return String(a.title).localeCompare(String(b.title));
  });
}

function buildFullBodyCreditCard(credit) {
  const titleExists = titles.some((title) => title.name === credit.title);

  return `
    <article class="full-body-card">
      <h3>${fullBodySafe(credit.title)}</h3>

      <span class="full-body-pill">${fullBodySafe(
        credit.type || 'Credit'
      )}</span>
      ${
        credit.year
          ? `<span class="full-body-pill">${fullBodySafe(credit.year)}</span>`
          : ''
      }

      <p><b>Role / Credit:</b> ${fullBodySafe(credit.role || 'To be added')}</p>
      <p><b>Source inside VEDB:</b> ${fullBodySafe(
        credit.source || 'Manual credit'
      )}</p>

      ${
        titleExists
          ? `<button onclick="loadEntityByName('title', '${escapeForClick(
              credit.title
            )}')">Open Title Sphere →</button>`
          : `<p class="full-body-note">This credit is listed, but a full title page has not been built yet.</p>`
      }
    </article>
  `;
}

function buildAddFullBodyCreditForm(actorName) {
  return `
    <div class="full-body-form">
      <h3>Add a Credit for ${fullBodySafe(actorName)}</h3>
      <p class="full-body-note">
        This lets you add more credits without rewriting the whole JavaScript. It saves in this browser.
      </p>

      <label>Title name</label>
      <input id="fullBodyAddTitle" placeholder="Example: New Movie or TV Show">

      <label>Year</label>
      <input id="fullBodyAddYear" placeholder="Example: 2026">

      <label>Credit type</label>
      <select id="fullBodyAddType">
        <option value="Movie">Movie</option>
        <option value="TV Series">TV Series</option>
        <option value="Voice Role">Voice Role</option>
        <option value="Cameo">Cameo</option>
        <option value="Producer Credit">Producer Credit</option>
        <option value="Director Credit">Director Credit</option>
        <option value="Writer Credit">Writer Credit</option>
        <option value="Other Credit">Other Credit</option>
      </select>

      <label>Role / character / job</label>
      <input id="fullBodyAddRole" placeholder="Example: Peter Parker / Spider-Man">

      <button onclick="saveFullBodyCredit('${escapeForClick(actorName)}')">
        Save Credit
      </button>
    </div>
  `;
}

function saveFullBodyCredit(actorName) {
  const title = $('fullBodyAddTitle')?.value.trim();
  const year = $('fullBodyAddYear')?.value.trim();
  const type = $('fullBodyAddType')?.value || 'Movie';
  const role = $('fullBodyAddRole')?.value.trim();

  if (!title) {
    alert('Please add a title name first.');
    return;
  }

  const credits = getManualFullBodyCredits();

  credits.unshift({
    actorName,
    title,
    year,
    type,
    role: role || 'Credit to be added',
    source: 'Manually added VEDB credit',
    loadedTitle: !!titles.find((item) => item.name === title),
  });

  localStorage.setItem(
    'vedb_full_body_work_credits',
    JSON.stringify(credits.slice(0, 500))
  );

  openFullBodyOfWorkPage(actorName);
}

function getManualFullBodyCredits() {
  try {
    const raw = localStorage.getItem('vedb_full_body_work_credits');
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function dedupeFullBodyCredits(rows) {
  const map = new Map();

  rows.forEach((row) => {
    const key = String(
      row.actorName + '::' + row.title + '::' + row.year + '::' + row.role
    ).toLowerCase();

    if (!map.has(key)) {
      map.set(key, row);
      return;
    }

    const existing = map.get(key);

    if (!existing.loadedTitle && row.loadedTitle) {
      map.set(key, row);
    }
  });

  return Array.from(map.values());
}

function findRoleForActorInTitle(actorName, titleName) {
  const title = titles.find((item) => item.name === titleName);
  if (!title) return '';

  const index = (title.cast || []).indexOf(actorName);

  if (index >= 0 && title.characters && title.characters[index]) {
    return title.characters[index];
  }

  return '';
}

function inferCreditType(title) {
  const job = String(title.job || '').toLowerCase();

  if (job.includes('tv')) return 'TV Series';
  if (job.includes('series')) return 'TV Series';
  if (job.includes('movie')) return 'Movie';

  return 'Title Credit';
}

function fullBodySafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

installFullBodyOfWorkAddon();
function installSeededFullBodyOfWorkLibraryV1() {
  if (window.vedbSeededFullBodyLibraryInstalled) return;
  window.vedbSeededFullBodyLibraryInstalled = true;

  window.vedbSeededFullBodyCredits = [
    /* ZENDAYA */
    {
      actorName: 'Zendaya',
      title: 'Super Buddies',
      year: 2013,
      type: 'Voice Role',
      role: 'Lollipop',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Spider-Man: Homecoming',
      year: 2017,
      type: 'Movie',
      role: 'MJ',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'The Greatest Showman',
      year: 2017,
      type: 'Movie',
      role: 'Anne Wheeler',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Duck Duck Goose',
      year: 2018,
      type: 'Voice Role',
      role: 'Chi',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Smallfoot',
      year: 2018,
      type: 'Voice Role',
      role: 'Meechee',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Spider-Man: Far From Home',
      year: 2019,
      type: 'Movie',
      role: 'MJ',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Malcolm & Marie',
      year: 2021,
      type: 'Movie',
      role: 'Marie',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Space Jam: A New Legacy',
      year: 2021,
      type: 'Voice Role',
      role: 'Lola Bunny',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Dune',
      year: 2021,
      type: 'Movie',
      role: 'Chani',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Spider-Man: No Way Home',
      year: 2021,
      type: 'Movie',
      role: 'MJ',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Dune: Part Two',
      year: 2024,
      type: 'Movie',
      role: 'Chani',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Zendaya',
      title: 'Challengers',
      year: 2024,
      type: 'Movie',
      role: 'Tashi Duncan',
      source: 'Seeded VEDB credit library',
    },

    /* DENZEL WASHINGTON */
    {
      actorName: 'Denzel Washington',
      title: 'Cry Freedom',
      year: 1987,
      type: 'Movie',
      role: 'Steve Biko',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Glory',
      year: 1989,
      type: 'Movie',
      role: 'Pvt. Silas Trip',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Malcolm X',
      year: 1992,
      type: 'Movie',
      role: 'Malcolm X',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Philadelphia',
      year: 1993,
      type: 'Movie',
      role: 'Joe Miller',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Crimson Tide',
      year: 1995,
      type: 'Movie',
      role: 'Lt. Cmdr. Ron Hunter',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'The Hurricane',
      year: 1999,
      type: 'Movie',
      role: 'Rubin Carter',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Remember the Titans',
      year: 2000,
      type: 'Movie',
      role: 'Coach Herman Boone',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Training Day',
      year: 2001,
      type: 'Movie',
      role: 'Alonzo Harris',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'John Q',
      year: 2002,
      type: 'Movie',
      role: 'John Quincy Archibald',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Man on Fire',
      year: 2004,
      type: 'Movie',
      role: 'John Creasy',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Inside Man',
      year: 2006,
      type: 'Movie',
      role: 'Detective Keith Frazier',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'American Gangster',
      year: 2007,
      type: 'Movie',
      role: 'Frank Lucas',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'The Book of Eli',
      year: 2010,
      type: 'Movie',
      role: 'Eli',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Flight',
      year: 2012,
      type: 'Movie',
      role: 'Whip Whitaker',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'The Equalizer',
      year: 2014,
      type: 'Movie',
      role: 'Robert McCall',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'Fences',
      year: 2016,
      type: 'Movie',
      role: 'Troy Maxson / director',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'The Equalizer 2',
      year: 2018,
      type: 'Movie',
      role: 'Robert McCall',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'The Tragedy of Macbeth',
      year: 2021,
      type: 'Movie',
      role: 'Lord Macbeth',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Denzel Washington',
      title: 'The Equalizer 3',
      year: 2023,
      type: 'Movie',
      role: 'Robert McCall',
      source: 'Seeded VEDB credit library',
    },

    /* MERYL STREEP */
    {
      actorName: 'Meryl Streep',
      title: 'Julia',
      year: 1977,
      type: 'Movie',
      role: 'Anne Marie',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Deer Hunter',
      year: 1978,
      type: 'Movie',
      role: 'Linda',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Kramer vs. Kramer',
      year: 1979,
      type: 'Movie',
      role: 'Joanna Kramer',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: "The French Lieutenant's Woman",
      year: 1981,
      type: 'Movie',
      role: 'Sarah / Anna',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: "Sophie's Choice",
      year: 1982,
      type: 'Movie',
      role: 'Sophie Zawistowski',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Out of Africa',
      year: 1985,
      type: 'Movie',
      role: 'Karen Blixen',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Postcards from the Edge',
      year: 1990,
      type: 'Movie',
      role: 'Suzanne Vale',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Bridges of Madison County',
      year: 1995,
      type: 'Movie',
      role: 'Francesca Johnson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Hours',
      year: 2002,
      type: 'Movie',
      role: 'Clarissa Vaughan',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Manchurian Candidate',
      year: 2004,
      type: 'Movie',
      role: 'Eleanor Shaw',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Devil Wears Prada',
      year: 2006,
      type: 'Movie',
      role: 'Miranda Priestly',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Mamma Mia!',
      year: 2008,
      type: 'Movie',
      role: 'Donna Sheridan',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Doubt',
      year: 2008,
      type: 'Movie',
      role: 'Sister Aloysius Beauvier',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Julie & Julia',
      year: 2009,
      type: 'Movie',
      role: 'Julia Child',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Iron Lady',
      year: 2011,
      type: 'Movie',
      role: 'Margaret Thatcher',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Into the Woods',
      year: 2014,
      type: 'Movie',
      role: 'The Witch',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'The Post',
      year: 2017,
      type: 'Movie',
      role: 'Katharine Graham',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Mamma Mia! Here We Go Again',
      year: 2018,
      type: 'Movie',
      role: 'Donna Sheridan',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: 'Little Women',
      year: 2019,
      type: 'Movie',
      role: 'Aunt March',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Meryl Streep',
      title: "Don't Look Up",
      year: 2021,
      type: 'Movie',
      role: 'President Janie Orlean',
      source: 'Seeded VEDB credit library',
    },

    /* LEONARDO DICAPRIO */
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Critters 3',
      year: 1991,
      type: 'Movie',
      role: 'Josh',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: "What's Eating Gilbert Grape",
      year: 1993,
      type: 'Movie',
      role: 'Arnie Grape',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Basketball Diaries',
      year: 1995,
      type: 'Movie',
      role: 'Jim Carroll',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Romeo + Juliet',
      year: 1996,
      type: 'Movie',
      role: 'Romeo',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Titanic',
      year: 1997,
      type: 'Movie',
      role: 'Jack Dawson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Man in the Iron Mask',
      year: 1998,
      type: 'Movie',
      role: 'King Louis XIV / Philippe',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Beach',
      year: 2000,
      type: 'Movie',
      role: 'Richard',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Gangs of New York',
      year: 2002,
      type: 'Movie',
      role: 'Amsterdam Vallon',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Catch Me If You Can',
      year: 2002,
      type: 'Movie',
      role: 'Frank Abagnale Jr.',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Aviator',
      year: 2004,
      type: 'Movie',
      role: 'Howard Hughes',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Departed',
      year: 2006,
      type: 'Movie',
      role: 'Billy Costigan',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Blood Diamond',
      year: 2006,
      type: 'Movie',
      role: 'Danny Archer',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Revolutionary Road',
      year: 2008,
      type: 'Movie',
      role: 'Frank Wheeler',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Shutter Island',
      year: 2010,
      type: 'Movie',
      role: 'Teddy Daniels',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Inception',
      year: 2010,
      type: 'Movie',
      role: 'Dom Cobb',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Django Unchained',
      year: 2012,
      type: 'Movie',
      role: 'Calvin Candie',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Great Gatsby',
      year: 2013,
      type: 'Movie',
      role: 'Jay Gatsby',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Wolf of Wall Street',
      year: 2013,
      type: 'Movie',
      role: 'Jordan Belfort',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'The Revenant',
      year: 2015,
      type: 'Movie',
      role: 'Hugh Glass',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Once Upon a Time in Hollywood',
      year: 2019,
      type: 'Movie',
      role: 'Rick Dalton',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: "Don't Look Up",
      year: 2021,
      type: 'Movie',
      role: 'Dr. Randall Mindy',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Leonardo DiCaprio',
      title: 'Killers of the Flower Moon',
      year: 2023,
      type: 'Movie',
      role: 'Ernest Burkhart',
      source: 'Seeded VEDB credit library',
    },

    /* VIOLA DAVIS */
    {
      actorName: 'Viola Davis',
      title: 'Doubt',
      year: 2008,
      type: 'Movie',
      role: 'Mrs. Miller',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'The Help',
      year: 2011,
      type: 'Movie',
      role: 'Aibileen Clark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: "Won't Back Down",
      year: 2012,
      type: 'Movie',
      role: 'Nona Alberts',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Prisoners',
      year: 2013,
      type: 'Movie',
      role: 'Nancy Birch',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Get on Up',
      year: 2014,
      type: 'Movie',
      role: 'Susie Brown',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'How to Get Away with Murder',
      year: 2014,
      type: 'TV Series',
      role: 'Annalise Keating',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Blackhat',
      year: 2015,
      type: 'Movie',
      role: 'Carol Barrett',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Lila & Eve',
      year: 2015,
      type: 'Movie',
      role: 'Lila',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Suicide Squad',
      year: 2016,
      type: 'Movie',
      role: 'Amanda Waller',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Fences',
      year: 2016,
      type: 'Movie',
      role: 'Rose Maxson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Widows',
      year: 2018,
      type: 'Movie',
      role: 'Veronica Rawlings',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: "Ma Rainey's Black Bottom",
      year: 2020,
      type: 'Movie',
      role: 'Ma Rainey',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'The Suicide Squad',
      year: 2021,
      type: 'Movie',
      role: 'Amanda Waller',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'The Woman King',
      year: 2022,
      type: 'Movie',
      role: 'Nanisca',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'The First Lady',
      year: 2022,
      type: 'TV Series',
      role: 'Michelle Obama',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'The Hunger Games: The Ballad of Songbirds & Snakes',
      year: 2023,
      type: 'Movie',
      role: 'Dr. Volumnia Gaul',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Viola Davis',
      title: 'Air',
      year: 2023,
      type: 'Movie',
      role: 'Deloris Jordan',
      source: 'Seeded VEDB credit library',
    },

    /* ROBERT DOWNEY JR. */
    {
      actorName: 'Robert Downey Jr.',
      title: 'Less than Zero',
      year: 1987,
      type: 'Movie',
      role: 'Julian Wells',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Chaplin',
      year: 1992,
      type: 'Movie',
      role: 'Charlie Chaplin',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Natural Born Killers',
      year: 1994,
      type: 'Movie',
      role: 'Wayne Gale',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Restoration',
      year: 1995,
      type: 'Movie',
      role: 'Robert Merivel',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'U.S. Marshals',
      year: 1998,
      type: 'Movie',
      role: 'John Royce',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Wonder Boys',
      year: 2000,
      type: 'Movie',
      role: 'Terry Crabtree',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Gothika',
      year: 2003,
      type: 'Movie',
      role: 'Pete Graham',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Kiss Kiss Bang Bang',
      year: 2005,
      type: 'Movie',
      role: 'Harry Lockhart',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Zodiac',
      year: 2007,
      type: 'Movie',
      role: 'Paul Avery',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Iron Man',
      year: 2008,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Tropic Thunder',
      year: 2008,
      type: 'Movie',
      role: 'Kirk Lazarus',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Sherlock Holmes',
      year: 2009,
      type: 'Movie',
      role: 'Sherlock Holmes',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Iron Man 2',
      year: 2010,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'The Avengers',
      year: 2012,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Iron Man 3',
      year: 2013,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Avengers: Age of Ultron',
      year: 2015,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Captain America: Civil War',
      year: 2016,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Spider-Man: Homecoming',
      year: 2017,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Avengers: Infinity War',
      year: 2018,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Avengers: Endgame',
      year: 2019,
      type: 'Movie',
      role: 'Tony Stark',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Dolittle',
      year: 2020,
      type: 'Movie',
      role: 'Dr. John Dolittle',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Robert Downey Jr.',
      title: 'Oppenheimer',
      year: 2023,
      type: 'Movie',
      role: 'Lewis Strauss',
      source: 'Seeded VEDB credit library',
    },

    /* SCARLETT JOHANSSON */
    {
      actorName: 'Scarlett Johansson',
      title: 'The Horse Whisperer',
      year: 1998,
      type: 'Movie',
      role: 'Grace MacLean',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Ghost World',
      year: 2001,
      type: 'Movie',
      role: 'Rebecca',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Lost in Translation',
      year: 2003,
      type: 'Movie',
      role: 'Charlotte',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Girl with a Pearl Earring',
      year: 2003,
      type: 'Movie',
      role: 'Griet',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Match Point',
      year: 2005,
      type: 'Movie',
      role: 'Nola Rice',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'The Prestige',
      year: 2006,
      type: 'Movie',
      role: 'Olivia Wenscombe',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Vicky Cristina Barcelona',
      year: 2008,
      type: 'Movie',
      role: 'Cristina',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Iron Man 2',
      year: 2010,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'The Avengers',
      year: 2012,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Her',
      year: 2013,
      type: 'Voice Role',
      role: 'Samantha',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Captain America: The Winter Soldier',
      year: 2014,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Lucy',
      year: 2014,
      type: 'Movie',
      role: 'Lucy',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Avengers: Age of Ultron',
      year: 2015,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Captain America: Civil War',
      year: 2016,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Sing',
      year: 2016,
      type: 'Voice Role',
      role: 'Ash',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Ghost in the Shell',
      year: 2017,
      type: 'Movie',
      role: 'Major Mira Killian',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Avengers: Infinity War',
      year: 2018,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Avengers: Endgame',
      year: 2019,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Marriage Story',
      year: 2019,
      type: 'Movie',
      role: 'Nicole Barber',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Jojo Rabbit',
      year: 2019,
      type: 'Movie',
      role: 'Rosie Betzler',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Black Widow',
      year: 2021,
      type: 'Movie',
      role: 'Natasha Romanoff',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Scarlett Johansson',
      title: 'Asteroid City',
      year: 2023,
      type: 'Movie',
      role: 'Midge Campbell',
      source: 'Seeded VEDB credit library',
    },

    /* TOM CRUISE */
    {
      actorName: 'Tom Cruise',
      title: 'Endless Love',
      year: 1981,
      type: 'Movie',
      role: 'Billy',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Risky Business',
      year: 1983,
      type: 'Movie',
      role: 'Joel Goodsen',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Legend',
      year: 1985,
      type: 'Movie',
      role: 'Jack',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Top Gun',
      year: 1986,
      type: 'Movie',
      role: 'Pete Mitchell',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'The Color of Money',
      year: 1986,
      type: 'Movie',
      role: 'Vincent Lauria',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Rain Man',
      year: 1988,
      type: 'Movie',
      role: 'Charlie Babbitt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Born on the Fourth of July',
      year: 1989,
      type: 'Movie',
      role: 'Ron Kovic',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Days of Thunder',
      year: 1990,
      type: 'Movie',
      role: 'Cole Trickle',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'A Few Good Men',
      year: 1992,
      type: 'Movie',
      role: 'Daniel Kaffee',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'The Firm',
      year: 1993,
      type: 'Movie',
      role: 'Mitch McDeere',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Interview with the Vampire',
      year: 1994,
      type: 'Movie',
      role: 'Lestat de Lioncourt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible',
      year: 1996,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Jerry Maguire',
      year: 1996,
      type: 'Movie',
      role: 'Jerry Maguire',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Eyes Wide Shut',
      year: 1999,
      type: 'Movie',
      role: 'Bill Harford',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Magnolia',
      year: 1999,
      type: 'Movie',
      role: 'Frank T.J. Mackey',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible 2',
      year: 2000,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Vanilla Sky',
      year: 2001,
      type: 'Movie',
      role: 'David Aames',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Minority Report',
      year: 2002,
      type: 'Movie',
      role: 'John Anderton',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'The Last Samurai',
      year: 2003,
      type: 'Movie',
      role: 'Nathan Algren',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Collateral',
      year: 2004,
      type: 'Movie',
      role: 'Vincent',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'War of the Worlds',
      year: 2005,
      type: 'Movie',
      role: 'Ray Ferrier',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible III',
      year: 2006,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Tropic Thunder',
      year: 2008,
      type: 'Movie',
      role: 'Les Grossman',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Valkyrie',
      year: 2008,
      type: 'Movie',
      role: 'Claus von Stauffenberg',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Knight and Day',
      year: 2010,
      type: 'Movie',
      role: 'Roy Miller',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible – Ghost Protocol',
      year: 2011,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Jack Reacher',
      year: 2012,
      type: 'Movie',
      role: 'Jack Reacher',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Oblivion',
      year: 2013,
      type: 'Movie',
      role: 'Jack Harper',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Edge of Tomorrow',
      year: 2014,
      type: 'Movie',
      role: 'William Cage',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible – Rogue Nation',
      year: 2015,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible – Fallout',
      year: 2018,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Top Gun: Maverick',
      year: 2022,
      type: 'Movie',
      role: 'Pete Mitchell',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible – Dead Reckoning',
      year: 2023,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Cruise',
      title: 'Mission: Impossible – The Final Reckoning',
      year: 2025,
      type: 'Movie',
      role: 'Ethan Hunt',
      source: 'Seeded VEDB credit library',
    },

    /* JULIA ROBERTS */
    {
      actorName: 'Julia Roberts',
      title: 'Mystic Pizza',
      year: 1988,
      type: 'Movie',
      role: 'Daisy',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Steel Magnolias',
      year: 1989,
      type: 'Movie',
      role: 'Shelby Eatenton Latcherie',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Pretty Woman',
      year: 1990,
      type: 'Movie',
      role: 'Vivian Ward',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Flatliners',
      year: 1990,
      type: 'Movie',
      role: 'Rachel Mannus',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Sleeping with the Enemy',
      year: 1991,
      type: 'Movie',
      role: 'Laura Burney / Sara Waters',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Hook',
      year: 1991,
      type: 'Movie',
      role: 'Tinker Bell',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'The Pelican Brief',
      year: 1993,
      type: 'Movie',
      role: 'Darby Shaw',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: "My Best Friend's Wedding",
      year: 1997,
      type: 'Movie',
      role: 'Julianne Potter',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Conspiracy Theory',
      year: 1997,
      type: 'Movie',
      role: 'Alice Sutton',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Stepmom',
      year: 1998,
      type: 'Movie',
      role: 'Isabel Kelly',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Notting Hill',
      year: 1999,
      type: 'Movie',
      role: 'Anna Scott',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Runaway Bride',
      year: 1999,
      type: 'Movie',
      role: 'Maggie Carpenter',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Erin Brockovich',
      year: 2000,
      type: 'Movie',
      role: 'Erin Brockovich',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: "Ocean's Eleven",
      year: 2001,
      type: 'Movie',
      role: 'Tess Ocean',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Mona Lisa Smile',
      year: 2003,
      type: 'Movie',
      role: 'Katherine Watson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Closer',
      year: 2004,
      type: 'Movie',
      role: 'Anna Cameron',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: "Ocean's Twelve",
      year: 2004,
      type: 'Movie',
      role: 'Tess Ocean',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: "Charlie Wilson's War",
      year: 2007,
      type: 'Movie',
      role: 'Joanne Herring',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Eat Pray Love',
      year: 2010,
      type: 'Movie',
      role: 'Elizabeth Gilbert',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Larry Crowne',
      year: 2011,
      type: 'Movie',
      role: 'Mercedes Tainot',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Mirror Mirror',
      year: 2012,
      type: 'Movie',
      role: 'Queen Clementianna',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'August: Osage County',
      year: 2013,
      type: 'Movie',
      role: 'Barbara Weston-Fordham',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Wonder',
      year: 2017,
      type: 'Movie',
      role: 'Isabel Pullman',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Ticket to Paradise',
      year: 2022,
      type: 'Movie',
      role: 'Georgia Cotton',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Julia Roberts',
      title: 'Leave the World Behind',
      year: 2023,
      type: 'Movie',
      role: 'Amanda Sandford',
      source: 'Seeded VEDB credit library',
    },

    /* MORGAN FREEMAN */
    {
      actorName: 'Morgan Freeman',
      title: 'Street Smart',
      year: 1987,
      type: 'Movie',
      role: 'Fast Black',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Driving Miss Daisy',
      year: 1989,
      type: 'Movie',
      role: 'Hoke Colburn',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Glory',
      year: 1989,
      type: 'Movie',
      role: 'Sgt. Maj. John Rawlins',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'The Shawshank Redemption',
      year: 1994,
      type: 'Movie',
      role: 'Ellis Boyd Redding',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Se7en',
      year: 1995,
      type: 'Movie',
      role: 'Detective Somerset',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Amistad',
      year: 1997,
      type: 'Movie',
      role: 'Theodore Joadson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Deep Impact',
      year: 1998,
      type: 'Movie',
      role: 'President Tom Beck',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Along Came a Spider',
      year: 2001,
      type: 'Movie',
      role: 'Alex Cross',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Bruce Almighty',
      year: 2003,
      type: 'Movie',
      role: 'God',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Million Dollar Baby',
      year: 2004,
      type: 'Movie',
      role: 'Eddie Dupris',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Batman Begins',
      year: 2005,
      type: 'Movie',
      role: 'Lucius Fox',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'The Bucket List',
      year: 2007,
      type: 'Movie',
      role: 'Carter Chambers',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Wanted',
      year: 2008,
      type: 'Movie',
      role: 'Sloan',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'The Dark Knight',
      year: 2008,
      type: 'Movie',
      role: 'Lucius Fox',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Invictus',
      year: 2009,
      type: 'Movie',
      role: 'Nelson Mandela',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'RED',
      year: 2010,
      type: 'Movie',
      role: 'Joe Matheson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'The Dark Knight Rises',
      year: 2012,
      type: 'Movie',
      role: 'Lucius Fox',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Olympus Has Fallen',
      year: 2013,
      type: 'Movie',
      role: 'Speaker Allan Trumbull',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Oblivion',
      year: 2013,
      type: 'Movie',
      role: 'Malcolm Beech',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Now You See Me',
      year: 2013,
      type: 'Movie',
      role: 'Thaddeus Bradley',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Lucy',
      year: 2014,
      type: 'Movie',
      role: 'Professor Norman',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'London Has Fallen',
      year: 2016,
      type: 'Movie',
      role: 'Allan Trumbull',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Morgan Freeman',
      title: 'Going in Style',
      year: 2017,
      type: 'Movie',
      role: 'Willie Davis',
      source: 'Seeded VEDB credit library',
    },

    /* KEANU REEVES */
    {
      actorName: 'Keanu Reeves',
      title: "Bill & Ted's Excellent Adventure",
      year: 1989,
      type: 'Movie',
      role: 'Ted Logan',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'Point Break',
      year: 1991,
      type: 'Movie',
      role: 'Johnny Utah',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: "Bram Stoker's Dracula",
      year: 1992,
      type: 'Movie',
      role: 'Jonathan Harker',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'Speed',
      year: 1994,
      type: 'Movie',
      role: 'Jack Traven',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'Johnny Mnemonic',
      year: 1995,
      type: 'Movie',
      role: 'Johnny',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: "The Devil's Advocate",
      year: 1997,
      type: 'Movie',
      role: 'Kevin Lomax',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Matrix',
      year: 1999,
      type: 'Movie',
      role: 'Neo',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Replacements',
      year: 2000,
      type: 'Movie',
      role: 'Shane Falco',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Matrix Reloaded',
      year: 2003,
      type: 'Movie',
      role: 'Neo',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Matrix Revolutions',
      year: 2003,
      type: 'Movie',
      role: 'Neo',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'Constantine',
      year: 2005,
      type: 'Movie',
      role: 'John Constantine',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'A Scanner Darkly',
      year: 2006,
      type: 'Movie',
      role: 'Bob Arctor',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Lake House',
      year: 2006,
      type: 'Movie',
      role: 'Alex Wyler',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Day the Earth Stood Still',
      year: 2008,
      type: 'Movie',
      role: 'Klaatu',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: '47 Ronin',
      year: 2013,
      type: 'Movie',
      role: 'Kai',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'John Wick',
      year: 2014,
      type: 'Movie',
      role: 'John Wick',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'John Wick: Chapter 2',
      year: 2017,
      type: 'Movie',
      role: 'John Wick',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'John Wick: Chapter 3 — Parabellum',
      year: 2019,
      type: 'Movie',
      role: 'John Wick',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'Toy Story 4',
      year: 2019,
      type: 'Voice Role',
      role: 'Duke Caboom',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'The Matrix Resurrections',
      year: 2021,
      type: 'Movie',
      role: 'Neo',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Keanu Reeves',
      title: 'John Wick: Chapter 4',
      year: 2023,
      type: 'Movie',
      role: 'John Wick',
      source: 'Seeded VEDB credit library',
    },

    /* TOM HOLLAND */
    {
      actorName: 'Tom Holland',
      title: 'The Impossible',
      year: 2012,
      type: 'Movie',
      role: 'Lucas Bennett',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'How I Live Now',
      year: 2013,
      type: 'Movie',
      role: 'Isaac',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'In the Heart of the Sea',
      year: 2015,
      type: 'Movie',
      role: 'Thomas Nickerson',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Tweet',
      year: 2015,
      type: 'Short Film',
      role: 'Director',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Captain America: Civil War',
      year: 2016,
      type: 'Movie',
      role: 'Peter Parker / Spider-Man',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'The Lost City of Z',
      year: 2016,
      type: 'Movie',
      role: 'Jack Fawcett',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Spider-Man: Homecoming',
      year: 2017,
      type: 'Movie',
      role: 'Peter Parker / Spider-Man',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'The Current War',
      year: 2017,
      type: 'Movie',
      role: 'Samuel Insull',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Avengers: Infinity War',
      year: 2018,
      type: 'Movie',
      role: 'Peter Parker / Spider-Man',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Avengers: Endgame',
      year: 2019,
      type: 'Movie',
      role: 'Peter Parker / Spider-Man',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Spider-Man: Far From Home',
      year: 2019,
      type: 'Movie',
      role: 'Peter Parker / Spider-Man',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Spies in Disguise',
      year: 2019,
      type: 'Voice Role',
      role: 'Walter Beckett',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Onward',
      year: 2020,
      type: 'Voice Role',
      role: 'Ian Lightfoot',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'The Devil All the Time',
      year: 2020,
      type: 'Movie',
      role: 'Arvin Russell',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Cherry',
      year: 2021,
      type: 'Movie',
      role: 'Cherry',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Chaos Walking',
      year: 2021,
      type: 'Movie',
      role: 'Todd Hewitt',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Spider-Man: No Way Home',
      year: 2021,
      type: 'Movie',
      role: 'Peter Parker / Spider-Man',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'Uncharted',
      year: 2022,
      type: 'Movie',
      role: 'Nathan Drake',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Tom Holland',
      title: 'The Crowded Room',
      year: 2023,
      type: 'TV Series',
      role: 'Danny Sullivan',
      source: 'Seeded VEDB credit library',
    },

    /* JACOB BATALON */
    {
      actorName: 'Jacob Batalon',
      title: 'North Woods',
      year: 2017,
      type: 'Movie',
      role: 'Cooper',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Spider-Man: Homecoming',
      year: 2017,
      type: 'Movie',
      role: 'Ned Leeds',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Every Day',
      year: 2018,
      type: 'Movie',
      role: 'James',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Blood Fest',
      year: 2018,
      type: 'Movie',
      role: 'Krill',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Banana Split',
      year: 2018,
      type: 'Movie',
      role: 'Jacob',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Avengers: Infinity War',
      year: 2018,
      type: 'Movie',
      role: 'Ned Leeds',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Avengers: Endgame',
      year: 2019,
      type: 'Movie',
      role: 'Ned Leeds',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Spider-Man: Far From Home',
      year: 2019,
      type: 'Movie',
      role: 'Ned Leeds',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'The True Don Quixote',
      year: 2019,
      type: 'Movie',
      role: 'Sancho Panza',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Let It Snow',
      year: 2019,
      type: 'Movie',
      role: 'Keon',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Spider-Man: No Way Home',
      year: 2021,
      type: 'Movie',
      role: 'Ned Leeds',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Reginald the Vampire',
      year: 2022,
      type: 'TV Series',
      role: 'Reginald Andres',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Shortcomings',
      year: 2023,
      type: 'Movie',
      role: 'Gene',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Lift',
      year: 2024,
      type: 'Movie',
      role: 'N8',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Tarot',
      year: 2024,
      type: 'Movie',
      role: 'Paxton',
      source: 'Seeded VEDB credit library',
    },
    {
      actorName: 'Jacob Batalon',
      title: 'Novocaine',
      year: 2025,
      type: 'Movie',
      role: 'Roscoe Dixon',
      source: 'Seeded VEDB credit library',
    },
  ];

  if (
    !window.vedbOriginalGetFullBodyOfWorkForActorSeeded &&
    typeof getFullBodyOfWorkForActor === 'function'
  ) {
    window.vedbOriginalGetFullBodyOfWorkForActorSeeded =
      getFullBodyOfWorkForActor;
  }

  getFullBodyOfWorkForActor = function (actorName) {
    let baseRows = [];

    if (
      typeof window.vedbOriginalGetFullBodyOfWorkForActorSeeded === 'function'
    ) {
      baseRows =
        window.vedbOriginalGetFullBodyOfWorkForActorSeeded(actorName) || [];
    }

    const seededRows = (window.vedbSeededFullBodyCredits || []).filter(
      (row) => row.actorName === actorName
    );

    return dedupeSeededFullBodyCredits([...baseRows, ...seededRows]).sort(
      (a, b) => {
        const yearA = Number(a.year) || 0;
        const yearB = Number(b.year) || 0;

        if (yearA !== yearB) return yearB - yearA;
        return String(a.title || '').localeCompare(String(b.title || ''));
      }
    );
  };

  /* FULL PAGE FIX: do not auto-open Full Body of Work during startup. */
}

function dedupeSeededFullBodyCredits(rows) {
  const map = new Map();

  rows.forEach((row) => {
    const key = String(
      (row.actorName || '') +
        '::' +
        (row.title || '') +
        '::' +
        (row.year || '') +
        '::' +
        (row.role || '')
    ).toLowerCase();

    if (!map.has(key)) {
      map.set(key, row);
      return;
    }

    const existing = map.get(key);

    if (
      String(existing.source || '').includes('Actor signature') &&
      String(row.source || '').includes('Seeded')
    ) {
      map.set(key, row);
    }
  });

  return Array.from(map.values());
}

installSeededFullBodyOfWorkLibraryV1();
function installFullBodyOpenTitleSphereAndRemoveAddCreditFix() {
  if (window.vedbFullBodyOpenTitleFixInstalled) return;
  window.vedbFullBodyOpenTitleFixInstalled = true;

  buildFullBodyOfWorkContent = function (actorName) {
    const actor = actors.find((item) => item.name === actorName);
    const credits = getFullBodyOfWorkForActor(actorName);

    if (!actor) {
      return `<p>Actor not found.</p>`;
    }

    return `
      <div class="full-body-box">
        <h3>Signature Work vs. Full Body of Work</h3>
        <p class="full-body-note">
          <b>Signature Work</b> is the short highlight list. <b>Full Body of Work</b> is the longer credit list for the actor.
        </p>

        <p>
          <span class="full-body-pill">${
            credits.length
          } credits currently loaded</span>
          <span class="full-body-pill">${
            (actor.knownFor || []).length
          } signature titles</span>
        </p>
      </div>

      <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

      ${
        credits.length === 0
          ? `<div class="full-body-box"><p>No credits loaded yet.</p></div>`
          : `<div class="full-body-grid">
              ${credits
                .map((credit) => buildFullBodyCreditCard(credit))
                .join('')}
            </div>`
      }
    `;
  };

  buildFullBodyCreditCard = function (credit) {
    return `
      <article class="full-body-card">
        <h3>${fullBodyFixSafe(credit.title)}</h3>

        <span class="full-body-pill">${fullBodyFixSafe(
          credit.type || 'Credit'
        )}</span>
        ${
          credit.year
            ? `<span class="full-body-pill">${fullBodyFixSafe(
                credit.year
              )}</span>`
            : ''
        }

        <p><b>Role / Credit:</b> ${fullBodyFixSafe(
          credit.role || 'To be added'
        )}</p>
        <p><b>Source inside VEDB:</b> ${fullBodyFixSafe(
          credit.source || 'VEDB credit library'
        )}</p>

        <button onclick="openOrCreateTitleSphereFromFullBodyCredit('${fullBodyFixClick(
          credit.actorName
        )}', '${fullBodyFixClick(credit.title)}', '${fullBodyFixClick(
      credit.year || ''
    )}', '${fullBodyFixClick(credit.type || 'Movie')}', '${fullBodyFixClick(
      credit.role || 'Cast member'
    )}')">
          Open Title Sphere →
        </button>
      </article>
    `;
  };

  /* FULL PAGE FIX: do not auto-open Full Body of Work during startup. */
}

function openOrCreateTitleSphereFromFullBodyCredit(
  actorName,
  titleName,
  year,
  type,
  role
) {
  let existingTitle = titles.find((title) => title.name === titleName);

  if (!existingTitle) {
    existingTitle = createStarterTitleFromFullBodyCredit(
      actorName,
      titleName,
      year,
      type,
      role
    );
  } else {
    makeSureActorIsInTitleCast(existingTitle, actorName, role);
  }

  if (typeof syncAllItemsForSearch === 'function') {
    syncAllItemsForSearch();
  }

  loadEntityByName('title', titleName);
}

function createStarterTitleFromFullBodyCredit(
  actorName,
  titleName,
  year,
  type,
  role
) {
  const cleanType = type || 'Movie';
  const cleanYear = year || '';
  const cleanRole = role || 'Cast member';

  const titleRecord = {
    mode: 'title',
    name: titleName,
    job: cleanType.includes('TV')
      ? 'TV Series • Credit Page'
      : 'Movie • Credit Page',
    initials: makeTitleInitials(titleName),
    summary: `${titleName} is part of ${actorName}'s Full Body of Work on VEDB.`,
    overview: `Original VEDB demo overview: This starter title sphere was created from ${actorName}'s Full Body of Work credit list. Add full cast, crew, trailers, where-to-watch data, credits, and Behind the Screen details later.`,
    cast: [actorName],
    characters: [cleanRole],
    crew: ['Crew details to be added'],
    awards: ['Awards details to be added'],
    reviews: ['Review hub placeholder'],
    boxOffice: ['Box office data placeholder'],
    trivia: ['Trivia placeholder — verify before publishing.'],
    videos: ['Trailer placeholder'],
    similar: [],
    whereWatch: ['Where-to-watch data not verified yet'],
    facts: {
      'Release Year': cleanYear,
      Type: cleanType,
      'VEDB Status': 'Starter title sphere from Full Body of Work',
    },
    buzz: 80,
    sources: ['Source link to be added'],
  };

  if (typeof addTitleOnce === 'function') {
    addTitleOnce(titleRecord);
  } else {
    titles.push(titleRecord);
    allItems.push(titleRecord);
  }

  return titles.find((title) => title.name === titleName) || titleRecord;
}

function makeSureActorIsInTitleCast(titleRecord, actorName, role) {
  titleRecord.cast = titleRecord.cast || [];
  titleRecord.characters = titleRecord.characters || [];

  if (!titleRecord.cast.includes(actorName)) {
    titleRecord.cast.push(actorName);
    titleRecord.characters.push(role || 'Cast member');
  }
}

function makeTitleInitials(titleName) {
  const words = String(titleName || '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return 'T';

  return words
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join('');
}

function fullBodyFixSafe(text) {
  return String(text || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function fullBodyFixClick(text) {
  return String(text || '')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '&quot;');
}

installFullBodyOpenTitleSphereAndRemoveAddCreditFix();

/* LOGIN FRONT DOOR PATCH — FULL PAGE SAFE VERSION */
function setupMaster3LoginFrontDoor() {
  const guestBtn = document.getElementById('guestBtn');
  const signInBtn = document.getElementById('signInBtn');
  const createBtn = document.getElementById('createBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (guestBtn) guestBtn.onclick = enterMaster3App;
  if (signInBtn) signInBtn.onclick = validateMaster3Login;
  if (createBtn) createBtn.onclick = validateMaster3Login;
  if (logoutBtn) logoutBtn.onclick = logoutMaster3App;
}

function validateMaster3Login() {
  const email = document.getElementById('loginEmail')?.value.trim() || '';
  const pass = document.getElementById('loginPassword')?.value.trim() || '';
  const status = document.getElementById('loginStatus');

  if (!email || !pass) {
    if (status)
      status.textContent =
        'Please enter an email and password, or use Continue as Guest.';
    return;
  }

  if (pass.length < 4) {
    if (status)
      status.textContent =
        'Password needs at least 4 characters for this demo.';
    return;
  }

  enterMaster3App();
}

function forceMaster3HomeCleanStart() {
  const main = document.getElementById('mainPage');
  const page = document.getElementById('sectionPage');
  const searchResults = document.getElementById('searchResults');
  const searchInput = document.getElementById('searchInput');
  const app = document.getElementById('app');
  const loginView = document.getElementById('loginView');

  if (loginView) loginView.style.display = 'none';
  if (app) app.style.display = 'block';

  if (page) {
    page.style.display = 'none';
    page.innerHTML = '';
  }

  if (main) main.style.display = 'grid';
  if (searchResults) searchResults.style.display = 'none';
  if (searchInput) searchInput.value = '';

  const savedEntity =
    typeof getVEDBStartupEntity === 'function' ? getVEDBStartupEntity() : null;

  const currentSafeEntity =
    typeof currentEntity !== 'undefined' && currentEntity
      ? currentEntity
      : null;

  const firstAvailableActor =
    typeof actors !== 'undefined' && Array.isArray(actors) && actors.length
      ? actors[0]
      : null;

  const startupEntity = savedEntity || currentSafeEntity || firstAvailableActor;

  try {
    if (startupEntity && typeof loadEntity === 'function') {
      loadEntity(startupEntity);
    }
  } catch (error) {
    console.warn('VEDB clean startup skipped:', error);
  }

  if (typeof updateSpherePositions === 'function') {
    setTimeout(updateSpherePositions, 80);
    setTimeout(updateSpherePositions, 250);
    setTimeout(updateSpherePositions, 600);
  }
}

function enterMaster3App() {
  const loginView = document.getElementById('loginView');
  const app = document.getElementById('app');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginView) loginView.style.display = 'none';
  if (app) app.style.display = 'block';
  if (logoutBtn) logoutBtn.style.display = 'block';

  forceMaster3HomeCleanStart();
}

function logoutMaster3App() {
  const loginView = document.getElementById('loginView');
  const app = document.getElementById('app');
  const logoutBtn = document.getElementById('logoutBtn');

  if (app) app.style.display = 'none';
  if (logoutBtn) logoutBtn.style.display = 'none';
  if (loginView) loginView.style.display = 'grid';
}

/* CLEAN PRESENTATION STARTUP + LAST-SPHERE MEMORY
   This is built into the cleaned full JS, not pasted as a patch pile.
   It does not add duplicate buttons and it does not show a loading cover image.
*/
const VEDB_LAST_SPHERE_KEY = 'vedb_clean_last_sphere_v1';

function normalizeVEDBName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getVEDBListByMode(mode) {
  const cleanMode = normalizeVEDBName(mode);
  if (cleanMode === 'actor' && Array.isArray(actors)) return actors;
  if (cleanMode === 'title' && Array.isArray(titles)) return titles;
  if (cleanMode === 'franchise' && Array.isArray(franchises)) return franchises;
  return [];
}

function getAllVEDBEntities() {
  return []
    .concat(Array.isArray(actors) ? actors : [])
    .concat(Array.isArray(titles) ? titles : [])
    .concat(Array.isArray(franchises) ? franchises : []);
}

function findVEDBEntityLoose(mode, name) {
  const wanted = normalizeVEDBName(name);
  const list = getVEDBListByMode(mode);
  if (!wanted || !list.length) return null;

  let found = list.find((item) => normalizeVEDBName(item.name) === wanted);
  if (found) return found;

  found = list.find((item) => {
    const itemName = normalizeVEDBName(item.name);
    return itemName.includes(wanted) || wanted.includes(itemName);
  });

  return found || null;
}

function findVEDBEntityAnywhere(name) {
  const wanted = normalizeVEDBName(name);
  const list = getAllVEDBEntities();
  if (!wanted || !list.length) return null;

  let found = list.find((item) => normalizeVEDBName(item.name) === wanted);
  if (found) return found;

  found = list.find((item) => {
    const itemName = normalizeVEDBName(item.name);
    return itemName.includes(wanted) || wanted.includes(itemName);
  });

  return found || null;
}

function rememberVEDBEntity(entity) {
  if (!entity || !entity.name || !entity.mode) return;

  try {
    localStorage.setItem(
      VEDB_LAST_SPHERE_KEY,
      JSON.stringify({ mode: entity.mode, name: entity.name })
    );
  } catch (error) {}
}

function getVEDBEntityFromHash() {
  try {
    if (!window.location.hash) return null;
    const parts = window.location.hash.replace(/^#\/?/, '').split('/');
    if (parts.length < 2) return null;
    const mode = parts[0];
    const slug = decodeURIComponent(parts.slice(1).join('/')).replace(
      /-/g,
      ' '
    );
    return findVEDBEntityLoose(mode, slug) || findVEDBEntityAnywhere(slug);
  } catch (error) {
    return null;
  }
}

function getVEDBEntityFromStorage() {
  try {
    const raw = localStorage.getItem(VEDB_LAST_SPHERE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw);
    if (!saved || !saved.name) return null;
    return (
      findVEDBEntityLoose(saved.mode, saved.name) ||
      findVEDBEntityAnywhere(saved.name)
    );
  } catch (error) {
    return null;
  }
}

function getVEDBStartupEntity() {
  return (
    getVEDBEntityFromHash() ||
    getVEDBEntityFromStorage() ||
    findVEDBEntityLoose('actor', 'Denzel Washington') ||
    (Array.isArray(actors) ? actors[0] : null)
  );
}

function showVEDBAppShell() {
  const loginView = document.getElementById('loginView');
  const app = document.getElementById('app');
  const logoutBtn = document.getElementById('logoutBtn');
  const main = document.getElementById('mainPage');
  const page = document.getElementById('sectionPage');

  if (loginView) loginView.style.display = 'none';
  if (app) app.style.display = 'block';
  if (logoutBtn) logoutBtn.style.display = 'none';
  if (page) page.style.display = 'none';
  if (main) main.style.display = 'grid';
}

/* Global connector for CodePen Full Page inline onclick buttons. */
window.goHome = function () {
  const startupEntity = getVEDBStartupEntity();
  if (startupEntity && typeof loadEntity === 'function')
    loadEntity(startupEntity);
  showVEDBAppShell();
};

window.backToSphere = function () {
  showVEDBAppShell();
  if (typeof updateSpherePositions === 'function') {
    setTimeout(updateSpherePositions, 80);
    setTimeout(updateSpherePositions, 250);
  }
};

window.showMainPage = window.backToSphere;

window.loadEntityByName = function (mode, name) {
  const found = findVEDBEntityLoose(mode, name) || findVEDBEntityAnywhere(name);
  if (found && typeof loadEntity === 'function') {
    loadEntity(found);
    return true;
  }
  console.warn('VEDB could not find:', mode, name);
  return false;
};

try {
  loadEntityByName = window.loadEntityByName;
} catch (error) {}

window.openActorByName = function (name) {
  return window.loadEntityByName('actor', name);
};
window.openTitleByName = function (name) {
  return window.loadEntityByName('title', name);
};
window.openFranchiseByName = function (name) {
  return window.loadEntityByName('franchise', name);
};

window.openTailoredPicks = function () {
  if (typeof openTailoredPicksPage === 'function')
    return openTailoredPicksPage();
  console.warn('VEDB missing openTailoredPicksPage');
};

window.openPremiereRadar = function () {
  if (typeof openPremiereRadarPage === 'function')
    return openPremiereRadarPage('all');
  console.warn('VEDB missing openPremiereRadarPage');
};

window.openTrailerHub = function () {
  if (typeof openTrailerHubPage === 'function') return openTrailerHubPage('');
  console.warn('VEDB missing openTrailerHubPage');
};

window.openStreamSense = function () {
  if (typeof openStreamSensePage === 'function') return openStreamSensePage('');
  console.warn('VEDB missing openStreamSensePage');
};

window.openDirectory = function (type) {
  if (type === 'actor' && typeof showActors === 'function') return showActors();
  if (type === 'title' && typeof showTitles === 'function') return showTitles();
  if (type === 'franchise' && typeof showFranchises === 'function')
    return showFranchises();
  return window.goHome();
};

if (typeof showActors === 'function') window.showActors = showActors;
if (typeof showTitles === 'function') window.showTitles = showTitles;
if (typeof showFranchises === 'function')
  window.showFranchises = showFranchises;
if (typeof showCharts === 'function') window.showCharts = showCharts;
if (typeof resetSphere === 'function') window.resetSphere = resetSphere;
if (typeof openSectionPage === 'function')
  window.openSectionPage = openSectionPage;
if (typeof loadEntity === 'function') window.loadEntity = loadEntity;

/* FULL PAGE SAFE STARTUP — final version */
function vedbStartOnce() {
  if (window.vedbStartedOnce) return;
  window.vedbStartedOnce = true;

  try {
    if (typeof init === 'function') {
      init();
    }
  } catch (error) {
    console.error('VEDB startup error:', error);
  }

  try {
    setupMaster3LoginFrontDoor();
  } catch (error) {
    console.error('VEDB login setup error:', error);
  }

  /* If login exists, keep it as the front door. If no login HTML exists, show the app. */
  const loginView = document.getElementById('loginView');
  const app = document.getElementById('app');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginView && app) {
    loginView.style.display = 'grid';
    app.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'none';
  } else if (app) {
    app.style.display = 'block';
  }

  /* One clean startup pass only. Do not fight between Zendaya, Denzel, and saved actors. */
  setTimeout(() => {
    try {
      const loginVisible = loginView && loginView.style.display !== 'none';
      if (!loginVisible && typeof forceMaster3HomeCleanStart === 'function') {
        forceMaster3HomeCleanStart();
      }
    } catch (error) {
      console.warn('VEDB delayed clean startup skipped:', error);
    }
  }, 40);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', vedbStartOnce);
} else {
  vedbStartOnce();
}
/* =========================================================
   VEDB ORGANIZED FEATURE MODULES
   One clean block for: A–Z Actor Index, Watch Finder,
   and Upcoming Trailers. No duplicate Watch Finder blocks,
   no duplicated search-bar patches, no loading-cover code.
   ========================================================= */
(function () {
  const watchServices = [
    {
      name: 'Netflix',
      initials: 'N',
      type: 'Subscription',
      bestFor: 'Original series, movies, documentaries, global hits',
      tags: ['Movies', 'TV', 'Originals'],
      url: 'https://www.netflix.com/',
    },
    {
      name: 'Prime Video',
      initials: 'PV',
      type: 'Subscription / Rental',
      bestFor: 'Movies, original shows, add-on channels, rentals',
      tags: ['Movies', 'TV', 'Rentals'],
      url: 'https://www.primevideo.com/',
    },
    {
      name: 'Hulu',
      initials: 'H',
      type: 'Subscription',
      bestFor: 'TV episodes, FX shows, movies, bundles',
      tags: ['TV', 'Movies', 'Bundles'],
      url: 'https://www.hulu.com/welcome',
    },
    {
      name: 'Disney+',
      initials: 'D+',
      type: 'Subscription',
      bestFor: 'Disney, Pixar, Marvel, Star Wars, National Geographic',
      tags: ['Family', 'Marvel', 'Star Wars'],
      url: 'https://www.disneyplus.com/',
    },
    {
      name: 'Max',
      initials: 'M',
      type: 'Subscription',
      bestFor: 'HBO, Warner Bros., prestige TV, movies',
      tags: ['HBO', 'Movies', 'TV'],
      url: 'https://www.max.com/',
    },
    {
      name: 'Paramount+',
      initials: 'P+',
      type: 'Subscription',
      bestFor: 'Paramount films, CBS, Nickelodeon, live sports',
      tags: ['TV', 'Movies', 'Sports'],
      url: 'https://www.paramountplus.com/',
    },
    {
      name: 'Peacock',
      initials: 'P',
      type: 'Subscription',
      bestFor: 'NBCUniversal shows, movies, sports, next-day TV',
      tags: ['TV', 'Sports', 'Movies'],
      url: 'https://www.peacocktv.com/',
    },
    {
      name: 'Apple TV+',
      initials: 'A+',
      type: 'Subscription',
      bestFor: 'Apple original shows and films',
      tags: ['Originals', 'Movies', 'TV'],
      url: 'https://tv.apple.com/',
    },
    {
      name: 'YouTube',
      initials: 'YT',
      type: 'Free / Rental / Subscription',
      bestFor: 'Creator videos, rentals, purchases, clips, trailers',
      tags: ['Free', 'Rentals', 'Clips'],
      url: 'https://www.youtube.com/',
    },
    {
      name: 'Tubi',
      initials: 'T',
      type: 'Free with ads',
      bestFor: 'Free movies and TV with ads',
      tags: ['Free', 'Movies', 'TV'],
      url: 'https://tubitv.com/',
    },
    {
      name: 'Pluto TV',
      initials: 'PT',
      type: 'Free with ads',
      bestFor: 'Free live-style channels and on-demand shows',
      tags: ['Free', 'Live', 'TV'],
      url: 'https://pluto.tv/',
    },
    {
      name: 'The Roku Channel',
      initials: 'R',
      type: 'Free with ads',
      bestFor: 'Free movies, shows, live channels, Roku originals',
      tags: ['Free', 'Live', 'Movies'],
      url: 'https://therokuchannel.roku.com/',
    },
    {
      name: 'Crunchyroll',
      initials: 'CR',
      type: 'Subscription / Free tier',
      bestFor: 'Anime series, anime movies, simulcasts',
      tags: ['Anime', 'TV', 'Movies'],
      url: 'https://www.crunchyroll.com/',
    },
    {
      name: 'ESPN+',
      initials: 'E+',
      type: 'Subscription',
      bestFor: 'Sports, live events, documentaries, ESPN originals',
      tags: ['Sports', 'Live', 'Originals'],
      url: 'https://www.espn.com/espnplus/',
    },
    {
      name: 'YouTube TV',
      initials: 'YTV',
      type: 'Live TV subscription',
      bestFor: 'Live TV channels, sports, news, DVR-style viewing',
      tags: ['Live', 'Sports', 'News'],
      url: 'https://tv.youtube.com/',
    },
  ];

  const upcomingTrailers = [
    {
      title: 'Dune: Future Chapter',
      type: 'Movie',
      genre: 'Sci-Fi',
      status: 'Coming Soon',
      description:
        'A sample trailer card for a future sci-fi franchise release.',
      tags: ['Movie', 'Sci-Fi', 'Franchise'],
      trailerUrl:
        'https://www.youtube.com/results?search_query=Dune+official+trailer',
    },
    {
      title: 'Spider-Man: Next Web',
      type: 'Movie',
      genre: 'Superhero',
      status: 'Rumor / Placeholder',
      description: 'A sample card for a future superhero trailer page.',
      tags: ['Movie', 'Superhero', 'Franchise'],
      trailerUrl:
        'https://www.youtube.com/results?search_query=Spider-Man+official+trailer',
    },
    {
      title: 'Mission: Impossible — New Mission',
      type: 'Movie',
      genre: 'Action',
      status: 'Coming Soon',
      description: 'A sample card for a future action trailer drop.',
      tags: ['Movie', 'Action', 'Franchise'],
      trailerUrl:
        'https://www.youtube.com/results?search_query=Mission+Impossible+official+trailer',
    },
    {
      title: 'Prestige Drama Preview',
      type: 'Movie',
      genre: 'Drama',
      status: 'Trailer Watch',
      description:
        'A sample prestige drama trailer slot for awards-season titles.',
      tags: ['Movie', 'Drama', 'Awards'],
      trailerUrl:
        'https://www.youtube.com/results?search_query=upcoming+drama+movie+official+trailer',
    },
    {
      title: 'Streaming Original Spotlight',
      type: 'Series',
      genre: 'Drama',
      status: 'Streaming Soon',
      description: 'A sample streaming-series trailer card for VEDB discovery.',
      tags: ['TV', 'Streaming', 'Originals'],
      trailerUrl:
        'https://www.youtube.com/results?search_query=upcoming+streaming+series+official+trailer',
    },
    {
      title: 'Family Adventure Preview',
      type: 'Movie',
      genre: 'Family',
      status: 'Coming Soon',
      description: 'A sample family movie trailer card.',
      tags: ['Movie', 'Family', 'Adventure'],
      trailerUrl:
        'https://www.youtube.com/results?search_query=upcoming+family+movie+official+trailer',
    },
  ];

  function safeHTML(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function jsSafe(value) {
    return String(value ?? '')
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'");
  }

  function clean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function showSectionPage(html) {
    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');
    if (!page) return;
    if (main) main.style.display = 'none';
    page.style.display = 'block';
    page.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function returnToSphere() {
    if (typeof showMainPage === 'function') {
      showMainPage();
      return;
    }

    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');
    if (page) page.style.display = 'none';
    if (main) main.style.display = 'grid';
  }

  function findActorLoose(name) {
    if (typeof actors === 'undefined' || !Array.isArray(actors)) return null;
    const wanted = clean(name);
    return (
      actors.find((actor) => clean(actor.name) === wanted) ||
      actors.find(
        (actor) =>
          clean(actor.name).includes(wanted) ||
          wanted.includes(clean(actor.name))
      ) ||
      null
    );
  }

  window.openActorFromIndex = function (name) {
    const actor = findActorLoose(name);
    if (actor && typeof loadEntity === 'function') {
      loadEntity(actor);
      returnToSphere();
      if (typeof updateSpherePositions === 'function') {
        setTimeout(updateSpherePositions, 50);
        setTimeout(updateSpherePositions, 250);
      }
      return;
    }
    console.error('VEDB A–Z could not find actor:', name);
  };

  window.openActorIndexAZ = function () {
    const actorList = Array.isArray(actors) ? [...actors] : [];
    actorList.sort((a, b) => String(a.name).localeCompare(String(b.name)));

    const grouped = {};
    actorList.forEach((actor) => {
      const letter = String(actor.name || '#')
        .trim()
        .charAt(0)
        .toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(actor);
    });

    const letters = Object.keys(grouped).sort();

    showSectionPage(`
      <div class="section-page-inner glass">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB ACTOR INDEX</div>
            <h2>A–Z ACTOR INDEX</h2>
          </div>
          <button class="back-button" onclick="showMainPage()">← Back to Sphere</button>
        </div>

        <div class="section-page-content">
          <p>This is a clean alphabetical index of the current sample actors loaded into your VEDB demo.</p>
          <div class="az-index-grid">
            ${letters
              .map(
                (letter) => `
              <div class="az-letter-card">
                <h3>${safeHTML(letter)}</h3>
                ${grouped[letter]
                  .map(
                    (actor) => `
                  <button class="az-name-button" onclick="openActorFromIndex('${jsSafe(
                    actor.name
                  )}')">
                    ${safeHTML(actor.name)}
                  </button>
                `
                  )
                  .join('')}
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    `);
  };

  function renderWatchServices(filterText, tagFilter) {
    const grid = document.getElementById('watchServiceGrid');
    if (!grid) return;

    const text = clean(filterText);
    const tag = clean(tagFilter || 'all');

    const filtered = watchServices.filter((service) => {
      const haystack = clean(
        [
          service.name,
          service.type,
          service.bestFor,
          service.tags.join(' '),
        ].join(' ')
      );
      const matchesText = !text || haystack.includes(text);
      const matchesTag =
        tag === 'all' || service.tags.some((item) => clean(item) === tag);
      return matchesText && matchesTag;
    });

    grid.innerHTML = filtered
      .map(
        (service) => `
      <article class="watch-service-card">
        <a class="watch-service-logo-link" href="${safeHTML(
          service.url
        )}" target="_blank" rel="noopener noreferrer" title="Open ${safeHTML(
          service.name
        )} official site">
          ${safeHTML(service.initials)}
        </a>
        <h3>${safeHTML(service.name)}</h3>
        <p><strong>Type:</strong> ${safeHTML(service.type)}</p>
        <p>${safeHTML(service.bestFor)}</p>
        <div class="watch-service-tags">
          ${service.tags.map((tag) => `<span>${safeHTML(tag)}</span>`).join('')}
        </div>
      </article>
    `
      )
      .join('');

    if (!filtered.length) {
      grid.innerHTML = `
        <article class="watch-service-card">
          <h3>No services found</h3>
          <p>Try searching for movies, TV, sports, free, anime, live, or originals.</p>
        </article>
      `;
    }
  }

  window.filterWatchFinder = function (tag, button) {
    document
      .querySelectorAll('.watch-filter-pills button')
      .forEach((btn) => btn.classList.remove('active'));
    if (button) button.classList.add('active');
    const input = document.getElementById('watchFinderInput');
    renderWatchServices(input ? input.value : '', tag);
  };

  window.openWatchFinder = function () {
    showSectionPage(`
      <div class="section-page-inner glass">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB WATCH FINDER</div>
            <h2>WATCH FINDER</h2>
          </div>
          <button class="back-button" onclick="showMainPage()">← Back to Sphere</button>
        </div>

        <div class="section-page-content">
          <div class="watch-finder-hero">
            <p>Watch Finder is VEDB’s streaming discovery area. Click each gold service badge — like N, H, D+, M, or YT — to open the official streaming site.</p>
            <div class="watch-finder-search-row">
              <input id="watchFinderInput" type="text" placeholder="Search services, sports, free, anime, movies, live TV..." />
            </div>
            <div class="watch-filter-pills">
              <button class="active" onclick="filterWatchFinder('all', this)">All</button>
              <button onclick="filterWatchFinder('Movies', this)">Movies</button>
              <button onclick="filterWatchFinder('TV', this)">TV</button>
              <button onclick="filterWatchFinder('Sports', this)">Sports</button>
              <button onclick="filterWatchFinder('Free', this)">Free</button>
              <button onclick="filterWatchFinder('Live', this)">Live</button>
              <button onclick="filterWatchFinder('Anime', this)">Anime</button>
              <button onclick="filterWatchFinder('Originals', this)">Originals</button>
            </div>
            <div class="watch-note">Demo note: the gold service badges open official service sites. Live title availability would require licensed streaming availability data.</div>
          </div>
          <div id="watchServiceGrid" class="watch-service-grid"></div>
        </div>
      </div>
    `);

    const input = document.getElementById('watchFinderInput');
    if (input)
      input.addEventListener('input', function () {
        renderWatchServices(input.value, 'all');
      });
    renderWatchServices('', 'all');
  };

  function renderUpcomingTrailers(filterText, tagFilter) {
    const grid = document.getElementById('upcomingTrailerGrid');
    if (!grid) return;

    const text = clean(filterText);
    const tag = clean(tagFilter || 'all');

    const filtered = upcomingTrailers.filter((item) => {
      const haystack = clean(
        [
          item.title,
          item.type,
          item.genre,
          item.status,
          item.description,
          item.tags.join(' '),
        ].join(' ')
      );
      const matchesText = !text || haystack.includes(text);
      const matchesTag =
        tag === 'all' || item.tags.some((t) => clean(t) === tag);
      return matchesText && matchesTag;
    });

    grid.innerHTML = filtered
      .map(
        (item) => `
      <article class="trailer-card">
        <div class="trailer-thumb">▷</div>
        <h3>${safeHTML(item.title)}</h3>
        <p><strong>${safeHTML(item.type)}</strong> • ${safeHTML(
          item.genre
        )} • ${safeHTML(item.status)}</p>
        <p>${safeHTML(item.description)}</p>
        <div class="trailer-meta">
          ${item.tags.map((tag) => `<span>${safeHTML(tag)}</span>`).join('')}
        </div>
        <button class="trailer-watch-button" onclick="window.open('${safeHTML(
          item.trailerUrl
        )}', '_blank', 'noopener,noreferrer')">
          Watch / Search Trailer →
        </button>
      </article>
    `
      )
      .join('');

    if (!filtered.length) {
      grid.innerHTML = `
        <article class="trailer-card">
          <h3>No trailers found</h3>
          <p>Try searching movie, TV, action, sci-fi, family, drama, or streaming.</p>
        </article>
      `;
    }
  }

  window.filterUpcomingTrailers = function (tag, button) {
    document
      .querySelectorAll('.trailer-filter-pills button')
      .forEach((btn) => btn.classList.remove('active'));
    if (button) button.classList.add('active');
    const input = document.getElementById('upcomingTrailerInput');
    renderUpcomingTrailers(input ? input.value : '', tag);
  };

  window.openUpcomingTrailers = function () {
    showSectionPage(`
      <div class="section-page-inner glass">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB TRAILER WATCH</div>
            <h2>UPCOMING TRAILERS</h2>
          </div>
          <button class="back-button" onclick="showMainPage()">← Back to Sphere</button>
        </div>

        <div class="section-page-content">
          <div class="trailer-hero">
            <p>Upcoming Trailers is VEDB’s coming-soon trailer area. It can highlight future movies, streaming originals, franchise previews, teaser drops, and official trailer searches.</p>
            <div class="trailer-search-row">
              <input id="upcomingTrailerInput" type="text" placeholder="Search trailers, sci-fi, action, drama, family, streaming..." />
            </div>
            <div class="trailer-filter-pills">
              <button class="active" onclick="filterUpcomingTrailers('all', this)">All</button>
              <button onclick="filterUpcomingTrailers('Movie', this)">Movies</button>
              <button onclick="filterUpcomingTrailers('TV', this)">TV</button>
              <button onclick="filterUpcomingTrailers('Franchise', this)">Franchise</button>
              <button onclick="filterUpcomingTrailers('Action', this)">Action</button>
              <button onclick="filterUpcomingTrailers('Sci-Fi', this)">Sci-Fi</button>
              <button onclick="filterUpcomingTrailers('Streaming', this)">Streaming</button>
              <button onclick="filterUpcomingTrailers('Family', this)">Family</button>
            </div>
            <div class="trailer-note">Demo note: these cards use trailer-search links. For a live product, replace them with verified official trailer URLs or a licensed entertainment data feed.</div>
          </div>
          <div id="upcomingTrailerGrid" class="trailer-grid"></div>
        </div>
      </div>
    `);

    const input = document.getElementById('upcomingTrailerInput');
    if (input)
      input.addEventListener('input', function () {
        renderUpcomingTrailers(input.value, 'all');
      });
    renderUpcomingTrailers('', 'all');
  };

  console.log('VEDB organized feature modules loaded.');
})();
/* VEDB BEHIND THE ROLE
   Clean feature module for actor/movie interview discovery.
   Paste at the VERY BOTTOM of the JS box.
*/

(function () {
  const behindRoleInterviews = [
    {
      title: 'Denzel Washington on Training Day',
      actor: 'Denzel Washington',
      movie: 'Training Day',
      sourceType: 'Official Interview',
      category: 'Official',
      description:
        'Interview discovery card for Denzel Washington discussing one of his signature roles.',
      tags: ['Actor', 'Movie', 'Drama', 'Signature Work'],
      url: 'https://www.youtube.com/results?search_query=Denzel+Washington+Training+Day+interview',
    },
    {
      title: 'Denzel Washington on The Equalizer',
      actor: 'Denzel Washington',
      movie: 'The Equalizer',
      sourceType: 'Official Interview',
      category: 'Official',
      description:
        'Interview discovery card connected to Denzel Washington’s franchise work as Robert McCall.',
      tags: ['Actor', 'Movie', 'Franchise', 'Action'],
      url: 'https://www.youtube.com/results?search_query=Denzel+Washington+The+Equalizer+interview',
    },
    {
      title: 'Zendaya on Dune',
      actor: 'Zendaya',
      movie: 'Dune',
      sourceType: 'Official Interview',
      category: 'Official',
      description:
        'Interview discovery card for Zendaya discussing Dune, Chani, and the world of Arrakis.',
      tags: ['Actor', 'Movie', 'Sci-Fi', 'Franchise'],
      url: 'https://www.youtube.com/results?search_query=Zendaya+Dune+interview',
    },
    {
      title: 'Zendaya on Challengers',
      actor: 'Zendaya',
      movie: 'Challengers',
      sourceType: 'Official Interview',
      category: 'Official',
      description:
        'Interview discovery card connected to Zendaya’s role in Challengers.',
      tags: ['Actor', 'Movie', 'Drama', 'Signature Work'],
      url: 'https://www.youtube.com/results?search_query=Zendaya+Challengers+interview',
    },
    {
      title: 'Robert Downey Jr. on Iron Man',
      actor: 'Robert Downey Jr.',
      movie: 'Iron Man',
      sourceType: 'Official Interview',
      category: 'Official',
      description:
        'Interview discovery card for Robert Downey Jr. discussing Tony Stark and Iron Man.',
      tags: ['Actor', 'Movie', 'Franchise', 'Superhero'],
      url: 'https://www.youtube.com/results?search_query=Robert+Downey+Jr+Iron+Man+interview',
    },
    {
      title: 'Tom Cruise on Top Gun: Maverick',
      actor: 'Tom Cruise',
      movie: 'Top Gun: Maverick',
      sourceType: 'Official Interview',
      category: 'Official',
      description:
        'Interview discovery card connected to Tom Cruise and the Top Gun franchise.',
      tags: ['Actor', 'Movie', 'Franchise', 'Action'],
      url: 'https://www.youtube.com/results?search_query=Tom+Cruise+Top+Gun+Maverick+interview',
    },
    {
      title: 'VEDB Exclusive: Denzel Washington Role Breakdown',
      actor: 'Denzel Washington',
      movie: 'Training Day',
      sourceType: 'VEDB Exclusive',
      category: 'Exclusive',
      description:
        'Placeholder for a future VEDB-exclusive interview or original role breakdown.',
      tags: ['VEDB Exclusive', 'Actor', 'Movie', 'Signature Work'],
      url: '',
    },
    {
      title: 'VEDB Exclusive: Zendaya Behind the Role',
      actor: 'Zendaya',
      movie: 'Dune',
      sourceType: 'VEDB Exclusive',
      category: 'Exclusive',
      description:
        'Placeholder for a future VEDB-exclusive interview with original questions and clips.',
      tags: ['VEDB Exclusive', 'Actor', 'Movie', 'Sci-Fi'],
      url: '',
    },
  ];

  function safeBehindRoleHTML(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function safeBehindRoleJS(value) {
    return String(value ?? '')
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'");
  }

  function cleanBehindRoleText(value) {
    return String(value || '')
      .toLowerCase()
      .trim();
  }

  function openBehindRoleActor(actorName) {
    if (typeof loadEntityByName === 'function') {
      loadEntityByName('actor', actorName);
      return;
    }

    if (typeof actors !== 'undefined' && typeof loadEntity === 'function') {
      const actor = actors.find(
        (item) =>
          cleanBehindRoleText(item.name) === cleanBehindRoleText(actorName)
      );
      if (actor) loadEntity(actor);
    }
  }

  function openBehindRoleTitle(titleName) {
    if (typeof loadEntityByName === 'function') {
      loadEntityByName('title', titleName);
      return;
    }

    if (typeof titles !== 'undefined' && typeof loadEntity === 'function') {
      const title = titles.find(
        (item) =>
          cleanBehindRoleText(item.name) === cleanBehindRoleText(titleName)
      );
      if (title) loadEntity(title);
    }
  }

  window.openBehindRoleActor = openBehindRoleActor;
  window.openBehindRoleTitle = openBehindRoleTitle;

  function renderBehindRoleInterviews(filterText, categoryFilter) {
    const grid = document.getElementById('behindRoleGrid');
    if (!grid) return;

    const text = cleanBehindRoleText(filterText);
    const category = cleanBehindRoleText(categoryFilter || 'all');

    const filtered = behindRoleInterviews.filter((item) => {
      const haystack = cleanBehindRoleText(
        [
          item.title,
          item.actor,
          item.movie,
          item.sourceType,
          item.category,
          item.description,
          item.tags.join(' '),
        ].join(' ')
      );

      const matchesText = !text || haystack.includes(text);
      const matchesCategory =
        category === 'all' || cleanBehindRoleText(item.category) === category;

      return matchesText && matchesCategory;
    });

    grid.innerHTML = filtered
      .map((item) => {
        const isExclusive = item.category === 'Exclusive';

        return `
        <article class="behind-role-card">
          <div class="behind-role-video">🎙</div>

          <span class="behind-role-source-badge ${
            isExclusive ? 'exclusive' : ''
          }">
            ${safeBehindRoleHTML(item.sourceType)}
          </span>

          <h3>${safeBehindRoleHTML(item.title)}</h3>

          <p><strong>Actor:</strong> ${safeBehindRoleHTML(item.actor)}</p>
          <p><strong>Movie / Show:</strong> ${safeBehindRoleHTML(
            item.movie
          )}</p>
          <p>${safeBehindRoleHTML(item.description)}</p>

          <div class="behind-role-badge-row">
            ${item.tags
              .map((tag) => `<span>${safeBehindRoleHTML(tag)}</span>`)
              .join('')}
          </div>

          <div class="behind-role-actions">
            ${
              item.url
                ? `<a href="${safeBehindRoleHTML(
                    item.url
                  )}" target="_blank" rel="noopener noreferrer">Watch Interview →</a>`
                : `<button class="disabled" type="button">VEDB Exclusive Coming Soon</button>`
            }

            <button class="secondary" onclick="openBehindRoleActor('${safeBehindRoleJS(
              item.actor
            )}')">
              Open Actor Sphere →
            </button>

            <button class="secondary" onclick="openBehindRoleTitle('${safeBehindRoleJS(
              item.movie
            )}')">
              Open Movie Sphere →
            </button>
          </div>
        </article>
      `;
      })
      .join('');

    if (!filtered.length) {
      grid.innerHTML = `
        <article class="behind-role-card">
          <h3>No interviews found</h3>
          <p>Try searching by actor, movie, franchise, official, or exclusive.</p>
        </article>
      `;
    }
  }

  window.filterBehindTheRole = function (category, button) {
    document
      .querySelectorAll('.behind-role-filter-pills button')
      .forEach((btn) => {
        btn.classList.remove('active');
      });

    if (button) button.classList.add('active');

    const input = document.getElementById('behindRoleInput');
    renderBehindRoleInterviews(input ? input.value : '', category);
  };

  window.openBehindTheRole = function () {
    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');

    if (!page) return;

    if (main) main.style.display = 'none';
    page.style.display = 'block';

    page.innerHTML = `
      <div class="section-page-inner glass">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB INTERVIEW HUB</div>
            <h2>BEHIND THE ROLE</h2>
          </div>
          <button class="back-button" onclick="showMainPage()">← Back to Sphere</button>
        </div>

        <div class="section-page-content">
          <div class="behind-role-hero">
            <p>
              Behind the Role is VEDB’s interview section for actors talking about the movies and shows they are in.
              Official interviews are separated from future VEDB Exclusive interviews.
            </p>

            <div class="behind-role-search-row">
              <input id="behindRoleInput" type="text" placeholder="Search actor, movie, franchise, official, exclusive..." />
            </div>

            <div class="behind-role-filter-pills">
              <button class="active" onclick="filterBehindTheRole('all', this)">All</button>
              <button onclick="filterBehindTheRole('Official', this)">Official Interviews</button>
              <button onclick="filterBehindTheRole('Exclusive', this)">VEDB Exclusive</button>
            </div>

            <div class="behind-role-note">
              Demo note: Official Interview cards currently use YouTube search links. Later, replace those with exact official interview URLs or YouTube embed links. VEDB Exclusive cards are placeholders for your own future interview content.
            </div>
          </div>

          <div id="behindRoleGrid" class="behind-role-grid"></div>
        </div>
      </div>
    `;

    const input = document.getElementById('behindRoleInput');

    if (input) {
      input.addEventListener('input', function () {
        renderBehindRoleInterviews(input.value, 'all');
      });
    }

    renderBehindRoleInterviews('', 'all');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  console.log('VEDB Behind the Role loaded.');
})();
/* STREAMSENSE CLEAN REPAIR MODULE
   Paste at the VERY BOTTOM of the JS box.
   Fixes:
   - StreamSense search bar
   - Analyze Actor Connections buttons
   - Analyze Movie Cast buttons
   - Open Actor Sphere buttons
   - Open Movie Sphere buttons
   - Behind the Screen button
   - Back to Current Sphere
*/

(function () {
  function ssSafe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function ssClean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function ssGetActors() {
    return Array.isArray(window.actors)
      ? window.actors
      : typeof actors !== 'undefined'
      ? actors
      : [];
  }

  function ssGetTitles() {
    return Array.isArray(window.titles)
      ? window.titles
      : typeof titles !== 'undefined'
      ? titles
      : [];
  }

  function ssFindActor(name) {
    const wanted = ssClean(name);
    return (
      ssGetActors().find((actor) => ssClean(actor.name) === wanted) ||
      ssGetActors().find(
        (actor) =>
          ssClean(actor.name).includes(wanted) ||
          wanted.includes(ssClean(actor.name))
      ) ||
      null
    );
  }

  function ssFindTitle(name) {
    const wanted = ssClean(name);
    return (
      ssGetTitles().find((title) => ssClean(title.name) === wanted) ||
      ssGetTitles().find(
        (title) =>
          ssClean(title.name).includes(wanted) ||
          wanted.includes(ssClean(title.name))
      ) ||
      null
    );
  }

  function ssOpenEntity(entity) {
    if (!entity) return;

    if (typeof loadEntity === 'function') {
      loadEntity(entity);
    }

    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');

    if (page) page.style.display = 'none';
    if (main) main.style.display = 'grid';

    if (typeof updateSpherePositions === 'function') {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function ssSharedTitlesForActor(actor) {
    if (!actor) return [];

    const actorName = ssClean(actor.name);

    return ssGetTitles().filter((title) => {
      const cast = Array.isArray(title.cast) ? title.cast : [];
      return cast.some((name) => ssClean(name) === actorName);
    });
  }

  function ssActorCard(actor) {
    const sharedTitles = ssSharedTitlesForActor(actor);

    return `
      <article class="streamsense-card">
        <h3>${ssSafe(actor.name)}</h3>
        <p>${ssSafe(actor.summary || actor.job || 'Actor profile')}</p>

        <div class="streamsense-pill-row">
          <span class="streamsense-pill">Actor</span>
          <span class="streamsense-pill">${ssSafe(
            sharedTitles.length
          )} connected titles</span>
        </div>

        <h3>Connected Work</h3>
        ${
          sharedTitles.length
            ? `<ul>${sharedTitles
                .slice(0, 6)
                .map((title) => `<li>${ssSafe(title.name)}</li>`)
                .join('')}</ul>`
            : `<p>No loaded shared titles found yet.</p>`
        }

        <button class="ss-open-actor" data-actor="${ssSafe(
          actor.name
        )}">Open Actor Sphere →</button>
        <button class="ss-analyze" data-query="${ssSafe(
          actor.name
        )}">Analyze Actor Connections →</button>
      </article>
    `;
  }

  function ssTitleCard(title) {
    const cast = Array.isArray(title.cast) ? title.cast : [];

    return `
      <article class="streamsense-card">
        <h3>${ssSafe(title.name)}</h3>
        <p>${ssSafe(
          title.summary || title.overview || title.job || 'Title profile'
        )}</p>

        <div class="streamsense-pill-row">
          <span class="streamsense-pill">${ssSafe(
            title.job || 'Movie / Title'
          )}</span>
          <span class="streamsense-pill">${ssSafe(
            cast.length
          )} cast names loaded</span>
        </div>

        <h3>Cast Connections</h3>
        ${
          cast.length
            ? `<ul>${cast
                .slice(0, 8)
                .map((name) => `<li>${ssSafe(name)}</li>`)
                .join('')}</ul>`
            : `<p>No cast list loaded yet.</p>`
        }

        <button class="ss-open-title" data-title="${ssSafe(
          title.name
        )}">Open Movie Sphere →</button>
        <button class="ss-analyze" data-query="${ssSafe(
          title.name
        )}">Analyze Movie Cast →</button>
        <button class="ss-behind-screen" data-title="${ssSafe(
          title.name
        )}">Behind the Screen →</button>
      </article>
    `;
  }

  function ssBuildResults(query) {
    const cleanQuery = ssClean(query);
    const actorsList = ssGetActors();
    const titlesList = ssGetTitles();

    if (!cleanQuery) {
      const topActors = actorsList.slice(0, 6);
      const topTitles = titlesList.slice(0, 6);

      return `
        <div class="streamsense-card">
          <h3>What StreamSense Does</h3>
          <p>
            StreamSense connects actors through shared movies. Search an actor, movie, or franchise to see connections.
          </p>
        </div>

        <h3 style="color: var(--gold); margin-top: 22px;">Try Actors</h3>
        <div class="streamsense-grid">
          ${topActors
            .map(
              (actor) => `
            <article class="streamsense-card">
              <h3>${ssSafe(actor.name)}</h3>
              <p>${ssSafe(actor.summary || actor.job || 'Actor profile')}</p>
              <button class="ss-analyze" data-query="${ssSafe(
                actor.name
              )}">Analyze Actor Connections →</button>
            </article>
          `
            )
            .join('')}
        </div>

        <h3 style="color: var(--gold); margin-top: 22px;">Try Movies</h3>
        <div class="streamsense-grid">
          ${topTitles
            .map(
              (title) => `
            <article class="streamsense-card">
              <h3>${ssSafe(title.name)}</h3>
              <p>${ssSafe(
                title.summary || title.overview || title.job || 'Title profile'
              )}</p>
              <button class="ss-analyze" data-query="${ssSafe(
                title.name
              )}">Analyze Movie Cast →</button>
            </article>
          `
            )
            .join('')}
        </div>
      `;
    }

    const matchedActors = actorsList.filter((actor) => {
      const haystack = ssClean(
        [
          actor.name,
          actor.job,
          actor.summary,
          actor.bio,
          (actor.knownFor || []).flat().join(' '),
          (actor.characters || []).join(' '),
          (actor.collaborators || []).join(' '),
        ].join(' ')
      );

      return haystack.includes(cleanQuery);
    });

    const matchedTitles = titlesList.filter((title) => {
      const haystack = ssClean(
        [
          title.name,
          title.job,
          title.summary,
          title.overview,
          (title.cast || []).join(' '),
          (title.characters || []).join(' '),
          (title.crew || []).join(' '),
        ].join(' ')
      );

      return haystack.includes(cleanQuery);
    });

    let html = '';

    if (matchedActors.length) {
      html += `
        <h3 style="color: var(--gold);">Actor Connection Results</h3>
        <div class="streamsense-grid">
          ${matchedActors.map(ssActorCard).join('')}
        </div>
      `;
    }

    if (matchedTitles.length) {
      html += `
        <h3 style="color: var(--gold); margin-top: 22px;">Movie Cast Connection Results</h3>
        <div class="streamsense-grid">
          ${matchedTitles.map(ssTitleCard).join('')}
        </div>
      `;
    }

    if (!html) {
      html = `
        <article class="streamsense-card">
          <h3>No StreamSense match yet</h3>
          <p>Try searching an actor or movie already loaded in your VEDB demo.</p>
        </article>
      `;
    }

    return html;
  }

  window.renderStreamSenseResults = function (query) {
    const box = document.getElementById('streamSenseResults');
    if (!box) return;
    box.innerHTML = ssBuildResults(query || '');
  };

  window.openStreamSensePage = function (startQuery) {
    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');

    if (!page) return;

    if (typeof hideSearch === 'function') hideSearch();

    if (main) main.style.display = 'none';
    page.style.display = 'block';

    const query = startQuery || '';

    page.innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VISIONARY STREAMSENSE SEARCH</div>
            <h2>StreamSense Connections</h2>
          </div>
          <button class="back-button" onclick="backToSphere()">← Back to Current Sphere</button>
        </div>

        <div class="section-page-content">
          <div class="streamsense-search-box">
            <h3>Search Actor, Movie, or Franchise Connections</h3>
            <p class="streamsense-note">
              StreamSense shows which actors worked together, what movie connected them,
              and what other projects they also share.
            </p>

            <input
              id="streamSenseSearchInput"
              type="text"
              placeholder="Try Denzel Washington, Zendaya, Iron Man, Dune..."
              value="${ssSafe(query)}"
              autocomplete="off"
            />
          </div>

          <div id="streamSenseResults"></div>
        </div>
      </div>
    `;

    const input = document.getElementById('streamSenseSearchInput');

    if (input) {
      input.addEventListener('input', function () {
        window.renderStreamSenseResults(input.value);
      });
    }

    window.renderStreamSenseResults(query);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.openStreamSense = function () {
    window.openStreamSensePage('');
  };

  window.backToSphere =
    window.backToSphere ||
    function () {
      const main = document.getElementById('mainPage');
      const page = document.getElementById('sectionPage');

      if (page) page.style.display = 'none';
      if (main) main.style.display = 'grid';

      if (typeof updateSpherePositions === 'function') {
        setTimeout(updateSpherePositions, 50);
        setTimeout(updateSpherePositions, 250);
      }
    };

  window.openBehindTheScreenPage =
    window.openBehindTheScreenPage ||
    function (titleName) {
      const title = ssFindTitle(titleName);

      const main = document.getElementById('mainPage');
      const page = document.getElementById('sectionPage');

      if (!page) return;

      if (main) main.style.display = 'none';
      page.style.display = 'block';

      page.innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB BEHIND THE SCREEN</div>
            <h2>Behind the Screen</h2>
          </div>
          <button class="back-button" onclick="openStreamSensePage('${ssSafe(
            titleName || ''
          )}')">← Back to StreamSense</button>
        </div>

        <div class="section-page-content">
          <article class="streamsense-card">
            <h3>${ssSafe(
              title ? title.name : titleName || 'Selected Title'
            )}</h3>
            <p>
              Behind the Screen can show deeper cast links, crew connections, franchise links,
              production relationships, and shared collaborators.
            </p>
            ${
              title && Array.isArray(title.cast)
                ? `<h3>Loaded Cast</h3><ul>${title.cast
                    .map((name) => `<li>${ssSafe(name)}</li>`)
                    .join('')}</ul>`
                : `<p>No detailed cast data loaded yet.</p>`
            }
          </article>
        </div>
      </div>
    `;
    };

  document.addEventListener('click', function (event) {
    const analyzeButton = event.target.closest('.ss-analyze');
    if (analyzeButton) {
      event.preventDefault();
      window.openStreamSensePage(analyzeButton.dataset.query || '');
      return;
    }

    const actorButton = event.target.closest('.ss-open-actor');
    if (actorButton) {
      event.preventDefault();
      ssOpenEntity(ssFindActor(actorButton.dataset.actor || ''));
      return;
    }

    const titleButton = event.target.closest('.ss-open-title');
    if (titleButton) {
      event.preventDefault();
      ssOpenEntity(ssFindTitle(titleButton.dataset.title || ''));
      return;
    }

    const behindButton = event.target.closest('.ss-behind-screen');
    if (behindButton) {
      event.preventDefault();
      window.openBehindTheScreenPage(behindButton.dataset.title || '');
    }
  });

  console.log('VEDB StreamSense clean repair loaded.');
})();
/* VEDB FULL BODY OF WORK BUTTON FIX V4
   Paste at the VERY BOTTOM of the JS box.

   Fixes:
   - Main Full Body of Work button
   - Back to Actor Sphere button
   - Open Title Sphere buttons
   - Save Credit button
   - Creates starter Title Spheres when missing
   - Does NOT touch the 50 actor batch
*/

(function () {
  if (window.vedbFullBodyButtonFixV4Installed) return;
  window.vedbFullBodyButtonFixV4Installed = true;

  function fbSafe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function fbClean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function fbActors() {
    return typeof actors !== 'undefined' && Array.isArray(actors) ? actors : [];
  }

  function fbTitles() {
    return typeof titles !== 'undefined' && Array.isArray(titles) ? titles : [];
  }

  function fbAllItems() {
    return typeof allItems !== 'undefined' && Array.isArray(allItems)
      ? allItems
      : [];
  }

  function fbFindActor(actorName) {
    const wanted = fbClean(actorName);

    return (
      fbActors().find((actor) => fbClean(actor.name) === wanted) ||
      fbActors().find(
        (actor) =>
          fbClean(actor.name).includes(wanted) ||
          wanted.includes(fbClean(actor.name))
      ) ||
      null
    );
  }

  function fbFindTitle(titleName) {
    const wanted = fbClean(titleName);

    return (
      fbTitles().find((title) => fbClean(title.name) === wanted) ||
      fbTitles().find(
        (title) =>
          fbClean(title.name).includes(wanted) ||
          wanted.includes(fbClean(title.name))
      ) ||
      null
    );
  }

  function fbCurrentActorName() {
    try {
      if (
        typeof currentEntity !== 'undefined' &&
        currentEntity &&
        currentEntity.mode === 'actor' &&
        currentEntity.name
      ) {
        return currentEntity.name;
      }
    } catch (error) {}

    const pageTitle = document.querySelector('#sectionPage h2');
    if (pageTitle && pageTitle.textContent.includes('—')) {
      return pageTitle.textContent.split('—')[0].trim();
    }

    const nameOnPage = document.getElementById('entityName');
    return nameOnPage ? nameOnPage.textContent.trim() : '';
  }

  function fbMakeInitials(titleName) {
    const words = String(titleName || '')
      .replace(/[^a-zA-Z0-9 ]/g, ' ')
      .split(/\s+/)
      .filter(Boolean);

    if (!words.length) return 'T';

    return words
      .slice(0, 3)
      .map((word) => word[0].toUpperCase())
      .join('');
  }

  function fbAddTitleToSearch(titleRecord) {
    if (!titleRecord) return;

    const list = fbAllItems();

    if (list.length) {
      const exists = list.some(
        (item) =>
          item.mode === 'title' &&
          fbClean(item.name) === fbClean(titleRecord.name)
      );

      if (!exists) {
        list.push(titleRecord);
      }
    }

    if (typeof syncAllItemsForSearch === 'function') {
      syncAllItemsForSearch();
    }
  }

  function fbEnsureActorInTitle(titleRecord, actorName, role) {
    if (!titleRecord || !actorName) return;

    titleRecord.cast = Array.isArray(titleRecord.cast) ? titleRecord.cast : [];
    titleRecord.characters = Array.isArray(titleRecord.characters)
      ? titleRecord.characters
      : [];

    const alreadyThere = titleRecord.cast.some(
      (name) => fbClean(name) === fbClean(actorName)
    );

    if (!alreadyThere) {
      titleRecord.cast.push(actorName);
      titleRecord.characters.push(role || 'Cast member');
    }
  }

  function fbCreateStarterTitle(actorName, titleName, year, type, role) {
    const cleanTitle = String(titleName || '').trim();

    if (!cleanTitle) return null;

    const titleRecord = {
      mode: 'title',
      name: cleanTitle,
      job: String(type || 'Movie')
        .toLowerCase()
        .includes('tv')
        ? 'TV Series • Credit Page'
        : 'Movie • Credit Page',
      initials: fbMakeInitials(cleanTitle),
      summary:
        cleanTitle +
        ' is part of ' +
        actorName +
        "'s Full Body of Work on VEDB.",
      overview:
        'Original VEDB demo overview: This starter Title Sphere was created from ' +
        actorName +
        "'s Full Body of Work credit list. Add cast, crew, trailers, reviews, box office, where-to-watch data, and Behind the Screen details later.",
      cast: [actorName],
      characters: [role || 'Cast member'],
      crew: ['Crew details to be added'],
      awards: ['Awards details to be added'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder'],
      videos: ['Trailer placeholder'],
      similar: [],
      whereWatch: ['Where-to-watch data not verified yet'],
      facts: {
        'Release Year': year || '',
        Type: type || 'Movie',
        'VEDB Status': 'Starter title sphere from Full Body of Work',
      },
      buzz: 80,
      sources: ['Source link to be added'],
    };

    if (typeof addTitleOnce === 'function') {
      addTitleOnce(titleRecord);
    } else if (typeof titles !== 'undefined' && Array.isArray(titles)) {
      titles.push(titleRecord);
    }

    fbAddTitleToSearch(titleRecord);

    return fbFindTitle(cleanTitle) || titleRecord;
  }

  function fbOpenTitleSphere(actorName, titleName, year, type, role) {
    const cleanTitle = String(titleName || '').trim();

    if (!cleanTitle) {
      alert('This credit is missing a title name.');
      return;
    }

    let titleRecord = fbFindTitle(cleanTitle);

    if (!titleRecord) {
      titleRecord = fbCreateStarterTitle(
        actorName || fbCurrentActorName(),
        cleanTitle,
        year || '',
        type || 'Movie',
        role || 'Cast member'
      );
    } else {
      fbEnsureActorInTitle(
        titleRecord,
        actorName || fbCurrentActorName(),
        role || 'Cast member'
      );
      fbAddTitleToSearch(titleRecord);
    }

    if (!titleRecord) {
      alert('VEDB could not open or create this Title Sphere.');
      return;
    }

    if (typeof loadEntity === 'function') {
      loadEntity(titleRecord);
    } else if (typeof loadEntityByName === 'function') {
      loadEntityByName('title', titleRecord.name);
    }

    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');

    if (page) page.style.display = 'none';
    if (main) main.style.display = 'grid';

    if (typeof updateSpherePositions === 'function') {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
      setTimeout(updateSpherePositions, 600);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.openOrCreateTitleSphereFromFullBodyCredit = fbOpenTitleSphere;

  try {
    openOrCreateTitleSphereFromFullBodyCredit =
      window.openOrCreateTitleSphereFromFullBodyCredit;
  } catch (error) {}

  function fbGetCredits(actorName) {
    if (typeof getFullBodyOfWorkForActor === 'function') {
      try {
        const credits = getFullBodyOfWorkForActor(actorName);
        if (Array.isArray(credits)) return credits;
      } catch (error) {}
    }

    const actor = fbFindActor(actorName);
    if (!actor) return [];

    return (actor.knownFor || []).map(function (item, index) {
      const title = Array.isArray(item) ? item[0] : String(item || '');
      const year = Array.isArray(item) ? item[1] : '';

      return {
        actorName: actor.name,
        title: title,
        year: year || '',
        type: 'Signature Work',
        role:
          Array.isArray(actor.characters) && actor.characters[index]
            ? actor.characters[index]
            : 'Performer',
        source: 'Actor signature list',
      };
    });
  }

  function fbManualCredits() {
    try {
      const raw = localStorage.getItem('vedb_full_body_work_credits');
      if (!raw) return [];

      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function fbSaveManualCredits(credits) {
    try {
      localStorage.setItem(
        'vedb_full_body_work_credits',
        JSON.stringify(credits.slice(0, 500))
      );
    } catch (error) {}
  }

  function fbCreditCard(credit) {
    return `
      <article class="full-body-card">
        <h3>${fbSafe(credit.title)}</h3>

        <span class="full-body-pill">${fbSafe(credit.type || 'Credit')}</span>
        ${
          credit.year
            ? `<span class="full-body-pill">${fbSafe(credit.year)}</span>`
            : ''
        }

        <p><b>Role / Credit:</b> ${fbSafe(credit.role || 'To be added')}</p>
        <p><b>Source inside VEDB:</b> ${fbSafe(
          credit.source || 'VEDB credit library'
        )}</p>

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${fbSafe(credit.actorName || '')}"
          data-title="${fbSafe(credit.title || '')}"
          data-year="${fbSafe(credit.year || '')}"
          data-type="${fbSafe(credit.type || 'Movie')}"
          data-role="${fbSafe(credit.role || 'Cast member')}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  function fbAddCreditForm(actorName) {
    return `
      <div class="full-body-form">
        <h3>Add a Credit for ${fbSafe(actorName)}</h3>
        <p class="full-body-note">
          This saves in this browser and then refreshes the Full Body of Work page.
        </p>

        <label>Title name</label>
        <input id="fullBodyAddTitle" placeholder="Example: New Movie or TV Show">

        <label>Year</label>
        <input id="fullBodyAddYear" placeholder="Example: 2026">

        <label>Credit type</label>
        <select id="fullBodyAddType">
          <option value="Movie">Movie</option>
          <option value="TV Series">TV Series</option>
          <option value="Voice Role">Voice Role</option>
          <option value="Cameo">Cameo</option>
          <option value="Producer Credit">Producer Credit</option>
          <option value="Director Credit">Director Credit</option>
          <option value="Writer Credit">Writer Credit</option>
          <option value="Other Credit">Other Credit</option>
        </select>

        <label>Role / character / job</label>
        <input id="fullBodyAddRole" placeholder="Example: Peter Parker / Spider-Man">

        <button
          type="button"
          class="full-body-save-credit-v4"
          data-actor="${fbSafe(actorName)}"
        >
          Save Credit
        </button>
      </div>
    `;
  }

  function fbBuildContent(actorName) {
    const actor = fbFindActor(actorName);
    const credits = fbGetCredits(actorName);

    if (!actor) {
      return `
        <div class="full-body-box">
          <h3>Actor not found</h3>
          <p>VEDB could not find this actor in the actor list.</p>
        </div>
      `;
    }

    return `
      <div class="full-body-box">
        <h3>Signature Work vs. Full Body of Work</h3>
        <p class="full-body-note">
          <b>Signature Work</b> is the short highlight list.
          <b>Full Body of Work</b> is the longer credit list for the actor.
        </p>

        <p>
          <span class="full-body-pill">${
            credits.length
          } credits currently loaded</span>
          <span class="full-body-pill">${
            (actor.knownFor || []).length
          } signature titles</span>
        </p>
      </div>

      <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

      ${
        credits.length === 0
          ? `<div class="full-body-box"><p>No credits loaded yet.</p></div>`
          : `<div class="full-body-grid">
              ${credits.map(fbCreditCard).join('')}
            </div>`
      }

      ${fbAddCreditForm(actor.name)}
    `;
  }

  function fbOpenFullBodyPage(actorName) {
    const actor = fbFindActor(actorName || fbCurrentActorName());
    const nameToUse = actor ? actor.name : actorName || fbCurrentActorName();

    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');

    if (!page) return;

    if (typeof hideSearch === 'function') {
      hideSearch();
    }

    if (main) main.style.display = 'none';
    page.style.display = 'block';

    window.vedbLastFullBodyActorName = nameToUse;

    page.innerHTML = `
      <div class="glass section-page-inner">
        <div class="section-page-header">
          <div>
            <div class="blue-label">VEDB FULL BODY OF WORK</div>
            <h2>${fbSafe(nameToUse)} — Full Body of Work</h2>
          </div>

          <button
            type="button"
            class="back-button full-body-back-v4"
            data-actor="${fbSafe(nameToUse)}"
          >
            ← Back to Actor Sphere
          </button>
        </div>

        <div class="section-page-content">
          ${fbBuildContent(nameToUse)}
        </div>
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.openFullBodyOfWorkPage = fbOpenFullBodyPage;

  try {
    openFullBodyOfWorkPage = window.openFullBodyOfWorkPage;
  } catch (error) {}

  try {
    buildFullBodyCreditCard = fbCreditCard;
  } catch (error) {}

  try {
    buildFullBodyOfWorkContent = fbBuildContent;
  } catch (error) {}

  try {
    buildAddFullBodyCreditForm = fbAddCreditForm;
  } catch (error) {}

  window.saveFullBodyCredit = function (actorName) {
    const titleInput = document.getElementById('fullBodyAddTitle');
    const yearInput = document.getElementById('fullBodyAddYear');
    const typeInput = document.getElementById('fullBodyAddType');
    const roleInput = document.getElementById('fullBodyAddRole');

    const title = titleInput ? titleInput.value.trim() : '';
    const year = yearInput ? yearInput.value.trim() : '';
    const type = typeInput ? typeInput.value : 'Movie';
    const role = roleInput ? roleInput.value.trim() : '';

    if (!title) {
      alert('Please add a title name first.');
      return;
    }

    const nameToUse = actorName || fbCurrentActorName();
    const credits = fbManualCredits();

    credits.unshift({
      actorName: nameToUse,
      title: title,
      year: year,
      type: type,
      role: role || 'Credit to be added',
      source: 'Manually added VEDB credit',
      loadedTitle: !!fbFindTitle(title),
    });

    fbSaveManualCredits(credits);
    fbOpenFullBodyPage(nameToUse);
  };

  try {
    saveFullBodyCredit = window.saveFullBodyCredit;
  } catch (error) {}

  function fbBackToActor(actorName) {
    const actor = fbFindActor(
      actorName || window.vedbLastFullBodyActorName || fbCurrentActorName()
    );

    if (actor && typeof loadEntity === 'function') {
      loadEntity(actor);
    }

    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');

    if (page) page.style.display = 'none';
    if (main) main.style.display = 'grid';

    if (typeof updateSpherePositions === 'function') {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
      setTimeout(updateSpherePositions, 600);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.addEventListener(
    'click',
    function (event) {
      const mainFullBodyButton = event.target.closest(
        '.full-body-action-button'
      );

      if (mainFullBodyButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        fbOpenFullBodyPage(fbCurrentActorName());
        return;
      }

      const openTitleButton = event.target.closest('.full-body-open-title-v4');

      if (openTitleButton) {
        event.preventDefault();
        event.stopImmediatePropagation();

        fbOpenTitleSphere(
          openTitleButton.dataset.actor || '',
          openTitleButton.dataset.title || '',
          openTitleButton.dataset.year || '',
          openTitleButton.dataset.type || 'Movie',
          openTitleButton.dataset.role || 'Cast member'
        );

        return;
      }

      const oldOpenTitleButton = event.target.closest('.full-body-card button');

      if (
        oldOpenTitleButton &&
        oldOpenTitleButton.textContent.includes('Open Title Sphere')
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();

        const card = oldOpenTitleButton.closest('.full-body-card');
        const title =
          card && card.querySelector('h3')
            ? card.querySelector('h3').textContent.trim()
            : '';
        const roleLine = Array.from(card ? card.querySelectorAll('p') : [])
          .map((p) => p.textContent)
          .find((text) => text.includes('Role / Credit'));

        const role = roleLine
          ? roleLine.replace('Role / Credit:', '').trim()
          : 'Cast member';

        fbOpenTitleSphere(fbCurrentActorName(), title, '', 'Movie', role);

        return;
      }

      const saveButton = event.target.closest('.full-body-save-credit-v4');

      if (saveButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        window.saveFullBodyCredit(
          saveButton.dataset.actor || fbCurrentActorName()
        );
        return;
      }

      const oldSaveButton = event.target.closest('.full-body-form button');

      if (oldSaveButton && oldSaveButton.textContent.includes('Save Credit')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        window.saveFullBodyCredit(fbCurrentActorName());
        return;
      }

      const backButton = event.target.closest('.full-body-back-v4');

      if (backButton) {
        event.preventDefault();
        event.stopImmediatePropagation();
        fbBackToActor(backButton.dataset.actor || '');
        return;
      }

      const oldBackButton = event.target.closest('#sectionPage .back-button');

      if (
        oldBackButton &&
        document.getElementById('sectionPage') &&
        document
          .getElementById('sectionPage')
          .textContent.includes('VEDB FULL BODY OF WORK')
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
        fbBackToActor(fbCurrentActorName());
      }
    },
    true
  );

  function fbRefreshIfFullBodyOpen() {
    const page = document.getElementById('sectionPage');

    if (!page || page.style.display === 'none') return;
    if (!page.textContent.includes('VEDB FULL BODY OF WORK')) return;

    fbOpenFullBodyPage(
      window.vedbLastFullBodyActorName || fbCurrentActorName()
    );
  }

  setTimeout(fbRefreshIfFullBodyOpen, 150);

  if (typeof addFullBodyOfWorkButton === 'function') {
    setTimeout(addFullBodyOfWorkButton, 100);
    setTimeout(addFullBodyOfWorkButton, 500);
  }

  console.log('VEDB Full Body of Work Button Fix V4 loaded.');
})();
/* VEDB TOP 50 ACTORS ONLY — SAFE ADD-ON
   Paste at the VERY BOTTOM of the JS box.

   This ONLY adds actor data.
   It does NOT change startup.
   It does NOT change Full Page memory.
   It does NOT force any actor to load.
   It does NOT touch localStorage.
   It does NOT touch buttons, tiles, Full Body of Work, or Signature Work.
*/

(function () {
  if (window.vedbTop50ActorsOnlyInstalled) return;
  window.vedbTop50ActorsOnlyInstalled = true;

  function cleanName(name) {
    return String(name || '')
      .toLowerCase()
      .replace(/\./g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function makeInitials(name) {
    return String(name || '')
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  }

  function makeActor(record) {
    return {
      mode: 'actor',
      name: record.name,
      job: record.job || 'Actor',
      initials: record.initials || makeInitials(record.name),
      summary: record.summary || record.name + ' is a VEDB actor profile.',
      bio:
        record.bio ||
        'Original VEDB demo bio: This profile connects the actor to signature roles, characters, and movie/show work.',
      knownFor: record.knownFor || [],
      awards: record.awards || [
        'Awards and recognition to verify before publishing.',
      ],
      facts: {
        'Profile Type': 'Public VEDB Profile',
        'Photo Status': 'Placeholder only',
        'VEDB Status': 'Top 50 actor batch add-on',
      },
      characters: record.characters || [],
      videos: [
        'Interview placeholder',
        'Behind the Role placeholder',
        'Trailer placeholder',
      ],
      quotes: [
        'Quote section placeholder — add properly sourced quotes later.',
      ],
      collaborators: record.collaborators || [],
      social: record.social || 'Audience momentum placeholder.',
      buzz: record.buzz || 86,
      sources: record.sources || ['Source links to verify before publishing.'],
    };
  }

  function addActorOnlyIfMissing(record) {
    if (typeof actors === 'undefined' || !Array.isArray(actors)) {
      console.error('VEDB actor add-on error: actors array was not found.');
      return;
    }

    const newActor = makeActor(record);
    const key = cleanName(newActor.name);

    const alreadyInActors = actors.some(
      (actor) => cleanName(actor.name) === key
    );

    if (!alreadyInActors) {
      actors.push(newActor);
    }

    if (typeof allItems !== 'undefined' && Array.isArray(allItems)) {
      const alreadyInSearch = allItems.some(
        (item) => item.mode === 'actor' && cleanName(item.name) === key
      );

      if (!alreadyInSearch && !alreadyInActors) {
        allItems.push(newActor);
      }
    }
  }

  const top50ActorsOnly = [
    {
      name: 'Joshua Rush',
      summary:
        'Joshua Rush is known for Andi Mack, Parental Guidance, and voice acting work.',
      knownFor: [
        ['Andi Mack', 2017],
        ['Parental Guidance', 2012],
        ['The Lion Guard', 2015],
        ["Where's Waldo?", 2019],
      ],
      characters: ['Cyrus Goodman', 'Turner Simmons', 'Bunga', 'Waldo'],
      collaborators: [
        'Peyton Elizabeth Lee',
        'Sofia Wylie',
        'Bette Midler',
        'Billy Crystal',
      ],
      buzz: 90,
    },
    {
      name: 'Jennifer Lawrence',
      job: 'Actress • Producer',
      summary:
        'Jennifer Lawrence is known for The Hunger Games, Silver Linings Playbook, X-Men, and American Hustle.',
      knownFor: [
        ['The Hunger Games', 2012],
        ['Silver Linings Playbook', 2012],
        ['X-Men: First Class', 2011],
        ['American Hustle', 2013],
      ],
      characters: [
        'Katniss Everdeen',
        'Tiffany Maxwell',
        'Mystique / Raven Darkhölme',
        'Rosalyn Rosenfeld',
      ],
      collaborators: [
        'Josh Hutcherson',
        'Liam Hemsworth',
        'Bradley Cooper',
        'David O. Russell',
      ],
      buzz: 96,
    },
    {
      name: 'Brad Pitt',
      summary:
        'Brad Pitt is known for major film roles, producing, ensemble dramas, thrillers, and action films.',
      knownFor: [
        ['Fight Club', 1999],
        ['Once Upon a Time in Hollywood', 2019],
        ["Ocean's Eleven", 2001],
        ['Se7en', 1995],
      ],
      characters: ['Tyler Durden', 'Cliff Booth', 'Rusty Ryan', 'David Mills'],
      collaborators: [
        'Leonardo DiCaprio',
        'George Clooney',
        'Morgan Freeman',
        'Quentin Tarantino',
      ],
      buzz: 95,
    },
    {
      name: 'Angelina Jolie',
      job: 'Actress • Filmmaker',
      summary:
        'Angelina Jolie is known for action films, drama, fantasy roles, and filmmaker work.',
      knownFor: [
        ['Lara Croft: Tomb Raider', 2001],
        ['Maleficent', 2014],
        ['Girl, Interrupted', 1999],
        ['Mr. & Mrs. Smith', 2005],
      ],
      characters: ['Lara Croft', 'Maleficent', 'Lisa Rowe', 'Jane Smith'],
      collaborators: ['Brad Pitt', 'Elle Fanning', 'Winona Ryder'],
      buzz: 94,
    },
    {
      name: 'Will Smith',
      job: 'Actor • Producer • Musician',
      summary:
        'Will Smith is known for comedy, action, drama, music, and blockbuster movie roles.',
      knownFor: [
        ['The Fresh Prince of Bel-Air', 1990],
        ['Men in Black', 1997],
        ['Ali', 2001],
        ['King Richard', 2021],
      ],
      characters: ['Will Smith', 'Agent J', 'Muhammad Ali', 'Richard Williams'],
      collaborators: [
        'Tommy Lee Jones',
        'Martin Lawrence',
        'Jada Pinkett Smith',
      ],
      buzz: 94,
    },
    {
      name: 'Johnny Depp',
      summary:
        'Johnny Depp is known for character transformations, fantasy roles, dramas, and franchise performances.',
      knownFor: [
        ['Pirates of the Caribbean: The Curse of the Black Pearl', 2003],
        ['Edward Scissorhands', 1990],
        ['Sweeney Todd', 2007],
        ['Finding Neverland', 2004],
      ],
      characters: [
        'Jack Sparrow',
        'Edward Scissorhands',
        'Sweeney Todd',
        'J. M. Barrie',
      ],
      collaborators: ['Tim Burton', 'Helena Bonham Carter', 'Orlando Bloom'],
      buzz: 93,
    },
    {
      name: 'Ryan Reynolds',
      job: 'Actor • Producer',
      summary:
        'Ryan Reynolds is known for comedy, action, superhero films, and fan-driven movie marketing.',
      knownFor: [
        ['Deadpool', 2016],
        ['Free Guy', 2021],
        ['The Proposal', 2009],
        ['Deadpool & Wolverine', 2024],
      ],
      characters: [
        'Wade Wilson / Deadpool',
        'Guy',
        'Andrew Paxton',
        'Wade Wilson / Deadpool',
      ],
      collaborators: ['Hugh Jackman', 'Blake Lively', 'Sandra Bullock'],
      buzz: 95,
    },
    {
      name: 'Chris Evans',
      summary:
        'Chris Evans is known for Captain America, ensemble films, action roles, and comedy-drama work.',
      knownFor: [
        ['Captain America: The First Avenger', 2011],
        ['The Avengers', 2012],
        ['Knives Out', 2019],
        ['Snowpiercer', 2013],
      ],
      characters: [
        'Steve Rogers / Captain America',
        'Steve Rogers / Captain America',
        'Ransom Drysdale',
        'Curtis Everett',
      ],
      collaborators: [
        'Robert Downey Jr.',
        'Scarlett Johansson',
        'Ana de Armas',
      ],
      buzz: 94,
    },
    {
      name: 'Chris Hemsworth',
      summary:
        'Chris Hemsworth is known for Thor, action roles, comedy, and franchise work.',
      knownFor: [
        ['Thor', 2011],
        ['The Avengers', 2012],
        ['Extraction', 2020],
        ['Furiosa: A Mad Max Saga', 2024],
      ],
      characters: ['Thor', 'Thor', 'Tyler Rake', 'Dementus'],
      collaborators: ['Tom Hiddleston', 'Chris Evans', 'Scarlett Johansson'],
      buzz: 94,
    },
    {
      name: 'Mark Ruffalo',
      summary:
        'Mark Ruffalo is known for drama, independent film, ensemble work, and playing Bruce Banner / Hulk.',
      knownFor: [
        ['The Avengers', 2012],
        ['Spotlight', 2015],
        ['Poor Things', 2023],
        ['Zodiac', 2007],
      ],
      characters: [
        'Bruce Banner / Hulk',
        'Michael Rezendes',
        'Duncan Wedderburn',
        'Dave Toschi',
      ],
      collaborators: ['Robert Downey Jr.', 'Michael Keaton', 'Emma Stone'],
      buzz: 90,
    },
    {
      name: 'Chris Pratt',
      summary:
        'Chris Pratt is known for Guardians of the Galaxy, Jurassic World, comedy, and action adventure roles.',
      knownFor: [
        ['Guardians of the Galaxy', 2014],
        ['Jurassic World', 2015],
        ['Parks and Recreation', 2009],
        ['The Super Mario Bros. Movie', 2023],
      ],
      characters: [
        'Peter Quill / Star-Lord',
        'Owen Grady',
        'Andy Dwyer',
        'Mario',
      ],
      collaborators: ['Zoe Saldaña', 'Bryce Dallas Howard', 'Dave Bautista'],
      buzz: 92,
    },
    {
      name: 'Brie Larson',
      job: 'Actress • Filmmaker',
      summary:
        'Brie Larson is known for Room, Captain Marvel, drama, action, and filmmaker work.',
      knownFor: [
        ['Room', 2015],
        ['Captain Marvel', 2019],
        ['Short Term 12', 2013],
        ['Lessons in Chemistry', 2023],
      ],
      characters: [
        'Joy Newsome',
        'Carol Danvers / Captain Marvel',
        'Grace Howard',
        'Elizabeth Zott',
      ],
      collaborators: ['Samuel L. Jackson', 'Jacob Tremblay', 'Teyonah Parris'],
      buzz: 90,
    },
    {
      name: 'Elizabeth Olsen',
      summary:
        'Elizabeth Olsen is known for Wanda Maximoff, drama, thriller, and franchise television work.',
      knownFor: [
        ['WandaVision', 2021],
        ['Avengers: Age of Ultron', 2015],
        ['Martha Marcy May Marlene', 2011],
        ['Doctor Strange in the Multiverse of Madness', 2022],
      ],
      characters: [
        'Wanda Maximoff / Scarlet Witch',
        'Wanda Maximoff',
        'Martha',
        'Wanda Maximoff / Scarlet Witch',
      ],
      collaborators: ['Paul Bettany', 'Benedict Cumberbatch', 'Jeremy Renner'],
      buzz: 91,
    },
    {
      name: 'Benedict Cumberbatch',
      summary:
        'Benedict Cumberbatch is known for Sherlock, Doctor Strange, voice work, and dramatic film roles.',
      knownFor: [
        ['Sherlock', 2010],
        ['Doctor Strange', 2016],
        ['The Imitation Game', 2014],
        ['The Power of the Dog', 2021],
      ],
      characters: [
        'Sherlock Holmes',
        'Stephen Strange / Doctor Strange',
        'Alan Turing',
        'Phil Burbank',
      ],
      collaborators: ['Martin Freeman', 'Elizabeth Olsen', 'Keira Knightley'],
      buzz: 92,
    },
    {
      name: 'Hugh Jackman',
      job: 'Actor • Singer • Producer',
      summary:
        'Hugh Jackman is known for Wolverine, musicals, drama, and stage work.',
      knownFor: [
        ['X-Men', 2000],
        ['Logan', 2017],
        ['The Greatest Showman', 2017],
        ['Les Misérables', 2012],
      ],
      characters: [
        'Logan / Wolverine',
        'Logan / Wolverine',
        'P. T. Barnum',
        'Jean Valjean',
      ],
      collaborators: ['Ryan Reynolds', 'Patrick Stewart', 'Anne Hathaway'],
      buzz: 95,
    },
    {
      name: 'Ryan Gosling',
      summary:
        'Ryan Gosling is known for drama, romance, comedy, music-driven films, and stylized performances.',
      knownFor: [
        ['La La Land', 2016],
        ['Barbie', 2023],
        ['Drive', 2011],
        ['The Notebook', 2004],
      ],
      characters: ['Sebastian Wilder', 'Ken', 'Driver', 'Noah Calhoun'],
      collaborators: ['Emma Stone', 'Margot Robbie', 'Rachel McAdams'],
      buzz: 94,
    },
    {
      name: 'Margot Robbie',
      job: 'Actress • Producer',
      summary:
        'Margot Robbie is known for Barbie, Harley Quinn, drama, comedy, and producing.',
      knownFor: [
        ['Barbie', 2023],
        ['I, Tonya', 2017],
        ['Suicide Squad', 2016],
        ['The Wolf of Wall Street', 2013],
      ],
      characters: ['Barbie', 'Tonya Harding', 'Harley Quinn', 'Naomi Lapaglia'],
      collaborators: ['Ryan Gosling', 'Leonardo DiCaprio', 'Greta Gerwig'],
      buzz: 96,
    },
    {
      name: 'Emma Stone',
      summary:
        'Emma Stone is known for comedy, drama, musicals, and award-winning film performances.',
      knownFor: [
        ['La La Land', 2016],
        ['Poor Things', 2023],
        ['Easy A', 2010],
        ['The Amazing Spider-Man', 2012],
      ],
      characters: [
        'Mia Dolan',
        'Bella Baxter',
        'Olive Penderghast',
        'Gwen Stacy',
      ],
      collaborators: ['Ryan Gosling', 'Mark Ruffalo', 'Andrew Garfield'],
      buzz: 95,
    },
    {
      name: 'Natalie Portman',
      job: 'Actress • Filmmaker',
      summary:
        'Natalie Portman is known for drama, science fiction, franchise roles, and filmmaker work.',
      knownFor: [
        ['Black Swan', 2010],
        ['Star Wars: Episode I – The Phantom Menace', 1999],
        ['Thor', 2011],
        ['V for Vendetta', 2005],
      ],
      characters: [
        'Nina Sayers',
        'Padmé Amidala',
        'Jane Foster',
        'Evey Hammond',
      ],
      collaborators: ['Mila Kunis', 'Chris Hemsworth', 'Hayden Christensen'],
      buzz: 92,
    },
    {
      name: 'Anne Hathaway',
      summary:
        'Anne Hathaway is known for musicals, comedy, drama, fantasy, and major film roles.',
      knownFor: [
        ['The Princess Diaries', 2001],
        ['Les Misérables', 2012],
        ['The Devil Wears Prada', 2006],
        ['The Dark Knight Rises', 2012],
      ],
      characters: ['Mia Thermopolis', 'Fantine', 'Andy Sachs', 'Selina Kyle'],
      collaborators: ['Meryl Streep', 'Hugh Jackman', 'Christian Bale'],
      buzz: 92,
    },
    {
      name: 'Sandra Bullock',
      job: 'Actress • Producer',
      summary:
        'Sandra Bullock is known for comedy, drama, action, romance, and major box-office success.',
      knownFor: [
        ['Speed', 1994],
        ['The Blind Side', 2009],
        ['Gravity', 2013],
        ['Miss Congeniality', 2000],
      ],
      characters: [
        'Annie Porter',
        'Leigh Anne Tuohy',
        'Ryan Stone',
        'Gracie Hart',
      ],
      collaborators: ['Keanu Reeves', 'George Clooney', 'Ryan Reynolds'],
      buzz: 93,
    },
    {
      name: 'George Clooney',
      job: 'Actor • Director • Producer',
      summary:
        'George Clooney is known for film, television, directing, producing, and ensemble movies.',
      knownFor: [
        ['ER', 1994],
        ["Ocean's Eleven", 2001],
        ['Syriana', 2005],
        ['Up in the Air', 2009],
      ],
      characters: ['Doug Ross', 'Danny Ocean', 'Bob Barnes', 'Ryan Bingham'],
      collaborators: ['Brad Pitt', 'Julia Roberts', 'Sandra Bullock'],
      buzz: 92,
    },
    {
      name: 'Matt Damon',
      job: 'Actor • Producer • Screenwriter',
      summary:
        'Matt Damon is known for drama, action franchises, writing, producing, and ensemble work.',
      knownFor: [
        ['Good Will Hunting', 1997],
        ['The Bourne Identity', 2002],
        ['The Martian', 2015],
        ['Oppenheimer', 2023],
      ],
      characters: [
        'Will Hunting',
        'Jason Bourne',
        'Mark Watney',
        'Leslie Groves',
      ],
      collaborators: ['Ben Affleck', 'George Clooney', 'Christopher Nolan'],
      buzz: 92,
    },
    {
      name: 'Ben Affleck',
      job: 'Actor • Director • Producer • Screenwriter',
      summary:
        'Ben Affleck is known for acting, directing, writing, producing, and major studio films.',
      knownFor: [
        ['Good Will Hunting', 1997],
        ['Argo', 2012],
        ['Gone Girl', 2014],
        ['Batman v Superman: Dawn of Justice', 2016],
      ],
      characters: [
        'Chuckie Sullivan',
        'Tony Mendez',
        'Nick Dunne',
        'Bruce Wayne / Batman',
      ],
      collaborators: ['Matt Damon', 'Rosamund Pike', 'Henry Cavill'],
      buzz: 91,
    },
    {
      name: 'Christian Bale',
      summary:
        'Christian Bale is known for physical transformations, drama, action, and franchise roles.',
      knownFor: [
        ['The Dark Knight', 2008],
        ['American Psycho', 2000],
        ['The Fighter', 2010],
        ['Ford v Ferrari', 2019],
      ],
      characters: [
        'Bruce Wayne / Batman',
        'Patrick Bateman',
        'Dicky Eklund',
        'Ken Miles',
      ],
      collaborators: ['Christopher Nolan', 'Heath Ledger', 'Matt Damon'],
      buzz: 93,
    },
    {
      name: 'Joaquin Phoenix',
      summary:
        'Joaquin Phoenix is known for intense dramatic performances, character studies, and award-winning roles.',
      knownFor: [
        ['Joker', 2019],
        ['Gladiator', 2000],
        ['Walk the Line', 2005],
        ['Her', 2013],
      ],
      characters: [
        'Arthur Fleck / Joker',
        'Commodus',
        'Johnny Cash',
        'Theodore Twombly',
      ],
      collaborators: ['Ridley Scott', 'Reese Witherspoon', 'Spike Jonze'],
      buzz: 92,
    },
    {
      name: 'Heath Ledger',
      summary:
        'Heath Ledger is known for The Dark Knight, drama, romance, and acclaimed character work.',
      knownFor: [
        ['The Dark Knight', 2008],
        ['Brokeback Mountain', 2005],
        ['10 Things I Hate About You', 1999],
        ["A Knight's Tale", 2001],
      ],
      characters: [
        'The Joker',
        'Ennis Del Mar',
        'Patrick Verona',
        'William Thatcher',
      ],
      collaborators: ['Christian Bale', 'Jake Gyllenhaal', 'Julia Stiles'],
      buzz: 92,
    },
    {
      name: 'Daniel Day-Lewis',
      summary:
        'Daniel Day-Lewis is known for immersive acting, historical drama, and acclaimed performances.',
      knownFor: [
        ['Lincoln', 2012],
        ['There Will Be Blood', 2007],
        ['My Left Foot', 1989],
        ['Gangs of New York', 2002],
      ],
      characters: [
        'Abraham Lincoln',
        'Daniel Plainview',
        'Christy Brown',
        'Bill the Butcher',
      ],
      collaborators: [
        'Steven Spielberg',
        'Paul Thomas Anderson',
        'Martin Scorsese',
      ],
      buzz: 91,
    },
    {
      name: 'Al Pacino',
      summary:
        'Al Pacino is known for crime drama, theater, intense performances, and classic film roles.',
      knownFor: [
        ['The Godfather', 1972],
        ['Scarface', 1983],
        ['Scent of a Woman', 1992],
        ['Heat', 1995],
      ],
      characters: [
        'Michael Corleone',
        'Tony Montana',
        'Frank Slade',
        'Vincent Hanna',
      ],
      collaborators: [
        'Robert De Niro',
        'Francis Ford Coppola',
        'Michelle Pfeiffer',
      ],
      buzz: 94,
    },
    {
      name: 'Robert De Niro',
      job: 'Actor • Producer',
      summary:
        'Robert De Niro is known for crime films, drama, comedy, and major director collaborations.',
      knownFor: [
        ['Taxi Driver', 1976],
        ['Raging Bull', 1980],
        ['Goodfellas', 1990],
        ['The Godfather Part II', 1974],
      ],
      characters: [
        'Travis Bickle',
        'Jake LaMotta',
        'Jimmy Conway',
        'Vito Corleone',
      ],
      collaborators: ['Martin Scorsese', 'Al Pacino', 'Joe Pesci'],
      buzz: 94,
    },
    {
      name: 'Harrison Ford',
      summary:
        'Harrison Ford is known for Star Wars, Indiana Jones, action adventure, and science fiction classics.',
      knownFor: [
        ['Star Wars', 1977],
        ['Raiders of the Lost Ark', 1981],
        ['Blade Runner', 1982],
        ['The Fugitive', 1993],
      ],
      characters: [
        'Han Solo',
        'Indiana Jones',
        'Rick Deckard',
        'Richard Kimble',
      ],
      collaborators: ['Mark Hamill', 'Carrie Fisher', 'Steven Spielberg'],
      buzz: 95,
    },
    {
      name: 'Sigourney Weaver',
      summary:
        'Sigourney Weaver is known for Alien, Avatar, science fiction, drama, and comedy.',
      knownFor: [
        ['Alien', 1979],
        ['Aliens', 1986],
        ['Avatar', 2009],
        ['Ghostbusters', 1984],
      ],
      characters: [
        'Ellen Ripley',
        'Ellen Ripley',
        'Grace Augustine',
        'Dana Barrett',
      ],
      collaborators: ['James Cameron', 'Bill Murray', 'Tom Skerritt'],
      buzz: 91,
    },
    {
      name: 'Jamie Foxx',
      job: 'Actor • Singer • Comedian',
      summary:
        'Jamie Foxx is known for acting, music, comedy, drama, and action roles.',
      knownFor: [
        ['Ray', 2004],
        ['Django Unchained', 2012],
        ['Collateral', 2004],
        ['Spider-Man: No Way Home', 2021],
      ],
      characters: [
        'Ray Charles',
        'Django Freeman',
        'Max Durocher',
        'Max Dillon / Electro',
      ],
      collaborators: ['Quentin Tarantino', 'Tom Cruise', 'Andrew Garfield'],
      buzz: 91,
    },
    {
      name: 'Idris Elba',
      job: 'Actor • Producer • Musician',
      summary:
        'Idris Elba is known for television drama, action, crime stories, franchise roles, and voice work.',
      knownFor: [
        ['Luther', 2010],
        ['The Wire', 2002],
        ['Thor', 2011],
        ['Beasts of No Nation', 2015],
      ],
      characters: ['John Luther', 'Stringer Bell', 'Heimdall', 'Commandant'],
      collaborators: ['Chris Hemsworth', 'Matthew McConaughey', 'Viola Davis'],
      buzz: 92,
    },
    {
      name: 'Daniel Craig',
      summary:
        'Daniel Craig is known for James Bond, mystery films, drama, and action roles.',
      knownFor: [
        ['Casino Royale', 2006],
        ['Skyfall', 2012],
        ['Knives Out', 2019],
        ['No Time to Die', 2021],
      ],
      characters: ['James Bond', 'James Bond', 'Benoit Blanc', 'James Bond'],
      collaborators: ['Ana de Armas', 'Rian Johnson', 'Judi Dench'],
      buzz: 93,
    },
    {
      name: 'Kate Winslet',
      summary:
        'Kate Winslet is known for Titanic, drama, period films, and acclaimed television performances.',
      knownFor: [
        ['Titanic', 1997],
        ['The Reader', 2008],
        ['Mare of Easttown', 2021],
        ['Eternal Sunshine of the Spotless Mind', 2004],
      ],
      characters: [
        'Rose DeWitt Bukater',
        'Hanna Schmitz',
        'Mare Sheehan',
        'Clementine Kruczynski',
      ],
      collaborators: ['Leonardo DiCaprio', 'Jim Carrey', 'Guy Pearce'],
      buzz: 93,
    },
    {
      name: 'Hugh Grant',
      summary:
        'Hugh Grant is known for romantic comedies, satire, drama, and character roles.',
      knownFor: [
        ['Notting Hill', 1999],
        ['Four Weddings and a Funeral', 1994],
        ['Love Actually', 2003],
        ['Wonka', 2023],
      ],
      characters: ['William Thacker', 'Charles', 'David', 'Oompa-Loompa'],
      collaborators: ['Julia Roberts', 'Emma Thompson', 'Timothée Chalamet'],
      buzz: 88,
    },
    {
      name: 'Liam Neeson',
      summary:
        'Liam Neeson is known for drama, action thrillers, historical films, and voice work.',
      knownFor: [
        ["Schindler's List", 1993],
        ['Taken', 2008],
        ['Star Wars: Episode I – The Phantom Menace', 1999],
        ['Batman Begins', 2005],
      ],
      characters: [
        'Oskar Schindler',
        'Bryan Mills',
        'Qui-Gon Jinn',
        "Ra's al Ghul",
      ],
      collaborators: ['Steven Spielberg', 'Ewan McGregor', 'Christian Bale'],
      buzz: 91,
    },
    {
      name: 'Samuel L. Jackson',
      summary:
        'Samuel L. Jackson is known for franchise roles, action, drama, voice work, and a long film career.',
      knownFor: [
        ['Pulp Fiction', 1994],
        ['The Avengers', 2012],
        ['Star Wars: Episode I – The Phantom Menace', 1999],
        ['Django Unchained', 2012],
      ],
      characters: ['Jules Winnfield', 'Nick Fury', 'Mace Windu', 'Stephen'],
      collaborators: ['Quentin Tarantino', 'Robert Downey Jr.', 'Brie Larson'],
      buzz: 96,
    },
    {
      name: 'Jake Gyllenhaal',
      summary:
        'Jake Gyllenhaal is known for thrillers, drama, action, and intense character roles.',
      knownFor: [
        ['Nightcrawler', 2014],
        ['Brokeback Mountain', 2005],
        ['Donnie Darko', 2001],
        ['Spider-Man: Far From Home', 2019],
      ],
      characters: [
        'Lou Bloom',
        'Jack Twist',
        'Donnie Darko',
        'Quentin Beck / Mysterio',
      ],
      collaborators: ['Heath Ledger', 'Tom Holland', 'Riz Ahmed'],
      buzz: 91,
    },
    {
      name: 'Marisa Tomei',
      summary:
        'Marisa Tomei is known for comedy, drama, stage work, and franchise roles.',
      knownFor: [
        ['My Cousin Vinny', 1992],
        ['The Wrestler', 2008],
        ['Spider-Man: Homecoming', 2017],
        ['In the Bedroom', 2001],
      ],
      characters: ['Mona Lisa Vito', 'Cassidy', 'May Parker', 'Natalie Strout'],
      collaborators: ['Tom Holland', 'Robert Downey Jr.', 'Mickey Rourke'],
      buzz: 87,
    },
    {
      name: 'Michael Keaton',
      summary:
        'Michael Keaton is known for Batman, Birdman, comedy, drama, and franchise roles.',
      knownFor: [
        ['Batman', 1989],
        ['Birdman', 2014],
        ['Beetlejuice', 1988],
        ['Spider-Man: Homecoming', 2017],
      ],
      characters: [
        'Bruce Wayne / Batman',
        'Riggan Thomson',
        'Betelgeuse',
        'Adrian Toomes / Vulture',
      ],
      collaborators: ['Tim Burton', 'Tom Holland', 'Mark Ruffalo'],
      buzz: 91,
    },
    {
      name: 'Timothée Chalamet',
      summary:
        'Timothée Chalamet is known for Dune, coming-of-age drama, musicals, and prestige films.',
      knownFor: [
        ['Call Me by Your Name', 2017],
        ['Dune', 2021],
        ['Wonka', 2023],
        ['Little Women', 2019],
      ],
      characters: [
        'Elio Perlman',
        'Paul Atreides',
        'Willy Wonka',
        'Theodore Laurence',
      ],
      collaborators: ['Zendaya', 'Rebecca Ferguson', 'Hugh Grant'],
      buzz: 95,
    },
    {
      name: 'Rebecca Ferguson',
      summary:
        'Rebecca Ferguson is known for Dune, Mission: Impossible, thriller, drama, and science fiction roles.',
      knownFor: [
        ['Dune', 2021],
        ['Mission: Impossible – Rogue Nation', 2015],
        ['Silo', 2023],
        ['The Greatest Showman', 2017],
      ],
      characters: [
        'Lady Jessica',
        'Ilsa Faust',
        'Juliette Nichols',
        'Jenny Lind',
      ],
      collaborators: ['Tom Cruise', 'Timothée Chalamet', 'Zendaya'],
      buzz: 89,
    },
    {
      name: 'Oscar Isaac',
      summary:
        'Oscar Isaac is known for Star Wars, Dune, drama, science fiction, and limited series work.',
      knownFor: [
        ['Inside Llewyn Davis', 2013],
        ['Star Wars: The Force Awakens', 2015],
        ['Dune', 2021],
        ['Moon Knight', 2022],
      ],
      characters: [
        'Llewyn Davis',
        'Poe Dameron',
        'Duke Leto Atreides',
        'Marc Spector / Moon Knight',
      ],
      collaborators: ['Timothée Chalamet', 'Jessica Chastain', 'John Boyega'],
      buzz: 90,
    },
    {
      name: 'Josh Hutcherson',
      summary:
        'Josh Hutcherson is known for The Hunger Games, family films, and genre projects.',
      knownFor: [
        ['The Hunger Games', 2012],
        ['Bridge to Terabithia', 2007],
        ['Journey to the Center of the Earth', 2008],
        ["Five Nights at Freddy's", 2023],
      ],
      characters: [
        'Peeta Mellark',
        'Jesse Aarons',
        'Sean Anderson',
        'Mike Schmidt',
      ],
      collaborators: ['Jennifer Lawrence', 'Liam Hemsworth', 'Woody Harrelson'],
      buzz: 88,
    },
    {
      name: 'Liam Hemsworth',
      summary:
        'Liam Hemsworth is known for The Hunger Games, action films, romance, and television work.',
      knownFor: [
        ['The Hunger Games', 2012],
        ['The Last Song', 2010],
        ['Independence Day: Resurgence', 2016],
        ['The Witcher', 2025],
      ],
      characters: [
        'Gale Hawthorne',
        'Will Blakelee',
        'Jake Morrison',
        'Geralt of Rivia',
      ],
      collaborators: ['Jennifer Lawrence', 'Josh Hutcherson', 'Miley Cyrus'],
      buzz: 86,
    },
    {
      name: 'Woody Harrelson',
      summary:
        'Woody Harrelson is known for comedy, drama, The Hunger Games, crime stories, and ensemble films.',
      knownFor: [
        ['Cheers', 1985],
        ['The Hunger Games', 2012],
        ['True Detective', 2014],
        ['Three Billboards Outside Ebbing, Missouri', 2017],
      ],
      characters: [
        'Woody Boyd',
        'Haymitch Abernathy',
        'Marty Hart',
        'Chief Willoughby',
      ],
      collaborators: [
        'Jennifer Lawrence',
        'Matthew McConaughey',
        'Frances McDormand',
      ],
      buzz: 89,
    },
    {
      name: 'Elizabeth Banks',
      job: 'Actress • Director • Producer',
      summary:
        'Elizabeth Banks is known for The Hunger Games, comedy, directing, producing, and franchise roles.',
      knownFor: [
        ['The Hunger Games', 2012],
        ['Pitch Perfect', 2012],
        ['The 40-Year-Old Virgin', 2005],
        ['Cocaine Bear', 2023],
      ],
      characters: [
        'Effie Trinket',
        'Gail Abernathy-McKadden',
        'Beth',
        'Nurse Sari',
      ],
      collaborators: ['Jennifer Lawrence', 'Anna Kendrick', 'Paul Rudd'],
      buzz: 86,
    },
    {
      name: 'Stanley Tucci',
      job: 'Actor • Filmmaker',
      summary:
        'Stanley Tucci is known for The Devil Wears Prada, The Hunger Games, drama, comedy, and food/travel television.',
      knownFor: [
        ['The Devil Wears Prada', 2006],
        ['The Hunger Games', 2012],
        ['Spotlight', 2015],
        ['Julie & Julia', 2009],
      ],
      characters: [
        'Nigel Kipling',
        'Caesar Flickerman',
        'Mitchell Garabedian',
        'Paul Child',
      ],
      collaborators: ['Meryl Streep', 'Jennifer Lawrence', 'Mark Ruffalo'],
      buzz: 87,
    },
    {
      name: 'Dwayne Johnson',
      job: 'Actor • Producer',
      summary:
        'Dwayne Johnson is known for action, comedy, wrestling-to-film crossover, and family adventure roles.',
      knownFor: [
        ['Jumanji: Welcome to the Jungle', 2017],
        ['Moana', 2016],
        ['Fast Five', 2011],
        ['Black Adam', 2022],
      ],
      characters: [
        'Dr. Smolder Bravestone',
        'Maui',
        'Luke Hobbs',
        'Black Adam',
      ],
      collaborators: ['Kevin Hart', 'Emily Blunt', 'Vin Diesel'],
      buzz: 95,
    },
    {
      name: 'Vin Diesel',
      job: 'Actor • Producer',
      summary:
        'Vin Diesel is known for Fast & Furious, action franchises, voice work, and producing.',
      knownFor: [
        ['The Fast and the Furious', 2001],
        ['Guardians of the Galaxy', 2014],
        ['xXx', 2002],
        ['Riddick', 2013],
      ],
      characters: ['Dominic Toretto', 'Groot', 'Xander Cage', 'Riddick'],
      collaborators: ['Dwayne Johnson', 'Paul Walker', 'Chris Pratt'],
      buzz: 92,
    },
    {
      name: 'Gal Gadot',
      job: 'Actress • Producer',
      summary:
        'Gal Gadot is known for Wonder Woman, action films, franchise work, and producing.',
      knownFor: [
        ['Wonder Woman', 2017],
        ['Fast & Furious', 2009],
        ['Justice League', 2017],
        ['Death on the Nile', 2022],
      ],
      characters: [
        'Diana Prince / Wonder Woman',
        'Gisele Yashar',
        'Diana Prince / Wonder Woman',
        'Linnet Ridgeway',
      ],
      collaborators: ['Chris Pine', 'Vin Diesel', 'Kenneth Branagh'],
      buzz: 91,
    },
  ];

  top50ActorsOnly.forEach(addActorOnlyIfMissing);

  console.log(
    'VEDB Top 50 Actors Only add-on loaded. Actor records checked:',
    top50ActorsOnly.length
  );
})();
/* VEDB A–Z / LATE ACTOR MEMORY FIX
   Paste at the VERY BOTTOM of the JS box.

   Fixes:
   - A–Z actors from the Top 50 batch sometimes not reopening as the last actor
   - Late-added actors not being available during early startup memory check

   Does NOT:
   - force Zendaya
   - force Denzel
   - change actor data
   - change Full Body of Work
   - change Signature Work
   - change buttons or tiles visually
*/

(function () {
  if (window.vedbLateActorMemoryFixInstalled) return;
  window.vedbLateActorMemoryFixInstalled = true;

  const SAFE_LAST_ENTITY_KEY = 'vedb_safe_last_entity_v1';
  const MAIN_LAST_ENTITY_KEY = 'vedb_clean_last_sphere_v1';

  function cleanName(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function getListByMode(mode) {
    const cleanMode = cleanName(mode);

    if (
      cleanMode === 'actor' &&
      typeof actors !== 'undefined' &&
      Array.isArray(actors)
    )
      return actors;
    if (
      cleanMode === 'title' &&
      typeof titles !== 'undefined' &&
      Array.isArray(titles)
    )
      return titles;
    if (
      cleanMode === 'franchise' &&
      typeof franchises !== 'undefined' &&
      Array.isArray(franchises)
    )
      return franchises;

    return [];
  }

  function findEntity(mode, name) {
    const wanted = cleanName(name);
    const list = getListByMode(mode);

    if (!wanted || !list.length) return null;

    return (
      list.find((item) => cleanName(item.name) === wanted) ||
      list.find((item) => {
        const itemName = cleanName(item.name);
        return itemName.includes(wanted) || wanted.includes(itemName);
      }) ||
      null
    );
  }

  function rememberSafeEntity(entity) {
    if (!entity || !entity.name || !entity.mode) return;

    const saved = {
      mode: entity.mode,
      name: entity.name,
      savedAt: Date.now(),
    };

    try {
      localStorage.setItem(SAFE_LAST_ENTITY_KEY, JSON.stringify(saved));
      localStorage.setItem(
        MAIN_LAST_ENTITY_KEY,
        JSON.stringify({
          mode: entity.mode,
          name: entity.name,
        })
      );
    } catch (error) {}
  }

  function showSpherePage() {
    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');
    const searchResults = document.getElementById('searchResults');

    if (page) page.style.display = 'none';
    if (main) main.style.display = 'grid';
    if (searchResults) searchResults.style.display = 'none';

    if (typeof updateSpherePositions === 'function') {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
      setTimeout(updateSpherePositions, 600);
    }
  }

  const originalLoadEntity =
    typeof loadEntity === 'function' ? loadEntity : null;

  if (originalLoadEntity) {
    window.loadEntity = function (entity) {
      const result = originalLoadEntity(entity);

      if (entity && entity.name && entity.mode) {
        rememberSafeEntity(entity);
      }

      return result;
    };

    try {
      loadEntity = window.loadEntity;
    } catch (error) {}
  }

  window.openActorFromIndex = function (name) {
    const actor = findEntity('actor', name);

    if (!actor) {
      console.error('VEDB A–Z could not find actor:', name);
      return;
    }

    rememberSafeEntity(actor);

    if (typeof window.loadEntity === 'function') {
      window.loadEntity(actor);
    } else if (typeof loadEntity === 'function') {
      loadEntity(actor);
    }

    showSpherePage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function restoreLateSavedEntity() {
    let saved = null;

    try {
      saved = JSON.parse(localStorage.getItem(SAFE_LAST_ENTITY_KEY) || 'null');
    } catch (error) {
      saved = null;
    }

    if (!saved || !saved.mode || !saved.name) return;

    const found = findEntity(saved.mode, saved.name);
    if (!found) return;

    try {
      if (
        typeof currentEntity !== 'undefined' &&
        currentEntity &&
        cleanName(currentEntity.mode) === cleanName(found.mode) &&
        cleanName(currentEntity.name) === cleanName(found.name)
      ) {
        return;
      }
    } catch (error) {}

    if (typeof window.loadEntity === 'function') {
      window.loadEntity(found);
      showSpherePage();
    }
  }

  setTimeout(restoreLateSavedEntity, 120);
  setTimeout(restoreLateSavedEntity, 450);
  setTimeout(restoreLateSavedEntity, 900);

  console.log('VEDB A–Z late actor memory fix loaded.');
})();
/* VEDB ASAP FIX — STOP FULL PAGE FROM REVERTING TO DENZEL
   Paste at the VERY BOTTOM of the JS box.

   Fixes:
   - Denzel hard-fallback problem
   - late-added Top 50 actors not being remembered after refresh
   - A–Z actor selections not restoring correctly after Command + Shift + R

   Does NOT:
   - change actor data
   - change buttons
   - change Full Body of Work
   - change Signature Work
   - remove Joshua Rush or Jennifer Lawrence
*/

(function () {
  if (window.vedbStopDenzelFallbackFixInstalled) return;
  window.vedbStopDenzelFallbackFixInstalled = true;

  const MAIN_KEY = 'vedb_clean_last_sphere_v1';
  const SAFE_KEY = 'vedb_true_last_selected_entity_v2';

  function clean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function isDenzelName(name) {
    return clean(name) === 'denzel washington';
  }

  function getList(mode) {
    const m = clean(mode);

    if (m === 'actor' && typeof actors !== 'undefined' && Array.isArray(actors))
      return actors;
    if (m === 'title' && typeof titles !== 'undefined' && Array.isArray(titles))
      return titles;
    if (
      m === 'franchise' &&
      typeof franchises !== 'undefined' &&
      Array.isArray(franchises)
    )
      return franchises;

    return [];
  }

  function findEntity(mode, name) {
    const wanted = clean(name);
    const list = getList(mode);

    if (!wanted || !list.length) return null;

    return (
      list.find((item) => clean(item.name) === wanted) ||
      list.find((item) => {
        const itemName = clean(item.name);
        return itemName.includes(wanted) || wanted.includes(itemName);
      }) ||
      null
    );
  }

  function getCurrentEntitySafe() {
    try {
      if (
        typeof currentEntity !== 'undefined' &&
        currentEntity &&
        currentEntity.name &&
        currentEntity.mode
      ) {
        return currentEntity;
      }
    } catch (error) {}

    return null;
  }

  function saveSafeEntity(entity) {
    if (!entity || !entity.name || !entity.mode) return;

    try {
      const saved = {
        mode: entity.mode,
        name: entity.name,
        savedAt: Date.now(),
      };

      localStorage.setItem(SAFE_KEY, JSON.stringify(saved));
      localStorage.setItem(
        MAIN_KEY,
        JSON.stringify({
          mode: entity.mode,
          name: entity.name,
        })
      );
    } catch (error) {}
  }

  function readSafeEntity() {
    try {
      return JSON.parse(localStorage.getItem(SAFE_KEY) || 'null');
    } catch (error) {
      return null;
    }
  }

  function readMainEntity() {
    try {
      return JSON.parse(localStorage.getItem(MAIN_KEY) || 'null');
    } catch (error) {
      return null;
    }
  }

  function showMainSpherePage() {
    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');
    const results = document.getElementById('searchResults');

    if (page) {
      page.style.display = 'none';
    }

    if (main) {
      main.style.display = 'grid';
    }

    if (results) {
      results.style.display = 'none';
    }

    if (typeof updateSpherePositions === 'function') {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
      setTimeout(updateSpherePositions, 600);
    }
  }

  function openEntitySafely(entity) {
    if (!entity) return false;

    if (typeof loadEntity === 'function') {
      loadEntity(entity);
      saveSafeEntity(entity);
      showMainSpherePage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }

    return false;
  }

  /* Save every real entity click going forward */
  const originalLoadEntity =
    typeof loadEntity === 'function' ? loadEntity : null;

  if (originalLoadEntity) {
    window.loadEntity = function (entity) {
      const result = originalLoadEntity(entity);

      if (entity && entity.name && entity.mode) {
        saveSafeEntity(entity);
      }

      return result;
    };

    try {
      loadEntity = window.loadEntity;
    } catch (error) {}
  }

  /* Replace A–Z opening so late-added actors get remembered correctly */
  window.openActorFromIndex = function (actorName) {
    const actor = findEntity('actor', actorName);

    if (!actor) {
      console.error('VEDB A–Z could not find actor:', actorName);
      return;
    }

    openEntitySafely(actor);
  };

  /* Replace startup getter so it no longer chooses Denzel as the emergency fallback */
  window.getVEDBStartupEntity = function () {
    let fromHash = null;
    let fromSafe = null;
    let fromMain = null;

    try {
      if (typeof getVEDBEntityFromHash === 'function') {
        fromHash = getVEDBEntityFromHash();
      }
    } catch (error) {}

    const safeSaved = readSafeEntity();
    if (safeSaved && safeSaved.mode && safeSaved.name) {
      fromSafe = findEntity(safeSaved.mode, safeSaved.name);
    }

    const mainSaved = readMainEntity();
    if (
      mainSaved &&
      mainSaved.mode &&
      mainSaved.name &&
      !isDenzelName(mainSaved.name)
    ) {
      fromMain = findEntity(mainSaved.mode, mainSaved.name);
    }

    return (
      fromHash ||
      fromSafe ||
      fromMain ||
      findEntity('actor', 'Denzel Washington') ||
      (typeof actors !== 'undefined' && Array.isArray(actors)
        ? actors.find((actor) => actor.name !== 'Zendaya') || actors[0]
        : null)
    );
  };

  try {
    getVEDBStartupEntity = window.getVEDBStartupEntity;
  } catch (error) {}

  function repairAfterStartup() {
    const safeSaved = readSafeEntity();

    if (safeSaved && safeSaved.mode && safeSaved.name) {
      const safeEntity = findEntity(safeSaved.mode, safeSaved.name);

      if (safeEntity) {
        const current = getCurrentEntitySafe();

        if (
          !current ||
          clean(current.name) !== clean(safeEntity.name) ||
          clean(current.mode) !== clean(safeEntity.mode)
        ) {
          openEntitySafely(safeEntity);
        }

        return;
      }
    }

    const mainSaved = readMainEntity();
    const current = getCurrentEntitySafe();

    const looksLikeDenzelFallback =
      current &&
      clean(current.mode) === 'actor' &&
      isDenzelName(current.name) &&
      (!mainSaved || isDenzelName(mainSaved.name));

    if (looksLikeDenzelFallback) {
      try {
        localStorage.removeItem(MAIN_KEY);
      } catch (error) {}

      const safeFallbackActor =
        findEntity('actor', 'Denzel Washington') ||
        (typeof actors !== 'undefined' && Array.isArray(actors)
          ? actors.find((actor) => actor.name !== 'Zendaya') || actors[0]
          : null);

      if (safeFallbackActor) {
        openEntitySafely(safeFallbackActor);
      }
    }
  }

  setTimeout(repairAfterStartup, 100);
  setTimeout(repairAfterStartup, 400);
  setTimeout(repairAfterStartup, 900);
  setTimeout(repairAfterStartup, 1500);

  console.log('VEDB ASAP Denzel fallback fix loaded.');
})();
/* VEDB REAL FIX — STOP DENZEL FROM WINNING ON REFRESH
   Paste at the VERY BOTTOM of the JS box.

   This fixes:
   - Joshua Rush / Top 50 actors not staying after Command + Shift + R
   - Denzel becoming the fallback after refresh
   - A–Z and search actors from the bottom batch not being remembered

   This does NOT:
   - remove actors
   - force Zendaya
   - change Full Body of Work
   - change Signature Work
   - change tiles or buttons visually
*/

(function () {
  if (window.vedbRealStopDenzelFallbackInstalled) return;
  window.vedbRealStopDenzelFallbackInstalled = true;

  const MAIN_KEY = 'vedb_clean_last_sphere_v1';
  const SAFE_KEY = 'vedb_real_last_actor_v3';

  function clean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function getActors() {
    return typeof actors !== 'undefined' && Array.isArray(actors) ? actors : [];
  }

  function getTitles() {
    return typeof titles !== 'undefined' && Array.isArray(titles) ? titles : [];
  }

  function getFranchises() {
    return typeof franchises !== 'undefined' && Array.isArray(franchises)
      ? franchises
      : [];
  }

  function getList(mode) {
    const m = clean(mode);

    if (m === 'actor') return getActors();
    if (m === 'title') return getTitles();
    if (m === 'franchise') return getFranchises();

    return [];
  }

  function findEntity(mode, name) {
    const wanted = clean(name);
    const list = getList(mode);

    if (!wanted || !list.length) return null;

    return (
      list.find((item) => clean(item.name) === wanted) ||
      list.find((item) => {
        const itemName = clean(item.name);
        return itemName.includes(wanted) || wanted.includes(itemName);
      }) ||
      null
    );
  }

  function readSafe() {
    try {
      return JSON.parse(localStorage.getItem(SAFE_KEY) || 'null');
    } catch (error) {
      return null;
    }
  }

  function saveSafe(entity) {
    if (!entity || !entity.name || !entity.mode) return;

    const saved = {
      mode: entity.mode,
      name: entity.name,
      savedAt: Date.now(),
    };

    try {
      localStorage.setItem(SAFE_KEY, JSON.stringify(saved));
      localStorage.setItem(
        MAIN_KEY,
        JSON.stringify({
          mode: entity.mode,
          name: entity.name,
        })
      );
    } catch (error) {}
  }

  function showMainPage() {
    const main = document.getElementById('mainPage');
    const page = document.getElementById('sectionPage');
    const results = document.getElementById('searchResults');

    if (page) page.style.display = 'none';
    if (main) main.style.display = 'grid';
    if (results) results.style.display = 'none';

    if (typeof updateSpherePositions === 'function') {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
      setTimeout(updateSpherePositions, 600);
    }
  }

  function openEntity(entity) {
    if (!entity) return false;

    if (typeof loadEntity === 'function') {
      loadEntity(entity);
      saveSafe(entity);
      showMainPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return true;
    }

    return false;
  }

  /* Wrap loadEntity so any actor you click gets saved into the safer memory key. */
  const oldLoadEntity = typeof loadEntity === 'function' ? loadEntity : null;

  if (oldLoadEntity) {
    window.loadEntity = function (entity) {
      const result = oldLoadEntity(entity);

      if (entity && entity.name && entity.mode) {
        saveSafe(entity);
      }

      return result;
    };

    try {
      loadEntity = window.loadEntity;
    } catch (error) {}
  }

  /* Replace A–Z actor opening so bottom-batch actors like Joshua Rush are saved properly. */
  window.openActorFromIndex = function (actorName) {
    const actor = findEntity('actor', actorName);

    if (!actor) {
      console.error('VEDB could not find A–Z actor:', actorName);
      return;
    }

    openEntity(actor);
  };

  /* Replace search/direct actor opening too. */
  window.openActorByName = function (actorName) {
    const actor = findEntity('actor', actorName);

    if (!actor) {
      console.error('VEDB could not find actor:', actorName);
      return false;
    }

    return openEntity(actor);
  };

  /* Replace startup chooser after all bottom actors exist. */
  window.getVEDBStartupEntity = function () {
    const saved = readSafe();

    if (saved && saved.mode && saved.name) {
      const found = findEntity(saved.mode, saved.name);
      if (found) return found;
    }

    try {
      const rawMain = localStorage.getItem(MAIN_KEY);
      const mainSaved = rawMain ? JSON.parse(rawMain) : null;

      if (
        mainSaved &&
        mainSaved.mode &&
        mainSaved.name &&
        clean(mainSaved.name) !== 'denzel washington'
      ) {
        const foundMain = findEntity(mainSaved.mode, mainSaved.name);
        if (foundMain) return foundMain;
      }
    } catch (error) {}

    return (
      findEntity('actor', 'Denzel Washington') ||
      getActors().find((actor) => actor.name !== 'Zendaya') ||
      (getActors().length ? getActors()[0] : null)
    );
  };

  try {
    getVEDBStartupEntity = window.getVEDBStartupEntity;
  } catch (error) {}

  function restoreSafeActorAfterBottomBatchLoads() {
    const saved = readSafe();

    if (!saved || !saved.mode || !saved.name) return;

    const found = findEntity(saved.mode, saved.name);
    if (!found) return;

    let currentName = '';

    try {
      if (
        typeof currentEntity !== 'undefined' &&
        currentEntity &&
        currentEntity.name
      ) {
        currentName = currentEntity.name;
      }
    } catch (error) {}

    if (clean(currentName) !== clean(found.name)) {
      openEntity(found);
    }
  }

  /*
    Important:
    The old startup may briefly load Denzel first.
    These delayed restores run after the Top 50 actor batch exists,
    so the final page should land back on Joshua Rush or the real last actor.
  */
  setTimeout(restoreSafeActorAfterBottomBatchLoads, 150);
  setTimeout(restoreSafeActorAfterBottomBatchLoads, 500);
  setTimeout(restoreSafeActorAfterBottomBatchLoads, 1000);
  setTimeout(restoreSafeActorAfterBottomBatchLoads, 1800);

  console.log('VEDB real stop-Denzel fallback fix loaded.');
})();
/* VEDB SIGNATURE WORK + FULL BODY ROLE AUDIT FIX
   Paste at the VERY BOTTOM of the JS box.

   Fixes:
   - Signature Work shows character / role
   - Original actor role mismatches
   - Full Body no longer duplicates Signature Work as if it were complete
   - Adds expanded Full Body examples for Jennifer Lawrence and Ben Affleck

   Does NOT:
   - touch startup
   - touch Full Page memory
   - force Denzel, Zendaya, Joshua Rush, or anyone else
   - remove the 50 actors
   - change nav buttons
*/

(function () {
  if (window.vedbSignatureFullBodyRoleAuditFixInstalled) return;
  window.vedbSignatureFullBodyRoleAuditFixInstalled = true;

  function safe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function clean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function getActors() {
    return typeof actors !== 'undefined' && Array.isArray(actors) ? actors : [];
  }

  function findActor(name) {
    const wanted = clean(name);
    return getActors().find((actor) => clean(actor.name) === wanted) || null;
  }

  const fixedSignatureRoles = {
    'Denzel Washington': {
      'Training Day': 'Alonzo Harris',
      'Malcolm X': 'Malcolm X',
      Fences: 'Troy Maxson',
      'The Equalizer': 'Robert McCall',
    },
    'Meryl Streep': {
      'The Devil Wears Prada': 'Miranda Priestly',
      "Sophie's Choice": 'Sophie Zawistowski',
      'Mamma Mia!': 'Donna Sheridan',
      'The Iron Lady': 'Margaret Thatcher',
    },
    'Leonardo DiCaprio': {
      Titanic: 'Jack Dawson',
      Inception: 'Dom Cobb',
      'The Revenant': 'Hugh Glass',
      'The Wolf of Wall Street': 'Jordan Belfort',
    },
    'Viola Davis': {
      Fences: 'Rose Maxson',
      'The Help': 'Aibileen Clark',
      'How to Get Away with Murder': 'Annalise Keating',
      'The Woman King': 'Nanisca',
    },
    'Robert Downey Jr.': {
      'Iron Man': 'Tony Stark / Iron Man',
      'Sherlock Holmes': 'Sherlock Holmes',
      Oppenheimer: 'Lewis Strauss',
      Chaplin: 'Charlie Chaplin',
    },
    'Scarlett Johansson': {
      'Lost in Translation': 'Charlotte',
      'Black Widow': 'Natasha Romanoff / Black Widow',
      'Marriage Story': 'Nicole Barber',
      Her: 'Samantha',
    },
    'Tom Cruise': {
      'Top Gun': 'Pete Mitchell / Maverick',
      'Mission: Impossible': 'Ethan Hunt',
      'Jerry Maguire': 'Jerry Maguire',
      'Top Gun: Maverick': 'Pete Mitchell / Maverick',
    },
    'Julia Roberts': {
      'Pretty Woman': 'Vivian Ward',
      'Erin Brockovich': 'Erin Brockovich',
      'Ocean’s Eleven': 'Tess Ocean',
      "Ocean's Eleven": 'Tess Ocean',
      'Notting Hill': 'Anna Scott',
    },
    'Morgan Freeman': {
      'The Shawshank Redemption': 'Ellis Boyd “Red” Redding',
      'Million Dollar Baby': 'Eddie Dupris',
      Se7en: 'William Somerset',
      'Driving Miss Daisy': 'Hoke Colburn',
    },
  };

  const expandedFullBodyExamples = {
    'Jennifer Lawrence': [
      {
        title: "Winter's Bone",
        year: 2010,
        type: 'Movie',
        role: 'Ree Dolly',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'X-Men: First Class',
        year: 2011,
        type: 'Movie',
        role: 'Raven Darkhölme / Mystique',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'The Hunger Games',
        year: 2012,
        type: 'Movie',
        role: 'Katniss Everdeen',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Silver Linings Playbook',
        year: 2012,
        type: 'Movie',
        role: 'Tiffany Maxwell',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'American Hustle',
        year: 2013,
        type: 'Movie',
        role: 'Rosalyn Rosenfeld',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Joy',
        year: 2015,
        type: 'Movie',
        role: 'Joy Mangano',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Passengers',
        year: 2016,
        type: 'Movie',
        role: 'Aurora Lane',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Mother!',
        year: 2017,
        type: 'Movie',
        role: 'Mother',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Red Sparrow',
        year: 2018,
        type: 'Movie',
        role: 'Dominika Egorova',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: "Don't Look Up",
        year: 2021,
        type: 'Movie',
        role: 'Kate Dibiasky',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Causeway',
        year: 2022,
        type: 'Movie',
        role: 'Lynsey',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'No Hard Feelings',
        year: 2023,
        type: 'Movie',
        role: 'Maddie Barker',
        source: 'Expanded VEDB starter credit',
      },
    ],
    'Ben Affleck': [
      {
        title: 'Good Will Hunting',
        year: 1997,
        type: 'Movie',
        role: 'Chuckie Sullivan',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Armageddon',
        year: 1998,
        type: 'Movie',
        role: 'A. J. Frost',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Shakespeare in Love',
        year: 1998,
        type: 'Movie',
        role: 'Edward Alleyn',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Pearl Harbor',
        year: 2001,
        type: 'Movie',
        role: 'Rafe McCawley',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'The Sum of All Fears',
        year: 2002,
        type: 'Movie',
        role: 'Jack Ryan',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Daredevil',
        year: 2003,
        type: 'Movie',
        role: 'Matt Murdock / Daredevil',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Hollywoodland',
        year: 2006,
        type: 'Movie',
        role: 'George Reeves',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'The Town',
        year: 2010,
        type: 'Movie',
        role: 'Doug MacRay',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Argo',
        year: 2012,
        type: 'Movie',
        role: 'Tony Mendez',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Gone Girl',
        year: 2014,
        type: 'Movie',
        role: 'Nick Dunne',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Batman v Superman: Dawn of Justice',
        year: 2016,
        type: 'Movie',
        role: 'Bruce Wayne / Batman',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'The Accountant',
        year: 2016,
        type: 'Movie',
        role: 'Christian Wolff',
        source: 'Expanded VEDB starter credit',
      },
      {
        title: 'Air',
        year: 2023,
        type: 'Movie',
        role: 'Phil Knight',
        source: 'Expanded VEDB starter credit',
      },
    ],
  };

  function applyRoleFixesToActors() {
    getActors().forEach((actor) => {
      actor.signatureRoles = actor.signatureRoles || {};

      const fixed = fixedSignatureRoles[actor.name];
      if (fixed) {
        Object.assign(actor.signatureRoles, fixed);
      }

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || '');
        const roleFromCharacters = Array.isArray(actor.characters)
          ? actor.characters[index]
          : '';

        if (title && roleFromCharacters && !actor.signatureRoles[title]) {
          actor.signatureRoles[title] = roleFromCharacters;
        }
      });

      if (expandedFullBodyExamples[actor.name]) {
        actor.fullBodyWork = expandedFullBodyExamples[actor.name];
      }
    });
  }

  function getRoleForSignature(actor, title, index) {
    if (!actor || !title) return 'Role to verify';

    if (actor.signatureRoles && actor.signatureRoles[title]) {
      return actor.signatureRoles[title];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    return 'Role to verify';
  }

  function buildSignatureWorkWithRoles(actor) {
    const rows = actor.knownFor || [];

    if (!rows.length) {
      return `
        <div class="info-card">
          <h3>No Signature Work Loaded Yet</h3>
          <p>This actor does not have signature work loaded yet.</p>
        </div>
      `;
    }

    return `
      <p>
        <b>Signature Work</b> means the major movies or shows people quickly connect with this actor.
        This section now shows the character or role connected to each title.
      </p>

      <div class="cards-grid">
        ${rows
          .map((item, index) => {
            const title = Array.isArray(item) ? item[0] : String(item || '');
            const year = Array.isArray(item) ? item[1] : '';
            const role = getRoleForSignature(actor, title, index);

            return `
            <article class="info-card">
              <h3>${safe(title)}</h3>
              <p><b>Year:</b> ${safe(year || 'Year to verify')}</p>
              <p><b>Character / Role:</b> ${safe(role)}</p>
              <p><b>Actor:</b> ${safe(actor.name)}</p>
            </article>
          `;
          })
          .join('')}
      </div>

      ${typeof sourceBlock === 'function' ? sourceBlock(actor) : ''}
    `;
  }

  const oldActorSection =
    typeof actorSection === 'function' ? actorSection : null;

  if (oldActorSection) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === 'filmography' &&
        typeof currentMode !== 'undefined' &&
        currentMode === 'actor' &&
        typeof currentEntity !== 'undefined' &&
        currentEntity
      ) {
        return buildSignatureWorkWithRoles(currentEntity);
      }

      return oldActorSection(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  function getExpandedFullBodyCredits(actorName) {
    const actor = findActor(actorName);
    if (!actor) return [];

    const rows = [];

    if (Array.isArray(actor.fullBodyWork)) {
      actor.fullBodyWork.forEach((item) => {
        rows.push({
          actorName: actor.name,
          title: item.title,
          year: item.year || '',
          type: item.type || 'Movie',
          role: item.role || 'Role to verify',
          source: item.source || 'Expanded VEDB full-body credit',
          loadedTitle: false,
        });
      });
    }

    if (typeof getManualFullBodyCredits === 'function') {
      try {
        getManualFullBodyCredits()
          .filter((item) => clean(item.actorName) === clean(actor.name))
          .forEach((item) => rows.push(item));
      } catch (error) {}
    }

    const seen = new Set();

    return rows
      .filter((row) => {
        const key = clean(row.title + '::' + row.year + '::' + row.role);

        if (seen.has(key)) return false;

        seen.add(key);
        return true;
      })
      .sort((a, b) => {
        const yearA = Number(a.year) || 0;
        const yearB = Number(b.year) || 0;

        if (yearA !== yearB) return yearB - yearA;
        return String(a.title).localeCompare(String(b.title));
      });
  }

  window.getFullBodyOfWorkForActor = getExpandedFullBodyCredits;

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  function buildFullBodyCard(credit) {
    return `
      <article class="full-body-card">
        <h3>${safe(credit.title)}</h3>

        <span class="full-body-pill">${safe(credit.type || 'Credit')}</span>
        ${
          credit.year
            ? `<span class="full-body-pill">${safe(credit.year)}</span>`
            : ''
        }

        <p><b>Role / Credit:</b> ${safe(credit.role || 'Role to verify')}</p>
        <p><b>Source inside VEDB:</b> ${safe(
          credit.source || 'Expanded VEDB credit'
        )}</p>

        <p class="full-body-note">
          Title Sphere can be built later for this credit.
        </p>
      </article>
    `;
  }

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = findActor(actorName);
    const credits = getExpandedFullBodyCredits(actorName);

    if (!actor) {
      return `<p>Actor not found.</p>`;
    }

    return `
      <div class="full-body-box">
        <h3>Signature Work vs. Full Body of Work</h3>
        <p class="full-body-note">
          <b>Signature Work</b> is the short highlight list.
          <b>Full Body of Work</b> is the expanded career credit list.
          VEDB will no longer treat the four Signature Work titles as the complete Full Body list.
        </p>

        <p>
          <span class="full-body-pill">${
            credits.length
          } expanded full-body credits loaded</span>
          <span class="full-body-pill">${
            (actor.knownFor || []).length
          } signature titles</span>
        </p>
      </div>

      <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

      ${
        credits.length
          ? `<div class="full-body-grid">
              ${credits.map(buildFullBodyCard).join('')}
            </div>`
          : `
            <div class="full-body-box">
              <h3>Expanded Full Body Not Loaded Yet</h3>
              <p>
                This actor has Signature Work loaded, but the larger Full Body career list has not been built yet.
                That is better than pretending the Signature Work list is the full career.
              </p>
              <p class="full-body-note">
                Next step: add real expanded credits for this actor in a clean Full Body batch.
              </p>
            </div>

            <h3 style="color: var(--gold); margin-top:18px;">Signature Work Reference</h3>
            <div class="full-body-grid">
              ${(actor.knownFor || [])
                .map((item, index) => {
                  const title = Array.isArray(item)
                    ? item[0]
                    : String(item || '');
                  const year = Array.isArray(item) ? item[1] : '';
                  const role = getRoleForSignature(actor, title, index);

                  return `
                  <article class="full-body-card">
                    <h3>${safe(title)}</h3>
                    ${
                      year
                        ? `<span class="full-body-pill">${safe(year)}</span>`
                        : ''
                    }
                    <span class="full-body-pill">Signature Work Reference</span>
                    <p><b>Character / Role:</b> ${safe(role)}</p>
                    <p class="full-body-note">This is a highlight title, not the full career list.</p>
                  </article>
                `;
                })
                .join('')}
            </div>
          `
      }

      ${
        typeof buildAddFullBodyCreditForm === 'function'
          ? buildAddFullBodyCreditForm(actor.name)
          : ''
      }
    `;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  applyRoleFixesToActors();

  if (
    typeof currentMode !== 'undefined' &&
    currentMode === 'actor' &&
    typeof buildCards === 'function'
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById('sectionPage');

  if (page && page.style.display !== 'none') {
    if (
      page.textContent.includes('Signature Work') &&
      typeof openSectionPage === 'function'
    ) {
      setTimeout(function () {
        openSectionPage('filmography');
      }, 100);
    }

    if (
      page.textContent.includes('VEDB FULL BODY OF WORK') &&
      typeof openFullBodyOfWorkPage === 'function'
    ) {
      setTimeout(function () {
        let actorName = '';

        try {
          actorName =
            typeof currentEntity !== 'undefined' &&
            currentEntity &&
            currentEntity.name
              ? currentEntity.name
              : '';
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log('VEDB Signature Work + Full Body Role Audit Fix loaded.');
})();
/* VEDB UNIVERSAL ROLES + FULL BODY STARTER FIX
   Paste at the VERY BOTTOM of the JS box.

   Fixes:
   - Signature Work shows Character / Role for every actor where data exists.
   - Full Body of Work no longer goes blank for actors without expanded career data.
   - Jennifer Lawrence and Ben Affleck keep expanded Full Body examples.
   - Other actors get a clear Starter Full Body list instead of "No credits loaded yet."

   Does NOT:
   - touch startup
   - touch Full Page memory
   - force Denzel, Zendaya, Joshua Rush, or anyone else
   - remove the 50 actors
*/

(function () {
  if (window.vedbUniversalRolesFullBodyFixInstalled) return;
  window.vedbUniversalRolesFullBodyFixInstalled = true;

  function vSafe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function vClean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function vActors() {
    return typeof actors !== 'undefined' && Array.isArray(actors) ? actors : [];
  }

  function vTitles() {
    return typeof titles !== 'undefined' && Array.isArray(titles) ? titles : [];
  }

  function vFindActor(actorName) {
    const wanted = vClean(actorName);

    return (
      vActors().find((actor) => vClean(actor.name) === wanted) ||
      vActors().find((actor) => {
        const actorClean = vClean(actor.name);
        return actorClean.includes(wanted) || wanted.includes(actorClean);
      }) ||
      null
    );
  }

  const originalRoleFixes = {
    'Denzel Washington': {
      'Training Day': 'Alonzo Harris',
      'Malcolm X': 'Malcolm X',
      Fences: 'Troy Maxson',
      'The Equalizer': 'Robert McCall',
    },
    'Meryl Streep': {
      'The Devil Wears Prada': 'Miranda Priestly',
      "Sophie's Choice": 'Sophie Zawistowski',
      'Mamma Mia!': 'Donna Sheridan',
      'The Iron Lady': 'Margaret Thatcher',
    },
    'Leonardo DiCaprio': {
      Titanic: 'Jack Dawson',
      Inception: 'Dom Cobb',
      'The Revenant': 'Hugh Glass',
      'The Wolf of Wall Street': 'Jordan Belfort',
    },
    'Viola Davis': {
      Fences: 'Rose Maxson',
      'The Help': 'Aibileen Clark',
      'How to Get Away with Murder': 'Annalise Keating',
      'The Woman King': 'Nanisca',
    },
    'Robert Downey Jr.': {
      'Iron Man': 'Tony Stark / Iron Man',
      'Sherlock Holmes': 'Sherlock Holmes',
      Oppenheimer: 'Lewis Strauss',
      Chaplin: 'Charlie Chaplin',
    },
    'Scarlett Johansson': {
      'Lost in Translation': 'Charlotte',
      'Black Widow': 'Natasha Romanoff / Black Widow',
      'Marriage Story': 'Nicole Barber',
      Her: 'Samantha',
    },
    'Tom Cruise': {
      'Top Gun': 'Pete Mitchell / Maverick',
      'Mission: Impossible': 'Ethan Hunt',
      'Jerry Maguire': 'Jerry Maguire',
      'Top Gun: Maverick': 'Pete Mitchell / Maverick',
    },
    'Julia Roberts': {
      'Pretty Woman': 'Vivian Ward',
      'Erin Brockovich': 'Erin Brockovich',
      'Ocean’s Eleven': 'Tess Ocean',
      "Ocean's Eleven": 'Tess Ocean',
      'Notting Hill': 'Anna Scott',
    },
    'Morgan Freeman': {
      'The Shawshank Redemption': 'Ellis Boyd “Red” Redding',
      'Million Dollar Baby': 'Eddie Dupris',
      Se7en: 'William Somerset',
      'Driving Miss Daisy': 'Hoke Colburn',
    },
  };

  const expandedFullBodyExamples = {
    'Jennifer Lawrence': [
      { title: "Winter's Bone", year: 2010, type: 'Movie', role: 'Ree Dolly' },
      {
        title: 'X-Men: First Class',
        year: 2011,
        type: 'Movie',
        role: 'Raven Darkhölme / Mystique',
      },
      {
        title: 'The Hunger Games',
        year: 2012,
        type: 'Movie',
        role: 'Katniss Everdeen',
      },
      {
        title: 'Silver Linings Playbook',
        year: 2012,
        type: 'Movie',
        role: 'Tiffany Maxwell',
      },
      {
        title: 'American Hustle',
        year: 2013,
        type: 'Movie',
        role: 'Rosalyn Rosenfeld',
      },
      { title: 'Joy', year: 2015, type: 'Movie', role: 'Joy Mangano' },
      { title: 'Passengers', year: 2016, type: 'Movie', role: 'Aurora Lane' },
      { title: 'Mother!', year: 2017, type: 'Movie', role: 'Mother' },
      {
        title: 'Red Sparrow',
        year: 2018,
        type: 'Movie',
        role: 'Dominika Egorova',
      },
      {
        title: "Don't Look Up",
        year: 2021,
        type: 'Movie',
        role: 'Kate Dibiasky',
      },
      { title: 'Causeway', year: 2022, type: 'Movie', role: 'Lynsey' },
      {
        title: 'No Hard Feelings',
        year: 2023,
        type: 'Movie',
        role: 'Maddie Barker',
      },
    ],
    'Ben Affleck': [
      {
        title: 'Good Will Hunting',
        year: 1997,
        type: 'Movie',
        role: 'Chuckie Sullivan',
      },
      { title: 'Armageddon', year: 1998, type: 'Movie', role: 'A. J. Frost' },
      {
        title: 'Shakespeare in Love',
        year: 1998,
        type: 'Movie',
        role: 'Ned Alleyn',
      },
      {
        title: 'Pearl Harbor',
        year: 2001,
        type: 'Movie',
        role: 'Rafe McCawley',
      },
      {
        title: 'The Sum of All Fears',
        year: 2002,
        type: 'Movie',
        role: 'Jack Ryan',
      },
      {
        title: 'Daredevil',
        year: 2003,
        type: 'Movie',
        role: 'Matt Murdock / Daredevil',
      },
      {
        title: 'Hollywoodland',
        year: 2006,
        type: 'Movie',
        role: 'George Reeves',
      },
      { title: 'The Town', year: 2010, type: 'Movie', role: 'Doug MacRay' },
      { title: 'Argo', year: 2012, type: 'Movie', role: 'Tony Mendez' },
      { title: 'Gone Girl', year: 2014, type: 'Movie', role: 'Nick Dunne' },
      {
        title: 'Batman v Superman: Dawn of Justice',
        year: 2016,
        type: 'Movie',
        role: 'Bruce Wayne / Batman',
      },
      {
        title: 'The Accountant',
        year: 2016,
        type: 'Movie',
        role: 'Christian Wolff',
      },
      { title: 'Air', year: 2023, type: 'Movie', role: 'Phil Knight' },
    ],
  };

  function vApplyRoleData() {
    vActors().forEach((actor) => {
      actor.signatureRoles = actor.signatureRoles || {};

      if (originalRoleFixes[actor.name]) {
        Object.assign(actor.signatureRoles, originalRoleFixes[actor.name]);
      }

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || '');
        const role = Array.isArray(actor.characters)
          ? actor.characters[index]
          : '';

        if (title && role && !actor.signatureRoles[title]) {
          actor.signatureRoles[title] = role;
        }
      });

      if (expandedFullBodyExamples[actor.name]) {
        actor.fullBodyWork = expandedFullBodyExamples[actor.name].map(
          (item) => ({
            ...item,
            source: 'Expanded VEDB starter full-body credit',
          })
        );
      }
    });
  }

  function vFindRoleFromLoadedTitle(actorName, titleName) {
    const title = vTitles().find(
      (item) => vClean(item.name) === vClean(titleName)
    );

    if (!title) return '';

    const cast = Array.isArray(title.cast) ? title.cast : [];
    const characters = Array.isArray(title.characters) ? title.characters : [];

    const index = cast.findIndex((name) => vClean(name) === vClean(actorName));

    if (index >= 0 && characters[index]) {
      return characters[index];
    }

    return '';
  }

  function vGetRole(actor, titleName, index) {
    if (!actor || !titleName) return 'Role to verify';

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    const fromTitle = vFindRoleFromLoadedTitle(actor.name, titleName);
    if (fromTitle) return fromTitle;

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    return 'Role to verify';
  }

  function vBuildSignatureWork(actor) {
    const rows = actor.knownFor || [];

    if (!rows.length) {
      return `
        <div class="info-card">
          <h3>No Signature Work Loaded Yet</h3>
          <p>This actor does not have Signature Work loaded yet.</p>
        </div>
      `;
    }

    return `
      <p>
        <b>Signature Work</b> means the major movies or shows people quickly connect with this actor.
        Each card now includes the character or role when VEDB has that information.
      </p>

      <div class="cards-grid">
        ${rows
          .map((item, index) => {
            const title = Array.isArray(item) ? item[0] : String(item || '');
            const year = Array.isArray(item) ? item[1] : '';
            const role = vGetRole(actor, title, index);

            return `
            <article class="info-card">
              <h3>${vSafe(title)}</h3>
              <p><b>Year:</b> ${vSafe(year || 'Year to verify')}</p>
              <p><b>Character / Role:</b> ${vSafe(role)}</p>
              <p><b>Actor:</b> ${vSafe(actor.name)}</p>
            </article>
          `;
          })
          .join('')}
      </div>

      ${typeof sourceBlock === 'function' ? sourceBlock(actor) : ''}
    `;
  }

  function vGetManualCredits(actorName) {
    try {
      const raw = localStorage.getItem('vedb_full_body_work_credits');
      const parsed = raw ? JSON.parse(raw) : [];

      if (!Array.isArray(parsed)) return [];

      return parsed.filter(
        (item) => vClean(item.actorName) === vClean(actorName)
      );
    } catch (error) {
      return [];
    }
  }

  function vGetStarterCredits(actor) {
    return (actor.knownFor || []).map((item, index) => {
      const title = Array.isArray(item) ? item[0] : String(item || '');
      const year = Array.isArray(item) ? item[1] : '';

      return {
        actorName: actor.name,
        title,
        year,
        type: 'Starter Full Body Credit',
        role: vGetRole(actor, title, index),
        source: 'Starter list from Signature Work — expand later',
        isStarter: true,
      };
    });
  }

  function vGetFullBodyCredits(actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return [];

    const expanded = Array.isArray(actor.fullBodyWork)
      ? actor.fullBodyWork.map((item) => ({
          actorName: actor.name,
          title: item.title,
          year: item.year || '',
          type: item.type || 'Movie',
          role: item.role || 'Role to verify',
          source: item.source || 'Expanded VEDB full-body credit',
          isStarter: false,
        }))
      : [];

    const manual = vGetManualCredits(actor.name).map((item) => ({
      ...item,
      isStarter: false,
    }));

    const starter = vGetStarterCredits(actor);

    const finalRows =
      expanded.length || manual.length ? [...expanded, ...manual] : starter;

    const seen = new Set();

    return finalRows.filter((row) => {
      const key = vClean(row.title + '::' + row.year + '::' + row.role);

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  window.getFullBodyOfWorkForActor = vGetFullBodyCredits;

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  function vFullBodyCard(credit) {
    return `
      <article class="full-body-card">
        <h3>${vSafe(credit.title)}</h3>

        <span class="full-body-pill">${vSafe(credit.type || 'Credit')}</span>
        ${
          credit.year
            ? `<span class="full-body-pill">${vSafe(credit.year)}</span>`
            : ''
        }

        <p><b>Role / Credit:</b> ${vSafe(credit.role || 'Role to verify')}</p>
        <p><b>Source inside VEDB:</b> ${vSafe(
          credit.source || 'VEDB credit library'
        )}</p>

        ${
          credit.isStarter
            ? `<p class="full-body-note">This is a starter credit from Signature Work, not the actor’s complete career yet.</p>`
            : `<p class="full-body-note">Expanded Full Body credit loaded.</p>`
        }
      </article>
    `;
  }

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return `<p>Actor not found.</p>`;

    const credits = vGetFullBodyCredits(actor.name);
    const hasExpanded =
      Array.isArray(actor.fullBodyWork) && actor.fullBodyWork.length > 0;
    const manualCount = vGetManualCredits(actor.name).length;
    const isStarterOnly = !hasExpanded && manualCount === 0;

    return `
      <div class="full-body-box">
        <h3>Signature Work vs. Full Body of Work</h3>
        <p class="full-body-note">
          <b>Signature Work</b> is the short highlight list.
          <b>Full Body of Work</b> is the larger career credit list.
        </p>

        ${
          isStarterOnly
            ? `<p class="full-body-note">
                This actor does not have a fully expanded career list loaded yet,
                so VEDB is showing a <b>Starter Full Body</b> list from Signature Work.
                It is not claiming this is the complete career.
              </p>`
            : `<p class="full-body-note">
                Expanded Full Body data is loaded for this actor.
              </p>`
        }

        <p>
          <span class="full-body-pill">${credits.length} credits showing</span>
          <span class="full-body-pill">${
            (actor.knownFor || []).length
          } signature titles</span>
          ${
            isStarterOnly
              ? `<span class="full-body-pill">Starter list</span>`
              : `<span class="full-body-pill">Expanded list</span>`
          }
        </p>
      </div>

      <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

      <div class="full-body-grid">
        ${credits.map(vFullBodyCard).join('')}
      </div>

      ${
        typeof buildAddFullBodyCreditForm === 'function'
          ? buildAddFullBodyCreditForm(actor.name)
          : ''
      }
    `;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  const oldActorSection =
    typeof actorSection === 'function' ? actorSection : null;

  if (oldActorSection) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === 'filmography' &&
        typeof currentMode !== 'undefined' &&
        currentMode === 'actor' &&
        typeof currentEntity !== 'undefined' &&
        currentEntity
      ) {
        return vBuildSignatureWork(currentEntity);
      }

      return oldActorSection(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  vApplyRoleData();

  if (
    typeof currentMode !== 'undefined' &&
    currentMode === 'actor' &&
    typeof buildCards === 'function'
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById('sectionPage');

  if (page && page.style.display !== 'none') {
    if (
      page.textContent.includes('Signature Work') &&
      typeof openSectionPage === 'function'
    ) {
      setTimeout(function () {
        openSectionPage('filmography');
      }, 100);
    }

    if (
      page.textContent.includes('VEDB FULL BODY OF WORK') &&
      typeof openFullBodyOfWorkPage === 'function'
    ) {
      setTimeout(function () {
        let actorName = '';

        try {
          actorName =
            typeof currentEntity !== 'undefined' &&
            currentEntity &&
            currentEntity.name
              ? currentEntity.name
              : '';
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log('VEDB Universal Roles + Full Body Starter Fix loaded.');
})();
/* VEDB FULL BODY MUST BE BIGGER THAN SIGNATURE WORK FIX
   Paste at the VERY BOTTOM of the JS box.

   New rule:
   - Signature Work = short highlight list
   - Full Body of Work = always MORE rows than Signature Work
   - Full Body of Work is NEVER blank
   - If real expanded credits are not loaded yet, VEDB shows clearly marked starter expansion credits

   Does NOT:
   - touch startup
   - touch Full Page memory
   - force any actor to load
   - remove actors
   - change nav buttons
*/

(function () {
  if (window.vedbFullBodyMustBeBiggerFixInstalled) return;
  window.vedbFullBodyMustBeBiggerFixInstalled = true;

  function fbSafe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function fbClean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function fbActors() {
    return typeof actors !== 'undefined' && Array.isArray(actors) ? actors : [];
  }

  function fbTitles() {
    return typeof titles !== 'undefined' && Array.isArray(titles) ? titles : [];
  }

  function fbFindActor(actorName) {
    const wanted = fbClean(actorName);

    return (
      fbActors().find((actor) => fbClean(actor.name) === wanted) ||
      fbActors().find((actor) => {
        const name = fbClean(actor.name);
        return name.includes(wanted) || wanted.includes(name);
      }) ||
      null
    );
  }

  function fbGetManualCredits(actorName) {
    try {
      const raw = localStorage.getItem('vedb_full_body_work_credits');
      const parsed = raw ? JSON.parse(raw) : [];

      if (!Array.isArray(parsed)) return [];

      return parsed.filter(
        (item) => fbClean(item.actorName) === fbClean(actorName)
      );
    } catch (error) {
      return [];
    }
  }

  function fbGetRole(actor, titleName, index) {
    if (!actor) return 'Role to verify';

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    const loadedTitle = fbTitles().find(
      (title) => fbClean(title.name) === fbClean(titleName)
    );

    if (loadedTitle) {
      const cast = Array.isArray(loadedTitle.cast) ? loadedTitle.cast : [];
      const chars = Array.isArray(loadedTitle.characters)
        ? loadedTitle.characters
        : [];
      const castIndex = cast.findIndex(
        (name) => fbClean(name) === fbClean(actor.name)
      );

      if (castIndex >= 0 && chars[castIndex]) {
        return chars[castIndex];
      }
    }

    return 'Role to verify';
  }

  function fbSignatureRows(actor) {
    return (actor.knownFor || []).map((item, index) => {
      const title = Array.isArray(item) ? item[0] : String(item || '');
      const year = Array.isArray(item) ? item[1] : '';

      return {
        actorName: actor.name,
        title: title || 'Signature title to verify',
        year: year || '',
        type: 'Signature Work',
        role: fbGetRole(actor, title, index),
        source: 'Signature Work highlight',
        isSignatureReference: true,
        isStarterExpansion: false,
      };
    });
  }

  function fbExpandedRows(actor) {
    const rows = [];

    if (Array.isArray(actor.fullBodyWork)) {
      actor.fullBodyWork.forEach((item) => {
        rows.push({
          actorName: actor.name,
          title: item.title || 'Expanded credit to verify',
          year: item.year || '',
          type: item.type || 'Movie / TV Credit',
          role: item.role || 'Role to verify',
          source: item.source || 'Expanded VEDB full-body credit',
          isSignatureReference: false,
          isStarterExpansion: false,
        });
      });
    }

    fbGetManualCredits(actor.name).forEach((item) => {
      rows.push({
        actorName: actor.name,
        title: item.title || 'Manual credit',
        year: item.year || '',
        type: item.type || 'Manual Credit',
        role: item.role || 'Role to verify',
        source: item.source || 'Manually added VEDB credit',
        isSignatureReference: false,
        isStarterExpansion: false,
      });
    });

    fbTitles().forEach((title) => {
      const cast = Array.isArray(title.cast) ? title.cast : [];
      const chars = Array.isArray(title.characters) ? title.characters : [];
      const index = cast.findIndex(
        (name) => fbClean(name) === fbClean(actor.name)
      );

      if (index >= 0) {
        rows.push({
          actorName: actor.name,
          title: title.name,
          year:
            title.facts && title.facts['Release Year']
              ? title.facts['Release Year']
              : '',
          type: title.job || 'Loaded VEDB Title',
          role: chars[index] || 'Cast member',
          source: 'Loaded VEDB title database',
          isSignatureReference: false,
          isStarterExpansion: false,
        });
      }
    });

    return rows;
  }

  function fbStarterExpansionRows(actor, howManyNeeded) {
    const starterTypes = [
      {
        title: 'Additional Film Credit — To Research',
        type: 'Starter Movie Credit',
        role: 'Movie role to add',
      },
      {
        title: 'Additional TV Credit — To Research',
        type: 'Starter TV Credit',
        role: 'TV role to add',
      },
      {
        title: 'Additional Voice / Cameo / Producer Credit — To Research',
        type: 'Starter Career Credit',
        role: 'Career credit to add',
      },
      {
        title: 'Additional Early Career Credit — To Research',
        type: 'Starter Early Career Credit',
        role: 'Early role to add',
      },
      {
        title: 'Additional Recent Credit — To Research',
        type: 'Starter Recent Credit',
        role: 'Recent role to add',
      },
    ];

    const rows = [];

    for (let i = 0; i < howManyNeeded; i++) {
      const template = starterTypes[i % starterTypes.length];

      rows.push({
        actorName: actor.name,
        title: template.title,
        year: '',
        type: template.type,
        role: template.role,
        source:
          'Starter expansion placeholder — replace with real researched credit',
        isSignatureReference: false,
        isStarterExpansion: true,
      });
    }

    return rows;
  }

  function fbDedupeRows(rows) {
    const seen = new Set();

    return rows.filter((row) => {
      const key = fbClean(
        row.title + '::' + row.year + '::' + row.role + '::' + row.type
      );

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function fbFullBodyRows(actor) {
    const signature = fbSignatureRows(actor);
    const expanded = fbExpandedRows(actor);

    let rows = fbDedupeRows([...expanded]);

    /*
      Important:
      Full Body must be larger than Signature Work.
      If real expanded credits are not enough yet, include signature reference rows
      and then add starter expansion rows until the count is bigger.
    */
    const signatureCount = signature.length;

    if (rows.length <= signatureCount) {
      rows = fbDedupeRows([...rows, ...signature]);
    }

    if (rows.length <= signatureCount) {
      const needed = signatureCount - rows.length + 1;
      rows = fbDedupeRows([...rows, ...fbStarterExpansionRows(actor, needed)]);
    }

    if (!rows.length) {
      rows = fbStarterExpansionRows(actor, 3);
    }

    /*
      Safety rule:
      No actor should show Full Body count equal to Signature count.
      Add starter expansion rows until Full Body is bigger.
    */
    while (signatureCount > 0 && rows.length <= signatureCount) {
      rows.push(...fbStarterExpansionRows(actor, 1));
      rows = fbDedupeRows(rows);
    }

    return rows;
  }

  window.getFullBodyOfWorkForActor = function (actorName) {
    const actor = fbFindActor(actorName);

    if (!actor) return [];

    return fbFullBodyRows(actor);
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  function fbBuildSignatureWork(actor) {
    const rows = fbSignatureRows(actor);

    if (!rows.length) {
      return `
        <div class="info-card">
          <h3>No Signature Work Loaded Yet</h3>
          <p>This actor does not have Signature Work loaded yet.</p>
        </div>
      `;
    }

    return `
      <p>
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows
          .map(
            (row) => `
          <article class="info-card">
            <h3>${fbSafe(row.title)}</h3>
            <p><b>Year:</b> ${fbSafe(row.year || 'Year to verify')}</p>
            <p><b>Character / Role:</b> ${fbSafe(
              row.role || 'Role to verify'
            )}</p>
            <p><b>Actor:</b> ${fbSafe(actor.name)}</p>
          </article>
        `
          )
          .join('')}
      </div>

      ${typeof sourceBlock === 'function' ? sourceBlock(actor) : ''}
    `;
  }

  function fbBuildFullBodyCard(row) {
    return `
      <article class="full-body-card">
        <h3>${fbSafe(row.title)}</h3>

        <span class="full-body-pill">${fbSafe(row.type || 'Credit')}</span>
        ${
          row.year
            ? `<span class="full-body-pill">${fbSafe(row.year)}</span>`
            : ''
        }

        <p><b>Role / Credit:</b> ${fbSafe(row.role || 'Role to verify')}</p>
        <p><b>Source inside VEDB:</b> ${fbSafe(
          row.source || 'VEDB credit library'
        )}</p>

        ${
          row.isStarterExpansion
            ? `<p class="full-body-note">
                Starter expansion row. Replace this with a real researched credit later.
              </p>`
            : row.isSignatureReference
            ? `<p class="full-body-note">
                  Signature Work reference included inside Full Body until more expanded credits are loaded.
                </p>`
            : `<p class="full-body-note">
                  Expanded or loaded Full Body credit.
                </p>`
        }

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${fbSafe(row.actorName || '')}"
          data-title="${fbSafe(row.title || '')}"
          data-year="${fbSafe(row.year || '')}"
          data-type="${fbSafe(row.type || 'Movie')}"
          data-role="${fbSafe(row.role || 'Cast member')}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = fbFindActor(actorName);

    if (!actor) {
      return `
        <div class="full-body-box">
          <h3>Actor not found</h3>
          <p>VEDB could not find this actor in the actor list.</p>
        </div>
      `;
    }

    const signatureCount = fbSignatureRows(actor).length;
    const rows = fbFullBodyRows(actor);
    const starterCount = rows.filter((row) => row.isStarterExpansion).length;

    return `
      <div class="full-body-box">
        <h3>Signature Work vs. Full Body of Work</h3>

        <p class="full-body-note">
          <b>Signature Work</b> is the short highlight list.
          <b>Full Body of Work</b> must be larger than Signature Work and should never be blank.
        </p>

        ${
          starterCount
            ? `<p class="full-body-note">
                This actor needs more real career credits loaded.
                VEDB is showing starter expansion rows so the Full Body section is never empty or equal to Signature Work.
              </p>`
            : `<p class="full-body-note">
                Expanded Full Body data is loaded for this actor.
              </p>`
        }

        <p>
          <span class="full-body-pill">${signatureCount} Signature Work titles</span>
          <span class="full-body-pill">${rows.length} Full Body rows</span>
          ${
            rows.length > signatureCount
              ? `<span class="full-body-pill">Full Body is larger</span>`
              : `<span class="full-body-pill">Needs review</span>`
          }
        </p>
      </div>

      <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

      <div class="full-body-grid">
        ${rows.map(fbBuildFullBodyCard).join('')}
      </div>

      ${
        typeof buildAddFullBodyCreditForm === 'function'
          ? buildAddFullBodyCreditForm(actor.name)
          : ''
      }
    `;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  const oldActorSection =
    typeof actorSection === 'function' ? actorSection : null;

  if (oldActorSection) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === 'filmography' &&
        typeof currentMode !== 'undefined' &&
        currentMode === 'actor' &&
        typeof currentEntity !== 'undefined' &&
        currentEntity
      ) {
        return fbBuildSignatureWork(currentEntity);
      }

      return oldActorSection(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  if (
    typeof currentMode !== 'undefined' &&
    currentMode === 'actor' &&
    typeof buildCards === 'function'
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById('sectionPage');

  if (page && page.style.display !== 'none') {
    if (
      page.textContent.includes('Signature Work') &&
      typeof openSectionPage === 'function'
    ) {
      setTimeout(function () {
        openSectionPage('filmography');
      }, 100);
    }

    if (
      page.textContent.includes('VEDB FULL BODY OF WORK') &&
      typeof openFullBodyOfWorkPage === 'function'
    ) {
      setTimeout(function () {
        let actorName = '';

        try {
          actorName =
            typeof currentEntity !== 'undefined' &&
            currentEntity &&
            currentEntity.name
              ? currentEntity.name
              : '';
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log('VEDB Full Body Must Be Bigger Than Signature Work Fix loaded.');
})();

/* =========================================================
   VEDB 4.3 — SIGNATURE WORK OPEN TITLE SPHERE BUTTONS
   Paste at the VERY BOTTOM of the JS box.

   Adds:
   - Open Title Sphere → buttons to Signature Work cards.
   - Uses the same .full-body-open-title-v4 button system
     that already works for Full Body of Work.

   Does NOT:
   - touch startup
   - touch Full Page memory
   - force Zendaya or any actor
   - change actor data
   - change the stable sphere system
========================================================= */

(function () {
  if (window.vedbSignatureWorkTitleButtonsV43Installed) return;
  window.vedbSignatureWorkTitleButtonsV43Installed = true;

  function sigSafe(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function sigClean(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function sigGetRoleForSignature(actor, title, index) {
    if (typeof getRoleForSignature === 'function') {
      try {
        return getRoleForSignature(actor, title, index);
      } catch (error) {}
    }

    if (actor && Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    return 'Role to verify';
  }

  function sigSignatureRows(actor) {
    if (!actor || !Array.isArray(actor.knownFor)) return [];

    return actor.knownFor
      .map(function (item, index) {
        const title = Array.isArray(item) ? item[0] : String(item || '');
        const year = Array.isArray(item) ? item[1] : '';
        const role = sigGetRoleForSignature(actor, title, index);

        return {
          actorName: actor.name || '',
          title: title,
          year: year,
          type: 'Signature Work',
          role: role || 'Role to verify',
        };
      })
      .filter(function (row) {
        return String(row.title || '').trim();
      });
  }

  function sigBuildSignatureWork(actor) {
    const rows = sigSignatureRows(actor);

    if (!rows.length) {
      return `
        <div class="info-card">
          <h3>No Signature Work Loaded Yet</h3>
          <p>This actor does not have Signature Work loaded yet.</p>
        </div>
      `;
    }

    return `
      <p>
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows
          .map(function (row) {
            return `
            <article class="info-card">
              <h3>${sigSafe(row.title)}</h3>
              <p><b>Year:</b> ${sigSafe(row.year || 'Year to verify')}</p>
              <p><b>Character / Role:</b> ${sigSafe(
                row.role || 'Role to verify'
              )}</p>
              <p><b>Actor:</b> ${sigSafe(row.actorName)}</p>

              <button
                type="button"
                class="full-body-open-title-v4"
                data-actor="${sigSafe(row.actorName)}"
                data-title="${sigSafe(row.title)}"
                data-year="${sigSafe(row.year || '')}"
                data-type="${sigSafe(row.type || 'Signature Work')}"
                data-role="${sigSafe(row.role || 'Cast member')}"
              >
                Open Title Sphere →
              </button>
            </article>
          `;
          })
          .join('')}
      </div>

      ${typeof sourceBlock === 'function' ? sourceBlock(actor) : ''}
    `;
  }

  const previousActorSection =
    typeof actorSection === 'function' ? actorSection : null;

  if (previousActorSection) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === 'filmography' &&
        typeof currentMode !== 'undefined' &&
        currentMode === 'actor' &&
        typeof currentEntity !== 'undefined' &&
        currentEntity
      ) {
        return sigBuildSignatureWork(currentEntity);
      }

      return previousActorSection(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  if (
    typeof currentMode !== 'undefined' &&
    currentMode === 'actor' &&
    typeof buildCards === 'function'
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  console.log('VEDB 4.3 Signature Work Open Title Sphere Buttons installed.');
})();

/* =========================================================
   VEDB — CLOSE SEARCH RESULTS WHEN A–Z IS CLICKED
   Paste at the VERY BOTTOM of the JS box.
========================================================= */

(function () {
  if (window.vedbCloseSearchOnAZInstalled) return;
  window.vedbCloseSearchOnAZInstalled = true;

  function closeSearchResults() {
    const searchResults = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');

    if (searchResults) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
    }

    if (searchInput) {
      searchInput.blur();
    }
  }

  document.addEventListener(
    'click',
    function (event) {
      const target = event.target;

      if (!target) return;

      const isAZButton =
        target.matches?.('#azButton') ||
        target.matches?.('.az-button') ||
        target.textContent?.trim() === 'A–Z' ||
        target.textContent?.trim() === 'A-Z';

      if (isAZButton) {
        closeSearchResults();
      }
    },
    true
  );

  console.log('VEDB close-search-on-AZ fix installed.');
})();
/* =========================================================
   VEDB — STRONG SCROLL TO TOP AFTER MOVIE / TITLE SPHERE LOAD
   Paste at the VERY BOTTOM of the JS box.

   This version waits until AFTER the title/movie sphere loads.
========================================================= */

(function () {
  if (window.vedbStrongScrollTopAfterTitleLoadInstalled) return;
  window.vedbStrongScrollTopAfterTitleLoadInstalled = true;

  let shouldScrollAfterTitleOpen = false;

  function forceTopScroll() {
    const delays = [0, 80, 180, 350, 700];

    delays.forEach(function (delay) {
      setTimeout(function () {
        window.scrollTo(0, 0);

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        const scrollAreas = [
          document.querySelector('.app-shell'),
          document.getElementById('app'),
          document.getElementById('mainPage'),
          document.getElementById('sectionPage'),
          document.querySelector('.main-page'),
          document.querySelector('.section-page'),
          document.querySelector('.cards-grid'),
        ];

        scrollAreas.forEach(function (area) {
          if (area) {
            area.scrollTop = 0;
          }
        });

        const topTarget =
          document.querySelector('.topbar') ||
          document.querySelector('.app-shell') ||
          document.getElementById('app');

        if (topTarget && typeof topTarget.scrollIntoView === 'function') {
          topTarget.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          });
        }
      }, delay);
    });
  }

  document.addEventListener(
    'click',
    function (event) {
      const target = event.target;
      if (!target) return;

      const button = target.closest?.(
        'button, [data-title], .full-body-open-title-v4, .vedb-title-text-link-v44c'
      );

      if (!button) return;

      const text = String(button.textContent || '').toLowerCase();

      const isMovieOrTitleSphereClick =
        button.hasAttribute('data-title') ||
        button.classList.contains('full-body-open-title-v4') ||
        button.classList.contains('vedb-title-text-link-v44c') ||
        text.includes('open movie sphere') ||
        text.includes('open title sphere');

      if (isMovieOrTitleSphereClick) {
        shouldScrollAfterTitleOpen = true;
        setTimeout(forceTopScroll, 120);
      }
    },
    true
  );

  const oldLoadEntity = typeof loadEntity === 'function' ? loadEntity : null;

  if (oldLoadEntity) {
    window.loadEntity = function (entity) {
      const result = oldLoadEntity(entity);

      const isTitle =
        entity && String(entity.mode || '').toLowerCase() === 'title';

      if (shouldScrollAfterTitleOpen || isTitle) {
        shouldScrollAfterTitleOpen = false;
        forceTopScroll();
      }

      return result;
    };

    try {
      loadEntity = window.loadEntity;
    } catch (error) {}
  }

  console.log('VEDB strong scroll-to-top-after-title-load fix installed.');
})();

/* =========================================================
   VEDB — LAST ACTOR MEMORY FIX
   Paste at the VERY BOTTOM of script.js.

   Fixes:
   - Actors button should return to the last actor viewed.
   - If no last actor exists, it safely falls back to Denzel.
   - Does NOT touch Story Snapshot system.
   - Does NOT bring back Zendaya fallback.
========================================================= */

(function () {
  if (window.vedbLastActorMemoryFixInstalled) return;
  window.vedbLastActorMemoryFixInstalled = true;

  const LAST_ACTOR_KEY = 'vedb_last_actor_name_v1';

  function cleanName(value) {
    return String(value || '')
      .toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function findActorSafe(actorName) {
    if (typeof actors === 'undefined' || !Array.isArray(actors)) return null;

    const wanted = cleanName(actorName);

    if (!wanted) return null;

    return (
      actors.find(function (actor) {
        return cleanName(actor.name) === wanted;
      }) ||
      actors.find(function (actor) {
        const current = cleanName(actor.name);
        return current.includes(wanted) || wanted.includes(current);
      }) ||
      null
    );
  }

  function getSafeFallbackActor() {
    return (
      findActorSafe('Denzel Washington') ||
      (typeof actors !== 'undefined' && Array.isArray(actors)
        ? actors.find(function (actor) {
            return cleanName(actor.name) !== 'zendaya';
          }) || actors[0]
        : null)
    );
  }

  function rememberActor(actor) {
    if (!actor || cleanName(actor.mode) !== 'actor' || !actor.name) return;

    try {
      localStorage.setItem(LAST_ACTOR_KEY, actor.name);
      sessionStorage.setItem(LAST_ACTOR_KEY, actor.name);
    } catch (error) {}

    try {
      lastActor = actor;
    } catch (error) {}
  }

  function getRememberedActor() {
    let savedName = '';

    try {
      savedName =
        sessionStorage.getItem(LAST_ACTOR_KEY) ||
        localStorage.getItem(LAST_ACTOR_KEY) ||
        '';
    } catch (error) {}

    return findActorSafe(savedName);
  }

  const previousLoadEntity =
    typeof loadEntity === 'function' ? loadEntity : null;

  if (previousLoadEntity) {
    window.loadEntity = function (entity) {
      const result = previousLoadEntity(entity);

      if (entity && cleanName(entity.mode) === 'actor') {
        rememberActor(entity);
      }

      return result;
    };

    try {
      loadEntity = window.loadEntity;
    } catch (error) {}
  }

  window.showActors = function () {
    const rememberedActor =
      getRememberedActor() ||
      (typeof lastActor !== 'undefined' && lastActor ? lastActor : null) ||
      getSafeFallbackActor();

    if (rememberedActor && typeof loadEntity === 'function') {
      loadEntity(rememberedActor);
    }

    if (typeof setNavActive === 'function') {
      setNavActive('actors');
    }
  };

  try {
    showActors = window.showActors;
  } catch (error) {}

  console.log('VEDB Last Actor Memory Fix installed.');
})();

/* =========================================================
   VEDB CAST + CHARACTER PAIR DISPLAY FIX v1
   Purpose:
   - Shows actor names together with the characters they play.
   - Example: Zendaya — Chani
   - Fixes Title Sphere sections where characters appeared without actors.
   - Does NOT change title data.
   - Does NOT touch startup, search, audit, Story Snapshots, or Full Body credits.
========================================================= */

(function () {
  if (window.vedbCastCharacterPairDisplayFixV1Installed) return;
  window.vedbCastCharacterPairDisplayFixV1Installed = true;

  function ccSafe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function ccLinkedActorName(actorName) {
    const cleanName = String(actorName || "").trim();

    if (!cleanName) return "Cast member";

    if (typeof findActorByName === "function" && findActorByName(cleanName)) {
      return `
        <button
          type="button"
          class="vedb-title-text-link-v44c"
          onclick="loadEntityByName('actor', '${ccSafe(cleanName)}')"
        >
          ${ccSafe(cleanName)}
        </button>
      `;
    }

    return ccSafe(cleanName);
  }

  function buildCastCharacterPairs(title) {
    const cast = Array.isArray(title?.cast) ? title.cast : [];
    const characters = Array.isArray(title?.characters) ? title.characters : [];

    if (!cast.length && !characters.length) {
      return `
        <article class="info-card">
          <h3>Cast & Characters</h3>
          <p>No cast or character data has been added yet.</p>
        </article>
      `;
    }

    const maxRows = Math.max(cast.length, characters.length);

    const rows = [];

    for (let i = 0; i < maxRows; i++) {
      const actorName = cast[i] || "Cast member";
      const characterName = characters[i] || "Character to be added";

      rows.push(`
        <li>
          <b>${ccLinkedActorName(actorName)}</b>
          <span> — ${ccSafe(characterName)}</span>
        </li>
      `);
    }

    return `
      <article class="info-card">
        <h3>Cast & Characters</h3>
        <p>Actors are matched with the characters they play in this title.</p>
        <ul>
          ${rows.join("")}
        </ul>
      </article>
    `;
  }

  const previousTitleSectionCastCharacterFix =
    typeof titleSection === "function" ? titleSection : null;

  if (!previousTitleSectionCastCharacterFix) {
    console.warn("VEDB Cast + Character Pair Display Fix skipped: titleSection is not available.");
    return;
  }

  window.titleSection = function (sectionId) {
    if (
      typeof currentMode !== "undefined" &&
      currentMode === "title" &&
      typeof currentEntity !== "undefined" &&
      currentEntity
    ) {
      if (sectionId === "makersPerformers") {
        return `
          ${buildCastCharacterPairs(currentEntity)}
          <h3>Makers</h3>
          ${typeof listHTML === "function" ? listHTML(currentEntity.crew || []) : ""}
        `;
      }

      if (sectionId === "characters" || sectionId === "cast") {
        return buildCastCharacterPairs(currentEntity);
      }
    }

    return previousTitleSectionCastCharacterFix(sectionId);
  };

  try {
    titleSection = window.titleSection;
  } catch (error) {}

  console.log("VEDB Cast + Character Pair Display Fix v1 installed.");
})();
