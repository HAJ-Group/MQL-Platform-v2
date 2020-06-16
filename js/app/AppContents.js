/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------LOADING HEADER CONTENT-------------------------------------------------*/
function getHeaderContent() {
    /* HEADER --------------------------------------------------------------------------------------------------------*/
    let headerElement = buildElement('header',[
        buildIMG('', 'title', id('title-image')),
        buildDIV([
            buildDIV([
                buildIMG('resources/pictures/App/logoMQL.png', 'lm', id('mini-logo', [
                    {name:'onclick', value:'route(\'../Home\')'},
                    {name:'width', value:'150'},
                    {name:'height', value:'90'},
                ]))
            ], cls('move-left')),
            buildDIV([
                buildIMG('resources/pictures/App/Header/menu-phone.png', 'mp', id('menu-button', [
                    {name:'onclick', value:'showMenu()'},
                    {name:'width', value:'60'},
                    {name:'height', value:'60'},
                ]))
            ], cls('move-right'))
        ], wrapCI('phone-header', 'phone-header'))
    ], cls('div-center'));
    let navElement = buildDIV(null, cls('topnav'));
    // DYNAMIC NAVS
    for(let nav of navs) {
        navElement.appendChild(buildLINK('#' + nav.name, nav.content, cls('left', [
            {name:'onclick', value:'route(\'' + nav.name + '\')'},
            {name:'onmouseover', value:'changePicture(this.name)'},
            {name:'onmouseleave', value:'changePicture(\'' + current_component + '\')'},
            {name:'name', value:nav.name},
        ])));
    }
    // ABOUT NAV
    navElement.appendChild(buildLINK('#footer', [
        buildIMG('resources/pictures/App/Header/about.png', 'about', cls('def-img'))
    ], cls('right')));
    headerElement.appendChild(navElement);
    return headerElement;
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------LOADING FOOTER CONTENT-------------------------------------------------*/
function getFooterContent() {
    let footerElement = buildElement('footer', [
        buildDIV([
            buildSPAN('S\'inscrire à notre NewsLetter', wrap([
                {name:'style', value:'font-size: 17px;color: white;'},
            ]))
        ], wrapCI('text-news-letter', 'newsBlocks', [
            {name:'onclick', value:'$(\'#news-modal-id\').style.display = \'block\''}
        ])),
        buildHR(),
        buildDIV([
            buildIMG('resources/pictures/App/icons/partners.png', 'partners', cls('right-space', [
                {name:'width', value:'80'},
                {name:'height', value:'46'},
            ])),
            buildSPAN('Partenaires')
        ], cls('text-partenaire')),
        buildHR()
    ]);
    let partnersDiv = buildDIV(null, cls('partenaire'));
    for(let partner of footerData.partners) {
        partnersDiv.appendChild(buildSPAN([
            buildLINK('', [
                buildIMG(partner.image, '', wrapIC('partner-' + partner.id, 'img-partenaire', [
                    {name:'onclick', value:'route(\'../Partner\',\'' + partner.id + '\')'},
                ]))
            ])
        ]));
    }
    footerElement.appendChild(partnersDiv);
    footerElement.appendChild(buildDIV(null, cls('background-space')));
    let footerDiv = buildDIV(null, cls('flex-container'));
    for(let foot of footerData.foots) {
        let container = buildDIV(buildElement('h5', foot.title));
        let list = buildElement('ul', null, cls('remove-space'));
        for(let c of foot.content) {
            if(c.type === 'link') {
                list.appendChild(buildElement('li', [
                    buildLINK(c.link_address, c.link_name, cls('links'))
                ]));
            }
            if(c.type === 'list') {
                list.appendChild(buildElement('li', [
                    buildElement('strong', c.list_title),
                    c.list_content
                ], id('direct-contact-element')));
            }
            if(c.type === 'direct-contact'){
                list.appendChild(buildElement('li', [
                    buildElement('button', 'Contactez-nous directement !', cls('button-contact', [
                        {name:'onclick', value:'$(\'#form-contact-id\').style.display=\'block\''},
                        {name:'style', value:'width:auto;'},
                    ]))
                ]));
            }
            if(c.type === 'geo') {
                list.appendChild(buildDIV([
                    buildDIV([
                        buildElement('iframe', null, cls('map-size', [
                            {name:'src', value:c.source},
                            {name:'frameborder', value:'0'},
                            {name:'style', value:'border:0;'},
                            {name:'allowfullscreen', value:'true'},
                            {name:'aria-hidden', value:'false'},
                            {name:'tabindex', value:'0'},
                        ]))
                    ], cls('over-flow'))
                ], cls('map')));
            }
        }
        container.appendChild(list);
        footerDiv.appendChild(container);
    }
    footerElement.appendChild(footerDiv);
    // Copy-right
    footerElement.appendChild(buildDIV([
        buildSPAN([
            'Master Qualité du Logiciel,',
            buildLINK('#', 'Faculté des sciences'),
        ]),
        buildSPAN('&copy; 2020 All rights reserved'),
    ], cls('copy-right')));
    // Elements for form-contact
    footerElement.appendChild(buildDIV(null, id('form-contact')));
    //  // Elements for newsLetter
    footerElement.appendChild(buildLINK('#', null, wrapCI('button-news', 'news-button')));
    footerElement.appendChild(buildDIV(null, id('news-cont')));
    return footerElement;
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------SEARCH BAR CONTENT---------------------------------------------------*/
function getSearchBarContent() {
    return buildDIV([
        buildIMG('resources/pictures/App/icons/search.png', 'search Logo', cls('search-logo')),
        buildElement('input', null, wrapIC('key', 'search-input', [
            {name:'onkeyup', value:'view.filterKey()'},
            {name:'placeholder', value:'Search...'},
            {name:'type', value:'text'},
        ])),
        buildSPAN(null, cls('error-message'))
    ], cls('search-block'));
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------CONTACT FORM CONTENT---------------------------------------------------*/
function getContactFormContent() {
    return buildDIV([
        buildSPAN('&times;', cls('close-modal-contact', [
            {name:'onclick', value:'$(\'#form-contact-id\').style.display=\'none\''},
            {name:'title', value:'Close Modal'},
        ])),
        buildElement('form', [
            buildDIV([
                buildElement('h3', 'Contactez-nous directement', wrap([{name:'style', value:'text-align: center'}])),
                buildHR(),
                buildElement('label', buildElement('b', 'Prénom', wrap([{name:'for', value:'first-name'}]))),
                buildElement('input', null, wrapICN('first-name', 'zone-text-contact-news', 'first-name', [
                    {name:'placeholder', value:'Prénom...'},
                    {name:'type', value:'text'},
                ])),
                buildElement('label', buildElement('b', 'Nom', wrap([{name:'for', value:'last-name'}]))),
                buildElement('input', null, wrapICN('last-name', 'zone-text-contact-news', 'last-name', [
                    {name:'placeholder', value:'Nom...'},
                    {name:'type', value:'text'},
                ])),
                buildElement('label', buildElement('b', 'Email', wrap([{name:'for', value:'email'}]))),
                buildElement('input', null, wrapICN('email', 'zone-text-contact-news', 'email', [
                    {name:'placeholder', value:'Email...'},
                    {name:'type', value:'email'},
                ])),
                buildElement('label', buildElement('b', 'Sujet', wrap([{name:'for', value:'subject'}]))),
                buildElement('textarea', null, wrapICN('subject', 'zone-text-contact-news', 'subject', [
                    {name:'placeholder', value:'Ecrire ici...'},
                    {name:'type', value:'email'},
                    {name:'style', value:'height:200px'},
                ])),
                buildDIV([
                    buildElement('button', 'Annuler', cls(['button-contact-2', 'cancel-button'], [
                        [{name:'onclick', value:'$(\'#form-contact-id\').style.display=\'none\''}]
                    ])),
                    buildElement('button', 'Envoyer', cls(['button-contact-2', 'submit-button'])),
                ], cls('form-footer')),
            ], cls('contact-container'))
        ], cls('modal-contact-content')),
    ], wrapIC('form-contact-id', 'modal-style'));
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------NEWS LETTER CONTENT---------------------------------------------------*/
function getNewsLetterContent() {
    return buildDIV([
        buildElement('form', [
            buildSPAN('&times;', cls('close-part', [
                {name:'onclick', value:'$(\'#news-modal-id\').style.display = \'none\''}
            ])),
            buildDIV([
                buildSPAN('NewsLetter')
            ], cls('modal-header')),
            buildDIV([
                buildElement('p', 'Inscrivez-vous pour recevoir les dernières actualités.'),
                buildElement('label', 'Nom', wrap([
                    {name:'for', value:'full-name'},
                    {name:'style', value:'font-size: 18px;'},
                ])),
                buildElement('input', null, wrapICN('full-name', 'zone-text-contact-news', 'full-name', [
                    {name:'placeholder', value:'Nom...'},
                    {name:'type', value:'text'},
                ])),
                buildElement('label', 'Email', wrap([
                    {name:'for', value:'email'},
                    {name:'style', value:'font-size: 18px;'},
                ])),
                buildElement('input', null, wrapICN('email', 'zone-text-contact-news', 'email', [
                    {name:'placeholder', value:'Email...'},
                    {name:'type', value:'email'},
                ])),
            ], cls('modal-body')),
            buildElement('button', 'S\'inscrire', cls('subscribe-button')),
        ], cls('news-modal-content'))
    ], wrapIC('news-modal-id', 'news-modal'));
}

function getContainerContent() {
    return buildDIV([
        buildDIV(
            buildDIV('Navigation', cls(['menuitem', 'wrap-blue']))
            , wrapIC('navigation', 'left-menu')),
        buildDIV(null, wrapIC('main', 'sub-content'))
    ], cls('container'));
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------LOADING COMPONENTS CONTENT-------------------------------------------------*/
function getHomeContent() {
    return buildSPAN('Home Works');
}
/*--------------------------------------------------------------------------------------------------------------------*/
function getNewsContent() {
    /*
    * <div id="autoBox"></div>
            <div id="search"></div>
			<div class="container">
				<div id="navigation" class="left-menu">
					<div class="menuitem wrap-blue">Navigation</div>
				</div>
				<div id="main" class="sub-content"></div>
				<!-- The Modal -->
				<div id="myModal" class="modal">
					<span onclick="closeIMG()" class="close">&times;</span>
					<img class="modal-content" id="modal_img" alt="" src="">
					<div id="caption"></div>
				</div>
				<!-- FORM MODAL -->
				<div id="form" class="modal">
					<span onclick="closeFORM()" class="close">&times;</span>
					<div class="form-content" id="formContent">
						<img src="../../resources/pictures/News-logo.png" alt="">
						<p class="form-title">NEWS COMPONENT</p>
						<input id="newsTitle" type="text" class="form-text" placeholder="News Title...">
						<textarea id="newsDescription" class="form-text" placeholder="News Description" rows="5"></textarea>
						<p id="newsSubmit" onclick="view.submitData()" class="form-submit">Valider</p>
					</div>
				</div>
				<div id="switcher" class="page_numbers"></div>
			</div>
    * */
    return buildDIV([
        buildDIV(null, id('autoBox')),
        buildDIV(null, id('search')),
        getContainerContent(),
        buildDIV(null, wrapIC('switcher', 'page_numbers'))
    ]);
}
/*--------------------------------------------------------------------------------------------------------------------*/
function getEventContent() {
    return buildSPAN('Event Works');
}
/*--------------------------------------------------------------------------------------------------------------------*/
function getActivityContent() {
    return buildSPAN('Activity Works');
}
/*--------------------------------------------------------------------------------------------------------------------*/
function getPartnerContent() {
    return buildSPAN('Partner Works');
}
/*--------------------------------------------------------------------------------------------------------------------*/
function getLaureateContent() {
    return buildSPAN('Laureate Works');
}
/*--------------------------------------------------------------------------------------------------------------------*/
function getAreaContent() {
    return buildSPAN('Area Works');
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/
