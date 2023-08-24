import {
  VERSION,
  DOCUMENT_URL,
  SUTPC_SITE,
  WORK_SITES,
  ENV_MAP,
  isF2E,
} from "./constant.js";

const App = () => {
  const insertHtml = `<div>
  <div class="block">
  	当前插件版本：v-${VERSION} (<a data="${DOCUMENT_URL}" href="#">去下载最新版</a>)
  <H2> SUTPC项目</H2>
  ${[...SUTPC_SITE]
    .map(
      ([name, urls]) =>
        `<div class="row">
          <div class="left">${name}</div>
          <div class="right">
           ${urls
             .map(
               ([url, flowUrl, flowWebHook], index) =>
                 `<div><a data="${url}" href="#">${
                   ENV_MAP[index]
                 }</a><a data="${flowUrl}" href='#'>(flow)</a>${
                   isF2E && flowWebHook
                     ? `<a isFlowHook data="${flowWebHook}" href='#'>run</a>`
                     : "<a></a>"
                 }</div>`
             )
             .join("")}
          </div>
        </div>`
    )
    .join("")}
  </div>
  <div class="block">
<div class="work">
  ${[...WORK_SITES]
    .map(([name, url]) => `<a data="${url}" href="#">${name}</a>`)
    .join("")}
</div>`;

  document.getElementById("root").innerHTML = insertHtml;

  Array.from(document.getElementsByTagName("a")).forEach((element) =>
    element.addEventListener("click", async function () {
      if (this.attributes?.isFlowHook) {
        const webhook = this.attributes?.data.value;
        if (!webhook.includes("http"))
          return alert("无法执行，请确认是否存在此流水线");
        const response = await fetch(webhook, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: "{}",
        });

        const res = await response.json();
        if (!res.successful) {
          return alert("有正在执行的流水线时，不允许再次执行");
          // return chrome.notifications.create(null, {
          //   type: 'basic',
          //   iconUrl: 'icon.png',
          //   title: '澳觅项目查看小助手',
          //   message: '有正在执行的飞流时，不允许再次执行'
          // });
        }
        alert("云效流水线执行成功");
        // chrome.notifications.create(null, {
        //   type: 'basic',
        //   iconUrl: 'icon.png',
        //   title: '澳觅项目查看小助手',
        //   message: '飞流执行成功'
        // });
      } else {
        window.open(this.attributes.data.value);
      }
    })
  );
};

App();
