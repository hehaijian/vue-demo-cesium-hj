<template>
  <div class="viewer">
    <vc-viewer @ready="ready">

      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sortOrder="10">
        <vc-provider-imagery-tianditu
          :mapStyle="mapStyle"
          token="436ce7e50d27eede2f2929307e6b33c0"
        ></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        protocol: 'http',
        options: [
          {
            value: 'img_c',
            label: '全球影像地图服务(经纬度)'
          },
          {
            value: 'img_w',
            label: '全球影像地图服务(墨卡托)'
          },
          {
            value: 'vec_c',
            label: '全球矢量地图服务(经纬度)'
          },
          {
            value: 'vec_w',
            label: '全球矢量地图服务(墨卡托)'
          },
          {
            value: 'ter_c',
            label: '全球地形晕渲服务(经纬度)'
          },
          {
            value: 'ter_w',
            label: '全球地形晕渲服务(墨卡托)'
          }
        ],
        mapStyle: 'img_c',
        alpha: 1,
        brightness: 1,
        contrast: 1
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.Cesium = Cesium
        this.viewer = viewer
      }
    }
  }
</script>
