<template>
  <div class="contact_us">
    <h2 class="title">{{ t('contactUs') }}</h2>
    <div class="show_box">
      <div class="show_unit">
        <div class="unit_title">
          {{ t('consumerLine') }}
        </div>
        <div class="unit_text">
          000-0756-1234<br><br>
          周一至周五 10：00~17：00<br>
          周六 10：00~12：00<br>
          （周日及法定节假日除外）
        </div>
      </div>
      <div class="show_unit">
        <div class="unit_title">
          {{ t('partnerLine') }}
        </div>
        <div class="unit_text">
          枪弹业务：<br>
          张先生 +86 139-0000-9999<br><br>
          枪弹业务：<br>
          张先生 +86 139-0000-9999<br><br>
          枪弹业务：<br>
          张先生 +86 139-0000-9999
        </div>
      </div>
      <div class="show_unit">
        <div class="unit_title">
          {{ t('joinUs') }}
        </div>
        <div class="unit_text">
          投递简历：<br>
          qys-hiring@qys.top<br><br>
          咨询电话：<br>
          000-0756-5678<br>
        </div>
      </div>

    </div>
    <div class="show_box">
      <div style="text-align:right;margin:auto 20px;">中华人民共和国<br>
        广东省珠海市斗门区<br>
        虹桥五路1号<br><br><br><br>
        NO.1 Hongqiao Fifth Road,<br>
        Doumen District,Zhuhai,Guangdong Province,<br>
        P.R.China.
      </div>
      <div>
        <div id="container"></div>
      </div>
    </div>
  </div>

</template>



<script>
import { useI18n } from "vue-i18n";
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
export default {
  setup() {
    const { t } = useI18n({
      messages: {
        "zh-CN": {
          contactUs: "联系我们",
          consumerLine: "消费者服务热线",
          partnerLine: "成为合作伙伴",
          joinUs: "加入我们",
          addr: "",
        },
        "en-US": {
          contactUs: "Contact us",
          consumerLine: "消费者服务热线",
          partnerLine: "",
          joinUs: "加入我们",
          addr: "",
        },
      },
    });
    const map = shallowRef(null);
    return {
      map,
      t,
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "3611e27b2b3a7e40ede86c5b54af5566", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
            viewMode: "3D", //是否为3D地图模式
            zoom: 15, //初始化地图级别
            center: [113.325271, 22.211484], //初始化地图中心点位置
          });
          var marker = new AMap.Marker({
            position: new AMap.LngLat(113.325271, 22.211484), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: "珠海强源体育用品有限公司",
          });
          this.map.add(marker);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};
</script>



<style>
@media (min-width: 70vh) {
  .contact_us {
    min-height: 100vh;
    /* display: flex; */
    /* align-items: center; */
  }
}
@media (min-width: 70vh) {
  .show_box {
    min-height: 200px;
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    /* align-items: center; */
  }
}
.show_unit {
  width: 30%;
  margin: 10 20;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 20px;
}
.unit_title {
  margin: 15px 20px;
  font-weight: bold;
  font-size: 20px;
}
.unit_text {
  font-size: 15px;
  margin: 10px 20px 15px 20px;
}
.title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 33px;
}
#container {
  width: 600px;
  height: 300px;
}
</style>