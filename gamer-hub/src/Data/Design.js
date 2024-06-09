import ColourPalette from '../Images/colour_pallete.png'
import NavWire from '../Images/wire/navwire.png';
import Ugly1 from '../Images/wire/ugly1.png';
import Ugly2 from '../Images/wire/ugly2.png';
import Ugly3 from '../Images/wire/ugly3.png';
import HomeWire from '../Images/wire/homewire.png'
import HomeWire2 from '../Images/wire/homewire2.png'
import Explore from '../Images/wire/explorewire.png'
import Explore2 from '../Images/wire/explorewire2.png'
const DesignInfo = [
    {
        type:'head',
        info:'Design Document'
    }, 
    {
        type:'head',
        info:'Colour Palette'
    },
    {
        type:'image',
        info: ColourPalette
    },
    {
        type:'text',
        info: "The colour palette above, was the initial selection that I made for this webapp. I felt that the colours complimented each other well, and text could easily be read on top of the darker backgrounds. Another reason for this selection was to emulate the ‘late night gaming’ feel. The space around the ‘gamer’ is dark (navy background) but the text in the bright/light colours, represent the game itself. The colour palette itself, was altered throughout the production period of this webapp."
    },
    {
        type:'head',
        info: "Navigation Bar:"
    },
    {
        type:'text',
        info:'I created three wireframes for my navigation bar. For inspiration, I looked at the examples from the following website:'
    },
    {
        type:'a',
        info: "https://www.freshrelevance.com/blog/dynamic-navigation-bar-examples/"
    },
    {
        type:'head',
        info: "Navigation Bar Wireframes:"
    },
    {
        type:'image',
        info: NavWire
    },
    {
        type:'text',
        info: "Initially, I had selected the first one. The idea was to have the core requirements and concepts on one half, and the contact page on the other half to illustrate its purpose was separate to the rest of the webapp and most people would not really need to contact me, so why draw their attention to it. For context, my process for starting a website is nav bar -> backgrounds -> rest of the website. While, attempting to add the navy-blue background, the contact button seemed very isolated. I went back to the other two options. "
    },
    {
        type:'text',
        info: "Considering the content on my webapp, it is focused on console and PC gaming. There is probably mobile game adaptations or versions of some of the games displayed but, the intention is to allow console and PC gamers to explore different game genres. From my experience with interacting with websites, burger buttons are more common on mobile devices or when there are several pages of data for the user to access. For example, some banking apps have over 10 different pages in their hierarchy.  Keeping this in mind, I decided against the third option."
    },
    {
        type: 'text',
        info: "The second option suited design intention and desired user experience perfectly. With the other two options, I tried to create this abstract or unconventional idea of navigation but sticking to what works helps create a positive starting user experience. "
    },
    {
        type: 'text',
        info: "Now that I have decided on the layout of my navigation bar, I started to dislike the colour options that I selected.  "
    },
    {
        type: 'image',
        info: Ugly1
    },
    {
        type: 'image',
        info: Ugly2
    },
    {
        type: 'image',
        info: Ugly3
    },
    {
        type: 'text',
        info: "Honestly, now that I am reflecting on it, the colours do not seem as bad as I made it out to be when I initially played around with them. It felt like the text, especially the buttons, were fighting with the black to be seen. After continuously changing the colours based on the colour palette, I decided to change the black background. I really like the pink, blue and navy colours from the colour palette, so I wanted to make sure they remain the selected colours. It also took me at least 30 minutes to find a colour palette that I have not already used for something else or one that I did not hate. "
    },
    {
        type: 'text',
        info: "Instead of changing the colours again, I sat down and thought about two things: 1) will my navigation bar going to be fixed on the page and 2) is using one out of my two core colours for the navigation bar the best idea. "
    },
    {
        type: 'text',
        info: "Considering the navigation bar does not take up much space on my page, I decided that it can be fixed on the page. It will also save me the time of adding a ‘scroll to the top’ button as especially since the webapp’s content is generally horizontally displayed instead."
    },
    {
        type: 'colour'
    },
    {
        type: 'text',
        info : "I then decided to add two colours to my colour palette. White and the coral-ish colour above. White is the easier colour to contrast a dark background, and for that reason I assigned white as my text colour. The original blue is a bit difficult to see in smaller text, and for that reason I assigned the colour to headings and important notes only. The coral-ish colour is assigned to all navigation buttons and elements. This was done to create a clear sense of communication between user and website. If a coral-ish button is clicked, the page will be altered. Pink is assigned to filter buttons and borders on the homepage. "
    },
    {
        type: 'text',
        info: "For extra communication, I decided to give the current page’s navigation button, a translucent coral-ish background to indicate to the user the page they are currently on. This is something that was missing from my previous assignment. For the react coding challenges assignment, we were using useParams() and the route-id to determine the information. This made it easy to display navigation as I already used the data values. For this exam submission and the previous submission, I did not have the luxury. This is when I discovered NavLinks. NavLinks has an activeclassname property that checks if the page the user is currently on matches the assigned route from the button and sets the active class on the NavLink object. When discovering this, .map(), .filter(), and .find(), React.js became significantly easier to work with. "
    },
    {
        type: 'head',
        info: 'Homepage:'
    },
    {
        type: 'image',
        info: HomeWire
    },
    {
        type: 'image',
        info: HomeWire2
    },
    {
        type: 'text',
        info: "On my homepage, I wanted to show the most popular video games as of the last updated date. This is done to introduce the user to how the rest of the webapp works. I opted for the first option where the user views the top ten games per a platform instead of viewing all the platforms top games. From my experience with gaming, we tend to play on one platform. I think it is more of an affordability aspect. Some may choose to view the top ten games on other platforms out of curiosity, and they do have that option as well. I just felt that have a vertical layout with all the information was unnecessary. I would much rather the user view each platform individually based on their affordances. "
    },
    {
        type: 'text',
        info: "Secondly, the display of games on my homepage is almost the same as that on my explore page. The two notable, and most important differences are, the hover highlight effect, and the platform availability. "
    },
    {
        type: 'text',
        info: "In terms of the hover highlight effect, I felt that it could be used to show that interactivity was present on the panel. This was further emphasized with the arrow next to the game titles to illustrate that there is a link on the page. The purpose of the ‘most popular game section’ is more for people who are newer to games and do not know much about it. There are so many options and genres, it can be overwhelming for users. When looking at the games on the most popular list, the mechanics are beginner friendly, and the tutorials are very thorough. I felt that for new gamers, they would appreciate the beginner friendly options."
    },
    {
        type: 'text',
        info: "Also, I show the platform name and the symbol on the homepage – it is to introduce them to the platforms. On the explore page, I only show the symbols so again, this is more for introducing newer gamers. "
    },
    {
        type: 'text',
        info: "The price ranges were set there for different reasons. When I bought my first console, my father and I looked through the price ranges of games on different consoles. It was an effort considering it was a very long time ago but at the time, we would collect booklets from different shops (Look & Listen, Musica, BT Games, etc.). Now, I am able to create a central space to check prices of popular games. "
    },
    {
        type: 'head',
        info: 'Explore page:'
    },
    {
        type: 'image',
        info: Explore
    },
    {
        type: 'image',
        info: Explore2
    },
    {
        type: 'text',
        info: "This page was divided into three parts. The information portion, the popular games per genre portion, and the upcoming releases portion. In my initial idea, I wanted to add an eSports  section as well, but it was limited to 3 genres only and considering certain games were across multiple genres, a lot of the content felt too repetitive. For this reason, I removed the section from the webapp. "
    },
    {
        type: 'text',
        info: "After building the website for filter buttons, I felt that the filter buttons section was too busy and cluttered. I then used a drop-down menu for this filter selection instead. It allowed the user to clearly see the genre they selected. I used an up and down arrow to show that the button was a dropdown menu, and I used button hover styling to show which button the user was hovering over. This is necessary in this section, because unlike the navigation bar, the buttons have no spacing between them. I also made sure that the menu was in alphabetical order. For my first iteration, it was not; and even though I designed the webapp, I was getting frustrated by this. "
    },
    {
        type: 'text',
        info: "For the popular games section, I wanted to add links to the games, like I did on the homepage. I left this out simply because of the time constraints and the instructions surrounding the prohibition of AI.  The names and images took hours alone, the idea of finding and adding three URLs, just seemed daunting and monotonous. "
    },
    {
        type: 'text',
        info: "I used the symbols from the homepage to illustrate which platform the games were available on. I decided against adding platform specific filter buttons like the homepage, as certain games like Valorant are available through other platforms and were free. I did not want to limit the user as to what platforms they could use when trying to find new games especially considering it is free."
    },
    {
        type: 'text',
        info: "For the upcoming releases section, I used iframes. This was something that I experimented a bit with previously but were never successful with it. I slightly altered the wireframe. Instead of being in a row, I spilt it into two rows and two columns. The full screen function was showing as unavailable even though the property was set in the component/tag. Considering this, I decided to make it a bit bigger so that it is easier to see if the user does not want to navigate to YouTube. "
    },
    {
        type: 'text',
        info: "This page has a few bugs. Even though the iframes have specific measurements, the frames occasionally overlap or move to another row. A quick fix was left aligning the iframes instead, and it has seemed to fix the issue. "
    },
    {
        type: 'text',
        info: "It is important to note the timing played a major role when deciding the content theme of this page. At the time of writing,  there was a gaming convention a week ago, where several game trailers were released. This made content significantly easier to find and I was lucky in that regard. Massive game companies and studios like Activision and EA release their trailers independently, for obvious reasons, however, these conventions are often a central update as to upcoming games which means that the upcoming section may update significantly less that the rest of the site. "
    },
    {
        type: 'head',
        info: 'Overall Reflection:'
    },
    {
        type: 'text',
        info: "I have stuck to the standard bootstrap React.js font for this website. When trying to create previous websites with different fonts, I just found that it was readable in certain cases but more difficult to read in other cases.  "
    },
    {
        type: 'text',
        info: "There are minor bugs. For example, the explore page has a massive scrollable space. I know that it is because I am setting my table’s opacity to zero instead of active and inactive. However, I had an issue where the upcoming section did not render the correct information. I had the assumption that my state was not being updated immediately, so I added the state as a dependency to a useEffect() but that did not help either. I deleted the component and start from scratch considering it was not a lot of work. That seemed to have fixed the issue. I was happy with this and knew that the CSS was the reason for the space, but I did not want to alter the CSS in case of recurring errors. "
    },
    {
        type: 'text',
        info: "I do think that this is something that drastically needs to improve in my work. When there is JavaScript issues, I am a lot quicker to find solutions online. For CSS, I tend to rely on ChatGPT to fix CSS issues. Since I was not allowed to use AI for this assignment, I used W3Schools to test different CSS properties out to fix errors. It made me realise that I was not as thorough with CSS as I was with JavaScript at the beginning of the course. I need to go back and strengthen this aspect."
    },
    {
        type: 'text',
        info: "In terms of coding, I really do enjoy JavaScript. It is a powerful language and slowly creeping passed C# as my favourite languages to code in. To take myself to the next level, I need to start creating more finished projects. All my tools/projects right now, are one-page tools that are useful to a very small community. I would like to start making useful tools for public usage using React.js/Next.js. Nothing makes me happier than searching for a random tool like Tip Calculator or Budgeting Calculator and finding this efficient and usable website. This is also important for my personal portfolio."
    },
    {
        type: 'text',
        info: "To achieve this, I need to dive deeper into JavaScript and React and explore more built-in functionality. In doing so, I can complete basic functions quicker and focus on interactivity and user experience a lot more than I currently do."
    },
    {
        type: 'text',
        info: "I have changed the theme of my webapp completely for this submission. Initially, my entire project was based on EAFC 24. I think my overall idea was good but, there are already so many other websites that cater for the needs of EAFC players. I need to start smaller first, build up my skills and then try to achieve bigger and significantly more challenging projects. Throughout this course, I have over-scoped for assignments and made things very difficult for myself, which is another thing that I need to improve on. I need to be a lot more realistic and aware of my strengths and weaknesses. "
    },
    {
        type: 'text',
        info: "On the bright side, after taking on the previous challenge, a lot of the current functions and interactions were a lot easier to complete. For example, mapping. In the previous assignment, I had a lot of errors when attempting to map data from an array. This was a lot easier this time around. "
    },
    {
        type: 'text',
        info: "Moving forward, I would like to continue with React.js and move into React Native as well. The framework’s capabilities make development so much easier and allow me to focus on the content instead of pure JavaScript. For example, routing is significantly easier, as well as mapping and referencing items using context systems. Components also allow me to keep my code neater and creates this hierarchy in my work. For example, subheadings have a standard look across the website, but instead of carrying a single class name across each CSS file, there is a single component with a single CSS file. "
    },
    {
        type: 'text',
        info: "For this webapp, I would like to make more independent. Currently, the data is static and can only update if I add/edit data. I would like to build it in a way that it updates regularly. It is possible to get access to a Steam tracker database that is updated regularly, similarly, Xbox has an API that keeps track of prices, rankings and upcoming games."
    },
    {
        type: 'text',
        info: "The objective now is to build a few eCommerce environments and examples while implementing SQL databases into them for my personal portfolio. The coding challenge has helped me understand how it works for JSON requests but, I now want to experiment and explore it further with structured databases. "
    },
    {
        type: 'head',
        info: "END"
    }
]
    
export default DesignInfo;