const GameGenres = [
    {
        id:0,
        genreName: 'Adventure',
        btnTitle: 'Adventure',
        eSports: false,
        overView: "Adventure games tend to heavily focus on narrative (which can be either a formal or abstract narrative) and often feature some kind of exploration or puzzle solving.",
        genMech:'Character progression, navigation, resource and health management, exploring, character development, decision making, NPC interactions, objective based.',
        redditLink:'https://www.reddit.com/r/adventuregames/'
    },
    {
        id:1,
        genreName: 'Card',
        btnTitle: 'Card',
        eSports: true,
        overView: 'Card games have appeared in video games since the 1970s emulating tabletop card games like blackjack and poker. Deckbuilding games started to appear in the 2010s with digital adaptations such as Ascension and Star Realms and the spin-off genre roguelike deckbuilder.',
        genMech:'Hand management, drawing of cards, card collection, analysing card statistics.',
        redditLink:'https://www.reddit.com/r/digitalcards/'
    },
    {
        id:2,
        genreName: 'Fighting',
        btnTitle: 'Fighting',
        eSports: true,
        overView: 'Fighting is a broad genre which encompasses various forms of gameplay revolving around combat between a limited number of set combatants. In traditional fighting games, players are placed one-on-one in matches against a single enemy or a group of enemies one at a time. Matches consist of multiple time-sensitive rounds where the victor defeats their opponent the most number of times, often in best two-out-of-three fashion, although matches may consist of more than three rounds. ',
        genMech:'Button mashing, health and energy management, combination recall, ability-meter management.',
        redditLink:'https://www.reddit.com/r/Fighters/'
    },
    {
        id:3,
        genreName: 'First Person Shooter',
        btnTitle: 'FPS',
        eSports: true,
        overView: "First Person Shooter's are a sub-genre of action games in which gameplay is primarily based around shooting mechanics. The shooting aspect is commonly attributed to projectile-based weapons, devices and actions performed by the player's avatar.",
        genMech:'Shooting, health and resource management, movement mechanics, team coordination (some cases), level/weapon progression, rank progression, navigation, character development, objective based, decision-making.',
        redditLink:'https://www.reddit.com/r/CallOfDuty/'
    },
    {
        id:4,
        genreName: 'Platformer',
        btnTitle: 'Platformer',
        eSports: false,
        overView: 'Games that involve manoeuvring a character from platform to platform, typically via jumping, and often avoiding obstacles and pits along the way.',
        genMech:'Jumping, moving, health management, power-up collection/management, navigation and environmental awareness.',
        redditLink:'https://www.reddit.com/r/platformer/'
    },
    {
        id:5,
        genreName: 'Racing and Flying',
        btnTitle: 'Racing',
        eSports: true,
        overView: 'Competition of speed, in which competitors try to traverse some distance in the shortest amount of time. Racing encompasses a variety of activities, including driving vehicles, riding animals, running, swimming, and other forms of racing.',
        genMech:'Health and energy management, resource management, economy management, navigation and environmental awareness, ruleset awareness, occasional real-life knowledge',
        redditLink:'https://www.reddit.com/r/racinggames/'
    },
    {
        id:6,
        genreName: 'Role-Playing',
        btnTitle: 'RPG',
        eSports: false,
        overView: 'Role-playing games, or RPGs, are essentially but not exclusively defined by games which the player takes the role of a character (or a team of characters) in a certain fictional setting, what explains the applied term. In video games, the role-playing is performed meeting certain characteristics typical to the original tabletop RPGs. Basically, those characteristics consist of options regarding the character development and build, narrative and story progression, exploration, and decision-making.',
        genMech:'Health and resource management, attack and defence mechanics, navigation and environmental awareness, resource collection, world-building, problem/puzzle solving, decision making… honestly, anything can be a mechanic in a role-playing game.',
        redditLink:'https://www.reddit.com/r/rpg_gamers/'
    },
    {
        id:7,
        genreName: 'Simulation',
        btnTitle: 'Sim',
        eSports: false,
        overView: 'A broad genre of video games that emulates various activities and explores logical systems of interactions. While many simulation games attempt to capture the complexities of realistic activities in an accurate manner, some simplify the mechanics of the tasks they replicate or create fictional systems and mechanics for players to engage with.',
        genMech:'Any behaviour that the game is attempting to emulate. ',
        redditLink:'https://www.reddit.com/r/SimulationGaming/'
    },
    {
        id:8,
        genreName: 'Sports',
        btnTitle: 'Sports',
        eSports: true,
        overView: 'Sports games emulate the practice of real life competitive and recreational sports.',
        genMech:'Any sporting behaviour and/or practices that the game is attempting to emulate. ',
        redditLink:'Any sporting behaviour and/or practices that the game is attempting to emulate. '
    },
    {
        id:9,
        genreName: 'Strategy',
        btnTitle: 'Strategy',
        eSports: false,
        overView: 'Games requiring careful planning and decision-making to succeed. This can range from long-term strategic thinking essential in grand strategy games to shorter-term tactical thinking emphasized in, for example, turn-based tactics games.',
        genMech:'Resource management, decision-making, worldbuilding, teambuilding, turn-based, combat, objective based.',
        redditLink:'https://www.reddit.com/r/StrategyGames/'
    },
]

export default GameGenres;