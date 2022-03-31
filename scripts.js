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