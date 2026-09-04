var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Regions_1 = new ol.format.GeoJSON();
var features_Regions_1 = format_Regions_1.readFeatures(json_Regions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_1.addFeatures(features_Regions_1);
var lyr_Regions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_1, 
                style: style_Regions_1,
                popuplayertitle: 'Regions',
                interactive: true,
                title: '<img src="styles/legend/Regions_1.png" /> Regions'
            });
var format_Locationscores_2 = new ol.format.GeoJSON();
var features_Locationscores_2 = format_Locationscores_2.readFeatures(json_Locationscores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locationscores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locationscores_2.addFeatures(features_Locationscores_2);
var lyr_Locationscores_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locationscores_2, 
                style: style_Locationscores_2,
                popuplayertitle: 'Location scores',
                interactive: false,
    title: 'Location scores<br />\
    <img src="styles/legend/Locationscores_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Locationscores_2_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Locationscores_2_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Locationscores_2_3.png" /> 3 - 4<br />' });
var format_Activesites_3 = new ol.format.GeoJSON();
var features_Activesites_3 = format_Activesites_3.readFeatures(json_Activesites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activesites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activesites_3.addFeatures(features_Activesites_3);
var lyr_Activesites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activesites_3, 
                style: style_Activesites_3,
                popuplayertitle: 'Active sites',
                interactive: true,
                title: '<img src="styles/legend/Activesites_3.png" /> Active sites'
            });
var format_Identifiedsites_4 = new ol.format.GeoJSON();
var features_Identifiedsites_4 = format_Identifiedsites_4.readFeatures(json_Identifiedsites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Identifiedsites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identifiedsites_4.addFeatures(features_Identifiedsites_4);
var lyr_Identifiedsites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identifiedsites_4, 
                style: style_Identifiedsites_4,
                popuplayertitle: 'Identified sites',
                interactive: true,
    title: 'Identified sites<br />\
    <img src="styles/legend/Identifiedsites_4_0.png" /> 0 - 2000<br />\
    <img src="styles/legend/Identifiedsites_4_1.png" /> 2000 - 3000<br />\
    <img src="styles/legend/Identifiedsites_4_2.png" /> ≥ 3000<br />' });
var format_PlannedFastChargers_5 = new ol.format.GeoJSON();
var features_PlannedFastChargers_5 = format_PlannedFastChargers_5.readFeatures(json_PlannedFastChargers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedFastChargers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedFastChargers_5.addFeatures(features_PlannedFastChargers_5);
var lyr_PlannedFastChargers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedFastChargers_5, 
                style: style_PlannedFastChargers_5,
                popuplayertitle: 'Planned Fast Chargers',
                interactive: true,
                title: '<img src="styles/legend/PlannedFastChargers_5.png" /> Planned Fast Chargers'
            });
var format_PlannedPetrolStations_6 = new ol.format.GeoJSON();
var features_PlannedPetrolStations_6 = format_PlannedPetrolStations_6.readFeatures(json_PlannedPetrolStations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedPetrolStations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedPetrolStations_6.addFeatures(features_PlannedPetrolStations_6);
var lyr_PlannedPetrolStations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedPetrolStations_6, 
                style: style_PlannedPetrolStations_6,
                popuplayertitle: 'Planned Petrol Stations',
                interactive: true,
                title: '<img src="styles/legend/PlannedPetrolStations_6.png" /> Planned Petrol Stations'
            });
var format_PlannedSolarHubs_7 = new ol.format.GeoJSON();
var features_PlannedSolarHubs_7 = format_PlannedSolarHubs_7.readFeatures(json_PlannedSolarHubs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedSolarHubs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedSolarHubs_7.addFeatures(features_PlannedSolarHubs_7);
var lyr_PlannedSolarHubs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedSolarHubs_7, 
                style: style_PlannedSolarHubs_7,
                popuplayertitle: 'Planned Solar Hubs',
                interactive: true,
                title: '<img src="styles/legend/PlannedSolarHubs_7.png" /> Planned Solar Hubs'
            });
var format_Solarsitesgoinglive_8 = new ol.format.GeoJSON();
var features_Solarsitesgoinglive_8 = format_Solarsitesgoinglive_8.readFeatures(json_Solarsitesgoinglive_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solarsitesgoinglive_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarsitesgoinglive_8.addFeatures(features_Solarsitesgoinglive_8);
var lyr_Solarsitesgoinglive_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarsitesgoinglive_8, 
                style: style_Solarsitesgoinglive_8,
                popuplayertitle: 'Solar sites going live',
                interactive: true,
                title: '<img src="styles/legend/Solarsitesgoinglive_8.png" /> Solar sites going live'
            });
var group_Distancematrix = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Distance matrix'});
var group_Scenarion1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Scenarion 1'});
var group_Scenario2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Scenario 2'});
var group_Baselayers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Base layers'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Regions_1.setVisible(true);lyr_Locationscores_2.setVisible(true);lyr_Activesites_3.setVisible(true);lyr_Identifiedsites_4.setVisible(true);lyr_PlannedFastChargers_5.setVisible(true);lyr_PlannedPetrolStations_6.setVisible(true);lyr_PlannedSolarHubs_7.setVisible(true);lyr_Solarsitesgoinglive_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Regions_1,lyr_Locationscores_2,lyr_Activesites_3,lyr_Identifiedsites_4,lyr_PlannedFastChargers_5,lyr_PlannedPetrolStations_6,lyr_PlannedSolarHubs_7,lyr_Solarsitesgoinglive_8];
lyr_Regions_1.set('fieldAliases', {'fid': 'fid', 'adm1_name': 'adm1_name', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Bikes_con': 'Bikes concentration', 'Percentage': 'Percentage', });
lyr_Locationscores_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Activesites_3.set('fieldAliases', {'fid': 'fid', 'Sno.': 'Sno.', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', });
lyr_Identifiedsites_4.set('fieldAliases', {'No': 'No', 'Site': 'Site', 'Departemen': 'Departemen', 'Espace': 'Espace', 'Surface': 'Surface', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Contact': 'Contact', });
lyr_PlannedFastChargers_5.set('fieldAliases', {'fid': 'fid', 'Sno.': 'Sno.', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', 'id': 'id', 'Type': 'Type', 'Sites vis�': 'Sites vis�', 'Espace vis': 'Espace vis', '0bservatio': '0bservatio', 'surface au': 'surface au', 'surface de': 'surface de', 'Lat': 'Lat', 'Long': 'Long', 'X': 'X', 'Y': 'Y', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'layer': 'layer', 'path': 'path', 'Racks_cap': 'Racks_cap', });
lyr_PlannedPetrolStations_6.set('fieldAliases', {'fid': 'fid', 'Sno.': 'Sno.', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', 'id': 'id', 'Type': 'Type', 'Sites vis�': 'Sites vis�', 'Espace vis': 'Espace vis', '0bservatio': '0bservatio', 'surface au': 'surface au', 'surface de': 'surface de', 'Lat': 'Lat', 'Long': 'Long', 'X': 'X', 'Y': 'Y', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'layer': 'layer', 'path': 'path', 'Racks_cap': 'Racks_cap', });
lyr_PlannedSolarHubs_7.set('fieldAliases', {'fid': 'fid', 'Sno.': 'Sno.', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Comments': 'Comments', 'id': 'id', 'Type': 'Type', 'Sites vis�': 'Sites vis�', 'Espace vis': 'Espace vis', '0bservatio': '0bservatio', 'surface au': 'surface au', 'surface de': 'surface de', 'Lat': 'Lat', 'Long': 'Long', 'X': 'X', 'Y': 'Y', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'layer': 'layer', 'path': 'path', 'Racks_cap': 'Racks_cap', });
lyr_Solarsitesgoinglive_8.set('fieldAliases', {'fid': 'fid', 'SS ID': 'SS ID', 'SS name': 'SS name', 'District/s': 'District/s', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Type': 'Type', 'Racks_cap': 'Racks_cap', 'Floor spac': 'Floor spac', 'Roof_space': 'Roof_space', });
lyr_Regions_1.set('fieldImages', {'fid': 'TextEdit', 'adm1_name': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Bikes_con': '', 'Percentage': '', });
lyr_Locationscores_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_Activesites_3.set('fieldImages', {'fid': 'TextEdit', 'Sno.': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Identifiedsites_4.set('fieldImages', {'No': 'TextEdit', 'Site': 'TextEdit', 'Departemen': 'TextEdit', 'Espace': 'TextEdit', 'Surface': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Contact': 'TextEdit', });
lyr_PlannedFastChargers_5.set('fieldImages', {'fid': 'TextEdit', 'Sno.': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', 'id': 'TextEdit', 'Type': 'TextEdit', 'Sites vis�': 'TextEdit', 'Espace vis': 'TextEdit', '0bservatio': 'TextEdit', 'surface au': 'TextEdit', 'surface de': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Racks_cap': 'TextEdit', });
lyr_PlannedPetrolStations_6.set('fieldImages', {'fid': 'TextEdit', 'Sno.': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', 'id': 'TextEdit', 'Type': 'TextEdit', 'Sites vis�': 'TextEdit', 'Espace vis': 'TextEdit', '0bservatio': 'TextEdit', 'surface au': 'TextEdit', 'surface de': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Racks_cap': 'TextEdit', });
lyr_PlannedSolarHubs_7.set('fieldImages', {'fid': 'TextEdit', 'Sno.': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Comments': 'TextEdit', 'id': 'TextEdit', 'Type': 'TextEdit', 'Sites vis�': 'TextEdit', 'Espace vis': 'TextEdit', '0bservatio': 'TextEdit', 'surface au': 'TextEdit', 'surface de': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Racks_cap': 'TextEdit', });
lyr_Solarsitesgoinglive_8.set('fieldImages', {'fid': 'TextEdit', 'SS ID': 'TextEdit', 'SS name': 'TextEdit', 'District/s': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Type': 'TextEdit', 'Racks_cap': 'TextEdit', 'Floor spac': 'TextEdit', 'Roof_space': 'TextEdit', });
lyr_Regions_1.set('fieldLabels', {'fid': 'hidden field', 'adm1_name': 'inline label - always visible', 'area_sqkm': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Bikes_con': 'hidden field', 'Percentage': 'hidden field', });
lyr_Locationscores_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_Activesites_3.set('fieldLabels', {'fid': 'hidden field', 'Sno.': 'hidden field', 'SS ID': 'hidden field', 'SS name': 'inline label - always visible', 'District/s': 'no label', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'inline label - always visible', 'Comments': 'no label', });
lyr_Identifiedsites_4.set('fieldLabels', {'No': 'hidden field', 'Site': 'inline label - always visible', 'Departemen': 'inline label - always visible', 'Espace': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Contact': 'inline label - always visible', });
lyr_PlannedFastChargers_5.set('fieldLabels', {'fid': 'hidden field', 'Sno.': 'hidden field', 'SS ID': 'hidden field', 'SS name': 'inline label - always visible', 'District/s': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'hidden field', 'Comments': 'hidden field', 'id': 'hidden field', 'Type': 'hidden field', 'Sites vis�': 'hidden field', 'Espace vis': 'hidden field', '0bservatio': 'hidden field', 'surface au': 'hidden field', 'surface de': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Racks_cap': 'inline label - always visible', });
lyr_PlannedPetrolStations_6.set('fieldLabels', {'fid': 'hidden field', 'Sno.': 'hidden field', 'SS ID': 'hidden field', 'SS name': 'inline label - always visible', 'District/s': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'hidden field', 'Comments': 'hidden field', 'id': 'hidden field', 'Type': 'inline label - always visible', 'Sites vis�': 'hidden field', 'Espace vis': 'hidden field', '0bservatio': 'hidden field', 'surface au': 'hidden field', 'surface de': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Racks_cap': 'inline label - always visible', });
lyr_PlannedSolarHubs_7.set('fieldLabels', {'fid': 'hidden field', 'Sno.': 'hidden field', 'SS ID': 'hidden field', 'SS name': 'inline label - always visible', 'District/s': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'hidden field', 'Comments': 'hidden field', 'id': 'hidden field', 'Type': 'inline label - always visible', 'Sites vis�': 'hidden field', 'Espace vis': 'hidden field', '0bservatio': 'hidden field', 'surface au': 'hidden field', 'surface de': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'field_10': 'hidden field', 'field_11': 'hidden field', 'field_12': 'hidden field', 'field_13': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Racks_cap': 'inline label - always visible', });
lyr_Solarsitesgoinglive_8.set('fieldLabels', {'fid': 'hidden field', 'SS ID': 'hidden field', 'SS name': 'inline label - always visible', 'District/s': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Status': 'hidden field', 'Type': 'inline label - always visible', 'Racks_cap': 'inline label - always visible', 'Floor spac': 'inline label - always visible', 'Roof_space': 'inline label - always visible', });
lyr_Solarsitesgoinglive_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});