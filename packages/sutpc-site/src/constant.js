export const VERSION = "1.0.0";
export const isF2E = true;
const DOCUMENT_URL = isF2E
  ? "https://aomi.yuque.com/docs/share/2a5932c8-d1c2-4d0e-90ef-d7c9777ed86f?#"
  : "https://aomi.yuque.com/staff-rimeff/wi9qad/xg4fcq";
const WORK_SITES = new Map([
  ["coding", "https://sutpc.coding.net/p/base/repos"],
  ["工时填报", "https://rddms.sutpc.com/#/em-working-log"],
  [
    "全要素工时填报",
    "https://file.sutpc.com/anyshare/zh-cn/wpspreview/?_tb=none&gns=03291D82CE6D4BFA944D78FF52ED6B1B%2F3E70DC20C4B549378DC42A09CE31D2F3%2F1F3C7671648F4E72A537C9DE980BAD90&name=%E5%85%A8%E8%A6%81%E7%B4%A0%E5%B7%A5%E6%97%B6%E6%94%B6%E9%9B%86-10%E6%9C%88.xlsx",
  ],
  [
    "Ones",
    "https://ones.sutpc.com/project/#/team/MWYKt1yX/project/2bf6emx5HvRYE5jj/component/Y2wq5Zz5/sprint/GeQjKjk1/all",
  ],
  ["TPaas前端框架", "https://www.kdocs.cn/l/cugGQgrrXC3z"],
  ["研发规范", "http://dev.sutpc.com/standard/frontend/vue3/"],

  ["飞渡API文档(229)", "http://10.10.50.229:8081/doc/api/index.html"],
  ["飞渡API调试(229)", "http://10.10.50.229:8081/samples/locale_zh/main.html"],
  [
    "飞渡示例文档(229)",
    "http://10.10.50.229:8081/samples/locale_zh/samples.html#",
  ],
  [
    "飞渡接口API(229)",
    "http://10.10.50.229:8081/samples/locale_zh/manager.html",
  ],
  ["飞渡官方文档", "http://sdk.g-bim.cn/doc/api/BaseObject.html"],
  ["飞速低代码", "http://dev-dashboard.sutpc.com/"],
  ["全要素wiki文档", "https://sutpc.coding.net/p/cim-base/wiki/2387"],
  [
    "全要素开发资料",
    "https://file.sutpc.com/anyshare/zh-cn/wpspreview/?_tb=none&gns=03291D82CE6D4BFA944D78FF52ED6B1B%2F0C2BD30805154FF4821E144F8D5B416B%2FE663470B10234C1199A733B1946E7296&name=%E5%85%A8%E8%A6%81%E7%B4%A0%E5%BC%80%E5%8F%91%E8%B5%84%E6%96%99.xlsx",
  ],
  [("Mars3D", "http://mars3d.cn/example.html#/ex_0")],
  [
    "分享文档",
    "https://docs.qq.com/sheet/DY2tVQ0p2c3ByeFR5?tab=BB08J2&_t=1694433003171",
  ],
  ["代码", "https://sutpc.coding.net/p/cim-base/repos"],
  ["基础平台流水线", "https://sutpc.coding.net/p/base/ci/job"],
  ["CIM代码", "https://sutpc.coding.net/p/cim-base/repos"],
  ["CIM流水线", "https://sutpc.coding.net/p/cim-base/ci/job"],
  ["npm制品", "https://sutpc.coding.net/p/kczx_public_repo"],
  ["MinIO", "http://10.3.4.149:9001/login"],
  ["Nacos", "https://sutpc.coding.net/p/cim-base/wiki/508"],
  ["IconPark", "https://iconpark.oceanengine.com/official"],
  ["iconify", "https://icon-sets.iconify.design/"],
  ["Element Plus", "https://element-plus.gitee.io/zh-CN/component/button.html"],
  ["email", "https://exmail.qq.com/login"],
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
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://uat-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.131",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
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
        "http://10.3.4.193:10001/",
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
        "http://10.3.4.193:10011/",
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
        "http://10.3.4.193:10000/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.10.180.136:10001",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
]);

const ENV_MAP = {
  0: "dev",
  2: "sit",
  3: "prod",
};

export { DOCUMENT_URL, ENV_MAP, SUTPC_SITE, WORK_SITES };
