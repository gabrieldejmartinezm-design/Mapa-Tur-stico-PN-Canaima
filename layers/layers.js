var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MapaTuristicoPNCanaima_2 = new ol.format.GeoJSON();
var features_MapaTuristicoPNCanaima_2 = format_MapaTuristicoPNCanaima_2.readFeatures(json_MapaTuristicoPNCanaima_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaTuristicoPNCanaima_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaTuristicoPNCanaima_2.addFeatures(features_MapaTuristicoPNCanaima_2);
var lyr_MapaTuristicoPNCanaima_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapaTuristicoPNCanaima_2, 
                style: style_MapaTuristicoPNCanaima_2,
                popuplayertitle: 'Mapa Turistico PN Canaima',
                interactive: true,
                title: '<img src="styles/legend/MapaTuristicoPNCanaima_2.png" /> Mapa Turistico PN Canaima'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_MapaTuristicoPNCanaima_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_ESRISatellite_1,lyr_MapaTuristicoPNCanaima_2];
lyr_MapaTuristicoPNCanaima_2.set('fieldAliases', {'Atractivo': 'Atractivo', 'Tipo': 'Tipo', 'Coordenada': 'Coordenada', 'UTM ( E)': 'UTM ( E)', 'UTM (N)': 'UTM (N)', 'Dirección': 'Dirección', 'Municipio': 'Municipio', 'Estado': 'Estado', 'Descripci�': 'Descripci�', 'Sector Ind': 'Sector Ind', 'Parque Nac': 'Parque Nac', 'Servicios': 'Servicios', 'Ente Regul': 'Ente Regul', 'Registro F': 'Registro F', });
lyr_MapaTuristicoPNCanaima_2.set('fieldImages', {'Atractivo': 'TextEdit', 'Tipo': 'TextEdit', 'Coordenada': 'TextEdit', 'UTM ( E)': 'TextEdit', 'UTM (N)': 'TextEdit', 'Dirección': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Descripci�': 'TextEdit', 'Sector Ind': 'TextEdit', 'Parque Nac': 'TextEdit', 'Servicios': 'TextEdit', 'Ente Regul': 'TextEdit', 'Registro F': 'ExternalResource', });
lyr_MapaTuristicoPNCanaima_2.set('fieldLabels', {'Atractivo': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coordenada': 'inline label - always visible', 'UTM ( E)': 'inline label - always visible', 'UTM (N)': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Descripci�': 'inline label - always visible', 'Sector Ind': 'inline label - always visible', 'Parque Nac': 'inline label - always visible', 'Servicios': 'inline label - visible with data', 'Ente Regul': 'inline label - visible with data', 'Registro F': 'inline label - visible with data', });
lyr_MapaTuristicoPNCanaima_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});