export const CASES_DATA = [
  {
    id: "case-01",
    caseNumber: "CASE #01",
    domain: "History",
    title: "The Missing Diamond",
    subtitle: "A museum artifact has been misplaced during exhibition hall cleaning",
    shortDescription: "A shining replica of a famous royal diamond was moved before the morning tour. Explore clues to find where it was safely stored.",
    synopsis: "Curator Anand Verma unlocked the museum exhibition hall and found the diamond stand empty. Did someone steal it, or did staff safely put it away during nighttime floor polishing?",
    storyIntroduction: "The morning sun was shining brightly over the National Museum when curator Anand Verma arrived to open the historic jewel gallery. Today was a very special day because dozens of school students were visiting to view the famous replica of the royal royal diamond. But when Mr. Verma unlocked the glass display case, his eyes widened in surprise—the gleaming diamond was not on its red velvet cushion! Instead, the glass case was open cleanly without a single scratch, and a handwritten yellow paper rested on the stand. The museum guards confirmed that all doors had remained locked overnight. Somewhere inside the museum, a helpful clue explains where the prized gem was safely moved.",
    caseBackground: "The National Antiquities Museum holds royal treasures from Indian history. Yesterday evening, the museum staff cleaned and polished the grand marble floors. Three friendly museum staff members were on duty to take care of the exhibits.",
    investigationObjective: "Look at the clues around the display case, read the staff notes, and discover where the replica diamond was safely stored.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Clean Display Vitrine", detail: "The glass case was opened with an official key and shows no signs of forced entry." },
        { id: "c2", title: "White Cotton Glove Thread", detail: "A tiny white cotton fiber caught on the lock latch, identical to the gloves museum staff wear." },
        { id: "c3", title: "Yellow Archival Memo", detail: "A note on the stand stating: 'Moved to Vault Safe #3 during marble floor polishing'." }
      ],
      personsInvolved: [
        { name: "Anand Verma", role: "Chief Curator", statement: "I remember signing a cleaning order yesterday evening, but I forgot where I filed the docket!" },
        { name: "Meera Sen", role: "Assistant Archivist", statement: "We wore soft cotton gloves and made sure all gems were protected from floor polish dust." },
        { name: "Ram Swaroop", role: "Night Guard", statement: "All doors stayed locked tight all night. No outsider entered the hall." }
      ],
      timeline: [
        { time: "05:30 PM (Yesterday)", event: "Curator Verma verifies the diamond is in the display case." },
        { time: "06:30 PM (Yesterday)", event: "Night cleaning team starts waxing and polishing the marble floors." },
        { time: "07:00 PM (Yesterday)", event: "Diamond is locked into Basement Vault Safe #3 for dust protection." },
        { time: "07:30 AM (Today)", event: "Curator Verma arrives and notices the diamond is in the safe." }
      ],
      guidelines: [
        "Examine the lock on the display vitrine.",
        "Read the yellow note left on the red velvet cushion.",
        "Check Basement Vault Safe #3 in the museum records."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    location: "National Museum, New Delhi",
    period: "Historical Exhibit",
    status: "Open Case",
    isFeatured: true,
    rating: 4.9,
    solversCount: 3840,
    badgeText: "History Sleuth",
    tags: ["Museum", "Jewel", "Diamond", "Easy Mystery"]
  },
  {
    id: "case-02",
    caseNumber: "CASE #02",
    domain: "Technology",
    title: "The Campus Code",
    subtitle: "Solve a friendly computer message to find the robotics portal password",
    shortDescription: "A cheerful mystery message appeared on computer lab screens before the robotics contest. Discover the simple password from campus clues.",
    synopsis: "Student programmers arrived at the computer lab to find a friendly screen greeting from the Coding Club asking for a mascot password to start the robotics competition.",
    storyIntroduction: "It was a lively morning at the college computer science building. Teams of young student engineers were gathering with their small wheeled robots for the annual robotics tournament. But when team captain Pooja turned on the computer in Lab 3, every monitor displayed a bright green screen with a friendly smiling robot icon. The screen said: 'Welcome Young Detectives! To unlock the contest portal, solve our friendly morning riddle. The password is the name of our college flying mascot.' The students laughed with excitement, but they needed the password quickly to start their test runs. Luckily, clues were left around the computer lab by club president Dev.",
    caseBackground: "The College Coding Club creates a fun puzzle every semester to welcome new students. Dev Sharma, the club leader, set up the welcome screen this morning but forgot to tell the teachers what the password was.",
    investigationObjective: "Read the clues on the monitors and whiteboards, find the name of the college mascot, and unlock the contest portal.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Monitor Message", detail: "Screen prompt says the password is the four-letter name of the campus robot mascot." },
        { id: "c2", title: "Lab 3 Whiteboard Drawing", detail: "A colorful drawing of a robot eagle with the name 'AERO' written underneath in bold markers." },
        { id: "c3", title: "Dev's Note by Keyboard", detail: "Handwritten note confirming: 'Welcome riddle: enter our eagle mascot name!'." }
      ],
      personsInvolved: [
        { name: "Dev Sharma", role: "Coding Club President", statement: "I made this fun riddle to welcome everyone to the competition!" },
        { name: "Pooja Hegde", role: "Robotics Team Captain", statement: "Our little rover is ready to drive! We just need to type in the mascot name." },
        { name: "Mr. Kunal", role: "Lab Assistant", statement: "Dev was drawing on the whiteboard this morning right before breakfast." }
      ],
      timeline: [
        { time: "07:30 AM", event: "Dev draws the mascot eagle on the whiteboard in Lab 3." },
        { time: "08:00 AM", event: "Computer screens display the friendly welcome riddle prompt." },
        { time: "08:15 AM", event: "Robotics students arrive with their team robots." }
      ],
      guidelines: [
        "Check the screen message for instructions.",
        "Look at the drawing on the front whiteboard.",
        "Match the 4-letter name AERO with the password field."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    location: "Campus Computer Lab, Bengaluru",
    period: "Modern Tech Mystery",
    status: "Open Case",
    isFeatured: true,
    rating: 4.8,
    solversCount: 2950,
    badgeText: "Tech Sleuth",
    tags: ["Computer", "Code", "Robot", "Friendly Puzzle"]
  },
  {
    id: "case-03",
    caseNumber: "CASE #03",
    domain: "Education",
    title: "The Library Secret",
    subtitle: "Discover why several astronomy books were placed on the study cart",
    shortDescription: "A stack of colorful astronomy and space books is missing from shelf 4. Follow the library clues to find where they were placed.",
    synopsis: "Librarian Mrs. Rao noticed an empty space on the astronomy shelf. She wondered whether the books were lost or simply gathered for today's solar eclipse workshop.",
    storyIntroduction: "The university central library is a peaceful place filled with towering oak shelves, warm brass lamps, and the comforting smell of fresh paper. On a bright Wednesday afternoon, librarian Mrs. Rao was returning returned books to the science aisle. When she arrived at shelf number 4, where the colorful astronomy and space exploration books usually rested, she noticed a completely empty gap! Four big books about planets and stars were missing. Mrs. Rao smiled, remembering that students were presenting a solar eclipse science fair project in the afternoon. Beside the empty shelf was a wooden book cart, a friendly bookmark, and a student sign-up sheet.",
    caseBackground: "Students at the college frequently reserve book sets for group study projects. Today, student Ananya and her teammates are preparing a presentation on the planets and the moon.",
    investigationObjective: "Trace where the astronomy books went, read the library study cart notes, and verify which student reserved them.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Empty Astronomy Shelf", detail: "Shelf 4 has a small bookmark card pointing toward the study corner." },
        { id: "c2", title: "Wooden Study Cart", detail: "A wheeled cart loaded with four astronomy books near reading table #2." },
        { id: "c3", title: "Library Sign-Up Sheet", detail: "Register showing student Ananya reserved the space books for her eclipse project." }
      ],
      personsInvolved: [
        { name: "Mrs. Rao", role: "Head Librarian", statement: "Students love our astronomy books! I wanted to make sure they were safe on the cart." },
        { name: "Ananya Patel", role: "Science Student", statement: "We stacked the books on the study cart so our whole group could read together." },
        { name: "Rohan Das", role: "Library Assistant", statement: "I saw Ananya wheel the study cart to table #2 right after lunch." }
      ],
      timeline: [
        { time: "11:00 AM", event: "Ananya checks out the astronomy book set for group study." },
        { time: "11:30 AM", event: "Books are neatly stacked on the wheeled wooden study cart." },
        { time: "01:00 PM", event: "Librarian Mrs. Rao checks the shelf and confirms the reservation." }
      ],
      guidelines: [
        "Check the empty shelf for any notes.",
        "Examine the study cart near table #2.",
        "Read student Ananya's reservation slip."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    location: "Heritage Library, Chennai",
    period: "Campus Mystery",
    status: "Open Case",
    isFeatured: false,
    rating: 4.7,
    solversCount: 3120,
    badgeText: "Library Sleuth",
    tags: ["Library", "Books", "Study", "Easy Investigation"]
  },
  {
    id: "case-04",
    caseNumber: "CASE #04",
    domain: "Environment",
    title: "The Green Mystery",
    subtitle: "Investigate why community garden marigolds needed extra fresh water",
    shortDescription: "Bright marigold flowers in the community garden began drooping slightly. Discover what garden powder caused the temporary wilting.",
    synopsis: "Community gardener Raju noticed the marigold bed looked thirsty and found white powder on the soil. Find out how gentle fresh rainwater solves the puzzle.",
    storyIntroduction: "The Sunshine Community Garden in Pune is filled with sweet-smelling jasmine, green mint leaves, and rows of golden orange marigolds. Neighbors love to visit every morning to admire the blossoms. But on Thursday morning, friendly gardener Raju noticed something unusual. The marigold plants in Flowerbed B were drooping, and the dark soil around their roots had a dusty white coating! Raju was worried because the flower festival was coming on the weekend. He checked the watering hose, which was running clean fresh water, and spotted an open paper bag behind the wooden tool shed. What was in the bag, and why did the flowers droop?",
    caseBackground: "Community gardens use organic compost and natural gardening supplies. Yesterday, Raju was organizing the garden shed and spreading soil nutrients across the beds.",
    investigationObjective: "Inspect the soil powder, read the label on the garden bag, and find out how Raju can help the flowers perk back up.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "White Powder on Soil", detail: "Safe garden chalk powder (lime) sprinkled around the roots of the marigolds." },
        { id: "c2", title: "Garden Lime Chalk Bag", detail: "An opened sack behind the shed labeled: 'Natural Garden Lime Chalk - Use Sparingly'." },
        { id: "c3", title: "Raju's Gardening Notes", detail: "Raju wrote: 'Accidentally poured too much chalk powder; watering with fresh water will fix it!'." }
      ],
      personsInvolved: [
        { name: "Raju", role: "Head Gardener", statement: "I accidentally shook too much white chalk on Bed B, but a good soak of water will wash it away!" },
        { name: "Auntie Sunita", role: "Garden Neighbor", statement: "The mint and tomatoes are green and happy; only the marigolds got the white powder." },
        { name: "Kavita", role: "Plant Biologist", statement: "Garden lime is harmless, but too much makes plants thirsty. Fresh water quickly revives them." }
      ],
      timeline: [
        { time: "Yesterday Afternoon", event: "Raju cleans the shed and accidentally scatters lime chalk on Bed B." },
        { time: "This Morning", event: "Marigold leaves droop slightly due to chalk dryness." },
        { time: "Now", event: "Fresh rainwater is ready to wash the soil and restore the flowers." }
      ],
      guidelines: [
        "Inspect the white powder around the plant roots.",
        "Check the open sack behind the wooden shed.",
        "See how watering with clean water revives the plants."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1466692476868-ae69d9c25f8f?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1466692476868-ae69d9c25f8f?auto=format&fit=crop&w=900&q=80",
    location: "Sunshine Garden, Pune",
    period: "Nature Investigation",
    status: "Open Case",
    isFeatured: false,
    rating: 4.8,
    solversCount: 2740,
    badgeText: "Green Sleuth",
    tags: ["Plants", "Garden", "Nature", "Easy Case"]
  },
  {
    id: "case-05",
    caseNumber: "CASE #05",
    domain: "Food",
    title: "The Chef's Secret",
    subtitle: "Identify the missing secret spice in Chef Kabir's famous royal biryani",
    shortDescription: "Chef Kabir's prize royal biryani is missing its golden aroma. Search the kitchen pantry to find where the saffron was placed.",
    synopsis: "In the bustling royal kitchen, Chef Kabir prepared for the evening culinary feast. But the spice tin on the prep counter was empty! Where did the saffron packet go?",
    storyIntroduction: "The delicious aromas of sizzling ghee, fragrant basmati rice, and roasted spices filled the grand kitchen of the Royal Haveli in Old Delhi. Tonight was the Great Food Festival, and legendary Master Chef Kabir was preparing his world-famous Royal Dum Biryani. Food critics and hungry guests from across India were arriving in just two hours. But suddenly, Chef Kabir clapped his hands to his forehead: 'Oh no! The biryani rice is not turning golden, and the royal aroma is missing!' On his stainless steel counter sat a row of spice jars, but the small round brass tin labeled 'Kashmir Saffron' was completely empty. Where was the fresh packet of saffron?",
    caseBackground: "Chef Kabir's kitchen receives fresh spices from spice merchants in Chandni Chowk every morning. Assistant cook Priya unloaded the morning grocery delivery and organized the store pantry.",
    investigationObjective: "Search the kitchen spice shelf, examine the grocery delivery box, and find the packet of royal saffron.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Empty Brass Spice Tin", detail: "A shiny brass jar labeled 'Pure Kashmir Saffron Threads' sitting open on the prep table." },
        { id: "c2", title: "Grocery Delivery Slip", detail: "Invoice showing 1 box of genuine saffron threads was received at 8:00 AM." },
        { id: "c3", title: "Pantry Rice Shelf", detail: "A sealed golden packet of saffron tucked safely behind the large basmati rice sack." }
      ],
      personsInvolved: [
        { name: "Chef Kabir", role: "Master Chef", statement: "Without saffron, my biryani cannot get its famous royal golden color and rich aroma!" },
        { name: "Priya", role: "Assistant Cook", statement: "I unpacked the groceries in a hurry and placed the small saffron box on the pantry shelf behind the rice!" },
        { name: "Uncle Mohan", role: "Spice Merchant", statement: "I personally delivered the finest saffron threads to the kitchen this morning." }
      ],
      timeline: [
        { time: "08:00 AM", event: "Morning grocery delivery arrives with fresh spices." },
        { time: "09:00 AM", event: "Priya stores the spices in the pantry cupboard." },
        { time: "11:00 AM", event: "Chef Kabir begins cooking the festive biryani." }
      ],
      guidelines: [
        "Check the empty spice tin on the cooking counter.",
        "Look at the morning grocery invoice.",
        "Search behind the basmati rice sack on the pantry shelf."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
    location: "Old Delhi Heritage Kitchen",
    period: "Culinary Mystery",
    status: "Open Case",
    isFeatured: true,
    rating: 4.9,
    solversCount: 4210,
    badgeText: "Culinary Sleuth",
    tags: ["Food", "Cooking", "Spices", "Chef"]
  },
  {
    id: "case-06",
    caseNumber: "CASE #06",
    domain: "Travel",
    title: "The Lost Parcel",
    subtitle: "Trace a misplaced gift package along the mountain railway line",
    shortDescription: "A beautiful gift box was unloaded at Barog Station instead of Shimla. Follow the railway baggage tags to locate it.",
    synopsis: "A gift package containing a wooden clock was set down during luggage sorting at a scenic mountain depot. Trace the luggage cart clues to find it safe and sound.",
    storyIntroduction: "The famous blue and red Toy Train was chugging cheerfully through the misty pine hills along the Kalka-Shimla mountain railway. Inside the luggage van was a sturdy brown cardboard parcel tied with a bright red ribbon. It was an anniversary present—a handcrafted wooden pine-cone clock sent by Grandma Shanti to her grandson in Shimla. But when the train pulled into the final terminus at Shimla, the baggage porter could not find the red-ribboned parcel! The station master sent an immediate radio message back down the line to check the mountain stations. At Barog Station, where the train had stopped for fresh water and tea, clues were waiting.",
    caseBackground: "Mountain trains stop at picturesque waystations where luggage porters transfer mailbags and freight. At Barog Station, luggage was sorted while passengers enjoyed morning tea.",
    investigationObjective: "Trace the baggage tags, read the station master's transfer log, and locate the safe package at Barog Station.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Parcel Label with Red Ribbon", detail: "A tag reading: 'Deliver to Shimla Central - Handcrafted Wooden Clock'." },
        { id: "c2", title: "Barog Station Luggage Cart", detail: "A wooden handcart on platform 1 holding the red-ribbon parcel." },
        { id: "c3", title: "Station Master's Safe Holding Log", detail: "Logbook entry: 'Package held safely in Barog Station office for the next morning train'." }
      ],
      personsInvolved: [
        { name: "Station Master Sharma", role: "Barog Station Master", statement: "The parcel was set on our luggage cart by mistake. It is locked safely in my office!" },
        { name: "Porter Ramu", role: "Luggage Handler", statement: "I sorted the luggage during the water refill stop and kept the gift box safe." },
        { name: "Grandma Shanti", role: "Sender", statement: "I am so relieved the wooden clock was kept safe and dry by the friendly station staff." }
      ],
      timeline: [
        { time: "08:30 AM", event: "Toy train departs Kalka with the gift package." },
        { time: "10:15 AM", event: "Train halts at Barog Station for tea and water refilling." },
        { time: "10:25 AM", event: "Luggage porter moves the parcel onto the Barog platform cart." },
        { time: "12:30 PM", event: "Shimla depot realizes the parcel stayed at Barog." }
      ],
      guidelines: [
        "Check the address tag on the parcel.",
        "Look at the luggage sorting cart on platform 1.",
        "Read the station master's safe holding logbook."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    location: "Kalka-Shimla Railway, Himachal Pradesh",
    period: "Travel Mystery",
    status: "Open Case",
    isFeatured: false,
    rating: 4.8,
    solversCount: 2650,
    badgeText: "Travel Sleuth",
    tags: ["Train", "Travel", "Parcel", "Railway Clues"]
  },
  {
    id: "case-07",
    caseNumber: "CASE #07",
    domain: "Arts",
    title: "The Artist's Clue",
    subtitle: "Match two beautiful landscape paintings with their correct wall labels",
    shortDescription: "Two landscape paintings were accidentally swapped under each other's descriptions during morning cleaning. Match the artists and signatures.",
    synopsis: "At the Kala Ghoda Art Gallery, two morning sunrise paintings were hung under the wrong title cards. Use the painted signatures to restore their true places.",
    storyIntroduction: "The sunlight streamed through the tall glass windows of the Kala Ghoda Art Gallery in Mumbai, illuminating rows of colorful modern paintings. Today was the opening of the 'Colors of India' landscape exhibition. Visitors were scheduled to arrive in just thirty minutes to admire two celebrated paintings of the morning sunrise: one showing the golden sun rising over ocean waves by Artist Mehta, and the other showing the sun rising over misty green mountains by Artist Arora. But when gallery assistant Neha walked past the central exhibition wall, she gasped. The ocean painting was hanging under the label 'Mountain Dawn', and the mountain painting was hanging under 'Seashore Sunrise'! The picture hooks had been swapped during morning dusting.",
    caseBackground: "The gallery staff cleaned the gallery frames yesterday evening. Both canvas paintings have clear painter signatures in the lower corners that tell the true story.",
    investigationObjective: "Examine the painted subjects, check the artist signatures in the corners, and match each painting to its correct wall label.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Painting A - Ocean Waves", detail: "Depicts blue ocean waves with a distinct blue signature reading 'Mehta'." },
        { id: "c2", title: "Painting B - Green Mountains", detail: "Depicts green mountain valleys with a distinct red signature reading 'Arora'." },
        { id: "c3", title: "Gallery Wall Labels", detail: "Label 1 is titled 'Seashore Sunrise by Mehta', and Label 2 is titled 'Mountain Dawn by Arora'." }
      ],
      personsInvolved: [
        { name: "Neha", role: "Gallery Assistant", statement: "I dusted the frames this morning and must have hooked them onto the wrong nails!" },
        { name: "Artist Mehta", role: "Seascape Painter", statement: "My painting always features blue ocean waves and my blue signature in the bottom corner." },
        { name: "Artist Arora", role: "Landscape Painter", statement: "I love the mountains, which is why my painting shows the misty green hilltops." }
      ],
      timeline: [
        { time: "08:00 AM", event: "Gallery frames are dusted with soft feather dusters." },
        { time: "08:15 AM", event: "Paintings are hung back up, accidentally swapping hooks." },
        { time: "08:30 AM", event: "Neha notices the signatures do not match the wall cards." }
      ],
      guidelines: [
        "Look at the subject in Painting A (ocean) and Painting B (mountains).",
        "Check the signatures in the lower corners.",
        "Match each painting back to its proper wall label."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=900&q=80",
    location: "Kala Ghoda Gallery, Mumbai",
    period: "Fine Arts Mystery",
    status: "Open Case",
    isFeatured: false,
    rating: 4.8,
    solversCount: 2890,
    badgeText: "Art Sleuth",
    tags: ["Art", "Paintings", "Gallery", "Visual Clues"]
  },
  {
    id: "case-08",
    caseNumber: "CASE #08",
    domain: "Sports",
    title: "The Final Score",
    subtitle: "Investigate an accidental scoreboard error during a school cricket match",
    shortDescription: "The digital cricket scoreboard displayed 10 extra runs after the tea break. Check the scorekeeper's remote control to fix the score.",
    synopsis: "During an exciting inter-school cricket final, the digital scoreboard read 155 runs instead of 145. Find the test button that caused the score to jump.",
    storyIntroduction: "A cheering crowd of students, parents, and teachers packed the stadium stands for the annual City Cricket Trophy final. It was a thrilling, close match between the Red Hawks and the Blue Dolphins. The players walked off the pitch for a short tea break, and everyone checked the big digital electronic scoreboard towering over the pavilion. The official scorekeeper Amit had written '145 runs' on his paper scorebook. But when the bright electric scoreboard lights flickered on, the giant glowing numbers read '155 runs'—exactly ten runs too high! Both team captains looked up at the board in surprise. Scorekeeper Amit checked his remote control buttons to solve the funny mystery.",
    caseBackground: "Electronic scoreboards have remote control panels with test buttons to check that all light bulbs are working before the match resumes.",
    investigationObjective: "Compare the handwritten scoresheet with the digital board, inspect the remote control test mode, and correct the score.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Handwritten Official Scoresheet", detail: "Scorebook verified by umpire showing true score: 145 runs." },
        { id: "c2", title: "Scoreboard Remote Control", detail: "A handheld console with a yellow button labeled '+10 Bulb Test Mode'." },
        { id: "c3", title: "Scorekeeper Amit's Note", detail: "Amit wrote: 'Tested light bulbs with +10 button during tea break and forgot to clear it!'." }
      ],
      personsInvolved: [
        { name: "Amit", role: "Scorekeeper", statement: "I was testing the scoreboard bulbs with the +10 test button and forgot to reset it back to 145!" },
        { name: "Umpire Verma", role: "Match Official", statement: "The paper scoresheet is 100% accurate: the true score is 145 runs." },
        { name: "Captain Vikram", role: "Team Captain", statement: "We knew something was funny when the score jumped during the tea break!" }
      ],
      timeline: [
        { time: "03:30 PM", event: "Tea break called with the score at 145 runs." },
        { time: "03:40 PM", event: "Amit presses +10 Bulb Test button on the remote console." },
        { time: "03:50 PM", event: "Match resumes and everyone notices the digital screen reads 155." }
      ],
      guidelines: [
        "Check the official handwritten scoresheet.",
        "Examine the +10 test button on the remote control.",
        "Reset the screen score back to 145 runs."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80",
    location: "City Cricket Stadium, Mumbai",
    period: "Sports Mystery",
    status: "Open Case",
    isFeatured: false,
    rating: 4.7,
    solversCount: 3040,
    badgeText: "Sports Sleuth",
    tags: ["Cricket", "Scoreboard", "Sports", "Simple Mystery"]
  },
  {
    id: "case-09",
    caseNumber: "CASE #09",
    domain: "Indian Culture",
    title: "The Festival Mystery",
    subtitle: "Find the traditional bronze peacock lamps before the festival evening",
    shortDescription: "Two traditional bronze lamps were polished and safely stored for the evening celebration. Follow the temple clues to locate them.",
    synopsis: "The temple courtyard was being decorated with flowers and sweet treats, but the pair of peacock lamps was missing from the pedestal. Where did volunteer Suresh polish them?",
    storyIntroduction: "The courtyard of the historic Meenakshi Heritage Pavilion in Madurai was filled with festive laughter, music, and the sweet fragrance of jasmine garlands. Tonight was the grand evening festival, and families were gathering to light hundred of oil lamps at sunset. But when festival coordinator Ananya walked up to the main stage, she noticed that the two tall, gleaming traditional bronze peacock lamps (kuthuvilakku) were missing from their carved stone pedestals! The sunset prayer was only an hour away, and everyone wanted the magnificent lamps to be lit on time. A pleasant trail of yellow flower petals led from the stone pedestals toward the temple store room, where a brass polishing cloth was spotted.",
    caseBackground: "Community volunteers help clean and shine sacred brass and bronze items before every major temple festival.",
    investigationObjective: "Follow the trail of petals, check the store room workbench, and verify that the peacock lamps are polished and ready.",
    importantInformation: {
      keyClues: [
        { id: "c1", title: "Empty Stone Pedestals", detail: "The two stage pedestals are clean and swept, ready for the lamps to return." },
        { id: "c2", title: "Flower Petal Trail", detail: "A gentle trail of yellow marigold petals leading straight into the Temple Store Room." },
        { id: "c3", title: "Store Room Polishing Table", detail: "The two bronze peacock lamps glowing bright and clean on the store room shelf with a tin of brass polish." }
      ],
      personsInvolved: [
        { name: "Suresh", role: "Temple Volunteer", statement: "I took the peacock lamps to the store room to shine them with lemon paste and brass polish so they look brilliant tonight!" },
        { name: "Ananya", role: "Festival Coordinator", statement: "The courtyard looks gorgeous! We just need to bring the polished lamps to the stage." },
        { name: "Priest Ramu", role: "Head Priest", statement: "Suresh always takes great care of our festival lamps. They are shining like gold." }
      ],
      timeline: [
        { time: "03:00 PM", event: "Volunteers begin decorating the courtyard with marigolds." },
        { time: "03:30 PM", event: "Suresh carries the bronze lamps to the store room for polishing." },
        { time: "04:30 PM", event: "Lamps are polished to a golden shine on the store room shelf." },
        { time: "05:30 PM", event: "Sunset ceremony begins and lamps are placed on stage." }
      ],
      guidelines: [
        "Follow the petal trail on the courtyard floor.",
        "Look inside the Temple Store Room.",
        "Confirm the peacock lamps are polished and ready."
      ]
    },
    difficulty: "Very Easy",
    duration: "4–5 mins",
    illustration: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=900&q=80",
    heroImage: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=900&q=80",
    location: "Heritage Pavilion, Madurai",
    period: "Cultural Festival Mystery",
    status: "Open Case",
    isFeatured: true,
    rating: 4.9,
    solversCount: 3680,
    badgeText: "Culture Sleuth",
    tags: ["Festival", "Indian Culture", "Lamps", "Tradition"]
  }
];

export const CASE_CATEGORIES = [
  "All Cases",
  "History",
  "Technology",
  "Education",
  "Environment",
  "Food",
  "Travel",
  "Arts",
  "Sports",
  "Indian Culture"
];

export const DIFFICULTY_LEVELS = [
  "All Difficulties",
  "Very Easy"
];
