ol.proj.proj4.register(proj4);
//ol.proj.get("OGC:CRS84").setExtent([35.665698, 32.653959, 35.681993, 32.657865]);
var wms_layers = [];

var lyr__0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'مرحبا<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3969947.643155, 3849025.808538, 3972723.723495, 3850812.482318]
        })
    });
var format_ff_1 = new ol.format.GeoJSON();
var features_ff_1 = format_ff_1.readFeatures(json_ff_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'OGC:CRS84'});
var jsonSource_ff_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ff_1.addFeatures(features_ff_1);
var lyr_ff_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ff_1, 
                style: style_ff_1,
                popuplayertitle: 'ff',
                interactive: true,
                title: '<img src="styles/legend/ff_1.png" /> ff'
            });

lyr__0.setVisible(true);lyr_ff_1.setVisible(true);
var layersList = [lyr__0,lyr_ff_1];
lyr_ff_1.set('fieldAliases', {'Number': 'Number', 'Name_EN': 'Name_EN', 'Name_AR': 'Name_AR', 'Type': 'Type', 'Latitude_Y': 'Latitude_Y', 'Longitude_': 'Longitude_', 'X_Y': 'X_Y', 'X_Y_X': 'X_Y_X', 'X_Y_Y': 'X_Y_Y', });
lyr_ff_1.set('fieldImages', {'Number': '', 'Name_EN': '', 'Name_AR': '', 'Type': '', 'Latitude_Y': '', 'Longitude_': '', 'X_Y': '', 'X_Y_X': '', 'X_Y_Y': '', });
lyr_ff_1.set('fieldLabels', {'Number': 'inline label - always visible', 'Name_EN': 'no label', 'Name_AR': 'inline label - always visible', 'Type': 'no label', 'Latitude_Y': 'no label', 'Longitude_': 'no label', 'X_Y': 'no label', 'X_Y_X': 'no label', 'X_Y_Y': 'no label', });
lyr_ff_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});