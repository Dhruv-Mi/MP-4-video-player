const data = [{
    title: '',
    channel: ''
}
    , {
    title: ' Brown Munde Song',
    channel: 'FeelMusic'
}
    , {
    title: ' Excuses',
    channel: 'FeelMusic'
}
    , {
    title: ' Insane',
    channel: 'FeelMusic'
}
    , {
    title: ' Sample Video 1',
    channel: 'FeelMusic'
}
    , {
    title: ' Sample video 2',
    channel: 'FeelMusic'
}
    , {
    title: ' Sample video 3',
    channel: 'FeelMusic'
}
]

const playlists = document.querySelector('.videos');
const myvideos = document.querySelectorAll('.videos');
const mainvideo = document.getElementById('main');

function videos(){

    for(let i=1;i<data.length;i++){

        let singlevideo = document.createElement('div');
        singlevideo.className='single_video';

        let videothumb = document.createElement('div');
        videothumb.className = ' video_thumb';

        let video = document.createElement('video');
        video.src = `./videos/video${i}.mp4`;

        playlists.appendChild(singlevideo);
        singlevideo.appendChild(videothumb);
        videothumb.appendChild(video);

        let text = document.createElement('div');
        text.className = 'title';

        let head4 = document.createElement('h4');
        head4.innerText = data[i].title;

        let head6 = document.createElement('h6');
        head6.innerText = data[i].channel;

        text.appendChild(head4);
        text.appendChild(head6);
        singlevideo.appendChild(text);
    }
}

videos();

const singlevideo = document.querySelectorAll('.single_video');
const maintitle = document.getElementById('main_title');


for(const video of myvideos){

    video.addEventListener('click',(e)=>{
        let source =e.target.src;

        if(source==undefined){
            console.log("source not defined");
        }
        else{
            mainvideo.src=source;

            let active1 = e.target.parentElement.parentElement;
            let title1 = active1.childNodes[1];
            let head = title1.childNodes[0].innerText;
            maintitle.innerText = head;

            for(let a=0;a<data.length;a++){

                singlevideo[a].classList.remove('active');
            }
        }
    })
}