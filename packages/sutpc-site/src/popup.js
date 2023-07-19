import {
  VERSION,
  DOCUMENT_URL,
  AOMI_SITES,
  WORK_SITES,
  ENV_MAP,
  MINI_PROGRAM_DOC,
  MINI_PROGRAM_SITES,
  isF2E,
} from "./constant.js";

const App = () => {
  const insertHtml = `<div>
  <div class="block">
  	当前插件版本：v-${VERSION} (<a data="${DOCUMENT_URL}" href="#">去下载最新版</a>)
  <H2> 澳觅项目</H2>
  ${[...AOMI_SITES]
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
  <H2> 小程序</H2>
  ${[...MINI_PROGRAM_DOC]
    .map(
      ([name, url]) =>
        `<div class="row"><a data="${url}" href="#">${name}</a></div>`
    )
    .join("")}
  ${[...MINI_PROGRAM_SITES]
    .map(
      ([name, urls]) =>
        `<div class="row">
      <div class="left">${name}</div>
      <div class="right">
        ${urls
          .map(
            ([flowUrl], index) =>
              `<div>${ENV_MAP[index]}<a data="${flowUrl}" href='#'>(flow)</a></div>`
          )
          .join("")}
      </div>
    </div>`
    )
    .join("")}
  <br />
  ${[...WORK_SITES]
    .map(
      ([name, url]) =>
        `<div class="row"><a data="${url}" href="#">${name}</a></div>`
    )
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
