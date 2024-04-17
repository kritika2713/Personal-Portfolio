import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock11 from "../img/mock11.png"
import mock12 from "../img/mock12.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Kritika",
    lastName: "Sonkar",
    initials: "KS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack WebDeveloper",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by Tea'
        },
        {
            emoji: '🌍',
            text: 'based in Jaunpur, Uttar Pradesh, India'
        },
        {
            emoji: "👨‍🎓",
            text: "Pursuing B.Tech in Biotechnology"
        },
        {
            emoji: "📧",
            text: "kritikasonkar2003@gmail.com"
        }
        
        
    ],
    socials: [
        
        
        {
            link: "https://www.instagram.com/__kritika_sonkar_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },

        {
            link: "https://github.com/kritika2713",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kritika-sonkar/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Kritika Sonkar.I am Btech Biotechnology student with a passion for exploring the intersection of science and technology. While my academic focus lies in biotechnology, I've also cultivated a keen interest in web development.Through projects and self-study ,I've gained proficiency in HTML, CSS, and JavaScript and I'm excited to merge my analytical skills from biotechnology with the creativity of web development to create innovative solutions. ",
    skills:
        {
            proficientWith: [ 'Html', 'Css', 'Bootstrap', 'Javascript', 'React', 'C++', 'Python','Tailwind CSS','SQL'],
            exposedTo: ['Git', 'Github','MySQL','Microsoft Office']
        } 
        
    ,
    hobbies: [
        {
            label: 'Listening Songs',
            emoji: '🎶'
        },
       
        {
            label: 'Movies & Webseries',
            emoji: '🎥'
        },
        {
            label: 'Travelling',
            emoji: '🧳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Currency-Convertor",
            live: "https://kritika-2713-currency-convertor.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/kritika2713/Currency-Convertor.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock12
        },
        {
            title: "Amazon-Clone",
            live: "https://kritika2718-amazon-clone.netlify.app/",
            source: "https://github.com/kritika2713/Amazon-Clone.git",
            image: mock11
        },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        
    ]
}