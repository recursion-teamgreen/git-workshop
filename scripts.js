// ボタン
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

// クリックイベント
scroll_to_top_btn.addEventListener('click',scroll_to_top);

function scroll_to_top(){
  window.scroll({top:0,behavior:'smooth'});
};

// スクロール時のイベント追加

window,addEventListener('scroll',scroll_event);

// スクロールの移動距離で稼働する
function scroll_event(){
  if(window.pageYOffset >400){
    scroll_to_top_btn.style.opacity ='0.5';
  }else if(window.pageYOffset <400){
    scroll_to_top_btn.style.opacity ='0'
  }
};


const section = document.querySelector('.cherry-blossom-container');


const createPetal=()=>{
  const petalEl = document.createElement('span');
  petalEl.className = 'petal';
  const minSize = 10;
  const maxSize = 15;
  const size = Math.random()*(maxSize+1-minSize)+minSize;
  petalEl.style.width = `${size}px`;
  petalEl.style.height = `${size}px`;
  petalEl.style.left = Math.random()*innerWidth+'px';
  section.appendChild(petalEl);

  setTimeout(()=>{
    petalEl.remove();
  },10000);
}

var changeImage = document.getElementById('changeImage');

changeImage.addEventListener('click',setInterval(createPetal,300),false);
