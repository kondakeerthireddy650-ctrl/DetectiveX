// Investigation Gameplay Data for all 9 DetectiveX cases
// Updated for Interactive Scene gameplay with clickable objects, instant feedback, and rich clues
export const INVESTIGATION_DATA = {
  "case-01": {
    "caseId": "case-01",
    "caseNumber": "CASE #01",
    "domain": "History",
    "title": "The Missing Diamond",
    "subtitle": "A museum artifact has been misplaced during exhibition hall cleaning",
    "sceneName": "The National Antiquities Museum, New Delhi",
    "introSummary": "Curator Anand Verma unlocked the museum exhibition hall for the morning school tour, only to find the glass display case open and the famous replica diamond missing from its red velvet cushion. All museum doors stayed securely locked overnight. Follow the simple clues to find where the diamond was safely placed during floor cleaning.",
    "objectives": [
      "Examine the glass display vitrine and lock latch.",
      "Read the yellow note left on the velvet cushion.",
      "Check the museum floor cleaning schedule and basement safe."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Clean Display Vitrine",
        "category": "Physical Evidence",
        "locationFound": "Exhibit Stand 14, Main Hall",
        "icon": "Search",
        "shortDesc": "The glass display case has no cracks, scratches, or broken locks.",
        "detailedAnalysis": "The glass case was opened smoothly with a key. No glass was broken, showing this was done by authorized museum staff.",
        "significance": "Proves the case was opened safely with an official key, not by a burglar.",
        "objectName": "Display Vitrine",
        "sceneCoords": {
          "x": 26,
          "y": 38
        },
        "objectIcon": "Search"
      },
      {
        "id": "c2",
        "title": "White Cotton Glove Thread",
        "category": "Forensic Lead",
        "locationFound": "On the vitrine lock latch",
        "icon": "CheckCircle2",
        "shortDesc": "A small white cotton thread snagged on the lock latch.",
        "detailedAnalysis": "The thread matches the soft white cotton gloves that museum curators always wear when safely handling delicate artifacts.",
        "significance": "Shows that museum staff wearing handling gloves opened the vitrine.",
        "objectName": "Vitrine Lock Latch",
        "sceneCoords": {
          "x": 40,
          "y": 32
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c3",
        "title": "Yellow Archival Memo",
        "category": "Written Note",
        "locationFound": "On the red velvet cushion",
        "icon": "FileText",
        "shortDesc": "A small note: 'Moving diamond to Basement Vault Safe #3 during floor polishing'.",
        "detailedAnalysis": "The note explains clearly that the diamond was temporarily moved to protect it from dust while the marble floors were polished.",
        "significance": "Reveals that the diamond was never stolen; it was moved to Basement Vault Safe #3.",
        "objectName": "Red Velvet Cushion",
        "sceneCoords": {
          "x": 32,
          "y": 56
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c4",
        "title": "Floor Cleaning Notice",
        "category": "Notice Board",
        "locationFound": "Hallway Entrance",
        "icon": "MapPin",
        "shortDesc": "A yellow caution sign reading: 'Wet Floors - Polishing Marble Tonight'.",
        "detailedAnalysis": "Confirms that the museum cleaning team waxed and buffed the marble floors yesterday evening.",
        "significance": "Explains why delicate museum exhibits needed protection from cleaning dust.",
        "objectName": "Caution Wet Floor Sign",
        "sceneCoords": {
          "x": 14,
          "y": 72
        },
        "objectIcon": "MapPin"
      },
      {
        "id": "c5",
        "title": "Basement Vault Safe #3 Register",
        "category": "Storage Log",
        "locationFound": "Basement Vault Room",
        "icon": "BookOpen",
        "shortDesc": "A log entry showing the replica diamond was checked into Safe #3 yesterday at 7:00 PM.",
        "detailedAnalysis": "The basement safe log confirms the diamond replica is sitting safely inside Vault Safe #3, ready to return to the display hall.",
        "significance": "Direct proof that the diamond is completely safe inside Vault Safe #3.",
        "objectName": "Basement Vault Safe #3",
        "sceneCoords": {
          "x": 72,
          "y": 36
        },
        "objectIcon": "BookOpen"
      },
      {
        "id": "c6",
        "title": "Curator's Night Shift Register",
        "category": "Official Log",
        "locationFound": "Curator's Desk by East Arch",
        "icon": "BookOpen",
        "objectName": "Curator's Logbook",
        "sceneCoords": {
          "x": 84,
          "y": 68
        },
        "objectIcon": "BookOpen",
        "shortDesc": "A handwritten sign-off by Curator Anand: 'Safe #3 secured before marble waxing'.",
        "detailedAnalysis": "The curator signed off that the diamond was locked in Safe #3 before leaving.",
        "significance": "Confirms official procedure was followed and no intruder entered."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1 & 2: Notice there is no broken glass, and white glove fibers show an official key was used."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 3 & 4: Read the yellow note explaining the marble floors were being waxed and polished."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 3 & 5: The note and basement logbook explicitly name Basement Vault Safe #3."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "How was the glass display vitrine opened?",
        "options": [
          "A thief smashed the glass with a hammer.",
          "It was opened safely with an authorized curator key.",
          "A gust of wind blew the heavy glass open."
        ],
        "correctIndex": 1,
        "explanation": "The lack of damage and the cotton glove thread prove it was opened safely with an authorized key.",
        "hint": "Look at Clues 1 and 2: there is zero broken glass and cotton glove fibers were found on the lock."
      },
      {
        "id": "q2",
        "prompt": "Why was the diamond replica moved from the display stand?",
        "options": [
          "To protect it from dust while the marble floors were polished.",
          "It was sold to a private collector in another country.",
          "It was thrown away by accident in the waste bin."
        ],
        "correctIndex": 0,
        "explanation": "The yellow note and hallway sign confirm the gem was moved to protect it from floor polishing dust.",
        "hint": "Read Clues 3 and 4 about the floor waxing and dust protection note."
      },
      {
        "id": "q3",
        "prompt": "Where was the diamond safely found?",
        "options": [
          "In the outdoor museum garden under a tree.",
          "Inside Basement Vault Safe #3.",
          "In the front ticket counter drawer."
        ],
        "correctIndex": 1,
        "explanation": "Both the yellow note and the basement logbook confirm the diamond is safe in Basement Vault Safe #3.",
        "hint": "Clue 5 shows the logbook entry for Basement Vault Safe #3."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Diamond is Safe!",
      "summary": "You used your keen detective eyes to discover that the diamond was never stolen! Museum staff moved it into Basement Vault Safe #3 to protect it from dust while the floors were waxed. The diamond was returned to its pedestal in time for the school tour.",
      "badgeEarned": "History Sleuth Badge"
    }
  },
  "case-02": {
    "caseId": "case-02",
    "caseNumber": "CASE #02",
    "domain": "Technology",
    "title": "The Campus Code",
    "subtitle": "Solve a friendly computer message to find the robotics portal password",
    "sceneName": "Campus Computer Lab 3, Bengaluru",
    "introSummary": "Student engineers arrived at the computer lab for their morning robotics match, only to find the screens showing a friendly smiling robot mascot asking for a password. Explore the simple whiteboard and desk clues to find the mascot name and unlock the contest portal.",
    "objectives": [
      "Read the cheerful welcome message on the computer screen.",
      "Check the colorful drawing on the front whiteboard.",
      "Find the four-letter mascot name to open the robotics portal."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Monitor Welcome Message",
        "category": "Computer Screen",
        "locationFound": "Workstation #1, Lab 3",
        "icon": "Search",
        "shortDesc": "A bright green screen saying: 'Password is the four-letter name of our campus mascot'.",
        "detailedAnalysis": "The prompt shows a smiling robot mascot and clearly tells players that typing the mascot name unlocks the competition portal.",
        "significance": "Tells us the password is simply the four-letter name of the campus mascot.",
        "objectName": "Workstation 01 Monitor",
        "sceneCoords": {
          "x": 44,
          "y": 38
        },
        "objectIcon": "Search"
      },
      {
        "id": "c2",
        "title": "Whiteboard Eagle Drawing",
        "category": "Whiteboard Drawing",
        "locationFound": "Front Wall, Lab 3",
        "icon": "CheckCircle2",
        "shortDesc": "A colorful drawing of a robot eagle with the name 'AERO' written in bold blue letters.",
        "detailedAnalysis": "The drawing shows the college mascot, a flying robot eagle named 'AERO', drawn this morning by the Coding Club.",
        "significance": "Reveals the exact four-letter password: A-E-R-O.",
        "objectName": "Lab Whiteboard",
        "sceneCoords": {
          "x": 18,
          "y": 30
        },
        "objectIcon": "Sparkles"
      },
      {
        "id": "c3",
        "title": "Coding Club Welcome Note",
        "category": "Paper Note",
        "locationFound": "Beside the Computer Keyboard",
        "icon": "FileText",
        "shortDesc": "A sticky note from club president Dev: 'Welcome competitors! Enter our mascot eagle name'.",
        "detailedAnalysis": "Dev Sharma left this note to confirm that the puzzle was just a friendly welcome greeting for the visiting students.",
        "significance": "Confirms that Dev Sharma set up the friendly riddle using the eagle mascot name.",
        "objectName": "Keyboard Sticky Note",
        "sceneCoords": {
          "x": 58,
          "y": 56
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c4",
        "title": "Student ID Card",
        "category": "ID Badge",
        "locationFound": "Lab Desk #1",
        "icon": "MapPin",
        "shortDesc": "ID card of Dev Sharma, President of the Campus Coding Club.",
        "detailedAnalysis": "Shows that Dev Sharma organized the contest software and prepared the fun welcome challenge.",
        "significance": "Identifies Dev Sharma as the friendly creator of the puzzle.",
        "objectName": "Student ID Card",
        "sceneCoords": {
          "x": 34,
          "y": 68
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c5",
        "title": "Portal Unlock Guide",
        "category": "Instruction Card",
        "locationFound": "Lab Bulletin Board",
        "icon": "BookOpen",
        "shortDesc": "A printed card: 'Type AERO in capital letters to start the robotics match'.",
        "detailedAnalysis": "The official guide confirms that entering 'AERO' instantly opens the robot navigation portal.",
        "significance": "Double-confirms the correct answer to unlock the system.",
        "objectName": "Club Bulletin Board",
        "sceneCoords": {
          "x": 82,
          "y": 32
        },
        "objectIcon": "BookOpen"
      },
      {
        "id": "c6",
        "title": "Robotics CPU Case",
        "category": "Hardware Asset",
        "locationFound": "Under Workstation 01 Desk",
        "icon": "Search",
        "objectName": "Robotics CPU Tower",
        "sceneCoords": {
          "x": 74,
          "y": 68
        },
        "objectIcon": "Search",
        "shortDesc": "A CPU tower with an eagle sticker and label: 'Password hint on whiteboard'.",
        "detailedAnalysis": "The tower confirms the eagle motif is the robotics team's official password theme.",
        "significance": "Directly connects the computer terminal to the Eagle password pattern."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 3 & 4: Dev Sharma left his student ID and note explaining this was a friendly club greeting."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 1 & 2: The screen says the password is the name of the campus mascot eagle."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 2: The whiteboard clearly shows the four letters A-E-R-O."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "Who put the mystery message on the computer screens?",
        "options": [
          "Coding Club President Dev Sharma as a friendly welcome game.",
          "An outside computer hacker from another school.",
          "The building electrician by mistake."
        ],
        "correctIndex": 0,
        "explanation": "Clues 3 and 4 show Dev Sharma's note and ID card welcoming the competitors.",
        "hint": "Dev Sharma left his note right next to the keyboard."
      },
      {
        "id": "q2",
        "prompt": "What kind of password is required to open the contest portal?",
        "options": [
          "A secret 50-digit bank security code.",
          "The four-letter name of the college mascot.",
          "Today's cafeteria lunch menu date."
        ],
        "correctIndex": 1,
        "explanation": "The screen message explicitly asked for the four-letter name of the college mascot.",
        "hint": "Read Clue 1 on the computer monitor."
      },
      {
        "id": "q3",
        "prompt": "What is the four-letter password drawn on the whiteboard?",
        "options": [
          "LION",
          "AERO",
          "TECH"
        ],
        "correctIndex": 1,
        "explanation": "The whiteboard clearly displays the robot eagle named AERO.",
        "hint": "Look at the bold letters in Clue 2 under the robot eagle drawing."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Portal is Unlocked!",
      "summary": "Great detective work! You deduced that Coding Club president Dev Sharma created a friendly welcome puzzle. By reading the whiteboard drawing of the mascot eagle, you entered 'AERO' and unlocked the robotics tournament on time!",
      "badgeEarned": "Tech Sleuth Badge"
    }
  },
  "case-03": {
    "caseId": "case-03",
    "caseNumber": "CASE #03",
    "domain": "Education",
    "title": "The Library Secret",
    "subtitle": "Discover why several astronomy books were placed on the study cart",
    "sceneName": "Heritage Library, Chennai",
    "introSummary": "Librarian Mrs. Rao noticed an empty gap on shelf 4 where four colorful astronomy books usually sit. Did someone misplace them, or were they reserved for today's solar eclipse group presentation? Follow the library clues to find where they went.",
    "objectives": [
      "Check the empty gap on science shelf 4.",
      "Examine the wheeled wooden study cart near reading table #2.",
      "Read the library student reservation sign-up sheet."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Empty Astronomy Shelf",
        "category": "Library Shelf",
        "locationFound": "Science Aisle, Shelf #4",
        "icon": "Search",
        "shortDesc": "An empty space on the shelf with a bookmark pointing toward the study corner.",
        "detailedAnalysis": "The wooden shelf is completely clean. A small colorful bookmark shows that the books were neatly taken down together.",
        "significance": "Indicates the books were borrowed as a set for reading.",
        "objectName": "Science Shelf #4",
        "sceneCoords": {
          "x": 20,
          "y": 36
        },
        "objectIcon": "BookOpen"
      },
      {
        "id": "c2",
        "title": "Wooden Study Cart",
        "category": "Study Cart",
        "locationFound": "Beside Reading Table #2",
        "icon": "BookOpen",
        "shortDesc": "A wheeled cart neatly loaded with four astronomy books about the stars and planets.",
        "detailedAnalysis": "The missing astronomy books are sitting safely on the wooden cart, organized with bookmarks and paper tabs for study.",
        "significance": "Reveals where the missing books are located.",
        "objectName": "Rolling Study Cart",
        "sceneCoords": {
          "x": 48,
          "y": 58
        },
        "objectIcon": "Bookmark"
      },
      {
        "id": "c3",
        "title": "Student Reservation Register",
        "category": "Library Form",
        "locationFound": "Librarian's Front Desk",
        "icon": "FileText",
        "shortDesc": "A register entry signed by student Ananya reserving the astronomy book set.",
        "detailedAnalysis": "The logbook shows Ananya checked out the astronomy set this morning for her group project on solar eclipses.",
        "significance": "Identifies Ananya as the student using the books.",
        "objectName": "Librarian's Issue Desk",
        "sceneCoords": {
          "x": 80,
          "y": 40
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c4",
        "title": "Librarian Mrs. Rao's Sticky Note",
        "category": "Sticky Note",
        "locationFound": "On the Study Cart Handle",
        "icon": "CheckCircle2",
        "shortDesc": "A note reading: 'Reserved for Ananya's group until 3:00 PM presentation'.",
        "detailedAnalysis": "Mrs. Rao herself wrote this note to let other students know the books were temporarily on the study cart.",
        "significance": "Confirms the books were placed on the cart with permission.",
        "objectName": "Cart Handle Sticky Memo",
        "sceneCoords": {
          "x": 42,
          "y": 44
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c5",
        "title": "Solar Eclipse Presentation Slides",
        "category": "Project Folder",
        "locationFound": "Reading Table #2",
        "icon": "MapPin",
        "shortDesc": "A binder titled 'Solar Eclipse Science Presentation by Ananya and Friends'.",
        "detailedAnalysis": "The students are actively referencing the astronomy books to finish their science presentation poster.",
        "significance": "Explains the exact reason the books were being used.",
        "objectName": "Study Table #2 Slides",
        "sceneCoords": {
          "x": 64,
          "y": 68
        },
        "objectIcon": "Search"
      },
      {
        "id": "c6",
        "title": "Grade 8 Group Project Badge",
        "category": "Activity Tag",
        "locationFound": "Reading Room Table #2",
        "icon": "CheckCircle2",
        "objectName": "Astronomy Club Badge",
        "sceneCoords": {
          "x": 16,
          "y": 72
        },
        "objectIcon": "CheckCircle2",
        "shortDesc": "Badge: 'Grade 8 Solar Eclipse Group - Reading Room Reserved'.",
        "detailedAnalysis": "Proves students were authorized to keep the astronomy books together on their cart.",
        "significance": "Shows the books were never lost, just being studied together."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 2 & 4: The books were placed neatly on a study cart for a student project."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 3: The library register has student Ananya's name and signature."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 2: The books are stacked on the wooden study cart right beside reading table #2."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "Why were the astronomy books missing from their normal shelf?",
        "options": [
          "They were placed on a study cart for a school science project.",
          "They fell out the window during a storm.",
          "They were recycled into wrapping paper."
        ],
        "correctIndex": 0,
        "explanation": "Clues 2 and 4 prove the books were gathered on a study cart for a group project.",
        "hint": "Read the note on the study cart handle in Clue 4."
      },
      {
        "id": "q2",
        "prompt": "Which student reserved the astronomy books?",
        "options": [
          "Student Ananya for her solar eclipse presentation.",
          "A tourist who forgot their library card.",
          "The school bus driver."
        ],
        "correctIndex": 0,
        "explanation": "The library sign-up register in Clue 3 is signed by student Ananya.",
        "hint": "Clue 3 shows Ananya's signature on the checkout register."
      },
      {
        "id": "q3",
        "prompt": "Where were all the books located?",
        "options": [
          "On the wheeled study cart beside reading table #2.",
          "Hidden under the carpet in the hallway.",
          "Locked inside a dark cellar."
        ],
        "correctIndex": 0,
        "explanation": "Clue 2 confirms all four astronomy books were stacked neatly on the study cart near table #2.",
        "hint": "Look at Clue 2 describing the study cart."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Books are Found!",
      "summary": "Splendid observation! You traced the bookmark on shelf 4 to the wooden study cart near table #2. Student Ananya had reserved the astronomy books for her solar eclipse presentation with the librarian's permission. Case solved!",
      "badgeEarned": "Library Sleuth Badge"
    }
  },
  "case-04": {
    "caseId": "case-04",
    "caseNumber": "CASE #04",
    "domain": "Environment",
    "title": "The Green Mystery",
    "subtitle": "Investigate why community garden marigolds needed extra fresh water",
    "sceneName": "Sunshine Community Garden, Pune",
    "introSummary": "Friendly gardener Raju noticed that the golden marigold flowers in Flowerbed B were drooping slightly, and the soil had a fine white powder on top. Explore the garden clues to find out what garden powder was sprinkled and how clean water revives the plants.",
    "objectives": [
      "Check the white powder around the marigold flower roots.",
      "Inspect the paper bag found behind the wooden garden shed.",
      "Read Raju's note about reviving the flowers with clean fresh water."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "White Powder on Soil",
        "category": "Soil Sample",
        "locationFound": "Flowerbed B, Around Marigold Roots",
        "icon": "Search",
        "shortDesc": "A dusting of safe white garden chalk powder sprinkled on the soil.",
        "detailedAnalysis": "The powder is non-toxic garden lime chalk. While completely safe for gardens, too much chalk dries the soil temporarily.",
        "significance": "Identifies the white powder affecting the flowerbed.",
        "objectName": "Marigold Raised Bed",
        "sceneCoords": {
          "x": 32,
          "y": 64
        },
        "objectIcon": "Search"
      },
      {
        "id": "c2",
        "title": "Garden Lime Chalk Bag",
        "category": "Paper Sack",
        "locationFound": "Behind the Wooden Tool Shed",
        "icon": "FileText",
        "shortDesc": "A paper bag labeled: 'Natural Garden Lime Chalk - Use Sparingly'.",
        "detailedAnalysis": "The sack was opened yesterday when Raju was cleaning the tool shed. It confirms the powder was garden lime.",
        "significance": "Shows where the white powder came from.",
        "objectName": "Tool Shed Chalk Bag",
        "sceneCoords": {
          "x": 16,
          "y": 42
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c3",
        "title": "Raju's Gardening Diary",
        "category": "Notebook",
        "locationFound": "On the Garden Bench",
        "icon": "BookOpen",
        "shortDesc": "A diary note: 'Accidentally sprinkled too much lime chalk on Flowerbed B; need to rinse with water'.",
        "detailedAnalysis": "Raju's handwritten note confirms that he accidentally applied too much chalk powder while organizing the shed.",
        "significance": "Confirms Raju accidentally spread too much chalk powder.",
        "objectName": "Garden Wooden Bench",
        "sceneCoords": {
          "x": 68,
          "y": 58
        },
        "objectIcon": "BookOpen"
      },
      {
        "id": "c4",
        "title": "Clean Rainwater Hose",
        "category": "Water Supply",
        "locationFound": "Attached to the Rainwater Tank",
        "icon": "CheckCircle2",
        "shortDesc": "A green garden hose connected to fresh, clean rainwater.",
        "detailedAnalysis": "Testing the water reveals pure, mineral-rich fresh rainwater, perfect for washing the extra chalk away.",
        "significance": "Provides the simple solution to rinse and revive the flowers.",
        "objectName": "Rainwater Storage Hose",
        "sceneCoords": {
          "x": 82,
          "y": 36
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c5",
        "title": "Healthy Neighboring Mint",
        "category": "Plant Bed",
        "locationFound": "Flowerbed A, Next to Marigolds",
        "icon": "MapPin",
        "shortDesc": "Lush green mint plants growing happily with no white powder.",
        "detailedAnalysis": "The mint bed did not receive any chalk powder and looks completely healthy and vibrant.",
        "significance": "Proves only Flowerbed B was affected by the excess powder.",
        "objectName": "Mint Patch Bed A",
        "sceneCoords": {
          "x": 50,
          "y": 72
        },
        "objectIcon": "Sparkles"
      },
      {
        "id": "c6",
        "title": "Soil pH Test Strip",
        "category": "Botanical Metric",
        "locationFound": "Gardener's Potting Bench",
        "icon": "Search",
        "objectName": "Potting Bench pH Strip",
        "sceneCoords": {
          "x": 44,
          "y": 34
        },
        "objectIcon": "Search",
        "shortDesc": "A blue pH paper confirming the soil became alkaline from excessive lime.",
        "detailedAnalysis": "The test strip scientifically confirms the lime powder slowed the plant growth.",
        "significance": "Direct proof that lime powder was the sole cause."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1 & 2: The white powder on the soil is natural garden lime chalk."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 3: Read gardener Raju's diary note on the bench."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 4: A gentle soak with fresh water washes away the extra chalk."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "What caused the marigold flowers to droop slightly?",
        "options": [
          "Too much dry lime chalk powder was sprinkled on the soil.",
          "Hungry monkeys ate all the flower leaves.",
          "The sun did not shine for an entire month."
        ],
        "correctIndex": 0,
        "explanation": "Clues 1 and 2 show that excess dry garden lime chalk dried out the soil around the roots.",
        "hint": "Look at the powder sample described in Clue 1."
      },
      {
        "id": "q2",
        "prompt": "Who accidentally applied the extra chalk powder?",
        "options": [
          "Friendly gardener Raju while cleaning his tool shed.",
          "A stray neighborhood puppy.",
          "A visiting school marching band."
        ],
        "correctIndex": 0,
        "explanation": "Raju's notebook in Clue 3 explains that he accidentally scattered too much chalk while tidying up.",
        "hint": "Read Raju's handwritten diary entry in Clue 3."
      },
      {
        "id": "q3",
        "prompt": "What is the simple way to help the marigold flowers recover?",
        "options": [
          "Water the flowerbed with clean fresh water to wash away the chalk.",
          "Pull out all the flowers and throw them away.",
          "Paint the flower petals with watercolor paint."
        ],
        "correctIndex": 0,
        "explanation": "Clue 4 confirms that a good soak with fresh clean water washes away the extra chalk and revives the plants.",
        "hint": "Clue 4 shows the fresh rainwater hose ready to rinse the soil."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Garden is Saved!",
      "summary": "Wonderful deduction! You discovered that friendly gardener Raju accidentally sprinkled too much garden lime chalk on Flowerbed B. With a refreshing soak of clean rainwater, the chalk washed away and the marigolds stood tall and golden once again!",
      "badgeEarned": "Green Sleuth Badge"
    }
  },
  "case-05": {
    "caseId": "case-05",
    "caseNumber": "CASE #05",
    "domain": "Food",
    "title": "The Chef's Secret",
    "subtitle": "Identify the missing secret spice in Chef Kabir's famous royal biryani",
    "sceneName": "Royal Haveli Kitchen, Old Delhi",
    "introSummary": "In the bustling royal kitchen, Chef Kabir noticed his festive biryani was missing its famous golden color and fragrant aroma. On the spice counter, the brass saffron tin was empty! Follow the kitchen clues to locate the unopened packet of royal saffron.",
    "objectives": [
      "Check the empty brass spice tin on the prep counter.",
      "Read the morning grocery delivery invoice.",
      "Find the unopened packet of saffron on the pantry shelf."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Empty Brass Spice Tin",
        "category": "Kitchen Container",
        "locationFound": "Chef's Cooking Counter",
        "icon": "Search",
        "shortDesc": "A small brass tin labeled 'Pure Kashmir Saffron Threads' sitting open and empty.",
        "detailedAnalysis": "The tin is spotless, meaning Chef Kabir ran out of his existing batch of saffron before cooking.",
        "significance": "Confirms that saffron is the missing secret ingredient.",
        "objectName": "Brass Masala Dabba",
        "sceneCoords": {
          "x": 26,
          "y": 45
        },
        "objectIcon": "Search"
      },
      {
        "id": "c2",
        "title": "Grocery Delivery Slip",
        "category": "Paper Receipt",
        "locationFound": "Kitchen Office Board",
        "icon": "FileText",
        "shortDesc": "A receipt from 8:00 AM showing: '1 Box of Premium Kashmir Saffron Received'.",
        "detailedAnalysis": "The receipt proves a brand new box of saffron was delivered this morning and brought inside.",
        "significance": "Shows that fresh saffron is definitely inside the haveli kitchen.",
        "objectName": "Grocery Delivery Slip",
        "sceneCoords": {
          "x": 78,
          "y": 32
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c3",
        "title": "Pantry Rice Shelf",
        "category": "Pantry Shelf",
        "locationFound": "Store Cupboard, Shelf #2",
        "icon": "BookOpen",
        "shortDesc": "A golden packet of fresh saffron tucked behind the large basmati rice sack.",
        "detailedAnalysis": "The sealed packet is fresh, aromatic, and full of golden saffron threads, placed behind the rice sack for safekeeping.",
        "significance": "Reveals the exact location of the missing saffron.",
        "objectName": "Pantry Rice Shelf",
        "sceneCoords": {
          "x": 15,
          "y": 35
        },
        "objectIcon": "Bookmark"
      },
      {
        "id": "c4",
        "title": "Assistant Cook Priya's Checklist",
        "category": "To-Do List",
        "locationFound": "Beside the Pantry Door",
        "icon": "CheckCircle2",
        "shortDesc": "Priya wrote: 'Unloaded saffron delivery; placed safely behind rice sack'.",
        "detailedAnalysis": "Priya's note explains she put the small precious spice box behind the rice so it wouldn't get knocked over.",
        "significance": "Explains why the saffron was tucked behind the rice.",
        "objectName": "Prep Counter Checklist",
        "sceneCoords": {
          "x": 60,
          "y": 54
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c5",
        "title": "Warm Milk Saffron Test Cup",
        "category": "Culinary Test",
        "locationFound": "Tasting Table",
        "icon": "MapPin",
        "shortDesc": "A small cup of warm milk showing how a pinch of saffron creates a brilliant golden hue.",
        "detailedAnalysis": "Testing a strand of the saffron turns the milk bright royal gold with a sweet, rich fragrance.",
        "significance": "Proves the saffron will give the biryani its signature golden color.",
        "objectName": "Copper Tasting Cup",
        "sceneCoords": {
          "x": 44,
          "y": 68
        },
        "objectIcon": "Sparkles"
      },
      {
        "id": "c6",
        "title": "Stone Masala Mortar",
        "category": "Culinary Tool",
        "locationFound": "Kitchen Marble Prep Island",
        "icon": "Search",
        "objectName": "Sil Batta Grinding Stone",
        "sceneCoords": {
          "x": 82,
          "y": 68
        },
        "objectIcon": "Search",
        "shortDesc": "A yellow-stained stone mortar releasing a rich aroma of Kashmiri saffron.",
        "detailedAnalysis": "The saffron threads in the mortar confirm saffron is the golden spice.",
        "significance": "Solidifies saffron as Chef Vikram's missing signature ingredient."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1: The label on the empty spice tin clearly says Pure Kashmir Saffron."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 4: Assistant cook Priya put the small box in the pantry for safekeeping."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 3: The sealed packet was tucked right behind the big bag of basmati rice."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "What was the missing secret ingredient in Chef Kabir's famous biryani?",
        "options": [
          "Red chili powder.",
          "Pure Kashmir saffron threads.",
          "Extra table salt."
        ],
        "correctIndex": 1,
        "explanation": "Clue 1 shows the empty brass tin labeled 'Pure Kashmir Saffron Threads'.",
        "hint": "The brass jar label in Clue 1 names this royal spice."
      },
      {
        "id": "q2",
        "prompt": "Why was the fresh spice packet not on the cooking counter?",
        "options": [
          "Assistant cook Priya stored it safely in the pantry cupboard.",
          "It was stolen by a rival restaurant chef.",
          "A bird flew into the kitchen and carried it away."
        ],
        "correctIndex": 0,
        "explanation": "Priya's checklist in Clue 4 explains she safely placed the small box in the pantry.",
        "hint": "Read Priya's checklist on the pantry door in Clue 4."
      },
      {
        "id": "q3",
        "prompt": "Where was the new packet of saffron discovered?",
        "options": [
          "Tucked behind the basmati rice sack on the pantry shelf.",
          "Underneath the kitchen rug.",
          "Outside in the garden flowerpot."
        ],
        "correctIndex": 0,
        "explanation": "Clue 3 confirms the packet was resting safely on the shelf behind the large rice sack.",
        "hint": "Look behind the big bag of rice on pantry shelf #2."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Royal Recipe is Saved!",
      "summary": "Delicious deductive work! You discovered that assistant cook Priya placed the new box of saffron safely behind the basmati rice sack. Chef Kabir added the fragrant golden threads, and his royal biryani was the star of the food festival!",
      "badgeEarned": "Culinary Sleuth Badge"
    }
  },
  "case-06": {
    "caseId": "case-06",
    "caseNumber": "CASE #06",
    "domain": "Travel",
    "title": "The Lost Parcel",
    "subtitle": "Trace a misplaced gift package along the mountain railway line",
    "sceneName": "Kalka-Shimla Toy Train Railway",
    "introSummary": "A gift parcel tied with a bright red ribbon was sent to Shimla on the mountain Toy Train. But when the train arrived, the package was missing! Station records show it was set down during a luggage transfer at Barog Station. Follow the clues to find the parcel.",
    "objectives": [
      "Check the address tag on the red-ribboned parcel.",
      "Examine the luggage cart on Barog Station platform 1.",
      "Read the Barog Station Master's safe holding log."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Parcel Label with Red Ribbon",
        "category": "Luggage Tag",
        "locationFound": "Mail Manifest Record",
        "icon": "Search",
        "shortDesc": "A shipping label: 'Shimla Central Station - Handcrafted Wooden Clock Gift'.",
        "detailedAnalysis": "The label confirms Grandma Shanti sent a wooden clock gift box tied with red ribbon.",
        "significance": "Identifies the contents and final destination of the package.",
        "objectName": "Red-Ribbon Parcel",
        "sceneCoords": {
          "x": 40,
          "y": 55
        },
        "objectIcon": "Bookmark"
      },
      {
        "id": "c2",
        "title": "Barog Station Luggage Cart",
        "category": "Railway Equipment",
        "locationFound": "Platform 1, Barog Station",
        "icon": "MapPin",
        "shortDesc": "A wooden luggage cart where parcels were sorted during the 10:15 AM tea stop.",
        "detailedAnalysis": "The cart was used by the porter to sort packages while the toy train refilled its water boiler.",
        "significance": "Shows where the package was unloaded during the intermediate stop.",
        "objectName": "Platform Luggage Cart",
        "sceneCoords": {
          "x": 20,
          "y": 62
        },
        "objectIcon": "MapPin"
      },
      {
        "id": "c3",
        "title": "Porter Ramu's Transfer Note",
        "category": "Transfer Docket",
        "locationFound": "Barog Platform Office",
        "icon": "FileText",
        "shortDesc": "A note: 'Placed red-ribbon box in Station Master office for safekeeping'.",
        "detailedAnalysis": "Porter Ramu noticed the gift box was fragile and placed it inside the station office so it would not get rained on.",
        "significance": "Confirms the package is safe inside the Barog station office.",
        "objectName": "Platform Office Clipboard",
        "sceneCoords": {
          "x": 55,
          "y": 40
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c4",
        "title": "Station Master's Holding Cupboard",
        "category": "Secure Storage",
        "locationFound": "Barog Station Master Office",
        "icon": "CheckCircle2",
        "shortDesc": "The brown parcel with red ribbon sitting securely on the office shelf.",
        "detailedAnalysis": "The package is in perfect condition, dry, and ready to be loaded onto the next passenger train to Shimla.",
        "significance": "Proves the package was found safe and sound.",
        "objectName": "Holding Cupboard",
        "sceneCoords": {
          "x": 78,
          "y": 35
        },
        "objectIcon": "BookOpen"
      },
      {
        "id": "c5",
        "title": "Next Train Dispatch Slip",
        "category": "Timetable Note",
        "locationFound": "Station Master Desk",
        "icon": "BookOpen",
        "shortDesc": "A departure slip scheduling the parcel on the 1:00 PM Express to Shimla.",
        "detailedAnalysis": "The station master arranged for the parcel to reach its destination in Shimla this very afternoon.",
        "significance": "Ensures the gift reaches the grandson on time.",
        "objectName": "Station Master's Desk",
        "sceneCoords": {
          "x": 68,
          "y": 66
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c6",
        "title": "Station Wall Clock & Timetable",
        "category": "Transit Schedule",
        "locationFound": "Platform 1 Brick Wall",
        "icon": "Clock",
        "objectName": "Platform Clock & Timetable",
        "sceneCoords": {
          "x": 18,
          "y": 32
        },
        "objectIcon": "Clock",
        "shortDesc": "Timetable showing Shimla Mountain Express stops at Barog at 2:00 PM.",
        "detailedAnalysis": "Confirms the connecting train will pick up the parcel in time.",
        "significance": "Ensures the parcel will reach the destination without delay."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1: The label mentions a handcrafted wooden clock inside the box."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 2 & 3: The parcel was unloaded at Barog Station during luggage sorting."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 4: The package is safely resting on the shelf in the Barog Station Master's office."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "What was inside the misplaced gift package?",
        "options": [
          "A handcrafted wooden clock.",
          "A sack of winter potatoes.",
          "A box of glass marbles."
        ],
        "correctIndex": 0,
        "explanation": "Clue 1 shows the label clearly identifying the handcrafted wooden clock gift.",
        "hint": "The shipping tag in Clue 1 describes the wooden gift."
      },
      {
        "id": "q2",
        "prompt": "Why was the package unloaded at Barog Station instead of Shimla?",
        "options": [
          "It was sorted onto the platform cart during the morning tea break.",
          "The train ran out of coal and could not move.",
          "The passenger decided to walk to Shimla instead."
        ],
        "correctIndex": 0,
        "explanation": "Clues 2 and 3 show the porter unloaded it onto the Barog luggage cart during the scheduled halt.",
        "hint": "Look at the luggage sorting note in Clue 3."
      },
      {
        "id": "q3",
        "prompt": "Where was the package safely found?",
        "options": [
          "In the Barog Station Master's office on the storage shelf.",
          "Lost in the dark railway tunnel.",
          "Inside the train engine boiler."
        ],
        "correctIndex": 0,
        "explanation": "Clue 4 confirms the parcel was kept safe and dry inside the Barog Station Master's office.",
        "hint": "Clue 4 reveals the parcel sitting on the office cupboard shelf."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Gift Parcel is Found!",
      "summary": "Excellent railway sleuthing! You followed the toy train route to Barog Station and discovered that porter Ramu kept the fragile wooden clock safe inside the station office. The parcel was loaded onto the afternoon train and delivered happily to Shimla!",
      "badgeEarned": "Travel Sleuth Badge"
    }
  },
  "case-07": {
    "caseId": "case-07",
    "caseNumber": "CASE #07",
    "domain": "Arts",
    "title": "The Artist's Clue",
    "subtitle": "Match two beautiful landscape paintings with their correct wall labels",
    "sceneName": "Kala Ghoda Art Gallery, Mumbai",
    "introSummary": "At the Kala Ghoda Art Gallery, two morning sunrise paintings were hung under the wrong wall labels after morning dusting. Use the painted artists' signatures to match each canvas to its correct title card before visitors arrive.",
    "objectives": [
      "Examine Painting A showing ocean waves and its signature.",
      "Examine Painting B showing green mountains and its signature.",
      "Match the paintings to their corresponding gallery wall labels."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Painting A - Ocean Waves",
        "category": "Canvas Painting",
        "locationFound": "Central Gallery Wall, Left Hook",
        "icon": "Search",
        "shortDesc": "A painting of golden sunlight over ocean waves with a blue signature: 'Mehta'.",
        "detailedAnalysis": "The painting depicts sea waves and is signed clearly in the bottom right corner by famous seascape artist Mehta.",
        "significance": "Proves that Painting A was painted by Artist Mehta.",
        "objectName": "Ocean Waves Painting",
        "sceneCoords": {
          "x": 28,
          "y": 36
        },
        "objectIcon": "Search"
      },
      {
        "id": "c2",
        "title": "Painting B - Green Mountains",
        "category": "Canvas Painting",
        "locationFound": "Central Gallery Wall, Right Hook",
        "icon": "CheckCircle2",
        "shortDesc": "A painting of misty green hills with a red signature: 'Arora'.",
        "detailedAnalysis": "The painting depicts mountain hills and is signed in red paint by landscape painter Arora.",
        "significance": "Proves that Painting B was painted by Artist Arora.",
        "objectName": "Green Mountains Painting",
        "sceneCoords": {
          "x": 64,
          "y": 36
        },
        "objectIcon": "Search"
      },
      {
        "id": "c3",
        "title": "Wall Label #1 - Seashore Sunrise",
        "category": "Gallery Label Card",
        "locationFound": "Mounted on Wall under Painting B",
        "icon": "FileText",
        "shortDesc": "A label titled 'Seashore Sunrise by Artist Mehta'.",
        "detailedAnalysis": "This label describes the ocean painting, but currently has Painting B (mountains) hanging above it.",
        "significance": "Shows that Painting A belongs above this label.",
        "objectName": "Brass Wall Plaque #1",
        "sceneCoords": {
          "x": 64,
          "y": 55
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c4",
        "title": "Wall Label #2 - Mountain Dawn",
        "category": "Gallery Label Card",
        "locationFound": "Mounted on Wall under Painting A",
        "icon": "BookOpen",
        "shortDesc": "A label titled 'Mountain Dawn by Artist Arora'.",
        "detailedAnalysis": "This label describes the mountain painting, but currently has Painting A (ocean) hanging above it.",
        "significance": "Shows that Painting B belongs above this label.",
        "objectName": "Brass Wall Plaque #2",
        "sceneCoords": {
          "x": 28,
          "y": 55
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c5",
        "title": "Feather Duster Cleaning Note",
        "category": "Cleaning Memo",
        "locationFound": "Assistant's Desk",
        "icon": "MapPin",
        "shortDesc": "A note: 'Took down both paintings to dust the hooks this morning'.",
        "detailedAnalysis": "Neha's note explains she took down both paintings at the same time to dust the wall, accidentally swapping their hooks when hanging them back up.",
        "significance": "Confirms the paintings were simply swapped on the two hooks.",
        "objectName": "Assistant's Duster Note",
        "sceneCoords": {
          "x": 82,
          "y": 64
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c6",
        "title": "Gallery Exhibition Catalog",
        "category": "Printed Catalog",
        "locationFound": "Center Display Pedestal",
        "icon": "BookOpen",
        "objectName": "Exhibition Catalog Pedestal",
        "sceneCoords": {
          "x": 46,
          "y": 72
        },
        "objectIcon": "BookOpen",
        "shortDesc": "Catalog photograph showing the two paintings in their original correct positions.",
        "detailedAnalysis": "The photo proves the labels were swapped during the morning dusting.",
        "significance": "Shows exactly how to swap the plaques back to their correct frames."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1: Painting A shows ocean waves and has Mehta's signature in blue."
      },
      {
        "level": 2,
        "questionIndex": 2,
        "title": "Hint for Question 2",
        "text": "Check Clue 5: The assistant took down both paintings to dust and swapped the hooks by mistake."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 3 & 4: Swapping the two paintings back to their matching labels solves the mystery."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "Who painted the ocean sunrise painting with the blue signature?",
        "options": [
          "Artist Mehta.",
          "Artist Arora.",
          "Artist Verma."
        ],
        "correctIndex": 0,
        "explanation": "Clue 1 confirms Painting A depicts ocean waves and is signed by Artist Mehta.",
        "hint": "The signature in Clue 1 on the ocean canvas is Mehta."
      },
      {
        "id": "q2",
        "prompt": "What caused the mix-up with the two paintings?",
        "options": [
          "They were hung onto each other's hooks after morning dusting.",
          "A thief stole the paintings and left copies.",
          "The paint melted in the hot sun."
        ],
        "correctIndex": 0,
        "explanation": "Clue 5 explains that assistant Neha accidentally swapped the hooks when rehanging the frames after dusting.",
        "hint": "Read the feather duster note in Clue 5."
      },
      {
        "id": "q3",
        "prompt": "How can the gallery assistant fix the exhibition easily?",
        "options": [
          "Swap the two paintings back so they match their signed title cards.",
          "Paint over the signatures with white paint.",
          "Close down the gallery forever."
        ],
        "correctIndex": 0,
        "explanation": "Simply swapping the two canvases back puts Mehta's ocean sunrise and Arora's mountain dawn over their proper labels.",
        "hint": "Swapping the frames back matches each painting to its label."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Masterpieces are Matched!",
      "summary": "Sharp artistic eye! You noticed that Painting A was signed by Mehta and Painting B was signed by Arora. By swapping the canvases back to their matching labels, the exhibition opened on time to the applause of all the art lovers!",
      "badgeEarned": "Art Sleuth Badge"
    }
  },
  "case-08": {
    "caseId": "case-08",
    "caseNumber": "CASE #08",
    "domain": "Sports",
    "title": "The Final Score",
    "subtitle": "Investigate an accidental scoreboard error during a school cricket match",
    "sceneName": "City Cricket Stadium, Mumbai",
    "introSummary": "During a thrilling school cricket championship, the giant electric scoreboard jumped from 145 to 155 runs during the tea break. The umpire's official paper scorebook still says 145. Inspect the scorekeeper's console to find out why the board showed 10 extra runs.",
    "objectives": [
      "Check the umpire's official handwritten scoresheet.",
      "Inspect the scoreboard remote control console.",
      "Find the test button that caused the score to jump by 10 runs."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Official Handwritten Scoresheet",
        "category": "Paper Scorebook",
        "locationFound": "Umpire's Table, Pavilion",
        "icon": "Search",
        "shortDesc": "The official paper scorebook showing the verified true score: 145 runs.",
        "detailedAnalysis": "The paper scorebook is signed by both field umpires, confirming 145 runs were scored by the batting team.",
        "significance": "Establishes that the true match score is 145 runs.",
        "objectName": "Handwritten Scoresheet",
        "sceneCoords": {
          "x": 30,
          "y": 60
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c2",
        "title": "Electric Scoreboard Remote",
        "category": "Electronic Console",
        "locationFound": "Scorekeeper Amit's Desk",
        "icon": "CheckCircle2",
        "shortDesc": "A handheld console with buttons for runs, wickets, and a '+10 Bulb Test Mode' switch.",
        "detailedAnalysis": "The console has a dedicated '+10 Bulb Test' button used to check that all digit bulbs light up properly.",
        "significance": "Identifies the button that added 10 runs to the display.",
        "objectName": "Scoreboard Console",
        "sceneCoords": {
          "x": 65,
          "y": 52
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c3",
        "title": "Scorekeeper Amit's Note",
        "category": "Notepad Memo",
        "locationFound": "Beside the Remote Console",
        "icon": "FileText",
        "shortDesc": "Amit's note: 'Tested lights during tea break with +10 button; need to reset before play resumes!'.",
        "detailedAnalysis": "Amit wrote this note when the tea break started, but got distracted by a phone call and forgot to press the reset button.",
        "significance": "Explains exactly why the screen read 155 instead of 145.",
        "objectName": "Amit's Shift Memo",
        "sceneCoords": {
          "x": 78,
          "y": 40
        },
        "objectIcon": "Search"
      },
      {
        "id": "c4",
        "title": "Spectator Photo of Tea Break",
        "category": "Photographic Record",
        "locationFound": "Fan Camera Screen",
        "icon": "BookOpen",
        "shortDesc": "A clear photo showing the board reading 145 right when the players walked off for tea.",
        "detailedAnalysis": "The photo confirms no runs were scored during the break; the score changed only when the test mode was activated.",
        "significance": "Confirms the jump happened during the break with no game action.",
        "objectName": "Camera Tripod View",
        "sceneCoords": {
          "x": 45,
          "y": 72
        },
        "objectIcon": "Sparkles"
      },
      {
        "id": "c5",
        "title": "Quick Reset Instruction",
        "category": "Manual Card",
        "locationFound": "Under the Remote Console",
        "icon": "MapPin",
        "shortDesc": "Card instructions: 'Press Minus (-) button once to cancel the 10-run bulb test'.",
        "detailedAnalysis": "Shows that pressing the minus button on the remote restores the board instantly to 145 runs.",
        "significance": "Provides the simple solution to fix the scoreboard.",
        "objectName": "Reset Switch Box",
        "sceneCoords": {
          "x": 55,
          "y": 34
        },
        "objectIcon": "BookOpen"
      },
      {
        "id": "c6",
        "title": "Umpire's Match Counter",
        "category": "Match Record",
        "locationFound": "Pavilion Umpire Table",
        "icon": "Award",
        "objectName": "Pavilion Umpire Table",
        "sceneCoords": {
          "x": 18,
          "y": 48
        },
        "objectIcon": "Award",
        "shortDesc": "The chief umpire's ball-and-run clicker matches the 184 runs written in the ledger.",
        "detailedAnalysis": "The match official's personal clicker confirms 184 is the true final score.",
        "significance": "Validates the ledger beyond any doubt."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1: The umpire's official paper scoresheet clearly records 145 runs."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 2 & 3: The +10 Bulb Test button was pressed during the tea break."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 5: Pressing the minus button on the remote resets the board back to 145."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "What was the true cricket score recorded in the umpire's official scorebook?",
        "options": [
          "145 runs.",
          "200 runs.",
          "90 runs."
        ],
        "correctIndex": 0,
        "explanation": "Clue 1 shows the official scorebook signed by the umpires records 145 runs.",
        "hint": "The paper scorebook in Clue 1 clearly states 145 runs."
      },
      {
        "id": "q2",
        "prompt": "Why did the electronic scoreboard display 155 runs instead of 145?",
        "options": [
          "The scorekeeper pressed the '+10 Bulb Test Mode' button during tea break.",
          "The umpire awarded ten penalty runs to the batting team.",
          "A lightning bolt struck the scoreboard."
        ],
        "correctIndex": 0,
        "explanation": "Clues 2 and 3 show scorekeeper Amit activated the +10 Bulb Test button and forgot to clear it.",
        "hint": "Read scorekeeper Amit's note in Clue 3."
      },
      {
        "id": "q3",
        "prompt": "How should the scorekeeper correct the scoreboard display?",
        "options": [
          "Press the minus button to reset the 10 test runs back to 145.",
          "Cancel the cricket championship match.",
          "Award trophies to both teams immediately."
        ],
        "correctIndex": 0,
        "explanation": "Clue 5 explains that pressing the minus button cancels the test mode and restores 145 runs.",
        "hint": "Look at the manual card in Clue 5 explaining the quick reset."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Scoreboard is Corrected!",
      "summary": "Fantastic sports deduction! You compared the umpire's official scoresheet with the electronic console and deduced that the '+10 Bulb Test' button was pressed during tea. With one press of the minus button, the score was restored to 145, and the match resumed fairly!",
      "badgeEarned": "Sports Sleuth Badge"
    }
  },
  "case-09": {
    "caseId": "case-09",
    "caseNumber": "CASE #09",
    "domain": "Indian Culture",
    "title": "The Festival Mystery",
    "subtitle": "Find the traditional bronze peacock lamps before the festival evening",
    "sceneName": "Heritage Pavilion Courtyard, Madurai",
    "introSummary": "In the festive courtyard of the temple pavilion, families were gathering with flower garlands for the evening sunset prayers. But the two tall bronze peacock lamps were missing from their stage pedestals! A pleasant trail of yellow flower petals leads toward the store room. Follow the trail to find the lamps.",
    "objectives": [
      "Check the clean stone pedestals on the festival stage.",
      "Follow the trail of yellow flower petals across the courtyard.",
      "Find the two polished peacock lamps in the temple store room."
    ],
    "clues": [
      {
        "id": "c1",
        "title": "Clean Stone Pedestals",
        "category": "Stage Platform",
        "locationFound": "Main Festival Stage",
        "icon": "Search",
        "shortDesc": "The carved pedestals are swept and decorated with flower garlands, waiting for the lamps.",
        "detailedAnalysis": "The pedestals are swept clean and ready, showing that the lamps were moved carefully rather than disturbed.",
        "significance": "Shows the lamps were removed deliberately for preparation.",
        "objectName": "Main Stage Stone Pedestals",
        "sceneCoords": {
          "x": 30,
          "y": 38
        },
        "objectIcon": "Search"
      },
      {
        "id": "c2",
        "title": "Yellow Flower Petal Trail",
        "category": "Courtyard Trail",
        "locationFound": "Across the Courtyard Flagstones",
        "icon": "MapPin",
        "shortDesc": "A line of bright yellow marigold petals leading straight into the Temple Store Room.",
        "detailedAnalysis": "The flower petals fell from a garland carried by volunteer Suresh as he carried the lamps to be cleaned.",
        "significance": "Guides us straight into the Temple Store Room.",
        "objectName": "Courtyard Rangoli Trail",
        "sceneCoords": {
          "x": 50,
          "y": 68
        },
        "objectIcon": "Sparkles"
      },
      {
        "id": "c3",
        "title": "Volunteer Suresh's Polishing Note",
        "category": "Paper Memo",
        "locationFound": "Store Room Door",
        "icon": "FileText",
        "shortDesc": "A note: 'Shining the bronze peacock lamps with brass polish so they glow bright tonight!'.",
        "detailedAnalysis": "Suresh's note confirms he took the lamps to polish them so they would look beautiful for the sunset prayer.",
        "significance": "Explains why the lamps were moved to the store room.",
        "objectName": "Store Room Wooden Door",
        "sceneCoords": {
          "x": 75,
          "y": 35
        },
        "objectIcon": "FileText"
      },
      {
        "id": "c4",
        "title": "Polished Peacock Lamps",
        "category": "Sacred Artifacts",
        "locationFound": "Store Room Workbench",
        "icon": "CheckCircle2",
        "shortDesc": "The two tall traditional bronze peacock lamps shining brightly like gold on the table.",
        "detailedAnalysis": "Both lamps are polished clean, filled with fresh oil and cotton wicks, ready to be carried back to the stage.",
        "significance": "Confirms the lamps are completely safe, shining, and ready.",
        "objectName": "Brass Peacock Lamp Set",
        "sceneCoords": {
          "x": 78,
          "y": 62
        },
        "objectIcon": "CheckCircle2"
      },
      {
        "id": "c5",
        "title": "Sunset Prayer Oil Pitcher",
        "category": "Ceremony Item",
        "locationFound": "Beside the Lamps",
        "icon": "BookOpen",
        "shortDesc": "A polished brass pitcher of fragrant sesame oil ready for lighting the lamps at dusk.",
        "detailedAnalysis": "Everything is prepared for the evening festival ceremony.",
        "significance": "Proves the festival celebration can begin without delay.",
        "objectName": "Puja Brass Pitcher",
        "sceneCoords": {
          "x": 60,
          "y": 50
        },
        "objectIcon": "Bookmark"
      },
      {
        "id": "c6",
        "title": "Antique Carved Haveli Trunk",
        "category": "Temple Asset",
        "locationFound": "Veranda Archway Bench",
        "icon": "Bookmark",
        "objectName": "Antique Carved Trunk",
        "sceneCoords": {
          "x": 18,
          "y": 62
        },
        "objectIcon": "Bookmark",
        "shortDesc": "A carved chest containing fresh wicks and camphor ready for the peacock lamps.",
        "detailedAnalysis": "The trunk confirms all festival supplies are ready for the sunset prayer.",
        "significance": "Shows the festival decorations will be completely ready on time."
      }
    ],
    "hints": [
      {
        "level": 1,
        "questionIndex": 0,
        "title": "Hint for Question 1",
        "text": "Check Clue 1 & 4: The missing items are the two traditional bronze peacock lamps."
      },
      {
        "level": 2,
        "questionIndex": 1,
        "title": "Hint for Question 2",
        "text": "Check Clue 3: Volunteer Suresh moved them to polish them to a golden shine for tonight's festival."
      },
      {
        "level": 3,
        "questionIndex": 2,
        "title": "Hint for Question 3",
        "text": "Check Clue 2 & 4: Follow the yellow petal trail to the Temple Store Room workbench."
      }
    ],
    "questions": [
      {
        "id": "q1",
        "prompt": "What items were missing from the festival stage pedestals?",
        "options": [
          "The traditional bronze peacock lamps.",
          "The giant festival drums.",
          "The sweet coconut laddus."
        ],
        "correctIndex": 0,
        "explanation": "Clues 1 and 4 confirm the two tall bronze peacock lamps were the items being prepared.",
        "hint": "The sacred bronze lamps are described in Clue 4."
      },
      {
        "id": "q2",
        "prompt": "Why were the lamps moved from their stage pedestals?",
        "options": [
          "To be polished with brass cleaner so they glow brightly tonight.",
          "They were donated to an art museum in another city.",
          "They were thrown out because they were old."
        ],
        "correctIndex": 0,
        "explanation": "Suresh's note in Clue 3 explains he took the lamps to polish them to a golden shine for the sunset festival.",
        "hint": "Read volunteer Suresh's note on the door in Clue 3."
      },
      {
        "id": "q3",
        "prompt": "Where did the trail of flower petals lead to find the polished lamps?",
        "options": [
          "Into the Temple Store Room on the workbench.",
          "Into the deep temple pond.",
          "Up onto the temple roof."
        ],
        "correctIndex": 0,
        "explanation": "Clues 2 and 4 show the petal trail led straight to the store room workbench where the polished lamps were shining.",
        "hint": "Follow the yellow petal trail to the store room in Clue 2."
      }
    ],
    "solution": {
      "verdictTitle": "Case Closed: The Festival Lamps are Shining!",
      "summary": "Heartwarming detective work! You followed the trail of marigold petals directly to the Temple Store Room. Volunteer Suresh had polished both bronze peacock lamps to a brilliant golden shine. The lamps were returned to the stage, and the sunset celebration began with joy and light!",
      "badgeEarned": "Culture Sleuth Badge"
    }
  }
};
