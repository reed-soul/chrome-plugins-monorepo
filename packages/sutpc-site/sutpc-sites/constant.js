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
    "https://file.sutpc.com/anyshare/zh-cn/wpspreview/?_tb=none&gns=03291D82CE6D4BFA944D78FF52ED6B1B%2F3E70DC20C4B549378DC42A09CE31D2F3%2F1ED797468A8A4B97899301E9015D1007&name=%E5%85%A8%E8%A6%81%E7%B4%A0%E5%B7%A5%E6%97%B6%E6%94%B6%E9%9B%86-8%E6%9C%88.xlsx",
  ],
  [
    "Ones",
    "https://ones.sutpc.com/project/#/team/MWYKt1yX/project/2bf6emx5HvRYE5jj/component/Y2wq5Zz5/sprint/GeQjKjk1/all",
  ],
  ["TPaas前端框架", "https://www.kdocs.cn/l/cugGQgrrXC3z"],
  ["研发规范", "http://dev.sutpc.com/standard/frontend/vue3/"],
  ["全要素文档", "https://sutpc.coding.net/p/cim-base/wiki/2387"],
  [
    "飞渡API",
    "http://10.10.50.229:8081/samples/locale_zh/main.html?iid=1690894224723&pid=1",
  ],
  ["Mars3D", "http://mars3d.cn/example.html#/ex_0"],
  ["飞渡接口API", "http://10.10.50.229:8081/samples/locale_zh/manager.html"],
  ["飞渡示例文档", "http://10.10.50.229:8081/samples/locale_zh/samples.html#"],
  ["飞渡文档", "http://sdk.g-bim.cn/doc/api/BaseObject.html"],
  ["语雀", "https://aomi.yuque.com/"],
  ["Nacos", "https://sutpc.coding.net/p/cim-base/wiki/508"],
  ["IconPark", "https://iconpark.oceanengine.com/official"],
  ["iconify", "https://icon-sets.iconify.design/"],
  ["Element Plus", "https://element-plus.gitee.io/zh-CN/component/button.html"],
  ["email", "https://exmail.qq.com/login"],
]);

const SUTPC_SITE = new Map([
  [
    "管理中心",
    [
      [
        "http://dev-tpaas.sutpc.com/#/home",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://uat-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://sit-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534155/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/g5ofE5DPQKIRIkdinFkq",
      ],
      [
        "https://admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "租户中心",
    [
      [
        "http://dev-tpaas.sutpc.com/#/home",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://uat-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://sit-admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534155/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/g5ofE5DPQKIRIkdinFkq",
      ],
      [
        "https://admin.aomiapp.com",
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
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.3.4.193:10001/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.3.4.150:10000",
        "https://flow.aliyun.com/pipelines/1534155/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/g5ofE5DPQKIRIkdinFkq",
      ],
      [
        "https://admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
  [
    "全要素配置后台",
    [
      [
        "http://10.3.4.193:10011/",
        "https://flow.aliyun.com/pipelines/1533771/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/r7BdK0uGeIGHZVQNcjq6",
      ],
      [
        "http://10.3.4.193:10011/",
        "https://flow.aliyun.com/pipelines/1533927/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/zjfte0WZznf0iskCxxXN",
      ],
      [
        "http://10.3.4.150:10000",
        "https://flow.aliyun.com/pipelines/1534155/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/g5ofE5DPQKIRIkdinFkq",
      ],
      [
        "https://admin.aomiapp.com",
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
        "http://10.3.4.150:10000",
        "https://flow.aliyun.com/pipelines/1534155/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/g5ofE5DPQKIRIkdinFkq",
      ],
      [
        "https://admin.aomiapp.com",
        "https://flow.aliyun.com/pipelines/1534426/current",
        "https://flow-openapi.aliyun.com/pipeline/webhook/MVbdobeazHNDnyYRp0fs",
      ],
    ],
  ],
]);

const ENV_MAP = {
  0: "test",
  1: "uat",
  2: "gray",
  3: "prod",
};

export { DOCUMENT_URL, ENV_MAP, SUTPC_SITE, WORK_SITES };
