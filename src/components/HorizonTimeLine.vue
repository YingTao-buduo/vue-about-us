<template>
  <div class="m-timeline-wrap">
    <div class="m-time-dot">
      <div
        :class="['m-dot-box', {'active': active===item.year}]"
        @click="onClickYear(item.year)"
        v-for="(item, index) in timelineData"
        :key="index"
      >
        <p class="u-year">{{ item.year }}</p>
        <div class="m-dot">
          <div class="u-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HorizonTimeLine",
  props: {
    timelineData: {
      // 时间轴数据
      type: Array,
      default: () => {
        return [];
      },
    },
    activeYear: {
      // 初始选中年份
      type: Number,
      default: 2020,
    },
  },
  data() {
    return {
      active: this.activeYear,
    };
  },
  methods: {
    onClickYear(year) {
      if (this.active !== year) {
        this.active = year;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@themeColor: #000000;
.m-timeline-wrap {
  min-width: 1200px;
  width: 1200px;
  margin: 150px auto;
  height: 3px;
  background: #3d3d3d;
  .m-time-dot {
    display: flex;
    justify-content: space-around;
    .m-dot-box {
      cursor: pointer;
      text-align: center;
      transform: translateY(-100%+14px);
      .u-year {
        font-size: 28px;
        font-weight: 500;
        color: #333;
        transition: all 0.3s ease-in-out;
      }
      .m-dot {
        margin: 0 auto;
        margin-top: 10px;
        width: 14px;
        height: 14px;
        background: #484848;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        .u-dot {
          width: 14px;
          height: 14px;
          background: #484848;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    .m-dot-box:hover {
      .u-year {
        color: @themeColor;
      }
      .m-dot {
        .u-dot {
          background: @themeColor;
        }
      }
    }
    .active {
      .u-year {
        transform: scale(2) translateY(-18px); // 同时设置多个transform属性只需用空格间隔，执行时从后往前执行！
        color: @themeColor;
      }
      .m-dot {
        transform: scale(3);
        .u-dot {
          transform: scale(0.67);
          background: @themeColor;
        }
      }
    }
  }
}
</style>
