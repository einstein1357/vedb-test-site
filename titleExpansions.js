/* =========================================================
   VEDB TITLE EXPANSION — STORY SNAPSHOTS BATCH 2
   Purpose:
   - Adds Batch 2 Story Snapshot titles as real searchable Title Spheres.
   - Lets storySnapshots.js attach the plot-first Story Snapshots.
   - Keeps title pages organized.
   - Does NOT touch startup, Zendaya memory, actors, CSS, or Full Body credits.

   Batch 2 titles:
   1. Avengers: Endgame
   2. Black Widow
   3. Marriage Story
   4. Lost in Translation
   5. Pretty Woman
   6. Erin Brockovich
   7. Notting Hill
   8. The Woman King
   9. Ma Rainey’s Black Bottom
   10. How to Get Away with Murder
========================================================= */

(function () {
  if (window.vedbTitleExpansionStoryBatch2V2Installed) return;
  window.vedbTitleExpansionStoryBatch2V2Installed = true;

  if (typeof addTitleOnce !== 'function') {
    console.warn(
      'VEDB Batch 2 title expansion skipped: addTitleOnce is not available yet.'
    );
    return;
  }

  const vedbBatch2Titles = [
    {
      name: 'Avengers: Endgame',
      job: 'Movie • Superhero • Action',
      initials: 'AE',
      summary:
        'The surviving Avengers search for a way forward after a devastating loss changes the universe.',
      overview:
        'Avengers: Endgame follows the surviving Avengers after a devastating defeat changes the universe. With the team broken, scattered, and grieving, they search for a way to undo what was lost and bring everyone back together.',
      cast: [
        'Robert Downey Jr.',
        'Scarlett Johansson',
        'Tom Holland',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
      ],
      characters: [
        'Tony Stark',
        'Natasha Romanoff',
        'Peter Parker',
        'Steve Rogers',
        'Bruce Banner',
        'Thor',
      ],
      crew: [
        'Directors: Anthony Russo and Joe Russo',
        'Producer: Marvel Studios',
      ],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: [
        'Iron Man',
        'Black Widow',
        'Spider-Man: No Way Home',
        'Avengers: Infinity War',
      ],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2019',
        Type: 'Movie',
        Franchise: 'Marvel Cinematic Universe',
      },
      buzz: 98,
      sources: ['https://en.wikipedia.org/wiki/Avengers:_Endgame'],
    },

    {
      name: 'Black Widow',
      job: 'Movie • Superhero • Action',
      initials: 'BW',
      summary:
        'Natasha Romanoff confronts her past while facing a dangerous mission connected to the program that trained her.',
      overview:
        'Black Widow follows Natasha Romanoff after she is forced to confront parts of her past that she tried to leave behind. While separated from the Avengers, Natasha becomes involved in a dangerous mission connected to the program that trained her.',
      cast: [
        'Scarlett Johansson',
        'Florence Pugh',
        'David Harbour',
        'Rachel Weisz',
      ],
      characters: [
        'Natasha Romanoff',
        'Yelena Belova',
        'Alexei Shostakov',
        'Melina Vostokoff',
      ],
      crew: ['Director: Cate Shortland', 'Producer: Marvel Studios'],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: [
        'Avengers: Endgame',
        'Iron Man',
        'Captain America: The Winter Soldier',
        'Marvel Cinematic Universe',
      ],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2021',
        Type: 'Movie',
        Franchise: 'Marvel Cinematic Universe',
      },
      buzz: 91,
      sources: ['https://en.wikipedia.org/wiki/Black_Widow_(2021_film)'],
    },

    {
      name: 'Marriage Story',
      job: 'Movie • Drama',
      initials: 'MS',
      summary:
        'A married couple goes through a painful separation while trying to protect their young son.',
      overview:
        'Marriage Story follows Charlie and Nicole, a married couple going through a painful separation while trying to protect their young son. As their lives move in different directions, private disagreements become part of a larger legal and emotional process.',
      cast: ['Scarlett Johansson', 'Adam Driver', 'Laura Dern', 'Alan Alda'],
      characters: [
        'Nicole Barber',
        'Charlie Barber',
        'Nora Fanshaw',
        'Bert Spitz',
      ],
      crew: ['Director: Noah Baumbach', 'Writer: Noah Baumbach'],
      awards: ['Awards hub placeholder', 'Acting recognition placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Streaming release data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: [
        'Lost in Translation',
        'Her',
        'Kramer vs. Kramer',
        'Blue Valentine',
      ],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2019',
        Type: 'Movie',
        Genre: 'Drama',
      },
      buzz: 88,
      sources: ['https://en.wikipedia.org/wiki/Marriage_Story'],
    },

    {
      name: 'Lost in Translation',
      job: 'Movie • Drama • Romance',
      initials: 'LT',
      summary:
        'Two lonely Americans in Tokyo form a quiet friendship while feeling disconnected from their lives.',
      overview:
        'Lost in Translation follows Bob Harris, an aging American actor, and Charlotte, a young woman staying in Tokyo with her husband. Both feel disconnected from the people around them and from the lives they expected to have.',
      cast: [
        'Scarlett Johansson',
        'Bill Murray',
        'Giovanni Ribisi',
        'Anna Faris',
      ],
      characters: ['Charlotte', 'Bob Harris', 'John', 'Kelly'],
      crew: ['Director: Sofia Coppola', 'Writer: Sofia Coppola'],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Marriage Story', 'Her', 'Before Sunrise', 'Somewhere'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2003',
        Type: 'Movie',
        Genre: 'Drama',
      },
      buzz: 86,
      sources: ['https://en.wikipedia.org/wiki/Lost_in_Translation_(film)'],
    },

    {
      name: 'Pretty Woman',
      job: 'Movie • Romantic Comedy',
      initials: 'PW',
      summary:
        'A Los Angeles woman and a wealthy businessman form a connection that changes how both see their lives.',
      overview:
        'Pretty Woman follows Vivian Ward, a woman working in Los Angeles, who meets wealthy businessman Edward Lewis. What begins as a business arrangement turns into a connection that changes how both of them see themselves and their lives.',
      cast: [
        'Julia Roberts',
        'Richard Gere',
        'Héctor Elizondo',
        'Laura San Giacomo',
      ],
      characters: [
        'Vivian Ward',
        'Edward Lewis',
        'Barney Thompson',
        'Kit De Luca',
      ],
      crew: ['Director: Garry Marshall', 'Writer: J. F. Lawton'],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: [
        'Notting Hill',
        'Runaway Bride',
        "My Best Friend's Wedding",
        'Erin Brockovich',
      ],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '1990',
        Type: 'Movie',
        Genre: 'Romantic Comedy',
      },
      buzz: 90,
      sources: ['https://en.wikipedia.org/wiki/Pretty_Woman'],
    },

    {
      name: 'Erin Brockovich',
      job: 'Movie • Legal Drama • Biography',
      initials: 'EB',
      summary:
        'A single mother helps uncover a major environmental case involving contaminated water and corporate wrongdoing.',
      overview:
        'Erin Brockovich follows a single mother who gets a job at a small law office and discovers a major environmental case. As she investigates medical problems in a California community, she begins connecting those problems to contaminated water and corporate wrongdoing.',
      cast: [
        'Julia Roberts',
        'Albert Finney',
        'Aaron Eckhart',
        'Marg Helgenberger',
      ],
      characters: ['Erin Brockovich', 'Ed Masry', 'George', 'Donna Jensen'],
      crew: ['Director: Steven Soderbergh', 'Writer: Susannah Grant'],
      awards: ['Awards hub placeholder', 'Acting recognition placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: [
        'Pretty Woman',
        'The Pelican Brief',
        'A Civil Action',
        'Dark Waters',
      ],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2000',
        Type: 'Movie',
        Genre: 'Legal Drama',
      },
      buzz: 89,
      sources: ['https://en.wikipedia.org/wiki/Erin_Brockovich_(film)'],
    },

    {
      name: 'Notting Hill',
      job: 'Movie • Romantic Comedy',
      initials: 'NH',
      summary:
        'A quiet London bookstore owner begins a romance with a famous actress from a very different world.',
      overview:
        'Notting Hill follows William Thacker, a quiet bookstore owner in London, whose life changes when famous actress Anna Scott walks into his shop. Their relationship grows across two very different worlds: his ordinary neighborhood life and her public celebrity life.',
      cast: ['Julia Roberts', 'Hugh Grant', 'Rhys Ifans', 'Gina McKee'],
      characters: ['Anna Scott', 'William Thacker', 'Spike', 'Bella'],
      crew: ['Director: Roger Michell', 'Writer: Richard Curtis'],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: [
        'Pretty Woman',
        'Four Weddings and a Funeral',
        'Love Actually',
        'Runaway Bride',
      ],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '1999',
        Type: 'Movie',
        Genre: 'Romantic Comedy',
      },
      buzz: 88,
      sources: ['https://en.wikipedia.org/wiki/Notting_Hill_(film)'],
    },

    {
      name: 'The Woman King',
      job: 'Movie • Historical Action • Drama',
      initials: 'WK',
      summary:
        'General Nanisca leads an all-female warrior unit protecting the kingdom of Dahomey from rising threats.',
      overview:
        'The Woman King follows General Nanisca and the Agojie, an all-female warrior unit protecting the West African kingdom of Dahomey. As new threats rise and a young recruit joins the group, the warriors prepare to defend their people and their way of life.',
      cast: ['Viola Davis', 'Thuso Mbedu', 'Lashana Lynch', 'John Boyega'],
      characters: ['Nanisca', 'Nawi', 'Izogie', 'King Ghezo'],
      crew: [
        'Director: Gina Prince-Bythewood',
        'Story: Maria Bello and Dana Stevens',
      ],
      awards: ['Awards hub placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Box office data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Fences', 'The Help', 'Black Panther', 'Braveheart'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2022',
        Type: 'Movie',
        Genre: 'Historical Action Drama',
      },
      buzz: 90,
      sources: ['https://en.wikipedia.org/wiki/The_Woman_King'],
    },

    {
      name: 'Ma Rainey’s Black Bottom',
      job: 'Movie • Drama • Music',
      initials: 'MR',
      summary:
        'A blues singer and her band face tension during a recording session in 1920s Chicago.',
      overview:
        'Ma Rainey’s Black Bottom follows blues singer Ma Rainey and her band during a recording session in 1920s Chicago. As the musicians wait, rehearse, argue, and share stories, tensions grow between artistic control, ambition, race, and the music business.',
      cast: [
        'Viola Davis',
        'Chadwick Boseman',
        'Colman Domingo',
        'Glynn Turman',
      ],
      characters: ['Ma Rainey', 'Levee Green', 'Cutler', 'Toledo'],
      crew: ['Director: George C. Wolfe', 'Based on the play by August Wilson'],
      awards: ['Awards hub placeholder', 'Acting recognition placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['Streaming release data placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['Fences', 'The Help', 'One Night in Miami', 'Ray'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Release Year': '2020',
        Type: 'Movie',
        Genre: 'Drama',
      },
      buzz: 89,
      sources: [
        'https://en.wikipedia.org/wiki/Ma_Rainey%27s_Black_Bottom_(film)',
      ],
    },

    {
      name: 'How to Get Away with Murder',
      job: 'TV Series • Legal Drama • Mystery',
      initials: 'HT',
      summary:
        'A brilliant law professor and her students become connected through cases, secrets, and dangerous choices.',
      overview:
        'How to Get Away with Murder follows Annalise Keating, a brilliant law professor and defense attorney, and a group of her students. Their lives become connected through criminal cases, secrets, and dangerous choices that pull them deeper into legal and personal trouble.',
      cast: ['Viola Davis', 'Billy Brown', 'Alfred Enoch', 'Jack Falahee'],
      characters: [
        'Annalise Keating',
        'Nate Lahey',
        'Wes Gibbins',
        'Connor Walsh',
      ],
      crew: ['Creator: Peter Nowalk', 'Producer: Shondaland'],
      awards: ['Awards hub placeholder', 'Television recognition placeholder'],
      reviews: ['Review hub placeholder'],
      boxOffice: ['TV viewership placeholder'],
      trivia: ['Trivia placeholder — verify before publishing.'],
      videos: ['Official trailer placeholder'],
      similar: ['The Help', 'Fences', 'Scandal', 'Damages'],
      whereWatch: ['Where-to-watch links can be added later.'],
      facts: {
        'Start Year': '2014',
        Type: 'TV Series',
        Genre: 'Legal Drama',
      },
      buzz: 91,
      sources: ['https://en.wikipedia.org/wiki/How_to_Get_Away_with_Murder'],
    },
  ];

  vedbBatch2Titles.forEach(function (title) {
    addTitleOnce(title);
  });

  if (typeof syncAllItemsForSearch === 'function') {
    syncAllItemsForSearch();
  }

  console.log(
    'VEDB Title Expansion Story Snapshots Batch 2 installed: 10 titles.'
  );
})();
/* =========================================================
   VEDB TITLE EXPANSION — STORY SNAPSHOTS BATCH 3
   Purpose:
   - Adds Batch 3 Story Snapshot titles as real searchable Title Spheres.
   - Lets storySnapshots.js attach the plot-first Story Snapshots.
   - Keeps script.js from getting bloated.
   - Does NOT touch startup, Zendaya memory, actors, CSS, or Full Body credits.

   Batch 3 titles:
   1. The Shawshank Redemption
   2. Million Dollar Baby
   3. Se7en
   4. Driving Miss Daisy
   5. Sherlock Holmes
   6. Chaplin
   7. Her
   8. Ocean’s Eleven
   9. The Equalizer
   10. Dune: Part Two
========================================================= */

(function () {
  if (window.vedbTitleExpansionStoryBatch3V1Installed) return;
  window.vedbTitleExpansionStoryBatch3V1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Batch 3 title expansion skipped: addTitleOnce is not available yet.");
    return;
  }

  const vedbBatch3Titles = [
    {
      name: "The Shawshank Redemption",
      job: "Movie • Drama",
      initials: "SR",
      summary:
        "A banker sent to prison forms a friendship with a longtime inmate while holding onto hope.",
      overview:
        "The Shawshank Redemption follows Andy Dufresne, a banker sent to Shawshank prison after being convicted of murder. Inside the prison, Andy forms a friendship with longtime inmate Red while learning how to survive a harsh and controlled world.",
      cast: ["Morgan Freeman", "Tim Robbins", "Bob Gunton", "William Sadler"],
      characters: ["Ellis Boyd Redding", "Andy Dufresne", "Warden Norton", "Heywood"],
      crew: ["Director: Frank Darabont", "Based on a Stephen King novella"],
      awards: ["Awards hub placeholder", "Classic film recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Million Dollar Baby", "Driving Miss Daisy", "The Green Mile", "Se7en"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1994",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 96,
      sources: ["https://en.wikipedia.org/wiki/The_Shawshank_Redemption"]
    },

    {
      name: "Million Dollar Baby",
      job: "Movie • Sports Drama",
      initials: "MDB",
      summary:
        "A determined boxer trains with a reluctant coach as their bond becomes deeply personal.",
      overview:
        "Million Dollar Baby follows Maggie Fitzgerald, a determined woman who wants to become a professional boxer, and Frankie Dunn, a trainer who is reluctant to work with her at first. As Maggie trains and improves, their bond grows into something deeper than a normal boxing partnership.",
      cast: ["Morgan Freeman", "Clint Eastwood", "Hilary Swank"],
      characters: ["Eddie Dupris", "Frankie Dunn", "Maggie Fitzgerald"],
      crew: ["Director: Clint Eastwood", "Producer: Clint Eastwood"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Shawshank Redemption", "Creed", "Rocky", "The Fighter"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2004",
        "Type": "Movie",
        "Genre": "Sports Drama"
      },
      buzz: 91,
      sources: ["https://en.wikipedia.org/wiki/Million_Dollar_Baby"]
    },

    {
      name: "Se7en",
      job: "Movie • Crime • Thriller",
      initials: "S7",
      summary:
        "Two detectives investigate a disturbing murder case built around a dangerous pattern.",
      overview:
        "Se7en follows two detectives investigating a series of disturbing murders in a dark and rain-soaked city. Detective Somerset is nearing retirement, while Detective Mills is new to the job and eager to prove himself.",
      cast: ["Morgan Freeman", "Brad Pitt", "Gwyneth Paltrow", "Kevin Spacey"],
      characters: ["Detective Somerset", "Detective Mills", "Tracy Mills", "John Doe"],
      crew: ["Director: David Fincher", "Writer: Andrew Kevin Walker"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Shawshank Redemption", "Zodiac", "Gone Girl", "The Dark Knight"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1995",
        "Type": "Movie",
        "Genre": "Crime Thriller"
      },
      buzz: 93,
      sources: ["https://en.wikipedia.org/wiki/Seven_(1995_film)"]
    },

    {
      name: "Driving Miss Daisy",
      job: "Movie • Drama",
      initials: "DMD",
      summary:
        "An older woman and her driver slowly build trust over many years in Atlanta.",
      overview:
        "Driving Miss Daisy follows Daisy Werthan, an older woman in Atlanta, and Hoke Colburn, the driver hired to help her after she can no longer drive herself. Their relationship begins with resistance and distance, but slowly changes over many years.",
      cast: ["Morgan Freeman", "Jessica Tandy", "Dan Aykroyd"],
      characters: ["Hoke Colburn", "Daisy Werthan", "Boolie Werthan"],
      crew: ["Director: Bruce Beresford", "Writer: Alfred Uhry"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Shawshank Redemption", "Million Dollar Baby", "Fences", "The Help"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1989",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/Driving_Miss_Daisy"]
    },

    {
      name: "Sherlock Holmes",
      job: "Movie • Mystery • Action",
      initials: "SH",
      summary:
        "Sherlock Holmes and Dr. Watson investigate a dangerous case tied to a larger threat in London.",
      overview:
        "Sherlock Holmes follows detective Sherlock Holmes and Dr. John Watson as they investigate a dangerous case involving murder, mystery, and a larger threat to London. Holmes uses observation, deduction, and unusual methods to follow clues that others miss.",
      cast: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams", "Mark Strong"],
      characters: ["Sherlock Holmes", "Dr. John Watson", "Irene Adler", "Lord Blackwood"],
      crew: ["Director: Guy Ritchie", "Producer: Joel Silver"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Iron Man", "Chaplin", "Sherlock Holmes: A Game of Shadows", "The Nice Guys"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2009",
        "Type": "Movie",
        "Genre": "Mystery Action"
      },
      buzz: 89,
      sources: ["https://en.wikipedia.org/wiki/Sherlock_Holmes_(2009_film)"]
    },

    {
      name: "Chaplin",
      job: "Movie • Biography • Drama",
      initials: "CH",
      summary:
        "A biographical drama about Charlie Chaplin’s rise, fame, personal life, and film career.",
      overview:
        "Chaplin follows the life and career of Charlie Chaplin, from his difficult early years to his rise as one of the most recognizable performers in film history. The movie follows his work in silent comedy, his public fame, his personal relationships, and the challenges that came with becoming a major cultural figure.",
      cast: ["Robert Downey Jr.", "Geraldine Chaplin", "Dan Aykroyd", "Kevin Kline"],
      characters: ["Charlie Chaplin", "Hannah Chaplin", "Mack Sennett", "Douglas Fairbanks"],
      crew: ["Director: Richard Attenborough", "Based on Chaplin’s life and writings"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Oppenheimer", "Sherlock Holmes", "The Iron Lady", "Malcolm X"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1992",
        "Type": "Movie",
        "Genre": "Biographical Drama"
      },
      buzz: 84,
      sources: ["https://en.wikipedia.org/wiki/Chaplin_(film)"]
    },

    {
      name: "Her",
      job: "Movie • Science Fiction • Romance • Drama",
      initials: "H",
      summary:
        "A lonely man forms a deep relationship with an advanced operating system.",
      overview:
        "Her follows Theodore Twombly, a lonely man in the near future who forms a relationship with an advanced operating system named Samantha. As their connection grows, Theodore begins to question love, companionship, technology, and what it means to be understood.",
      cast: ["Scarlett Johansson", "Joaquin Phoenix", "Amy Adams", "Rooney Mara"],
      characters: ["Samantha", "Theodore Twombly", "Amy", "Catherine"],
      crew: ["Director: Spike Jonze", "Writer: Spike Jonze"],
      awards: ["Awards hub placeholder", "Screenplay recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Lost in Translation", "Marriage Story", "Eternal Sunshine of the Spotless Mind", "Ex Machina"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2013",
        "Type": "Movie",
        "Genre": "Science Fiction Romance"
      },
      buzz: 88,
      sources: ["https://en.wikipedia.org/wiki/Her_(film)"]
    },

    {
      name: "Ocean's Eleven",
      job: "Movie • Heist • Comedy • Crime",
      initials: "OE",
      summary:
        "A skilled crew plans a major Las Vegas casino heist built on timing, trust, and deception.",
      overview:
        "Ocean's Eleven follows Danny Ocean as he gathers a skilled team to pull off a major casino heist in Las Vegas. Each member of the group brings a different talent to the plan, from deception and explosives to technology and inside knowledge.",
      cast: ["Julia Roberts", "George Clooney", "Brad Pitt", "Matt Damon"],
      characters: ["Tess Ocean", "Danny Ocean", "Rusty Ryan", "Linus Caldwell"],
      crew: ["Director: Steven Soderbergh", "Producer: Jerry Weintraub"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Pretty Woman", "Notting Hill", "Ocean's Twelve", "The Italian Job"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2001",
        "Type": "Movie",
        "Genre": "Heist Comedy"
      },
      buzz: 91,
      sources: ["https://en.wikipedia.org/wiki/Ocean%27s_Eleven"]
    },

    {
      name: "The Equalizer",
      job: "Movie • Action • Thriller",
      initials: "EQ",
      summary:
        "A quiet man with a hidden past uses his skills to protect people facing dangerous threats.",
      overview:
        "The Equalizer follows Robert McCall, a quiet man with a hidden past who tries to live a peaceful life. When he sees people being threatened and abused, he uses his skills to step in and protect those who cannot protect themselves.",
      cast: ["Denzel Washington", "Chloë Grace Moretz", "David Harbour", "Marton Csokas"],
      characters: ["Robert McCall", "Teri", "Masters", "Teddy"],
      crew: ["Director: Antoine Fuqua", "Based on the television series"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Training Day", "Man on Fire", "John Wick", "The Equalizer 2"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2014",
        "Type": "Movie",
        "Genre": "Action Thriller"
      },
      buzz: 90,
      sources: ["https://en.wikipedia.org/wiki/The_Equalizer_(film)"]
    },

    {
      name: "Dune: Part Two",
      job: "Movie • Science Fiction • Adventure",
      initials: "D2",
      summary:
        "Paul Atreides joins the Fremen as the struggle for Arrakis grows larger and more dangerous.",
      overview:
        "Dune: Part Two follows Paul Atreides as he joins the Fremen on Arrakis and moves deeper into the conflict over the desert planet. As Paul learns their ways and grows into a larger role, political power, prophecy, revenge, and survival become tightly connected.",
      cast: ["Zendaya", "Timothée Chalamet", "Rebecca Ferguson", "Austin Butler"],
      characters: ["Chani", "Paul Atreides", "Lady Jessica", "Feyd-Rautha"],
      crew: ["Director: Denis Villeneuve", "Music: Hans Zimmer"],
      awards: ["Awards hub placeholder", "Craft recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Dune", "Blade Runner 2049", "Arrival", "Interstellar"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2024",
        "Type": "Movie",
        "Franchise": "Dune"
      },
      buzz: 96,
      sources: ["https://en.wikipedia.org/wiki/Dune:_Part_Two"]
    }
  ];

  vedbBatch3Titles.forEach(function (title) {
    addTitleOnce(title);
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Title Expansion Story Snapshots Batch 3 installed: 10 titles.");
})();
/* =========================================================
   VEDB TITLE EXPANSION — BATCH 3 SMALL REPAIR
   Purpose:
   - Makes sure Her is searchable.
   - Refreshes Dune: Part Two as its own title page.
   - Does NOT touch startup, actors, CSS, or Full Body credits.
========================================================= */

(function () {
  if (window.vedbTitleExpansionBatch3SmallRepairV1Installed) return;
  window.vedbTitleExpansionBatch3SmallRepairV1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Batch 3 repair skipped: addTitleOnce is not available.");
    return;
  }

  addTitleOnce({
    name: "Her",
    job: "Movie • Science Fiction • Romance • Drama",
    initials: "H",
    summary:
      "A lonely man forms a deep relationship with an advanced operating system.",
    overview:
      "Her follows Theodore Twombly, a lonely man in the near future who forms a relationship with an advanced operating system named Samantha. As their connection grows, Theodore begins to question love, companionship, technology, and what it means to be understood.",
    cast: ["Scarlett Johansson", "Joaquin Phoenix", "Amy Adams", "Rooney Mara"],
    characters: ["Samantha", "Theodore Twombly", "Amy", "Catherine"],
    crew: ["Director: Spike Jonze", "Writer: Spike Jonze"],
    awards: ["Awards hub placeholder", "Screenplay recognition placeholder"],
    reviews: ["Review hub placeholder"],
    boxOffice: ["Box office data placeholder"],
    trivia: ["Trivia placeholder — verify before publishing."],
    videos: ["Official trailer placeholder"],
    similar: [
      "Lost in Translation",
      "Marriage Story",
      "Eternal Sunshine of the Spotless Mind",
      "Ex Machina"
    ],
    whereWatch: ["Where-to-watch links can be added later."],
    facts: {
      "Release Year": "2013",
      "Type": "Movie",
      "Genre": "Science Fiction Romance"
    },
    buzz: 88,
    sources: ["https://en.wikipedia.org/wiki/Her_(film)"]
  });

  addTitleOnce({
    name: "Dune: Part Two",
    job: "Movie • Science Fiction • Adventure",
    initials: "D2",
    summary:
      "Paul Atreides joins the Fremen as the struggle for Arrakis grows larger and more dangerous.",
    overview:
      "Dune: Part Two follows Paul Atreides as he joins the Fremen on Arrakis and moves deeper into the conflict over the desert planet. As Paul learns their ways and grows into a larger role, political power, prophecy, revenge, and survival become tightly connected.",
    cast: ["Zendaya", "Timothée Chalamet", "Rebecca Ferguson", "Austin Butler"],
    characters: ["Chani", "Paul Atreides", "Lady Jessica", "Feyd-Rautha"],
    crew: ["Director: Denis Villeneuve", "Music: Hans Zimmer"],
    awards: ["Awards hub placeholder", "Craft recognition placeholder"],
    reviews: ["Review hub placeholder"],
    boxOffice: ["Box office data placeholder"],
    trivia: ["Trivia placeholder — verify before publishing."],
    videos: ["Official trailer placeholder"],
    similar: ["Dune", "Blade Runner 2049", "Arrival", "Interstellar"],
    whereWatch: ["Where-to-watch links can be added later."],
    facts: {
      "Release Year": "2024",
      "Type": "Movie",
      "Franchise": "Dune"
    },
    buzz: 96,
    sources: ["https://en.wikipedia.org/wiki/Dune:_Part_Two"]
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Batch 3 small repair installed: Her and Dune: Part Two.");
})();
/* =========================================================
   VEDB TITLE REPAIR — HER SEARCH FIX v1
   Purpose:
   - Forces Her into the searchable Title Sphere list.
   - Adds Her 2013 as a search-friendly alias.
   - Keeps the real title page name as Her.
   - Does NOT touch startup, actors, Story Snapshots, or Full Body credits.
========================================================= */

(function () {
  if (window.vedbHerSearchRepairV1Installed) return;
  window.vedbHerSearchRepairV1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Her search repair skipped: addTitleOnce is not available.");
    return;
  }

  const herTitleRecord = {
    name: "Her",
    job: "Movie • Science Fiction • Romance • Drama • 2013",
    initials: "H",
    summary:
      "A lonely man forms a deep relationship with an advanced operating system.",
    overview:
      "Her follows Theodore Twombly, a lonely man in the near future who forms a relationship with an advanced operating system named Samantha. As their connection grows, Theodore begins to question love, companionship, technology, and what it means to be understood.",
    cast: [
      "Scarlett Johansson",
      "Joaquin Phoenix",
      "Amy Adams",
      "Rooney Mara"
    ],
    characters: [
      "Samantha",
      "Theodore Twombly",
      "Amy",
      "Catherine"
    ],
    crew: [
      "Director: Spike Jonze",
      "Writer: Spike Jonze"
    ],
    awards: [
      "Awards hub placeholder",
      "Screenplay recognition placeholder"
    ],
    reviews: [
      "Review hub placeholder"
    ],
    boxOffice: [
      "Box office data placeholder"
    ],
    trivia: [
      "Trivia placeholder — verify before publishing."
    ],
    videos: [
      "Official trailer placeholder"
    ],
    similar: [
      "Lost in Translation",
      "Marriage Story",
      "Eternal Sunshine of the Spotless Mind",
      "Ex Machina"
    ],
    whereWatch: [
      "Where-to-watch links can be added later."
    ],
    facts: {
      "Release Year": "2013",
      "Type": "Movie",
      "Genre": "Science Fiction Romance",
      "Search Alias": "Her 2013"
    },
    buzz: 88,
    sources: [
      "https://en.wikipedia.org/wiki/Her_(film)"
    ]
  };

  addTitleOnce(herTitleRecord);

  /*
    Extra safety:
    If Her somehow did not land in allItems,
    force it into the search list directly.
  */
  if (
    typeof titles !== "undefined" &&
    Array.isArray(titles) &&
    typeof allItems !== "undefined" &&
    Array.isArray(allItems)
  ) {
    const herInTitles = titles.find(function (item) {
      return item && item.mode === "title" && item.name === "Her";
    });

    if (herInTitles) {
      const herAlreadyInSearch = allItems.some(function (item) {
        return item && item.mode === "title" && item.name === "Her";
      });

      if (!herAlreadyInSearch) {
        allItems.push(herInTitles);
      }
    }
  }

  /*
    Search-friendly alias:
    This lets the user type "Her 2013".
    It opens as its own title record, but uses the same Story Snapshot.
  */
  addTitleOnce({
    ...herTitleRecord,
    name: "Her 2013",
    initials: "H13",
    summary:
      "Search alias for Her, the 2013 science fiction romance drama.",
    overview:
      "Her follows Theodore Twombly, a lonely man in the near future who forms a relationship with an advanced operating system named Samantha. As their connection grows, Theodore begins to question love, companionship, technology, and what it means to be understood.",
    facts: {
      "Release Year": "2013",
      "Type": "Movie",
      "Genre": "Science Fiction Romance",
      "Main Title": "Her"
    }
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Her search repair installed.");
})();
/* =========================================================
   VEDB TITLE EXPANSION — STORY SNAPSHOTS BATCH 4
   Purpose:
   - Adds Batch 4 titles as real searchable Title Spheres.
   - Lets storySnapshots.js attach plot-first Story Snapshots.
   - Keeps script.js from getting bloated.
   - Does NOT touch startup, actors, CSS, Full Body credits, or audit tools.

   Batch 4 titles:
   1. The Greatest Showman
   2. Malcolm & Marie
   3. Space Jam: A New Legacy
   4. Glory
   5. Philadelphia
   6. Remember the Titans
   7. Man on Fire
   8. American Gangster
   9. Flight
   10. Kramer vs. Kramer
========================================================= */

(function () {
  if (window.vedbTitleExpansionStoryBatch4V1Installed) return;
  window.vedbTitleExpansionStoryBatch4V1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Batch 4 title expansion skipped: addTitleOnce is not available yet.");
    return;
  }

  const vedbBatch4Titles = [
    {
      mode: "title",
      name: "The Greatest Showman",
      job: "Movie • Musical • Drama",
      initials: "GS",
      summary:
        "A musical drama about P. T. Barnum building a new kind of live entertainment show.",
      overview:
        "The Greatest Showman follows P. T. Barnum as he builds a new kind of live entertainment show around performers who have been pushed aside or overlooked. As the show grows, Barnum chases success, fame, and acceptance while the people around him search for belonging and respect.",
      cast: ["Zendaya", "Hugh Jackman", "Zac Efron", "Michelle Williams"],
      characters: ["Anne Wheeler", "P. T. Barnum", "Phillip Carlyle", "Charity Barnum"],
      crew: ["Director: Michael Gracey", "Music: Benj Pasek and Justin Paul"],
      awards: ["Awards hub placeholder", "Music recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["La La Land", "Mamma Mia!", "A Star Is Born", "Moulin Rouge!"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2017",
        "Type": "Movie",
        "Genre": "Musical Drama"
      },
      buzz: 90,
      sources: ["https://en.wikipedia.org/wiki/The_Greatest_Showman"]
    },

    {
      mode: "title",
      name: "Malcolm & Marie",
      job: "Movie • Drama",
      initials: "MM",
      summary:
        "A filmmaker and his partner return home from a premiere and confront their relationship.",
      overview:
        "Malcolm & Marie follows a filmmaker and his partner after they return home from a movie premiere. What begins as a private night together turns into a long conversation about love, credit, resentment, ambition, and emotional honesty.",
      cast: ["Zendaya", "John David Washington"],
      characters: ["Marie Jones", "Malcolm Elliott"],
      crew: ["Director: Sam Levinson", "Writer: Sam Levinson"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Streaming release data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Marriage Story", "Euphoria", "Challengers", "A Star Is Born"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2021",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 82,
      sources: ["https://en.wikipedia.org/wiki/Malcolm_%26_Marie"]
    },

    {
      mode: "title",
      name: "Space Jam: A New Legacy",
      job: "Movie • Sports • Comedy • Animation",
      initials: "SJ",
      summary:
        "LeBron James teams with the Looney Tunes inside a digital world for a high-stakes basketball game.",
      overview:
        "Space Jam: A New Legacy follows basketball star LeBron James as he is pulled into a digital world with his son. To escape, he must team up with Bugs Bunny and the Looney Tunes for a high-stakes basketball game.",
      cast: ["Zendaya", "LeBron James", "Don Cheadle", "Cedric Joe"],
      characters: ["Lola Bunny", "LeBron James", "Al-G Rhythm", "Dom James"],
      crew: ["Director: Malcolm D. Lee", "Producer: Warner Bros. Pictures"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Space Jam", "The Greatest Showman", "Spider-Man: Homecoming", "Uncharted"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2021",
        "Type": "Movie",
        "Genre": "Sports Comedy"
      },
      buzz: 84,
      sources: ["https://en.wikipedia.org/wiki/Space_Jam:_A_New_Legacy"]
    },

    {
      mode: "title",
      name: "Glory",
      job: "Movie • Historical Drama • War",
      initials: "GL",
      summary:
        "A Civil War drama about the 54th Massachusetts Infantry Regiment and its fight for dignity and recognition.",
      overview:
        "Glory follows the 54th Massachusetts Infantry Regiment, one of the first Black regiments to fight for the Union during the American Civil War. The story follows the soldiers and their commander as they train, face racism, and prepare for battle.",
      cast: ["Denzel Washington", "Matthew Broderick", "Morgan Freeman", "Cary Elwes"],
      characters: ["Private Silas Trip", "Robert Gould Shaw", "John Rawlins", "Cabot Forbes"],
      crew: ["Director: Edward Zwick", "Writer: Kevin Jarre"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Philadelphia", "Malcolm X", "Remember the Titans", "Fences"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1989",
        "Type": "Movie",
        "Genre": "Historical War Drama"
      },
      buzz: 91,
      sources: ["https://en.wikipedia.org/wiki/Glory_(1989_film)"]
    },

    {
      mode: "title",
      name: "Philadelphia",
      job: "Movie • Legal Drama",
      initials: "PH",
      summary:
        "A lawyer brings a discrimination case after he believes he was fired because he had AIDS.",
      overview:
        "Philadelphia follows Andrew Beckett, a lawyer who believes he was fired after his firm learned he had AIDS. He hires attorney Joe Miller to help him bring a discrimination case against his former employer.",
      cast: ["Denzel Washington", "Tom Hanks", "Antonio Banderas", "Jason Robards"],
      characters: ["Joe Miller", "Andrew Beckett", "Miguel Alvarez", "Charles Wheeler"],
      crew: ["Director: Jonathan Demme", "Writer: Ron Nyswaner"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Glory", "Fences", "The Help", "Kramer vs. Kramer"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1993",
        "Type": "Movie",
        "Genre": "Legal Drama"
      },
      buzz: 90,
      sources: ["https://en.wikipedia.org/wiki/Philadelphia_(film)"]
    },

    {
      mode: "title",
      name: "Remember the Titans",
      job: "Movie • Sports Drama",
      initials: "RT",
      summary:
        "A newly integrated high school football team learns to work together during a time of racial tension.",
      overview:
        "Remember the Titans follows a newly integrated high school football team in Virginia during a time of racial tension. Coach Herman Boone is brought in to lead the team as players from different backgrounds learn to work together.",
      cast: ["Denzel Washington", "Will Patton", "Wood Harris", "Ryan Hurst"],
      characters: ["Herman Boone", "Bill Yoast", "Julius Campbell", "Gerry Bertier"],
      crew: ["Director: Boaz Yakin", "Producer: Jerry Bruckheimer"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Glory", "The Blind Side", "Coach Carter", "Friday Night Lights"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2000",
        "Type": "Movie",
        "Genre": "Sports Drama"
      },
      buzz: 92,
      sources: ["https://en.wikipedia.org/wiki/Remember_the_Titans"]
    },

    {
      mode: "title",
      name: "Man on Fire",
      job: "Movie • Action • Thriller",
      initials: "MF",
      summary:
        "A former operative hired to protect a young girl is pulled into danger after forming a bond with her.",
      overview:
        "Man on Fire follows John Creasy, a former operative hired to protect a young girl named Pita in Mexico City. At first distant and guarded, Creasy slowly forms a bond with her and begins to find purpose again.",
      cast: ["Denzel Washington", "Dakota Fanning", "Christopher Walken", "Radha Mitchell"],
      characters: ["John Creasy", "Pita Ramos", "Paul Rayburn", "Lisa Ramos"],
      crew: ["Director: Tony Scott", "Based on the novel by A. J. Quinnell"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Equalizer", "Training Day", "Flight", "John Wick"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2004",
        "Type": "Movie",
        "Genre": "Action Thriller"
      },
      buzz: 88,
      sources: ["https://en.wikipedia.org/wiki/Man_on_Fire_(2004_film)"]
    },

    {
      mode: "title",
      name: "American Gangster",
      job: "Movie • Crime • Drama",
      initials: "AG",
      summary:
        "A Harlem crime figure builds a powerful drug operation while a detective investigates him.",
      overview:
        "American Gangster follows Frank Lucas, a Harlem crime figure who builds a powerful drug operation, and Richie Roberts, the detective investigating him. The movie moves between organized crime, police work, corruption, and ambition as both men rise in their own worlds.",
      cast: ["Denzel Washington", "Russell Crowe", "Chiwetel Ejiofor", "Josh Brolin"],
      characters: ["Frank Lucas", "Richie Roberts", "Huey Lucas", "Detective Trupo"],
      crew: ["Director: Ridley Scott", "Writer: Steven Zaillian"],
      awards: ["Awards hub placeholder", "Crime drama recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Training Day", "The Wolf of Wall Street", "Goodfellas", "The Departed"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2007",
        "Type": "Movie",
        "Genre": "Crime Drama"
      },
      buzz: 91,
      sources: ["https://en.wikipedia.org/wiki/American_Gangster_(film)"]
    },

    {
      mode: "title",
      name: "Flight",
      job: "Movie • Drama",
      initials: "FL",
      summary:
        "An airline pilot saves lives during a crash, then faces investigation and personal truth.",
      overview:
        "Flight follows Whip Whitaker, an airline pilot who saves many lives during a terrifying plane emergency. After the crash, investigators begin looking closely at what happened before the flight and at Whip’s personal life.",
      cast: ["Denzel Washington", "Don Cheadle", "Kelly Reilly", "John Goodman"],
      characters: ["Whip Whitaker", "Hugh Lang", "Nicole Maggen", "Harling Mays"],
      crew: ["Director: Robert Zemeckis", "Writer: John Gatins"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Philadelphia", "Man on Fire", "Training Day", "Sully"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2012",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 89,
      sources: ["https://en.wikipedia.org/wiki/Flight_(2012_film)"]
    },

    {
      mode: "title",
      name: "Kramer vs. Kramer",
      job: "Movie • Drama",
      initials: "KK",
      summary:
        "A father learns to care for his young son after his wife leaves, leading to a custody conflict.",
      overview:
        "Kramer vs. Kramer follows Ted Kramer, a father whose life changes when his wife Joanna leaves and he must suddenly become the primary parent to their young son. As Ted learns how to care for his child, both parents are forced to confront what family, responsibility, and love mean to them.",
      cast: ["Meryl Streep", "Dustin Hoffman", "Justin Henry", "Jane Alexander"],
      characters: ["Joanna Kramer", "Ted Kramer", "Billy Kramer", "Margaret Phelps"],
      crew: ["Director: Robert Benton", "Based on the novel by Avery Corman"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Marriage Story", "Philadelphia", "Sophie's Choice", "The Iron Lady"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1979",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 90,
      sources: ["https://en.wikipedia.org/wiki/Kramer_vs._Kramer"]
    }
  ];

  vedbBatch4Titles.forEach(function (title) {
    addTitleOnce(title);
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Title Expansion Story Snapshots Batch 4 installed: 10 titles.");
})();
/* =========================================================
   VEDB TITLE EXPANSION — STORY SNAPSHOTS BATCH 5
   Purpose:
   - Adds Batch 5 titles as real searchable Title Spheres.
   - Lets storySnapshots.js attach plot-first Story Snapshots.
   - Keeps script.js from getting bloated.
   - Does NOT touch startup, actors, CSS, Full Body credits, or audit tools.

   Batch 5 titles:
   1. The Book of Eli
   2. John Q.
   3. The Hurricane
   4. Roman J. Israel, Esq.
   5. The Deer Hunter
   6. Out of Africa
   7. The Bridges of Madison County
   8. The Hours
   9. Doubt
   10. Julie & Julia
========================================================= */

(function () {
  if (window.vedbTitleExpansionStoryBatch5V1Installed) return;
  window.vedbTitleExpansionStoryBatch5V1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Batch 5 title expansion skipped: addTitleOnce is not available yet.");
    return;
  }

  const vedbBatch5Titles = [
    {
      mode: "title",
      name: "The Book of Eli",
      job: "Movie • Post-Apocalyptic • Action • Drama",
      initials: "BE",
      summary:
        "A lone traveler crosses a dangerous broken America while protecting a powerful book.",
      overview:
        "The Book of Eli follows Eli, a lone traveler moving across a dangerous post-apocalyptic America. He carries a book that he believes must be protected and delivered, while others want it for their own power.",
      cast: ["Denzel Washington", "Gary Oldman", "Mila Kunis", "Jennifer Beals"],
      characters: ["Eli", "Carnegie", "Solara", "Claudia"],
      crew: ["Directors: Albert Hughes and Allen Hughes", "Writer: Gary Whitta"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Equalizer", "Man on Fire", "I Am Legend", "Mad Max: Fury Road"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2010",
        "Type": "Movie",
        "Genre": "Post-Apocalyptic Action"
      },
      buzz: 87,
      sources: ["https://en.wikipedia.org/wiki/The_Book_of_Eli"]
    },

    {
      mode: "title",
      name: "John Q.",
      job: "Movie • Drama • Thriller",
      initials: "JQ",
      summary:
        "A father becomes desperate when his son needs a life-saving heart transplant.",
      overview:
        "John Q. follows John Quincy Archibald, a father whose young son needs a life-saving heart transplant. When money, insurance, and hospital rules block the surgery, John becomes desperate to save his child.",
      cast: ["Denzel Washington", "James Woods", "Anne Heche", "Robert Duvall"],
      characters: ["John Quincy Archibald", "Dr. Turner", "Rebecca Payne", "Lt. Grimes"],
      crew: ["Director: Nick Cassavetes", "Writer: James Kearns"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Philadelphia", "Flight", "Roman J. Israel, Esq.", "The Hurricane"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2002",
        "Type": "Movie",
        "Genre": "Drama Thriller"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/John_Q."]
    },

    {
      mode: "title",
      name: "The Hurricane",
      job: "Movie • Biography • Sports Drama",
      initials: "HU",
      summary:
        "A boxer fights to challenge a conviction that changed his life and career.",
      overview:
        "The Hurricane follows Rubin Carter, a boxer whose life and career are changed after he is convicted of a crime he says he did not commit. While he spends years fighting from prison, people outside begin working to understand his case and help him seek justice.",
      cast: ["Denzel Washington", "Vicellous Shannon", "Deborah Kara Unger", "Liev Schreiber"],
      characters: ["Rubin Carter", "Lesra Martin", "Lisa Peters", "Sam Chaiton"],
      crew: ["Director: Norman Jewison", "Based on real events"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Glory", "Philadelphia", "Malcolm X", "The Fighter"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1999",
        "Type": "Movie",
        "Genre": "Biographical Sports Drama"
      },
      buzz: 88,
      sources: ["https://en.wikipedia.org/wiki/The_Hurricane_(1999_film)"]
    },

    {
      mode: "title",
      name: "Roman J. Israel, Esq.",
      job: "Movie • Legal Drama",
      initials: "RI",
      summary:
        "An idealistic defense attorney is pushed into a legal world that challenges his beliefs.",
      overview:
        "Roman J. Israel, Esq. follows Roman Israel, a defense attorney with strong ideals and an unusual way of working. After a major change at his small law office, Roman is pushed into a different legal world where money, pressure, and compromise challenge his beliefs.",
      cast: ["Denzel Washington", "Colin Farrell", "Carmen Ejogo"],
      characters: ["Roman J. Israel", "George Pierce", "Maya Alston"],
      crew: ["Director: Dan Gilroy", "Writer: Dan Gilroy"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Philadelphia", "Flight", "John Q.", "The Equalizer"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2017",
        "Type": "Movie",
        "Genre": "Legal Drama"
      },
      buzz: 83,
      sources: ["https://en.wikipedia.org/wiki/Roman_J._Israel,_Esq."]
    },

    {
      mode: "title",
      name: "The Deer Hunter",
      job: "Movie • War Drama",
      initials: "DH",
      summary:
        "Friends from a steel town are changed by the Vietnam War and its aftermath.",
      overview:
        "The Deer Hunter follows a group of friends from a Pennsylvania steel town whose lives are changed by the Vietnam War. The story moves from home life and friendship into the trauma of war and its aftermath.",
      cast: ["Meryl Streep", "Robert De Niro", "Christopher Walken", "John Savage"],
      characters: ["Linda", "Michael Vronsky", "Nick Chevotarevich", "Steven Pushkov"],
      crew: ["Director: Michael Cimino", "Writer: Deric Washburn"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Out of Africa", "Kramer vs. Kramer", "Platoon", "Apocalypse Now"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1978",
        "Type": "Movie",
        "Genre": "War Drama"
      },
      buzz: 92,
      sources: ["https://en.wikipedia.org/wiki/The_Deer_Hunter"]
    },

    {
      mode: "title",
      name: "Out of Africa",
      job: "Movie • Biography • Romance • Drama",
      initials: "OA",
      summary:
        "A Danish woman builds a life around a coffee plantation in Kenya while facing love, loss, and change.",
      overview:
        "Out of Africa follows Karen Blixen, a Danish woman who runs a coffee plantation in Kenya and builds a complicated life far from home. Her relationships, her land, and her independence shape the story as she faces love, loss, and change.",
      cast: ["Meryl Streep", "Robert Redford", "Klaus Maria Brandauer"],
      characters: ["Karen Blixen", "Denys Finch Hatton", "Baron Bror Blixen"],
      crew: ["Director: Sydney Pollack", "Based on writings by Karen Blixen"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Bridges of Madison County", "The Deer Hunter", "The English Patient", "Sophie's Choice"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1985",
        "Type": "Movie",
        "Genre": "Romantic Drama"
      },
      buzz: 90,
      sources: ["https://en.wikipedia.org/wiki/Out_of_Africa_(film)"]
    },

    {
      mode: "title",
      name: "The Bridges of Madison County",
      job: "Movie • Romance • Drama",
      initials: "BM",
      summary:
        "A brief connection between a married woman and a traveling photographer leaves lasting emotional weight.",
      overview:
        "The Bridges of Madison County follows Francesca Johnson, a woman living a quiet family life in Iowa, whose world changes when she meets traveling photographer Robert Kincaid. Over a few days, their connection forces Francesca to think about love, duty, regret, and the life she chose.",
      cast: ["Meryl Streep", "Clint Eastwood", "Annie Corley", "Victor Slezak"],
      characters: ["Francesca Johnson", "Robert Kincaid", "Carolyn Johnson", "Michael Johnson"],
      crew: ["Director: Clint Eastwood", "Based on the novel by Robert James Waller"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Out of Africa", "Kramer vs. Kramer", "The Hours", "A Star Is Born"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1995",
        "Type": "Movie",
        "Genre": "Romantic Drama"
      },
      buzz: 88,
      sources: ["https://en.wikipedia.org/wiki/The_Bridges_of_Madison_County_(film)"]
    },

    {
      mode: "title",
      name: "The Hours",
      job: "Movie • Drama",
      initials: "TH",
      summary:
        "Three women in different time periods are connected through one novel and private emotional struggles.",
      overview:
        "The Hours follows three women in different time periods whose lives are connected through Virginia Woolf’s novel Mrs. Dalloway. Each woman faces private emotional pressure, questions about identity, and the weight of expectations.",
      cast: ["Meryl Streep", "Nicole Kidman", "Julianne Moore", "Ed Harris"],
      characters: ["Clarissa Vaughan", "Virginia Woolf", "Laura Brown", "Richard Brown"],
      crew: ["Director: Stephen Daldry", "Based on the novel by Michael Cunningham"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Doubt", "The Bridges of Madison County", "Kramer vs. Kramer", "Mrs. Dalloway"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2002",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 88,
      sources: ["https://en.wikipedia.org/wiki/The_Hours_(film)"]
    },

    {
      mode: "title",
      name: "Doubt",
      job: "Movie • Drama",
      initials: "DO",
      summary:
        "A school principal becomes suspicious of a priest and presses for answers without clear proof.",
      overview:
        "Doubt follows Sister Aloysius, a strict Catholic school principal, who becomes suspicious of Father Flynn’s relationship with a student. Without clear proof, she begins pressing for answers while others question what is true, what is fair, and what should be done.",
      cast: ["Meryl Streep", "Philip Seymour Hoffman", "Amy Adams", "Viola Davis"],
      characters: ["Sister Aloysius", "Father Flynn", "Sister James", "Mrs. Miller"],
      crew: ["Director: John Patrick Shanley", "Based on the play by John Patrick Shanley"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Hours", "Fences", "Kramer vs. Kramer", "Spotlight"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2008",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 89,
      sources: ["https://en.wikipedia.org/wiki/Doubt_(2008_film)"]
    },

    {
      mode: "title",
      name: "Julie & Julia",
      job: "Movie • Biography • Comedy • Drama",
      initials: "JJ",
      summary:
        "Two connected stories follow Julia Child discovering French cooking and Julie Powell cooking through her recipes.",
      overview:
        "Julie & Julia follows two connected stories: Julia Child discovering French cooking and Julie Powell trying to cook her way through Child’s recipes decades later. As both women face frustration, ambition, marriage, and creative purpose, food becomes a path toward identity and confidence.",
      cast: ["Meryl Streep", "Amy Adams", "Stanley Tucci", "Chris Messina"],
      characters: ["Julia Child", "Julie Powell", "Paul Child", "Eric Powell"],
      crew: ["Director: Nora Ephron", "Based on books by Julie Powell and Julia Child"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Devil Wears Prada", "The Hours", "Mamma Mia!", "Postcards from the Edge"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2009",
        "Type": "Movie",
        "Genre": "Biographical Comedy Drama"
      },
      buzz: 88,
      sources: ["https://en.wikipedia.org/wiki/Julie_%26_Julia"]
    }
  ];

  vedbBatch5Titles.forEach(function (title) {
    addTitleOnce(title);
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Title Expansion Story Snapshots Batch 5 installed: 10 titles.");
})();
/* =========================================================
   VEDB TITLE EXPANSION — STORY SNAPSHOTS BATCH 6
   Purpose:
   - Adds Batch 6 titles as real searchable Title Spheres.
   - Larger batch test: 20 titles.
   - Lets storySnapshots.js attach plot-first Story Snapshots.
   - Keeps script.js from getting bloated.

   Batch 6 titles:
   1. K.C. Undercover
   2. Cry Freedom
   3. Julia
   4. The French Lieutenant's Woman
   5. Silkwood
   6. Heartburn
   7. A Cry in the Dark
   8. Postcards from the Edge
   9. Adaptation.
   10. Into the Woods
   11. The Post
   12. Little Women
   13. Only Murders in the Building
   14. This Boy's Life
   15. What's Eating Gilbert Grape
   16. The Basketball Diaries
   17. The Quick and the Dead
   18. Total Eclipse
   19. Romeo + Juliet
   20. Marvin's Room
========================================================= */

(function () {
  if (window.vedbTitleExpansionStoryBatch6V1Installed) return;
  window.vedbTitleExpansionStoryBatch6V1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Batch 6 title expansion skipped: addTitleOnce is not available yet.");
    return;
  }

  const vedbBatch6Titles = [
    {
      mode: "title",
      name: "K.C. Undercover",
      job: "TV Series • Comedy • Action • Family",
      initials: "KC",
      summary:
        "A smart teenager discovers her family are spies and joins their secret missions.",
      overview:
        "K.C. Undercover follows K.C. Cooper, a smart high school student who discovers that her parents are spies and that she is expected to join the family business. The series follows her as she balances school, friendships, family life, and secret missions.",
      cast: ["Zendaya", "Veronica Dunne", "Kamil McFadden", "Trinitee Stokes"],
      characters: ["K.C. Cooper", "Marisa Clark", "Ernie Cooper", "Judy Cooper"],
      crew: ["Creator: Corinne Marshall", "Network: Disney Channel"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["TV series data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Shake It Up", "Frenemies", "Zapped", "Spy Kids"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2015",
        "Type": "TV Series",
        "Genre": "Family Action Comedy"
      },
      buzz: 84,
      sources: ["https://en.wikipedia.org/wiki/K.C._Undercover"]
    },

    {
      mode: "title",
      name: "Cry Freedom",
      job: "Movie • Historical Drama • Biography",
      initials: "CF",
      summary:
        "A journalist learns about Steve Biko and risks danger to tell the world what happened.",
      overview:
        "Cry Freedom follows journalist Donald Woods as he learns more about anti-apartheid activist Steve Biko and the movement against racial injustice in South Africa. After Biko’s death, Woods faces danger as he tries to tell the world what happened.",
      cast: ["Denzel Washington", "Kevin Kline", "Penelope Wilton", "Josette Simon"],
      characters: ["Steve Biko", "Donald Woods", "Wendy Woods", "Dr. Ramphele"],
      crew: ["Director: Richard Attenborough", "Based on books by Donald Woods"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Glory", "Malcolm X", "The Hurricane", "Philadelphia"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1987",
        "Type": "Movie",
        "Genre": "Historical Drama"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/Cry_Freedom"]
    },

    {
      mode: "title",
      name: "Julia",
      job: "Movie • Drama",
      initials: "JU",
      summary:
        "A writer remembers a dangerous mission tied to friendship and anti-fascist resistance.",
      overview:
        "Julia follows writer Lillian Hellman as she remembers her friendship with Julia, a woman involved in dangerous anti-fascist resistance work before World War II. Their connection pulls Lillian into a risky mission that tests loyalty, courage, and memory.",
      cast: ["Meryl Streep", "Jane Fonda", "Vanessa Redgrave", "Jason Robards"],
      characters: ["Anne Marie", "Lillian Hellman", "Julia", "Dashiell Hammett"],
      crew: ["Director: Fred Zinnemann", "Writer: Alvin Sargent"],
      awards: ["Awards hub placeholder", "Academy Award recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The French Lieutenant's Woman", "Out of Africa", "The Hours", "Silkwood"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1977",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 82,
      sources: ["https://en.wikipedia.org/wiki/Julia_(1977_film)"]
    },

    {
      mode: "title",
      name: "The French Lieutenant's Woman",
      job: "Movie • Romance • Drama",
      initials: "FLW",
      summary:
        "A Victorian romance and a modern film-set relationship mirror each other.",
      overview:
        "The French Lieutenant's Woman follows two connected stories: a Victorian-era romance being filmed and the modern actors playing those roles. As the film within the film explores forbidden attraction and social judgment, the actors’ own relationship begins to blur with the characters they portray.",
      cast: ["Meryl Streep", "Jeremy Irons", "Hilton McRae", "Emily Morgan"],
      characters: ["Sarah Woodruff / Anna", "Charles Smithson / Mike", "Sam", "Mary"],
      crew: ["Director: Karel Reisz", "Based on the novel by John Fowles"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Out of Africa", "The Bridges of Madison County", "Julia", "The Hours"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1981",
        "Type": "Movie",
        "Genre": "Romantic Drama"
      },
      buzz: 84,
      sources: ["https://en.wikipedia.org/wiki/The_French_Lieutenant%27s_Woman_(film)"]
    },

    {
      mode: "title",
      name: "Silkwood",
      job: "Movie • Biography • Drama",
      initials: "SW",
      summary:
        "A nuclear facility worker raises safety concerns and faces growing pressure.",
      overview:
        "Silkwood follows Karen Silkwood, a worker at a nuclear facility who becomes concerned about safety, contamination, and the way employees are treated. As she starts asking questions and pushing for accountability, the pressure around her grows.",
      cast: ["Meryl Streep", "Kurt Russell", "Cher", "Craig T. Nelson"],
      characters: ["Karen Silkwood", "Drew Stephens", "Dolly Pelliker", "Winston"],
      crew: ["Director: Mike Nichols", "Writers: Nora Ephron and Alice Arlen"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Post", "Erin Brockovich", "A Cry in the Dark", "Philadelphia"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1983",
        "Type": "Movie",
        "Genre": "Biographical Drama"
      },
      buzz: 87,
      sources: ["https://en.wikipedia.org/wiki/Silkwood"]
    },

    {
      mode: "title",
      name: "Heartburn",
      job: "Movie • Comedy • Drama",
      initials: "HB",
      summary:
        "A marriage is tested by disappointment, betrayal, family life, and heartbreak.",
      overview:
        "Heartburn follows Rachel and Mark, a couple whose marriage is tested by disappointment, betrayal, and the difficult realities behind romance. The story follows Rachel as she tries to balance love, family, motherhood, and her own sense of self.",
      cast: ["Meryl Streep", "Jack Nicholson", "Jeff Daniels", "Maureen Stapleton"],
      characters: ["Rachel Samstat", "Mark Forman", "Richard", "Vera"],
      crew: ["Director: Mike Nichols", "Writer: Nora Ephron"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Kramer vs. Kramer", "Postcards from the Edge", "Julie & Julia", "Marriage Story"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1986",
        "Type": "Movie",
        "Genre": "Comedy Drama"
      },
      buzz: 82,
      sources: ["https://en.wikipedia.org/wiki/Heartburn_(film)"]
    },

    {
      mode: "title",
      name: "A Cry in the Dark",
      job: "Movie • Drama",
      initials: "CD",
      summary:
        "A family tragedy becomes a public spectacle shaped by suspicion and media pressure.",
      overview:
        "A Cry in the Dark follows Lindy and Michael Chamberlain after their baby daughter disappears during a family trip in Australia. As the tragedy becomes a public spectacle, suspicion and media pressure grow around the family.",
      cast: ["Meryl Streep", "Sam Neill", "Dale Reeves", "David Hoflin"],
      characters: ["Lindy Chamberlain", "Michael Chamberlain", "Aidan", "Older Aidan"],
      crew: ["Director: Fred Schepisi", "Based on real events"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Silkwood", "The Post", "Doubt", "The Hurricane"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1988",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 85,
      sources: ["https://en.wikipedia.org/wiki/A_Cry_in_the_Dark"]
    },

    {
      mode: "title",
      name: "Postcards from the Edge",
      job: "Movie • Comedy • Drama",
      initials: "PE",
      summary:
        "An actress rebuilds her career and life while facing a complicated relationship with her famous mother.",
      overview:
        "Postcards from the Edge follows Suzanne Vale, an actress trying to rebuild her life and career after a crisis. As she returns to work, she also has to deal with her complicated relationship with her famous mother.",
      cast: ["Meryl Streep", "Shirley MacLaine", "Dennis Quaid", "Gene Hackman"],
      characters: ["Suzanne Vale", "Doris Mann", "Jack Faulkner", "Lowell Kolchek"],
      crew: ["Director: Mike Nichols", "Writer: Carrie Fisher"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Heartburn", "Julie & Julia", "The Devil Wears Prada", "A Star Is Born"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1990",
        "Type": "Movie",
        "Genre": "Comedy Drama"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/Postcards_from_the_Edge_(film)"]
    },

    {
      mode: "title",
      name: "Adaptation.",
      job: "Movie • Comedy • Drama",
      initials: "AD",
      summary:
        "A screenwriter struggles to adapt a nonfiction book as reality, identity, and Hollywood pressure twist together.",
      overview:
        "Adaptation. follows screenwriter Charlie Kaufman as he struggles to adapt a nonfiction book into a movie. His creative block, insecurity, and strange connection to the story begin to twist the film into something unexpected.",
      cast: ["Meryl Streep", "Nicolas Cage", "Chris Cooper", "Tilda Swinton"],
      characters: ["Susan Orlean", "Charlie Kaufman / Donald Kaufman", "John Laroche", "Valerie Thomas"],
      crew: ["Director: Spike Jonze", "Writer: Charlie Kaufman"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Being John Malkovich", "The Hours", "Postcards from the Edge", "Birdman"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2002",
        "Type": "Movie",
        "Genre": "Comedy Drama"
      },
      buzz: 89,
      sources: ["https://en.wikipedia.org/wiki/Adaptation_(film)"]
    },

    {
      mode: "title",
      name: "Into the Woods",
      job: "Movie • Musical • Fantasy",
      initials: "IW",
      summary:
        "Fairy-tale characters chase their wishes in a magical forest and face the consequences.",
      overview:
        "Into the Woods follows familiar fairy-tale characters whose wishes bring them together in a dark and magical forest. As they chase what they want, they discover that getting a wish can create new problems and consequences.",
      cast: ["Meryl Streep", "Emily Blunt", "James Corden", "Anna Kendrick"],
      characters: ["The Witch", "Baker's Wife", "The Baker", "Cinderella"],
      crew: ["Director: Rob Marshall", "Music and lyrics: Stephen Sondheim"],
      awards: ["Awards hub placeholder", "Musical recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Mamma Mia!", "The Greatest Showman", "Little Women", "Enchanted"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2014",
        "Type": "Movie",
        "Genre": "Musical Fantasy"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/Into_the_Woods_(film)"]
    },

    {
      mode: "title",
      name: "The Post",
      job: "Movie • Historical Drama • Journalism",
      initials: "TP",
      summary:
        "The Washington Post weighs whether to publish the Pentagon Papers under legal and political pressure.",
      overview:
        "The Post follows the Washington Post as its leaders decide whether to publish the Pentagon Papers despite legal and political pressure. Publisher Katharine Graham and editor Ben Bradlee must weigh risk, responsibility, and the role of a free press.",
      cast: ["Meryl Streep", "Tom Hanks", "Sarah Paulson", "Bob Odenkirk"],
      characters: ["Katharine Graham", "Ben Bradlee", "Tony Bradlee", "Ben Bagdikian"],
      crew: ["Director: Steven Spielberg", "Writers: Liz Hannah and Josh Singer"],
      awards: ["Awards hub placeholder", "Journalism drama recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["All the President's Men", "Spotlight", "Silkwood", "A Cry in the Dark"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2017",
        "Type": "Movie",
        "Genre": "Historical Drama"
      },
      buzz: 89,
      sources: ["https://en.wikipedia.org/wiki/The_Post_(film)"]
    },

    {
      mode: "title",
      name: "Little Women",
      job: "Movie • Period Drama",
      initials: "LW",
      summary:
        "The March sisters grow up, chase dreams, and define their own lives.",
      overview:
        "Little Women follows the March sisters as they grow up, chase dreams, face hardship, and define what kind of lives they want. The story centers on family, creativity, love, independence, and the different paths each sister takes.",
      cast: ["Meryl Streep", "Saoirse Ronan", "Emma Watson", "Florence Pugh"],
      characters: ["Aunt March", "Jo March", "Meg March", "Amy March"],
      crew: ["Director: Greta Gerwig", "Based on the novel by Louisa May Alcott"],
      awards: ["Awards hub placeholder", "Costume and acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Pride & Prejudice", "The Hours", "Into the Woods", "The Bridges of Madison County"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2019",
        "Type": "Movie",
        "Genre": "Period Drama"
      },
      buzz: 91,
      sources: ["https://en.wikipedia.org/wiki/Little_Women_(2019_film)"]
    },

    {
      mode: "title",
      name: "Only Murders in the Building",
      job: "TV Series • Mystery • Comedy",
      initials: "OM",
      summary:
        "Three neighbors start a true-crime podcast after a suspicious death in their apartment building.",
      overview:
        "Only Murders in the Building follows three neighbors who become connected by their love of true crime and a suspicious death in their apartment building. As they start recording a podcast, they uncover secrets about the building and each other.",
      cast: ["Meryl Streep", "Steve Martin", "Martin Short", "Selena Gomez"],
      characters: ["Loretta Durkin", "Charles-Haden Savage", "Oliver Putnam", "Mabel Mora"],
      crew: ["Creators: Steve Martin and John Hoffman", "Platform: Hulu"],
      awards: ["Awards hub placeholder", "Comedy series recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["TV series data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Knives Out", "The Afterparty", "Murder Mystery", "Poker Face"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "2021",
        "Type": "TV Series",
        "Genre": "Mystery Comedy"
      },
      buzz: 92,
      sources: ["https://en.wikipedia.org/wiki/Only_Murders_in_the_Building"]
    },

    {
      mode: "title",
      name: "This Boy's Life",
      job: "Movie • Biography • Drama",
      initials: "TB",
      summary:
        "A young boy grows up under a controlling stepfather while searching for identity and escape.",
      overview:
        "This Boy's Life follows Tobias Wolff as he grows up with his mother and tries to survive life under an abusive stepfather. The story follows a young person searching for identity, safety, and a way out while adults around him fail or disappoint him.",
      cast: ["Leonardo DiCaprio", "Robert De Niro", "Ellen Barkin", "Jonah Blechman"],
      characters: ["Tobias Wolff", "Dwight Hansen", "Caroline Wolff Hansen", "Arthur Gayle"],
      crew: ["Director: Michael Caton-Jones", "Based on the memoir by Tobias Wolff"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["What's Eating Gilbert Grape", "The Basketball Diaries", "Marvin's Room", "Stand by Me"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1993",
        "Type": "Movie",
        "Genre": "Biographical Drama"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/This_Boy%27s_Life"]
    },

    {
      mode: "title",
      name: "What's Eating Gilbert Grape",
      job: "Movie • Drama",
      initials: "GG",
      summary:
        "A young man feels trapped by family responsibility and small-town life.",
      overview:
        "What's Eating Gilbert Grape follows Gilbert, a young man caring for his family in a small town while feeling trapped by responsibility. He looks after his younger brother Arnie and struggles with his own hopes for a different life.",
      cast: ["Leonardo DiCaprio", "Johnny Depp", "Juliette Lewis", "Darlene Cates"],
      characters: ["Arnie Grape", "Gilbert Grape", "Becky", "Bonnie Grape"],
      crew: ["Director: Lasse Hallström", "Based on the novel by Peter Hedges"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["This Boy's Life", "Marvin's Room", "The Basketball Diaries", "Forrest Gump"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1993",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 90,
      sources: ["https://en.wikipedia.org/wiki/What%27s_Eating_Gilbert_Grape"]
    },

    {
      mode: "title",
      name: "The Basketball Diaries",
      job: "Movie • Biography • Drama",
      initials: "BD",
      summary:
        "A talented young basketball player struggles as addiction takes hold of his life.",
      overview:
        "The Basketball Diaries follows Jim Carroll, a talented young basketball player whose life begins to spiral as addiction takes hold. What starts as teenage rebellion becomes a dangerous struggle that affects his friendships, future, and survival.",
      cast: ["Leonardo DiCaprio", "Lorraine Bracco", "Mark Wahlberg", "Juliette Lewis"],
      characters: ["Jim Carroll", "Jim's Mother", "Mickey", "Diane Moody"],
      crew: ["Director: Scott Kalvert", "Based on writings by Jim Carroll"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["This Boy's Life", "What's Eating Gilbert Grape", "Trainspotting", "Requiem for a Dream"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1995",
        "Type": "Movie",
        "Genre": "Biographical Drama"
      },
      buzz: 86,
      sources: ["https://en.wikipedia.org/wiki/The_Basketball_Diaries_(film)"]
    },

    {
      mode: "title",
      name: "The Quick and the Dead",
      job: "Movie • Western • Action",
      initials: "QD",
      summary:
        "A mysterious gunslinger enters a deadly quick-draw tournament in a violent frontier town.",
      overview:
        "The Quick and the Dead follows a mysterious gunslinger who enters a deadly quick-draw tournament in a violent frontier town. As the contest moves forward, old secrets and revenge come to the surface.",
      cast: ["Leonardo DiCaprio", "Sharon Stone", "Gene Hackman", "Russell Crowe"],
      characters: ["Fee Herod", "Ellen", "John Herod", "Cort"],
      crew: ["Director: Sam Raimi", "Writer: Simon Moore"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Django Unchained", "The Revenant", "Once Upon a Time in Hollywood", "Unforgiven"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1995",
        "Type": "Movie",
        "Genre": "Western"
      },
      buzz: 84,
      sources: ["https://en.wikipedia.org/wiki/The_Quick_and_the_Dead_(1995_film)"]
    },

    {
      mode: "title",
      name: "Total Eclipse",
      job: "Movie • Biography • Drama",
      initials: "TE",
      summary:
        "Two poets enter an intense relationship tied to art, obsession, and self-destruction.",
      overview:
        "Total Eclipse follows the intense and destructive relationship between poets Arthur Rimbaud and Paul Verlaine. Their connection becomes tied to art, obsession, jealousy, rebellion, and emotional chaos.",
      cast: ["Leonardo DiCaprio", "David Thewlis", "Romane Bohringer", "Dominique Blanc"],
      characters: ["Arthur Rimbaud", "Paul Verlaine", "Mathilde Maute", "Isabelle Rimbaud"],
      crew: ["Director: Agnieszka Holland", "Writer: Christopher Hampton"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Romeo + Juliet", "The Basketball Diaries", "Marvin's Room", "Bright Star"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1995",
        "Type": "Movie",
        "Genre": "Biographical Drama"
      },
      buzz: 82,
      sources: ["https://en.wikipedia.org/wiki/Total_Eclipse_(film)"]
    },

    {
      mode: "title",
      name: "Romeo + Juliet",
      job: "Movie • Romance • Drama",
      initials: "RJ",
      summary:
        "Two young lovers from rival families fall in love inside a violent modernized Verona.",
      overview:
        "Romeo + Juliet follows two young lovers from rival families whose relationship grows in a violent, modernized version of Verona. Their love becomes caught between family loyalty, impulsive choices, and a feud that keeps escalating.",
      cast: ["Leonardo DiCaprio", "Claire Danes", "John Leguizamo", "Harold Perrineau"],
      characters: ["Romeo", "Juliet", "Tybalt", "Mercutio"],
      crew: ["Director: Baz Luhrmann", "Based on the play by William Shakespeare"],
      awards: ["Awards hub placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["Titanic", "Total Eclipse", "La La Land", "West Side Story"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1996",
        "Type": "Movie",
        "Genre": "Romantic Drama"
      },
      buzz: 91,
      sources: ["https://en.wikipedia.org/wiki/Romeo_%2B_Juliet"]
    },

    {
      mode: "title",
      name: "Marvin's Room",
      job: "Movie • Drama",
      initials: "MR",
      summary:
        "Two estranged sisters reconnect through illness, caregiving, and family responsibility.",
      overview:
        "Marvin's Room follows two estranged sisters who are brought back together by illness and family responsibility. As they reconnect, old wounds and different life choices come forward.",
      cast: ["Leonardo DiCaprio", "Meryl Streep", "Diane Keaton", "Robert De Niro"],
      characters: ["Hank", "Lee", "Bessie", "Dr. Wally"],
      crew: ["Director: Jerry Zaks", "Based on the play by Scott McPherson"],
      awards: ["Awards hub placeholder", "Acting recognition placeholder"],
      reviews: ["Review hub placeholder"],
      boxOffice: ["Box office data placeholder"],
      trivia: ["Trivia placeholder — verify before publishing."],
      videos: ["Official trailer placeholder"],
      similar: ["The Hours", "Kramer vs. Kramer", "This Boy's Life", "What's Eating Gilbert Grape"],
      whereWatch: ["Where-to-watch links can be added later."],
      facts: {
        "Release Year": "1996",
        "Type": "Movie",
        "Genre": "Drama"
      },
      buzz: 85,
      sources: ["https://en.wikipedia.org/wiki/Marvin%27s_Room_(film)"]
    }
  ];

  vedbBatch6Titles.forEach(function (title) {
    addTitleOnce(title);
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Title Expansion Story Snapshots Batch 6 installed: 20 titles.");
})();
/* =========================================================
   VEDB TOP CAST + CHARACTER EXPANSION v1
   Purpose:
   - Expands important Title Sphere pages from about 4 cast members
     to about 8 main cast/character pairs.
   - Works with the Cast + Character Pair Display Fix.
   - Does NOT create new titles.
   - Does NOT touch search, startup, actors, Story Snapshots, Full Body credits, or audit tools.

   Titles updated:
   1. Dune
   2. Iron Man
   3. Titanic
   4. Inception
   5. The Dark Knight
   6. Spider-Man: No Way Home
   7. The Devil Wears Prada
   8. The Greatest Showman
   9. Glory
   10. Romeo + Juliet
========================================================= */

(function () {
  if (window.vedbTopCastCharacterExpansionV1Installed) return;
  window.vedbTopCastCharacterExpansionV1Installed = true;

  function normalizeVEDBTitleName(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function findVEDBTitleForCastExpansion(titleName) {
    const wanted = normalizeVEDBTitleName(titleName);

    if (typeof titles !== "undefined" && Array.isArray(titles)) {
      const foundInTitles = titles.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleName(item.name) === wanted
        );
      });

      if (foundInTitles) return foundInTitles;
    }

    if (typeof allItems !== "undefined" && Array.isArray(allItems)) {
      const foundInAllItems = allItems.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleName(item.name) === wanted
        );
      });

      if (foundInAllItems) return foundInAllItems;
    }

    return null;
  }

  function updateTopCastCharacters(titleName, castList, characterList) {
    const title = findVEDBTitleForCastExpansion(titleName);

    if (!title) {
      console.warn("VEDB Top Cast Expansion skipped missing title:", titleName);
      return;
    }

    title.cast = castList.slice();
    title.characters = characterList.slice();

    title.castCharacterNote =
      "Top Cast & Characters expanded to show the actor and the character together.";

    console.log("VEDB Top Cast Expansion updated:", titleName);
  }

  updateTopCastCharacters(
    "Dune",
    [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Oscar Isaac",
      "Josh Brolin",
      "Stellan Skarsgård",
      "Dave Bautista",
      "Jason Momoa"
    ],
    [
      "Paul Atreides",
      "Chani",
      "Lady Jessica",
      "Duke Leto Atreides",
      "Gurney Halleck",
      "Baron Vladimir Harkonnen",
      "Glossu Rabban",
      "Duncan Idaho"
    ]
  );

  updateTopCastCharacters(
    "Iron Man",
    [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Terrence Howard",
      "Jeff Bridges",
      "Leslie Bibb",
      "Shaun Toub",
      "Faran Tahir",
      "Clark Gregg"
    ],
    [
      "Tony Stark / Iron Man",
      "Pepper Potts",
      "James Rhodes",
      "Obadiah Stane / Iron Monger",
      "Christine Everhart",
      "Ho Yinsen",
      "Raza",
      "Phil Coulson"
    ]
  );

  updateTopCastCharacters(
    "Titanic",
    [
      "Leonardo DiCaprio",
      "Kate Winslet",
      "Billy Zane",
      "Kathy Bates",
      "Frances Fisher",
      "Gloria Stuart",
      "Bill Paxton",
      "Bernard Hill"
    ],
    [
      "Jack Dawson",
      "Rose DeWitt Bukater",
      "Cal Hockley",
      "Molly Brown",
      "Ruth DeWitt Bukater",
      "Old Rose",
      "Brock Lovett",
      "Captain Edward Smith"
    ]
  );

  updateTopCastCharacters(
    "Inception",
    [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
      "Cillian Murphy",
      "Marion Cotillard",
      "Dileep Rao"
    ],
    [
      "Dom Cobb",
      "Arthur",
      "Ariadne",
      "Eames",
      "Saito",
      "Robert Fischer",
      "Mal",
      "Yusuf"
    ]
  );

  updateTopCastCharacters(
    "The Dark Knight",
    [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
      "Gary Oldman",
      "Morgan Freeman",
      "Eric Roberts"
    ],
    [
      "Bruce Wayne / Batman",
      "The Joker",
      "Harvey Dent / Two-Face",
      "Alfred Pennyworth",
      "Rachel Dawes",
      "James Gordon",
      "Lucius Fox",
      "Sal Maroni"
    ]
  );

  updateTopCastCharacters(
    "Spider-Man: No Way Home",
    [
      "Tom Holland",
      "Zendaya",
      "Benedict Cumberbatch",
      "Jacob Batalon",
      "Willem Dafoe",
      "Alfred Molina",
      "Jamie Foxx",
      "Marisa Tomei"
    ],
    [
      "Peter Parker / Spider-Man",
      "MJ",
      "Doctor Strange",
      "Ned Leeds",
      "Norman Osborn / Green Goblin",
      "Otto Octavius / Doctor Octopus",
      "Max Dillon / Electro",
      "May Parker"
    ]
  );

  updateTopCastCharacters(
    "The Devil Wears Prada",
    [
      "Meryl Streep",
      "Anne Hathaway",
      "Emily Blunt",
      "Stanley Tucci",
      "Simon Baker",
      "Adrian Grenier",
      "Tracie Thoms",
      "Daniel Sunjata"
    ],
    [
      "Miranda Priestly",
      "Andrea “Andy” Sachs",
      "Emily Charlton",
      "Nigel Kipling",
      "Christian Thompson",
      "Nate Cooper",
      "Lily",
      "James Holt"
    ]
  );

  updateTopCastCharacters(
    "The Greatest Showman",
    [
      "Hugh Jackman",
      "Zac Efron",
      "Michelle Williams",
      "Rebecca Ferguson",
      "Zendaya",
      "Keala Settle",
      "Sam Humphrey",
      "Yahya Abdul-Mateen II"
    ],
    [
      "P. T. Barnum",
      "Phillip Carlyle",
      "Charity Barnum",
      "Jenny Lind",
      "Anne Wheeler",
      "Lettie Lutz",
      "Charles Stratton",
      "W. D. Wheeler"
    ]
  );

  updateTopCastCharacters(
    "Glory",
    [
      "Matthew Broderick",
      "Denzel Washington",
      "Morgan Freeman",
      "Cary Elwes",
      "Andre Braugher",
      "Jihmi Kennedy",
      "Cliff DeYoung",
      "Alan North"
    ],
    [
      "Colonel Robert Gould Shaw",
      "Private Silas Trip",
      "Sergeant Major John Rawlins",
      "Major Cabot Forbes",
      "Corporal Thomas Searles",
      "Private Jupiter Sharts",
      "Colonel James Montgomery",
      "Governor John Albion Andrew"
    ]
  );

  updateTopCastCharacters(
    "Romeo + Juliet",
    [
      "Leonardo DiCaprio",
      "Claire Danes",
      "John Leguizamo",
      "Harold Perrineau",
      "Pete Postlethwaite",
      "Paul Rudd",
      "Miriam Margolyes",
      "Brian Dennehy"
    ],
    [
      "Romeo",
      "Juliet",
      "Tybalt",
      "Mercutio",
      "Father Laurence",
      "Paris",
      "The Nurse",
      "Ted Montague"
    ]
  );

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Top Cast + Character Expansion v1 installed.");
})();
/* =========================================================
   VEDB TOP CAST + CHARACTER EXPANSION v2
   Purpose:
   - Expands 20 more Title Sphere pages with actor → character pairs.
   - Works with the Cast + Character Pair Display Fix.
   - Does NOT create new titles.
   - Does NOT touch search, startup, actors, Story Snapshots, Full Body credits, or audit tools.

   Titles updated:
   1. Dune: Part Two
   2. Top Gun: Maverick
   3. The Revenant
   4. The Wolf of Wall Street
   5. The Help
   6. Malcolm X
   7. Training Day
   8. Fences
   9. Creed
   10. John Wick
   11. The Matrix
   12. Speed
   13. Everything Everywhere All at Once
   14. A Star Is Born
   15. House of Gucci
   16. Joker
   17. Batman Begins
   18. Interstellar
   19. The Social Network
   20. Barbie
========================================================= */

(function () {
  if (window.vedbTopCastCharacterExpansionV2Installed) return;
  window.vedbTopCastCharacterExpansionV2Installed = true;

  function normalizeVEDBTitleNameV2(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function findVEDBTitleForCastExpansionV2(titleName) {
    const wanted = normalizeVEDBTitleNameV2(titleName);

    if (typeof titles !== "undefined" && Array.isArray(titles)) {
      const foundInTitles = titles.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleNameV2(item.name) === wanted
        );
      });

      if (foundInTitles) return foundInTitles;
    }

    if (typeof allItems !== "undefined" && Array.isArray(allItems)) {
      const foundInAllItems = allItems.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleNameV2(item.name) === wanted
        );
      });

      if (foundInAllItems) return foundInAllItems;
    }

    return null;
  }

  function updateTopCastCharactersV2(titleName, castList, characterList) {
    const title = findVEDBTitleForCastExpansionV2(titleName);

    if (!title) {
      console.warn("VEDB Top Cast Expansion v2 skipped missing title:", titleName);
      return;
    }

    title.cast = castList.slice();
    title.characters = characterList.slice();

    title.castCharacterNote =
      "Top Cast & Characters expanded to show the actor and the character together.";

    console.log("VEDB Top Cast Expansion v2 updated:", titleName);
  }

  updateTopCastCharactersV2(
    "Dune: Part Two",
    [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Javier Bardem",
      "Josh Brolin",
      "Austin Butler",
      "Florence Pugh",
      "Dave Bautista"
    ],
    [
      "Paul Atreides",
      "Chani",
      "Lady Jessica",
      "Stilgar",
      "Gurney Halleck",
      "Feyd-Rautha Harkonnen",
      "Princess Irulan",
      "Glossu Rabban"
    ]
  );

  updateTopCastCharactersV2(
    "Top Gun: Maverick",
    [
      "Tom Cruise",
      "Miles Teller",
      "Jennifer Connelly",
      "Jon Hamm",
      "Glen Powell",
      "Lewis Pullman",
      "Ed Harris",
      "Val Kilmer"
    ],
    [
      "Pete “Maverick” Mitchell",
      "Bradley “Rooster” Bradshaw",
      "Penny Benjamin",
      "Beau “Cyclone” Simpson",
      "Jake “Hangman” Seresin",
      "Robert “Bob” Floyd",
      "Chester “Hammer” Cain",
      "Tom “Iceman” Kazansky"
    ]
  );

  updateTopCastCharactersV2(
    "The Revenant",
    [
      "Leonardo DiCaprio",
      "Tom Hardy",
      "Domhnall Gleeson",
      "Will Poulter",
      "Forrest Goodluck",
      "Paul Anderson",
      "Kristoffer Joner",
      "Duane Howard"
    ],
    [
      "Hugh Glass",
      "John Fitzgerald",
      "Captain Andrew Henry",
      "Jim Bridger",
      "Hawk",
      "Anderson",
      "Murphy",
      "Elk Dog"
    ]
  );

  updateTopCastCharactersV2(
    "The Wolf of Wall Street",
    [
      "Leonardo DiCaprio",
      "Jonah Hill",
      "Margot Robbie",
      "Matthew McConaughey",
      "Kyle Chandler",
      "Rob Reiner",
      "Jon Favreau",
      "Jon Bernthal"
    ],
    [
      "Jordan Belfort",
      "Donnie Azoff",
      "Naomi Lapaglia",
      "Mark Hanna",
      "Patrick Denham",
      "Max Belfort",
      "Manny Riskin",
      "Brad Bodnick"
    ]
  );

  updateTopCastCharactersV2(
    "The Help",
    [
      "Viola Davis",
      "Emma Stone",
      "Octavia Spencer",
      "Bryce Dallas Howard",
      "Jessica Chastain",
      "Allison Janney",
      "Cicely Tyson",
      "Sissy Spacek"
    ],
    [
      "Aibileen Clark",
      "Eugenia “Skeeter” Phelan",
      "Minny Jackson",
      "Hilly Holbrook",
      "Celia Foote",
      "Charlotte Phelan",
      "Constantine Jefferson",
      "Missus Walters"
    ]
  );

  updateTopCastCharactersV2(
    "Malcolm X",
    [
      "Denzel Washington",
      "Angela Bassett",
      "Delroy Lindo",
      "Albert Hall",
      "Al Freeman Jr.",
      "Spike Lee",
      "Theresa Randle",
      "Kate Vernon"
    ],
    [
      "Malcolm X",
      "Betty Shabazz",
      "West Indian Archie",
      "Baines",
      "Elijah Muhammad",
      "Shorty",
      "Laura",
      "Sophia"
    ]
  );

  updateTopCastCharactersV2(
    "Training Day",
    [
      "Denzel Washington",
      "Ethan Hawke",
      "Scott Glenn",
      "Tom Berenger",
      "Harris Yulin",
      "Eva Mendes",
      "Cliff Curtis",
      "Snoop Dogg"
    ],
    [
      "Alonzo Harris",
      "Jake Hoyt",
      "Roger",
      "Stan Gursky",
      "Doug Rosselli",
      "Sara",
      "Smiley",
      "Blue"
    ]
  );

  updateTopCastCharactersV2(
    "Fences",
    [
      "Denzel Washington",
      "Viola Davis",
      "Stephen McKinley Henderson",
      "Jovan Adepo",
      "Russell Hornsby",
      "Mykelti Williamson",
      "Saniyya Sidney"
    ],
    [
      "Troy Maxson",
      "Rose Lee Maxson",
      "Jim Bono",
      "Cory Maxson",
      "Lyons Maxson",
      "Gabriel Maxson",
      "Raynell Maxson"
    ]
  );

  updateTopCastCharactersV2(
    "Creed",
    [
      "Michael B. Jordan",
      "Sylvester Stallone",
      "Tessa Thompson",
      "Phylicia Rashad",
      "Tony Bellew",
      "Graham McTavish",
      "Wood Harris",
      "Andre Ward"
    ],
    [
      "Adonis Johnson Creed",
      "Rocky Balboa",
      "Bianca Taylor",
      "Mary Anne Creed",
      "Ricky Conlan",
      "Tommy Holiday",
      "Tony “Little Duke” Evers",
      "Danny “Stuntman” Wheeler"
    ]
  );

  updateTopCastCharactersV2(
    "John Wick",
    [
      "Keanu Reeves",
      "Michael Nyqvist",
      "Alfie Allen",
      "Willem Dafoe",
      "Dean Winters",
      "Adrianne Palicki",
      "Ian McShane",
      "John Leguizamo"
    ],
    [
      "John Wick",
      "Viggo Tarasov",
      "Iosef Tarasov",
      "Marcus",
      "Avi",
      "Ms. Perkins",
      "Winston",
      "Aurelio"
    ]
  );

  updateTopCastCharactersV2(
    "The Matrix",
    [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss",
      "Hugo Weaving",
      "Joe Pantoliano",
      "Marcus Chong",
      "Gloria Foster",
      "Belinda McClory"
    ],
    [
      "Neo / Thomas Anderson",
      "Morpheus",
      "Trinity",
      "Agent Smith",
      "Cypher",
      "Tank",
      "The Oracle",
      "Switch"
    ]
  );

  updateTopCastCharactersV2(
    "Speed",
    [
      "Keanu Reeves",
      "Sandra Bullock",
      "Dennis Hopper",
      "Jeff Daniels",
      "Joe Morton",
      "Alan Ruck",
      "Glenn Plummer",
      "Beth Grant"
    ],
    [
      "Jack Traven",
      "Annie Porter",
      "Howard Payne",
      "Harry Temple",
      "Captain Mac McMahon",
      "Stephens",
      "Jaguar Owner",
      "Helen"
    ]
  );

  updateTopCastCharactersV2(
    "Everything Everywhere All at Once",
    [
      "Michelle Yeoh",
      "Stephanie Hsu",
      "Ke Huy Quan",
      "James Hong",
      "Jamie Lee Curtis",
      "Tallie Medel",
      "Jenny Slate",
      "Harry Shum Jr."
    ],
    [
      "Evelyn Quan Wang",
      "Joy Wang / Jobu Tupaki",
      "Waymond Wang",
      "Gong Gong",
      "Deirdre Beaubeirdre",
      "Becky Sregor",
      "Debbie / Dog Mom",
      "Chad"
    ]
  );

  updateTopCastCharactersV2(
    "A Star Is Born",
    [
      "Bradley Cooper",
      "Lady Gaga",
      "Sam Elliott",
      "Andrew Dice Clay",
      "Dave Chappelle",
      "Anthony Ramos",
      "Rafi Gavron",
      "Greg Grunberg"
    ],
    [
      "Jackson Maine",
      "Ally Maine",
      "Bobby Maine",
      "Lorenzo",
      "Noodles",
      "Ramon",
      "Rez Gavron",
      "Phil"
    ]
  );

  updateTopCastCharactersV2(
    "House of Gucci",
    [
      "Lady Gaga",
      "Adam Driver",
      "Jared Leto",
      "Jeremy Irons",
      "Al Pacino",
      "Salma Hayek",
      "Jack Huston",
      "Reeve Carney"
    ],
    [
      "Patrizia Reggiani",
      "Maurizio Gucci",
      "Paolo Gucci",
      "Rodolfo Gucci",
      "Aldo Gucci",
      "Pina Auriemma",
      "Domenico De Sole",
      "Tom Ford"
    ]
  );

  updateTopCastCharactersV2(
    "Joker",
    [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz",
      "Frances Conroy",
      "Brett Cullen",
      "Shea Whigham",
      "Bill Camp",
      "Glenn Fleshler"
    ],
    [
      "Arthur Fleck / Joker",
      "Murray Franklin",
      "Sophie Dumond",
      "Penny Fleck",
      "Thomas Wayne",
      "Detective Burke",
      "Detective Garrity",
      "Randall"
    ]
  );

  updateTopCastCharactersV2(
    "Batman Begins",
    [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy",
      "Morgan Freeman",
      "Ken Watanabe"
    ],
    [
      "Bruce Wayne / Batman",
      "Alfred Pennyworth",
      "Henri Ducard / Ra's al Ghul",
      "Rachel Dawes",
      "James Gordon",
      "Dr. Jonathan Crane / Scarecrow",
      "Lucius Fox",
      "Ra's al Ghul Decoy"
    ]
  );

  updateTopCastCharactersV2(
    "Interstellar",
    [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Mackenzie Foy",
      "Michael Caine",
      "Matt Damon",
      "Bill Irwin",
      "Ellen Burstyn"
    ],
    [
      "Joseph Cooper",
      "Amelia Brand",
      "Murphy Cooper",
      "Young Murphy Cooper",
      "Professor Brand",
      "Dr. Mann",
      "TARS",
      "Elderly Murphy Cooper"
    ]
  );

  updateTopCastCharactersV2(
    "The Social Network",
    [
      "Jesse Eisenberg",
      "Andrew Garfield",
      "Justin Timberlake",
      "Armie Hammer",
      "Max Minghella",
      "Brenda Song",
      "Rashida Jones",
      "Rooney Mara"
    ],
    [
      "Mark Zuckerberg",
      "Eduardo Saverin",
      "Sean Parker",
      "Cameron Winklevoss / Tyler Winklevoss",
      "Divya Narendra",
      "Christy Lee",
      "Marylin Delpy",
      "Erica Albright"
    ]
  );

  updateTopCastCharactersV2(
    "Barbie",
    [
      "Margot Robbie",
      "Ryan Gosling",
      "America Ferrera",
      "Kate McKinnon",
      "Issa Rae",
      "Rhea Perlman",
      "Will Ferrell",
      "Simu Liu"
    ],
    [
      "Barbie",
      "Ken",
      "Gloria",
      "Weird Barbie",
      "President Barbie",
      "Ruth Handler",
      "Mattel CEO",
      "Ken"
    ]
  );

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Top Cast + Character Expansion v2 installed.");
})();
/* =========================================================
   VEDB MISSING TITLE FIX — BARBIE + EEAAO v1
   Purpose:
   - Adds missing searchable Title Sphere pages for:
     1. Everything Everywhere All at Once
     2. Barbie
   - Includes Top Cast & Characters already paired.
   - Fixes issue where Top Cast Expansion v2 skipped them because
     the title pages did not exist yet.
========================================================= */

(function () {
  if (window.vedbMissingBarbieEEAAOFixV1Installed) return;
  window.vedbMissingBarbieEEAAOFixV1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Missing Barbie + EEAAO Fix skipped: addTitleOnce is not available.");
    return;
  }

  addTitleOnce({
    mode: "title",
    name: "Everything Everywhere All at Once",
    job: "Movie • Sci-Fi • Comedy • Drama • Action",
    initials: "EE",
    summary:
      "A laundromat owner is pulled into a multiverse crisis where every choice and every version of herself matters.",
    overview:
      "Everything Everywhere All at Once follows Evelyn Quan Wang, a laundromat owner whose life is overwhelmed by family stress, taxes, regret, and missed possibilities. When she discovers alternate versions of herself across the multiverse, she is pulled into a strange fight that forces her to face her family, her choices, and the meaning of her life.",
    cast: [
      "Michelle Yeoh",
      "Stephanie Hsu",
      "Ke Huy Quan",
      "James Hong",
      "Jamie Lee Curtis",
      "Tallie Medel",
      "Jenny Slate",
      "Harry Shum Jr."
    ],
    characters: [
      "Evelyn Quan Wang",
      "Joy Wang / Jobu Tupaki",
      "Waymond Wang",
      "Gong Gong",
      "Deirdre Beaubeirdre",
      "Becky Sregor",
      "Debbie / Dog Mom",
      "Chad"
    ],
    crew: [
      "Directors: Daniel Kwan and Daniel Scheinert",
      "Writers: Daniel Kwan and Daniel Scheinert",
      "Producers: Anthony Russo, Joe Russo, Jonathan Wang"
    ],
    awards: [
      "Awards hub placeholder",
      "Academy Award recognition placeholder"
    ],
    reviews: ["Review hub placeholder"],
    boxOffice: ["Box office data placeholder"],
    trivia: ["Trivia placeholder — verify before publishing."],
    videos: ["Official trailer placeholder"],
    similar: [
      "The Matrix",
      "Doctor Strange in the Multiverse of Madness",
      "Inception",
      "Eternal Sunshine of the Spotless Mind"
    ],
    whereWatch: ["Where-to-watch links can be added later."],
    facts: {
      "Release Year": "2022",
      "Type": "Movie",
      "Genre": "Sci-Fi Comedy Drama"
    },
    buzz: 94,
    sources: ["https://en.wikipedia.org/wiki/Everything_Everywhere_All_at_Once"]
  });

  addTitleOnce({
    mode: "title",
    name: "Barbie",
    job: "Movie • Comedy • Fantasy",
    initials: "BB",
    summary:
      "Barbie leaves Barbie Land and enters the real world, where identity, perfection, and self-discovery become complicated.",
    overview:
      "Barbie follows Barbie as she begins questioning her perfect life in Barbie Land and travels into the real world with Ken. The journey forces both characters to confront identity, gender roles, insecurity, and what it means to become a real person with real choices.",
    cast: [
      "Margot Robbie",
      "Ryan Gosling",
      "America Ferrera",
      "Kate McKinnon",
      "Issa Rae",
      "Rhea Perlman",
      "Will Ferrell",
      "Simu Liu"
    ],
    characters: [
      "Barbie",
      "Ken",
      "Gloria",
      "Weird Barbie",
      "President Barbie",
      "Ruth Handler",
      "Mattel CEO",
      "Ken"
    ],
    crew: [
      "Director: Greta Gerwig",
      "Writers: Greta Gerwig and Noah Baumbach",
      "Producer: Margot Robbie"
    ],
    awards: [
      "Awards hub placeholder",
      "Music and production recognition placeholder"
    ],
    reviews: ["Review hub placeholder"],
    boxOffice: ["Box office data placeholder"],
    trivia: ["Trivia placeholder — verify before publishing."],
    videos: ["Official trailer placeholder"],
    similar: [
      "The Lego Movie",
      "Enchanted",
      "The Devil Wears Prada",
      "La La Land"
    ],
    whereWatch: ["Where-to-watch links can be added later."],
    facts: {
      "Release Year": "2023",
      "Type": "Movie",
      "Genre": "Fantasy Comedy"
    },
    buzz: 95,
    sources: ["https://en.wikipedia.org/wiki/Barbie_(film)"]
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Missing Title Fix installed: Barbie + Everything Everywhere All at Once.");
})();
/* =========================================================
   VEDB TOP CAST + CHARACTER EXPANSION v3
   Purpose:
   - Expands 30 more Title Sphere pages with actor → character pairs.
   - Works with the Cast + Character Pair Display Fix.
   - Does NOT create new titles.
   - Does NOT touch search, startup, actors, Story Snapshots, Full Body credits, or audit tools.

   Titles updated:
   1. Euphoria
   2. Avengers: Endgame
   3. Black Widow
   4. Marriage Story
   5. Lost in Translation
   6. Pretty Woman
   7. Erin Brockovich
   8. Notting Hill
   9. The Woman King
   10. Ma Rainey's Black Bottom
   11. How to Get Away with Murder
   12. The Shawshank Redemption
   13. Million Dollar Baby
   14. Se7en
   15. Driving Miss Daisy
   16. Sherlock Holmes
   17. Chaplin
   18. Her
   19. Ocean's Eleven
   20. The Equalizer
   21. La La Land
   22. Oppenheimer
   23. Catch Me If You Can
   24. Django Unchained
   25. Once Upon a Time in Hollywood
   26. Pulp Fiction
   27. Kill Bill
   28. Mission: Impossible
   29. Edge of Tomorrow
   30. Jerry Maguire
========================================================= */

(function () {
  if (window.vedbTopCastCharacterExpansionV3Installed) return;
  window.vedbTopCastCharacterExpansionV3Installed = true;

  function normalizeVEDBTitleNameV3(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function findVEDBTitleForCastExpansionV3(titleName) {
    const wanted = normalizeVEDBTitleNameV3(titleName);

    if (typeof titles !== "undefined" && Array.isArray(titles)) {
      const foundInTitles = titles.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleNameV3(item.name) === wanted
        );
      });

      if (foundInTitles) return foundInTitles;
    }

    if (typeof allItems !== "undefined" && Array.isArray(allItems)) {
      const foundInAllItems = allItems.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleNameV3(item.name) === wanted
        );
      });

      if (foundInAllItems) return foundInAllItems;
    }

    return null;
  }

  function updateTopCastCharactersV3(titleName, castList, characterList) {
    const title = findVEDBTitleForCastExpansionV3(titleName);

    if (!title) {
      console.warn("VEDB Top Cast Expansion v3 skipped missing title:", titleName);
      return;
    }

    title.cast = castList.slice();
    title.characters = characterList.slice();

    title.castCharacterNote =
      "Top Cast & Characters expanded to show the actor and the character together.";

    console.log("VEDB Top Cast Expansion v3 updated:", titleName);
  }

  updateTopCastCharactersV3(
    "Euphoria",
    [
      "Zendaya",
      "Hunter Schafer",
      "Jacob Elordi",
      "Sydney Sweeney",
      "Alexa Demie",
      "Maude Apatow",
      "Angus Cloud",
      "Barbie Ferreira"
    ],
    [
      "Rue Bennett",
      "Jules Vaughn",
      "Nate Jacobs",
      "Cassie Howard",
      "Maddy Perez",
      "Lexi Howard",
      "Fezco",
      "Kat Hernandez"
    ]
  );

  updateTopCastCharactersV3(
    "Avengers: Endgame",
    [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
      "Don Cheadle",
      "Paul Rudd"
    ],
    [
      "Tony Stark / Iron Man",
      "Steve Rogers / Captain America",
      "Bruce Banner / Hulk",
      "Thor",
      "Natasha Romanoff / Black Widow",
      "Clint Barton / Hawkeye",
      "James Rhodes / War Machine",
      "Scott Lang / Ant-Man"
    ]
  );

  updateTopCastCharactersV3(
    "Black Widow",
    [
      "Scarlett Johansson",
      "Florence Pugh",
      "David Harbour",
      "Rachel Weisz",
      "Ray Winstone",
      "O-T Fagbenle",
      "Olga Kurylenko",
      "William Hurt"
    ],
    [
      "Natasha Romanoff / Black Widow",
      "Yelena Belova",
      "Alexei Shostakov / Red Guardian",
      "Melina Vostokoff",
      "Dreykov",
      "Rick Mason",
      "Antonia Dreykov / Taskmaster",
      "Thaddeus Ross"
    ]
  );

  updateTopCastCharactersV3(
    "Marriage Story",
    [
      "Scarlett Johansson",
      "Adam Driver",
      "Laura Dern",
      "Alan Alda",
      "Ray Liotta",
      "Julie Hagerty",
      "Merritt Wever",
      "Azhy Robertson"
    ],
    [
      "Nicole Barber",
      "Charlie Barber",
      "Nora Fanshaw",
      "Bert Spitz",
      "Jay Marotta",
      "Sandra",
      "Cassie",
      "Henry Barber"
    ]
  );

  updateTopCastCharactersV3(
    "Lost in Translation",
    [
      "Scarlett Johansson",
      "Bill Murray",
      "Giovanni Ribisi",
      "Anna Faris",
      "Fumihiro Hayashi",
      "Akiko Takeshita"
    ],
    [
      "Charlotte",
      "Bob Harris",
      "John",
      "Kelly",
      "Charlie Brown",
      "Ms. Kawasaki"
    ]
  );

  updateTopCastCharactersV3(
    "Pretty Woman",
    [
      "Julia Roberts",
      "Richard Gere",
      "Ralph Bellamy",
      "Jason Alexander",
      "Laura San Giacomo",
      "Hector Elizondo",
      "Alex Hyde-White",
      "Amy Yasbeck"
    ],
    [
      "Vivian Ward",
      "Edward Lewis",
      "James Morse",
      "Philip Stuckey",
      "Kit De Luca",
      "Barney Thompson",
      "David Morse",
      "Elizabeth Stuckey"
    ]
  );

  updateTopCastCharactersV3(
    "Erin Brockovich",
    [
      "Julia Roberts",
      "Albert Finney",
      "Aaron Eckhart",
      "Marg Helgenberger",
      "Cherry Jones",
      "Conchata Ferrell",
      "Tracey Walter",
      "Peter Coyote"
    ],
    [
      "Erin Brockovich",
      "Ed Masry",
      "George",
      "Donna Jensen",
      "Pamela Duncan",
      "Brenda",
      "Charles Embry",
      "Kurt Potter"
    ]
  );

  updateTopCastCharactersV3(
    "Notting Hill",
    [
      "Julia Roberts",
      "Hugh Grant",
      "Rhys Ifans",
      "Gina McKee",
      "Tim McInnerny",
      "Emma Chambers",
      "Hugh Bonneville",
      "James Dreyfus"
    ],
    [
      "Anna Scott",
      "William Thacker",
      "Spike",
      "Bella",
      "Max",
      "Honey",
      "Bernie",
      "Martin"
    ]
  );

  updateTopCastCharactersV3(
    "The Woman King",
    [
      "Viola Davis",
      "Thuso Mbedu",
      "Lashana Lynch",
      "Sheila Atim",
      "John Boyega",
      "Hero Fiennes Tiffin",
      "Jayme Lawson",
      "Adrienne Warren"
    ],
    [
      "Nanisca",
      "Nawi",
      "Izogie",
      "Amenza",
      "King Ghezo",
      "Santo Ferreira",
      "Shante",
      "Ode"
    ]
  );

  updateTopCastCharactersV3(
    "Ma Rainey's Black Bottom",
    [
      "Viola Davis",
      "Chadwick Boseman",
      "Glynn Turman",
      "Colman Domingo",
      "Michael Potts",
      "Taylour Paige",
      "Dusan Brown",
      "Jeremy Shamos"
    ],
    [
      "Ma Rainey",
      "Levee Green",
      "Toledo",
      "Cutler",
      "Slow Drag",
      "Dussie Mae",
      "Sylvester",
      "Irvin"
    ]
  );

  updateTopCastCharactersV3(
    "How to Get Away with Murder",
    [
      "Viola Davis",
      "Billy Brown",
      "Alfred Enoch",
      "Jack Falahee",
      "Aja Naomi King",
      "Matt McGorry",
      "Karla Souza",
      "Liza Weil"
    ],
    [
      "Annalise Keating",
      "Nate Lahey",
      "Wes Gibbins",
      "Connor Walsh",
      "Michaela Pratt",
      "Asher Millstone",
      "Laurel Castillo",
      "Bonnie Winterbottom"
    ]
  );

  updateTopCastCharactersV3(
    "The Shawshank Redemption",
    [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
      "Gil Bellows",
      "James Whitmore",
      "Mark Rolston"
    ],
    [
      "Andy Dufresne",
      "Ellis Boyd “Red” Redding",
      "Warden Norton",
      "Heywood",
      "Captain Hadley",
      "Tommy Williams",
      "Brooks Hatlen",
      "Bogs Diamond"
    ]
  );

  updateTopCastCharactersV3(
    "Million Dollar Baby",
    [
      "Hilary Swank",
      "Clint Eastwood",
      "Morgan Freeman",
      "Jay Baruchel",
      "Mike Colter",
      "Lucia Rijker",
      "Brían F. O'Byrne",
      "Anthony Mackie"
    ],
    [
      "Maggie Fitzgerald",
      "Frankie Dunn",
      "Eddie “Scrap-Iron” Dupris",
      "Danger Barch",
      "Big Willie Little",
      "Billie “The Blue Bear”",
      "Father Horvak",
      "Shawrelle Berry"
    ]
  );

  updateTopCastCharactersV3(
    "Se7en",
    [
      "Brad Pitt",
      "Morgan Freeman",
      "Gwyneth Paltrow",
      "Kevin Spacey",
      "R. Lee Ermey",
      "John C. McGinley",
      "Julie Araskog",
      "Richard Roundtree"
    ],
    [
      "Detective David Mills",
      "Detective William Somerset",
      "Tracy Mills",
      "John Doe",
      "Police Captain",
      "California",
      "Mrs. Gould",
      "Martin Talbot"
    ]
  );

  updateTopCastCharactersV3(
    "Driving Miss Daisy",
    [
      "Jessica Tandy",
      "Morgan Freeman",
      "Dan Aykroyd",
      "Patti LuPone",
      "Esther Rolle"
    ],
    [
      "Daisy Werthan",
      "Hoke Colburn",
      "Boolie Werthan",
      "Florine Werthan",
      "Idella"
    ]
  );

  updateTopCastCharactersV3(
    "Sherlock Holmes",
    [
      "Robert Downey Jr.",
      "Jude Law",
      "Rachel McAdams",
      "Mark Strong",
      "Eddie Marsan",
      "Kelly Reilly",
      "Geraldine James",
      "James Fox"
    ],
    [
      "Sherlock Holmes",
      "Dr. John Watson",
      "Irene Adler",
      "Lord Blackwood",
      "Inspector Lestrade",
      "Mary Morstan",
      "Mrs. Hudson",
      "Sir Thomas Rotheram"
    ]
  );

  updateTopCastCharactersV3(
    "Chaplin",
    [
      "Robert Downey Jr.",
      "Geraldine Chaplin",
      "Paul Rhys",
      "John Thaw",
      "Moira Kelly",
      "Anthony Hopkins",
      "Dan Aykroyd",
      "Kevin Kline"
    ],
    [
      "Charlie Chaplin",
      "Hannah Chaplin",
      "Sydney Chaplin",
      "Fred Karno",
      "Hetty Kelly / Oona O'Neill",
      "George Hayden",
      "Mack Sennett",
      "Douglas Fairbanks"
    ]
  );

  updateTopCastCharactersV3(
    "Her",
    [
      "Joaquin Phoenix",
      "Scarlett Johansson",
      "Amy Adams",
      "Rooney Mara",
      "Olivia Wilde",
      "Chris Pratt",
      "Matt Letscher",
      "Portia Doubleday"
    ],
    [
      "Theodore Twombly",
      "Samantha",
      "Amy",
      "Catherine",
      "Blind Date",
      "Paul",
      "Charles",
      "Isabella"
    ]
  );

  updateTopCastCharactersV3(
    "Ocean's Eleven",
    [
      "George Clooney",
      "Brad Pitt",
      "Matt Damon",
      "Julia Roberts",
      "Andy García",
      "Don Cheadle",
      "Bernie Mac",
      "Elliott Gould"
    ],
    [
      "Danny Ocean",
      "Rusty Ryan",
      "Linus Caldwell",
      "Tess Ocean",
      "Terry Benedict",
      "Basher Tarr",
      "Frank Catton",
      "Reuben Tishkoff"
    ]
  );

  updateTopCastCharactersV3(
    "The Equalizer",
    [
      "Denzel Washington",
      "Marton Csokas",
      "Chloë Grace Moretz",
      "David Harbour",
      "Haley Bennett",
      "Bill Pullman",
      "Melissa Leo",
      "Johnny Skourtis"
    ],
    [
      "Robert McCall",
      "Teddy",
      "Teri / Alina",
      "Masters",
      "Mandy",
      "Brian Plummer",
      "Susan Plummer",
      "Ralphie"
    ]
  );

  updateTopCastCharactersV3(
    "La La Land",
    [
      "Ryan Gosling",
      "Emma Stone",
      "John Legend",
      "Rosemarie DeWitt",
      "J.K. Simmons",
      "Finn Wittrock",
      "Callie Hernandez",
      "Sonoya Mizuno"
    ],
    [
      "Sebastian Wilder",
      "Mia Dolan",
      "Keith",
      "Laura Wilder",
      "Bill",
      "Greg",
      "Tracy",
      "Caitlin"
    ]
  );

  updateTopCastCharactersV3(
    "Oppenheimer",
    [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr.",
      "Florence Pugh",
      "Josh Hartnett",
      "Casey Affleck",
      "Rami Malek"
    ],
    [
      "J. Robert Oppenheimer",
      "Kitty Oppenheimer",
      "Leslie Groves",
      "Lewis Strauss",
      "Jean Tatlock",
      "Ernest Lawrence",
      "Boris Pash",
      "David Hill"
    ]
  );

  updateTopCastCharactersV3(
    "Catch Me If You Can",
    [
      "Leonardo DiCaprio",
      "Tom Hanks",
      "Christopher Walken",
      "Martin Sheen",
      "Nathalie Baye",
      "Amy Adams",
      "James Brolin",
      "Brian Howe"
    ],
    [
      "Frank Abagnale Jr.",
      "Carl Hanratty",
      "Frank Abagnale Sr.",
      "Roger Strong",
      "Paula Abagnale",
      "Brenda Strong",
      "Jack Barnes",
      "Earl Amdursky"
    ]
  );

  updateTopCastCharactersV3(
    "Django Unchained",
    [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio",
      "Kerry Washington",
      "Samuel L. Jackson",
      "Walton Goggins",
      "Dennis Christopher",
      "James Remar"
    ],
    [
      "Django Freeman",
      "Dr. King Schultz",
      "Calvin Candie",
      "Broomhilda von Shaft",
      "Stephen",
      "Billy Crash",
      "Leonide Moguy",
      "Ace Speck / Butch Pooch"
    ]
  );

  updateTopCastCharactersV3(
    "Once Upon a Time in Hollywood",
    [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Margot Robbie",
      "Emile Hirsch",
      "Margaret Qualley",
      "Timothy Olyphant",
      "Austin Butler",
      "Dakota Fanning"
    ],
    [
      "Rick Dalton",
      "Cliff Booth",
      "Sharon Tate",
      "Jay Sebring",
      "Pussycat",
      "James Stacy",
      "Tex Watson",
      "Squeaky Fromme"
    ]
  );

  updateTopCastCharactersV3(
    "Pulp Fiction",
    [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis",
      "Ving Rhames",
      "Harvey Keitel",
      "Tim Roth",
      "Amanda Plummer"
    ],
    [
      "Vincent Vega",
      "Jules Winnfield",
      "Mia Wallace",
      "Butch Coolidge",
      "Marsellus Wallace",
      "Winston Wolfe",
      "Pumpkin / Ringo",
      "Honey Bunny / Yolanda"
    ]
  );

  updateTopCastCharactersV3(
    "Kill Bill",
    [
      "Uma Thurman",
      "Lucy Liu",
      "Vivica A. Fox",
      "Daryl Hannah",
      "David Carradine",
      "Michael Madsen",
      "Julie Dreyfus",
      "Chiaki Kuriyama"
    ],
    [
      "The Bride / Beatrix Kiddo",
      "O-Ren Ishii",
      "Vernita Green",
      "Elle Driver",
      "Bill",
      "Budd",
      "Sofie Fatale",
      "Gogo Yubari"
    ]
  );

  updateTopCastCharactersV3(
    "Mission: Impossible",
    [
      "Tom Cruise",
      "Jon Voight",
      "Emmanuelle Béart",
      "Henry Czerny",
      "Jean Reno",
      "Ving Rhames",
      "Kristin Scott Thomas",
      "Vanessa Redgrave"
    ],
    [
      "Ethan Hunt",
      "Jim Phelps",
      "Claire Phelps",
      "Eugene Kittridge",
      "Franz Krieger",
      "Luther Stickell",
      "Sarah Davies",
      "Max"
    ]
  );

  updateTopCastCharactersV3(
    "Edge of Tomorrow",
    [
      "Tom Cruise",
      "Emily Blunt",
      "Bill Paxton",
      "Brendan Gleeson",
      "Noah Taylor",
      "Jonas Armstrong",
      "Kick Gurry",
      "Charlotte Riley"
    ],
    [
      "Major William Cage",
      "Rita Vrataski",
      "Master Sergeant Farell",
      "General Brigham",
      "Dr. Carter",
      "Skinner",
      "Griff",
      "Nance"
    ]
  );

  updateTopCastCharactersV3(
    "Jerry Maguire",
    [
      "Tom Cruise",
      "Cuba Gooding Jr.",
      "Renée Zellweger",
      "Kelly Preston",
      "Jerry O'Connell",
      "Jay Mohr",
      "Bonnie Hunt",
      "Regina King"
    ],
    [
      "Jerry Maguire",
      "Rod Tidwell",
      "Dorothy Boyd",
      "Avery Bishop",
      "Frank Cushman",
      "Bob Sugar",
      "Laurel Boyd",
      "Marcee Tidwell"
    ]
  );

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Top Cast + Character Expansion v3 installed: 30 titles.");
})();
/* =========================================================
   VEDB MISSING TITLE FIX — PULP FICTION v1
   Purpose:
   - Adds missing searchable Title Sphere page for Pulp Fiction.
   - Includes Top Cast & Characters already paired.
   - Fixes issue where Top Cast Expansion v3 skipped it because
     the title page did not exist yet.
========================================================= */

(function () {
  if (window.vedbMissingPulpFictionFixV1Installed) return;
  window.vedbMissingPulpFictionFixV1Installed = true;

  if (typeof addTitleOnce !== "function") {
    console.warn("VEDB Missing Pulp Fiction Fix skipped: addTitleOnce is not available.");
    return;
  }

  addTitleOnce({
    mode: "title",
    name: "Pulp Fiction",
    job: "Movie • Crime • Drama",
    initials: "PF",
    summary:
      "A crime story told through connected chapters involving hitmen, a boxer, a crime boss, and a mysterious briefcase.",
    overview:
      "Pulp Fiction follows several connected crime stories in Los Angeles, including two hitmen, a boxer, a crime boss, and a dangerous night out. The movie jumps through time as different characters cross paths, make risky choices, and deal with the consequences of violence, loyalty, and survival.",
    cast: [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis",
      "Ving Rhames",
      "Harvey Keitel",
      "Tim Roth",
      "Amanda Plummer"
    ],
    characters: [
      "Vincent Vega",
      "Jules Winnfield",
      "Mia Wallace",
      "Butch Coolidge",
      "Marsellus Wallace",
      "Winston Wolfe",
      "Pumpkin / Ringo",
      "Honey Bunny / Yolanda"
    ],
    crew: [
      "Director: Quentin Tarantino",
      "Writers: Quentin Tarantino and Roger Avary",
      "Producer: Lawrence Bender"
    ],
    awards: [
      "Awards hub placeholder",
      "Screenplay recognition placeholder"
    ],
    reviews: ["Review hub placeholder"],
    boxOffice: ["Box office data placeholder"],
    trivia: ["Trivia placeholder — verify before publishing."],
    videos: ["Official trailer placeholder"],
    similar: [
      "Django Unchained",
      "Kill Bill",
      "Once Upon a Time in Hollywood",
      "Reservoir Dogs"
    ],
    whereWatch: ["Where-to-watch links can be added later."],
    facts: {
      "Release Year": "1994",
      "Type": "Movie",
      "Genre": "Crime Drama"
    },
    buzz: 94,
    sources: ["https://en.wikipedia.org/wiki/Pulp_Fiction"]
  });

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Missing Title Fix installed: Pulp Fiction.");
})();
/* =========================================================
   VEDB TOP CAST + CHARACTER EXPANSION v4
   Purpose:
   - Expands 40 existing searchable Title Sphere pages
     with actor → character pairs.
   - Works with the Cast + Character Pair Display Fix.
   - Does NOT create new titles.
   - Safely skips a title if it does not exist.
   - Does NOT touch search, startup, Story Snapshots, Full Body credits, or audit tools.

   Titles updated:
   1. Malcolm & Marie
   2. Space Jam: A New Legacy
   3. Philadelphia
   4. Remember the Titans
   5. Man on Fire
   6. American Gangster
   7. Flight
   8. Kramer vs. Kramer
   9. The Book of Eli
   10. John Q.
   11. The Hurricane
   12. Roman J. Israel, Esq.
   13. The Deer Hunter
   14. Out of Africa
   15. The Bridges of Madison County
   16. The Hours
   17. Doubt
   18. Julie & Julia
   19. K.C. Undercover
   20. Cry Freedom
   21. Julia
   22. The French Lieutenant's Woman
   23. Silkwood
   24. Heartburn
   25. A Cry in the Dark
   26. Postcards from the Edge
   27. Adaptation.
   28. Into the Woods
   29. The Post
   30. Little Women
   31. Only Murders in the Building
   32. This Boy's Life
   33. What's Eating Gilbert Grape
   34. The Basketball Diaries
   35. The Quick and the Dead
   36. Total Eclipse
   37. Marvin's Room
   38. Spider-Man: Homecoming
   39. Spider-Man: Far From Home
   40. Uncharted
========================================================= */

(function () {
  if (window.vedbTopCastCharacterExpansionV4Installed) return;
  window.vedbTopCastCharacterExpansionV4Installed = true;

  function normalizeVEDBTitleNameV4(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function findVEDBTitleForCastExpansionV4(titleName) {
    const wanted = normalizeVEDBTitleNameV4(titleName);

    if (typeof titles !== "undefined" && Array.isArray(titles)) {
      const foundInTitles = titles.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleNameV4(item.name) === wanted
        );
      });

      if (foundInTitles) return foundInTitles;
    }

    if (typeof allItems !== "undefined" && Array.isArray(allItems)) {
      const foundInAllItems = allItems.find(function (item) {
        return (
          item &&
          item.mode === "title" &&
          normalizeVEDBTitleNameV4(item.name) === wanted
        );
      });

      if (foundInAllItems) return foundInAllItems;
    }

    return null;
  }

  function updateTopCastCharactersV4(titleName, castList, characterList) {
    const title = findVEDBTitleForCastExpansionV4(titleName);

    if (!title) {
      console.warn("VEDB Top Cast Expansion v4 skipped missing title:", titleName);
      return;
    }

    title.cast = castList.slice();
    title.characters = characterList.slice();

    title.castCharacterNote =
      "Top Cast & Characters expanded to show the actor and the character together.";

    console.log("VEDB Top Cast Expansion v4 updated:", titleName);
  }

  updateTopCastCharactersV4(
    "Malcolm & Marie",
    [
      "Zendaya",
      "John David Washington"
    ],
    [
      "Marie Jones",
      "Malcolm Elliott"
    ]
  );

  updateTopCastCharactersV4(
    "Space Jam: A New Legacy",
    [
      "LeBron James",
      "Don Cheadle",
      "Cedric Joe",
      "Sonequa Martin-Green",
      "Khris Davis",
      "Zendaya",
      "Jeff Bergman",
      "Eric Bauza"
    ],
    [
      "LeBron James",
      "Al-G Rhythm",
      "Dom James",
      "Kamiyah James",
      "Malik",
      "Lola Bunny",
      "Bugs Bunny / Sylvester / Yosemite Sam",
      "Daffy Duck / Porky Pig / Marvin the Martian"
    ]
  );

  updateTopCastCharactersV4(
    "Philadelphia",
    [
      "Tom Hanks",
      "Denzel Washington",
      "Jason Robards",
      "Mary Steenburgen",
      "Antonio Banderas",
      "Joanne Woodward",
      "Robert W. Castle",
      "Ann Dowd"
    ],
    [
      "Andrew Beckett",
      "Joe Miller",
      "Charles Wheeler",
      "Belinda Conine",
      "Miguel Alvarez",
      "Sarah Beckett",
      "Bud Beckett",
      "Jill Beckett"
    ]
  );

  updateTopCastCharactersV4(
    "Remember the Titans",
    [
      "Denzel Washington",
      "Will Patton",
      "Wood Harris",
      "Ryan Hurst",
      "Donald Faison",
      "Craig Kirkwood",
      "Ethan Suplee",
      "Kip Pardue"
    ],
    [
      "Coach Herman Boone",
      "Coach Bill Yoast",
      "Julius Campbell",
      "Gerry Bertier",
      "Petey Jones",
      "Jerry “Rev” Harris",
      "Louie Lastik",
      "Ronnie “Sunshine” Bass"
    ]
  );

  updateTopCastCharactersV4(
    "Man on Fire",
    [
      "Denzel Washington",
      "Dakota Fanning",
      "Christopher Walken",
      "Radha Mitchell",
      "Marc Anthony",
      "Giancarlo Giannini",
      "Mickey Rourke",
      "Rachel Ticotin"
    ],
    [
      "John Creasy",
      "Lupita “Pita” Ramos",
      "Paul Rayburn",
      "Lisa Ramos",
      "Samuel Ramos",
      "Miguel Manzano",
      "Jordan Kalfus",
      "Mariana Garcia Guerrero"
    ]
  );

  updateTopCastCharactersV4(
    "American Gangster",
    [
      "Denzel Washington",
      "Russell Crowe",
      "Chiwetel Ejiofor",
      "Cuba Gooding Jr.",
      "Josh Brolin",
      "Ted Levine",
      "Armand Assante",
      "Ruby Dee"
    ],
    [
      "Frank Lucas",
      "Richie Roberts",
      "Huey Lucas",
      "Nicky Barnes",
      "Detective Trupo",
      "Lou Toback",
      "Dominic Cattano",
      "Mama Lucas"
    ]
  );

  updateTopCastCharactersV4(
    "Flight",
    [
      "Denzel Washington",
      "Don Cheadle",
      "Kelly Reilly",
      "John Goodman",
      "Bruce Greenwood",
      "Melissa Leo",
      "Brian Geraghty",
      "Tamara Tunie"
    ],
    [
      "Whip Whitaker",
      "Hugh Lang",
      "Nicole Maggen",
      "Harling Mays",
      "Charlie Anderson",
      "Ellen Block",
      "Ken Evans",
      "Margaret Thomason"
    ]
  );

  updateTopCastCharactersV4(
    "Kramer vs. Kramer",
    [
      "Dustin Hoffman",
      "Meryl Streep",
      "Justin Henry",
      "Jane Alexander",
      "Howard Duff",
      "George Coe",
      "JoBeth Williams",
      "Bill Moor"
    ],
    [
      "Ted Kramer",
      "Joanna Kramer",
      "Billy Kramer",
      "Margaret Phelps",
      "John Shaunessy",
      "Jim O'Connor",
      "Phyllis Bernard",
      "Gressen"
    ]
  );

  updateTopCastCharactersV4(
    "The Book of Eli",
    [
      "Denzel Washington",
      "Gary Oldman",
      "Mila Kunis",
      "Ray Stevenson",
      "Jennifer Beals",
      "Frances de la Tour",
      "Michael Gambon",
      "Tom Waits"
    ],
    [
      "Eli",
      "Carnegie",
      "Solara",
      "Redridge",
      "Claudia",
      "Martha",
      "George",
      "Engineer"
    ]
  );

  updateTopCastCharactersV4(
    "John Q.",
    [
      "Denzel Washington",
      "Kimberly Elise",
      "Daniel E. Smith",
      "James Woods",
      "Anne Heche",
      "Robert Duvall",
      "Ray Liotta",
      "Eddie Griffin"
    ],
    [
      "John Quincy Archibald",
      "Denise Archibald",
      "Michael Archibald",
      "Dr. Raymond Turner",
      "Rebecca Payne",
      "Lt. Frank Grimes",
      "Chief Gus Monroe",
      "Lester Matthews"
    ]
  );

  updateTopCastCharactersV4(
    "The Hurricane",
    [
      "Denzel Washington",
      "Vicellous Shannon",
      "Deborah Kara Unger",
      "Liev Schreiber",
      "John Hannah",
      "Dan Hedaya",
      "Debbi Morgan",
      "Clancy Brown"
    ],
    [
      "Rubin Carter",
      "Lesra Martin",
      "Lisa Peters",
      "Sam Chaiton",
      "Terry Swinton",
      "Detective Della Pesca",
      "Mae Thelma",
      "Lieutenant Jimmy Williams"
    ]
  );

  updateTopCastCharactersV4(
    "Roman J. Israel, Esq.",
    [
      "Denzel Washington",
      "Colin Farrell",
      "Carmen Ejogo",
      "Shelley Hennig",
      "Lynda Gravátt",
      "Amanda Warren",
      "Hugo Armstrong"
    ],
    [
      "Roman J. Israel",
      "George Pierce",
      "Maya Alston",
      "Olivia Reed",
      "Vernita Wells",
      "Lynn Jackson",
      "Fritz Molinar"
    ]
  );

  updateTopCastCharactersV4(
    "The Deer Hunter",
    [
      "Robert De Niro",
      "Christopher Walken",
      "John Savage",
      "Meryl Streep",
      "John Cazale",
      "George Dzundza",
      "Chuck Aspegren",
      "Shirley Stoler"
    ],
    [
      "Michael Vronsky",
      "Nick Chevotarevich",
      "Steven Pushkov",
      "Linda",
      "Stan",
      "John",
      "Axel",
      "Steven's Mother"
    ]
  );

  updateTopCastCharactersV4(
    "Out of Africa",
    [
      "Meryl Streep",
      "Robert Redford",
      "Klaus Maria Brandauer",
      "Michael Kitchen",
      "Malick Bowens",
      "Joseph Thiaka",
      "Michael Gough",
      "Suzanna Hamilton"
    ],
    [
      "Karen Blixen",
      "Denys Finch Hatton",
      "Baron Bror Blixen",
      "Berkeley Cole",
      "Farah",
      "Kamante",
      "Lord Delamere",
      "Felicity"
    ]
  );

  updateTopCastCharactersV4(
    "The Bridges of Madison County",
    [
      "Clint Eastwood",
      "Meryl Streep",
      "Annie Corley",
      "Victor Slezak",
      "Jim Haynie",
      "Sarah Kathryn Schmitt",
      "Christopher Kroon",
      "Phyllis Lyons"
    ],
    [
      "Robert Kincaid",
      "Francesca Johnson",
      "Carolyn Johnson",
      "Michael Johnson",
      "Richard Johnson",
      "Young Carolyn",
      "Young Michael",
      "Betty"
    ]
  );

  updateTopCastCharactersV4(
    "The Hours",
    [
      "Nicole Kidman",
      "Meryl Streep",
      "Julianne Moore",
      "Ed Harris",
      "Toni Collette",
      "Claire Danes",
      "Jeff Daniels",
      "Stephen Dillane"
    ],
    [
      "Virginia Woolf",
      "Clarissa Vaughan",
      "Laura Brown",
      "Richard Brown",
      "Kitty",
      "Julia Vaughan",
      "Louis Waters",
      "Leonard Woolf"
    ]
  );

  updateTopCastCharactersV4(
    "Doubt",
    [
      "Meryl Streep",
      "Philip Seymour Hoffman",
      "Amy Adams",
      "Viola Davis",
      "Joseph Foster",
      "Alice Drummond",
      "Audrie Neenan",
      "Susan Blommaert"
    ],
    [
      "Sister Aloysius Beauvier",
      "Father Brendan Flynn",
      "Sister James",
      "Mrs. Miller",
      "Donald Miller",
      "Sister Veronica",
      "Sister Raymond",
      "Mrs. Carson"
    ]
  );

  updateTopCastCharactersV4(
    "Julie & Julia",
    [
      "Meryl Streep",
      "Amy Adams",
      "Stanley Tucci",
      "Chris Messina",
      "Linda Emond",
      "Helen Carey",
      "Mary Lynn Rajskub",
      "Jane Lynch"
    ],
    [
      "Julia Child",
      "Julie Powell",
      "Paul Child",
      "Eric Powell",
      "Simone Beck",
      "Louisette Bertholle",
      "Sarah",
      "Dorothy McWilliams"
    ]
  );

  updateTopCastCharactersV4(
    "K.C. Undercover",
    [
      "Zendaya",
      "Veronica Dunne",
      "Kamil McFadden",
      "Trinitee Stokes",
      "Kadeem Hardison",
      "Tammy Townsend",
      "Dimitrius Pulido",
      "Sherri Shepherd"
    ],
    [
      "K.C. Cooper",
      "Marisa Clark",
      "Ernie Cooper",
      "Judy Cooper",
      "Craig Cooper",
      "Kira Cooper",
      "Brett Willis",
      "Beverly"
    ]
  );

  updateTopCastCharactersV4(
    "Cry Freedom",
    [
      "Kevin Kline",
      "Denzel Washington",
      "Penelope Wilton",
      "Kevin McNally",
      "Josette Simon",
      "Wabei Siyolwe",
      "John Thaw",
      "Timothy West"
    ],
    [
      "Donald Woods",
      "Steve Biko",
      "Wendy Woods",
      "Ken",
      "Dr. Mamphela Ramphele",
      "Tenjy Mtintso",
      "Jimmy Kruger",
      "Captain De Wet"
    ]
  );

  updateTopCastCharactersV4(
    "Julia",
    [
      "Jane Fonda",
      "Vanessa Redgrave",
      "Jason Robards",
      "Meryl Streep",
      "Hal Holbrook",
      "Rosemary Murphy",
      "Maximilian Schell",
      "Dora Doll"
    ],
    [
      "Lillian Hellman",
      "Julia",
      "Dashiell Hammett",
      "Anne Marie",
      "Alan Campbell",
      "Dorothy Parker",
      "Johann",
      "Woman Passenger"
    ]
  );

  updateTopCastCharactersV4(
    "The French Lieutenant's Woman",
    [
      "Meryl Streep",
      "Jeremy Irons",
      "Hilton McRae",
      "Emily Morgan",
      "Charlotte Mitchell",
      "Lynsey Baxter",
      "Peter Vaughan",
      "Leo McKern"
    ],
    [
      "Sarah Woodruff / Anna",
      "Charles Smithson / Mike",
      "Sam",
      "Mary",
      "Mrs. Tranter",
      "Ernestina",
      "Mr. Freeman",
      "Dr. Grogan"
    ]
  );

  updateTopCastCharactersV4(
    "Silkwood",
    [
      "Meryl Streep",
      "Kurt Russell",
      "Cher",
      "Craig T. Nelson",
      "Diana Scarwid",
      "Fred Ward",
      "Ron Silver",
      "Charles Hallahan"
    ],
    [
      "Karen Silkwood",
      "Drew Stephens",
      "Dolly Pelliker",
      "Winston",
      "Angela",
      "Morgan",
      "Paul Stone",
      "Earl Lapin"
    ]
  );

  updateTopCastCharactersV4(
    "Heartburn",
    [
      "Meryl Streep",
      "Jack Nicholson",
      "Jeff Daniels",
      "Maureen Stapleton",
      "Stockard Channing",
      "Richard Masur",
      "Catherine O'Hara",
      "Steven Hill"
    ],
    [
      "Rachel Samstat",
      "Mark Forman",
      "Richard",
      "Vera",
      "Julie Siegel",
      "Arthur Siegel",
      "Betty",
      "Harry Samstat"
    ]
  );

  updateTopCastCharactersV4(
    "A Cry in the Dark",
    [
      "Meryl Streep",
      "Sam Neill",
      "Dale Reeves",
      "David Hoflin",
      "Jason Reason",
      "Michael Wetter",
      "Debra Lawrance",
      "Bruce Myles"
    ],
    [
      "Lindy Chamberlain",
      "Michael Chamberlain",
      "Aidan Chamberlain",
      "Older Aidan",
      "Reagan Chamberlain",
      "Kahlia Chamberlain",
      "Sally Lowe",
      "Ian Barker"
    ]
  );

  updateTopCastCharactersV4(
    "Postcards from the Edge",
    [
      "Meryl Streep",
      "Shirley MacLaine",
      "Dennis Quaid",
      "Gene Hackman",
      "Richard Dreyfuss",
      "Annette Bening",
      "Simon Callow",
      "Mary Wickes"
    ],
    [
      "Suzanne Vale",
      "Doris Mann",
      "Jack Faulkner",
      "Lowell Kolchek",
      "Doctor Frankenthal",
      "Evelyn Ames",
      "Simon Asquith",
      "Grandma"
    ]
  );

  updateTopCastCharactersV4(
    "Adaptation.",
    [
      "Nicolas Cage",
      "Meryl Streep",
      "Chris Cooper",
      "Tilda Swinton",
      "Brian Cox",
      "Maggie Gyllenhaal",
      "Ron Livingston",
      "Cara Seymour"
    ],
    [
      "Charlie Kaufman / Donald Kaufman",
      "Susan Orlean",
      "John Laroche",
      "Valerie Thomas",
      "Robert McKee",
      "Caroline Cunningham",
      "Marty Bowen",
      "Amelia Kavan"
    ]
  );

  updateTopCastCharactersV4(
    "Into the Woods",
    [
      "Meryl Streep",
      "Emily Blunt",
      "James Corden",
      "Anna Kendrick",
      "Chris Pine",
      "Tracey Ullman",
      "Christine Baranski",
      "Johnny Depp"
    ],
    [
      "The Witch",
      "Baker's Wife",
      "The Baker",
      "Cinderella",
      "Cinderella's Prince",
      "Jack's Mother",
      "Cinderella's Stepmother",
      "The Wolf"
    ]
  );

  updateTopCastCharactersV4(
    "The Post",
    [
      "Meryl Streep",
      "Tom Hanks",
      "Sarah Paulson",
      "Bob Odenkirk",
      "Tracy Letts",
      "Bradley Whitford",
      "Bruce Greenwood",
      "Matthew Rhys"
    ],
    [
      "Katharine Graham",
      "Ben Bradlee",
      "Tony Bradlee",
      "Ben Bagdikian",
      "Fritz Beebe",
      "Arthur Parsons",
      "Robert McNamara",
      "Daniel Ellsberg"
    ]
  );

  updateTopCastCharactersV4(
    "Little Women",
    [
      "Saoirse Ronan",
      "Emma Watson",
      "Florence Pugh",
      "Eliza Scanlen",
      "Laura Dern",
      "Timothée Chalamet",
      "Meryl Streep",
      "Tracy Letts"
    ],
    [
      "Jo March",
      "Meg March",
      "Amy March",
      "Beth March",
      "Marmee March",
      "Theodore “Laurie” Laurence",
      "Aunt March",
      "Mr. Dashwood"
    ]
  );

  updateTopCastCharactersV4(
    "Only Murders in the Building",
    [
      "Steve Martin",
      "Martin Short",
      "Selena Gomez",
      "Meryl Streep",
      "Michael Cyril Creighton",
      "Da'Vine Joy Randolph",
      "Tina Fey",
      "Paul Rudd"
    ],
    [
      "Charles-Haden Savage",
      "Oliver Putnam",
      "Mabel Mora",
      "Loretta Durkin",
      "Howard Morris",
      "Detective Donna Williams",
      "Cinda Canning",
      "Ben Glenroy"
    ]
  );

  updateTopCastCharactersV4(
    "This Boy's Life",
    [
      "Leonardo DiCaprio",
      "Robert De Niro",
      "Ellen Barkin",
      "Jonah Blechman",
      "Eliza Dushku",
      "Chris Cooper",
      "Carla Gugino",
      "Tobey Maguire"
    ],
    [
      "Tobias “Toby” Wolff",
      "Dwight Hansen",
      "Caroline Wolff Hansen",
      "Arthur Gayle",
      "Pearl",
      "Roy",
      "Norma",
      "Chuck Bolger"
    ]
  );

  updateTopCastCharactersV4(
    "What's Eating Gilbert Grape",
    [
      "Johnny Depp",
      "Leonardo DiCaprio",
      "Juliette Lewis",
      "Darlene Cates",
      "Mary Steenburgen",
      "Laura Harrington",
      "Mary Kate Schellhardt",
      "Kevin Tighe"
    ],
    [
      "Gilbert Grape",
      "Arnie Grape",
      "Becky",
      "Bonnie Grape",
      "Betty Carver",
      "Amy Grape",
      "Ellen Grape",
      "Ken Carver"
    ]
  );

  updateTopCastCharactersV4(
    "The Basketball Diaries",
    [
      "Leonardo DiCaprio",
      "Lorraine Bracco",
      "Mark Wahlberg",
      "James Madio",
      "Bruno Kirby",
      "Patrick McGaw",
      "Juliette Lewis",
      "Michael Imperioli"
    ],
    [
      "Jim Carroll",
      "Jim's Mother",
      "Mickey",
      "Pedro",
      "Swifty",
      "Neutron",
      "Diane Moody",
      "Bobby"
    ]
  );

  updateTopCastCharactersV4(
    "The Quick and the Dead",
    [
      "Sharon Stone",
      "Gene Hackman",
      "Russell Crowe",
      "Leonardo DiCaprio",
      "Tobin Bell",
      "Roberts Blossom",
      "Kevin Conway",
      "Lance Henriksen"
    ],
    [
      "Ellen",
      "John Herod",
      "Cort",
      "Fee Herod",
      "Dog Kelly",
      "Doc Wallace",
      "Eugene Dred",
      "Ace Hanlon"
    ]
  );

  updateTopCastCharactersV4(
    "Total Eclipse",
    [
      "Leonardo DiCaprio",
      "David Thewlis",
      "Romane Bohringer",
      "Dominique Blanc",
      "Félicie Pasotti Cabarbaye",
      "Nita Klein",
      "James Thierrée"
    ],
    [
      "Arthur Rimbaud",
      "Paul Verlaine",
      "Mathilde Maute",
      "Isabelle Rimbaud",
      "Isabelle as Child",
      "Rimbaud's Mother",
      "Frederic"
    ]
  );

  updateTopCastCharactersV4(
    "Marvin's Room",
    [
      "Meryl Streep",
      "Leonardo DiCaprio",
      "Diane Keaton",
      "Robert De Niro",
      "Hume Cronyn",
      "Gwen Verdon",
      "Hal Scardino",
      "Dan Hedaya"
    ],
    [
      "Lee",
      "Hank",
      "Bessie",
      "Dr. Wally",
      "Marvin",
      "Ruth",
      "Charlie",
      "Bob"
    ]
  );

  updateTopCastCharactersV4(
    "Spider-Man: Homecoming",
    [
      "Tom Holland",
      "Michael Keaton",
      "Robert Downey Jr.",
      "Marisa Tomei",
      "Jon Favreau",
      "Zendaya",
      "Jacob Batalon",
      "Laura Harrier"
    ],
    [
      "Peter Parker / Spider-Man",
      "Adrian Toomes / Vulture",
      "Tony Stark / Iron Man",
      "May Parker",
      "Happy Hogan",
      "Michelle “MJ” Jones",
      "Ned Leeds",
      "Liz Allan"
    ]
  );

  updateTopCastCharactersV4(
    "Spider-Man: Far From Home",
    [
      "Tom Holland",
      "Samuel L. Jackson",
      "Zendaya",
      "Cobie Smulders",
      "Jon Favreau",
      "J. B. Smoove",
      "Jacob Batalon",
      "Jake Gyllenhaal"
    ],
    [
      "Peter Parker / Spider-Man",
      "Nick Fury",
      "Michelle “MJ” Jones",
      "Maria Hill",
      "Happy Hogan",
      "Julius Dell",
      "Ned Leeds",
      "Quentin Beck / Mysterio"
    ]
  );

  updateTopCastCharactersV4(
    "Uncharted",
    [
      "Tom Holland",
      "Mark Wahlberg",
      "Sophia Ali",
      "Tati Gabrielle",
      "Antonio Banderas",
      "Steven Waddington",
      "Rudy Pankow",
      "Pilou Asbæk"
    ],
    [
      "Nathan Drake",
      "Victor “Sully” Sullivan",
      "Chloe Frazer",
      "Jo Braddock",
      "Santiago Moncada",
      "The Scotsman",
      "Young Sam",
      "Gage"
    ]
  );

  if (typeof syncAllItemsForSearch === "function") {
    syncAllItemsForSearch();
  }

  console.log("VEDB Top Cast + Character Expansion v4 installed: 40 title updates attempted.");
})();