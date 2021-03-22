$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['home','aboutr','features','system','quotes'],
        menu:'#menu'
    });
});

$('.home_buy').click(function (e) { 
    window.open('https://store.steampowered.com/app/619080/SOS/');
});
$('.press_info_button').click(function (e) { 
    window.open('https://twitter.com/playsosgame');
});
let list = document.querySelector('.leng');
let item = document.querySelector('.lang_list');
list.onmouseover = function () {
    item.classList.toggle('hid');
}
list.onmouseout = function () {
    item.classList.toggle('hid');
}
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.slider_next',
    },
});

let items_features = document.querySelectorAll('.info_features_text');
let title_features = document.querySelectorAll('.info_features_title');
title_features[0].addEventListener('click', function () {
    if(items_features[1].classList.length === 2){
        if(items_features[2].classList.length === 2){

        }else{
            items_features[2].classList.remove('features_text_active');
            $(items_features[2]).fadeOut();
            title_features[2].classList.remove('str');
            $(items_features[0]).fadeIn();
            items_features[0].classList.add('features_text_active');
            title_features[0].classList.add('str');
        }
    }else{
        items_features[1].classList.remove('features_text_active');
        $(items_features[1]).fadeOut();
        title_features[1].classList.remove('str');
        $(items_features[0]).fadeIn();
        items_features[0].classList.add('features_text_active');
        title_features[0].classList.add('str');
    }
});
title_features[1].addEventListener('click', function () {
    if(items_features[0].classList.length === 2){
        if(items_features[2].classList.length === 2){

        }else{
            items_features[2].classList.remove('features_text_active');
            $(items_features[2]).fadeOut();
            title_features[2].classList.remove('str');
            $(items_features[1]).fadeIn();
            items_features[1].classList.add('features_text_active');
            title_features[1].classList.add('str');
        }
    }else{
        items_features[0].classList.remove('features_text_active');
        $(items_features[0]).fadeOut();
        title_features[0].classList.remove('str');
        $(items_features[1]).fadeIn();
        items_features[1].classList.add('features_text_active');
        title_features[1].classList.add('str');
    }
});
title_features[2].addEventListener('click', function () {
    if(items_features[0].classList.length === 2){
        if(items_features[1].classList.length === 2){

        }else{
            items_features[1].classList.remove('features_text_active');
            $(items_features[1]).fadeOut();
            title_features[1].classList.remove('str');
            $(items_features[2]).fadeIn();
            items_features[2].classList.add('features_text_active');
            title_features[2].classList.add('str');
            
        }
    }else{
        items_features[0].classList.remove('features_text_active');
        $(items_features[0]).fadeOut();
        title_features[0].classList.remove('str');
        $(items_features[2]).fadeIn();
        items_features[2].classList.add('features_text_active');
        title_features[2].classList.add('str');
    }
});


let arrLang = {
    'en':{
        'about':'about',
        'features':'game features',
        'system':'System requirements',
        'quotes':'quotes',
        'home_title':'SURVIVE AT ALL COSTS',
        'home_subtitle':'Experience new social battle royale game',
        'home_buy':'Buy Now on Steam | $14.99',
        'social_sub_title':'What is SOS?',
        'social_title':'social battle  royale game',
        'social_text':'Each round, you and 15 other contestants compete to escape a deadly island filled with monsters. The trick is: three people can survive. Will you run solo or form friendships with others to escape? Making the right decisions could be the difference between life and death.',
        'features_sub_title':'What’s so special?',
        'features_title':'features',
        'info_features_title_1':'SURVIVE AT ALL COSTS',
        'info_features_text':'You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.',
        'info_features_title_2':'CREATE ALLIES AND ENEMIES',
        'info_features_title_3':'IMPRESS THE AUDIENCE',
        'system_req_sub_title':'Can My Computer Run this game?',
        'system_req_title':'system requirements',
        'os':'OS:','os_text':'Windows 7 64-bit only (No OSX support at this time)',
        'PROCESSOR':'PROCESSOR:','PROCESSOR_text':'Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ',
        'MEMORY':'MEMORY:','MEMORY_text':'8 GB RAM',
        'storage':'storage:','storage_text':'8 GB available space',
        'GRAPHICS':'GRAPHICS:','GRAPHICS_text':'NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)',
        'press_info_sub_title':'What people think?',
        'press_info_title':'Press quotes',
        'press_info_text':'Our goal is to create a product and service that you’re satisfied with and use it every day.This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.',
        'press_info_button':'Read more testimonials',
        'card_data_1':'October 18, 2018','card_data_2':'December 21, 2018','card_data_3':'December 24, 2018',
        'subscribe_sub_title':'Want to stay in touch?',
        'subscribe_title':'newsletter SUBSCRIBE',
        'subscribe_text':'In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.',
        'input_text':'Your email address',
        'subscribe_button':'Subscribe now'
    },
    'ru':{
        'about':'О нас',
        'features':'особенности игры',
        'system':'Системные Требования',
        'quotes':'отзывы',
        'home_title':'ВЫЖИТЬ ЛЮБОЙ ЦЕНОЙ',
        'home_subtitle':'Испытайте новую социальную игру королевская битва',
        'home_buy':'Купить сейчас в Steam | $14.99',
        'social_sub_title':'Что такое SOS?',
        'social_title':'социальная игра королевская битва',
        'social_text':'Каждый раунд вы и 15 других участников соревнуетесь, чтобы сбежать с смертоносного острова, заполненного монстрами. Уловка в том, что выжить могут три человека. Будете ли вы бегать в одиночку или дружить с другими, чтобы сбежать? Принятие правильных решений может быть разницей между жизнью и смертью.',
        'features_sub_title':'Что такого особенного?',
        'features_title':'возможности',
        'info_features_title_1':'ВЫЖИТЬ ЛЮБОЙ ЦЕНОЙ',
        'info_features_text':'У вас есть 30 минут, чтобы найти реликвию, сигнал для извлечения, и захватить одно из трех мест на спасательном вертолете.',
        'info_features_title_2':'создавать своего персонажа',
        'info_features_title_3':'ПОРАЗИТЬ ПУБЛИКУ',
        'system_req_sub_title':'Может ли мой компьютер запустить эту игру ?',
        'system_req_title':'Системные Требования',
        'os':'ОПЕРАЦИОННЫЕ СИСТЕМЫ:','os_text':'Windows 7 64-bit и выше',
        'PROCESSOR':'ПРОЦЕССОР:','PROCESSOR_text':'Intel Core 2 Duo @ 2.4 GHZ или AMD Athlon X2 @ 2.8 GHZ',
        'MEMORY':'ОПЕРАТИВНАЯ ПАМЯТЬ:','MEMORY_text':'8 GB RAM',
        'storage':'МЕСТО НА ДИСКЕ:','storage_text':'8 GB',
        'GRAPHICS':'ВИДЕОКАРТА:','GRAPHICS_text':'NVIDIA GeForce GTX 660 2GB или AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)',
        'press_info_sub_title':'Что думают люди ?',
        'press_info_title':'Отзывы',
        'press_info_text':'Наша цель - создать продукт и услугу, которыми вы останетесь довольны, и использовать их каждый день. Вот почему мы постоянно работаем над нашими услугами, чтобы каждый день улучшать их, и внимательно прислушиваемся к тому, что говорят наши пользователи.',
        'press_info_button':'Прочитайте больше отзывов',
        'card_data_1':'Октябрь 18, 2018','card_data_2':'Декабрь 21, 2018','card_data_3':'Декабрь 24, 2018',
        'subscribe_sub_title':'Хотите получать новости?',
        'subscribe_title':'ПОДПИШИСЬ',
        'subscribe_text':'Все, что вам нужно сделать, чтобы начать получать наши новости, - это ввести свой адрес электронной почты. Обо всем остальном позаботимся мы. Мы будем отправлять вам электронные письма с информацией об игре. Мы не рассылаем спам.',
        'input_text':'Ваш адрес электронной почты',
        'subscribe_button':'Подпишись сейчас'
    },
    'fra':{
        'about':'à propos de',
        'features':'caractéristiques de jeu',
        'system':'Configuration requise ',
        'quotes':'devis',
        'home_title':'SURVIVRE À TOUT PRIX ',
        'home_subtitle':'Découvrez le nouveau jeu de bataille royale sociale',
        'home_buy':'Acheter maintenant sur Steam | $14.99',
        'social_sub_title':"Qu'est-ce que SOS?",
        'social_title':'jeu social battle royale ',
        'social_text':"À chaque tour, vous et 15 autres concurrents vous affrontez pour échapper à une île mortelle remplie de monstres. L'astuce est: trois personnes peuvent survivre. Allez-vous courir en solo ou nouer des amitiés avec d'autres pour vous échapper? Prendre les bonnes décisions pourrait faire la différence entre la vie et la mort.",
        'features_sub_title':"Qu'est-ce qui est si spécial? ",
        'features_title':'Caractéristiques ',
        'info_features_title_1':'SURVIVRE À TOUT PRIX ',
        'info_features_text':"Vous avez 30 minutes pour trouver une relique, un signal pour l'extraction et attraper l'un des trois emplacements sur l'hélico de sauvetage.",
        'info_features_title_2':'CRÉER DES ALLIÉS ET DES ENNEMIS ',
        'info_features_title_3':'IMPRESSIONNEZ LE PUBLIC',
        'system_req_sub_title':'Mon ordinateur peut-il exécuter ce jeu?',
        'system_req_title':'Configuration requise',
        'os':"SYSTÈMES D'EXPLOITATION:",'os_text':'Windows 7 64-bit',
        'PROCESSOR':'PROCESSEUR:','PROCESSOR_text':'Intel Core 2 Duo @ 2.4 GHZ ou AMD Athlon X2 @ 2.8 GHZ',
        'MEMORY':'RAM:','MEMORY_text':'8 GB',
        'storage':'ESPACE DISQUE:','storage_text':'8 GB',
        'GRAPHICS':'CARTE VIDÉO:','GRAPHICS_text':'NVIDIA GeForce GTX 660 2GB ou AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)',
        'press_info_sub_title':'Que pensent les gens?',
        'press_info_title':'Citations de presse ',
        'press_info_text':"Notre objectif est de créer un produit et un service dont vous êtes satisfait et de l'utiliser chaque jour. C'est pourquoi nous travaillons constamment sur nos services pour l'améliorer chaque jour et écouter vraiment ce que nos utilisateurs ont à dire.",
        'press_info_button':'Lire plus de témoignages ',
        'card_data_1':'Octobre  18, 2018','card_data_2':'Décembre  21, 2018','card_data_3':'Décembre 24, 2018',
        'subscribe_sub_title':'Voulez-vous rester en contact?',
        'subscribe_title':"S'ABONNER",
        'subscribe_text':"Pour commencer à recevoir nos actualités, il vous suffit de saisir votre adresse e-mail. Tout le reste sera pris en charge par nous. Nous vous enverrons des e-mails contenant des informations sur le jeu. Nous ne faisons pas de spam.",
        'input_text':'Votre adresse email',
        'subscribe_button':'Abonnez-vous maintenant'
    },
    'arm':{
        'about':'Մեր մասին',
        'features':'խաղի առանձնահատկությունները',
        'system':'Համակարգի պահանջները',
        'quotes':'հաճախորդների ակնարկներ ',
        'home_title':'ԳՈՅԱՏԵՒԵԼ ՑԱՆԿԱՑԱԾ ԳՆՈՎ',
        'home_subtitle':'Փորձեք նոր արքայական խաղը',
        'home_buy':'Գնեք հիմա Steam | $14.99',
        'social_sub_title':'Ինչ է SOS ?',
        'social_title':'սոցիալական խաղ Battle Royale',
        'social_text':'Յուրաքանչյուր փուլում դուք և 15 այլ մասնակիցներ մրցում եք հրեշներով լցված մահացու կղզուց փախչելու համար: Բռնում է այն, որ երեք մարդ կարող է գոյատևել: Փախչելու համար մենակ կվազե՞ք, թե՞ ընկեր կլինեք ուրիշների հետ: Rightիշտ որոշումներ կայացնելը կարող է լինել կյանքի և մահվան տարբերությունը:',
        'features_sub_title':'Ինչն է այդքան առանձնահատուկ?',
        'features_title':'հնարավորություններ',
        'info_features_title_1':'ԳՈՅԱՏԵՒԵԼ ՑԱՆԿԱՑԱԾ ԳՆՈՎ',
        'info_features_text':'Դուք 30 րոպե ժամանակ ունեք գտնելու մասունքը, առբերման ազդանշանը և փրկարարական ուղղաթիռի երեք վայրերից մեկը գրավելու համար:',
        'info_features_title_2':'ՍՏԵՂԾԵՔ ՁԵՐ ՀԵՐՈՍԻՆ',
        'info_features_title_3':'ՏՊԱԳՐԵԼ ՀԱՍԱՐԱԿՈՒԹՅՈՒՆԸ ',
        'system_req_sub_title':'Կարո՞ղ է իմ համակարգիչը գործարկել այս խաղը ?',
        'system_req_title':'Համակարգի պահանջները',
        'os':'ՕԳՏԱԳՈՐՄԱՆ ՀԱՄԱԿԱՐԳԵՐ:','os_text':'Windows 7 64-bit և ավելի բարձր',
        'PROCESSOR':'ՊՐՈՑԵՍՈՐ:','PROCESSOR_text':'Intel Core 2 Duo @ 2.4 GHZ կամ AMD Athlon X2 @ 2.8 GHZ',
        'MEMORY':'RAM:','MEMORY_text':'8 GB',
        'storage':'ԴԻՍԿԻ ՏԱՐԱԾՈՒԹՅՈՒՆ:','storage_text':'8 GB',
        'GRAPHICS':'ՏԵՍԱՆՅՈՒԹԻ ՔԱՐՏ:','GRAPHICS_text':'NVIDIA GeForce GTX 660 2GB կամ AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)',
        'press_info_sub_title':'Ինչ են մտածում մարդիկ ?',
        'press_info_title':'Բնութագրեր',
        'press_info_text':'Մեր նպատակն է ստեղծել այնպիսի ապրանք և ծառայություն, որը դուք գոհ կլինեք և կօգտագործեք այն ամեն օր: Այդ պատճառով մենք անընդհատ աշխատում ենք մեր ծառայությունների վրա ՝ դրանք ամեն օր բարելավելու համար, և մենք ուշադիր լսում ենք մեր օգտվողների ասելիքները:',
        'press_info_button':'Կարդացեք ավելին ակնարկներ',
        'card_data_1':'Հոկտեմբեր  18, 2018','card_data_2':'Դեկտեմբեր 21, 2018','card_data_3':'Դեկտեմբեր 24, 2018',
        'subscribe_sub_title':'Ցանկանում եք ստանալ նորությունները?',
        'subscribe_title':'Բաժանորդագրվիր',
        'subscribe_text':'Մեր նորությունները ստանալու համար անհրաժեշտ է միայն մուտքագրել ձեր էլ. Փոստի հասցեն: Մնացածը մենք ենք հոգալու: Մենք ձեզ նամակներ կուղարկենք խաղի վերաբերյալ տեղեկատվությամբ: Մենք սպամ չենք ուղարկում:',
        'input_text':'Քո էլեկտրոնային հասցեն ',
        'subscribe_button':'Բաժանորդագրվեք հիմա'
    }
};


$(function(){
    $('.translate').click(function () { 
       let lang =  $(this).attr('id');
  
       $('.language').each(function(index,item){
           $(this).text(arrLang[lang][$(this).attr('key')]);
           
       }); 
    });
});

let rus = document.querySelector('#ru');
let engl = document.querySelector('#en');
let fran = document.querySelector('#fra');
let arm = document.querySelector('#arm');
let bod = document.querySelector('.body');
rus.addEventListener('click',function () { 
    bod.classList.remove('engl');
    bod.classList.remove('fran');
    bod.classList.remove('arm');
    bod.classList.add('rus');
});
engl.addEventListener('click',function () { 
    bod.classList.remove('rus');
    bod.classList.remove('fran');
    bod.classList.remove('arm');
    bod.classList.add('engl');
});
fran.addEventListener('click',function () { 
    bod.classList.remove('engl');
    bod.classList.remove('rus');
    bod.classList.remove('arm');
    bod.classList.add('fran');
});
arm.addEventListener('click',function () { 
    bod.classList.remove('engl');
    bod.classList.remove('fran');
    bod.classList.remove('rus');
    bod.classList.add('arm');
});