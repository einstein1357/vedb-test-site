/* VEDB REAL FULL BODY CREDITS — BATCH 1
   Paste at the VERY BOTTOM of the JS box.

   This replaces cheap placeholder Full Body rows with real researched credits
   for the first 10 actors.

   Batch 1 actors:
   - Joshua Rush
   - Jennifer Lawrence
   - Ben Affleck
   - Denzel Washington
   - Zendaya
   - Ryan Reynolds
   - Brad Pitt
   - Angelina Jolie
   - Will Smith
   - Tom Cruise

   Does NOT:
   - touch startup
   - touch Full Page memory
   - force any actor to load
   - remove the 50 actors
   - change nav buttons
*/

(function () {
  if (window.vedbRealFullBodyBatch1Installed) return;
  window.vedbRealFullBodyBatch1Installed = true;

  function vSafe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function vClean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function vActors() {
    return typeof actors !== "undefined" && Array.isArray(actors) ? actors : [];
  }

  function vFindActor(actorName) {
    const wanted = vClean(actorName);

    return vActors().find(actor => vClean(actor.name) === wanted) ||
      vActors().find(actor => {
        const name = vClean(actor.name);
        return name.includes(wanted) || wanted.includes(name);
      }) ||
      null;
  }

  const realFullBodyCreditsBatch1 = {
    "Joshua Rush": [
      { title: "Heroes", year: 2009, type: "TV Series", role: "Young Sylar", creditType: "Actor", source: "Wikipedia / IMDb profile reference" },
      { title: "Unstoppable", year: 2010, type: "Movie", role: "Child passenger / supporting child role", creditType: "Actor", source: "IMDb profile reference" },
      { title: "Parental Guidance", year: 2012, type: "Movie", role: "Turner Simmons", creditType: "Actor", source: "Wikipedia / IMDb profile reference" },
      { title: "Clarence", year: 2014, type: "TV Series", role: "Breehn", creditType: "Voice Actor", source: "Wikipedia profile reference" },
      { title: "The Lion Guard", year: 2016, type: "TV Series", role: "Bunga", creditType: "Voice Actor", source: "Wikipedia / IMDb profile reference" },
      { title: "Andi Mack", year: 2017, type: "TV Series", role: "Cyrus Goodman", creditType: "Actor", source: "Wikipedia / IMDb profile reference" },
      { title: "The Loud House", year: 2016, type: "TV Series", role: "Classmate / Quarterback voice roles", creditType: "Voice Actor", source: "Public credit reference" },
      { title: "Where's Waldo?", year: 2019, type: "TV Series", role: "Waldo", creditType: "Voice Actor", source: "Wikipedia profile reference" }
    ],

    "Jennifer Lawrence": [
      { title: "Winter's Bone", year: 2010, type: "Movie", role: "Ree Dolly", creditType: "Actor", source: "Wikipedia profile / filmography reference" },
      { title: "X-Men: First Class", year: 2011, type: "Movie", role: "Raven Darkhölme / Mystique", creditType: "Actor", source: "Wikipedia profile / filmography reference" },
      { title: "The Hunger Games", year: 2012, type: "Movie", role: "Katniss Everdeen", creditType: "Actor", source: "Wikipedia profile / filmography reference" },
      { title: "Silver Linings Playbook", year: 2012, type: "Movie", role: "Tiffany Maxwell", creditType: "Actor", source: "Wikipedia / cast reference" },
      { title: "House at the End of the Street", year: 2012, type: "Movie", role: "Elissa Cassidy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Catching Fire", year: 2013, type: "Movie", role: "Katniss Everdeen", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "American Hustle", year: 2013, type: "Movie", role: "Rosalyn Rosenfeld", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "X-Men: Days of Future Past", year: 2014, type: "Movie", role: "Raven Darkhölme / Mystique", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 1", year: 2014, type: "Movie", role: "Katniss Everdeen", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Joy", year: 2015, type: "Movie", role: "Joy Mangano", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Passengers", year: 2016, type: "Movie", role: "Aurora Lane", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mother!", year: 2017, type: "Movie", role: "Mother", creditType: "Actor", source: "Public filmography reference" },
      { title: "Red Sparrow", year: 2018, type: "Movie", role: "Dominika Egorova", creditType: "Actor", source: "Public filmography reference" },
      { title: "Don't Look Up", year: 2021, type: "Movie", role: "Kate Dibiasky", creditType: "Actor", source: "Public filmography reference" },
      { title: "Causeway", year: 2022, type: "Movie", role: "Lynsey", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "No Hard Feelings", year: 2023, type: "Movie", role: "Maddie Barker", creditType: "Actor / Producer", source: "Public filmography reference" }
    ],

    "Ben Affleck": [
      { title: "Good Will Hunting", year: 1997, type: "Movie", role: "Chuckie Sullivan", creditType: "Actor / Writer", source: "Wikipedia filmography reference" },
      { title: "Armageddon", year: 1998, type: "Movie", role: "A. J. Frost", creditType: "Actor", source: "Public filmography reference" },
      { title: "Shakespeare in Love", year: 1998, type: "Movie", role: "Ned Alleyn", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pearl Harbor", year: 2001, type: "Movie", role: "Rafe McCawley", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Sum of All Fears", year: 2002, type: "Movie", role: "Jack Ryan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Daredevil", year: 2003, type: "Movie", role: "Matt Murdock / Daredevil", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hollywoodland", year: 2006, type: "Movie", role: "George Reeves", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gone Baby Gone", year: 2007, type: "Movie", role: "Director", creditType: "Director / Writer", source: "Public filmography reference" },
      { title: "State of Play", year: 2009, type: "Movie", role: "Stephen Collins", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "The Town", year: 2010, type: "Movie", role: "Doug MacRay", creditType: "Actor / Director / Writer", source: "Wikipedia filmography reference" },
      { title: "Argo", year: 2012, type: "Movie", role: "Tony Mendez", creditType: "Actor / Director / Producer", source: "Wikipedia filmography reference" },
      { title: "Gone Girl", year: 2014, type: "Movie", role: "Nick Dunne", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Batman v Superman: Dawn of Justice", year: 2016, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "The Accountant", year: 2016, type: "Movie", role: "Christian Wolff", creditType: "Actor", source: "Fandango filmography reference" },
      { title: "Air", year: 2023, type: "Movie", role: "Phil Knight", creditType: "Actor / Director / Producer", source: "Public filmography reference" }
    ],

    "Denzel Washington": [
      { title: "St. Elsewhere", year: 1982, type: "TV Series", role: "Dr. Phillip Chandler", creditType: "Actor", source: "Public screen/stage reference" },
      { title: "Cry Freedom", year: 1987, type: "Movie", role: "Steve Biko", creditType: "Actor", source: "Public filmography reference" },
      { title: "Glory", year: 1989, type: "Movie", role: "Private Silas Trip", creditType: "Actor", source: "Public filmography reference" },
      { title: "Malcolm X", year: 1992, type: "Movie", role: "Malcolm X", creditType: "Actor", source: "Public screen/stage reference" },
      { title: "Philadelphia", year: 1993, type: "Movie", role: "Joe Miller", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hurricane", year: 1999, type: "Movie", role: "Rubin Carter", creditType: "Actor", source: "Public filmography reference" },
      { title: "Remember the Titans", year: 2000, type: "Movie", role: "Herman Boone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Training Day", year: 2001, type: "Movie", role: "Alonzo Harris", creditType: "Actor", source: "Public screen/stage reference" },
      { title: "John Q.", year: 2002, type: "Movie", role: "John Quincy Archibald", creditType: "Actor", source: "Public screen/stage reference" },
      { title: "Man on Fire", year: 2004, type: "Movie", role: "John Creasy", creditType: "Actor", source: "Public filmography reference" },
      { title: "American Gangster", year: 2007, type: "Movie", role: "Frank Lucas", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Book of Eli", year: 2010, type: "Movie", role: "Eli", creditType: "Actor / Producer", source: "Fandango filmography reference" },
      { title: "Flight", year: 2012, type: "Movie", role: "Whip Whitaker", creditType: "Actor", source: "Fandango filmography reference" },
      { title: "The Equalizer", year: 2014, type: "Movie", role: "Robert McCall", creditType: "Actor / Producer", source: "Fandango filmography reference" },
      { title: "Fences", year: 2016, type: "Movie", role: "Troy Maxson", creditType: "Actor / Director / Producer", source: "Fandango / screen-stage reference" },
      { title: "Roman J. Israel, Esq.", year: 2017, type: "Movie", role: "Roman J. Israel", creditType: "Actor", source: "Fandango filmography reference" }
    ],

    "Zendaya": [
      { title: "Shake It Up", year: 2010, type: "TV Series", role: "Rocky Blue", creditType: "Actor", source: "Public filmography reference" },
      { title: "Frenemies", year: 2012, type: "TV Movie", role: "Halley Brandon", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zapped", year: 2014, type: "TV Movie", role: "Zoey Stevens", creditType: "Actor", source: "Public filmography reference" },
      { title: "K.C. Undercover", year: 2015, type: "TV Series", role: "K.C. Cooper", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Spider-Man: Homecoming", year: 2017, type: "Movie", role: "Michelle / MJ", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Greatest Showman", year: 2017, type: "Movie", role: "Anne Wheeler", creditType: "Actor", source: "Public filmography reference" },
      { title: "Euphoria", year: 2019, type: "TV Series", role: "Rue Bennett", creditType: "Actor / Producer", source: "TV Guide / public filmography reference" },
      { title: "Spider-Man: Far From Home", year: 2019, type: "Movie", role: "MJ", creditType: "Actor", source: "Public filmography reference" },
      { title: "Malcolm & Marie", year: 2021, type: "Movie", role: "Marie", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Space Jam: A New Legacy", year: 2021, type: "Movie", role: "Lola Bunny", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Dune", year: 2021, type: "Movie", role: "Chani", creditType: "Actor", source: "Wikipedia profile reference" },
      { title: "Dune: Part Two", year: 2024, type: "Movie", role: "Chani", creditType: "Actor", source: "Wikipedia / TV Guide reference" },
      { title: "Challengers", year: 2024, type: "Movie", role: "Tashi Donaldson", creditType: "Actor / Producer", source: "TV Guide credit reference" }
    ],

    "Ryan Reynolds": [
      { title: "Two Guys and a Girl", year: 1998, type: "TV Series", role: "Michael Bergen / Berg", creditType: "Actor", source: "Public filmography reference" },
      { title: "National Lampoon's Van Wilder", year: 2002, type: "Movie", role: "Van Wilder", creditType: "Actor", source: "Public filmography reference" },
      { title: "Blade: Trinity", year: 2004, type: "Movie", role: "Hannibal King", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "The Amityville Horror", year: 2005, type: "Movie", role: "George Lutz", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Just Friends", year: 2005, type: "Movie", role: "Chris Brander", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Smokin' Aces", year: 2006, type: "Movie", role: "Richard Messner", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Definitely, Maybe", year: 2008, type: "Movie", role: "Will Hayes", creditType: "Actor", source: "Public filmography reference" },
      { title: "X-Men Origins: Wolverine", year: 2009, type: "Movie", role: "Wade Wilson / Deadpool / Weapon XI", creditType: "Actor", source: "Wikipedia profile / filmography reference" },
      { title: "The Proposal", year: 2009, type: "Movie", role: "Andrew Paxton", creditType: "Actor", source: "Wikipedia profile reference" },
      { title: "Green Lantern", year: 2011, type: "Movie", role: "Hal Jordan / Green Lantern", creditType: "Actor", source: "Public filmography reference" },
      { title: "Deadpool", year: 2016, type: "Movie", role: "Wade Wilson / Deadpool", creditType: "Actor / Producer", source: "IMDb / public filmography reference" },
      { title: "Deadpool 2", year: 2018, type: "Movie", role: "Wade Wilson / Deadpool", creditType: "Actor / Producer / Writer", source: "IMDb / public filmography reference" },
      { title: "Pokémon Detective Pikachu", year: 2019, type: "Movie", role: "Detective Pikachu", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Free Guy", year: 2021, type: "Movie", role: "Guy", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Adam Project", year: 2022, type: "Movie", role: "Adam Reed", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Deadpool & Wolverine", year: 2024, type: "Movie", role: "Wade Wilson / Deadpool", creditType: "Actor / Producer / Writer", source: "IMDb / public filmography reference" }
    ],

    "Brad Pitt": [
      { title: "Thelma & Louise", year: 1991, type: "Movie", role: "J.D.", creditType: "Actor", source: "Public filmography reference" },
      { title: "A River Runs Through It", year: 1992, type: "Movie", role: "Paul Maclean", creditType: "Actor", source: "Public filmography reference" },
      { title: "Interview with the Vampire", year: 1994, type: "Movie", role: "Louis de Pointe du Lac", creditType: "Actor", source: "Public filmography reference" },
      { title: "Se7en", year: 1995, type: "Movie", role: "David Mills", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "12 Monkeys", year: 1995, type: "Movie", role: "Jeffrey Goines", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Seven Years in Tibet", year: 1997, type: "Movie", role: "Heinrich Harrer", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Fight Club", year: 1999, type: "Movie", role: "Tyler Durden", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Snatch", year: 2000, type: "Movie", role: "Mickey O'Neil", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's Eleven", year: 2001, type: "Movie", role: "Rusty Ryan", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Troy", year: 2004, type: "Movie", role: "Achilles", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Mr. & Mrs. Smith", year: 2005, type: "Movie", role: "John Smith", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Curious Case of Benjamin Button", year: 2008, type: "Movie", role: "Benjamin Button", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Inglourious Basterds", year: 2009, type: "Movie", role: "Lt. Aldo Raine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Moneyball", year: 2011, type: "Movie", role: "Billy Beane", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Once Upon a Time in Hollywood", year: 2019, type: "Movie", role: "Cliff Booth", creditType: "Actor", source: "Public filmography reference" },
      { title: "Babylon", year: 2022, type: "Movie", role: "Jack Conrad", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Angelina Jolie": [
      { title: "Hackers", year: 1995, type: "Movie", role: "Kate Libby / Acid Burn", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gia", year: 1998, type: "TV Movie", role: "Gia Carangi", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "Girl, Interrupted", year: 1999, type: "Movie", role: "Lisa Rowe", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "Lara Croft: Tomb Raider", year: 2001, type: "Movie", role: "Lara Croft", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "Mr. & Mrs. Smith", year: 2005, type: "Movie", role: "Jane Smith", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "A Mighty Heart", year: 2007, type: "Movie", role: "Mariane Pearl", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wanted", year: 2008, type: "Movie", role: "Fox", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "Changeling", year: 2008, type: "Movie", role: "Christine Collins", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "Salt", year: 2010, type: "Movie", role: "Evelyn Salt", creditType: "Actor", source: "Vogue / public career reference" },
      { title: "Kung Fu Panda", year: 2008, type: "Movie", role: "Master Tigress", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "In the Land of Blood and Honey", year: 2011, type: "Movie", role: "Director / Writer / Producer", creditType: "Director / Writer / Producer", source: "Public filmography reference" },
      { title: "Maleficent", year: 2014, type: "Movie", role: "Maleficent", creditType: "Actor / Producer", source: "Vogue / public career reference" },
      { title: "First They Killed My Father", year: 2017, type: "Movie", role: "Director / Producer / Co-writer", creditType: "Director / Producer / Writer", source: "Public filmography reference" },
      { title: "Those Who Wish Me Dead", year: 2021, type: "Movie", role: "Hannah Faber", creditType: "Actor", source: "Public filmography reference" },
      { title: "Eternals", year: 2021, type: "Movie", role: "Thena", creditType: "Actor", source: "Public filmography reference" },
      { title: "Maria", year: 2024, type: "Movie", role: "Maria Callas", creditType: "Actor", source: "Vogue / public career reference" }
    ],

    "Will Smith": [
      { title: "The Fresh Prince of Bel-Air", year: 1990, type: "TV Series", role: "Will Smith", creditType: "Actor", source: "Public filmography reference" },
      { title: "Six Degrees of Separation", year: 1993, type: "Movie", role: "Paul", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bad Boys", year: 1995, type: "Movie", role: "Mike Lowrey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Independence Day", year: 1996, type: "Movie", role: "Capt. Steven Hiller", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Men in Black", year: 1997, type: "Movie", role: "Agent J", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "Enemy of the State", year: 1998, type: "Movie", role: "Robert Clayton Dean", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ali", year: 2001, type: "Movie", role: "Muhammad Ali", creditType: "Actor", source: "Wikipedia film reference" },
      { title: "Men in Black II", year: 2002, type: "Movie", role: "Agent J", creditType: "Actor", source: "Wikipedia filmography reference" },
      { title: "I, Robot", year: 2004, type: "Movie", role: "Del Spooner", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hitch", year: 2005, type: "Movie", role: "Alex Hitchens", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Pursuit of Happyness", year: 2006, type: "Movie", role: "Chris Gardner", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "I Am Legend", year: 2007, type: "Movie", role: "Robert Neville", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Hancock", year: 2008, type: "Movie", role: "John Hancock", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Concussion", year: 2015, type: "Movie", role: "Dr. Bennet Omalu", creditType: "Actor", source: "Public filmography reference" },
      { title: "Aladdin", year: 2019, type: "Movie", role: "Genie", creditType: "Actor", source: "Public filmography reference" },
      { title: "King Richard", year: 2021, type: "Movie", role: "Richard Williams", creditType: "Actor / Producer", source: "Wikipedia film reference" }
    ],

    "Tom Cruise": [
      { title: "Taps", year: 1981, type: "Movie", role: "David Shawn", creditType: "Actor", source: "Fandango biography / filmography reference" },
      { title: "Risky Business", year: 1983, type: "Movie", role: "Joel Goodsen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Top Gun", year: 1986, type: "Movie", role: "Pete Mitchell / Maverick", creditType: "Actor", source: "Fandango / public filmography reference" },
      { title: "Rain Man", year: 1988, type: "Movie", role: "Charlie Babbitt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Born on the Fourth of July", year: 1989, type: "Movie", role: "Ron Kovic", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Few Good Men", year: 1992, type: "Movie", role: "Lt. Daniel Kaffee", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Firm", year: 1993, type: "Movie", role: "Mitch McDeere", creditType: "Actor", source: "Public filmography reference" },
      { title: "Interview with the Vampire", year: 1994, type: "Movie", role: "Lestat de Lioncourt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mission: Impossible", year: 1996, type: "Movie", role: "Ethan Hunt", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Jerry Maguire", year: 1996, type: "Movie", role: "Jerry Maguire", creditType: "Actor", source: "Public filmography reference" },
      { title: "Magnolia", year: 1999, type: "Movie", role: "Frank T. J. Mackey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Minority Report", year: 2002, type: "Movie", role: "John Anderton", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Last Samurai", year: 2003, type: "Movie", role: "Nathan Algren", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Collateral", year: 2004, type: "Movie", role: "Vincent", creditType: "Actor", source: "Public filmography reference" },
      { title: "War of the Worlds", year: 2005, type: "Movie", role: "Ray Ferrier", creditType: "Actor", source: "Public filmography reference" },
      { title: "Tropic Thunder", year: 2008, type: "Movie", role: "Les Grossman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jack Reacher", year: 2012, type: "Movie", role: "Jack Reacher", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Edge of Tomorrow", year: 2014, type: "Movie", role: "William Cage", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mission: Impossible – Fallout", year: 2018, type: "Movie", role: "Ethan Hunt", creditType: "Actor / Producer", source: "Fandango filmography reference" },
      { title: "Top Gun: Maverick", year: 2022, type: "Movie", role: "Pete Mitchell / Maverick", creditType: "Actor / Producer", source: "Fandango / public filmography reference" },
      { title: "Mission: Impossible – Dead Reckoning Part One", year: 2023, type: "Movie", role: "Ethan Hunt", creditType: "Actor / Producer", source: "Fandango filmography reference" },
      { title: "Mission: Impossible – The Final Reckoning", year: 2025, type: "Movie", role: "Ethan Hunt", creditType: "Actor / Producer", source: "Fandango filmography reference" }
    ]
  };

  const realCredentialHighlightsBatch1 = {
    "Joshua Rush": [
      "Young actor known for Cyrus Goodman in Andi Mack.",
      "Voice work includes Bunga in The Lion Guard and Waldo in Where's Waldo?.",
      "Parental Guidance earned early-career recognition."
    ],
    "Jennifer Lawrence": [
      "Academy Award winner for Silver Linings Playbook.",
      "Known globally for Katniss Everdeen in The Hunger Games.",
      "Major franchise work includes Mystique in X-Men."
    ],
    "Ben Affleck": [
      "Academy Award winner for Good Will Hunting as co-writer.",
      "Academy Award winner as producer of Argo.",
      "Known as actor, director, writer, and producer."
    ],
    "Denzel Washington": [
      "Academy Award winner for Glory and Training Day.",
      "Tony Award winner for Fences on Broadway.",
      "Known for major dramatic, action, stage, and directing work."
    ],
    "Zendaya": [
      "Primetime Emmy winner for Euphoria.",
      "Known for Rue Bennett, Chani, MJ, and Tashi Donaldson.",
      "Major work spans television, superhero films, sci-fi, and sports drama."
    ],
    "Ryan Reynolds": [
      "Known for Wade Wilson / Deadpool across multiple films.",
      "Actor, producer, and writer on Deadpool projects.",
      "Major comedy/action work includes Free Guy and The Proposal."
    ],
    "Brad Pitt": [
      "Academy Award winner for Once Upon a Time in Hollywood.",
      "Producer through Plan B Entertainment.",
      "Known for Fight Club, Ocean's films, Se7en, Moneyball, and Troy."
    ],
    "Angelina Jolie": [
      "Academy Award winner for Girl, Interrupted.",
      "Known for Lara Croft, Maleficent, Lisa Rowe, and Jane Smith.",
      "Also has filmmaker, producer, and humanitarian credentials."
    ],
    "Will Smith": [
      "Academy Award winner for King Richard.",
      "Known for The Fresh Prince of Bel-Air, Men in Black, Ali, and Bad Boys.",
      "Actor, producer, and musician."
    ],
    "Tom Cruise": [
      "Major global film star known for Top Gun and Mission: Impossible.",
      "Long-running producer/star of the Mission: Impossible franchise.",
      "Known for action, drama, comedy-drama, and blockbuster franchise work."
    ]
  };

  function dedupeCredits(rows) {
    const seen = new Set();

    return (rows || []).filter(row => {
      const key = vClean(row.title + "::" + row.year + "::" + row.role + "::" + row.creditType);

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function getRealCreditsForActor(actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return [];

    const direct = realFullBodyCreditsBatch1[actor.name];

    if (direct) {
      return dedupeCredits(direct.map(row => ({
        actorName: actor.name,
        title: row.title,
        year: row.year || "",
        type: row.type || "Movie / TV Credit",
        role: row.role || "Role / job verified from public credit source",
        creditType: row.creditType || "Actor",
        source: row.source || "Public credit reference",
        isRealCredit: true
      })));
    }

    /*
      For actors not researched yet, do NOT create fake expansion rows.
      We show existing real knownFor rows only and clearly say a researched batch is not loaded yet.
    */
    return (actor.knownFor || []).map((item, index) => {
      const title = Array.isArray(item) ? item[0] : String(item || "");
      const year = Array.isArray(item) ? item[1] : "";

      return {
        actorName: actor.name,
        title: title,
        year: year || "",
        type: "Known real credit",
        role: Array.isArray(actor.characters) && actor.characters[index]
          ? actor.characters[index]
          : "Role to verify from public source",
        creditType: "Actor",
        source: "Existing VEDB knownFor data — needs researched full-body batch",
        isRealCredit: true,
        needsBatch: true
      };
    });
  }

  function applyRealCreditDataToActors() {
    vActors().forEach(actor => {
      const credits = realFullBodyCreditsBatch1[actor.name];

      if (credits) {
        actor.fullBodyWork = credits.map(row => ({
          title: row.title,
          year: row.year,
          type: row.type,
          role: row.role,
          creditType: row.creditType,
          source: row.source
        }));

        actor.credentials = realCredentialHighlightsBatch1[actor.name] || actor.credentials || [];
        actor.awards = actor.awards || [];
      }

      actor.signatureRoles = actor.signatureRoles || {};

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || "");

        const matchingCredit = (credits || []).find(row => vClean(row.title) === vClean(title));

        if (matchingCredit && matchingCredit.role) {
          actor.signatureRoles[title] = matchingCredit.role;
        } else if (Array.isArray(actor.characters) && actor.characters[index]) {
          actor.signatureRoles[title] = actor.characters[index];
        }
      });
    });
  }

  function getSignatureRole(actor, titleName, index) {
    if (!actor) return "Role to verify";

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    return "Role to verify";
  }

  function buildSignatureWorkReal(actor) {
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
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows.map((item, index) => {
          const title = Array.isArray(item) ? item[0] : String(item || "");
          const year = Array.isArray(item) ? item[1] : "";
          const role = getSignatureRole(actor, title, index);

          return `
            <article class="info-card">
              <h3>${vSafe(title)}</h3>
              <p><b>Year:</b> ${vSafe(year || "Year to verify")}</p>
              <p><b>Character / Role:</b> ${vSafe(role)}</p>
              <p><b>Actor:</b> ${vSafe(actor.name)}</p>
            </article>
          `;
        }).join("")}
      </div>

      ${typeof sourceBlock === "function" ? sourceBlock(actor) : ""}
    `;
  }

  function buildCredentialBlock(actor) {
    const credentials = realCredentialHighlightsBatch1[actor.name] || actor.credentials || [];

    if (!credentials.length) return "";

    return `
      <div class="full-body-box">
        <h3>Real Credentials</h3>
        <div class="full-body-grid">
          ${credentials.map(item => `
            <article class="full-body-card">
              <h3>Credential</h3>
              <p>${vSafe(item)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function buildRealCreditCard(row) {
    return `
      <article class="full-body-card">
        <h3>${vSafe(row.title)}</h3>

        <span class="full-body-pill">${vSafe(row.type || "Credit")}</span>
        ${row.year ? `<span class="full-body-pill">${vSafe(row.year)}</span>` : ""}
        <span class="full-body-pill">${vSafe(row.creditType || "Actor")}</span>

        <p><b>Role / Credit:</b> ${vSafe(row.role || "Role to verify")}</p>
        <p><b>Source inside VEDB:</b> ${vSafe(row.source || "Public credit reference")}</p>

        ${
          row.needsBatch
            ? `<p class="full-body-note">
                This is an existing real VEDB knownFor credit. Full researched credit batch not loaded for this actor yet.
              </p>`
            : `<p class="full-body-note">
                Real researched Full Body credit loaded in VEDB Batch 1.
              </p>`
        }

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${vSafe(row.actorName || "")}"
          data-title="${vSafe(row.title || "")}"
          data-year="${vSafe(row.year || "")}"
          data-type="${vSafe(row.type || "Movie")}"
          data-role="${vSafe(row.role || "Cast member")}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  window.getFullBodyOfWorkForActor = function (actorName) {
    return getRealCreditsForActor(actorName);
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = vFindActor(actorName);

    if (!actor) {
      return `
        <div class="full-body-box">
          <h3>Actor not found</h3>
          <p>VEDB could not find this actor in the actor list.</p>
        </div>
      `;
    }

    const rows = getRealCreditsForActor(actor.name);
    const isBatch1Actor = !!realFullBodyCreditsBatch1[actor.name];
    const signatureCount = Array.isArray(actor.knownFor) ? actor.knownFor.length : 0;

    return `
      <div class="full-body-box">
        <h3>Signature Work vs. Full Body of Work</h3>

        <p class="full-body-note">
          <b>Signature Work</b> is the short highlight list.
          <b>Full Body of Work</b> is the larger researched credit list.
        </p>

        ${
          isBatch1Actor
            ? `<p class="full-body-note">
                Real researched Full Body credits are loaded for this actor in Batch 1.
              </p>`
            : `<p class="full-body-note">
                This actor has not received the researched Full Body batch yet.
                VEDB is showing existing real knownFor credits only — no fake filler rows.
              </p>`
        }

        <p>
          <span class="full-body-pill">${signatureCount} Signature Work titles</span>
          <span class="full-body-pill">${rows.length} Full Body credits showing</span>
          ${
            rows.length > signatureCount
              ? `<span class="full-body-pill">Full Body is larger</span>`
              : `<span class="full-body-pill">Needs researched batch</span>`
          }
        </p>
      </div>

      ${buildCredentialBlock(actor)}

      <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

      <div class="full-body-grid">
        ${rows.map(buildRealCreditCard).join("")}
      </div>

      ${
        typeof buildAddFullBodyCreditForm === "function"
          ? buildAddFullBodyCreditForm(actor.name)
          : ""
      }
    `;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  const oldActorSection = typeof actorSection === "function" ? actorSection : null;

  if (oldActorSection) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === "filmography" &&
        typeof currentMode !== "undefined" &&
        currentMode === "actor" &&
        typeof currentEntity !== "undefined" &&
        currentEntity
      ) {
        return buildSignatureWorkReal(currentEntity);
      }

      return oldActorSection(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  applyRealCreditDataToActors();

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById("sectionPage");

  if (page && page.style.display !== "none") {
    if (page.textContent.includes("Signature Work") && typeof openSectionPage === "function") {
      setTimeout(function () {
        openSectionPage("filmography");
      }, 100);
    }

    if (page.textContent.includes("VEDB FULL BODY OF WORK") && typeof openFullBodyOfWorkPage === "function") {
      setTimeout(function () {
        let actorName = "";

        try {
          actorName =
            typeof currentEntity !== "undefined" && currentEntity && currentEntity.name
              ? currentEntity.name
              : "";
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log("VEDB Real Full Body Credits Batch 1 loaded.");
})();
/* VEDB REAL FULL BODY CREDITS — BATCH 2
   Paste at the VERY BOTTOM of the JS box.

   Batch 2 actors:
   - Chris Evans
   - Chris Hemsworth
   - Mark Ruffalo
   - Chris Pratt
   - Brie Larson
   - Elizabeth Olsen
   - Benedict Cumberbatch
   - Hugh Jackman
   - Ryan Gosling
   - Margot Robbie

   This adds real researched Full Body credits for Batch 2.
   It preserves Batch 1 and does NOT touch startup or Full Page memory.
*/

(function () {
  if (window.vedbRealFullBodyBatch2Installed) return;
  window.vedbRealFullBodyBatch2Installed = true;

  const oldGetFullBodyOfWorkForActor =
    typeof getFullBodyOfWorkForActor === "function" ? getFullBodyOfWorkForActor : null;

  const oldBuildFullBodyOfWorkContent =
    typeof buildFullBodyOfWorkContent === "function" ? buildFullBodyOfWorkContent : null;

  const oldActorSection =
    typeof actorSection === "function" ? actorSection : null;

  function vSafe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function vClean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function vActors() {
    return typeof actors !== "undefined" && Array.isArray(actors) ? actors : [];
  }

  function vFindActor(actorName) {
    const wanted = vClean(actorName);

    return vActors().find(actor => vClean(actor.name) === wanted) ||
      vActors().find(actor => {
        const name = vClean(actor.name);
        return name.includes(wanted) || wanted.includes(name);
      }) ||
      null;
  }

  const realFullBodyCreditsBatch2 = {
    "Chris Evans": [
      { title: "Opposite Sex", year: 2000, type: "TV Series", role: "Cary Baston", creditType: "Actor", source: "Public filmography reference" },
      { title: "Not Another Teen Movie", year: 2001, type: "Movie", role: "Jake Wyler", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Perfect Score", year: 2004, type: "Movie", role: "Kyle Curtis", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cellular", year: 2004, type: "Movie", role: "Ryan Hewitt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Fantastic Four", year: 2005, type: "Movie", role: "Johnny Storm / Human Torch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sunshine", year: 2007, type: "Movie", role: "Mace", creditType: "Actor", source: "Public filmography reference" },
      { title: "Fantastic Four: Rise of the Silver Surfer", year: 2007, type: "Movie", role: "Johnny Storm / Human Torch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Scott Pilgrim vs. the World", year: 2010, type: "Movie", role: "Lucas Lee", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: The First Avenger", year: 2011, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Avengers", year: 2012, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "Snowpiercer", year: 2013, type: "Movie", role: "Curtis Everett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: The Winter Soldier", year: 2014, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Age of Ultron", year: 2015, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: Civil War", year: 2016, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Endgame", year: 2019, type: "Movie", role: "Steve Rogers / Captain America", creditType: "Actor", source: "Public filmography reference" },
      { title: "Knives Out", year: 2019, type: "Movie", role: "Ransom Drysdale", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Gray Man", year: 2022, type: "Movie", role: "Lloyd Hansen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lightyear", year: 2022, type: "Movie", role: "Buzz Lightyear", creditType: "Voice Actor", source: "Public filmography reference" }
    ],

    "Chris Hemsworth": [
      { title: "Home and Away", year: 2004, type: "TV Series", role: "Kim Hyde", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Trek", year: 2009, type: "Movie", role: "George Kirk", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Perfect Getaway", year: 2009, type: "Movie", role: "Kale Garrity", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ca$h", year: 2010, type: "Movie", role: "Sam Phelan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor", year: 2011, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Cabin in the Woods", year: 2012, type: "Movie", role: "Curt Vaughan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Avengers", year: 2012, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Snow White and the Huntsman", year: 2012, type: "Movie", role: "Eric the Huntsman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rush", year: 2013, type: "Movie", role: "James Hunt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: The Dark World", year: 2013, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Age of Ultron", year: 2015, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "In the Heart of the Sea", year: 2015, type: "Movie", role: "Owen Chase", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ghostbusters", year: 2016, type: "Movie", role: "Kevin Beckman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: Ragnarok", year: 2017, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Endgame", year: 2019, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Men in Black: International", year: 2019, type: "Movie", role: "Agent H", creditType: "Actor", source: "Public filmography reference" },
      { title: "Extraction", year: 2020, type: "Movie", role: "Tyler Rake", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Thor: Love and Thunder", year: 2022, type: "Movie", role: "Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Extraction 2", year: 2023, type: "Movie", role: "Tyler Rake", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Furiosa: A Mad Max Saga", year: 2024, type: "Movie", role: "Dementus", creditType: "Actor", source: "Public filmography reference" },
      { title: "Transformers One", year: 2024, type: "Movie", role: "Orion Pax / Optimus Prime", creditType: "Voice Actor", source: "Public filmography reference" }
    ],

    "Mark Ruffalo": [
      { title: "You Can Count on Me", year: 2000, type: "Movie", role: "Terry Prescott", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Last Castle", year: 2001, type: "Movie", role: "Yates", creditType: "Actor", source: "Public filmography reference" },
      { title: "XX/XY", year: 2002, type: "Movie", role: "Coles", creditType: "Actor", source: "Public filmography reference" },
      { title: "13 Going on 30", year: 2004, type: "Movie", role: "Matt Flamhaff", creditType: "Actor", source: "Public filmography reference" },
      { title: "Collateral", year: 2004, type: "Movie", role: "Ray Fanning", creditType: "Actor", source: "Public filmography reference" },
      { title: "Eternal Sunshine of the Spotless Mind", year: 2004, type: "Movie", role: "Stan Fink", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zodiac", year: 2007, type: "Movie", role: "Dave Toschi", creditType: "Actor", source: "Public filmography reference" },
      { title: "Shutter Island", year: 2010, type: "Movie", role: "Chuck Aule", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Kids Are All Right", year: 2010, type: "Movie", role: "Paul Hatfield", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Avengers", year: 2012, type: "Movie", role: "Bruce Banner / Hulk", creditType: "Actor", source: "Public filmography reference" },
      { title: "Now You See Me", year: 2013, type: "Movie", role: "Dylan Rhodes", creditType: "Actor", source: "Public filmography reference" },
      { title: "Begin Again", year: 2013, type: "Movie", role: "Dan Mulligan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Normal Heart", year: 2014, type: "TV Movie", role: "Ned Weeks", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Avengers: Age of Ultron", year: 2015, type: "Movie", role: "Bruce Banner / Hulk", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spotlight", year: 2015, type: "Movie", role: "Michael Rezendes", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: Ragnarok", year: 2017, type: "Movie", role: "Bruce Banner / Hulk", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Bruce Banner / Hulk", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Endgame", year: 2019, type: "Movie", role: "Bruce Banner / Hulk", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dark Waters", year: 2019, type: "Movie", role: "Robert Bilott", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "I Know This Much Is True", year: 2020, type: "TV Miniseries", role: "Dominick Birdsey / Thomas Birdsey", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Poor Things", year: 2023, type: "Movie", role: "Duncan Wedderburn", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Chris Pratt": [
      { title: "Everwood", year: 2002, type: "TV Series", role: "Bright Abbott", creditType: "Actor", source: "Public filmography reference" },
      { title: "The O.C.", year: 2006, type: "TV Series", role: "Ché Cook", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wanted", year: 2008, type: "Movie", role: "Barry", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bride Wars", year: 2009, type: "Movie", role: "Fletcher Flemson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Parks and Recreation", year: 2009, type: "TV Series", role: "Andy Dwyer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Moneyball", year: 2011, type: "Movie", role: "Scott Hatteberg", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zero Dark Thirty", year: 2012, type: "Movie", role: "Justin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Her", year: 2013, type: "Movie", role: "Paul", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Lego Movie", year: 2014, type: "Movie", role: "Emmet Brickowski", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Guardians of the Galaxy", year: 2014, type: "Movie", role: "Peter Quill / Star-Lord", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jurassic World", year: 2015, type: "Movie", role: "Owen Grady", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Magnificent Seven", year: 2016, type: "Movie", role: "Josh Faraday", creditType: "Actor", source: "Public filmography reference" },
      { title: "Passengers", year: 2016, type: "Movie", role: "Jim Preston", creditType: "Actor", source: "Public filmography reference" },
      { title: "Guardians of the Galaxy Vol. 2", year: 2017, type: "Movie", role: "Peter Quill / Star-Lord", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Peter Quill / Star-Lord", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jurassic World: Fallen Kingdom", year: 2018, type: "Movie", role: "Owen Grady", creditType: "Actor", source: "Public filmography reference" },
      { title: "Onward", year: 2020, type: "Movie", role: "Barley Lightfoot", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Tomorrow War", year: 2021, type: "Movie", role: "Dan Forester", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Jurassic World Dominion", year: 2022, type: "Movie", role: "Owen Grady", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Super Mario Bros. Movie", year: 2023, type: "Movie", role: "Mario", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Guardians of the Galaxy Vol. 3", year: 2023, type: "Movie", role: "Peter Quill / Star-Lord", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Garfield Movie", year: 2024, type: "Movie", role: "Garfield", creditType: "Voice Actor", source: "Public filmography reference" }
    ],

    "Brie Larson": [
      { title: "Raising Dad", year: 2001, type: "TV Series", role: "Emily Stewart", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sleepover", year: 2004, type: "Movie", role: "Liz Daniels", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hoot", year: 2006, type: "Movie", role: "Beatrice Leep", creditType: "Actor", source: "Public filmography reference" },
      { title: "United States of Tara", year: 2009, type: "TV Series", role: "Kate Gregson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Scott Pilgrim vs. the World", year: 2010, type: "Movie", role: "Envy Adams", creditType: "Actor", source: "Public filmography reference" },
      { title: "21 Jump Street", year: 2012, type: "Movie", role: "Molly Tracey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Short Term 12", year: 2013, type: "Movie", role: "Grace Howard", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Spectacular Now", year: 2013, type: "Movie", role: "Cassidy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Trainwreck", year: 2015, type: "Movie", role: "Kim", creditType: "Actor", source: "Public filmography reference" },
      { title: "Room", year: 2015, type: "Movie", role: "Joy Newsome", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kong: Skull Island", year: 2017, type: "Movie", role: "Mason Weaver", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Glass Castle", year: 2017, type: "Movie", role: "Jeannette Walls", creditType: "Actor", source: "Public filmography reference" },
      { title: "Unicorn Store", year: 2017, type: "Movie", role: "Kit", creditType: "Actor / Director / Producer", source: "Public filmography reference" },
      { title: "Captain Marvel", year: 2019, type: "Movie", role: "Carol Danvers / Captain Marvel", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Endgame", year: 2019, type: "Movie", role: "Carol Danvers / Captain Marvel", creditType: "Actor", source: "Public filmography reference" },
      { title: "Just Mercy", year: 2019, type: "Movie", role: "Eva Ansley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Fast X", year: 2023, type: "Movie", role: "Tess", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Marvels", year: 2023, type: "Movie", role: "Carol Danvers / Captain Marvel", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lessons in Chemistry", year: 2023, type: "TV Miniseries", role: "Elizabeth Zott", creditType: "Actor / Executive Producer", source: "Public filmography reference" }
    ],

    "Elizabeth Olsen": [
      { title: "Martha Marcy May Marlene", year: 2011, type: "Movie", role: "Martha", creditType: "Actor", source: "Public filmography reference" },
      { title: "Silent House", year: 2011, type: "Movie", role: "Sarah", creditType: "Actor", source: "Public filmography reference" },
      { title: "Liberal Arts", year: 2012, type: "Movie", role: "Zibby", creditType: "Actor", source: "Public filmography reference" },
      { title: "Oldboy", year: 2013, type: "Movie", role: "Marie Sebastian", creditType: "Actor", source: "Public filmography reference" },
      { title: "Godzilla", year: 2014, type: "Movie", role: "Elle Brody", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: The Winter Soldier", year: 2014, type: "Movie", role: "Wanda Maximoff", creditType: "Actor / Cameo", source: "Public filmography reference" },
      { title: "Avengers: Age of Ultron", year: 2015, type: "Movie", role: "Wanda Maximoff / Scarlet Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "I Saw the Light", year: 2015, type: "Movie", role: "Audrey Williams", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: Civil War", year: 2016, type: "Movie", role: "Wanda Maximoff / Scarlet Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wind River", year: 2017, type: "Movie", role: "Jane Banner", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ingrid Goes West", year: 2017, type: "Movie", role: "Taylor Sloane", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Wanda Maximoff / Scarlet Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Endgame", year: 2019, type: "Movie", role: "Wanda Maximoff / Scarlet Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sorry for Your Loss", year: 2018, type: "TV Series", role: "Leigh Shaw", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "WandaVision", year: 2021, type: "TV Miniseries", role: "Wanda Maximoff / Scarlet Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Doctor Strange in the Multiverse of Madness", year: 2022, type: "Movie", role: "Wanda Maximoff / Scarlet Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love & Death", year: 2023, type: "TV Miniseries", role: "Candy Montgomery", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "His Three Daughters", year: 2023, type: "Movie", role: "Christina", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Benedict Cumberbatch": [
      { title: "Hawking", year: 2004, type: "TV Movie", role: "Stephen Hawking", creditType: "Actor", source: "Public performance reference" },
      { title: "Atonement", year: 2007, type: "Movie", role: "Paul Marshall", creditType: "Actor", source: "Public performance reference" },
      { title: "The Last Enemy", year: 2008, type: "TV Miniseries", role: "Stephen Ezard", creditType: "Actor", source: "Public performance reference" },
      { title: "Sherlock", year: 2010, type: "TV Series", role: "Sherlock Holmes", creditType: "Actor", source: "Public performance reference" },
      { title: "War Horse", year: 2011, type: "Movie", role: "Major Jamie Stewart", creditType: "Actor", source: "Public performance reference" },
      { title: "Tinker Tailor Soldier Spy", year: 2011, type: "Movie", role: "Peter Guillam", creditType: "Actor", source: "Public performance reference" },
      { title: "The Hobbit: An Unexpected Journey", year: 2012, type: "Movie", role: "Necromancer", creditType: "Voice / Motion Capture Actor", source: "Public performance reference" },
      { title: "Star Trek Into Darkness", year: 2013, type: "Movie", role: "Khan Noonien Singh / John Harrison", creditType: "Actor", source: "Public performance reference" },
      { title: "12 Years a Slave", year: 2013, type: "Movie", role: "William Ford", creditType: "Actor", source: "Public performance reference" },
      { title: "The Fifth Estate", year: 2013, type: "Movie", role: "Julian Assange", creditType: "Actor", source: "Public performance reference" },
      { title: "The Imitation Game", year: 2014, type: "Movie", role: "Alan Turing", creditType: "Actor", source: "Public performance reference" },
      { title: "The Hobbit: The Desolation of Smaug", year: 2013, type: "Movie", role: "Smaug / Necromancer", creditType: "Voice / Motion Capture Actor", source: "Public performance reference" },
      { title: "Black Mass", year: 2015, type: "Movie", role: "Billy Bulger", creditType: "Actor", source: "Public performance reference" },
      { title: "Doctor Strange", year: 2016, type: "Movie", role: "Stephen Strange / Doctor Strange", creditType: "Actor", source: "Public performance reference" },
      { title: "Thor: Ragnarok", year: 2017, type: "Movie", role: "Stephen Strange / Doctor Strange", creditType: "Actor / Cameo", source: "Public performance reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Stephen Strange / Doctor Strange", creditType: "Actor", source: "Public performance reference" },
      { title: "The Current War", year: 2017, type: "Movie", role: "Thomas Edison", creditType: "Actor", source: "Public performance reference" },
      { title: "Avengers: Endgame", year: 2019, type: "Movie", role: "Stephen Strange / Doctor Strange", creditType: "Actor", source: "Public performance reference" },
      { title: "The Courier", year: 2020, type: "Movie", role: "Greville Wynne", creditType: "Actor / Producer", source: "Public performance reference" },
      { title: "Spider-Man: No Way Home", year: 2021, type: "Movie", role: "Stephen Strange / Doctor Strange", creditType: "Actor", source: "Public performance reference" },
      { title: "The Power of the Dog", year: 2021, type: "Movie", role: "Phil Burbank", creditType: "Actor", source: "Public performance reference" },
      { title: "Doctor Strange in the Multiverse of Madness", year: 2022, type: "Movie", role: "Stephen Strange / Doctor Strange", creditType: "Actor", source: "Public performance reference" }
    ],

    "Hugh Jackman": [
      { title: "Correlli", year: 1995, type: "TV Series", role: "Kevin Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Paperback Hero", year: 1999, type: "Movie", role: "Jack Willis", creditType: "Actor", source: "Public filmography reference" },
      { title: "Erskineville Kings", year: 1999, type: "Movie", role: "Wace", creditType: "Actor", source: "Public filmography reference" },
      { title: "X-Men", year: 2000, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Swordfish", year: 2001, type: "Movie", role: "Stanley Jobson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kate & Leopold", year: 2001, type: "Movie", role: "Leopold", creditType: "Actor", source: "Public filmography reference" },
      { title: "X2", year: 2003, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Van Helsing", year: 2004, type: "Movie", role: "Gabriel Van Helsing", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Prestige", year: 2006, type: "Movie", role: "Robert Angier", creditType: "Actor", source: "Public filmography reference" },
      { title: "X-Men: The Last Stand", year: 2006, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Flushed Away", year: 2006, type: "Movie", role: "Roddy St. James", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Australia", year: 2008, type: "Movie", role: "The Drover", creditType: "Actor", source: "Public filmography reference" },
      { title: "X-Men Origins: Wolverine", year: 2009, type: "Movie", role: "Logan / Wolverine", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Real Steel", year: 2011, type: "Movie", role: "Charlie Kenton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Les Misérables", year: 2012, type: "Movie", role: "Jean Valjean", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Wolverine", year: 2013, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Prisoners", year: 2013, type: "Movie", role: "Keller Dover", creditType: "Actor", source: "Public filmography reference" },
      { title: "X-Men: Days of Future Past", year: 2014, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pan", year: 2015, type: "Movie", role: "Blackbeard", creditType: "Actor", source: "Public filmography reference" },
      { title: "Eddie the Eagle", year: 2016, type: "Movie", role: "Bronson Peary", creditType: "Actor", source: "Public filmography reference" },
      { title: "Logan", year: 2017, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Greatest Showman", year: 2017, type: "Movie", role: "P. T. Barnum", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Bad Education", year: 2019, type: "TV Movie", role: "Frank Tassone", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Son", year: 2022, type: "Movie", role: "Peter Miller", creditType: "Actor", source: "Public filmography reference" },
      { title: "Deadpool & Wolverine", year: 2024, type: "Movie", role: "Logan / Wolverine", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Ryan Gosling": [
      { title: "The Mickey Mouse Club", year: 1993, type: "TV Series", role: "Himself / Performer", creditType: "Performer", source: "Public filmography reference" },
      { title: "Breaker High", year: 1997, type: "TV Series", role: "Sean Hanlon", creditType: "Actor", source: "Public filmography reference" },
      { title: "Young Hercules", year: 1998, type: "TV Series", role: "Hercules", creditType: "Actor", source: "Public filmography reference" },
      { title: "Remember the Titans", year: 2000, type: "Movie", role: "Alan Bosley", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Believer", year: 2001, type: "Movie", role: "Danny Balint", creditType: "Actor", source: "Public filmography reference" },
      { title: "Murder by Numbers", year: 2002, type: "Movie", role: "Richard Haywood", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Notebook", year: 2004, type: "Movie", role: "Noah Calhoun", creditType: "Actor", source: "Public filmography reference" },
      { title: "Half Nelson", year: 2006, type: "Movie", role: "Dan Dunne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lars and the Real Girl", year: 2007, type: "Movie", role: "Lars Lindstrom", creditType: "Actor", source: "Public filmography reference" },
      { title: "Blue Valentine", year: 2010, type: "Movie", role: "Dean Pereira", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Crazy, Stupid, Love", year: 2011, type: "Movie", role: "Jacob Palmer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Drive", year: 2011, type: "Movie", role: "Driver", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Ides of March", year: 2011, type: "Movie", role: "Stephen Meyers", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Place Beyond the Pines", year: 2012, type: "Movie", role: "Luke Glanton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Only God Forgives", year: 2013, type: "Movie", role: "Julian", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Big Short", year: 2015, type: "Movie", role: "Jared Vennett", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Nice Guys", year: 2016, type: "Movie", role: "Holland March", creditType: "Actor", source: "Public filmography reference" },
      { title: "La La Land", year: 2016, type: "Movie", role: "Sebastian Wilder", creditType: "Actor", source: "Public filmography reference" },
      { title: "Blade Runner 2049", year: 2017, type: "Movie", role: "Officer K", creditType: "Actor", source: "Public filmography reference" },
      { title: "First Man", year: 2018, type: "Movie", role: "Neil Armstrong", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Gray Man", year: 2022, type: "Movie", role: "Court Gentry / Sierra Six", creditType: "Actor", source: "Public filmography reference" },
      { title: "Barbie", year: 2023, type: "Movie", role: "Ken", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Fall Guy", year: 2024, type: "Movie", role: "Colt Seavers", creditType: "Actor / Producer", source: "Public filmography reference" }
    ],

    "Margot Robbie": [
      { title: "Neighbours", year: 2008, type: "TV Series", role: "Donna Freedman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pan Am", year: 2011, type: "TV Series", role: "Laura Cameron", creditType: "Actor", source: "Public filmography reference" },
      { title: "About Time", year: 2013, type: "Movie", role: "Charlotte", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Wolf of Wall Street", year: 2013, type: "Movie", role: "Naomi Lapaglia", creditType: "Actor", source: "Public filmography reference" },
      { title: "Focus", year: 2015, type: "Movie", role: "Jess Barrett", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Big Short", year: 2015, type: "Movie", role: "Herself", creditType: "Cameo / Performer", source: "Public filmography reference" },
      { title: "The Legend of Tarzan", year: 2016, type: "Movie", role: "Jane Porter", creditType: "Actor", source: "Public filmography reference" },
      { title: "Suicide Squad", year: 2016, type: "Movie", role: "Harley Quinn", creditType: "Actor", source: "Public filmography reference" },
      { title: "I, Tonya", year: 2017, type: "Movie", role: "Tonya Harding", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Mary Queen of Scots", year: 2018, type: "Movie", role: "Queen Elizabeth I", creditType: "Actor", source: "Public filmography reference" },
      { title: "Once Upon a Time in Hollywood", year: 2019, type: "Movie", role: "Sharon Tate", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bombshell", year: 2019, type: "Movie", role: "Kayla Pospisil", creditType: "Actor", source: "Public filmography reference" },
      { title: "Birds of Prey", year: 2020, type: "Movie", role: "Harley Quinn", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Promising Young Woman", year: 2020, type: "Movie", role: "Producer", creditType: "Producer", source: "Public filmography reference" },
      { title: "The Suicide Squad", year: 2021, type: "Movie", role: "Harley Quinn", creditType: "Actor", source: "Public filmography reference" },
      { title: "Amsterdam", year: 2022, type: "Movie", role: "Valerie Voze", creditType: "Actor", source: "Public filmography reference" },
      { title: "Babylon", year: 2022, type: "Movie", role: "Nellie LaRoy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Asteroid City", year: 2023, type: "Movie", role: "The Actress", creditType: "Actor", source: "Public filmography reference" },
      { title: "Barbie", year: 2023, type: "Movie", role: "Barbie", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Saltburn", year: 2023, type: "Movie", role: "Producer", creditType: "Producer", source: "Public filmography reference" },
      { title: "My Old Ass", year: 2024, type: "Movie", role: "Producer", creditType: "Producer", source: "Public filmography reference" }
    ]
  };

  const realCredentialHighlightsBatch2 = {
    "Chris Evans": [
      "Known globally for Steve Rogers / Captain America in the Marvel Cinematic Universe.",
      "Expanded beyond superhero work with Snowpiercer, Knives Out, and Lightyear.",
      "Also known for Johnny Storm / Human Torch in the Fantastic Four films."
    ],
    "Chris Hemsworth": [
      "Known globally for Thor in the Marvel Cinematic Universe.",
      "Expanded action work includes Extraction and Extraction 2 as actor/producer.",
      "Major non-Marvel roles include Rush, In the Heart of the Sea, and Furiosa."
    ],
    "Mark Ruffalo": [
      "Known for Bruce Banner / Hulk in the Marvel Cinematic Universe.",
      "Award-recognized dramatic work includes Spotlight, The Normal Heart, and I Know This Much Is True.",
      "Also known for Zodiac, Dark Waters, Poor Things, and independent film work."
    ],
    "Chris Pratt": [
      "Known for Andy Dwyer in Parks and Recreation.",
      "Known globally for Peter Quill / Star-Lord in Guardians of the Galaxy.",
      "Major franchise work includes Jurassic World, The Lego Movie, Super Mario Bros., and Garfield."
    ],
    "Brie Larson": [
      "Academy Award winner for Room.",
      "Known globally for Carol Danvers / Captain Marvel.",
      "Also works as actor, director, producer, and executive producer."
    ],
    "Elizabeth Olsen": [
      "Known for Wanda Maximoff / Scarlet Witch across Marvel film and television.",
      "WandaVision earned major Emmy and Golden Globe attention.",
      "Also known for Martha Marcy May Marlene, Wind River, and Love & Death."
    ],
    "Benedict Cumberbatch": [
      "Known globally for Sherlock Holmes and Stephen Strange / Doctor Strange.",
      "Award-recognized work includes The Imitation Game and The Power of the Dog.",
      "Also known for voice/motion-capture roles including Smaug."
    ],
    "Hugh Jackman": [
      "Known globally for Logan / Wolverine across the X-Men and Marvel films.",
      "Golden Globe-winning musical work includes Les Misérables.",
      "Also known for The Greatest Showman, The Prestige, Prisoners, and stage work."
    ],
    "Ryan Gosling": [
      "Known for dramatic, comedy, musical, and action roles.",
      "Signature credits include The Notebook, Drive, La La Land, Blade Runner 2049, Barbie, and The Fall Guy.",
      "Also works as producer/director on selected projects."
    ],
    "Margot Robbie": [
      "Known globally for Harley Quinn and Barbie.",
      "Oscar-nominated acting work includes I, Tonya and Bombshell.",
      "Producer through LuckyChap Entertainment, with major producer credits including Barbie and Promising Young Woman."
    ]
  };

  function actorIsBatch2(actorName) {
    return !!realFullBodyCreditsBatch2[actorName];
  }

  function dedupeCredits(rows) {
    const seen = new Set();

    return (rows || []).filter(row => {
      const key = vClean(row.title + "::" + row.year + "::" + row.role + "::" + row.creditType);

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function getBatch2CreditsForActor(actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return [];

    const rows = realFullBodyCreditsBatch2[actor.name];

    if (!rows) {
      return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actor.name) : [];
    }

    return dedupeCredits(rows.map(row => ({
      actorName: actor.name,
      title: row.title,
      year: row.year || "",
      type: row.type || "Movie / TV Credit",
      role: row.role || "Role / job verified from public credit source",
      creditType: row.creditType || "Actor",
      source: row.source || "Public credit reference",
      isRealCredit: true,
      batch: "Batch 2"
    })));
  }

  function applyBatch2DataToActors() {
    vActors().forEach(actor => {
      const credits = realFullBodyCreditsBatch2[actor.name];

      if (!credits) return;

      actor.fullBodyWork = credits.map(row => ({
        title: row.title,
        year: row.year,
        type: row.type,
        role: row.role,
        creditType: row.creditType,
        source: row.source
      }));

      actor.credentials = realCredentialHighlightsBatch2[actor.name] || actor.credentials || [];
      actor.signatureRoles = actor.signatureRoles || {};

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || "");
        const matchingCredit = credits.find(row => vClean(row.title) === vClean(title));

        if (matchingCredit && matchingCredit.role) {
          actor.signatureRoles[title] = matchingCredit.role;
        } else if (Array.isArray(actor.characters) && actor.characters[index]) {
          actor.signatureRoles[title] = actor.characters[index];
        }
      });
    });
  }

  function getSignatureRole(actor, titleName, index) {
    if (!actor) return "Role to verify";

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    const credits = realFullBodyCreditsBatch2[actor.name] || [];
    const match = credits.find(row => vClean(row.title) === vClean(titleName));

    if (match && match.role) return match.role;

    return "Role to verify";
  }

  function buildSignatureWorkBatch2(actor) {
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
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows.map((item, index) => {
          const title = Array.isArray(item) ? item[0] : String(item || "");
          const year = Array.isArray(item) ? item[1] : "";
          const role = getSignatureRole(actor, title, index);

          return `
            <article class="info-card">
              <h3>${vSafe(title)}</h3>
              <p><b>Year:</b> ${vSafe(year || "Year to verify")}</p>
              <p><b>Character / Role:</b> ${vSafe(role)}</p>
              <p><b>Actor:</b> ${vSafe(actor.name)}</p>
            </article>
          `;
        }).join("")}
      </div>

      ${typeof sourceBlock === "function" ? sourceBlock(actor) : ""}
    `;
  }

  function buildCredentialBlock(actor) {
    const credentials = realCredentialHighlightsBatch2[actor.name] || actor.credentials || [];

    if (!credentials.length) return "";

    return `
      <div class="full-body-box">
        <h3>Real Credentials</h3>
        <div class="full-body-grid">
          ${credentials.map(item => `
            <article class="full-body-card">
              <h3>Credential</h3>
              <p>${vSafe(item)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function buildRealCreditCard(row) {
    return `
      <article class="full-body-card">
        <h3>${vSafe(row.title)}</h3>

        <span class="full-body-pill">${vSafe(row.type || "Credit")}</span>
        ${row.year ? `<span class="full-body-pill">${vSafe(row.year)}</span>` : ""}
        <span class="full-body-pill">${vSafe(row.creditType || "Actor")}</span>

        <p><b>Role / Credit:</b> ${vSafe(row.role || "Role to verify")}</p>
        <p><b>Source inside VEDB:</b> ${vSafe(row.source || "Public credit reference")}</p>

        <p class="full-body-note">
          Real researched Full Body credit loaded in VEDB Batch 2.
        </p>

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${vSafe(row.actorName || "")}"
          data-title="${vSafe(row.title || "")}"
          data-year="${vSafe(row.year || "")}"
          data-type="${vSafe(row.type || "Movie")}"
          data-role="${vSafe(row.role || "Cast member")}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  window.getFullBodyOfWorkForActor = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch2(actor.name)) {
      return getBatch2CreditsForActor(actor.name);
    }

    return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actorName) : [];
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch2(actor.name)) {
      const rows = getBatch2CreditsForActor(actor.name);
      const signatureCount = Array.isArray(actor.knownFor) ? actor.knownFor.length : 0;

      return `
        <div class="full-body-box">
          <h3>Signature Work vs. Full Body of Work</h3>

          <p class="full-body-note">
            <b>Signature Work</b> is the short highlight list.
            <b>Full Body of Work</b> is the larger researched credit list.
          </p>

          <p class="full-body-note">
            Real researched Full Body credits are loaded for this actor in Batch 2.
          </p>

          <p>
            <span class="full-body-pill">${signatureCount} Signature Work titles</span>
            <span class="full-body-pill">${rows.length} Full Body credits showing</span>
            <span class="full-body-pill">Full Body is larger</span>
          </p>
        </div>

        ${buildCredentialBlock(actor)}

        <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

        <div class="full-body-grid">
          ${rows.map(buildRealCreditCard).join("")}
        </div>

        ${
          typeof buildAddFullBodyCreditForm === "function"
            ? buildAddFullBodyCreditForm(actor.name)
            : ""
        }
      `;
    }

    return oldBuildFullBodyOfWorkContent
      ? oldBuildFullBodyOfWorkContent(actorName)
      : `<p>Full Body data not loaded yet.</p>`;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  window.actorSection = function (sectionId) {
    if (
      sectionId === "filmography" &&
      typeof currentMode !== "undefined" &&
      currentMode === "actor" &&
      typeof currentEntity !== "undefined" &&
      currentEntity &&
      actorIsBatch2(currentEntity.name)
    ) {
      return buildSignatureWorkBatch2(currentEntity);
    }

    return oldActorSection ? oldActorSection(sectionId) : "";
  };

  try {
    actorSection = window.actorSection;
  } catch (error) {}

  applyBatch2DataToActors();

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById("sectionPage");

  if (page && page.style.display !== "none") {
    if (page.textContent.includes("Signature Work") && typeof openSectionPage === "function") {
      setTimeout(function () {
        openSectionPage("filmography");
      }, 100);
    }

    if (page.textContent.includes("VEDB FULL BODY OF WORK") && typeof openFullBodyOfWorkPage === "function") {
      setTimeout(function () {
        let actorName = "";

        try {
          actorName =
            typeof currentEntity !== "undefined" && currentEntity && currentEntity.name
              ? currentEntity.name
              : "";
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log("VEDB Real Full Body Credits Batch 2 loaded.");
})();
/* VEDB REAL FULL BODY CREDITS — BATCH 3
   Paste at the VERY BOTTOM of the JS box.

   Batch 3 actors:
   - Emma Stone
   - Natalie Portman
   - Anne Hathaway
   - Sandra Bullock
   - George Clooney
   - Matt Damon
   - Christian Bale
   - Joaquin Phoenix
   - Heath Ledger
   - Daniel Day-Lewis

   This adds real researched Full Body credits for Batch 3.
   It preserves Batch 1 and Batch 2 and does NOT touch startup or Full Page memory.
*/

(function () {
  if (window.vedbRealFullBodyBatch3Installed) return;
  window.vedbRealFullBodyBatch3Installed = true;

  const oldGetFullBodyOfWorkForActor =
    typeof getFullBodyOfWorkForActor === "function" ? getFullBodyOfWorkForActor : null;

  const oldBuildFullBodyOfWorkContent =
    typeof buildFullBodyOfWorkContent === "function" ? buildFullBodyOfWorkContent : null;

  const oldActorSection =
    typeof actorSection === "function" ? actorSection : null;

  function vSafe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function vClean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function vActors() {
    return typeof actors !== "undefined" && Array.isArray(actors) ? actors : [];
  }

  function vFindActor(actorName) {
    const wanted = vClean(actorName);

    return vActors().find(actor => vClean(actor.name) === wanted) ||
      vActors().find(actor => {
        const name = vClean(actor.name);
        return name.includes(wanted) || wanted.includes(name);
      }) ||
      null;
  }

  const realFullBodyCreditsBatch3 = {
    "Emma Stone": [
      { title: "The New Partridge Family", year: 2005, type: "TV Pilot", role: "Laurie Partridge", creditType: "Actor", source: "Public filmography reference" },
      { title: "Medium", year: 2005, type: "TV Series", role: "Cynthia McCallister", creditType: "Actor", source: "Public filmography reference" },
      { title: "Superbad", year: 2007, type: "Movie", role: "Jules", creditType: "Actor", source: "Public filmography reference" },
      { title: "The House Bunny", year: 2008, type: "Movie", role: "Natalie Sandler", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ghosts of Girlfriends Past", year: 2009, type: "Movie", role: "Allison Vandermeersh", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zombieland", year: 2009, type: "Movie", role: "Wichita / Krista", creditType: "Actor", source: "Public filmography reference" },
      { title: "Easy A", year: 2010, type: "Movie", role: "Olive Penderghast", creditType: "Actor", source: "Public filmography reference" },
      { title: "Crazy, Stupid, Love", year: 2011, type: "Movie", role: "Hannah Weaver", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Help", year: 2011, type: "Movie", role: "Eugenia “Skeeter” Phelan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Amazing Spider-Man", year: 2012, type: "Movie", role: "Gwen Stacy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gangster Squad", year: 2013, type: "Movie", role: "Grace Faraday", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Croods", year: 2013, type: "Movie", role: "Eep Crood", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Amazing Spider-Man 2", year: 2014, type: "Movie", role: "Gwen Stacy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Birdman", year: 2014, type: "Movie", role: "Sam Thomson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Irrational Man", year: 2015, type: "Movie", role: "Jill Pollard", creditType: "Actor", source: "Public filmography reference" },
      { title: "La La Land", year: 2016, type: "Movie", role: "Mia Dolan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Battle of the Sexes", year: 2017, type: "Movie", role: "Billie Jean King", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Favourite", year: 2018, type: "Movie", role: "Abigail Masham", creditType: "Actor", source: "Public filmography reference" },
      { title: "Maniac", year: 2018, type: "TV Miniseries", role: "Annie Landsberg", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Zombieland: Double Tap", year: 2019, type: "Movie", role: "Wichita / Krista", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cruella", year: 2021, type: "Movie", role: "Estella / Cruella", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Poor Things", year: 2023, type: "Movie", role: "Bella Baxter", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Curse", year: 2023, type: "TV Series", role: "Whitney Siegel", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Kinds of Kindness", year: 2024, type: "Movie", role: "Rita / Liz / Emily", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Natalie Portman": [
      { title: "Léon: The Professional", year: 1994, type: "Movie", role: "Mathilda Lando", creditType: "Actor", source: "Public filmography reference" },
      { title: "Heat", year: 1995, type: "Movie", role: "Lauren Gustafson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Beautiful Girls", year: 1996, type: "Movie", role: "Marty", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mars Attacks!", year: 1996, type: "Movie", role: "Taffy Dale", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode I – The Phantom Menace", year: 1999, type: "Movie", role: "Padmé Amidala", creditType: "Actor", source: "Public filmography reference" },
      { title: "Anywhere but Here", year: 1999, type: "Movie", role: "Ann August", creditType: "Actor", source: "Public filmography reference" },
      { title: "Where the Heart Is", year: 2000, type: "Movie", role: "Novalee Nation", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode II – Attack of the Clones", year: 2002, type: "Movie", role: "Padmé Amidala", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cold Mountain", year: 2003, type: "Movie", role: "Sara", creditType: "Actor", source: "Public filmography reference" },
      { title: "Garden State", year: 2004, type: "Movie", role: "Samantha", creditType: "Actor", source: "Public filmography reference" },
      { title: "Closer", year: 2004, type: "Movie", role: "Alice Ayres / Jane Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode III – Revenge of the Sith", year: 2005, type: "Movie", role: "Padmé Amidala", creditType: "Actor", source: "Public filmography reference" },
      { title: "V for Vendetta", year: 2005, type: "Movie", role: "Evey Hammond", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Other Boleyn Girl", year: 2008, type: "Movie", role: "Anne Boleyn", creditType: "Actor", source: "Public filmography reference" },
      { title: "Brothers", year: 2009, type: "Movie", role: "Grace Cahill", creditType: "Actor", source: "Public filmography reference" },
      { title: "Black Swan", year: 2010, type: "Movie", role: "Nina Sayers", creditType: "Actor", source: "Public filmography reference" },
      { title: "No Strings Attached", year: 2011, type: "Movie", role: "Emma Kurtzman", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Thor", year: 2011, type: "Movie", role: "Jane Foster", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: The Dark World", year: 2013, type: "Movie", role: "Jane Foster", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Tale of Love and Darkness", year: 2015, type: "Movie", role: "Fania Oz", creditType: "Actor / Director / Writer", source: "Public filmography reference" },
      { title: "Jackie", year: 2016, type: "Movie", role: "Jacqueline Kennedy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Annihilation", year: 2018, type: "Movie", role: "Lena", creditType: "Actor", source: "Public filmography reference" },
      { title: "Vox Lux", year: 2018, type: "Movie", role: "Celeste Montgomery", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lucy in the Sky", year: 2019, type: "Movie", role: "Lucy Cola", creditType: "Actor", source: "Public filmography reference" },
      { title: "What If...?", year: 2021, type: "TV Series", role: "Jane Foster", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Thor: Love and Thunder", year: 2022, type: "Movie", role: "Jane Foster / Mighty Thor", creditType: "Actor", source: "Public filmography reference" },
      { title: "May December", year: 2023, type: "Movie", role: "Elizabeth Berry", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Lady in the Lake", year: 2024, type: "TV Miniseries", role: "Maddie Schwartz", creditType: "Actor / Executive Producer", source: "Public filmography reference" }
    ],

    "Anne Hathaway": [
      { title: "Get Real", year: 1999, type: "TV Series", role: "Meghan Green", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Princess Diaries", year: 2001, type: "Movie", role: "Mia Thermopolis", creditType: "Actor", source: "Public filmography reference" },
      { title: "Nicholas Nickleby", year: 2002, type: "Movie", role: "Madeline Bray", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ella Enchanted", year: 2004, type: "Movie", role: "Ella of Frell", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Princess Diaries 2: Royal Engagement", year: 2004, type: "Movie", role: "Mia Thermopolis", creditType: "Actor", source: "Public filmography reference" },
      { title: "Brokeback Mountain", year: 2005, type: "Movie", role: "Lureen Newsome Twist", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Devil Wears Prada", year: 2006, type: "Movie", role: "Andy Sachs", creditType: "Actor", source: "Public filmography reference" },
      { title: "Becoming Jane", year: 2007, type: "Movie", role: "Jane Austen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rachel Getting Married", year: 2008, type: "Movie", role: "Kym Buchman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bride Wars", year: 2009, type: "Movie", role: "Emma Allen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Alice in Wonderland", year: 2010, type: "Movie", role: "White Queen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love & Other Drugs", year: 2010, type: "Movie", role: "Maggie Murdock", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rio", year: 2011, type: "Movie", role: "Jewel", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "One Day", year: 2011, type: "Movie", role: "Emma Morley", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dark Knight Rises", year: 2012, type: "Movie", role: "Selina Kyle", creditType: "Actor", source: "Public filmography reference" },
      { title: "Les Misérables", year: 2012, type: "Movie", role: "Fantine", creditType: "Actor", source: "Public filmography reference" },
      { title: "Interstellar", year: 2014, type: "Movie", role: "Amelia Brand", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Intern", year: 2015, type: "Movie", role: "Jules Ostin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's 8", year: 2018, type: "Movie", role: "Daphne Kluger", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hustle", year: 2019, type: "Movie", role: "Josephine Chesterfield", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Witches", year: 2020, type: "Movie", role: "Grand High Witch", creditType: "Actor", source: "Public filmography reference" },
      { title: "WeCrashed", year: 2022, type: "TV Miniseries", role: "Rebekah Neumann", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Eileen", year: 2023, type: "Movie", role: "Rebecca St. John", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Idea of You", year: 2024, type: "Movie", role: "Solène Marchand", creditType: "Actor / Producer", source: "Public filmography reference" }
    ],

    "Sandra Bullock": [
      { title: "Demolition Man", year: 1993, type: "Movie", role: "Lenina Huxley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Speed", year: 1994, type: "Movie", role: "Annie Porter", creditType: "Actor", source: "Public filmography reference" },
      { title: "While You Were Sleeping", year: 1995, type: "Movie", role: "Lucy Moderatz", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Net", year: 1995, type: "Movie", role: "Angela Bennett", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Time to Kill", year: 1996, type: "Movie", role: "Ellen Roark", creditType: "Actor", source: "Public filmography reference" },
      { title: "Speed 2: Cruise Control", year: 1997, type: "Movie", role: "Annie Porter", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hope Floats", year: 1998, type: "Movie", role: "Birdee Pruitt", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Practical Magic", year: 1998, type: "Movie", role: "Sally Owens", creditType: "Actor", source: "Public filmography reference" },
      { title: "28 Days", year: 2000, type: "Movie", role: "Gwen Cummings", creditType: "Actor", source: "Public filmography reference" },
      { title: "Miss Congeniality", year: 2000, type: "Movie", role: "Gracie Hart", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Two Weeks Notice", year: 2002, type: "Movie", role: "Lucy Kelson", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Crash", year: 2004, type: "Movie", role: "Jean Cabot", creditType: "Actor", source: "Public filmography reference" },
      { title: "Miss Congeniality 2: Armed and Fabulous", year: 2005, type: "Movie", role: "Gracie Hart", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Lake House", year: 2006, type: "Movie", role: "Kate Forster", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Proposal", year: 2009, type: "Movie", role: "Margaret Tate", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Blind Side", year: 2009, type: "Movie", role: "Leigh Anne Tuohy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Extremely Loud & Incredibly Close", year: 2011, type: "Movie", role: "Linda Schell", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Heat", year: 2013, type: "Movie", role: "Sarah Ashburn", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gravity", year: 2013, type: "Movie", role: "Ryan Stone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Minions", year: 2015, type: "Movie", role: "Scarlet Overkill", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Our Brand Is Crisis", year: 2015, type: "Movie", role: "Jane Bodine", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Ocean's 8", year: 2018, type: "Movie", role: "Debbie Ocean", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bird Box", year: 2018, type: "Movie", role: "Malorie Hayes", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Unforgivable", year: 2021, type: "Movie", role: "Ruth Slater", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Lost City", year: 2022, type: "Movie", role: "Loretta Sage", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Bullet Train", year: 2022, type: "Movie", role: "Maria Beetle", creditType: "Actor", source: "Public filmography reference" }
    ],

    "George Clooney": [
      { title: "ER", year: 1994, type: "TV Series", role: "Dr. Doug Ross", creditType: "Actor", source: "Public filmography reference" },
      { title: "From Dusk till Dawn", year: 1996, type: "Movie", role: "Seth Gecko", creditType: "Actor", source: "Public filmography reference" },
      { title: "One Fine Day", year: 1996, type: "Movie", role: "Jack Taylor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Batman & Robin", year: 1997, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Out of Sight", year: 1998, type: "Movie", role: "Jack Foley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Three Kings", year: 1999, type: "Movie", role: "Archie Gates", creditType: "Actor", source: "Public filmography reference" },
      { title: "O Brother, Where Art Thou?", year: 2000, type: "Movie", role: "Ulysses Everett McGill", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Perfect Storm", year: 2000, type: "Movie", role: "Billy Tyne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's Eleven", year: 2001, type: "Movie", role: "Danny Ocean", creditType: "Actor", source: "Public filmography reference" },
      { title: "Confessions of a Dangerous Mind", year: 2002, type: "Movie", role: "Jim Byrd", creditType: "Actor / Director", source: "Public filmography reference" },
      { title: "Intolerable Cruelty", year: 2003, type: "Movie", role: "Miles Massey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's Twelve", year: 2004, type: "Movie", role: "Danny Ocean", creditType: "Actor", source: "Public filmography reference" },
      { title: "Syriana", year: 2005, type: "Movie", role: "Bob Barnes", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Good Night, and Good Luck", year: 2005, type: "Movie", role: "Fred Friendly", creditType: "Actor / Director / Writer / Producer", source: "Public filmography reference" },
      { title: "Michael Clayton", year: 2007, type: "Movie", role: "Michael Clayton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Leatherheads", year: 2008, type: "Movie", role: "Dodge Connelly", creditType: "Actor / Director / Producer", source: "Public filmography reference" },
      { title: "Burn After Reading", year: 2008, type: "Movie", role: "Harry Pfarrer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Fantastic Mr. Fox", year: 2009, type: "Movie", role: "Mr. Fox", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Up in the Air", year: 2009, type: "Movie", role: "Ryan Bingham", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Ides of March", year: 2011, type: "Movie", role: "Governor Mike Morris", creditType: "Actor / Director / Writer / Producer", source: "Public filmography reference" },
      { title: "The Descendants", year: 2011, type: "Movie", role: "Matt King", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gravity", year: 2013, type: "Movie", role: "Matt Kowalski", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Monuments Men", year: 2014, type: "Movie", role: "Frank Stokes", creditType: "Actor / Director / Writer / Producer", source: "Public filmography reference" },
      { title: "Tomorrowland", year: 2015, type: "Movie", role: "Frank Walker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hail, Caesar!", year: 2016, type: "Movie", role: "Baird Whitlock", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Midnight Sky", year: 2020, type: "Movie", role: "Augustine Lofthouse", creditType: "Actor / Director / Producer", source: "Public filmography reference" },
      { title: "Ticket to Paradise", year: 2022, type: "Movie", role: "David Cotton", creditType: "Actor / Producer", source: "Public filmography reference" }
    ],

    "Matt Damon": [
      { title: "Mystic Pizza", year: 1988, type: "Movie", role: "Steamer Windsor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Courage Under Fire", year: 1996, type: "Movie", role: "Specialist Ilario", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Rainmaker", year: 1997, type: "Movie", role: "Rudy Baylor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Good Will Hunting", year: 1997, type: "Movie", role: "Will Hunting", creditType: "Actor / Writer", source: "Public filmography reference" },
      { title: "Saving Private Ryan", year: 1998, type: "Movie", role: "Private James Francis Ryan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rounders", year: 1998, type: "Movie", role: "Mike McDermott", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Talented Mr. Ripley", year: 1999, type: "Movie", role: "Tom Ripley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dogma", year: 1999, type: "Movie", role: "Loki", creditType: "Actor", source: "Public filmography reference" },
      { title: "Titan A.E.", year: 2000, type: "Movie", role: "Cale Tucker", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Ocean's Eleven", year: 2001, type: "Movie", role: "Linus Caldwell", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Bourne Identity", year: 2002, type: "Movie", role: "Jason Bourne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spirit: Stallion of the Cimarron", year: 2002, type: "Movie", role: "Spirit", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Bourne Supremacy", year: 2004, type: "Movie", role: "Jason Bourne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's Twelve", year: 2004, type: "Movie", role: "Linus Caldwell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Syriana", year: 2005, type: "Movie", role: "Bryan Woodman", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Departed", year: 2006, type: "Movie", role: "Colin Sullivan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Good Shepherd", year: 2006, type: "Movie", role: "Edward Wilson", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Bourne Ultimatum", year: 2007, type: "Movie", role: "Jason Bourne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's Thirteen", year: 2007, type: "Movie", role: "Linus Caldwell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Invictus", year: 2009, type: "Movie", role: "Francois Pienaar", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Informant!", year: 2009, type: "Movie", role: "Mark Whitacre", creditType: "Actor", source: "Public filmography reference" },
      { title: "True Grit", year: 2010, type: "Movie", role: "LaBoeuf", creditType: "Actor", source: "Public filmography reference" },
      { title: "Contagion", year: 2011, type: "Movie", role: "Mitch Emhoff", creditType: "Actor", source: "Public filmography reference" },
      { title: "We Bought a Zoo", year: 2011, type: "Movie", role: "Benjamin Mee", creditType: "Actor", source: "Public filmography reference" },
      { title: "Elysium", year: 2013, type: "Movie", role: "Max Da Costa", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Martian", year: 2015, type: "Movie", role: "Mark Watney", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jason Bourne", year: 2016, type: "Movie", role: "Jason Bourne", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Ford v Ferrari", year: 2019, type: "Movie", role: "Carroll Shelby", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Last Duel", year: 2021, type: "Movie", role: "Jean de Carrouges", creditType: "Actor / Writer / Producer", source: "Public filmography reference" },
      { title: "Stillwater", year: 2021, type: "Movie", role: "Bill Baker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Air", year: 2023, type: "Movie", role: "Sonny Vaccaro", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Oppenheimer", year: 2023, type: "Movie", role: "Leslie Groves", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Christian Bale": [
      { title: "Empire of the Sun", year: 1987, type: "Movie", role: "Jim Graham", creditType: "Actor", source: "Public filmography reference" },
      { title: "Henry V", year: 1989, type: "Movie", role: "Robin the Luggage-Boy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Newsies", year: 1992, type: "Movie", role: "Jack Kelly", creditType: "Actor", source: "Public filmography reference" },
      { title: "Swing Kids", year: 1993, type: "Movie", role: "Thomas Berger", creditType: "Actor", source: "Public filmography reference" },
      { title: "Little Women", year: 1994, type: "Movie", role: "Theodore “Laurie” Laurence", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pocahontas", year: 1995, type: "Movie", role: "Thomas", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Portrait of a Lady", year: 1996, type: "Movie", role: "Edward Rosier", creditType: "Actor", source: "Public filmography reference" },
      { title: "Velvet Goldmine", year: 1998, type: "Movie", role: "Arthur Stuart", creditType: "Actor", source: "Public filmography reference" },
      { title: "American Psycho", year: 2000, type: "Movie", role: "Patrick Bateman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Shaft", year: 2000, type: "Movie", role: "Walter Wade Jr.", creditType: "Actor", source: "Public filmography reference" },
      { title: "Equilibrium", year: 2002, type: "Movie", role: "John Preston", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Machinist", year: 2004, type: "Movie", role: "Trevor Reznik", creditType: "Actor", source: "Public filmography reference" },
      { title: "Batman Begins", year: 2005, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Prestige", year: 2006, type: "Movie", role: "Alfred Borden", creditType: "Actor", source: "Public filmography reference" },
      { title: "3:10 to Yuma", year: 2007, type: "Movie", role: "Dan Evans", creditType: "Actor", source: "Public filmography reference" },
      { title: "I'm Not There", year: 2007, type: "Movie", role: "Jack Rollins / Pastor John", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dark Knight", year: 2008, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Terminator Salvation", year: 2009, type: "Movie", role: "John Connor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Public Enemies", year: 2009, type: "Movie", role: "Melvin Purvis", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Fighter", year: 2010, type: "Movie", role: "Dicky Eklund", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dark Knight Rises", year: 2012, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "American Hustle", year: 2013, type: "Movie", role: "Irving Rosenfeld", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Big Short", year: 2015, type: "Movie", role: "Michael Burry", creditType: "Actor", source: "Public filmography reference" },
      { title: "Vice", year: 2018, type: "Movie", role: "Dick Cheney", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Ford v Ferrari", year: 2019, type: "Movie", role: "Ken Miles", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: Love and Thunder", year: 2022, type: "Movie", role: "Gorr the God Butcher", creditType: "Actor", source: "Public filmography reference" },
      { title: "Amsterdam", year: 2022, type: "Movie", role: "Burt Berendsen", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Pale Blue Eye", year: 2022, type: "Movie", role: "Augustus Landor", creditType: "Actor / Producer", source: "Public filmography reference" }
    ],

    "Joaquin Phoenix": [
      { title: "SpaceCamp", year: 1986, type: "Movie", role: "Max Graham", creditType: "Actor", source: "Public filmography reference" },
      { title: "Parenthood", year: 1989, type: "Movie", role: "Garry Buckman-Lampkin", creditType: "Actor", source: "Public filmography reference" },
      { title: "To Die For", year: 1995, type: "Movie", role: "Jimmy Emmett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Inventing the Abbotts", year: 1997, type: "Movie", role: "Doug Holt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Clay Pigeons", year: 1998, type: "Movie", role: "Clay Bidwell", creditType: "Actor", source: "Public filmography reference" },
      { title: "8mm", year: 1999, type: "Movie", role: "Max California", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gladiator", year: 2000, type: "Movie", role: "Commodus", creditType: "Actor", source: "Public filmography reference" },
      { title: "Quills", year: 2000, type: "Movie", role: "Abbé du Coulmier", creditType: "Actor", source: "Public filmography reference" },
      { title: "Buffalo Soldiers", year: 2001, type: "Movie", role: "Ray Elwood", creditType: "Actor", source: "Public filmography reference" },
      { title: "Signs", year: 2002, type: "Movie", role: "Merrill Hess", creditType: "Actor", source: "Public filmography reference" },
      { title: "Brother Bear", year: 2003, type: "Movie", role: "Kenai", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Village", year: 2004, type: "Movie", role: "Lucius Hunt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hotel Rwanda", year: 2004, type: "Movie", role: "Jack Daglish", creditType: "Actor", source: "Public filmography reference" },
      { title: "Walk the Line", year: 2005, type: "Movie", role: "Johnny Cash", creditType: "Actor", source: "Public filmography reference" },
      { title: "We Own the Night", year: 2007, type: "Movie", role: "Bobby Green", creditType: "Actor", source: "Public filmography reference" },
      { title: "Two Lovers", year: 2008, type: "Movie", role: "Leonard Kraditor", creditType: "Actor", source: "Public filmography reference" },
      { title: "I'm Still Here", year: 2010, type: "Movie", role: "Himself / Fictionalized version", creditType: "Actor / Writer / Producer", source: "Public filmography reference" },
      { title: "The Master", year: 2012, type: "Movie", role: "Freddie Quell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Her", year: 2013, type: "Movie", role: "Theodore Twombly", creditType: "Actor", source: "Public filmography reference" },
      { title: "Inherent Vice", year: 2014, type: "Movie", role: "Larry “Doc” Sportello", creditType: "Actor", source: "Public filmography reference" },
      { title: "Irrational Man", year: 2015, type: "Movie", role: "Abe Lucas", creditType: "Actor", source: "Public filmography reference" },
      { title: "You Were Never Really Here", year: 2017, type: "Movie", role: "Joe", creditType: "Actor", source: "Public filmography reference" },
      { title: "Don't Worry, He Won't Get Far on Foot", year: 2018, type: "Movie", role: "John Callahan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Joker", year: 2019, type: "Movie", role: "Arthur Fleck / Joker", creditType: "Actor", source: "Public filmography reference" },
      { title: "C'mon C'mon", year: 2021, type: "Movie", role: "Johnny", creditType: "Actor", source: "Public filmography reference" },
      { title: "Beau Is Afraid", year: 2023, type: "Movie", role: "Beau Wassermann", creditType: "Actor", source: "Public filmography reference" },
      { title: "Napoleon", year: 2023, type: "Movie", role: "Napoleon Bonaparte", creditType: "Actor", source: "Public filmography reference" },
      { title: "Joker: Folie à Deux", year: 2024, type: "Movie", role: "Arthur Fleck / Joker", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Heath Ledger": [
      { title: "Sweat", year: 1996, type: "TV Series", role: "Snowy Bowles", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Home and Away", year: 1997, type: "TV Series", role: "Scott Irwin", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Roar", year: 1997, type: "TV Series", role: "Conor", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Blackrock", year: 1997, type: "Movie", role: "Toby Ackland", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "10 Things I Hate About You", year: 1999, type: "Movie", role: "Patrick Verona", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Two Hands", year: 1999, type: "Movie", role: "Jimmy", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Patriot", year: 2000, type: "Movie", role: "Gabriel Martin", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "A Knight's Tale", year: 2001, type: "Movie", role: "William Thatcher", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Monster's Ball", year: 2001, type: "Movie", role: "Sonny Grotowski", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Four Feathers", year: 2002, type: "Movie", role: "Harry Faversham", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Ned Kelly", year: 2003, type: "Movie", role: "Ned Kelly", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Order", year: 2003, type: "Movie", role: "Alex Bernier", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Lords of Dogtown", year: 2005, type: "Movie", role: "Skip Engblom", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Brothers Grimm", year: 2005, type: "Movie", role: "Jacob Grimm", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Brokeback Mountain", year: 2005, type: "Movie", role: "Ennis Del Mar", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Casanova", year: 2005, type: "Movie", role: "Giacomo Casanova", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Candy", year: 2006, type: "Movie", role: "Dan", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "I'm Not There", year: 2007, type: "Movie", role: "Robbie Clark", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Dark Knight", year: 2008, type: "Movie", role: "The Joker", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Imaginarium of Doctor Parnassus", year: 2009, type: "Movie", role: "Tony", creditType: "Actor", source: "Public profile / filmography reference" }
    ],

    "Daniel Day-Lewis": [
      { title: "Sunday Bloody Sunday", year: 1971, type: "Movie", role: "Child vandal", creditType: "Actor / Uncredited", source: "Public profile / filmography reference" },
      { title: "Gandhi", year: 1982, type: "Movie", role: "Colin", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Bounty", year: 1984, type: "Movie", role: "John Fryer", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "My Beautiful Laundrette", year: 1985, type: "Movie", role: "Johnny Burfoot", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "A Room with a View", year: 1985, type: "Movie", role: "Cecil Vyse", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Unbearable Lightness of Being", year: 1988, type: "Movie", role: "Tomas", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "My Left Foot", year: 1989, type: "Movie", role: "Christy Brown", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Last of the Mohicans", year: 1992, type: "Movie", role: "Hawkeye / Nathaniel Poe", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Age of Innocence", year: 1993, type: "Movie", role: "Newland Archer", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "In the Name of the Father", year: 1993, type: "Movie", role: "Gerry Conlon", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Crucible", year: 1996, type: "Movie", role: "John Proctor", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Boxer", year: 1997, type: "Movie", role: "Danny Flynn", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Gangs of New York", year: 2002, type: "Movie", role: "Bill the Butcher", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "The Ballad of Jack and Rose", year: 2005, type: "Movie", role: "Jack Slavin", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "There Will Be Blood", year: 2007, type: "Movie", role: "Daniel Plainview", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Nine", year: 2009, type: "Movie", role: "Guido Contini", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Lincoln", year: 2012, type: "Movie", role: "Abraham Lincoln", creditType: "Actor", source: "Public profile / filmography reference" },
      { title: "Phantom Thread", year: 2017, type: "Movie", role: "Reynolds Woodcock", creditType: "Actor", source: "Public profile / filmography reference" }
    ]
  };

  const realCredentialHighlightsBatch3 = {
    "Emma Stone": [
      "Academy Award winner for La La Land.",
      "Academy Award winner for Poor Things.",
      "Known for comedy, drama, musical, fantasy, and producer work."
    ],
    "Natalie Portman": [
      "Academy Award winner for Black Swan.",
      "Known for Padmé Amidala in Star Wars and Jane Foster in Marvel films.",
      "Actor, filmmaker, producer, and narrator."
    ],
    "Anne Hathaway": [
      "Academy Award winner for Les Misérables.",
      "Known for The Princess Diaries, The Devil Wears Prada, The Dark Knight Rises, and Interstellar.",
      "Works across comedy, drama, musical, fantasy, and producer credits."
    ],
    "Sandra Bullock": [
      "Academy Award winner for The Blind Side.",
      "Known for Speed, Miss Congeniality, Gravity, The Proposal, and Bird Box.",
      "Actor and producer with major comedy, drama, and thriller credits."
    ],
    "George Clooney": [
      "Academy Award winner for Syriana.",
      "Academy Award-winning producer for Argo.",
      "Known as actor, director, writer, and producer."
    ],
    "Matt Damon": [
      "Academy Award winner for Good Will Hunting as co-writer.",
      "Known for Jason Bourne, Good Will Hunting, The Martian, Ford v Ferrari, and Oppenheimer.",
      "Actor, writer, producer, and executive producer."
    ],
    "Christian Bale": [
      "Academy Award winner for The Fighter.",
      "Known for Batman, American Psycho, Ford v Ferrari, Vice, and The Big Short.",
      "Known for intense physical and dramatic transformations."
    ],
    "Joaquin Phoenix": [
      "Academy Award winner for Joker.",
      "Known for Gladiator, Walk the Line, Her, The Master, and Joker.",
      "Known for intense dramatic and character-driven performances."
    ],
    "Heath Ledger": [
      "Academy Award winner for The Dark Knight.",
      "Known for 10 Things I Hate About You, A Knight's Tale, Brokeback Mountain, and The Dark Knight.",
      "Legacy actor with major dramatic, romantic, and villain roles."
    ],
    "Daniel Day-Lewis": [
      "Three-time Academy Award winner.",
      "Known for My Left Foot, There Will Be Blood, Lincoln, Gangs of New York, and Phantom Thread.",
      "Widely recognized for immersive character work."
    ]
  };

  function actorIsBatch3(actorName) {
    return !!realFullBodyCreditsBatch3[actorName];
  }

  function dedupeCredits(rows) {
    const seen = new Set();

    return (rows || []).filter(row => {
      const key = vClean(row.title + "::" + row.year + "::" + row.role + "::" + row.creditType);

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function getBatch3CreditsForActor(actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return [];

    const rows = realFullBodyCreditsBatch3[actor.name];

    if (!rows) {
      return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actor.name) : [];
    }

    return dedupeCredits(rows.map(row => ({
      actorName: actor.name,
      title: row.title,
      year: row.year || "",
      type: row.type || "Movie / TV Credit",
      role: row.role || "Role / job verified from public credit source",
      creditType: row.creditType || "Actor",
      source: row.source || "Public credit reference",
      isRealCredit: true,
      batch: "Batch 3"
    })));
  }

  function applyBatch3DataToActors() {
    vActors().forEach(actor => {
      const credits = realFullBodyCreditsBatch3[actor.name];

      if (!credits) return;

      actor.fullBodyWork = credits.map(row => ({
        title: row.title,
        year: row.year,
        type: row.type,
        role: row.role,
        creditType: row.creditType,
        source: row.source
      }));

      actor.credentials = realCredentialHighlightsBatch3[actor.name] || actor.credentials || [];
      actor.signatureRoles = actor.signatureRoles || {};

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || "");
        const matchingCredit = credits.find(row => vClean(row.title) === vClean(title));

        if (matchingCredit && matchingCredit.role) {
          actor.signatureRoles[title] = matchingCredit.role;
        } else if (Array.isArray(actor.characters) && actor.characters[index]) {
          actor.signatureRoles[title] = actor.characters[index];
        }
      });
    });
  }

  function getSignatureRole(actor, titleName, index) {
    if (!actor) return "Role to verify";

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    const credits = realFullBodyCreditsBatch3[actor.name] || [];
    const match = credits.find(row => vClean(row.title) === vClean(titleName));

    if (match && match.role) return match.role;

    return "Role to verify";
  }

  function buildSignatureWorkBatch3(actor) {
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
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows.map((item, index) => {
          const title = Array.isArray(item) ? item[0] : String(item || "");
          const year = Array.isArray(item) ? item[1] : "";
          const role = getSignatureRole(actor, title, index);

          return `
            <article class="info-card">
              <h3>${vSafe(title)}</h3>
              <p><b>Year:</b> ${vSafe(year || "Year to verify")}</p>
              <p><b>Character / Role:</b> ${vSafe(role)}</p>
              <p><b>Actor:</b> ${vSafe(actor.name)}</p>
            </article>
          `;
        }).join("")}
      </div>

      ${typeof sourceBlock === "function" ? sourceBlock(actor) : ""}
    `;
  }

  function buildCredentialBlock(actor) {
    const credentials = realCredentialHighlightsBatch3[actor.name] || actor.credentials || [];

    if (!credentials.length) return "";

    return `
      <div class="full-body-box">
        <h3>Real Credentials</h3>
        <div class="full-body-grid">
          ${credentials.map(item => `
            <article class="full-body-card">
              <h3>Credential</h3>
              <p>${vSafe(item)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function buildRealCreditCard(row) {
    return `
      <article class="full-body-card">
        <h3>${vSafe(row.title)}</h3>

        <span class="full-body-pill">${vSafe(row.type || "Credit")}</span>
        ${row.year ? `<span class="full-body-pill">${vSafe(row.year)}</span>` : ""}
        <span class="full-body-pill">${vSafe(row.creditType || "Actor")}</span>

        <p><b>Role / Credit:</b> ${vSafe(row.role || "Role to verify")}</p>
        <p><b>Source inside VEDB:</b> ${vSafe(row.source || "Public credit reference")}</p>

        <p class="full-body-note">
          Real researched Full Body credit loaded in VEDB Batch 3.
        </p>

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${vSafe(row.actorName || "")}"
          data-title="${vSafe(row.title || "")}"
          data-year="${vSafe(row.year || "")}"
          data-type="${vSafe(row.type || "Movie")}"
          data-role="${vSafe(row.role || "Cast member")}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  window.getFullBodyOfWorkForActor = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch3(actor.name)) {
      return getBatch3CreditsForActor(actor.name);
    }

    return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actorName) : [];
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch3(actor.name)) {
      const rows = getBatch3CreditsForActor(actor.name);
      const signatureCount = Array.isArray(actor.knownFor) ? actor.knownFor.length : 0;

      return `
        <div class="full-body-box">
          <h3>Signature Work vs. Full Body of Work</h3>

          <p class="full-body-note">
            <b>Signature Work</b> is the short highlight list.
            <b>Full Body of Work</b> is the larger researched credit list.
          </p>

          <p class="full-body-note">
            Real researched Full Body credits are loaded for this actor in Batch 3.
          </p>

          <p>
            <span class="full-body-pill">${signatureCount} Signature Work titles</span>
            <span class="full-body-pill">${rows.length} Full Body credits showing</span>
            <span class="full-body-pill">Full Body is larger</span>
          </p>
        </div>

        ${buildCredentialBlock(actor)}

        <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

        <div class="full-body-grid">
          ${rows.map(buildRealCreditCard).join("")}
        </div>

        ${
          typeof buildAddFullBodyCreditForm === "function"
            ? buildAddFullBodyCreditForm(actor.name)
            : ""
        }
      `;
    }

    return oldBuildFullBodyOfWorkContent
      ? oldBuildFullBodyOfWorkContent(actorName)
      : `<p>Full Body data not loaded yet.</p>`;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  window.actorSection = function (sectionId) {
    if (
      sectionId === "filmography" &&
      typeof currentMode !== "undefined" &&
      currentMode === "actor" &&
      typeof currentEntity !== "undefined" &&
      currentEntity &&
      actorIsBatch3(currentEntity.name)
    ) {
      return buildSignatureWorkBatch3(currentEntity);
    }

    return oldActorSection ? oldActorSection(sectionId) : "";
  };

  try {
    actorSection = window.actorSection;
  } catch (error) {}

  applyBatch3DataToActors();

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById("sectionPage");

  if (page && page.style.display !== "none") {
    if (page.textContent.includes("Signature Work") && typeof openSectionPage === "function") {
      setTimeout(function () {
        openSectionPage("filmography");
      }, 100);
    }

    if (page.textContent.includes("VEDB FULL BODY OF WORK") && typeof openFullBodyOfWorkPage === "function") {
      setTimeout(function () {
        let actorName = "";

        try {
          actorName =
            typeof currentEntity !== "undefined" && currentEntity && currentEntity.name
              ? currentEntity.name
              : "";
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log("VEDB Real Full Body Credits Batch 3 loaded.");
})();

/* VEDB REAL FULL BODY CREDITS — BATCH 4
   Paste at the VERY BOTTOM of the JS box.

   Batch 4 actors:
   - Al Pacino
   - Robert De Niro
   - Harrison Ford
   - Sigourney Weaver
   - Jamie Foxx
   - Idris Elba
   - Daniel Craig
   - Kate Winslet
   - Hugh Grant
   - Liam Neeson

   This adds real researched Full Body credits for Batch 4.
   It preserves Batch 1, Batch 2, and Batch 3.
   It does NOT touch startup or Full Page memory.
*/

(function () {
  if (window.vedbRealFullBodyBatch4Installed) return;
  window.vedbRealFullBodyBatch4Installed = true;

  const oldGetFullBodyOfWorkForActor =
    typeof getFullBodyOfWorkForActor === "function" ? getFullBodyOfWorkForActor : null;

  const oldBuildFullBodyOfWorkContent =
    typeof buildFullBodyOfWorkContent === "function" ? buildFullBodyOfWorkContent : null;

  const oldActorSection =
    typeof actorSection === "function" ? actorSection : null;

  function vSafe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function vClean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function vActors() {
    return typeof actors !== "undefined" && Array.isArray(actors) ? actors : [];
  }

  function vFindActor(actorName) {
    const wanted = vClean(actorName);

    return vActors().find(actor => vClean(actor.name) === wanted) ||
      vActors().find(actor => {
        const name = vClean(actor.name);
        return name.includes(wanted) || wanted.includes(name);
      }) ||
      null;
  }

  const realFullBodyCreditsBatch4 = {
    "Al Pacino": [
      { title: "Me, Natalie", year: 1969, type: "Movie", role: "Tony", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Panic in Needle Park", year: 1971, type: "Movie", role: "Bobby", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Godfather", year: 1972, type: "Movie", role: "Michael Corleone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Scarecrow", year: 1973, type: "Movie", role: "Francis Lionel “Lion” Delbuchi", creditType: "Actor", source: "Public filmography reference" },
      { title: "Serpico", year: 1973, type: "Movie", role: "Frank Serpico", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Godfather Part II", year: 1974, type: "Movie", role: "Michael Corleone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dog Day Afternoon", year: 1975, type: "Movie", role: "Sonny Wortzik", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bobby Deerfield", year: 1977, type: "Movie", role: "Bobby Deerfield", creditType: "Actor", source: "Public filmography reference" },
      { title: "...And Justice for All", year: 1979, type: "Movie", role: "Arthur Kirkland", creditType: "Actor", source: "Public filmography reference" },
      { title: "Scarface", year: 1983, type: "Movie", role: "Tony Montana", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sea of Love", year: 1989, type: "Movie", role: "Frank Keller", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dick Tracy", year: 1990, type: "Movie", role: "Big Boy Caprice", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Godfather Part III", year: 1990, type: "Movie", role: "Michael Corleone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Glengarry Glen Ross", year: 1992, type: "Movie", role: "Ricky Roma", creditType: "Actor", source: "Public filmography reference" },
      { title: "Scent of a Woman", year: 1992, type: "Movie", role: "Frank Slade", creditType: "Actor", source: "Public filmography reference" },
      { title: "Carlito's Way", year: 1993, type: "Movie", role: "Carlito Brigante", creditType: "Actor", source: "Public filmography reference" },
      { title: "Heat", year: 1995, type: "Movie", role: "Vincent Hanna", creditType: "Actor", source: "Public filmography reference" },
      { title: "Donnie Brasco", year: 1997, type: "Movie", role: "Benjamin “Lefty” Ruggiero", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Devil's Advocate", year: 1997, type: "Movie", role: "John Milton", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Insider", year: 1999, type: "Movie", role: "Lowell Bergman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Insomnia", year: 2002, type: "Movie", role: "Will Dormer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Angels in America", year: 2003, type: "TV Miniseries", role: "Roy Cohn", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ocean's Thirteen", year: 2007, type: "Movie", role: "Willy Bank", creditType: "Actor", source: "Public filmography reference" },
      { title: "You Don't Know Jack", year: 2010, type: "TV Movie", role: "Jack Kevorkian", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Paterno", year: 2018, type: "TV Movie", role: "Joe Paterno", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Once Upon a Time in Hollywood", year: 2019, type: "Movie", role: "Marvin Schwarz", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Irishman", year: 2019, type: "Movie", role: "Jimmy Hoffa", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hunters", year: 2020, type: "TV Series", role: "Meyer Offerman", creditType: "Actor", source: "Public filmography reference" },
      { title: "House of Gucci", year: 2021, type: "Movie", role: "Aldo Gucci", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Robert De Niro": [
      { title: "Greetings", year: 1968, type: "Movie", role: "Jon Rubin", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Wedding Party", year: 1969, type: "Movie", role: "Cecil", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hi, Mom!", year: 1970, type: "Movie", role: "Jon Rubin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mean Streets", year: 1973, type: "Movie", role: "Johnny Boy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Godfather Part II", year: 1974, type: "Movie", role: "Vito Corleone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Taxi Driver", year: 1976, type: "Movie", role: "Travis Bickle", creditType: "Actor", source: "Public filmography reference" },
      { title: "1900", year: 1976, type: "Movie", role: "Alfredo Berlinghieri", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Deer Hunter", year: 1978, type: "Movie", role: "Michael Vronsky", creditType: "Actor", source: "Public filmography reference" },
      { title: "Raging Bull", year: 1980, type: "Movie", role: "Jake LaMotta", creditType: "Actor", source: "Public filmography reference" },
      { title: "The King of Comedy", year: 1982, type: "Movie", role: "Rupert Pupkin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Once Upon a Time in America", year: 1984, type: "Movie", role: "David “Noodles” Aaronson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Brazil", year: 1985, type: "Movie", role: "Archibald “Harry” Tuttle", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Mission", year: 1986, type: "Movie", role: "Rodrigo Mendoza", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Untouchables", year: 1987, type: "Movie", role: "Al Capone", creditType: "Actor", source: "Public filmography reference" },
      { title: "Midnight Run", year: 1988, type: "Movie", role: "Jack Walsh", creditType: "Actor", source: "Public filmography reference" },
      { title: "Goodfellas", year: 1990, type: "Movie", role: "Jimmy Conway", creditType: "Actor", source: "Public filmography reference" },
      { title: "Awakenings", year: 1990, type: "Movie", role: "Leonard Lowe", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cape Fear", year: 1991, type: "Movie", role: "Max Cady", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Bronx Tale", year: 1993, type: "Movie", role: "Lorenzo Anello", creditType: "Actor / Director", source: "Public filmography reference" },
      { title: "Casino", year: 1995, type: "Movie", role: "Sam “Ace” Rothstein", creditType: "Actor", source: "Public filmography reference" },
      { title: "Heat", year: 1995, type: "Movie", role: "Neil McCauley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sleepers", year: 1996, type: "Movie", role: "Father Bobby", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jackie Brown", year: 1997, type: "Movie", role: "Louis Gara", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wag the Dog", year: 1997, type: "Movie", role: "Conrad Brean", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Analyze This", year: 1999, type: "Movie", role: "Paul Vitti", creditType: "Actor", source: "Public filmography reference" },
      { title: "Meet the Parents", year: 2000, type: "Movie", role: "Jack Byrnes", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Good Shepherd", year: 2006, type: "Movie", role: "Bill Sullivan", creditType: "Actor / Director / Producer", source: "Public filmography reference" },
      { title: "Silver Linings Playbook", year: 2012, type: "Movie", role: "Pat Solitano Sr.", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Intern", year: 2015, type: "Movie", role: "Ben Whittaker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Joker", year: 2019, type: "Movie", role: "Murray Franklin", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Irishman", year: 2019, type: "Movie", role: "Frank Sheeran", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Killers of the Flower Moon", year: 2023, type: "Movie", role: "William King Hale", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Alto Knights", year: 2025, type: "Movie", role: "Frank Costello / Vito Genovese", creditType: "Actor", source: "Public news / film reference" }
    ],

    "Harrison Ford": [
      { title: "American Graffiti", year: 1973, type: "Movie", role: "Bob Falfa", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Conversation", year: 1974, type: "Movie", role: "Martin Stett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars", year: 1977, type: "Movie", role: "Han Solo", creditType: "Actor", source: "Public filmography reference" },
      { title: "Apocalypse Now", year: 1979, type: "Movie", role: "Colonel G. Lucas", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Empire Strikes Back", year: 1980, type: "Movie", role: "Han Solo", creditType: "Actor", source: "Public filmography reference" },
      { title: "Raiders of the Lost Ark", year: 1981, type: "Movie", role: "Indiana Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Blade Runner", year: 1982, type: "Movie", role: "Rick Deckard", creditType: "Actor", source: "Public filmography reference" },
      { title: "Return of the Jedi", year: 1983, type: "Movie", role: "Han Solo", creditType: "Actor", source: "Public filmography reference" },
      { title: "Indiana Jones and the Temple of Doom", year: 1984, type: "Movie", role: "Indiana Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Witness", year: 1985, type: "Movie", role: "John Book", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Mosquito Coast", year: 1986, type: "Movie", role: "Allie Fox", creditType: "Actor", source: "Public filmography reference" },
      { title: "Frantic", year: 1988, type: "Movie", role: "Richard Walker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Working Girl", year: 1988, type: "Movie", role: "Jack Trainer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Indiana Jones and the Last Crusade", year: 1989, type: "Movie", role: "Indiana Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Presumed Innocent", year: 1990, type: "Movie", role: "Rusty Sabich", creditType: "Actor", source: "Public filmography reference" },
      { title: "Patriot Games", year: 1992, type: "Movie", role: "Jack Ryan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Fugitive", year: 1993, type: "Movie", role: "Richard Kimble", creditType: "Actor", source: "Public filmography reference" },
      { title: "Clear and Present Danger", year: 1994, type: "Movie", role: "Jack Ryan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sabrina", year: 1995, type: "Movie", role: "Linus Larrabee", creditType: "Actor", source: "Public filmography reference" },
      { title: "Air Force One", year: 1997, type: "Movie", role: "President James Marshall", creditType: "Actor", source: "Public filmography reference" },
      { title: "Six Days, Seven Nights", year: 1998, type: "Movie", role: "Quinn Harris", creditType: "Actor", source: "Public filmography reference" },
      { title: "What Lies Beneath", year: 2000, type: "Movie", role: "Norman Spencer", creditType: "Actor", source: "Public filmography reference" },
      { title: "K-19: The Widowmaker", year: 2002, type: "Movie", role: "Alexei Vostrikov", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Indiana Jones and the Kingdom of the Crystal Skull", year: 2008, type: "Movie", role: "Indiana Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "42", year: 2013, type: "Movie", role: "Branch Rickey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: The Force Awakens", year: 2015, type: "Movie", role: "Han Solo", creditType: "Actor", source: "Public filmography reference" },
      { title: "Blade Runner 2049", year: 2017, type: "Movie", role: "Rick Deckard", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Call of the Wild", year: 2020, type: "Movie", role: "John Thornton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Shrinking", year: 2023, type: "TV Series", role: "Dr. Paul Rhoades", creditType: "Actor", source: "Public filmography reference" },
      { title: "Indiana Jones and the Dial of Destiny", year: 2023, type: "Movie", role: "Indiana Jones", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Sigourney Weaver": [
      { title: "Annie Hall", year: 1977, type: "Movie", role: "Alvy's date outside theater", creditType: "Actor", source: "Public filmography reference" },
      { title: "Alien", year: 1979, type: "Movie", role: "Ellen Ripley", creditType: "Actor", source: "Public profile reference" },
      { title: "The Year of Living Dangerously", year: 1982, type: "Movie", role: "Jill Bryant", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ghostbusters", year: 1984, type: "Movie", role: "Dana Barrett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Aliens", year: 1986, type: "Movie", role: "Ellen Ripley", creditType: "Actor", source: "Public profile reference" },
      { title: "Gorillas in the Mist", year: 1988, type: "Movie", role: "Dian Fossey", creditType: "Actor", source: "Public profile reference" },
      { title: "Working Girl", year: 1988, type: "Movie", role: "Katharine Parker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ghostbusters II", year: 1989, type: "Movie", role: "Dana Barrett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Alien 3", year: 1992, type: "Movie", role: "Ellen Ripley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dave", year: 1993, type: "Movie", role: "Ellen Mitchell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Copycat", year: 1995, type: "Movie", role: "Helen Hudson", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Ice Storm", year: 1997, type: "Movie", role: "Janey Carver", creditType: "Actor", source: "Public filmography reference" },
      { title: "Alien Resurrection", year: 1997, type: "Movie", role: "Ellen Ripley clone", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "A Map of the World", year: 1999, type: "Movie", role: "Alice Goodwin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Galaxy Quest", year: 1999, type: "Movie", role: "Gwen DeMarco", creditType: "Actor", source: "Public filmography reference" },
      { title: "Holes", year: 2003, type: "Movie", role: "Warden Walker", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Village", year: 2004, type: "Movie", role: "Alice Hunt", creditType: "Actor", source: "Public filmography reference" },
      { title: "The TV Set", year: 2006, type: "Movie", role: "Lenny", creditType: "Actor", source: "Public filmography reference" },
      { title: "WALL-E", year: 2008, type: "Movie", role: "Axiom computer", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Avatar", year: 2009, type: "Movie", role: "Dr. Grace Augustine", creditType: "Actor", source: "Public profile reference" },
      { title: "Prayers for Bobby", year: 2009, type: "TV Movie", role: "Mary Griffith", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Cedar Rapids", year: 2011, type: "Movie", role: "Macy Vanderhei", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Cabin in the Woods", year: 2012, type: "Movie", role: "The Director", creditType: "Actor", source: "Public filmography reference" },
      { title: "Chappie", year: 2015, type: "Movie", role: "Michelle Bradley", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Defenders", year: 2017, type: "TV Miniseries", role: "Alexandra Reid", creditType: "Actor", source: "Public filmography reference" },
      { title: "My Salinger Year", year: 2020, type: "Movie", role: "Margaret", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ghostbusters: Afterlife", year: 2021, type: "Movie", role: "Dana Barrett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Call Jane", year: 2022, type: "Movie", role: "Virginia", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avatar: The Way of Water", year: 2022, type: "Movie", role: "Kiri", creditType: "Actor / Voice / Performance Capture", source: "Public filmography reference" },
      { title: "The Lost Flowers of Alice Hart", year: 2023, type: "TV Miniseries", role: "June Hart", creditType: "Actor / Executive Producer", source: "Public filmography reference" }
    ],

    "Jamie Foxx": [
      { title: "In Living Color", year: 1991, type: "TV Series", role: "Various characters", creditType: "Actor / Comedian", source: "Public filmography reference" },
      { title: "The Jamie Foxx Show", year: 1996, type: "TV Series", role: "Jamie King", creditType: "Actor / Co-creator / Producer", source: "Public filmography reference" },
      { title: "Booty Call", year: 1997, type: "Movie", role: "Bunz", creditType: "Actor", source: "Public filmography reference" },
      { title: "Any Given Sunday", year: 1999, type: "Movie", role: "Willie Beamen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ali", year: 2001, type: "Movie", role: "Drew “Bundini” Brown", creditType: "Actor", source: "Public filmography reference" },
      { title: "Collateral", year: 2004, type: "Movie", role: "Max Durocher", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ray", year: 2004, type: "Movie", role: "Ray Charles", creditType: "Actor", source: "Public filmography reference" },
      { title: "Stealth", year: 2005, type: "Movie", role: "Henry Purcell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jarhead", year: 2005, type: "Movie", role: "Staff Sgt. Sykes", creditType: "Actor", source: "Public filmography reference" },
      { title: "Miami Vice", year: 2006, type: "Movie", role: "Ricardo Tubbs", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dreamgirls", year: 2006, type: "Movie", role: "Curtis Taylor Jr.", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Kingdom", year: 2007, type: "Movie", role: "Ronald Fleury", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Soloist", year: 2009, type: "Movie", role: "Nathaniel Ayers", creditType: "Actor", source: "Public filmography reference" },
      { title: "Valentine's Day", year: 2010, type: "Movie", role: "Kelvin Moore", creditType: "Actor", source: "Public filmography reference" },
      { title: "Due Date", year: 2010, type: "Movie", role: "Darryl", creditType: "Actor", source: "Public filmography reference" },
      { title: "Horrible Bosses", year: 2011, type: "Movie", role: "Dean “MF” Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Django Unchained", year: 2012, type: "Movie", role: "Django Freeman", creditType: "Actor", source: "Public filmography reference" },
      { title: "White House Down", year: 2013, type: "Movie", role: "President James Sawyer", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Amazing Spider-Man 2", year: 2014, type: "Movie", role: "Max Dillon / Electro", creditType: "Actor", source: "Public filmography reference" },
      { title: "Annie", year: 2014, type: "Movie", role: "Will Stacks", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Baby Driver", year: 2017, type: "Movie", role: "Leon “Bats” Jefferson III", creditType: "Actor", source: "Public filmography reference" },
      { title: "Just Mercy", year: 2019, type: "Movie", role: "Walter McMillian", creditType: "Actor", source: "Public filmography reference" },
      { title: "Soul", year: 2020, type: "Movie", role: "Joe Gardner", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Project Power", year: 2020, type: "Movie", role: "Art", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: No Way Home", year: 2021, type: "Movie", role: "Max Dillon / Electro", creditType: "Actor", source: "Public filmography reference" },
      { title: "They Cloned Tyrone", year: 2023, type: "Movie", role: "Slick Charles", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Burial", year: 2023, type: "Movie", role: "Willie E. Gary", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Back in Action", year: 2025, type: "Movie", role: "Matt", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Idris Elba": [
      { title: "Family Affairs", year: 1997, type: "TV Series", role: "Tim Webster", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ultraviolet", year: 1998, type: "TV Series", role: "Vaughan Rice", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dangerfield", year: 1999, type: "TV Series", role: "Matt Gregory", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Wire", year: 2002, type: "TV Series", role: "Stringer Bell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sometimes in April", year: 2005, type: "TV Movie", role: "Augustin Muganza", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Gospel", year: 2005, type: "Movie", role: "Reverend Charles Frank", creditType: "Actor", source: "Public filmography reference" },
      { title: "Daddy's Little Girls", year: 2007, type: "Movie", role: "Monty James", creditType: "Actor", source: "Public filmography reference" },
      { title: "28 Weeks Later", year: 2007, type: "Movie", role: "General Stone", creditType: "Actor", source: "Public filmography reference" },
      { title: "American Gangster", year: 2007, type: "Movie", role: "Tango", creditType: "Actor", source: "Public filmography reference" },
      { title: "Obsessed", year: 2009, type: "Movie", role: "Derek Charles", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Office", year: 2009, type: "TV Series", role: "Charles Miner", creditType: "Actor", source: "Public filmography reference" },
      { title: "Luther", year: 2010, type: "TV Series", role: "John Luther", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Takers", year: 2010, type: "Movie", role: "Gordon Jennings", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor", year: 2011, type: "Movie", role: "Heimdall", creditType: "Actor", source: "Public filmography reference" },
      { title: "Prometheus", year: 2012, type: "Movie", role: "Janek", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pacific Rim", year: 2013, type: "Movie", role: "Stacker Pentecost", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mandela: Long Walk to Freedom", year: 2013, type: "Movie", role: "Nelson Mandela", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: The Dark World", year: 2013, type: "Movie", role: "Heimdall", creditType: "Actor", source: "Public filmography reference" },
      { title: "No Good Deed", year: 2014, type: "Movie", role: "Colin Evans", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Beasts of No Nation", year: 2015, type: "Movie", role: "Commandant", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zootopia", year: 2016, type: "Movie", role: "Chief Bogo", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Jungle Book", year: 2016, type: "Movie", role: "Shere Khan", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Star Trek Beyond", year: 2016, type: "Movie", role: "Krall", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dark Tower", year: 2017, type: "Movie", role: "Roland Deschain", creditType: "Actor", source: "Public filmography reference" },
      { title: "Thor: Ragnarok", year: 2017, type: "Movie", role: "Heimdall", creditType: "Actor", source: "Public filmography reference" },
      { title: "Molly's Game", year: 2017, type: "Movie", role: "Charlie Jaffey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Avengers: Infinity War", year: 2018, type: "Movie", role: "Heimdall", creditType: "Actor", source: "Public filmography reference" },
      { title: "Fast & Furious Presents: Hobbs & Shaw", year: 2019, type: "Movie", role: "Brixton Lore", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cats", year: 2019, type: "Movie", role: "Macavity", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Suicide Squad", year: 2021, type: "Movie", role: "Robert DuBois / Bloodsport", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sonic the Hedgehog 2", year: 2022, type: "Movie", role: "Knuckles", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Beast", year: 2022, type: "Movie", role: "Dr. Nate Samuels", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Luther: The Fallen Sun", year: 2023, type: "Movie", role: "John Luther", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Sonic the Hedgehog 3", year: 2024, type: "Movie", role: "Knuckles", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Heads of State", year: 2025, type: "Movie", role: "Sam Clarke", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Daniel Craig": [
      { title: "The Power of One", year: 1992, type: "Movie", role: "Sgt. Botha", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sharpe's Eagle", year: 1993, type: "TV Movie", role: "Lt. Berry", creditType: "Actor", source: "Public filmography reference" },
      { title: "Our Friends in the North", year: 1996, type: "TV Series", role: "Geordie Peacock", creditType: "Actor", source: "Public filmography reference" },
      { title: "Elizabeth", year: 1998, type: "Movie", role: "John Ballard", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lara Croft: Tomb Raider", year: 2001, type: "Movie", role: "Alex West", creditType: "Actor", source: "Public filmography reference" },
      { title: "Road to Perdition", year: 2002, type: "Movie", role: "Connor Rooney", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Mother", year: 2003, type: "Movie", role: "Darren", creditType: "Actor", source: "Public filmography reference" },
      { title: "Layer Cake", year: 2004, type: "Movie", role: "XXXX", creditType: "Actor", source: "Public filmography reference" },
      { title: "Enduring Love", year: 2004, type: "Movie", role: "Joe Rose", creditType: "Actor", source: "Public filmography reference" },
      { title: "Munich", year: 2005, type: "Movie", role: "Steve", creditType: "Actor", source: "Public filmography reference" },
      { title: "Infamous", year: 2006, type: "Movie", role: "Perry Smith", creditType: "Actor", source: "Public filmography reference" },
      { title: "Casino Royale", year: 2006, type: "Movie", role: "James Bond", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Golden Compass", year: 2007, type: "Movie", role: "Lord Asriel", creditType: "Actor", source: "Public filmography reference" },
      { title: "Quantum of Solace", year: 2008, type: "Movie", role: "James Bond", creditType: "Actor", source: "Public filmography reference" },
      { title: "Defiance", year: 2008, type: "Movie", role: "Tuvia Bielski", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cowboys & Aliens", year: 2011, type: "Movie", role: "Jake Lonergan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Girl with the Dragon Tattoo", year: 2011, type: "Movie", role: "Mikael Blomkvist", creditType: "Actor", source: "Public filmography reference" },
      { title: "Skyfall", year: 2012, type: "Movie", role: "James Bond", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spectre", year: 2015, type: "Movie", role: "James Bond", creditType: "Actor", source: "Public filmography reference" },
      { title: "Logan Lucky", year: 2017, type: "Movie", role: "Joe Bang", creditType: "Actor", source: "Public filmography reference" },
      { title: "Knives Out", year: 2019, type: "Movie", role: "Benoit Blanc", creditType: "Actor", source: "Public filmography reference" },
      { title: "No Time to Die", year: 2021, type: "Movie", role: "James Bond", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Glass Onion: A Knives Out Mystery", year: 2022, type: "Movie", role: "Benoit Blanc", creditType: "Actor", source: "Public filmography reference" },
      { title: "Queer", year: 2024, type: "Movie", role: "William Lee", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wake Up Dead Man: A Knives Out Mystery", year: 2025, type: "Movie", role: "Benoit Blanc", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Kate Winslet": [
      { title: "Dark Season", year: 1991, type: "TV Series", role: "Reet", creditType: "Actor", source: "Public filmography reference" },
      { title: "Heavenly Creatures", year: 1994, type: "Movie", role: "Juliet Hulme", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sense and Sensibility", year: 1995, type: "Movie", role: "Marianne Dashwood", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Kid in King Arthur's Court", year: 1995, type: "Movie", role: "Princess Sarah", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jude", year: 1996, type: "Movie", role: "Sue Bridehead", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hamlet", year: 1996, type: "Movie", role: "Ophelia", creditType: "Actor", source: "Public filmography reference" },
      { title: "Titanic", year: 1997, type: "Movie", role: "Rose DeWitt Bukater", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hideous Kinky", year: 1998, type: "Movie", role: "Julia", creditType: "Actor", source: "Public filmography reference" },
      { title: "Holy Smoke!", year: 1999, type: "Movie", role: "Ruth Barron", creditType: "Actor", source: "Public filmography reference" },
      { title: "Quills", year: 2000, type: "Movie", role: "Madeleine LeClerc", creditType: "Actor", source: "Public filmography reference" },
      { title: "Iris", year: 2001, type: "Movie", role: "Young Iris Murdoch", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Life of David Gale", year: 2003, type: "Movie", role: "Bitsey Bloom", creditType: "Actor", source: "Public filmography reference" },
      { title: "Eternal Sunshine of the Spotless Mind", year: 2004, type: "Movie", role: "Clementine Kruczynski", creditType: "Actor", source: "Public filmography reference" },
      { title: "Finding Neverland", year: 2004, type: "Movie", role: "Sylvia Llewelyn Davies", creditType: "Actor", source: "Public filmography reference" },
      { title: "Romance & Cigarettes", year: 2005, type: "Movie", role: "Tula", creditType: "Actor", source: "Public filmography reference" },
      { title: "Little Children", year: 2006, type: "Movie", role: "Sarah Pierce", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Holiday", year: 2006, type: "Movie", role: "Iris Simpkins", creditType: "Actor", source: "Public filmography reference" },
      { title: "Flushed Away", year: 2006, type: "Movie", role: "Rita", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Reader", year: 2008, type: "Movie", role: "Hanna Schmitz", creditType: "Actor", source: "Public filmography reference" },
      { title: "Revolutionary Road", year: 2008, type: "Movie", role: "April Wheeler", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mildred Pierce", year: 2011, type: "TV Miniseries", role: "Mildred Pierce", creditType: "Actor", source: "Public filmography reference" },
      { title: "Contagion", year: 2011, type: "Movie", role: "Dr. Erin Mears", creditType: "Actor", source: "Public filmography reference" },
      { title: "Divergent", year: 2014, type: "Movie", role: "Jeanine Matthews", creditType: "Actor", source: "Public filmography reference" },
      { title: "Steve Jobs", year: 2015, type: "Movie", role: "Joanna Hoffman", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dressmaker", year: 2015, type: "Movie", role: "Tilly Dunnage", creditType: "Actor", source: "Public filmography reference" },
      { title: "Triple 9", year: 2016, type: "Movie", role: "Irina Vlaslov", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Mountain Between Us", year: 2017, type: "Movie", role: "Alex Martin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Black Beauty", year: 2020, type: "Movie", role: "Black Beauty", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Ammonite", year: 2020, type: "Movie", role: "Mary Anning", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mare of Easttown", year: 2021, type: "TV Miniseries", role: "Mare Sheehan", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Avatar: The Way of Water", year: 2022, type: "Movie", role: "Ronal", creditType: "Actor / Performance Capture", source: "Public filmography reference" },
      { title: "Lee", year: 2023, type: "Movie", role: "Lee Miller", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "The Regime", year: 2024, type: "TV Miniseries", role: "Chancellor Elena Vernham", creditType: "Actor / Executive Producer", source: "Public filmography reference" }
    ],

    "Hugh Grant": [
      { title: "Privileged", year: 1982, type: "Movie", role: "Lord Adrian", creditType: "Actor", source: "Public filmography reference" },
      { title: "Maurice", year: 1987, type: "Movie", role: "Clive Durham", creditType: "Actor", source: "Public filmography reference" },
      { title: "White Mischief", year: 1987, type: "Movie", role: "Hugh", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Lair of the White Worm", year: 1988, type: "Movie", role: "Lord James D'Ampton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Impromptu", year: 1991, type: "Movie", role: "Frédéric Chopin", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Remains of the Day", year: 1993, type: "Movie", role: "Reginald Cardinal", creditType: "Actor", source: "Public filmography reference" },
      { title: "Four Weddings and a Funeral", year: 1994, type: "Movie", role: "Charles", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Englishman Who Went up a Hill but Came down a Mountain", year: 1995, type: "Movie", role: "Reginald Anson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sense and Sensibility", year: 1995, type: "Movie", role: "Edward Ferrars", creditType: "Actor", source: "Public filmography reference" },
      { title: "Nine Months", year: 1995, type: "Movie", role: "Samuel Faulkner", creditType: "Actor", source: "Public filmography reference" },
      { title: "Extreme Measures", year: 1996, type: "Movie", role: "Dr. Guy Luthan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Notting Hill", year: 1999, type: "Movie", role: "William Thacker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mickey Blue Eyes", year: 1999, type: "Movie", role: "Michael Felgate", creditType: "Actor", source: "Public filmography reference" },
      { title: "Small Time Crooks", year: 2000, type: "Movie", role: "David Perrette", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bridget Jones's Diary", year: 2001, type: "Movie", role: "Daniel Cleaver", creditType: "Actor", source: "Public filmography reference" },
      { title: "About a Boy", year: 2002, type: "Movie", role: "Will Freeman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Two Weeks Notice", year: 2002, type: "Movie", role: "George Wade", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love Actually", year: 2003, type: "Movie", role: "David, the Prime Minister", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bridget Jones: The Edge of Reason", year: 2004, type: "Movie", role: "Daniel Cleaver", creditType: "Actor", source: "Public filmography reference" },
      { title: "Music and Lyrics", year: 2007, type: "Movie", role: "Alex Fletcher", creditType: "Actor", source: "Public filmography reference" },
      { title: "Did You Hear About the Morgans?", year: 2009, type: "Movie", role: "Paul Morgan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cloud Atlas", year: 2012, type: "Movie", role: "Multiple roles", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Rewrite", year: 2014, type: "Movie", role: "Keith Michaels", creditType: "Actor", source: "Public filmography reference" },
      { title: "Florence Foster Jenkins", year: 2016, type: "Movie", role: "St. Clair Bayfield", creditType: "Actor", source: "Public filmography reference" },
      { title: "Paddington 2", year: 2017, type: "Movie", role: "Phoenix Buchanan", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Very English Scandal", year: 2018, type: "TV Miniseries", role: "Jeremy Thorpe", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Gentlemen", year: 2019, type: "Movie", role: "Fletcher", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Undoing", year: 2020, type: "TV Miniseries", role: "Jonathan Fraser", creditType: "Actor", source: "Public filmography reference" },
      { title: "Glass Onion: A Knives Out Mystery", year: 2022, type: "Movie", role: "Phillip", creditType: "Actor / Cameo", source: "Public filmography reference" },
      { title: "Dungeons & Dragons: Honor Among Thieves", year: 2023, type: "Movie", role: "Forge Fitzwilliam", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wonka", year: 2023, type: "Movie", role: "Oompa-Loompa", creditType: "Actor", source: "Public filmography reference" },
      { title: "Heretic", year: 2024, type: "Movie", role: "Mr. Reed", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bridget Jones: Mad About the Boy", year: 2025, type: "Movie", role: "Daniel Cleaver", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Liam Neeson": [
      { title: "Excalibur", year: 1981, type: "Movie", role: "Gawain", creditType: "Actor", source: "Public filmography reference" },
      { title: "Krull", year: 1983, type: "Movie", role: "Kegan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Bounty", year: 1984, type: "Movie", role: "Charles Churchill", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Mission", year: 1986, type: "Movie", role: "Fielding", creditType: "Actor", source: "Public filmography reference" },
      { title: "Suspect", year: 1987, type: "Movie", role: "Carl Wayne Anderson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Darkman", year: 1990, type: "Movie", role: "Peyton Westlake / Darkman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Husbands and Wives", year: 1992, type: "Movie", role: "Michael Gates", creditType: "Actor", source: "Public filmography reference" },
      { title: "Schindler's List", year: 1993, type: "Movie", role: "Oskar Schindler", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rob Roy", year: 1995, type: "Movie", role: "Robert Roy MacGregor", creditType: "Actor", source: "Public filmography reference" },
      { title: "Michael Collins", year: 1996, type: "Movie", role: "Michael Collins", creditType: "Actor", source: "Public filmography reference" },
      { title: "Les Misérables", year: 1998, type: "Movie", role: "Jean Valjean", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode I – The Phantom Menace", year: 1999, type: "Movie", role: "Qui-Gon Jinn", creditType: "Actor", source: "Public filmography reference" },
      { title: "K-19: The Widowmaker", year: 2002, type: "Movie", role: "Mikhail Polenin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gangs of New York", year: 2002, type: "Movie", role: "Priest Vallon", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love Actually", year: 2003, type: "Movie", role: "Daniel", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kinsey", year: 2004, type: "Movie", role: "Alfred Kinsey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Batman Begins", year: 2005, type: "Movie", role: "Henri Ducard / Ra's al Ghul", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kingdom of Heaven", year: 2005, type: "Movie", role: "Godfrey of Ibelin", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", year: 2005, type: "Movie", role: "Aslan", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Taken", year: 2008, type: "Movie", role: "Bryan Mills", creditType: "Actor", source: "Public filmography reference" },
      { title: "Clash of the Titans", year: 2010, type: "Movie", role: "Zeus", creditType: "Actor", source: "Public filmography reference" },
      { title: "The A-Team", year: 2010, type: "Movie", role: "John “Hannibal” Smith", creditType: "Actor", source: "Public filmography reference" },
      { title: "Unknown", year: 2011, type: "Movie", role: "Martin Harris", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Grey", year: 2011, type: "Movie", role: "John Ottway", creditType: "Actor", source: "Public filmography reference" },
      { title: "Taken 2", year: 2012, type: "Movie", role: "Bryan Mills", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dark Knight Rises", year: 2012, type: "Movie", role: "Ra's al Ghul", creditType: "Actor", source: "Public filmography reference" },
      { title: "Non-Stop", year: 2014, type: "Movie", role: "Bill Marks", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Walk Among the Tombstones", year: 2014, type: "Movie", role: "Matthew Scudder", creditType: "Actor", source: "Public filmography reference" },
      { title: "Taken 3", year: 2014, type: "Movie", role: "Bryan Mills", creditType: "Actor", source: "Public filmography reference" },
      { title: "Run All Night", year: 2015, type: "Movie", role: "Jimmy Conlon", creditType: "Actor", source: "Public filmography reference" },
      { title: "Silence", year: 2016, type: "Movie", role: "Cristóvão Ferreira", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Commuter", year: 2018, type: "Movie", role: "Michael MacCauley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cold Pursuit", year: 2019, type: "Movie", role: "Nels Coxman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Honest Thief", year: 2020, type: "Movie", role: "Tom Dolan", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Marksman", year: 2021, type: "Movie", role: "Jim Hanson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Blacklight", year: 2022, type: "Movie", role: "Travis Block", creditType: "Actor", source: "Public filmography reference" },
      { title: "In the Land of Saints and Sinners", year: 2023, type: "Movie", role: "Finbar Murphy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Naked Gun", year: 2025, type: "Movie", role: "Frank Drebin Jr.", creditType: "Actor", source: "Public film reference" }
    ]
  };

  const realCredentialHighlightsBatch4 = {
    "Al Pacino": [
      "Academy Award winner for Scent of a Woman.",
      "Known for Michael Corleone, Tony Montana, Frank Serpico, Sonny Wortzik, and Jimmy Hoffa.",
      "Major career spans film, television, and stage."
    ],
    "Robert De Niro": [
      "Academy Award winner for The Godfather Part II and Raging Bull.",
      "Known for Taxi Driver, Goodfellas, Casino, Heat, The Irishman, and Killers of the Flower Moon.",
      "Actor, director, producer, and major collaborator with Martin Scorsese."
    ],
    "Harrison Ford": [
      "Known globally for Han Solo and Indiana Jones.",
      "Major credits include Blade Runner, The Fugitive, Witness, Air Force One, and Shrinking.",
      "Long-running franchise and dramatic film career."
    ],
    "Sigourney Weaver": [
      "Known globally for Ellen Ripley in the Alien franchise.",
      "Major credits include Ghostbusters, Avatar, Gorillas in the Mist, Working Girl, and Galaxy Quest.",
      "Received major award recognition across film, television, and theater."
    ],
    "Jamie Foxx": [
      "Academy Award winner for Ray.",
      "Known for Collateral, Django Unchained, Ray, Baby Driver, Soul, and Spider-Man roles.",
      "Actor, comedian, singer, writer, producer, and director."
    ],
    "Idris Elba": [
      "Known for Stringer Bell in The Wire and John Luther in Luther.",
      "Major credits include Thor, Mandela: Long Walk to Freedom, Beasts of No Nation, The Suicide Squad, and Sonic.",
      "Actor, producer, musician, and voice performer."
    ],
    "Daniel Craig": [
      "Known globally for James Bond across five films.",
      "Known for Benoit Blanc in Knives Out and Glass Onion.",
      "Major pre-Bond work includes Layer Cake, Road to Perdition, Munich, and Lara Croft: Tomb Raider."
    ],
    "Kate Winslet": [
      "Academy Award winner for The Reader.",
      "Known for Titanic, Eternal Sunshine of the Spotless Mind, Sense and Sensibility, Mare of Easttown, and Avatar.",
      "Major career spans film, television, voice work, and producer credits."
    ],
    "Hugh Grant": [
      "Golden Globe and BAFTA winner for Four Weddings and a Funeral.",
      "Known for Notting Hill, Bridget Jones, About a Boy, Love Actually, Paddington 2, Wonka, and Heretic.",
      "Career spans romantic comedy, drama, satire, television, and villain/character roles."
    ],
    "Liam Neeson": [
      "Academy Award nominee for Schindler's List.",
      "Known for Oskar Schindler, Qui-Gon Jinn, Bryan Mills, Aslan, and Ra's al Ghul.",
      "Career spans prestige drama, action thrillers, voice work, and franchise roles."
    ]
  };

  function actorIsBatch4(actorName) {
    return !!realFullBodyCreditsBatch4[actorName];
  }

  function dedupeCredits(rows) {
    const seen = new Set();

    return (rows || []).filter(row => {
      const key = vClean(row.title + "::" + row.year + "::" + row.role + "::" + row.creditType);

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function getBatch4CreditsForActor(actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return [];

    const rows = realFullBodyCreditsBatch4[actor.name];

    if (!rows) {
      return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actor.name) : [];
    }

    return dedupeCredits(rows.map(row => ({
      actorName: actor.name,
      title: row.title,
      year: row.year || "",
      type: row.type || "Movie / TV Credit",
      role: row.role || "Role / job verified from public credit source",
      creditType: row.creditType || "Actor",
      source: row.source || "Public credit reference",
      isRealCredit: true,
      batch: "Batch 4"
    })));
  }

  function applyBatch4DataToActors() {
    vActors().forEach(actor => {
      const credits = realFullBodyCreditsBatch4[actor.name];

      if (!credits) return;

      actor.fullBodyWork = credits.map(row => ({
        title: row.title,
        year: row.year,
        type: row.type,
        role: row.role,
        creditType: row.creditType,
        source: row.source
      }));

      actor.credentials = realCredentialHighlightsBatch4[actor.name] || actor.credentials || [];
      actor.signatureRoles = actor.signatureRoles || {};

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || "");
        const matchingCredit = credits.find(row => vClean(row.title) === vClean(title));

        if (matchingCredit && matchingCredit.role) {
          actor.signatureRoles[title] = matchingCredit.role;
        } else if (Array.isArray(actor.characters) && actor.characters[index]) {
          actor.signatureRoles[title] = actor.characters[index];
        }
      });
    });
  }

  function getSignatureRole(actor, titleName, index) {
    if (!actor) return "Role to verify";

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    const credits = realFullBodyCreditsBatch4[actor.name] || [];
    const match = credits.find(row => vClean(row.title) === vClean(titleName));

    if (match && match.role) return match.role;

    return "Role to verify";
  }

  function buildSignatureWorkBatch4(actor) {
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
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows.map((item, index) => {
          const title = Array.isArray(item) ? item[0] : String(item || "");
          const year = Array.isArray(item) ? item[1] : "";
          const role = getSignatureRole(actor, title, index);

          return `
            <article class="info-card">
              <h3>${vSafe(title)}</h3>
              <p><b>Year:</b> ${vSafe(year || "Year to verify")}</p>
              <p><b>Character / Role:</b> ${vSafe(role)}</p>
              <p><b>Actor:</b> ${vSafe(actor.name)}</p>
            </article>
          `;
        }).join("")}
      </div>

      ${typeof sourceBlock === "function" ? sourceBlock(actor) : ""}
    `;
  }

  function buildCredentialBlock(actor) {
    const credentials = realCredentialHighlightsBatch4[actor.name] || actor.credentials || [];

    if (!credentials.length) return "";

    return `
      <div class="full-body-box">
        <h3>Real Credentials</h3>
        <div class="full-body-grid">
          ${credentials.map(item => `
            <article class="full-body-card">
              <h3>Credential</h3>
              <p>${vSafe(item)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function buildRealCreditCard(row) {
    return `
      <article class="full-body-card">
        <h3>${vSafe(row.title)}</h3>

        <span class="full-body-pill">${vSafe(row.type || "Credit")}</span>
        ${row.year ? `<span class="full-body-pill">${vSafe(row.year)}</span>` : ""}
        <span class="full-body-pill">${vSafe(row.creditType || "Actor")}</span>

        <p><b>Role / Credit:</b> ${vSafe(row.role || "Role to verify")}</p>
        <p><b>Source inside VEDB:</b> ${vSafe(row.source || "Public credit reference")}</p>

        <p class="full-body-note">
          Real researched Full Body credit loaded in VEDB Batch 4.
        </p>

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${vSafe(row.actorName || "")}"
          data-title="${vSafe(row.title || "")}"
          data-year="${vSafe(row.year || "")}"
          data-type="${vSafe(row.type || "Movie")}"
          data-role="${vSafe(row.role || "Cast member")}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  window.getFullBodyOfWorkForActor = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch4(actor.name)) {
      return getBatch4CreditsForActor(actor.name);
    }

    return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actorName) : [];
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch4(actor.name)) {
      const rows = getBatch4CreditsForActor(actor.name);
      const signatureCount = Array.isArray(actor.knownFor) ? actor.knownFor.length : 0;

      return `
        <div class="full-body-box">
          <h3>Signature Work vs. Full Body of Work</h3>

          <p class="full-body-note">
            <b>Signature Work</b> is the short highlight list.
            <b>Full Body of Work</b> is the larger researched credit list.
          </p>

          <p class="full-body-note">
            Real researched Full Body credits are loaded for this actor in Batch 4.
          </p>

          <p>
            <span class="full-body-pill">${signatureCount} Signature Work titles</span>
            <span class="full-body-pill">${rows.length} Full Body credits showing</span>
            <span class="full-body-pill">Full Body is larger</span>
          </p>
        </div>

        ${buildCredentialBlock(actor)}

        <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

        <div class="full-body-grid">
          ${rows.map(buildRealCreditCard).join("")}
        </div>

        ${
          typeof buildAddFullBodyCreditForm === "function"
            ? buildAddFullBodyCreditForm(actor.name)
            : ""
        }
      `;
    }

    return oldBuildFullBodyOfWorkContent
      ? oldBuildFullBodyOfWorkContent(actorName)
      : `<p>Full Body data not loaded yet.</p>`;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  window.actorSection = function (sectionId) {
    if (
      sectionId === "filmography" &&
      typeof currentMode !== "undefined" &&
      currentMode === "actor" &&
      typeof currentEntity !== "undefined" &&
      currentEntity &&
      actorIsBatch4(currentEntity.name)
    ) {
      return buildSignatureWorkBatch4(currentEntity);
    }

    return oldActorSection ? oldActorSection(sectionId) : "";
  };

  try {
    actorSection = window.actorSection;
  } catch (error) {}

  applyBatch4DataToActors();

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById("sectionPage");

  if (page && page.style.display !== "none") {
    if (page.textContent.includes("Signature Work") && typeof openSectionPage === "function") {
      setTimeout(function () {
        openSectionPage("filmography");
      }, 100);
    }

    if (page.textContent.includes("VEDB FULL BODY OF WORK") && typeof openFullBodyOfWorkPage === "function") {
      setTimeout(function () {
        let actorName = "";

        try {
          actorName =
            typeof currentEntity !== "undefined" && currentEntity && currentEntity.name
              ? currentEntity.name
              : "";
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log("VEDB Real Full Body Credits Batch 4 loaded.");
})();
/* VEDB REAL FULL BODY CREDITS — BATCH 5
   Paste at the VERY BOTTOM of the JS box.

   Batch 5 actors:
   - Samuel L. Jackson
   - Jake Gyllenhaal
   - Marisa Tomei
   - Michael Keaton
   - Timothée Chalamet
   - Rebecca Ferguson
   - Oscar Isaac
   - Josh Hutcherson
   - Liam Hemsworth
   - Woody Harrelson

   This adds real researched Full Body credits for Batch 5.
   It preserves Batches 1–4.
   It does NOT touch startup or Full Page memory.
*/

(function () {
  if (window.vedbRealFullBodyBatch5Installed) return;
  window.vedbRealFullBodyBatch5Installed = true;

  const oldGetFullBodyOfWorkForActor =
    typeof getFullBodyOfWorkForActor === "function" ? getFullBodyOfWorkForActor : null;

  const oldBuildFullBodyOfWorkContent =
    typeof buildFullBodyOfWorkContent === "function" ? buildFullBodyOfWorkContent : null;

  const oldActorSection =
    typeof actorSection === "function" ? actorSection : null;

  function vSafe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function vClean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function vActors() {
    return typeof actors !== "undefined" && Array.isArray(actors) ? actors : [];
  }

  function vFindActor(actorName) {
    const wanted = vClean(actorName);

    return vActors().find(actor => vClean(actor.name) === wanted) ||
      vActors().find(actor => {
        const name = vClean(actor.name);
        return name.includes(wanted) || wanted.includes(name);
      }) ||
      null;
  }

  const realFullBodyCreditsBatch5 = {
    "Samuel L. Jackson": [
      { title: "Together for Days", year: 1972, type: "Movie", role: "Stan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ragtime", year: 1981, type: "Movie", role: "Gang member", creditType: "Actor", source: "Public filmography reference" },
      { title: "Coming to America", year: 1988, type: "Movie", role: "Hold-up man", creditType: "Actor", source: "Public filmography reference" },
      { title: "School Daze", year: 1988, type: "Movie", role: "Leeds", creditType: "Actor", source: "Public filmography reference" },
      { title: "Do the Right Thing", year: 1989, type: "Movie", role: "Mister Señor Love Daddy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Goodfellas", year: 1990, type: "Movie", role: "Stacks Edwards", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jungle Fever", year: 1991, type: "Movie", role: "Gator Purify", creditType: "Actor", source: "Public filmography reference" },
      { title: "Patriot Games", year: 1992, type: "Movie", role: "Lt. Cmdr. Robby Jackson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Juice", year: 1992, type: "Movie", role: "Trip", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jurassic Park", year: 1993, type: "Movie", role: "Ray Arnold", creditType: "Actor", source: "Public filmography reference" },
      { title: "True Romance", year: 1993, type: "Movie", role: "Big Don", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pulp Fiction", year: 1994, type: "Movie", role: "Jules Winnfield", creditType: "Actor", source: "Public filmography reference" },
      { title: "Die Hard with a Vengeance", year: 1995, type: "Movie", role: "Zeus Carver", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Time to Kill", year: 1996, type: "Movie", role: "Carl Lee Hailey", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Long Kiss Goodnight", year: 1996, type: "Movie", role: "Mitch Henessey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jackie Brown", year: 1997, type: "Movie", role: "Ordell Robbie", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Negotiator", year: 1998, type: "Movie", role: "Danny Roman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode I – The Phantom Menace", year: 1999, type: "Movie", role: "Mace Windu", creditType: "Actor", source: "Public filmography reference" },
      { title: "Shaft", year: 2000, type: "Movie", role: "John Shaft", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Unbreakable", year: 2000, type: "Movie", role: "Elijah Price / Mr. Glass", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode II – Attack of the Clones", year: 2002, type: "Movie", role: "Mace Windu", creditType: "Actor", source: "Public filmography reference" },
      { title: "Coach Carter", year: 2005, type: "Movie", role: "Ken Carter", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: Episode III – Revenge of the Sith", year: 2005, type: "Movie", role: "Mace Windu", creditType: "Actor", source: "Public filmography reference" },
      { title: "Snakes on a Plane", year: 2006, type: "Movie", role: "Neville Flynn", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Iron Man", year: 2008, type: "Movie", role: "Nick Fury", creditType: "Actor / Cameo", source: "Public filmography reference" },
      { title: "The Avengers", year: 2012, type: "Movie", role: "Nick Fury", creditType: "Actor", source: "Public filmography reference" },
      { title: "Django Unchained", year: 2012, type: "Movie", role: "Stephen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: The Winter Soldier", year: 2014, type: "Movie", role: "Nick Fury", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kingsman: The Secret Service", year: 2014, type: "Movie", role: "Richmond Valentine", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hateful Eight", year: 2015, type: "Movie", role: "Major Marquis Warren", creditType: "Actor", source: "Public filmography reference" },
      { title: "Miss Peregrine's Home for Peculiar Children", year: 2016, type: "Movie", role: "Mr. Barron", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kong: Skull Island", year: 2017, type: "Movie", role: "Preston Packard", creditType: "Actor", source: "Public filmography reference" },
      { title: "Incredibles 2", year: 2018, type: "Movie", role: "Lucius Best / Frozone", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Captain Marvel", year: 2019, type: "Movie", role: "Nick Fury", creditType: "Actor", source: "Public filmography reference" },
      { title: "Glass", year: 2019, type: "Movie", role: "Elijah Price / Mr. Glass", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: Far From Home", year: 2019, type: "Movie", role: "Nick Fury / Talos disguise reveal context", creditType: "Actor", source: "Public filmography reference" },
      { title: "Secret Invasion", year: 2023, type: "TV Miniseries", role: "Nick Fury", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "The Marvels", year: 2023, type: "Movie", role: "Nick Fury", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Jake Gyllenhaal": [
      { title: "City Slickers", year: 1991, type: "Movie", role: "Danny Robbins", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Dangerous Woman", year: 1993, type: "Movie", role: "Edward", creditType: "Actor", source: "Public filmography reference" },
      { title: "Homegrown", year: 1998, type: "Movie", role: "Jake / Blue Kahan", creditType: "Actor", source: "Public filmography reference" },
      { title: "October Sky", year: 1999, type: "Movie", role: "Homer Hickam", creditType: "Actor", source: "Public filmography reference" },
      { title: "Donnie Darko", year: 2001, type: "Movie", role: "Donnie Darko", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bubble Boy", year: 2001, type: "Movie", role: "Jimmy Livingston", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Good Girl", year: 2002, type: "Movie", role: "Holden Worther", creditType: "Actor", source: "Public filmography reference" },
      { title: "Moonlight Mile", year: 2002, type: "Movie", role: "Joe Nast", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Day After Tomorrow", year: 2004, type: "Movie", role: "Sam Hall", creditType: "Actor", source: "Public filmography reference" },
      { title: "Brokeback Mountain", year: 2005, type: "Movie", role: "Jack Twist", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jarhead", year: 2005, type: "Movie", role: "Anthony Swofford", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zodiac", year: 2007, type: "Movie", role: "Robert Graysmith", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rendition", year: 2007, type: "Movie", role: "Douglas Freeman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Brothers", year: 2009, type: "Movie", role: "Tommy Cahill", creditType: "Actor", source: "Public filmography reference" },
      { title: "Prince of Persia: The Sands of Time", year: 2010, type: "Movie", role: "Dastan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love & Other Drugs", year: 2010, type: "Movie", role: "Jamie Randall", creditType: "Actor", source: "Public filmography reference" },
      { title: "Source Code", year: 2011, type: "Movie", role: "Colter Stevens", creditType: "Actor", source: "Public filmography reference" },
      { title: "End of Watch", year: 2012, type: "Movie", role: "Brian Taylor", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Prisoners", year: 2013, type: "Movie", role: "Detective Loki", creditType: "Actor", source: "Public filmography reference" },
      { title: "Enemy", year: 2013, type: "Movie", role: "Adam Bell / Anthony Claire", creditType: "Actor", source: "Public filmography reference" },
      { title: "Nightcrawler", year: 2014, type: "Movie", role: "Lou Bloom", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Southpaw", year: 2015, type: "Movie", role: "Billy Hope", creditType: "Actor", source: "Public filmography reference" },
      { title: "Everest", year: 2015, type: "Movie", role: "Scott Fischer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Nocturnal Animals", year: 2016, type: "Movie", role: "Edward Sheffield / Tony Hastings", creditType: "Actor", source: "Public filmography reference" },
      { title: "Life", year: 2017, type: "Movie", role: "David Jordan", creditType: "Actor", source: "Public filmography reference" },
      { title: "Stronger", year: 2017, type: "Movie", role: "Jeff Bauman", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Velvet Buzzsaw", year: 2019, type: "Movie", role: "Morf Vandewalt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: Far From Home", year: 2019, type: "Movie", role: "Quentin Beck / Mysterio", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Guilty", year: 2021, type: "Movie", role: "Joe Baylor", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Ambulance", year: 2022, type: "Movie", role: "Danny Sharp", creditType: "Actor", source: "Public filmography reference" },
      { title: "Guy Ritchie's The Covenant", year: 2023, type: "Movie", role: "Sgt. John Kinley", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Road House", year: 2024, type: "Movie", role: "Elwood Dalton", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Presumed Innocent", year: 2024, type: "TV Miniseries", role: "Rusty Sabich", creditType: "Actor / Executive Producer", source: "Public filmography reference" }
    ],

    "Marisa Tomei": [
      { title: "As the World Turns", year: 1983, type: "TV Series", role: "Marcy Thompson", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Different World", year: 1987, type: "TV Series", role: "Maggie Lauten", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Flamingo Kid", year: 1984, type: "Movie", role: "Mandy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Oscar", year: 1991, type: "Movie", role: "Lisa Provolone", creditType: "Actor", source: "Public filmography reference" },
      { title: "My Cousin Vinny", year: 1992, type: "Movie", role: "Mona Lisa Vito", creditType: "Actor", source: "Public filmography reference" },
      { title: "Untamed Heart", year: 1993, type: "Movie", role: "Caroline", creditType: "Actor", source: "Public filmography reference" },
      { title: "Chaplin", year: 1992, type: "Movie", role: "Mabel Normand", creditType: "Actor", source: "Public filmography reference" },
      { title: "Only You", year: 1994, type: "Movie", role: "Faith Corvatch", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Perez Family", year: 1995, type: "Movie", role: "Dorita Evita Perez", creditType: "Actor", source: "Public filmography reference" },
      { title: "Slums of Beverly Hills", year: 1998, type: "Movie", role: "Rita Abromowitz", creditType: "Actor", source: "Public filmography reference" },
      { title: "What Women Want", year: 2000, type: "Movie", role: "Lola", creditType: "Actor", source: "Public filmography reference" },
      { title: "In the Bedroom", year: 2001, type: "Movie", role: "Natalie Strout", creditType: "Actor", source: "Public filmography reference" },
      { title: "Anger Management", year: 2003, type: "Movie", role: "Linda", creditType: "Actor", source: "Public filmography reference" },
      { title: "Alfie", year: 2004, type: "Movie", role: "Julie", creditType: "Actor", source: "Public filmography reference" },
      { title: "Factotum", year: 2005, type: "Movie", role: "Laura", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wild Hogs", year: 2007, type: "Movie", role: "Maggie", creditType: "Actor", source: "Public filmography reference" },
      { title: "Before the Devil Knows You're Dead", year: 2007, type: "Movie", role: "Gina Hanson", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Wrestler", year: 2008, type: "Movie", role: "Cassidy / Pam", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Lincoln Lawyer", year: 2011, type: "Movie", role: "Maggie McPherson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Crazy, Stupid, Love", year: 2011, type: "Movie", role: "Kate Tafferty", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Ides of March", year: 2011, type: "Movie", role: "Ida Horowicz", creditType: "Actor", source: "Public filmography reference" },
      { title: "Parental Guidance", year: 2012, type: "Movie", role: "Alice Simmons", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Big Short", year: 2015, type: "Movie", role: "Cynthia Baum", creditType: "Actor", source: "Public filmography reference" },
      { title: "Empire", year: 2015, type: "TV Series", role: "Mimi Whiteman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Captain America: Civil War", year: 2016, type: "Movie", role: "May Parker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: Homecoming", year: 2017, type: "Movie", role: "May Parker", creditType: "Actor", source: "Public filmography reference" },
      { title: "The First Purge", year: 2018, type: "Movie", role: "Dr. May Updale", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: Far From Home", year: 2019, type: "Movie", role: "May Parker", creditType: "Actor", source: "Public filmography reference" },
      { title: "The King of Staten Island", year: 2020, type: "Movie", role: "Margie Carlin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: No Way Home", year: 2021, type: "Movie", role: "May Parker", creditType: "Actor", source: "Public filmography reference" },
      { title: "Upgraded", year: 2024, type: "Movie", role: "Claire Dupont", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Michael Keaton": [
      { title: "Working Stiffs", year: 1979, type: "TV Series", role: "Mike O'Rourke", creditType: "Actor", source: "Public filmography reference" },
      { title: "Night Shift", year: 1982, type: "Movie", role: "Bill Blazejowski", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mr. Mom", year: 1983, type: "Movie", role: "Jack Butler", creditType: "Actor", source: "Public filmography reference" },
      { title: "Johnny Dangerously", year: 1984, type: "Movie", role: "Johnny Kelly / Johnny Dangerously", creditType: "Actor", source: "Public filmography reference" },
      { title: "Gung Ho", year: 1986, type: "Movie", role: "Hunt Stevenson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Beetlejuice", year: 1988, type: "Movie", role: "Betelgeuse", creditType: "Actor", source: "Public filmography reference" },
      { title: "Clean and Sober", year: 1988, type: "Movie", role: "Daryl Poynter", creditType: "Actor", source: "Public filmography reference" },
      { title: "Batman", year: 1989, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pacific Heights", year: 1990, type: "Movie", role: "Carter Hayes", creditType: "Actor", source: "Public filmography reference" },
      { title: "Batman Returns", year: 1992, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Much Ado About Nothing", year: 1993, type: "Movie", role: "Dogberry", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Paper", year: 1994, type: "Movie", role: "Henry Hackett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Multiplicity", year: 1996, type: "Movie", role: "Doug Kinney", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jackie Brown", year: 1997, type: "Movie", role: "Ray Nicolette", creditType: "Actor", source: "Public filmography reference" },
      { title: "Jack Frost", year: 1998, type: "Movie", role: "Jack Frost", creditType: "Actor", source: "Public filmography reference" },
      { title: "First Daughter", year: 2004, type: "Movie", role: "President Mackenzie", creditType: "Actor", source: "Public filmography reference" },
      { title: "Herbie: Fully Loaded", year: 2005, type: "Movie", role: "Ray Peyton Sr.", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cars", year: 2006, type: "Movie", role: "Chick Hicks", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Other Guys", year: 2010, type: "Movie", role: "Captain Gene Mauch", creditType: "Actor", source: "Public filmography reference" },
      { title: "Toy Story 3", year: 2010, type: "Movie", role: "Ken", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "RoboCop", year: 2014, type: "Movie", role: "Raymond Sellars", creditType: "Actor", source: "Public filmography reference" },
      { title: "Birdman", year: 2014, type: "Movie", role: "Riggan Thomson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spotlight", year: 2015, type: "Movie", role: "Walter “Robby” Robinson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Minions", year: 2015, type: "Movie", role: "Walter Nelson", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Founder", year: 2016, type: "Movie", role: "Ray Kroc", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: Homecoming", year: 2017, type: "Movie", role: "Adrian Toomes / Vulture", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dumbo", year: 2019, type: "Movie", role: "V. A. Vandevere", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Trial of the Chicago 7", year: 2020, type: "Movie", role: "Ramsey Clark", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dopesick", year: 2021, type: "TV Miniseries", role: "Dr. Samuel Finnix", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "The Flash", year: 2023, type: "Movie", role: "Bruce Wayne / Batman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Knox Goes Away", year: 2023, type: "Movie", role: "John Knox", creditType: "Actor / Director", source: "Public filmography reference" },
      { title: "Beetlejuice Beetlejuice", year: 2024, type: "Movie", role: "Betelgeuse", creditType: "Actor", source: "Public filmography reference" },
      { title: "Goodrich", year: 2024, type: "Movie", role: "Andy Goodrich", creditType: "Actor / Executive Producer", source: "Public filmography reference" }
    ],

    "Timothée Chalamet": [
      { title: "Law & Order", year: 2009, type: "TV Series", role: "Eric Foley", creditType: "Actor", source: "Public filmography reference" },
      { title: "Royal Pains", year: 2012, type: "TV Series", role: "Luke", creditType: "Actor", source: "Public filmography reference" },
      { title: "Homeland", year: 2012, type: "TV Series", role: "Finn Walden", creditType: "Actor", source: "Public filmography reference" },
      { title: "Men, Women & Children", year: 2014, type: "Movie", role: "Danny Vance", creditType: "Actor", source: "Public filmography reference" },
      { title: "Interstellar", year: 2014, type: "Movie", role: "Young Tom Cooper", creditType: "Actor", source: "Public filmography reference" },
      { title: "Worst Friends", year: 2014, type: "Movie", role: "Young Sam", creditType: "Actor", source: "Public filmography reference" },
      { title: "One & Two", year: 2015, type: "Movie", role: "Zac", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Adderall Diaries", year: 2015, type: "Movie", role: "Teenage Stephen Elliott", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love the Coopers", year: 2015, type: "Movie", role: "Charlie Cooper", creditType: "Actor", source: "Public filmography reference" },
      { title: "Miss Stevens", year: 2016, type: "Movie", role: "Billy Mitman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Call Me by Your Name", year: 2017, type: "Movie", role: "Elio Perlman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hot Summer Nights", year: 2017, type: "Movie", role: "Daniel Middleton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lady Bird", year: 2017, type: "Movie", role: "Kyle Scheible", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hostiles", year: 2017, type: "Movie", role: "Philippe DeJardin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Beautiful Boy", year: 2018, type: "Movie", role: "Nic Sheff", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Rainy Day in New York", year: 2019, type: "Movie", role: "Gatsby Welles", creditType: "Actor", source: "Public filmography reference" },
      { title: "The King", year: 2019, type: "Movie", role: "King Henry V", creditType: "Actor", source: "Public filmography reference" },
      { title: "Little Women", year: 2019, type: "Movie", role: "Theodore “Laurie” Laurence", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dune", year: 2021, type: "Movie", role: "Paul Atreides", creditType: "Actor", source: "Public filmography reference" },
      { title: "The French Dispatch", year: 2021, type: "Movie", role: "Zeffirelli", creditType: "Actor", source: "Public filmography reference" },
      { title: "Don't Look Up", year: 2021, type: "Movie", role: "Yule", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bones and All", year: 2022, type: "Movie", role: "Lee", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Wonka", year: 2023, type: "Movie", role: "Willy Wonka", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dune: Part Two", year: 2024, type: "Movie", role: "Paul Atreides", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Complete Unknown", year: 2024, type: "Movie", role: "Bob Dylan", creditType: "Actor / Producer", source: "Public filmography reference" }
    ],

    "Rebecca Ferguson": [
      { title: "Nya tider", year: 1999, type: "TV Series", role: "Anna Gripenhielm", creditType: "Actor", source: "Public filmography reference" },
      { title: "Drowning Ghost", year: 2004, type: "Movie", role: "Amanda", creditType: "Actor", source: "Public filmography reference" },
      { title: "The White Queen", year: 2013, type: "TV Miniseries", role: "Elizabeth Woodville", creditType: "Actor", source: "Public filmography reference" },
      { title: "Hercules", year: 2014, type: "Movie", role: "Ergenia", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Red Tent", year: 2014, type: "TV Miniseries", role: "Dinah", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mission: Impossible – Rogue Nation", year: 2015, type: "Movie", role: "Ilsa Faust", creditType: "Actor", source: "Public filmography reference" },
      { title: "Despite the Falling Snow", year: 2016, type: "Movie", role: "Katya / Lauren", creditType: "Actor", source: "Public filmography reference" },
      { title: "Florence Foster Jenkins", year: 2016, type: "Movie", role: "Kathleen Weatherley", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Girl on the Train", year: 2016, type: "Movie", role: "Anna Watson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Life", year: 2017, type: "Movie", role: "Miranda North", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Snowman", year: 2017, type: "Movie", role: "Katrine Bratt", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Greatest Showman", year: 2017, type: "Movie", role: "Jenny Lind", creditType: "Actor", source: "Public filmography reference" },
      { title: "Mission: Impossible – Fallout", year: 2018, type: "Movie", role: "Ilsa Faust", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Kid Who Would Be King", year: 2019, type: "Movie", role: "Morgana", creditType: "Actor", source: "Public filmography reference" },
      { title: "Doctor Sleep", year: 2019, type: "Movie", role: "Rose the Hat", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dune", year: 2021, type: "Movie", role: "Lady Jessica", creditType: "Actor", source: "Public filmography reference" },
      { title: "Reminiscence", year: 2021, type: "Movie", role: "Mae", creditType: "Actor", source: "Public filmography reference" },
      { title: "Silo", year: 2023, type: "TV Series", role: "Juliette Nichols", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Mission: Impossible – Dead Reckoning Part One", year: 2023, type: "Movie", role: "Ilsa Faust", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dune: Part Two", year: 2024, type: "Movie", role: "Lady Jessica", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Oscar Isaac": [
      { title: "Illtown", year: 1998, type: "Movie", role: "Pool Boy", creditType: "Actor", source: "Public filmography reference" },
      { title: "All About the Benjamins", year: 2002, type: "Movie", role: "Francesco", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Nativity Story", year: 2006, type: "Movie", role: "Joseph", creditType: "Actor", source: "Public filmography reference" },
      { title: "Pu-239", year: 2006, type: "Movie", role: "Shiv", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Life Before Her Eyes", year: 2007, type: "Movie", role: "Marcus", creditType: "Actor", source: "Public filmography reference" },
      { title: "Che: Part One", year: 2008, type: "Movie", role: "Interpreter", creditType: "Actor", source: "Public filmography reference" },
      { title: "Body of Lies", year: 2008, type: "Movie", role: "Bassam", creditType: "Actor", source: "Public filmography reference" },
      { title: "Agora", year: 2009, type: "Movie", role: "Orestes", creditType: "Actor", source: "Public filmography reference" },
      { title: "Balibo", year: 2009, type: "Movie", role: "José Ramos-Horta", creditType: "Actor", source: "Public filmography reference" },
      { title: "Robin Hood", year: 2010, type: "Movie", role: "Prince John", creditType: "Actor", source: "Public filmography reference" },
      { title: "Sucker Punch", year: 2011, type: "Movie", role: "Blue Jones", creditType: "Actor", source: "Public filmography reference" },
      { title: "Drive", year: 2011, type: "Movie", role: "Standard Gabriel", creditType: "Actor", source: "Public filmography reference" },
      { title: "W.E.", year: 2011, type: "Movie", role: "Evgeni", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Bourne Legacy", year: 2012, type: "Movie", role: "Outcome #3", creditType: "Actor", source: "Public filmography reference" },
      { title: "Inside Llewyn Davis", year: 2013, type: "Movie", role: "Llewyn Davis", creditType: "Actor / Singer", source: "Public filmography reference" },
      { title: "A Most Violent Year", year: 2014, type: "Movie", role: "Abel Morales", creditType: "Actor", source: "Public filmography reference" },
      { title: "Ex Machina", year: 2015, type: "Movie", role: "Nathan Bateman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: The Force Awakens", year: 2015, type: "Movie", role: "Poe Dameron", creditType: "Actor", source: "Public filmography reference" },
      { title: "X-Men: Apocalypse", year: 2016, type: "Movie", role: "En Sabah Nur / Apocalypse", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Promise", year: 2016, type: "Movie", role: "Mikael Boghosian", creditType: "Actor", source: "Public filmography reference" },
      { title: "Suburbicon", year: 2017, type: "Movie", role: "Bud Cooper", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: The Last Jedi", year: 2017, type: "Movie", role: "Poe Dameron", creditType: "Actor", source: "Public filmography reference" },
      { title: "Annihilation", year: 2018, type: "Movie", role: "Kane", creditType: "Actor", source: "Public filmography reference" },
      { title: "At Eternity's Gate", year: 2018, type: "Movie", role: "Paul Gauguin", creditType: "Actor", source: "Public filmography reference" },
      { title: "Spider-Man: Into the Spider-Verse", year: 2018, type: "Movie", role: "Miguel O'Hara / Spider-Man 2099", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Triple Frontier", year: 2019, type: "Movie", role: "Santiago “Pope” Garcia", creditType: "Actor", source: "Public filmography reference" },
      { title: "Star Wars: The Rise of Skywalker", year: 2019, type: "Movie", role: "Poe Dameron", creditType: "Actor", source: "Public filmography reference" },
      { title: "Scenes from a Marriage", year: 2021, type: "TV Miniseries", role: "Jonathan Levy", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "The Card Counter", year: 2021, type: "Movie", role: "William Tell", creditType: "Actor", source: "Public filmography reference" },
      { title: "Dune", year: 2021, type: "Movie", role: "Duke Leto Atreides", creditType: "Actor", source: "Public filmography reference" },
      { title: "Moon Knight", year: 2022, type: "TV Miniseries", role: "Marc Spector / Steven Grant / Jake Lockley", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Spider-Man: Across the Spider-Verse", year: 2023, type: "Movie", role: "Miguel O'Hara / Spider-Man 2099", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Frankenstein", year: 2025, type: "Movie", role: "Victor Frankenstein", creditType: "Actor", source: "Public film reference" }
    ],

    "Josh Hutcherson": [
      { title: "House Blend", year: 2002, type: "TV Pilot", role: "Nicky Harper", creditType: "Actor", source: "Public filmography reference" },
      { title: "ER", year: 2002, type: "TV Series", role: "Matt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Miracle Dogs", year: 2003, type: "TV Movie", role: "Charlie Logan", creditType: "Actor", source: "Public filmography reference" },
      { title: "American Splendor", year: 2003, type: "Movie", role: "Robin", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Polar Express", year: 2004, type: "Movie", role: "Hero Boy additional motion capture", creditType: "Motion Capture / Voice", source: "Public filmography reference" },
      { title: "Howl's Moving Castle", year: 2005, type: "Movie", role: "Markl", creditType: "English Voice Actor", source: "Public filmography reference" },
      { title: "Kicking & Screaming", year: 2005, type: "Movie", role: "Bucky Weston", creditType: "Actor", source: "Public filmography reference" },
      { title: "Little Manhattan", year: 2005, type: "Movie", role: "Gabe Burton", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zathura: A Space Adventure", year: 2005, type: "Movie", role: "Walter Budwing", creditType: "Actor", source: "Public filmography reference" },
      { title: "RV", year: 2006, type: "Movie", role: "Carl Munro", creditType: "Actor", source: "Public filmography reference" },
      { title: "Bridge to Terabithia", year: 2007, type: "Movie", role: "Jesse Aarons", creditType: "Actor", source: "Public filmography reference" },
      { title: "Firehouse Dog", year: 2007, type: "Movie", role: "Shane Fahey", creditType: "Actor", source: "Public filmography reference" },
      { title: "Journey to the Center of the Earth", year: 2008, type: "Movie", role: "Sean Anderson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cirque du Freak: The Vampire's Assistant", year: 2009, type: "Movie", role: "Steve Leonard", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Kids Are All Right", year: 2010, type: "Movie", role: "Laser", creditType: "Actor", source: "Public filmography reference" },
      { title: "Detention", year: 2011, type: "Movie", role: "Clapton Davis", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Journey 2: The Mysterious Island", year: 2012, type: "Movie", role: "Sean Anderson", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games", year: 2012, type: "Movie", role: "Peeta Mellark", creditType: "Actor", source: "Public filmography reference" },
      { title: "Red Dawn", year: 2012, type: "Movie", role: "Robert Kitner", creditType: "Actor", source: "Public filmography reference" },
      { title: "Epic", year: 2013, type: "Movie", role: "Nod", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Catching Fire", year: 2013, type: "Movie", role: "Peeta Mellark", creditType: "Actor", source: "Public filmography reference" },
      { title: "Escobar: Paradise Lost", year: 2014, type: "Movie", role: "Nick Brady", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 1", year: 2014, type: "Movie", role: "Peeta Mellark", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 2", year: 2015, type: "Movie", role: "Peeta Mellark", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Disaster Artist", year: 2017, type: "Movie", role: "Philip Haldiman", creditType: "Actor", source: "Public filmography reference" },
      { title: "Future Man", year: 2017, type: "TV Series", role: "Josh Futturman", creditType: "Actor / Producer", source: "Public filmography reference" },
      { title: "Elliot: The Littlest Reindeer", year: 2018, type: "Movie", role: "Elliot", creditType: "Voice Actor", source: "Public filmography reference" },
      { title: "Burn", year: 2019, type: "Movie", role: "Billy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Across the River and Into the Trees", year: 2022, type: "Movie", role: "Jackson", creditType: "Actor", source: "Public filmography reference" },
      { title: "Five Nights at Freddy's", year: 2023, type: "Movie", role: "Mike Schmidt", creditType: "Actor", source: "Public filmography reference" },
      { title: "57 Seconds", year: 2023, type: "Movie", role: "Franklin Fox", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Beekeeper", year: 2024, type: "Movie", role: "Derek Danforth", creditType: "Actor", source: "Public filmography reference" },
      { title: "Five Nights at Freddy's 2", year: 2025, type: "Movie", role: "Mike Schmidt", creditType: "Actor", source: "Public filmography reference" }
    ],

    "Liam Hemsworth": [
      { title: "Home and Away", year: 2007, type: "TV Series", role: "Uncredited / guest appearance", creditType: "Actor", source: "Public filmography reference" },
      { title: "McLeod's Daughters", year: 2007, type: "TV Series", role: "Damo", creditType: "Actor", source: "Public filmography reference" },
      { title: "Neighbours", year: 2007, type: "TV Series", role: "Josh Taylor", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Elephant Princess", year: 2008, type: "TV Series", role: "Marcus", creditType: "Actor", source: "Public filmography reference" },
      { title: "Knowing", year: 2009, type: "Movie", role: "Spencer", creditType: "Actor", source: "Public filmography reference" },
      { title: "Triangle", year: 2009, type: "Movie", role: "Victor", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Last Song", year: 2010, type: "Movie", role: "Will Blakelee", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games", year: 2012, type: "Movie", role: "Gale Hawthorne", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Expendables 2", year: 2012, type: "Movie", role: "Billy the Kid", creditType: "Actor", source: "Public filmography reference" },
      { title: "Love and Honor", year: 2013, type: "Movie", role: "Mickey Wright", creditType: "Actor", source: "Public filmography reference" },
      { title: "Paranoia", year: 2013, type: "Movie", role: "Adam Cassidy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Catching Fire", year: 2013, type: "Movie", role: "Gale Hawthorne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Empire State", year: 2013, type: "Movie", role: "Chris Potamitis", creditType: "Actor", source: "Public filmography reference" },
      { title: "Cut Bank", year: 2014, type: "Movie", role: "Dwayne McLaren", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 1", year: 2014, type: "Movie", role: "Gale Hawthorne", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Dressmaker", year: 2015, type: "Movie", role: "Teddy McSwiney", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 2", year: 2015, type: "Movie", role: "Gale Hawthorne", creditType: "Actor", source: "Public filmography reference" },
      { title: "Independence Day: Resurgence", year: 2016, type: "Movie", role: "Jake Morrison", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Duel", year: 2016, type: "Movie", role: "David Kingston", creditType: "Actor", source: "Public filmography reference" },
      { title: "Isn't It Romantic", year: 2019, type: "Movie", role: "Blake", creditType: "Actor", source: "Public filmography reference" },
      { title: "Killerman", year: 2019, type: "Movie", role: "Moe Diamond", creditType: "Actor", source: "Public filmography reference" },
      { title: "Most Dangerous Game", year: 2020, type: "TV Series", role: "Dodge Maynard", creditType: "Actor", source: "Public filmography reference" },
      { title: "Arkansas", year: 2020, type: "Movie", role: "Kyle", creditType: "Actor", source: "Public filmography reference" },
      { title: "Poker Face", year: 2022, type: "Movie", role: "Michael Nankervis", creditType: "Actor", source: "Public filmography reference" },
      { title: "Lonely Planet", year: 2024, type: "Movie", role: "Owen Brophy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Witcher", year: 2025, type: "TV Series", role: "Geralt of Rivia", creditType: "Actor", source: "Public role reference" }
    ],

    "Woody Harrelson": [
      { title: "Harper Valley PTA", year: 1978, type: "Movie", role: "Extra", creditType: "Actor / Uncredited", source: "Public filmography reference" },
      { title: "Cheers", year: 1985, type: "TV Series", role: "Woody Boyd", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wildcats", year: 1986, type: "Movie", role: "Krushinski", creditType: "Actor", source: "Public filmography reference" },
      { title: "Doc Hollywood", year: 1991, type: "Movie", role: "Hank Gordon", creditType: "Actor", source: "Public filmography reference" },
      { title: "White Men Can't Jump", year: 1992, type: "Movie", role: "Billy Hoyle", creditType: "Actor", source: "Public filmography reference" },
      { title: "Indecent Proposal", year: 1993, type: "Movie", role: "David Murphy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Natural Born Killers", year: 1994, type: "Movie", role: "Mickey Knox", creditType: "Actor", source: "Public filmography reference" },
      { title: "Money Train", year: 1995, type: "Movie", role: "Charlie", creditType: "Actor", source: "Public filmography reference" },
      { title: "Kingpin", year: 1996, type: "Movie", role: "Roy Munson", creditType: "Actor", source: "Public filmography reference" },
      { title: "The People vs. Larry Flynt", year: 1996, type: "Movie", role: "Larry Flynt", creditType: "Actor", source: "Public filmography reference" },
      { title: "Wag the Dog", year: 1997, type: "Movie", role: "Sgt. William Schumann", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Thin Red Line", year: 1998, type: "Movie", role: "Sgt. Keck", creditType: "Actor", source: "Public filmography reference" },
      { title: "EDtv", year: 1999, type: "Movie", role: "Ray Pekurny", creditType: "Actor", source: "Public filmography reference" },
      { title: "Anger Management", year: 2003, type: "Movie", role: "Galaxia / security guard", creditType: "Actor", source: "Public filmography reference" },
      { title: "North Country", year: 2005, type: "Movie", role: "Bill White", creditType: "Actor", source: "Public filmography reference" },
      { title: "A Scanner Darkly", year: 2006, type: "Movie", role: "Ernie Luckman", creditType: "Actor / Voice", source: "Public filmography reference" },
      { title: "No Country for Old Men", year: 2007, type: "Movie", role: "Carson Wells", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zombieland", year: 2009, type: "Movie", role: "Tallahassee", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Messenger", year: 2009, type: "Movie", role: "Tony Stone", creditType: "Actor", source: "Public filmography reference" },
      { title: "2012", year: 2009, type: "Movie", role: "Charlie Frost", creditType: "Actor", source: "Public filmography reference" },
      { title: "Friends with Benefits", year: 2011, type: "Movie", role: "Tommy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Rampart", year: 2011, type: "Movie", role: "Dave Brown", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games", year: 2012, type: "Movie", role: "Haymitch Abernathy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Seven Psychopaths", year: 2012, type: "Movie", role: "Charlie Costello", creditType: "Actor", source: "Public filmography reference" },
      { title: "Now You See Me", year: 2013, type: "Movie", role: "Merritt McKinney", creditType: "Actor", source: "Public filmography reference" },
      { title: "Out of the Furnace", year: 2013, type: "Movie", role: "Harlan DeGroat", creditType: "Actor", source: "Public filmography reference" },
      { title: "True Detective", year: 2014, type: "TV Series", role: "Marty Hart", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "The Hunger Games: Catching Fire", year: 2013, type: "Movie", role: "Haymitch Abernathy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 1", year: 2014, type: "Movie", role: "Haymitch Abernathy", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Hunger Games: Mockingjay – Part 2", year: 2015, type: "Movie", role: "Haymitch Abernathy", creditType: "Actor", source: "Public filmography reference" },
      { title: "Triple 9", year: 2016, type: "Movie", role: "Jeffrey Allen", creditType: "Actor", source: "Public filmography reference" },
      { title: "Now You See Me 2", year: 2016, type: "Movie", role: "Merritt McKinney / Chase McKinney", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Edge of Seventeen", year: 2016, type: "Movie", role: "Mr. Bruner", creditType: "Actor", source: "Public filmography reference" },
      { title: "War for the Planet of the Apes", year: 2017, type: "Movie", role: "The Colonel", creditType: "Actor", source: "Public filmography reference" },
      { title: "Three Billboards Outside Ebbing, Missouri", year: 2017, type: "Movie", role: "Chief Bill Willoughby", creditType: "Actor", source: "Public filmography reference" },
      { title: "Solo: A Star Wars Story", year: 2018, type: "Movie", role: "Tobias Beckett", creditType: "Actor", source: "Public filmography reference" },
      { title: "Zombieland: Double Tap", year: 2019, type: "Movie", role: "Tallahassee", creditType: "Actor", source: "Public filmography reference" },
      { title: "Midway", year: 2019, type: "Movie", role: "Chester W. Nimitz", creditType: "Actor", source: "Public filmography reference" },
      { title: "Venom: Let There Be Carnage", year: 2021, type: "Movie", role: "Cletus Kasady / Carnage", creditType: "Actor", source: "Public filmography reference" },
      { title: "The Man from Toronto", year: 2022, type: "Movie", role: "The Man from Toronto", creditType: "Actor", source: "Public filmography reference" },
      { title: "Champions", year: 2023, type: "Movie", role: "Marcus Marakovich", creditType: "Actor", source: "Public filmography reference" },
      { title: "White House Plumbers", year: 2023, type: "TV Miniseries", role: "E. Howard Hunt", creditType: "Actor / Executive Producer", source: "Public filmography reference" },
      { title: "Brothers", year: 2026, type: "TV Series", role: "Fictionalized version of himself", creditType: "Actor", source: "Public news reference" }
    ]
  };

  const realCredentialHighlightsBatch5 = {
    "Samuel L. Jackson": [
      "One of the most prolific film actors of the modern era.",
      "Known for Jules Winnfield, Nick Fury, Mace Windu, Elijah Price, and Stephen in Django Unchained.",
      "Major collaborations include Spike Lee, Quentin Tarantino, Marvel Studios, and Star Wars."
    ],
    "Jake Gyllenhaal": [
      "Known for Donnie Darko, Brokeback Mountain, Zodiac, Nightcrawler, Prisoners, and Road House.",
      "Has major film, theater, producer, and limited-series credits.",
      "Known for intense dramatic, thriller, action, and character-driven roles."
    ],
    "Marisa Tomei": [
      "Academy Award winner for My Cousin Vinny.",
      "Known for Mona Lisa Vito, Aunt May, The Wrestler, In the Bedroom, and The Big Short.",
      "Career spans television, film, theater, comedy, drama, and Marvel franchise roles."
    ],
    "Michael Keaton": [
      "Known for Beetlejuice, Batman, Birdman, Spotlight, Dopesick, and The Founder.",
      "Major credits include actor, voice actor, director, and executive producer work.",
      "Returned to major awards prominence with Birdman and Spotlight."
    ],
    "Timothée Chalamet": [
      "Known for Call Me by Your Name, Dune, Wonka, Little Women, and A Complete Unknown.",
      "Major credits include actor and producer work.",
      "One of the most prominent younger film actors of his generation."
    ],
    "Rebecca Ferguson": [
      "Known for Ilsa Faust in Mission: Impossible and Lady Jessica in Dune.",
      "Major credits include The White Queen, The Greatest Showman, Doctor Sleep, and Silo.",
      "Works across film, television, thriller, sci-fi, action, and drama."
    ],
    "Oscar Isaac": [
      "Golden Globe winner known for Inside Llewyn Davis, Ex Machina, Star Wars, Dune, and Moon Knight.",
      "Major credits include actor, singer, producer, and executive producer work.",
      "Known for both franchise and prestige drama roles."
    ],
    "Josh Hutcherson": [
      "Known for Peeta Mellark in The Hunger Games franchise.",
      "Major credits include Bridge to Terabithia, Journey films, Future Man, and Five Nights at Freddy's.",
      "Also has executive producer credits on several projects."
    ],
    "Liam Hemsworth": [
      "Known for Gale Hawthorne in The Hunger Games franchise.",
      "Major credits include The Last Song, Independence Day: Resurgence, The Dressmaker, and Most Dangerous Game.",
      "Australian actor with film, television, and franchise credits."
    ],
    "Woody Harrelson": [
      "Primetime Emmy winner for Cheers.",
      "Known for Woody Boyd, Haymitch Abernathy, Marty Hart, Mickey Knox, and Tallahassee.",
      "Major career spans sitcoms, prestige drama, comedy, action, and franchise work."
    ]
  };

  function actorIsBatch5(actorName) {
    return !!realFullBodyCreditsBatch5[actorName];
  }

  function dedupeCredits(rows) {
    const seen = new Set();

    return (rows || []).filter(row => {
      const key = vClean(row.title + "::" + row.year + "::" + row.role + "::" + row.creditType);

      if (seen.has(key)) return false;

      seen.add(key);
      return true;
    });
  }

  function getBatch5CreditsForActor(actorName) {
    const actor = vFindActor(actorName);
    if (!actor) return [];

    const rows = realFullBodyCreditsBatch5[actor.name];

    if (!rows) {
      return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actor.name) : [];
    }

    return dedupeCredits(rows.map(row => ({
      actorName: actor.name,
      title: row.title,
      year: row.year || "",
      type: row.type || "Movie / TV Credit",
      role: row.role || "Role / job verified from public credit source",
      creditType: row.creditType || "Actor",
      source: row.source || "Public credit reference",
      isRealCredit: true,
      batch: "Batch 5"
    })));
  }

  function applyBatch5DataToActors() {
    vActors().forEach(actor => {
      const credits = realFullBodyCreditsBatch5[actor.name];

      if (!credits) return;

      actor.fullBodyWork = credits.map(row => ({
        title: row.title,
        year: row.year,
        type: row.type,
        role: row.role,
        creditType: row.creditType,
        source: row.source
      }));

      actor.credentials = realCredentialHighlightsBatch5[actor.name] || actor.credentials || [];
      actor.signatureRoles = actor.signatureRoles || {};

      (actor.knownFor || []).forEach((item, index) => {
        const title = Array.isArray(item) ? item[0] : String(item || "");
        const matchingCredit = credits.find(row => vClean(row.title) === vClean(title));

        if (matchingCredit && matchingCredit.role) {
          actor.signatureRoles[title] = matchingCredit.role;
        } else if (Array.isArray(actor.characters) && actor.characters[index]) {
          actor.signatureRoles[title] = actor.characters[index];
        }
      });
    });
  }

  function getSignatureRole(actor, titleName, index) {
    if (!actor) return "Role to verify";

    if (actor.signatureRoles && actor.signatureRoles[titleName]) {
      return actor.signatureRoles[titleName];
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    const credits = realFullBodyCreditsBatch5[actor.name] || [];
    const match = credits.find(row => vClean(row.title) === vClean(titleName));

    if (match && match.role) return match.role;

    return "Role to verify";
  }

  function buildSignatureWorkBatch5(actor) {
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
        <b>Signature Work</b> is the short highlight list — the major movies or shows people quickly connect with this actor.
      </p>

      <div class="cards-grid">
        ${rows.map((item, index) => {
          const title = Array.isArray(item) ? item[0] : String(item || "");
          const year = Array.isArray(item) ? item[1] : "";
          const role = getSignatureRole(actor, title, index);

          return `
            <article class="info-card">
              <h3>${vSafe(title)}</h3>
              <p><b>Year:</b> ${vSafe(year || "Year to verify")}</p>
              <p><b>Character / Role:</b> ${vSafe(role)}</p>
              <p><b>Actor:</b> ${vSafe(actor.name)}</p>
            </article>
          `;
        }).join("")}
      </div>

      ${typeof sourceBlock === "function" ? sourceBlock(actor) : ""}
    `;
  }

  function buildCredentialBlock(actor) {
    const credentials = realCredentialHighlightsBatch5[actor.name] || actor.credentials || [];

    if (!credentials.length) return "";

    return `
      <div class="full-body-box">
        <h3>Real Credentials</h3>
        <div class="full-body-grid">
          ${credentials.map(item => `
            <article class="full-body-card">
              <h3>Credential</h3>
              <p>${vSafe(item)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function buildRealCreditCard(row) {
    return `
      <article class="full-body-card">
        <h3>${vSafe(row.title)}</h3>

        <span class="full-body-pill">${vSafe(row.type || "Credit")}</span>
        ${row.year ? `<span class="full-body-pill">${vSafe(row.year)}</span>` : ""}
        <span class="full-body-pill">${vSafe(row.creditType || "Actor")}</span>

        <p><b>Role / Credit:</b> ${vSafe(row.role || "Role to verify")}</p>
        <p><b>Source inside VEDB:</b> ${vSafe(row.source || "Public credit reference")}</p>

        <p class="full-body-note">
          Real researched Full Body credit loaded in VEDB Batch 5.
        </p>

        <button
          type="button"
          class="full-body-open-title-v4"
          data-actor="${vSafe(row.actorName || "")}"
          data-title="${vSafe(row.title || "")}"
          data-year="${vSafe(row.year || "")}"
          data-type="${vSafe(row.type || "Movie")}"
          data-role="${vSafe(row.role || "Cast member")}"
        >
          Open Title Sphere →
        </button>
      </article>
    `;
  }

  window.getFullBodyOfWorkForActor = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch5(actor.name)) {
      return getBatch5CreditsForActor(actor.name);
    }

    return oldGetFullBodyOfWorkForActor ? oldGetFullBodyOfWorkForActor(actorName) : [];
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  window.buildFullBodyOfWorkContent = function (actorName) {
    const actor = vFindActor(actorName);

    if (actor && actorIsBatch5(actor.name)) {
      const rows = getBatch5CreditsForActor(actor.name);
      const signatureCount = Array.isArray(actor.knownFor) ? actor.knownFor.length : 0;

      return `
        <div class="full-body-box">
          <h3>Signature Work vs. Full Body of Work</h3>

          <p class="full-body-note">
            <b>Signature Work</b> is the short highlight list.
            <b>Full Body of Work</b> is the larger researched credit list.
          </p>

          <p class="full-body-note">
            Real researched Full Body credits are loaded for this actor in Batch 5.
          </p>

          <p>
            <span class="full-body-pill">${signatureCount} Signature Work titles</span>
            <span class="full-body-pill">${rows.length} Full Body credits showing</span>
            <span class="full-body-pill">Full Body is larger</span>
          </p>
        </div>

        ${buildCredentialBlock(actor)}

        <h3 style="color: var(--gold);">Full Body of Work Credits</h3>

        <div class="full-body-grid">
          ${rows.map(buildRealCreditCard).join("")}
        </div>

        ${
          typeof buildAddFullBodyCreditForm === "function"
            ? buildAddFullBodyCreditForm(actor.name)
            : ""
        }
      `;
    }

    return oldBuildFullBodyOfWorkContent
      ? oldBuildFullBodyOfWorkContent(actorName)
      : `<p>Full Body data not loaded yet.</p>`;
  };

  try {
    buildFullBodyOfWorkContent = window.buildFullBodyOfWorkContent;
  } catch (error) {}

  window.actorSection = function (sectionId) {
    if (
      sectionId === "filmography" &&
      typeof currentMode !== "undefined" &&
      currentMode === "actor" &&
      typeof currentEntity !== "undefined" &&
      currentEntity &&
      actorIsBatch5(currentEntity.name)
    ) {
      return buildSignatureWorkBatch5(currentEntity);
    }

    return oldActorSection ? oldActorSection(sectionId) : "";
  };

  try {
    actorSection = window.actorSection;
  } catch (error) {}

  applyBatch5DataToActors();

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  const page = document.getElementById("sectionPage");

  if (page && page.style.display !== "none") {
    if (page.textContent.includes("Signature Work") && typeof openSectionPage === "function") {
      setTimeout(function () {
        openSectionPage("filmography");
      }, 100);
    }

    if (page.textContent.includes("VEDB FULL BODY OF WORK") && typeof openFullBodyOfWorkPage === "function") {
      setTimeout(function () {
        let actorName = "";

        try {
          actorName =
            typeof currentEntity !== "undefined" && currentEntity && currentEntity.name
              ? currentEntity.name
              : "";
        } catch (error) {}

        if (actorName) {
          openFullBodyOfWorkPage(actorName);
        }
      }, 100);
    }
  }

  console.log("VEDB Real Full Body Credits Batch 5 loaded.");
})();
/* =========================================================
   VEDB FULL BODY CREDITS — ADDITIONAL ACTORS v2
   Adds missing Full Body credit data through the real
   getFullBodyOfWorkForActor() pathway.

   Current actor:
   - Dwayne Johnson
========================================================= */

(function () {
  if (window.vedbAdditionalFullBodyCreditsV2Installed) return;
  window.vedbAdditionalFullBodyCreditsV2Installed = true;

  const VEDB_ADDITIONAL_FULL_BODY_CREDITS_V2 = {
    "dwayne johnson": [
      {
        actorName: "Dwayne Johnson",
        title: "The Mummy Returns",
        year: "2001",
        type: "Movie",
        role: "Mathayus / The Scorpion King",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "The Scorpion King",
        year: "2002",
        type: "Movie",
        role: "Mathayus",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "The Rundown",
        year: "2003",
        type: "Movie",
        role: "Beck",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Walking Tall",
        year: "2004",
        type: "Movie",
        role: "Chris Vaughn",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Be Cool",
        year: "2005",
        type: "Movie",
        role: "Elliot Wilhelm",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Doom",
        year: "2005",
        type: "Movie",
        role: "Sarge",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Gridiron Gang",
        year: "2006",
        type: "Movie",
        role: "Sean Porter",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "The Game Plan",
        year: "2007",
        type: "Movie",
        role: "Joe Kingman",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Get Smart",
        year: "2008",
        type: "Movie",
        role: "Agent 23",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Race to Witch Mountain",
        year: "2009",
        type: "Movie",
        role: "Jack Bruno",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Tooth Fairy",
        year: "2010",
        type: "Movie",
        role: "Derek Thompson",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Faster",
        year: "2010",
        type: "Movie",
        role: "Driver",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Fast Five",
        year: "2011",
        type: "Movie",
        role: "Luke Hobbs",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Journey 2: The Mysterious Island",
        year: "2012",
        type: "Movie",
        role: "Hank Parsons",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "G.I. Joe: Retaliation",
        year: "2013",
        type: "Movie",
        role: "Roadblock",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Fast & Furious 6",
        year: "2013",
        type: "Movie",
        role: "Luke Hobbs",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Pain & Gain",
        year: "2013",
        type: "Movie",
        role: "Paul Doyle",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Hercules",
        year: "2014",
        type: "Movie",
        role: "Hercules",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Furious 7",
        year: "2015",
        type: "Movie",
        role: "Luke Hobbs",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "San Andreas",
        year: "2015",
        type: "Movie",
        role: "Ray Gaines",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Central Intelligence",
        year: "2016",
        type: "Movie",
        role: "Bob Stone",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Moana",
        year: "2016",
        type: "Voice Role",
        role: "Maui",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "The Fate of the Furious",
        year: "2017",
        type: "Movie",
        role: "Luke Hobbs",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Baywatch",
        year: "2017",
        type: "Movie",
        role: "Mitch Buchannon",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Jumanji: Welcome to the Jungle",
        year: "2017",
        type: "Movie",
        role: "Dr. Smolder Bravestone",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Rampage",
        year: "2018",
        type: "Movie",
        role: "Davis Okoye",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Skyscraper",
        year: "2018",
        type: "Movie",
        role: "Will Sawyer",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Fighting with My Family",
        year: "2019",
        type: "Cameo",
        role: "Himself",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Fast & Furious Presents: Hobbs & Shaw",
        year: "2019",
        type: "Movie",
        role: "Luke Hobbs",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Jumanji: The Next Level",
        year: "2019",
        type: "Movie",
        role: "Dr. Smolder Bravestone",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Jungle Cruise",
        year: "2021",
        type: "Movie",
        role: "Frank Wolff",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Red Notice",
        year: "2021",
        type: "Movie",
        role: "John Hartley",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Black Adam",
        year: "2022",
        type: "Movie",
        role: "Black Adam / Teth-Adam",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "DC League of Super-Pets",
        year: "2022",
        type: "Voice Role",
        role: "Krypto",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Fast X",
        year: "2023",
        type: "Movie",
        role: "Luke Hobbs",
        source: "VEDB additional full body credits"
      },
      {
        actorName: "Dwayne Johnson",
        title: "Moana 2",
        year: "2024",
        type: "Voice Role",
        role: "Maui",
        source: "VEDB additional full body credits"
      }
    ]
  };

  function vedbFullBodyCleanName(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  const previousGetFullBodyOfWorkForActor =
    typeof getFullBodyOfWorkForActor === "function"
      ? getFullBodyOfWorkForActor
      : null;

  window.getFullBodyOfWorkForActor = function (actorName) {
    const key = vedbFullBodyCleanName(actorName);

    if (VEDB_ADDITIONAL_FULL_BODY_CREDITS_V2[key]) {
      return VEDB_ADDITIONAL_FULL_BODY_CREDITS_V2[key];
    }

    if (key.includes("dwayne") && key.includes("johnson")) {
      return VEDB_ADDITIONAL_FULL_BODY_CREDITS_V2["dwayne johnson"];
    }

    if (key.includes("the rock")) {
      return VEDB_ADDITIONAL_FULL_BODY_CREDITS_V2["dwayne johnson"];
    }

    if (previousGetFullBodyOfWorkForActor) {
      return previousGetFullBodyOfWorkForActor(actorName);
    }

    return [];
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof currentEntity !== "undefined" &&
    currentEntity &&
    vedbFullBodyCleanName(currentEntity.name).includes("dwayne") &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  console.log("VEDB Additional Full Body Credits v2 installed: Dwayne Johnson.");
})();

/* =========================================================
   VEDB FULL BODY CREDITS — MISSING ACTORS MASTER EXPANSION v1

   Adds expanded Full Body of Work data for actors found by
   the Full Body Audit Tool showing 4 or fewer credits.

   Current actors:
   - Meryl Streep
   - Leonardo DiCaprio
   - Viola Davis
   - Robert Downey Jr.
   - Scarlett Johansson
   - Julia Roberts
   - Morgan Freeman
   - Keanu Reeves
   - Tom Holland
   - Jacob Batalon
   - Johnny Depp
   - Elizabeth Banks
   - Stanley Tucci
   - Vin Diesel
   - Gal Gadot

   Notes:
   - This is prototype-expanded data, not a final exhaustive filmography.
   - It prevents the Full Body section from falling back to only Signature Work.
   - It does NOT touch startup, Zendaya fix, Story Snapshots, Career Labels, or search.
========================================================= */

(function () {
  if (window.vedbMissingActorsFullBodyExpansionV1Installed) return;
  window.vedbMissingActorsFullBodyExpansionV1Installed = true;

  function cleanName(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function credit(actorName, title, year, type, role) {
    return {
      actorName,
      title,
      year,
      type: type || "Movie",
      role: role || "Role to verify",
      source: "VEDB missing actors full body expansion"
    };
  }

  function makeCredits(actorName, rows) {
    return rows.map(function (row) {
      return credit(actorName, row[0], row[1], row[2], row[3]);
    });
  }

  const VEDB_MISSING_ACTORS_FULL_BODY_V1 = {
    "meryl streep": makeCredits("Meryl Streep", [
      ["Julia", "1977", "Movie", "Anne Marie"],
      ["The Deer Hunter", "1978", "Movie", "Linda"],
      ["Kramer vs. Kramer", "1979", "Movie", "Joanna Kramer"],
      ["The French Lieutenant's Woman", "1981", "Movie", "Sarah / Anna"],
      ["Sophie's Choice", "1982", "Movie", "Sophie Zawistowski"],
      ["Silkwood", "1983", "Movie", "Karen Silkwood"],
      ["Out of Africa", "1985", "Movie", "Karen Blixen"],
      ["Heartburn", "1986", "Movie", "Rachel Samstat"],
      ["A Cry in the Dark", "1988", "Movie", "Lindy Chamberlain"],
      ["Postcards from the Edge", "1990", "Movie", "Suzanne Vale"],
      ["The Bridges of Madison County", "1995", "Movie", "Francesca Johnson"],
      ["The Hours", "2002", "Movie", "Clarissa Vaughan"],
      ["Adaptation.", "2002", "Movie", "Susan Orlean"],
      ["The Devil Wears Prada", "2006", "Movie", "Miranda Priestly"],
      ["Mamma Mia!", "2008", "Movie", "Donna Sheridan"],
      ["Doubt", "2008", "Movie", "Sister Aloysius Beauvier"],
      ["Julie & Julia", "2009", "Movie", "Julia Child"],
      ["The Iron Lady", "2011", "Movie", "Margaret Thatcher"],
      ["Into the Woods", "2014", "Movie", "The Witch"],
      ["The Post", "2017", "Movie", "Katharine Graham"],
      ["Little Women", "2019", "Movie", "Aunt March"],
      ["Only Murders in the Building", "2023", "TV Series", "Loretta Durkin"]
    ]),

    "leonardo dicaprio": makeCredits("Leonardo DiCaprio", [
      ["Critters 3", "1991", "Movie", "Josh"],
      ["This Boy's Life", "1993", "Movie", "Tobias “Toby” Wolff"],
      ["What's Eating Gilbert Grape", "1993", "Movie", "Arnie Grape"],
      ["The Basketball Diaries", "1995", "Movie", "Jim Carroll"],
      ["The Quick and the Dead", "1995", "Movie", "Fee Herod / The Kid"],
      ["Total Eclipse", "1995", "Movie", "Arthur Rimbaud"],
      ["Romeo + Juliet", "1996", "Movie", "Romeo Montague"],
      ["Marvin's Room", "1996", "Movie", "Hank"],
      ["Titanic", "1997", "Movie", "Jack Dawson"],
      ["The Man in the Iron Mask", "1998", "Movie", "King Louis XIV / Philippe"],
      ["The Beach", "2000", "Movie", "Richard"],
      ["Gangs of New York", "2002", "Movie", "Amsterdam Vallon"],
      ["Catch Me If You Can", "2002", "Movie", "Frank Abagnale Jr."],
      ["The Aviator", "2004", "Movie", "Howard Hughes"],
      ["The Departed", "2006", "Movie", "Billy Costigan"],
      ["Blood Diamond", "2006", "Movie", "Danny Archer"],
      ["Revolutionary Road", "2008", "Movie", "Frank Wheeler"],
      ["Shutter Island", "2010", "Movie", "Teddy Daniels"],
      ["Inception", "2010", "Movie", "Dom Cobb"],
      ["Django Unchained", "2012", "Movie", "Calvin J. Candie"],
      ["The Great Gatsby", "2013", "Movie", "Jay Gatsby"],
      ["The Wolf of Wall Street", "2013", "Movie", "Jordan Belfort"],
      ["The Revenant", "2015", "Movie", "Hugh Glass"],
      ["Once Upon a Time in Hollywood", "2019", "Movie", "Rick Dalton"],
      ["Don't Look Up", "2021", "Movie", "Dr. Randall Mindy"],
      ["Killers of the Flower Moon", "2023", "Movie", "Ernest Burkhart"]
    ]),

    "viola davis": makeCredits("Viola Davis", [
      ["Out of Sight", "1998", "Movie", "Moselle"],
      ["Antwone Fisher", "2002", "Movie", "Eva May"],
      ["Far from Heaven", "2002", "Movie", "Sybil"],
      ["Solaris", "2002", "Movie", "Gordon"],
      ["Doubt", "2008", "Movie", "Mrs. Miller"],
      ["State of Play", "2009", "Movie", "Dr. Judith Franklin"],
      ["Eat Pray Love", "2010", "Movie", "Delia Shiraz"],
      ["The Help", "2011", "Movie", "Aibileen Clark"],
      ["Extremely Loud & Incredibly Close", "2011", "Movie", "Abby Black"],
      ["Beautiful Creatures", "2013", "Movie", "Amma"],
      ["Prisoners", "2013", "Movie", "Nancy Birch"],
      ["Ender's Game", "2013", "Movie", "Major Gwen Anderson"],
      ["Get on Up", "2014", "Movie", "Susie Brown"],
      ["How to Get Away with Murder", "2014", "TV Series", "Annalise Keating"],
      ["Suicide Squad", "2016", "Movie", "Amanda Waller"],
      ["Fences", "2016", "Movie", "Rose Maxson"],
      ["Widows", "2018", "Movie", "Veronica Rawlings"],
      ["Ma Rainey's Black Bottom", "2020", "Movie", "Ma Rainey"],
      ["The Suicide Squad", "2021", "Movie", "Amanda Waller"],
      ["The Woman King", "2022", "Movie", "Nanisca"],
      ["Air", "2023", "Movie", "Deloris Jordan"]
    ]),

    "robert downey jr": makeCredits("Robert Downey Jr.", [
      ["Weird Science", "1985", "Movie", "Ian"],
      ["Less Than Zero", "1987", "Movie", "Julian Wells"],
      ["Chaplin", "1992", "Movie", "Charlie Chaplin"],
      ["Natural Born Killers", "1994", "Movie", "Wayne Gale"],
      ["Richard III", "1995", "Movie", "Lord Rivers"],
      ["U.S. Marshals", "1998", "Movie", "John Royce"],
      ["Wonder Boys", "2000", "Movie", "Terry Crabtree"],
      ["Ally McBeal", "2000", "TV Series", "Larry Paul"],
      ["Gothika", "2003", "Movie", "Pete Graham"],
      ["Kiss Kiss Bang Bang", "2005", "Movie", "Harry Lockhart"],
      ["Zodiac", "2007", "Movie", "Paul Avery"],
      ["Iron Man", "2008", "Movie", "Tony Stark / Iron Man"],
      ["Tropic Thunder", "2008", "Movie", "Kirk Lazarus"],
      ["Sherlock Holmes", "2009", "Movie", "Sherlock Holmes"],
      ["Iron Man 2", "2010", "Movie", "Tony Stark / Iron Man"],
      ["The Avengers", "2012", "Movie", "Tony Stark / Iron Man"],
      ["Iron Man 3", "2013", "Movie", "Tony Stark / Iron Man"],
      ["Avengers: Age of Ultron", "2015", "Movie", "Tony Stark / Iron Man"],
      ["Captain America: Civil War", "2016", "Movie", "Tony Stark / Iron Man"],
      ["Spider-Man: Homecoming", "2017", "Movie", "Tony Stark / Iron Man"],
      ["Avengers: Infinity War", "2018", "Movie", "Tony Stark / Iron Man"],
      ["Avengers: Endgame", "2019", "Movie", "Tony Stark / Iron Man"],
      ["Oppenheimer", "2023", "Movie", "Lewis Strauss"]
    ]),

    "scarlett johansson": makeCredits("Scarlett Johansson", [
      ["North", "1994", "Movie", "Laura Nelson"],
      ["Manny & Lo", "1996", "Movie", "Amanda"],
      ["The Horse Whisperer", "1998", "Movie", "Grace MacLean"],
      ["Ghost World", "2001", "Movie", "Rebecca"],
      ["Lost in Translation", "2003", "Movie", "Charlotte"],
      ["Girl with a Pearl Earring", "2003", "Movie", "Griet"],
      ["The Perfect Score", "2004", "Movie", "Francesca Curtis"],
      ["Match Point", "2005", "Movie", "Nola Rice"],
      ["The Island", "2005", "Movie", "Jordan Two Delta / Sarah Jordan"],
      ["The Prestige", "2006", "Movie", "Olivia Wenscombe"],
      ["Vicky Cristina Barcelona", "2008", "Movie", "Cristina"],
      ["Iron Man 2", "2010", "Movie", "Natasha Romanoff / Black Widow"],
      ["The Avengers", "2012", "Movie", "Natasha Romanoff / Black Widow"],
      ["Her", "2013", "Voice Role", "Samantha"],
      ["Under the Skin", "2013", "Movie", "The Female"],
      ["Lucy", "2014", "Movie", "Lucy"],
      ["Captain America: The Winter Soldier", "2014", "Movie", "Natasha Romanoff / Black Widow"],
      ["Avengers: Age of Ultron", "2015", "Movie", "Natasha Romanoff / Black Widow"],
      ["Captain America: Civil War", "2016", "Movie", "Natasha Romanoff / Black Widow"],
      ["Ghost in the Shell", "2017", "Movie", "Major Mira Killian"],
      ["Marriage Story", "2019", "Movie", "Nicole Barber"],
      ["Jojo Rabbit", "2019", "Movie", "Rosie Betzler"],
      ["Black Widow", "2021", "Movie", "Natasha Romanoff / Black Widow"],
      ["Asteroid City", "2023", "Movie", "Midge Campbell"]
    ]),

    "julia roberts": makeCredits("Julia Roberts", [
      ["Mystic Pizza", "1988", "Movie", "Daisy Araújo"],
      ["Steel Magnolias", "1989", "Movie", "Shelby Eatenton Latcherie"],
      ["Pretty Woman", "1990", "Movie", "Vivian Ward"],
      ["Flatliners", "1990", "Movie", "Rachel Mannus"],
      ["Sleeping with the Enemy", "1991", "Movie", "Laura Burney / Sara Waters"],
      ["Hook", "1991", "Movie", "Tinker Bell"],
      ["The Pelican Brief", "1993", "Movie", "Darby Shaw"],
      ["My Best Friend's Wedding", "1997", "Movie", "Julianne Potter"],
      ["Notting Hill", "1999", "Movie", "Anna Scott"],
      ["Runaway Bride", "1999", "Movie", "Maggie Carpenter"],
      ["Erin Brockovich", "2000", "Movie", "Erin Brockovich"],
      ["The Mexican", "2001", "Movie", "Samantha Barzel"],
      ["Ocean's Eleven", "2001", "Movie", "Tess Ocean"],
      ["Mona Lisa Smile", "2003", "Movie", "Katherine Watson"],
      ["Closer", "2004", "Movie", "Anna Cameron"],
      ["Ocean's Twelve", "2004", "Movie", "Tess Ocean"],
      ["Charlie Wilson's War", "2007", "Movie", "Joanne Herring"],
      ["Eat Pray Love", "2010", "Movie", "Elizabeth Gilbert"],
      ["August: Osage County", "2013", "Movie", "Barbara Weston"],
      ["Wonder", "2017", "Movie", "Isabel Pullman"],
      ["Homecoming", "2018", "TV Series", "Heidi Bergman"],
      ["Ticket to Paradise", "2022", "Movie", "Georgia Cotton"],
      ["Leave the World Behind", "2023", "Movie", "Amanda Sandford"]
    ]),

    "morgan freeman": makeCredits("Morgan Freeman", [
      ["Street Smart", "1987", "Movie", "Fast Black"],
      ["Glory", "1989", "Movie", "Sgt. Maj. John Rawlins"],
      ["Driving Miss Daisy", "1989", "Movie", "Hoke Colburn"],
      ["Robin Hood: Prince of Thieves", "1991", "Movie", "Azeem"],
      ["Unforgiven", "1992", "Movie", "Ned Logan"],
      ["The Shawshank Redemption", "1994", "Movie", "Ellis Boyd “Red” Redding"],
      ["Se7en", "1995", "Movie", "Detective William Somerset"],
      ["Amistad", "1997", "Movie", "Theodore Joadson"],
      ["Deep Impact", "1998", "Movie", "President Tom Beck"],
      ["Nurse Betty", "2000", "Movie", "Charlie"],
      ["Along Came a Spider", "2001", "Movie", "Alex Cross"],
      ["Bruce Almighty", "2003", "Movie", "God"],
      ["Million Dollar Baby", "2004", "Movie", "Eddie “Scrap-Iron” Dupris"],
      ["Batman Begins", "2005", "Movie", "Lucius Fox"],
      ["The Bucket List", "2007", "Movie", "Carter Chambers"],
      ["Wanted", "2008", "Movie", "Sloan"],
      ["The Dark Knight", "2008", "Movie", "Lucius Fox"],
      ["Invictus", "2009", "Movie", "Nelson Mandela"],
      ["RED", "2010", "Movie", "Joe Matheson"],
      ["The Dark Knight Rises", "2012", "Movie", "Lucius Fox"],
      ["Now You See Me", "2013", "Movie", "Thaddeus Bradley"],
      ["Lucy", "2014", "Movie", "Professor Norman"],
      ["Going in Style", "2017", "Movie", "Willie Davis"]
    ]),

    "keanu reeves": makeCredits("Keanu Reeves", [
      ["Youngblood", "1986", "Movie", "Heaver"],
      ["River's Edge", "1986", "Movie", "Matt"],
      ["Bill & Ted's Excellent Adventure", "1989", "Movie", "Ted Logan"],
      ["Parenthood", "1989", "Movie", "Tod Higgins"],
      ["Point Break", "1991", "Movie", "Johnny Utah"],
      ["My Own Private Idaho", "1991", "Movie", "Scott Favor"],
      ["Bram Stoker's Dracula", "1992", "Movie", "Jonathan Harker"],
      ["Speed", "1994", "Movie", "Jack Traven"],
      ["Johnny Mnemonic", "1995", "Movie", "Johnny"],
      ["The Devil's Advocate", "1997", "Movie", "Kevin Lomax"],
      ["The Matrix", "1999", "Movie", "Neo"],
      ["The Gift", "2000", "Movie", "Donnie Barksdale"],
      ["The Matrix Reloaded", "2003", "Movie", "Neo"],
      ["The Matrix Revolutions", "2003", "Movie", "Neo"],
      ["Constantine", "2005", "Movie", "John Constantine"],
      ["A Scanner Darkly", "2006", "Movie", "Bob Arctor"],
      ["The Lake House", "2006", "Movie", "Alex Wyler"],
      ["Street Kings", "2008", "Movie", "Tom Ludlow"],
      ["47 Ronin", "2013", "Movie", "Kai"],
      ["John Wick", "2014", "Movie", "John Wick"],
      ["John Wick: Chapter 2", "2017", "Movie", "John Wick"],
      ["John Wick: Chapter 3 – Parabellum", "2019", "Movie", "John Wick"],
      ["Toy Story 4", "2019", "Voice Role", "Duke Caboom"],
      ["The Matrix Resurrections", "2021", "Movie", "Neo"],
      ["John Wick: Chapter 4", "2023", "Movie", "John Wick"]
    ]),

    "tom holland": makeCredits("Tom Holland", [
      ["The Impossible", "2012", "Movie", "Lucas Bennett"],
      ["How I Live Now", "2013", "Movie", "Isaac"],
      ["In the Heart of the Sea", "2015", "Movie", "Thomas Nickerson"],
      ["Captain America: Civil War", "2016", "Movie", "Peter Parker / Spider-Man"],
      ["The Lost City of Z", "2016", "Movie", "Jack Fawcett"],
      ["Spider-Man: Homecoming", "2017", "Movie", "Peter Parker / Spider-Man"],
      ["Pilgrimage", "2017", "Movie", "The Novice"],
      ["Avengers: Infinity War", "2018", "Movie", "Peter Parker / Spider-Man"],
      ["Avengers: Endgame", "2019", "Movie", "Peter Parker / Spider-Man"],
      ["Spider-Man: Far From Home", "2019", "Movie", "Peter Parker / Spider-Man"],
      ["Spies in Disguise", "2019", "Voice Role", "Walter Beckett"],
      ["Dolittle", "2020", "Voice Role", "Jip"],
      ["Onward", "2020", "Voice Role", "Ian Lightfoot"],
      ["The Devil All the Time", "2020", "Movie", "Arvin Russell"],
      ["Cherry", "2021", "Movie", "Cherry"],
      ["Chaos Walking", "2021", "Movie", "Todd Hewitt"],
      ["Spider-Man: No Way Home", "2021", "Movie", "Peter Parker / Spider-Man"],
      ["Uncharted", "2022", "Movie", "Nathan Drake"],
      ["The Crowded Room", "2023", "TV Series", "Danny Sullivan"]
    ]),

    "jacob batalon": makeCredits("Jacob Batalon", [
      ["North Woods", "2016", "Movie", "Cooper"],
      ["Spider-Man: Homecoming", "2017", "Movie", "Ned Leeds"],
      ["Every Day", "2018", "Movie", "James"],
      ["Blood Fest", "2018", "Movie", "Krill"],
      ["Avengers: Infinity War", "2018", "Movie", "Ned Leeds"],
      ["Avengers: Endgame", "2019", "Movie", "Ned Leeds"],
      ["Spider-Man: Far From Home", "2019", "Movie", "Ned Leeds"],
      ["Let It Snow", "2019", "Movie", "Keon"],
      ["The True Don Quixote", "2019", "Movie", "Sancho Panza"],
      ["50 States of Fright", "2020", "TV Series", "Simon"],
      ["Spider-Man: No Way Home", "2021", "Movie", "Ned Leeds"],
      ["Reginald the Vampire", "2022", "TV Series", "Reginald Andres"],
      ["Shortcomings", "2023", "Movie", "Gene"]
    ]),

    "johnny depp": makeCredits("Johnny Depp", [
      ["A Nightmare on Elm Street", "1984", "Movie", "Glen Lantz"],
      ["Platoon", "1986", "Movie", "Gator Lerner"],
      ["21 Jump Street", "1987", "TV Series", "Tom Hanson"],
      ["Cry-Baby", "1990", "Movie", "Wade “Cry-Baby” Walker"],
      ["Edward Scissorhands", "1990", "Movie", "Edward Scissorhands"],
      ["Benny & Joon", "1993", "Movie", "Sam"],
      ["What's Eating Gilbert Grape", "1993", "Movie", "Gilbert Grape"],
      ["Ed Wood", "1994", "Movie", "Ed Wood"],
      ["Donnie Brasco", "1997", "Movie", "Joseph D. Pistone / Donnie Brasco"],
      ["Sleepy Hollow", "1999", "Movie", "Ichabod Crane"],
      ["Chocolat", "2000", "Movie", "Roux"],
      ["Blow", "2001", "Movie", "George Jung"],
      ["Pirates of the Caribbean: The Curse of the Black Pearl", "2003", "Movie", "Captain Jack Sparrow"],
      ["Finding Neverland", "2004", "Movie", "J. M. Barrie"],
      ["Charlie and the Chocolate Factory", "2005", "Movie", "Willy Wonka"],
      ["Corpse Bride", "2005", "Voice Role", "Victor Van Dort"],
      ["Sweeney Todd: The Demon Barber of Fleet Street", "2007", "Movie", "Sweeney Todd"],
      ["Alice in Wonderland", "2010", "Movie", "The Mad Hatter"],
      ["Rango", "2011", "Voice Role", "Rango"],
      ["Black Mass", "2015", "Movie", "Whitey Bulger"],
      ["Fantastic Beasts and Where to Find Them", "2016", "Movie", "Gellert Grindelwald"],
      ["Murder on the Orient Express", "2017", "Movie", "Edward Ratchett"],
      ["Fantastic Beasts: The Crimes of Grindelwald", "2018", "Movie", "Gellert Grindelwald"],
      ["Jeanne du Barry", "2023", "Movie", "King Louis XV"]
    ]),

    "elizabeth banks": makeCredits("Elizabeth Banks", [
      ["Wet Hot American Summer", "2001", "Movie", "Lindsay"],
      ["Spider-Man", "2002", "Movie", "Betty Brant"],
      ["Catch Me If You Can", "2002", "Movie", "Lucy"],
      ["Seabiscuit", "2003", "Movie", "Marcela Howard"],
      ["The 40-Year-Old Virgin", "2005", "Movie", "Beth"],
      ["Slither", "2006", "Movie", "Starla Grant"],
      ["Spider-Man 3", "2007", "Movie", "Betty Brant"],
      ["Definitely, Maybe", "2008", "Movie", "Emily"],
      ["W.", "2008", "Movie", "Laura Bush"],
      ["Role Models", "2008", "Movie", "Beth"],
      ["Zack and Miri Make a Porno", "2008", "Movie", "Miri Linky"],
      ["30 Rock", "2010", "TV Series", "Avery Jessup"],
      ["The Hunger Games", "2012", "Movie", "Effie Trinket"],
      ["Pitch Perfect", "2012", "Movie", "Gail"],
      ["The Lego Movie", "2014", "Voice Role", "Wyldstyle / Lucy"],
      ["The Hunger Games: Mockingjay – Part 1", "2014", "Movie", "Effie Trinket"],
      ["Pitch Perfect 2", "2015", "Movie", "Gail"],
      ["Love & Mercy", "2014", "Movie", "Melinda Ledbetter"],
      ["Power Rangers", "2017", "Movie", "Rita Repulsa"],
      ["Charlie's Angels", "2019", "Movie", "Bosley"],
      ["Call Jane", "2022", "Movie", "Joy"],
      ["Cocaine Bear", "2023", "Director Credit", "Director"]
    ]),

    "stanley tucci": makeCredits("Stanley Tucci", [
      ["Prizzi's Honor", "1985", "Movie", "Soldier"],
      ["Beethoven", "1992", "Movie", "Vernon"],
      ["The Pelican Brief", "1993", "Movie", "Khamel"],
      ["Big Night", "1996", "Movie", "Secondo"],
      ["Deconstructing Harry", "1997", "Movie", "Paul Epstein"],
      ["A Midsummer Night's Dream", "1999", "Movie", "Puck"],
      ["Road to Perdition", "2002", "Movie", "Frank Nitti"],
      ["The Terminal", "2004", "Movie", "Frank Dixon"],
      ["Shall We Dance?", "2004", "Movie", "Link Peterson"],
      ["The Devil Wears Prada", "2006", "Movie", "Nigel"],
      ["Julie & Julia", "2009", "Movie", "Paul Child"],
      ["The Lovely Bones", "2009", "Movie", "George Harvey"],
      ["Easy A", "2010", "Movie", "Dill Penderghast"],
      ["Captain America: The First Avenger", "2011", "Movie", "Dr. Abraham Erskine"],
      ["The Hunger Games", "2012", "Movie", "Caesar Flickerman"],
      ["Jack the Giant Slayer", "2013", "Movie", "Lord Roderick"],
      ["The Hunger Games: Catching Fire", "2013", "Movie", "Caesar Flickerman"],
      ["Transformers: Age of Extinction", "2014", "Movie", "Joshua Joyce"],
      ["Spotlight", "2015", "Movie", "Mitchell Garabedian"],
      ["Beauty and the Beast", "2017", "Movie", "Maestro Cadenza"],
      ["Supernova", "2020", "Movie", "Tusker"],
      ["The King's Man", "2021", "Movie", "Orlando Oxford / additional role"],
      ["Citadel", "2023", "TV Series", "Bernard Orlick"]
    ]),

    "vin diesel": makeCredits("Vin Diesel", [
      ["Multi-Facial", "1995", "Short Film", "Mike"],
      ["Saving Private Ryan", "1998", "Movie", "Private Adrian Caparzo"],
      ["The Iron Giant", "1999", "Voice Role", "The Iron Giant"],
      ["Pitch Black", "2000", "Movie", "Richard B. Riddick"],
      ["The Fast and the Furious", "2001", "Movie", "Dominic Toretto"],
      ["Knockaround Guys", "2001", "Movie", "Taylor Reese"],
      ["xXx", "2002", "Movie", "Xander Cage"],
      ["A Man Apart", "2003", "Movie", "Sean Vetter"],
      ["The Chronicles of Riddick", "2004", "Movie", "Richard B. Riddick"],
      ["The Pacifier", "2005", "Movie", "Shane Wolfe"],
      ["Find Me Guilty", "2006", "Movie", "Jackie DiNorscio"],
      ["Fast & Furious", "2009", "Movie", "Dominic Toretto"],
      ["Fast Five", "2011", "Movie", "Dominic Toretto"],
      ["Fast & Furious 6", "2013", "Movie", "Dominic Toretto"],
      ["Riddick", "2013", "Movie", "Richard B. Riddick"],
      ["Guardians of the Galaxy", "2014", "Voice Role", "Groot"],
      ["Furious 7", "2015", "Movie", "Dominic Toretto"],
      ["The Last Witch Hunter", "2015", "Movie", "Kaulder"],
      ["xXx: Return of Xander Cage", "2017", "Movie", "Xander Cage"],
      ["The Fate of the Furious", "2017", "Movie", "Dominic Toretto"],
      ["Avengers: Infinity War", "2018", "Voice Role", "Groot"],
      ["Avengers: Endgame", "2019", "Voice Role", "Groot"],
      ["Bloodshot", "2020", "Movie", "Ray Garrison"],
      ["F9", "2021", "Movie", "Dominic Toretto"],
      ["Guardians of the Galaxy Vol. 3", "2023", "Voice Role", "Groot"],
      ["Fast X", "2023", "Movie", "Dominic Toretto"]
    ]),

    "gal gadot": makeCredits("Gal Gadot", [
      ["Fast & Furious", "2009", "Movie", "Gisele Yashar"],
      ["Date Night", "2010", "Movie", "Natanya"],
      ["Knight and Day", "2010", "Movie", "Naomi"],
      ["Fast Five", "2011", "Movie", "Gisele Yashar"],
      ["Fast & Furious 6", "2013", "Movie", "Gisele Yashar"],
      ["Batman v Superman: Dawn of Justice", "2016", "Movie", "Diana Prince / Wonder Woman"],
      ["Criminal", "2016", "Movie", "Jill Pope"],
      ["Keeping Up with the Joneses", "2016", "Movie", "Natalie Jones"],
      ["Wonder Woman", "2017", "Movie", "Diana Prince / Wonder Woman"],
      ["Justice League", "2017", "Movie", "Diana Prince / Wonder Woman"],
      ["Ralph Breaks the Internet", "2018", "Voice Role", "Shank"],
      ["Wonder Woman 1984", "2020", "Movie", "Diana Prince / Wonder Woman"],
      ["Zack Snyder's Justice League", "2021", "Movie", "Diana Prince / Wonder Woman"],
      ["Red Notice", "2021", "Movie", "The Bishop"],
      ["Death on the Nile", "2022", "Movie", "Linnet Ridgeway-Doyle"],
      ["Heart of Stone", "2023", "Movie", "Rachel Stone"]
    ])
  };

  const previousGetFullBodyOfWorkForActorMissingV1 =
    typeof getFullBodyOfWorkForActor === "function"
      ? getFullBodyOfWorkForActor
      : null;

  window.getFullBodyOfWorkForActor = function (actorName) {
    const key = cleanName(actorName);

    if (VEDB_MISSING_ACTORS_FULL_BODY_V1[key]) {
      return VEDB_MISSING_ACTORS_FULL_BODY_V1[key];
    }

    if (previousGetFullBodyOfWorkForActorMissingV1) {
      return previousGetFullBodyOfWorkForActorMissingV1(actorName);
    }

    return [];
  };

  try {
    getFullBodyOfWorkForActor = window.getFullBodyOfWorkForActor;
  } catch (error) {}

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof currentEntity !== "undefined" &&
    currentEntity &&
    VEDB_MISSING_ACTORS_FULL_BODY_V1[cleanName(currentEntity.name)] &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  console.log("VEDB Missing Actors Full Body Expansion v1 installed.");
})();
/* =========================================================
   VEDB SIGNATURE WORK PERMANENT BUTTON STYLE v6
   Purpose:
   - Replaces the cheap-looking blue/underlined title link.
   - Keeps the title as clean text.
   - Adds a permanent "Open Title Sphere" button.
   - Uses the same click behavior from the previous Signature Work fix.
   - Does NOT change actor data, title data, search, audit, or startup.
========================================================= */

(function () {
  if (window.vedbSignatureWorkPermanentButtonStyleV6Installed) return;
  window.vedbSignatureWorkPermanentButtonStyleV6Installed = true;

  function sigV6Safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function sigV6Clean(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function sigV6GetTitleName(item) {
    if (Array.isArray(item)) return String(item[0] || "").trim();

    if (item && typeof item === "object") {
      return String(item.title || item.name || item.movie || item.show || "").trim();
    }

    return String(item || "").trim();
  }

  function sigV6GetYear(item) {
    if (Array.isArray(item)) return String(item[1] || "").trim();

    if (item && typeof item === "object") {
      return String(item.year || item.releaseYear || "").trim();
    }

    return "";
  }

  function sigV6FindTitle(titleName) {
    const wanted = sigV6Clean(titleName);

    if (!wanted) return null;

    if (typeof titles !== "undefined" && Array.isArray(titles)) {
      const foundInTitles = titles.find(function (item) {
        return item && item.mode === "title" && sigV6Clean(item.name) === wanted;
      });

      if (foundInTitles) return foundInTitles;
    }

    if (typeof allItems !== "undefined" && Array.isArray(allItems)) {
      const foundInAllItems = allItems.find(function (item) {
        return item && item.mode === "title" && sigV6Clean(item.name) === wanted;
      });

      if (foundInAllItems) return foundInAllItems;
    }

    return null;
  }

  function sigV6GetRole(actor, titleName, index) {
    if (!actor || !titleName) return "Role to verify";

    const wanted = sigV6Clean(titleName);

    if (actor.signatureRoles) {
      const directRole = actor.signatureRoles[titleName];

      if (directRole) return directRole;

      const matchingKey = Object.keys(actor.signatureRoles).find(function (key) {
        return sigV6Clean(key) === wanted;
      });

      if (matchingKey && actor.signatureRoles[matchingKey]) {
        return actor.signatureRoles[matchingKey];
      }
    }

    if (Array.isArray(actor.characters) && actor.characters[index]) {
      return actor.characters[index];
    }

    if (typeof getFullBodyOfWorkForActor === "function") {
      try {
        const credits = getFullBodyOfWorkForActor(actor.name);

        if (Array.isArray(credits)) {
          const match = credits.find(function (row) {
            return row && sigV6Clean(row.title) === wanted;
          });

          if (match && match.role) return match.role;
        }
      } catch (error) {}
    }

    return "Role to verify";
  }

  function sigV6OpenTitle(titleName) {
    const titleRecord = sigV6FindTitle(titleName);

    if (!titleRecord) {
      alert(
        "VEDB has this actor credit, but this Title Sphere page has not been created yet:\n\n" +
          titleName
      );
      return false;
    }

    if (typeof loadEntity === "function") {
      loadEntity(titleRecord);
    } else if (typeof loadEntityByName === "function") {
      loadEntityByName("title", titleRecord.name);
    } else {
      alert("VEDB could not open this Title Sphere because the page-opening function is missing.");
      return false;
    }

    const main = document.getElementById("mainPage");
    const page = document.getElementById("sectionPage");

    if (page) page.style.display = "none";
    if (main) main.style.display = "grid";

    if (typeof updateSpherePositions === "function") {
      setTimeout(updateSpherePositions, 50);
      setTimeout(updateSpherePositions, 250);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    return true;
  }

  window.openVEDBSignatureWorkTitleV6 = sigV6OpenTitle;

  function sigV6BuildSignatureWork(actor) {
    const rows = Array.isArray(actor?.knownFor) ? actor.knownFor : [];

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
          .map(function (item, index) {
            const title = sigV6GetTitleName(item);
            const year = sigV6GetYear(item);
            const role = sigV6GetRole(actor, title, index);
            const hasTitlePage = !!sigV6FindTitle(title);

            return `
              <article class="info-card vedb-signature-card-v6">
                <h3>${sigV6Safe(title)}</h3>

                <p><b>Year:</b> ${sigV6Safe(year || "Year to verify")}</p>
                <p><b>Character / Role:</b> ${sigV6Safe(role || "Role to verify")}</p>
                <p><b>Actor:</b> ${sigV6Safe(actor.name || "Actor")}</p>

                ${
                  hasTitlePage
                    ? `
                      <button
                        type="button"
                        class="vedb-open-title-sphere-btn-v6"
                        data-title="${sigV6Safe(title)}"
                        title="Open ${sigV6Safe(title)} Title Sphere"
                      >
                        Open Title Sphere
                      </button>
                    `
                    : `
                      <button
                        type="button"
                        class="vedb-open-title-sphere-btn-v6 vedb-open-title-sphere-btn-disabled-v6"
                        disabled
                      >
                        Title Sphere Not Built Yet
                      </button>
                    `
                }
              </article>
            `;
          })
          .join("")}
      </div>

      ${typeof sourceBlock === "function" ? sourceBlock(actor) : ""}
    `;
  }

  function sigV6InstallStyles() {
    if (document.getElementById("vedb-signature-work-buttons-v6-style")) return;

    const style = document.createElement("style");
    style.id = "vedb-signature-work-buttons-v6-style";
    style.textContent = `
      .vedb-signature-card-v6 h3 {
        color: var(--gold);
        font-weight: 900;
        margin-bottom: 10px;
      }

      .vedb-open-title-sphere-btn-v6 {
        width: 100%;
        margin-top: 14px;
        padding: 12px 16px;
        border-radius: 999px;
        border: 1px solid rgba(255, 215, 130, 0.65);
        background:
          radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 32%),
          linear-gradient(135deg, rgba(255, 210, 95, 0.95), rgba(179, 118, 28, 0.95));
        color: #111;
        font-weight: 900;
        letter-spacing: 0.02em;
        cursor: pointer;
        box-shadow:
          0 10px 24px rgba(0, 0, 0, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.35);
        transition:
          transform 0.16s ease,
          filter 0.16s ease,
          box-shadow 0.16s ease;
      }

      .vedb-open-title-sphere-btn-v6:hover {
        transform: translateY(-1px);
        filter: brightness(1.06);
        box-shadow:
          0 14px 30px rgba(0, 0, 0, 0.34),
          inset 0 1px 0 rgba(255, 255, 255, 0.42);
      }

      .vedb-open-title-sphere-btn-v6:active {
        transform: translateY(0);
      }

      .vedb-open-title-sphere-btn-disabled-v6,
      .vedb-open-title-sphere-btn-disabled-v6:hover {
        cursor: not-allowed;
        opacity: 0.55;
        filter: grayscale(0.4);
        transform: none;
      }
    `;

    document.head.appendChild(style);
  }

  sigV6InstallStyles();

  document.addEventListener(
    "click",
    function (event) {
      const button = event.target.closest?.(".vedb-open-title-sphere-btn-v6");

      if (!button || button.disabled) return;

      event.preventDefault();

      const titleName = button.getAttribute("data-title") || "";

      sigV6OpenTitle(titleName);
    },
    true
  );

  const previousActorSectionV6 =
    typeof actorSection === "function" ? actorSection : null;

  if (previousActorSectionV6) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === "filmography" &&
        typeof currentMode !== "undefined" &&
        currentMode === "actor" &&
        typeof currentEntity !== "undefined" &&
        currentEntity
      ) {
        return sigV6BuildSignatureWork(currentEntity);
      }

      return previousActorSectionV6(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof currentSection !== "undefined" &&
    currentSection === "filmography" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  console.log("VEDB Signature Work Permanent Button Style v6 installed.");
})();