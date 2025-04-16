var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCI_1 = new ol.format.GeoJSON();
var features_EPCI_1 = format_EPCI_1.readFeatures(json_EPCI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_1.addFeatures(features_EPCI_1);
var lyr_EPCI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCI_1, 
                style: style_EPCI_1,
                popuplayertitle: 'EPCI',
                interactive: true,
                title: '<img src="styles/legend/EPCI_1.png" /> EPCI'
            });
var format_Commune_2 = new ol.format.GeoJSON();
var features_Commune_2 = format_Commune_2.readFeatures(json_Commune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_2.addFeatures(features_Commune_2);
var lyr_Commune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_2, 
                style: style_Commune_2,
                popuplayertitle: 'Commune',
                interactive: true,
                title: '<img src="styles/legend/Commune_2.png" /> Commune'
            });
var format_Mdianedurevenudisponibleparmnage_3 = new ol.format.GeoJSON();
var features_Mdianedurevenudisponibleparmnage_3 = format_Mdianedurevenudisponibleparmnage_3.readFeatures(json_Mdianedurevenudisponibleparmnage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdianedurevenudisponibleparmnage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdianedurevenudisponibleparmnage_3.addFeatures(features_Mdianedurevenudisponibleparmnage_3);
var lyr_Mdianedurevenudisponibleparmnage_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdianedurevenudisponibleparmnage_3, 
                style: style_Mdianedurevenudisponibleparmnage_3,
                popuplayertitle: 'Médiane du revenu disponible par ménage',
                interactive: true,
    title: 'Médiane du revenu disponible par ménage<br />\
    <img src="styles/legend/Mdianedurevenudisponibleparmnage_3_0.png" /> 18330 - 22630<br />\
    <img src="styles/legend/Mdianedurevenudisponibleparmnage_3_1.png" /> 22630 - 24750<br />\
    <img src="styles/legend/Mdianedurevenudisponibleparmnage_3_2.png" /> 24750 - 26800<br />\
    <img src="styles/legend/Mdianedurevenudisponibleparmnage_3_3.png" /> 26800 - 31560<br />' });
var format_Commercealimentaire_4 = new ol.format.GeoJSON();
var features_Commercealimentaire_4 = format_Commercealimentaire_4.readFeatures(json_Commercealimentaire_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercealimentaire_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercealimentaire_4.addFeatures(features_Commercealimentaire_4);
cluster_Commercealimentaire_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Commercealimentaire_4
});
var lyr_Commercealimentaire_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Commercealimentaire_4, 
                style: style_Commercealimentaire_4,
                popuplayertitle: ' Commerce alimentaire',
                interactive: true,
                title: '<img src="styles/legend/Commercealimentaire_4.png" />  Commerce alimentaire'
            });
var format_Ramassequotidienne_BA73_5 = new ol.format.GeoJSON();
var features_Ramassequotidienne_BA73_5 = format_Ramassequotidienne_BA73_5.readFeatures(json_Ramassequotidienne_BA73_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ramassequotidienne_BA73_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ramassequotidienne_BA73_5.addFeatures(features_Ramassequotidienne_BA73_5);
var lyr_Ramassequotidienne_BA73_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ramassequotidienne_BA73_5, 
                style: style_Ramassequotidienne_BA73_5,
                popuplayertitle: 'Ramasse quotidienne_BA73',
                interactive: true,
                title: '<img src="styles/legend/Ramassequotidienne_BA73_5.png" /> Ramasse quotidienne_BA73'
            });
var format_DistributionRepas_6 = new ol.format.GeoJSON();
var features_DistributionRepas_6 = format_DistributionRepas_6.readFeatures(json_DistributionRepas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistributionRepas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistributionRepas_6.addFeatures(features_DistributionRepas_6);
var lyr_DistributionRepas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistributionRepas_6, 
                style: style_DistributionRepas_6,
                popuplayertitle: 'Distribution Repas',
                interactive: true,
                title: '<img src="styles/legend/DistributionRepas_6.png" /> Distribution Repas'
            });
var format_DistributionColis_7 = new ol.format.GeoJSON();
var features_DistributionColis_7 = format_DistributionColis_7.readFeatures(json_DistributionColis_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistributionColis_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistributionColis_7.addFeatures(features_DistributionColis_7);
var lyr_DistributionColis_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistributionColis_7, 
                style: style_DistributionColis_7,
                popuplayertitle: 'Distribution Colis',
                interactive: true,
                title: '<img src="styles/legend/DistributionColis_7.png" /> Distribution Colis'
            });
var format_Epiceriesociale_8 = new ol.format.GeoJSON();
var features_Epiceriesociale_8 = format_Epiceriesociale_8.readFeatures(json_Epiceriesociale_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Epiceriesociale_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epiceriesociale_8.addFeatures(features_Epiceriesociale_8);
var lyr_Epiceriesociale_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epiceriesociale_8, 
                style: style_Epiceriesociale_8,
                popuplayertitle: 'Epicerie sociale',
                interactive: true,
                title: '<img src="styles/legend/Epiceriesociale_8.png" /> Epicerie sociale'
            });
var format_BanquesAlimentaires_AURA_9 = new ol.format.GeoJSON();
var features_BanquesAlimentaires_AURA_9 = format_BanquesAlimentaires_AURA_9.readFeatures(json_BanquesAlimentaires_AURA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanquesAlimentaires_AURA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanquesAlimentaires_AURA_9.addFeatures(features_BanquesAlimentaires_AURA_9);
var lyr_BanquesAlimentaires_AURA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanquesAlimentaires_AURA_9, 
                style: style_BanquesAlimentaires_AURA_9,
                popuplayertitle: 'Banques Alimentaires _ AURA',
                interactive: true,
                title: '<img src="styles/legend/BanquesAlimentaires_AURA_9.png" /> Banques Alimentaires _ AURA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EPCI_1.setVisible(true);lyr_Commune_2.setVisible(true);lyr_Mdianedurevenudisponibleparmnage_3.setVisible(false);lyr_Commercealimentaire_4.setVisible(false);lyr_Ramassequotidienne_BA73_5.setVisible(true);lyr_DistributionRepas_6.setVisible(true);lyr_DistributionColis_7.setVisible(true);lyr_Epiceriesociale_8.setVisible(true);lyr_BanquesAlimentaires_AURA_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EPCI_1,lyr_Commune_2,lyr_Mdianedurevenudisponibleparmnage_3,lyr_Commercealimentaire_4,lyr_Ramassequotidienne_BA73_5,lyr_DistributionRepas_6,lyr_DistributionColis_7,lyr_Epiceriesociale_8,lyr_BanquesAlimentaires_AURA_9];
lyr_EPCI_1.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'CODE_DEPT': 'CODE_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_COM': 'INSEE_COM', 'POPULATION': 'Population', 'SOCIALE': 'EPCI', });
lyr_Commune_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Nom', 'Population au dernier recensement 2021': 'Population communale', });
lyr_Mdianedurevenudisponibleparmnage_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Nom', 'Médiane du revenu disponible_ménageMédiane du revenu disponible par ménage_2020': 'Médiane du revenu disponible_ménageMédiane du revenu disponible par ménage_2020', });
lyr_Commercealimentaire_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'shop': 'Type', 'name': 'Nom', 'source': 'source', 'osm_versio': 'osm_versio', 'osm_timest': 'osm_timest', 'osm_origin': 'osm_origin', 'osm_type': 'osm_type', });
lyr_Ramassequotidienne_BA73_5.set('fieldAliases', {'fid': 'fid', 'code fourn': 'Code', 'Fournisseu': 'Fournisseur', 'ville': 'ville', 'Adresse': 'Adresse', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_DistributionRepas_6.set('fieldAliases', {'fid': 'fid', 'Associatio': 'Association', 'Adresse de': 'Adresse', 'Ville': 'Ville', 'EPCI': 'EPCI', 'Communes d': 'Commune', 'Type d\'ass': 'Type', 'Tonnage pa': 'Tonnage annuel', 'Tonnage _1': 'Tonnage hebdomadaire', 'Personnes': 'Personnes/semaine', 'longitude': 'longitude', 'latitude': 'latitude', 'result_sco': 'result_sco', 'result_cit': 'result_cit', });
lyr_DistributionColis_7.set('fieldAliases', {'fid': 'fid', 'Associatio': 'Association ', 'Adresse de': 'Adresse', 'Ville': 'Ville', 'EPCI': 'EPCI', 'Communes d': 'Commune', 'Type d\'ass': 'Type', 'Tonnage pa': 'Tonnage annuel', 'Tonnage _1': 'Tonnage hebdomadaire', 'Personnes': 'Personnes/semaine', 'longitude': 'longitude', 'latitude': 'latitude', 'result_sco': 'result_sco', 'result_cit': 'result_cit', });
lyr_Epiceriesociale_8.set('fieldAliases', {'fid': 'fid', 'Associatio': 'Association', 'Adresse de': 'Adresse', 'Ville': 'Ville', 'EPCI': 'EPCI', 'Communes d': 'Commune', 'Type d\'ass': 'Type', 'Tonnage pa': 'Tonnage annuel', 'Tonnage _1': 'Tonnage hebdomadaire', 'Personnes': 'Personnes/semaine', 'longitude': 'longitude', 'latitude': 'latitude', 'result_sco': 'result_sco', 'result_cit': 'result_cit', });
lyr_BanquesAlimentaires_AURA_9.set('fieldAliases', {'fid': 'fid', 'Code_BA': 'Code_BA', 'Nom': 'Nom', 'adresse1': 'adresse1', 'adresse2': 'adresse2', 'CP': 'CP', 'ville': 'ville', 'Full Addre': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tél': 'Tél', });
lyr_EPCI_1.set('fieldImages', {'fid': '', 'ID_GEOFLA': 'Hidden', 'X_CHF_LIEU': 'Hidden', 'Y_CHF_LIEU': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'Z_MOYEN': 'Hidden', 'SUPERFICIE': 'Hidden', 'CODE_DEPT': 'Hidden', 'NOM_REGION': 'Hidden', 'INSEE_COM': 'Hidden', 'POPULATION': 'TextEdit', 'SOCIALE': 'TextEdit', });
lyr_Commune_2.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'Population au dernier recensement 2021': 'Range', });
lyr_Mdianedurevenudisponibleparmnage_3.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'Hidden', 'Médiane du revenu disponible_ménageMédiane du revenu disponible par ménage_2020': 'TextEdit', });
lyr_Commercealimentaire_4.set('fieldImages', {'fid': '', 'osm_id': 'Hidden', 'shop': 'TextEdit', 'name': 'TextEdit', 'source': 'Hidden', 'osm_versio': 'Hidden', 'osm_timest': 'Hidden', 'osm_origin': 'Hidden', 'osm_type': 'Hidden', });
lyr_Ramassequotidienne_BA73_5.set('fieldImages', {'fid': '', 'code fourn': 'TextEdit', 'Fournisseu': 'TextEdit', 'ville': 'Hidden', 'Adresse': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_DistributionRepas_6.set('fieldImages', {'fid': '', 'Associatio': 'TextEdit', 'Adresse de': 'TextEdit', 'Ville': 'TextEdit', 'EPCI': 'TextEdit', 'Communes d': 'TextEdit', 'Type d\'ass': 'TextEdit', 'Tonnage pa': 'TextEdit', 'Tonnage _1': 'TextEdit', 'Personnes': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', 'result_sco': 'Hidden', 'result_cit': 'Hidden', });
lyr_DistributionColis_7.set('fieldImages', {'fid': '', 'Associatio': 'TextEdit', 'Adresse de': 'TextEdit', 'Ville': 'TextEdit', 'EPCI': 'TextEdit', 'Communes d': 'TextEdit', 'Type d\'ass': 'TextEdit', 'Tonnage pa': 'TextEdit', 'Tonnage _1': 'TextEdit', 'Personnes': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', 'result_sco': 'Hidden', 'result_cit': 'Hidden', });
lyr_Epiceriesociale_8.set('fieldImages', {'fid': '', 'Associatio': 'TextEdit', 'Adresse de': 'TextEdit', 'Ville': 'TextEdit', 'EPCI': 'TextEdit', 'Communes d': 'TextEdit', 'Type d\'ass': 'TextEdit', 'Tonnage pa': 'TextEdit', 'Tonnage _1': 'TextEdit', 'Personnes': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', 'result_sco': 'Hidden', 'result_cit': 'Hidden', });
lyr_BanquesAlimentaires_AURA_9.set('fieldImages', {'fid': 'TextEdit', 'Code_BA': 'TextEdit', 'Nom': 'TextEdit', 'adresse1': 'TextEdit', 'adresse2': 'TextEdit', 'CP': 'TextEdit', 'ville': 'TextEdit', 'Full Addre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tél': 'TextEdit', });
lyr_EPCI_1.set('fieldLabels', {'fid': 'hidden field', 'POPULATION': 'header label - visible with data', 'SOCIALE': 'header label - visible with data', });
lyr_Commune_2.set('fieldLabels', {'libgeo': 'header label - visible with data', 'Population au dernier recensement 2021': 'header label - visible with data', });
lyr_Mdianedurevenudisponibleparmnage_3.set('fieldLabels', {'Médiane du revenu disponible_ménageMédiane du revenu disponible par ménage_2020': 'no label', });
lyr_Commercealimentaire_4.set('fieldLabels', {'fid': 'hidden field', 'shop': 'header label - visible with data', 'name': 'header label - visible with data', });
lyr_Ramassequotidienne_BA73_5.set('fieldLabels', {'fid': 'hidden field', 'code fourn': 'inline label - visible with data', 'Fournisseu': 'header label - visible with data', 'Adresse': 'header label - visible with data', });
lyr_DistributionRepas_6.set('fieldLabels', {'fid': 'hidden field', 'Associatio': 'header label - visible with data', 'Adresse de': 'header label - visible with data', 'Ville': 'hidden field', 'EPCI': 'hidden field', 'Communes d': 'inline label - visible with data', 'Type d\'ass': 'inline label - visible with data', 'Tonnage pa': 'inline label - visible with data', 'Tonnage _1': 'inline label - visible with data', 'Personnes': 'inline label - visible with data', });
lyr_DistributionColis_7.set('fieldLabels', {'fid': 'hidden field', 'Associatio': 'header label - visible with data', 'Adresse de': 'header label - visible with data', 'Ville': 'hidden field', 'EPCI': 'hidden field', 'Communes d': 'inline label - visible with data', 'Type d\'ass': 'inline label - visible with data', 'Tonnage pa': 'inline label - visible with data', 'Tonnage _1': 'inline label - visible with data', 'Personnes': 'inline label - visible with data', });
lyr_Epiceriesociale_8.set('fieldLabels', {'fid': 'hidden field', 'Associatio': 'header label - visible with data', 'Adresse de': 'header label - visible with data', 'Ville': 'hidden field', 'EPCI': 'hidden field', 'Communes d': 'inline label - visible with data', 'Type d\'ass': 'inline label - visible with data', 'Tonnage pa': 'inline label - visible with data', 'Tonnage _1': 'inline label - visible with data', 'Personnes': 'inline label - visible with data', });
lyr_BanquesAlimentaires_AURA_9.set('fieldLabels', {'fid': 'hidden field', 'Code_BA': 'hidden field', 'Nom': 'header label - visible with data', 'adresse1': 'hidden field', 'adresse2': 'hidden field', 'CP': 'hidden field', 'ville': 'hidden field', 'Full Addre': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Tél': 'inline label - visible with data', });
lyr_BanquesAlimentaires_AURA_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});