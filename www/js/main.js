let map = L.map('map').setView([34.64393889245699, 135.04780108148026], 16);
/*
L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
  attribution: "<a href='https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'>Googleマップタイル</a>"
}).addTo(map);
*/
L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([34.64393889245699, 135.04780108148026]).addTo(map)
    .bindPopup('兵庫県立神戸商業高校');

L.marker([34.64327446037639, 135.0459609833342]).addTo(map)
    .bindPopup('<b>星陵台公園</b><br>遊具での遊びや、放課後に友達と集まっておしゃべりするのにぴったりです。軽いキャッチボールなどもできます。');

L.marker([34.660923068043736, 135.06386644100738]).addTo(map)
    .bindPopup('<b>垂水健康公園</b><br>広い芝生広場でのピクニックやバドミントンがおすすめ！外周コースでジョギングやウォーキングも楽しめます。');

L.marker([34.63219946681462, 135.0403049268564]).addTo(map)
    .bindPopup('<b>五色山公園</b><br>遊具で遊んだり、静かにリフレッシュするのに向いている落ち着いた公園です。');

L.marker([34.63589032020371, 135.0352025075596]).addTo(map)
    .bindPopup('<b>苔谷公園</b><br>木々が多く自然豊かです。遊歩道を散歩したり、広いスペースで鬼ごっこや軽いボール遊びをするのにおすすめです。');