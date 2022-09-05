<template>
  <div class="about_us">
    <h2 class="title">{{ t('aboutUs') }}</h2>
    <div style="width:942px;margin-top:15px">
      <p>&emsp;&emsp;{{ t('introduct_1') }}</p>
      <p>&emsp;&emsp;{{ t('introduct_2') }}</p>

    </div>

    <HorizonTimeLine
      :timelineData="timelineData"
      :activeYear="2021"
    />
  </div>

</template>



<script>
import { useI18n } from "vue-i18n";
import HorizonTimeLine from "../components/HorizonTimeLine.vue";

export default {
  components: {
    HorizonTimeLine,
  },

  setup() {
    const { t } = useI18n({
      messages: {
        "zh-CN": {
          aboutUs: "关于我们",
          introduct_1:
            "珠海强源体育用品有限公司是公安部批准的第一批民用枪弹定点生产企业、国家级高新技术企业、珠海市优秀企业，中国文教体育用品协会理事单位、广东省射击协会会长单位，2008年荣获北京奥运会特殊贡献奖。公司成立于1994年，坐落于珠海市斗门区白蕉科技工业园，占地面积50余亩，自主拥有多栋独立厂房和现代化办公楼，建筑面积近两万平方，是一家集自主研发、生产、销售于一体的公司。公司主营产品为QYS高精度气枪弹，其品种分为比赛级平头气枪弹，民用级圆头气枪弹和尖头气枪弹。",
          introduct_2:
            "QYS品牌运动气枪弹的制造技术、生产设备及生产工艺是由公司创始人，现任QYS董事长兼总经理付强先生引领设计研发。由于设计思路独特缜密，制造技术、工艺自成一体，造就了QYS品牌气枪弹的优良品质。公司一直秉承质量是企业生命的方针政策，大力培养技术团队使技术不断完善创新并且精益求精。QYS品牌运动气枪弹自1994年正式投放市场以来，凭借着世界一流的精准度和精美的外观优势仅用了4年时间(至1998年)就占据中国99%的市场份额。近年来由于顶级的质量和良好的口碑使QYS气枪弹得到世界各国射击用户的一致认可和喜爱，产品出口到世界多达50多个国家和地区，并且每年仍以百分之百左右的速度在不断增长和壮大。",
        },
        "en-US": {
          aboutUs: "About Us",
          introduct: "",
        },
      },
    });

    const timelineData = [
      {
        year: 2022,
      },
      {
        year: 2021,
      },
      {
        year: 2020,
      },
      {
        year: 2019,
      },
      {
        year: 2018,
      },
      {
        year: 2017,
      },
      {
        year: 2016,
      },
      {
        year: 2015,
      },
      {
        year: 2014,
      },
      {
        year: 2013,
      },
    ];

    return {
      t,
      timelineData,
    };
  },
};
</script>



<style>
@media (min-width: 70vh) {
  .about_us {
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
.title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 33px;
}
</style>