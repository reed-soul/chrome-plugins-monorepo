export const VERSION = "1.0.0";
export const isF2E = true;
const DOCUMENT_URL = isF2E
  ? "https://aomi.yuque.com/docs/share/2a5932c8-d1c2-4d0e-90ef-d7c9777ed86f?#"
  : "https://aomi.yuque.com/staff-rimeff/wi9qad/xg4fcq";
const WORK_SITES = new Map([
  ["中台代码", "https://sutpc.coding.net/p/base/repos"],
  ["中台流水线", "https://sutpc.coding.net/p/base/ci/job"],
  ["CIM代码", "https://sutpc.coding.net/p/cim-base/repos"],
  ["CIM流水线", "https://sutpc.coding.net/p/cim-base/ci/job"],
  ["TPaas前端框架", "https://www.kdocs.cn/l/cugGQgrrXC3z"],
  ["研发规范", "http://dev.sutpc.com/standard/frontend/vue3/"],
  ["飞渡API文档(佛山)", "http://192.168.0.62:8080/doc/api/index.html"],
  [
    "飞渡API调试(佛山)",
    "http://192.168.0.62:8080/samples/locale_zh/main.html?pid=7",
  ],
  [
    "飞渡示例文档(佛山)",
    "http://192.168.0.62:8080/samples/locale_zh/samples.html#",
  ],
  [
    "飞渡接口API(佛山)",
    "http://192.168.0.62:8080/samples/locale_zh/manager.html",
  ],
  ["飞渡API文档(235)", "http://10.10.50.235:8080/doc/api/index.html"],
  [
    "飞渡API调试(235)",
    "http://10.10.50.235:8080/samples/locale_zh/main.html?pid=7",
  ],
  [
    "飞渡示例文档(235)",
    "http://10.10.50.235:8080/samples/locale_zh/samples.html#",
  ],
  [
    "飞渡接口API(235)",
    "http://10.10.50.235:8080/samples/locale_zh/manager.html",
  ],
  ["飞渡API文档(227)", "http://10.10.50.227:8080/doc/api/index.html"],
  [
    "飞渡API调试(227)",
    "http://10.10.50.227:8080/samples/locale_zh/main.html?pid=7",
  ],
  [
    "飞渡示例文档(227)",
    "http://10.10.50.227:8080/samples/locale_zh/samples.html#",
  ],
  [
    "飞渡接口API(227)",
    "http://10.10.50.227:8080/samples/locale_zh/manager.html",
  ],
  ["Mars3D API", "http://mars3d.cn/api.html"],
  ["Mars3D 示例", "http://mars3d.cn/example.html#/ex_0"],
  ["Mars3D 开发教程", "http://mars3d.cn/doc.html"],
  ["Mars3D 常见问题汇总", "https://www.yuque.com/yizhangxiatian/wl3uib"],
  ["Cesium 官方教程", "https://cesium.com/learn/cesiumjs-learn/"],
  ["Cesium  示例", "https://sandcastle.cesium.com/"],
  ["Cesium  API", "http://mars3d.cn/api/cesium/"],
  ["Cesium  Blog", "https://cesium.com/blog/"],
  ["飞渡官方文档", "http://sdk.g-bim.cn/doc/api/BaseObject.html"],
  ["飞速低代码", "http://dev-dashboard.sutpc.com/"],
  ["全要素wiki文档", "https://sutpc.coding.net/p/cim-base/wiki/2387"],
  [
    "全要素开发资料",
    "https://file.sutpc.com/anyshare/zh-cn/wpspreview/?_tb=none&gns=03291D82CE6D4BFA944D78FF52ED6B1B%2F0C2BD30805154FF4821E144F8D5B416B%2FE663470B10234C1199A733B1946E7296&name=%E5%85%A8%E8%A6%81%E7%B4%A0%E5%BC%80%E5%8F%91%E8%B5%84%E6%96%99.xlsx",
  ],
  [
    "分享文档",
    "https://docs.qq.com/sheet/DY2tVQ0p2c3ByeFR5?tab=BB08J2&_t=1694433003171",
  ],
  [
    "Ones",
    "https://ones.sutpc.com/project/#/team/MWYKt1yX/project/2bf6emx5HvRYE5jj/component/Y2wq5Zz5/sprint/GeQjKjk1/all",
  ],
  ["npm制品", "https://sutpc.coding.net/p/kczx_public_repo"],
  ["Nacos", "https://sutpc.coding.net/p/cim-base/wiki/508"],
  ["IconPark", "https://iconpark.oceanengine.com/official"],
  ["iconify", "https://icon-sets.iconify.design/"],
  ["Element Plus", "http://dev.sutpc.com:9008/zh-CN/component/button.html"],
  ["email", "https://exmail.qq.com/login"],
  ["open webui", "http://192.168.0.62:3000/"],
  ["前端监控-dev", "http://10.10.2.136:9010/"],
  ["前端监控-prod", "http://10.10.180.136:9010/"],
]);

const SUTPC_SITE = new Map([
  [
    "开发者平台",
    [
      [
        "http://dev-tpaas.sutpc.com:9280/",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://uat-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "https://admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "管理中心",
    [
      [
        "http://dev-tpaas.sutpc.com/#/home",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://sit-tpaas.sutpc.com/#/home",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://tpaas.sutpc.com/#/home",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "租户中心",
    [
      [
        "http://dev-tpaas.sutpc.com:8082/#/home",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://uat-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "https://admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "仿真",
    [
      [
        "http://10.3.4.18:9000/#/login",
        "https://sutpc.coding.net/p/SUTPCTrafficSim/d/tpaas-sim-portal/git/merges/create/develop...",
        "https://sutpc.coding.net/p/SUTPCTrafficSim/ci/job?id=2546326",
      ],
      [
        "http://10.10.180.105:9200/",
        "https://sutpc.coding.net/p/SUTPCTrafficSim/d/tpaas-sim-portal/git/merges/create/sit...develop",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.131",
        "https://sutpc.coding.net/p/SUTPCTrafficSim/d/tpaas-sim-portal/git/merges/create",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "坪山",
    [
      [
        "http://10.10.2.136:10011/",
        "https://sutpc.coding.net/p/cim-base/d/pingshan.project.front/git/merges/create/dev...",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3815645",
      ],
      [
        "http://10.3.4.150:10012",
        "https://sutpc.coding.net/p/cim-base/d/pingshan.project.front/git/merges/create/test...",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3967015",
      ],
      [
        "http://10.10.180.136:10001",
        "https://sutpc.coding.net/p/cim-base/d/pingshan.project.front/git/merges/create/master...",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3903296",
      ],
    ],
  ],
  [
    "运营监测平台",
    [
      [
        "http://10.10.2.136:10001/",
        "https://sutpc.coding.net/p/cim-base/d/pingshan.operation-monitoring.front/git/merges/create/dev...",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3973148",
      ],
      [
        "http://10.10.2.136:11001/",
        "https://sutpc.coding.net/p/cim-base/d/pingshan.operation-monitoring.front/git/merges/create/test...",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.136:10001",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3192501",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=4152049",
      ],
    ],
  ],
  [
    "abuzhabi",
    [
      [
        "http://10.3.4.232:20010/#/index",
        "https://sutpc.coding.net/p/cim-base/d/abudhabi.frontend/git/merges/create/dev...",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=4020683",
      ],
      [
        "http://10.3.4.150:11001",
        "https://sutpc.coding.net/p/cim-base/d/abudhabi.frontend/git/merges/create/test...",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=4840726",
      ],
      [
        "http://10.10.180.137:20010/#/index",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3192501",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=4840726",
      ],
    ],
  ],
  [
    "全要素平台",
    [
      [
        "http://10.3.4.193:10001/",
        "https://sutpc.coding.net/p/cim-base/d/tesp.biz.front/git/merges?code=MR_OPEN&sort=action_at&sortdirection=DESC&status=open",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.3.4.232:10001/#/homepage",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.136:10001",
        "https://sutpc.coding.net/p/cim-base/ci/job?id=3192501",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "全要素配置后台",
    [
      [
        "http://10.3.4.193:10011/",
        "https://sutpc.coding.net/p/cim-base/d/tesp.biz.config.front/git/tree/dev",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.3.4.232:20011/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.136:10011",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "全要素后台",
    [
      [
        "http://10.3.4.193:10000/",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.3.4.232:20011/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://civilos.sutpc.com/",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "CIM底座",
    [
      [
        "http://10.3.4.150:10000/",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.10.180.114/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://civilos.sutpc.com/",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "MinNIO",
    [
      [
        "http://10.3.4.149:9001",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.10.180.114/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.134:9001/",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
]);

const ENV_MAP = {
  0: "dev",
  1: "sit",
  2: "prod",
};

export { DOCUMENT_URL, ENV_MAP, SUTPC_SITE, WORK_SITES };
