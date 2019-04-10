var dicOption = {
  line: [{ label: '线条', value: 'line' }, { label: '圆环', value: 'circle' }],
  fontWeight: [{ label: 'normal', value: 'normal' }, { label: 'bold', value: 'bold' }, { label: 'bolder', value: 'bolder' }, { label: 'ligter', value: 'ligter' }],
  border: [{ label: '无边框', value: '' }, { label: '内置图片', value: 'img' }, { label: '内置边框', value: 'border' }],
  textAlign: [{ label: '居中', value: 'center' }, { label: '左对齐', value: 'left' }, { label: '右对齐', value: 'right' }],
  dataType: [{ label: '静态数据', value: 0 }, { label: '动态数据', value: 1 }],
  dataList: ['map', 'iframe', 'swiper', 'flop', 'bar', 'line', 'progress', 'table', 'gauge'],
  backgroundImage: [
    '../../img/bg.png',
    'https://sugar.bce.baidu.com/static/img-templet/background-1.png'
    , 'https://sugar.bce.baidu.com/static/img-templet/background-2.png'
    , 'https://sugar.bce.baidu.com/static/img-templet/background-3.png'
    , 'https://sugar.bce.baidu.com/static/img-templet/background-g4Q9Ar2kRDRpr8yK.jpg'
    , 'https://sugar.bce.baidu.com/static/img-templet/background-88VwuczRK2Rx8iRx.jpg'
    , 'https://sugar.bce.baidu.com/static/img-templet/background-49uxqXBm2G2jQqod.jpg'
    , 'https://sugar.bce.baidu.com/static/img-templet/background-2-6dfcf39aa56ca711.jpg'
  ],
  borderList: [
    "https://sugar.bce.baidu.com/static/img-templet/border-1.png",
    "https://sugar.bce.baidu.com/static/img-templet/border-2.png",
    "../../img/border-3.png"
  ],
  colorList: ['bar', 'pie', 'line', 'gauge'],
  mapList: [{
    label: '潍坊',
    value: 0,
    list: map_weifang
  }, {
    label: '香港',
    value: 1,
    list: map_hk
  }],
  mapType: [{
    label: '原生',
    value: 0
  }, {
    label: '自绘',
    value: 1
  }],
  target: [{ label: '本窗口', value: '_self' }, { label: '新窗口', value: '_blank', }],
  swiperType: [{ label: '普通', value: '' }, { label: '立体', value: 'card' }],
  swiperIndicator: [{ label: '外部', value: 'indicator' }, { label: '不显示', value: 'none' }],
  format: [{ label: '日期', value: 'yyyy-MM-dd' }, { label: '日期+时分', value: 'yyyy-MM-dd hh:mm' }, { label: '日期+时分秒', value: 'yyyy-MM-dd hh:mm:ss' }, { label: '日期(无年)', value: 'MM-dd' }, { label: '时分', value: 'hh:mm' }, { label: '时分秒', value: 'hh:mm:ss' }]
}