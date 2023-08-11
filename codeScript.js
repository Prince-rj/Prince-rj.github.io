setInterval(() => {
// console.log("1");
let img=document.getElementById('');
let Mp=document.getElementById('Mp');
let MDA=document.getElementById('MDA');
let EH=document.getElementById('EH');
let chat=document.getElementById('chat');
let project=document.querySelector('.projects');
let cardweb=document.querySelector('.cardweb');

let Mpcard=`
<img  height="360px" src="MP.png" alt="" id="imgcard">
`;
let MDAcard=`
<img  height="360px" src="mda.png" alt="" id="imgcard">
`;
let EHcard=`
<img  height="360px" src="expenseHandler.png" alt="" id="imgcard">
`;
let chatcard=`
<img  height="360px" src="chat.png">
`;

let Mphtml=`
<ul>
<li id="Mp" class="codeweblist"><a class='conlink' href="https://github.com/Prince-rj/Music_Player">
    <h3>Music Player</h3>
    <div class="content">Introducing an interactive music player website, a harmonious fusion of HTML, CSS, and JavaScript that offers an immersive auditory experience for all music enthusiasts. This innovative platform provides a seamless and user-friendly interface, designed to captivate and engage users in the world of melodies.

    The HTML backbone of the website forms the foundation, creating the structure and layout for the music player. Through careful structuring of elements and utilization of semantic tags, the website ensures accessibility and ease of navigation for users of all backgrounds. CSS steps in to add a touch of visual charm, enhancing the aesthetics and creating an engaging ambiance with customizable styles and themes.
    
    The true magic, however, comes to life with JavaScript. Leveraging its power, the music player becomes interactive, enabling users to control and personalize their musical journey. JavaScript handles the logic behind play, pause, skip, and volume controls, seamlessly synchronizing with the chosen audio files. It provides real-time feedback, dynamically updating the interface and reflecting user actions.
    
    This music player website goes beyond the basics, offering additional features such as playlist creation, shuffle, repeat, and even a visualizer that pulsates to the rhythm of the tunes. JavaScript libraries like Howler.js or Web Audio API can be employed to handle audio playback and provide advanced audio manipulation capabilities.
    
    With this immersive music player website, users can indulge their senses in a harmonious symphony of technology and art. Whether it's finding solace in a favorite track or exploring new melodies, this interactive platform invites users to dive deep into the world of music, creating a truly captivating and unforgettable experience.
    </div></a>
</li>
<li id="MDA"  class="codeweblist">
    <h3>My Dance Academia</h3>
</li>
<li id='EH' class="codeweblist"><h3> Expense Handler </h3></li>
<li id="chat" class="codeweblist"><h3>chat app</h3></li>
</ul>
`;


let MDAhtml=`
<ul>
<li id="MDA" class="codeweblist"><a class='conlink' href="https://github.com/Prince-rj/DanceWebsite">
    <h3>My Dance Academia</h3>
    <div class="content">
    Introducing "My Dance Academia" (MDA), an extraordinary dance academy website that brings together the art of dance and the power of technology to create an engaging and interactive experience for all dance enthusiasts. MDA embraces modern web development techniques, leveraging Node.js for backend functionality, MongoDB for data storage, and Pug templates, HTML, CSS, and JavaScript for the frontend.

    At the heart of MDA is its captivating homepage, designed to inspire and captivate visitors. With a combination of stunning visuals, smooth animations, and carefully curated content, the website welcomes users into the world of dance with open arms.
    
    The website's backend, powered by Node.js, ensures seamless data management and processing. The use of MongoDB allows for efficient storage and retrieval of information, making it the perfect choice for the dynamic dance academy. The backend handles user interactions, manages class schedules, instructor profiles, and student registrations, ensuring a smooth and streamlined experience for all visitors.
    
    The frontend, built using Pug templates, HTML, CSS, and JavaScript, creates a visually stunning and intuitive user interface. The combination of these technologies allows for dynamic content rendering, interactive elements, and smooth transitions. Users can explore various dance programs, browse instructor profiles, and even register for classes directly on the website.
    
    Additionally, MDA offers a contact page that utilizes MongoDB to store and manage user inquiries. Visitors can reach out to the dance academy, inquire about classes, or request further information using a user-friendly contact form. The MongoDB integration ensures that all messages are securely stored, making it easy for the dance academy staff to respond promptly.
    
    "My Dance Academia" stands as a testament to the harmonious fusion of dance and technology. With its seamless integration of backend technologies like Node.js and MongoDB, along with the creative use of Pug templates, HTML, CSS, and JavaScript on the frontend, the website offers an amazing platform for people to interact, explore, and immerse themselves in the enchanting world of dance.    </div>
</a></li>
<li id="Mp"  class="codeweblist">
    <h3>Music Player</h3>
</li>
<li id='EH' class="codeweblist"><h3> Expense Handler </h3></li>
<li id="chat" class="codeweblist"><h3>chat app</h3></li>
</ul>
`;


let EHhtml=`
<ul>
<li id="EH" class="codeweblist"><a class='conlink' href="https://github.com/Prince-rj/ExpenseHandler">
    <h3>Expense Handler</h3>
    <div class="content">
    Introducing Expense Handler, an innovative web application built using React.js and NPX, designed to empower individuals in managing their expenses effectively. This powerful tool provides users with a seamless and intuitive platform to track, categorize, and analyze their spending habits, helping them gain control over their finances.

    Expense Handler leverages the capabilities of React.js, a popular JavaScript library for building user interfaces, to create a responsive and interactive application. The user-friendly interface allows individuals to easily input and track their expenses, categorize them by type (such as groceries, utilities, entertainment, etc.), and set budgets for different expense categories.
    
    The NPX command-line tool is utilized to manage project dependencies and enable quick and easy setup of the Expense Handler application. This ensures a smooth installation process, enabling users to start managing their expenses without any hassle.
    
    With Expense Handler, users can add and edit expenses, view their expenditure history, and generate insightful reports and visualizations to gain a comprehensive understanding of their spending patterns. The application also provides notifications and alerts when expenses exceed set budgets, empowering users to make informed financial decisions.
    
    The modular and component-based nature of React.js enables easy customization and scalability of the Expense Handler application. Additional features like expense filtering, search functionality, and data export can be incorporated to enhance the user experience and provide more comprehensive expense management capabilities.
    
    Expense Handler acts as a personal finance companion, providing individuals with the tools they need to take charge of their expenses. By leveraging the power of React.js and NPX, this application offers a seamless and efficient way for people to manage their finances, track their spending, and make informed financial decisions, ultimately leading to a more financially secure future.
    </div></a>
</li>
<li id="Mp"  class="codeweblist">
    <h3>Music Player</h3>
</li>
<li id='MDA' class="codeweblist"><h3>My Dance Academia</h3></li>
<li id="chat" class="codeweblist"><h3>chat app</h3></li>
</ul>
`;


let chathtml=`
<ul>
<li id="chat" class="codeweblist"><a class='conlink' href="https://github.com/Prince-rj/chat-app">
    <h3>Hi Chat</h3>
    <div class="content">
    Introducing HiChat, a dynamic chat website that utilizes Socket.IO for real-time communication and an interactive UI built with HTML, CSS, and JavaScript. HiChat provides a platform for users to engage in live conversations, fostering meaningful connections and facilitating seamless communication.

The core technology behind HiChat is Socket.IO, a JavaScript library that enables bidirectional and event-based communication between the server and the client. With Socket.IO, users can instantly send and receive messages, ensuring that conversations happen in real time. The server acts as a central hub, relaying messages between users and facilitating a smooth chat experience.

The frontend of HiChat is designed using HTML, CSS, and JavaScript, creating an engaging and user-friendly interface. The interactive UI allows users to easily send and receive messages, view conversation history, and see when other users are typing. The website can also incorporate features like emojis, file sharing, and user avatars to enhance the chat experience.

HiChat supports multiple users within a chat room, enabling simultaneous conversations and fostering a sense of community. Users can join existing chat rooms or create their own, allowing for targeted discussions or broader interactions based on shared interests or topics. Socket.IO ensures that messages from all participants are relayed in real time, creating an immersive and engaging chat environment.

The combination of Socket.IO and the frontend technologies provides a powerful and seamless chatting experience for HiChat users. Whether it's a casual conversation, collaborative brainstorming, or connecting with like-minded individuals, HiChat empowers users to communicate and build relationships through its interactive UI and real-time messaging capabilities.

HiChat stands as a testament to the power of technology in connecting people and fostering meaningful interactions. By utilizing Socket.IO for real-time communication and building an intuitive and visually appealing frontend with HTML, CSS, and JavaScript, HiChat creates an immersive chat website that enables users to connect, converse, and build relationships in a dynamic and interactive environment.
    </div></a>
</li>
<li id="Mp" class="codeweblist">
    <h3>Music Player</h3>
</li>
<li id='MDA' class="codeweblist"><h3>My Dance Academia</h3></li>
<li id="EH" class="codeweblist"><h3>Expense Handler</h3></li>
</ul>
`;




let funcMp=()=>{
    project.innerHTML=Mphtml;
    cardweb.innerHTML=Mpcard;
    console.log('mp');
}
let funcMDA=()=>{
    project.innerHTML=MDAhtml;
    cardweb.innerHTML=MDAcard;
    console.log('mda');
}
let funcEH=()=>{
    project.innerHTML=EHhtml;
    cardweb.innerHTML=EHcard;
    console.log('eh');
}
let funcChat=()=>{
    project.innerHTML=chathtml;
    cardweb.innerHTML=chatcard;
    console.log('chat');
}
Mp.addEventListener('click',funcMp);
MDA.addEventListener('click',funcMDA);
EH.addEventListener('click',funcEH);
chat.addEventListener('click',funcChat);
}, 500);
