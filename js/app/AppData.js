/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------HEADER-NAVS-------------------------------------------------------*/
let navs = [
    /*
    * name : value of name attribute related with the title picture and the component
    * content : value of the innerText of the nav
    * */
    {name: 'Home', content: buildIMG('resources/pictures/App/Header/home.png', 'home',
            wrapIC('home-logo', 'home-logo'))},
    {name: 'News', content:'Actualités'},
    {name: 'Event', content:'Evénements'},
    {name: 'Activity', content:'Activités'},
    {name: 'Partner', content:'Partenaires'},
    {name: 'Laureate', content:'Lauréats'},
    {name: 'Area', content:'Administration'},
];
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------FOOTER-------------------------------------------------------*/
let footerData = {
    partners:[
        {id:1,name:'CAP', image:'resources/pictures/App/Footer/capgemeni.png'},
        {id:3,name:'UMANIS', image:'resources/pictures/App/Footer/umanis.png'},
        {id:4,name:'ATOS', image:'resources/pictures/App/Footer/atos.png'},
        {id:2,name:'CGI', image:'resources/pictures/App/Footer/cgi.png'},
    ],
    foots:[
        {   // LEFT SIDE
            title:'Lien utiles',
            content:[
                {
                    type:'link',
                    link_name:'Université Sidi Mohamed Ben Abdellah',
                    link_address:'http://www.usmba.ac.ma/',
                },
                {
                    type:'link',
                    link_name:'Faculté des sciences DHER EL-MEHRAZ',
                    link_address:'http://www.fsdmfes.ac.ma/',
                },
            ],
        },
        {
            // CENTER SIDE
            title: 'Localisation',
            content:[
                {
                    type:'geo',
                    source:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1653.2037839986274!2d-4.9779526!3d34.0334149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b5f7be79403%3A0x64ed183ba63abde7!2sFacult%C3%A9%20des%20Sciences%20Dhar%20El%20Mehraz!5e0!3m2!1sfr!2sma!4v1589646925624!5m2!1sfr!2sma'
                }
            ],
        },
        {   // RIGHT SIDE
            title: 'Contact',
            content: [
                {
                    type:'list',
                    list_title:'Coordonnateur : ',
                    list_content:'Noureddine Chenfour'
                },
                {
                    type:'list',
                    list_title:'Adresse : ',
                    list_content:'Département d’Informatique , Faculté des sciences Dhar El Mahraz'
                },
                {
                    type:'list',
                    list_title:'BP.1796, Fès-Atlas, Maroc',
                    list_content:''
                },
                {
                    type:'list',
                    list_title:'E.mail : ',
                    list_content:'noureddine.chenfour@usmba.ac.ma'
                },
                {
                    type: 'direct-contact'
                }
            ],
        }
    ]
};
