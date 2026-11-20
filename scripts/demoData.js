export const demoUsers = [
  {
    name: 'Rahim Hasan',
    email: 'rahim.hasan@example.com',
    interests: ['chess', 'reading', 'programming'],
    posts: [
      {
        title: 'Why the Sicilian Defence changed how I play',
        body: 'I used to answer 1.e4 with e5 every single game. Switching to the Sicilian forced me to understand imbalanced positions instead of copying moves. My rating went up 150 points in three months, mostly because I started thinking about pawn structure first.',
      },
      {
        title: 'Three books every backend developer should read',
        body: 'Designing Data-Intensive Applications for how storage and replication really work, The Pragmatic Programmer for habits, and Release It! for everything that goes wrong in production. None of them are about a framework, which is exactly why they age well.',
      },
      {
        title: 'Pagination with skip is slower than you think',
        body: 'skip(10000) still walks through ten thousand index entries before returning anything. For infinite scroll, range based pagination on _id is far cheaper. For admin tables with page numbers, skip is fine as long as the sort is backed by an index.',
      },
    ],
    notes: [
      { title: 'Chess openings to review', content: 'Najdorf main line\nAlapin variation for when opponents play c3\nEndgame: rook and pawn vs rook (Lucena, Philidor)' },
      { title: 'Reading list - December', content: 'Atomic Habits (finish)\nThe Psychology of Money\nClean Architecture chapter 5-8' },
    ],
  },
  {
    name: 'Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    interests: ['travel', 'photography', 'reading'],
    posts: [
      {
        title: 'Sajek Valley at sunrise',
        body: 'We left the cottage at 5 AM and the whole valley was covered with clouds below us. If you go, stay at least two nights. The first evening is always too crowded and the second morning is when it is quiet and magical.',
      },
      {
        title: 'Shooting in harsh midday light',
        body: 'Find open shade, expose for the highlights and lift the shadows later. A cheap polarizing filter does more for landscape photos at noon than any expensive lens upgrade.',
      },
      {
        title: 'Budget trip to Sylhet: what it actually cost',
        body: 'Three days, two people: bus tickets 2,400 taka, guesthouse 4,500, food around 3,000, boat at Ratargul 800. Total under 11,000 taka. Book the guesthouse directly by phone, it is usually cheaper than the apps.',
      },
    ],
    notes: [
      { title: 'Packing checklist', content: 'Power bank\nRain cover for camera bag\nExtra SD card\nFirst aid kit\nNID copy' },
      { title: 'Photo edit presets to try', content: 'Warm film look for travel shots\nLower clarity for portraits\nSplit toning: teal shadows, orange highlights' },
    ],
  },
  {
    name: 'Karim Uddin',
    email: 'karim.uddin@example.com',
    interests: ['football', 'fitness', 'chess'],
    posts: [
      {
        title: 'What a 4-3-3 press needs from the midfield',
        body: 'Pressing high only works if the midfield line steps up together. One player arriving late opens the whole middle. Our team improved the moment we agreed on a single trigger: a backward pass from their centre back.',
      },
      {
        title: 'Running 5K under 25 minutes in 8 weeks',
        body: 'Two easy runs, one interval session and one long slow run every week. The intervals were 6 x 400 m at goal pace. Most of the improvement came from simply not skipping the easy days.',
      },
      {
        title: 'Blitz chess is a great warm-up for the brain',
        body: 'Ten minutes of 3+2 blitz before work wakes me up better than coffee. Just do not play when you are tilted, it ruins the rest of the day.',
      },
    ],
    notes: [
      { title: 'Weekly workout plan', content: 'Sat: intervals\nMon: upper body\nWed: easy 5K\nFri: long run + core' },
      { title: 'Match day reminders', content: 'Bring both kits\nCollect 300 taka per player for the field\nConfirm referee by Thursday' },
    ],
  },
  {
    name: 'Tania Akter',
    email: 'tania.akter@example.com',
    interests: ['cooking', 'travel', 'gardening'],
    posts: [
      {
        title: 'Beef tehari the old Dhaka way',
        body: 'The secret is mustard oil and kalijira rice soaked for exactly thirty minutes. Cook the beef until the oil separates before adding the rice. Green chillies go in at the very end so they stay bright.',
      },
      {
        title: 'Growing tomatoes on a Dhaka rooftop',
        body: 'Use 12 inch tubs, mix compost with the soil 1:1, and water early in the morning. My plants survived the summer only after I added a green shade net during the hottest weeks.',
      },
      {
        title: 'Street food worth the trip in Chattogram',
        body: 'Mezban beef near Chawkbazar, kala bhuna at a small shop in Agrabad, and the evening fuchka stalls near the stadium. Go hungry and share plates so you can try more.',
      },
    ],
    notes: [
      { title: 'Grocery list', content: 'Kalijira rice 2 kg\nMustard oil\nGaram masala\nLemon\nCoriander leaves' },
      { title: 'Plants to buy', content: 'Holy basil\nMint\nChilli seedlings\nAloe vera' },
    ],
  },
  {
    name: 'Farhan Ahmed',
    email: 'farhan.ahmed@example.com',
    interests: ['programming', 'gaming', 'music'],
    posts: [
      {
        title: 'Stop putting everything in one Express file',
        body: 'Split routes, controllers and models early. It costs nothing on day one and saves hours when the project grows. Keep business rules out of route definitions so they stay easy to test.',
      },
      {
        title: 'Compound indexes: order matters',
        body: 'For a query that filters by user and sorts by date, the index should be { user: 1, createdAt: -1 }. Equality fields first, then sort fields, then range fields. Reverse the order and MongoDB has to sort in memory.',
      },
      {
        title: 'Learning guitar as a developer',
        body: 'Practising chords is a lot like debugging: slow, repetitive, and suddenly it clicks. Fifteen minutes a day beat my old two hour weekend sessions by a mile.',
      },
    ],
    notes: [
      { title: 'Side project ideas', content: 'Expense tracker with monthly reports\nDiscord bot for football scores\nCLI tool to clean old node_modules folders' },
      { title: 'Songs to learn', content: 'Wonderwall\nBhalobashi\nHotel California intro' },
      { title: 'MongoDB things to revise', content: 'explain() output: IXSCAN vs COLLSCAN\n$lookup with pipeline\nMultikey index limitations' },
    ],
  },
  {
    name: 'Sadia Islam',
    email: 'sadia.islam@example.com',
    interests: ['reading', 'writing', 'music'],
    posts: [
      {
        title: 'Rereading Humayun Ahmed after ten years',
        body: 'Himu felt like pure fun when I was a teenager. Reading it again now, the loneliness behind the jokes is much more visible. Some books grow up with you.',
      },
      {
        title: 'Write badly first',
        body: 'My first drafts are terrible and that is the point. The editing pass is where the writing actually happens. Waiting for the perfect sentence just means writing nothing.',
      },
      {
        title: 'Rabindra Sangeet for late night work',
        body: 'Instrumental versions are perfect background music for deep work. No lyrics to distract you, and the melodies are calm without being sleepy.',
      },
    ],
    notes: [
      { title: 'Short story ideas', content: 'A rickshaw puller who remembers every passenger\nA letter delivered 20 years late\nTwo strangers sharing an umbrella at Farmgate' },
      { title: 'Quotes I liked', content: 'You can make anything by writing. - C.S. Lewis\nThe first draft is just you telling yourself the story. - Terry Pratchett' },
    ],
  },
  {
    name: 'Imran Hossain',
    email: 'imran.hossain@example.com',
    interests: ['football', 'gaming', 'fitness'],
    posts: [
      {
        title: 'FIFA vs real football tactics',
        body: 'Playing career mode taught me more about squad rotation than any article. Tired players lose the ball more, both in the game and on a real Friday morning pitch.',
      },
      {
        title: 'Home workout with no equipment',
        body: 'Push-ups, squats, lunges, plank and burpees. Four rounds, forty seconds each, twenty seconds rest. It takes twenty minutes and you will feel it the next day.',
      },
      {
        title: 'Best co-op games to play with friends',
        body: 'It Takes Two, Overcooked 2 and Stardew Valley. All three are fun even if one person is not a regular gamer, which makes them perfect for weekends.',
      },
    ],
    notes: [
      { title: 'Games backlog', content: 'Elden Ring DLC\nHades II\nForza Horizon 5 events' },
      { title: 'Protein intake', content: 'Target 120 g per day\nEggs x3 breakfast\nChicken or fish at lunch\nLentils at dinner' },
    ],
  },
  {
    name: 'Mitu Rahman',
    email: 'mitu.rahman@example.com',
    interests: ['photography', 'gardening', 'cooking'],
    posts: [
      {
        title: 'Macro shots with a phone',
        body: 'A clip-on macro lens costs less than 500 taka and opens up a whole new world in your balcony garden. Shoot in the early morning when dew is still on the leaves and the light is soft.',
      },
      {
        title: 'Composting in a small apartment',
        body: 'Two buckets with holes, a layer of dry leaves for every layer of kitchen scraps, and no meat or oil. After six weeks you get dark, earthy compost and zero smell if you keep it balanced.',
      },
      {
        title: 'Five minute breakfast: chira pulao',
        body: 'Wash the flattened rice, fry onion, green chilli and peanuts, add turmeric and salt, toss everything together and finish with lemon juice. Light, quick and filling.',
      },
    ],
    notes: [
      { title: 'Balcony garden schedule', content: 'Water: every morning\nFertilizer: every 2 weeks\nRepot money plant this month' },
      { title: 'Photo walk spots', content: 'Old Dhaka - Shankhari Bazar\nBotanical Garden\nHatirjheel at night' },
    ],
  },
  {
    name: 'Tanvir Chowdhury',
    email: 'tanvir.chowdhury@example.com',
    interests: ['programming', 'chess', 'writing'],
    posts: [
      {
        title: 'JWT is not a session store',
        body: 'Keep tokens short lived and avoid putting anything sensitive inside the payload, it is only base64 encoded, not encrypted. Load the user on every request so a deleted or demoted account loses access immediately.',
      },
      {
        title: 'Why bcrypt cost factor matters',
        body: 'A cost of 12 takes around 250 ms on a normal server. That is slow enough to make brute force painful and fast enough that users never notice during login.',
      },
      {
        title: 'Writing documentation nobody skips',
        body: 'Start with how to run the project in three commands, then a table of endpoints. Long introductions get skipped, examples get copied.',
      },
    ],
    notes: [
      { title: 'Interview prep', content: 'Explain indexing strategy\nDifference between $lookup and populate\nHow pagination works with skip and limit' },
      { title: 'Blog drafts', content: 'Understanding MongoDB multikey indexes\nRole based access control in Express' },
    ],
  },
  {
    name: 'Ayesha Siddiqua',
    email: 'ayesha.siddiqua@example.com',
    interests: ['travel', 'music', 'writing'],
    posts: [
      {
        title: 'Two days in Cox\'s Bazar without the crowd',
        body: 'Skip Kolatoli and stay near Inani. The beach is cleaner, quieter and the sunset is just as good. Hire a CNG for the Marine Drive in the late afternoon.',
      },
      {
        title: 'Music that makes long bus rides shorter',
        body: 'A playlist of old Bangla band songs - Warfaze, Miles, Aurthohin - makes the Dhaka to Chattogram highway feel half as long.',
      },
      {
        title: 'Keeping a travel journal',
        body: 'I write three lines every night: one thing I saw, one thing I ate, one person I met. Years later those small notes bring back more memories than photos.',
      },
    ],
    notes: [
      { title: 'Next trips', content: 'Bandarban - Nilgiri\nSundarbans 3-day tour\nKuakata in winter' },
      { title: 'Playlist ideas', content: 'Rainy day Bangla classics\nFocus instrumentals\nRoad trip rock' },
    ],
  },
];
