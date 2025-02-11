var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Naseljenamjesta_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/K.Dubica/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "naseljena_mjesta",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naseljena mjesta',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naseljenamjesta_2, 0]);
var lyr_Granicaoptine_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/K.Dubica/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "granica_opstine",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Granica opštine',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Granicaoptine_3, 0]);
var lyr_Hidrografija_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/K.Dubica/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "hidrografija",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Hidrografija',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Hidrografija_4, 0]);

lyr_OSMStandard_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_Naseljenamjesta_2.setVisible(true);lyr_Granicaoptine_3.setVisible(true);lyr_Hidrografija_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Naseljenamjesta_2,lyr_Granicaoptine_3,lyr_Hidrografija_4];
