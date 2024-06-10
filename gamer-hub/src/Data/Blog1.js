const Blog1 = [
    {   type: 'head',
        info: 'Adobe Flash Experience:'
    },
    {   type: 'text',
        info: 'My earliest and honestly, only memory, of interacting or using Adobe Flash was through online games, specifically simulation games. For context, we had a KNET Microsoft class throughout my primary and secondary education. It was basic a Microsoft course that equipped us with the skills for Word, Excel, and PowerPoint. However, the course itself did not really push the boundaries of the programs and were repetitive tasks in weekly eighty-minute periods. As the course progressed and not much changed, a few friends and I resorted to playing online games as work was completed quickly. For obvious reasons, we could not download games onto the desktops so to avoid starting games we could not finish, we played Flash endless simulation games that did not really need saving. '
    },  
    {   type: 'text',
        info: "Anyway, around grade 9 or 10, 2017 or 2018, respectively, Chrome required user permission for Flash to run. A friend of mine who finished their work first, loaded onto our normal racing game, and accepted the use of Flash. Little did we know, the school began monitoring our school accounts especially since they upgraded the desktops. Long story short, our friend got caught and their biggest takeaway from the scolding was when the computer teacher mentioned that Adobe Flash was being phased out and we would not be able to play certain games anymore anyway.  "
    },  
    {
        type: 'head',
        info: "Technical Exercises:"
    },
    {
        type: 'text',
        info: "I struggled with the third exercise (Nested Component). The rendering of components worked as expected and all the data was being displayed, however, I was unable to indent the comments. My assumption was that the comment responses needed to be store in the same array, but instead of using a Boolean to differentiate between comments and replies, and from there render the corresponding data, I created this very unstructured array and manually rendered each response. Thereafter, I added IDs to each comment and styled the indentation. "
    },
    {
        type: 'text',
        info: "I know that we were told that there are several possible, correct solutions but, I knew that this was not one of them. On Stack Overflow, a user gave a suggestion to use array IDs to store data types. For example, type: ‘comment’ or type: ‘replies and then conditionally render the comments and replies based on their data type using a normal IF statement. I realised that I am trying to learn React as if it were a new language and not a JavaScript framework. I need to try and bridge the gap between the two by using normal JavaScript functions and then researching more efficient functions and methods in React to carry out the same tasks. "
    },
    
]

export  default Blog1;
