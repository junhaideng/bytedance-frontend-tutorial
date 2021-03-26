var flag = false; // 第一次的时候不要滑动滚动条
loadData();
window.addEventListener("scroll", () => {
  if (!flag) {
    return;
  }
  //变量scrollTop是滚动条滚动时，滚动条上端距离顶部的距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //变量windowHeight是可视区的高度
  var windowHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  //变量scrollHeight是滚动条的总高度（当前可滚动的页面的总高度）
  var scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  //滚动条到底部
  if (scrollTop + windowHeight == scrollHeight) {
    //要进行的操作

    if (document.body.scrollTop) {
      window.scroll({
        top: document.body.scrollTop - 100,
        left: 0,
        behavior: "smooth",
      });
    } else {
      window.scroll({
        top: document.documentElement.scrollTop - 100,
        left: 0,
        behavior: "smooth",
      });
    }
    loadData();
  }
});


// 时间格式化
function parseTime(timestamp) {
  let now = Date.now();
  let diff = Math.floor((now - timestamp * 1000) / 1000);
  let day = Math.floor(diff / 3600 / 24);
  if (day >= 1) {
    return day + "天前";
  }
  let hour = Math.floor((diff % (3600 * 24)) / 3600);
  if (hour >= 1) {
    return hour + "小时前";
  }
  let minute = Math.floor((diff % 3600) / 60);
  if (minute >= 1) {
    return minute + "分钟前";
  }
  return "刚刚";
}

// 数字格式化
function parseNum(num){
  if (num/10000>=1){
    return Number(num/10000).toFixed(1) + "万"
  }
  return num 
}

function loadData() {
  axios.get("http://localhost:8080/json").then((res) => {
    let response = res.data;
    flag = true;
    for (let i = response.length - 1; i >= 0; i--) {
      data = response[i];
      const feedList = document.querySelector(".feed-list");
      let tmp;

      // 如果是single_mode
      if (data.article_genre == "article" && data.single_mode) {
        tmp = `
  <div class="single-mode">
                  <div class="single-mode-lbox"><a class="img-wrap"
                      href="https://www.toutiao.com${
                        data.source_url
                      }" target="_blank"
                      rel="noopener noreferrer">
                      <img src="http:${data.image_url}"
                        class="lazy-load-img">
                    </a>
                  </div>
                  <div class="single-mode-rbox">
                    <div class="single-mode-rbox-inner">
                      <div class="title-box">
                        <a class="news-link" href="https://www.toutiao.com/${
                          data.source_url
                        }" target="_blank"
                          rel="noopener noreferrer">${data.title}</a>
                      </div>
                      <div class="footer-bar">
                        <div class="footer-bar-left">
                        ${
                          data.chinese_tag
                            ? '<a class="footer-bar-action tag tag-style-video" href="https://www.toutiao.com/ch/video/" target="_blank" rel="noopener noreferrer">' +
                              data.chinese_tag +
                              "</a>"
                            : ""
                        }
            
                            <a class="footer-bar-action media-avatar"
                            href="https://www.toutiao.com/${data.media_url}"
                            target="_blank" rel="noopener noreferrer">
                            <img
                              src="https:${data.media_avatar_url}"></a>
                          <a class="footer-bar-action source"
                            href="https://www.toutiao.com/${data.media_url}"
                            target="_blank" rel="noopener noreferrer">&nbsp;${
                              data.source
                            }&nbsp;⋅</a>
                          <a class="footer-bar-action source"
                            href="https://www.toutiao.com/${
                              data.source_url
                            }/#comment-area" target="_blank"
                            rel="noopener noreferrer">&nbsp;${
                              parseNum(data.comments_count)
                            }评论</a>
                          <span class="footer-bar-action time">&nbsp;⋅&nbsp;${parseTime(
                            data.behot_time
                          )}</span>
                        </div>
                        <div class="footer-bar-right">
                          <div class="action-dislike"><i class="bui-icon icon-close-small"></i>不感兴趣</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
      } else if (!data.single_mode && data.article_genre == "video") {
        tmp = ` <div class="no-mode">
      <div class="title-box">
        <a class="news-link" href="https://www.toutiao.com/${
          data.source_url
        }" target="_blank"
          rel="noopener noreferrer">${data.title}</a>
      </div>
      <div class="footer-bar">
        <div class="footer-bar-left">
        ${
          data.chinese_tag
            ? '<a class="footer-bar-action tag tag-style-video" href="https://www.toutiao.com/ch/video/" target="_blank" rel="noopener noreferrer">' +
              data.chinese_tag +
              "</a>"
            : ""
        }

          <a class="footer-bar-action media-avatar"
            href="https://www.toutiao.com${data.media_url}"
            target="_blank" rel="noopener noreferrer">
            <img src="https:${data.media_avatar_url}">
          </a>
          <a class="footer-bar-action source"
            href="https://www.toutiao.com${data.media_url}"
            target="_blank" rel="noopener noreferrer">&nbsp;${
              data.source
            }&nbsp;⋅</a><a
            class="footer-bar-action source"
            href="https://www.toutiao.com${
              data.source_url
            }//#comment-area" target="_blank"
            rel="noopener noreferrer">&nbsp;${parseNum(data.comments_count)}评论</a><span
            class="footer-bar-action time">&nbsp;⋅&nbsp;${parseTime(
              data.behot_time
            )}</span>
        </div>
        <div class="footer-bar-right"></div>
      </div>
    </div>`;
      } else if (data.single_mode && data.article_genre == "video")
        tmp = `     <div class="single-mode">
                  <div class="single-mode-lbox"><a class="img-wrap"
                      href="https://www.toutiao.com${
                        data.source_url
                      }" target="_blank"
                      rel="noopener noreferrer">
                      <img src="https:${data.image_url}"
                        class="lazy-load-img">
                      <i class="pic-tip video-tip"><span>${
                        data.video_duration_str
                      }</span></i>
                    </a>
                  </div>
                  <div class="single-mode-rbox">
                    <div class="single-mode-rbox-inner">
                      <div class="title-box">
                        <a class="news-link" href="https://www.toutiao.com${
                          data.source_url
                        }" target="_blank"
                          rel="noopener noreferrer">${data.title}</a>
                      </div>
                      <div class="footer-bar">
                        <div class="footer-bar-left">
                          <a class="footer-bar-action tag tag-style-video" href="https://www.toutiao.com/ch/video/"
                            target="_blank" rel="noopener noreferrer">视频</a>
                          <a class="footer-bar-action media-avatar"
                            href="https://www.toutiao.com${data.media_url}"
                            target="_blank" rel="noopener noreferrer">
                            <img
                              src="https:${data.media_avatar_url}"></a>
                          <a class="footer-bar-action source"
                            href="https://www.toutiao.com${data.media_url}"
                            target="_blank" rel="noopener noreferrer">&nbsp;防务面对面&nbsp;⋅</a>
                          <a class="footer-bar-action source"
                            href="https://www.toutiao.com${
                              data.source_url
                            }//#comment-area" target="_blank"
                            rel="noopener noreferrer">&nbsp;${
                              parseNum(data.comments_count)
                            }评论</a>
                          <span class="footer-bar-action time">&nbsp;⋅&nbsp;${parseTime(
                            data.behot_time
                          )}</span>
                        </div>
                        <div class="footer-bar-right">
                          <div class="action-dislike"><i class="bui-icon icon-close-small"></i>不感兴趣</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
      else {
        // 其他情况这里为了简便不在处理
        continue;
      }
      feedList.insertAdjacentHTML("afterend", tmp);
    }
  });
}

loadData();
