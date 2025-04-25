var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TauxdepauvretEPCI2020_1 = new ol.format.GeoJSON();
var features_TauxdepauvretEPCI2020_1 = format_TauxdepauvretEPCI2020_1.readFeatures(json_TauxdepauvretEPCI2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TauxdepauvretEPCI2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TauxdepauvretEPCI2020_1.addFeatures(features_TauxdepauvretEPCI2020_1);
var lyr_TauxdepauvretEPCI2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TauxdepauvretEPCI2020_1, 
                style: style_TauxdepauvretEPCI2020_1,
                popuplayertitle: 'Taux de pauvreté - EPCI (2020)',
                interactive: true,
    title: 'Taux de pauvreté - EPCI (2020)<br />\
    <img src="styles/legend/TauxdepauvretEPCI2020_1_0.png" /> 6,7 - 8,1<br />\
    <img src="styles/legend/TauxdepauvretEPCI2020_1_1.png" /> 8,1 - 9,7<br />\
    <img src="styles/legend/TauxdepauvretEPCI2020_1_2.png" /> 9,7 - 12<br />\
    <img src="styles/legend/TauxdepauvretEPCI2020_1_3.png" /> 12 - 15,4<br />' });
var format_EPCI_2 = new ol.format.GeoJSON();
var features_EPCI_2 = format_EPCI_2.readFeatures(json_EPCI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_2.addFeatures(features_EPCI_2);
var lyr_EPCI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCI_2, 
                style: style_EPCI_2,
                popuplayertitle: 'EPCI',
                interactive: true,
                title: '<img src="styles/legend/EPCI_2.png" /> EPCI'
            });
var format_Communeavecassociationdaidealimentaire_3 = new ol.format.GeoJSON();
var features_Communeavecassociationdaidealimentaire_3 = format_Communeavecassociationdaidealimentaire_3.readFeatures(json_Communeavecassociationdaidealimentaire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communeavecassociationdaidealimentaire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communeavecassociationdaidealimentaire_3.addFeatures(features_Communeavecassociationdaidealimentaire_3);
var lyr_Communeavecassociationdaidealimentaire_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communeavecassociationdaidealimentaire_3, 
                style: style_Communeavecassociationdaidealimentaire_3,
                popuplayertitle: 'Commune avec association d\'aide alimentaire',
                interactive: false,
                title: '<img src="styles/legend/Communeavecassociationdaidealimentaire_3.png" /> Commune avec association d\'aide alimentaire'
            });
var format_Commune_4 = new ol.format.GeoJSON();
var features_Commune_4 = format_Commune_4.readFeatures(json_Commune_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_4.addFeatures(features_Commune_4);
var lyr_Commune_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_4, 
                style: style_Commune_4,
                popuplayertitle: 'Commune',
                interactive: true,
                title: '<img src="styles/legend/Commune_4.png" /> Commune'
            });
var format_Commercealimentaire_5 = new ol.format.GeoJSON();
var features_Commercealimentaire_5 = format_Commercealimentaire_5.readFeatures(json_Commercealimentaire_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercealimentaire_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercealimentaire_5.addFeatures(features_Commercealimentaire_5);
cluster_Commercealimentaire_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Commercealimentaire_5
});
var lyr_Commercealimentaire_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Commercealimentaire_5, 
                style: style_Commercealimentaire_5,
                popuplayertitle: 'Commerce alimentaire',
                interactive: true,
                title: '<img src="styles/legend/Commercealimentaire_5.png" /> Commerce alimentaire'
            });
var format_RestoduCoeur_6 = new ol.format.GeoJSON();
var features_RestoduCoeur_6 = format_RestoduCoeur_6.readFeatures(json_RestoduCoeur_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestoduCoeur_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestoduCoeur_6.addFeatures(features_RestoduCoeur_6);
var lyr_RestoduCoeur_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestoduCoeur_6, 
                style: style_RestoduCoeur_6,
                popuplayertitle: 'Resto du Coeur',
                interactive: true,
                title: '<img src="styles/legend/RestoduCoeur_6.png" /> Resto du Coeur'
            });
var format_SecoursPopulaire_7 = new ol.format.GeoJSON();
var features_SecoursPopulaire_7 = format_SecoursPopulaire_7.readFeatures(json_SecoursPopulaire_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecoursPopulaire_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecoursPopulaire_7.addFeatures(features_SecoursPopulaire_7);
var lyr_SecoursPopulaire_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecoursPopulaire_7, 
                style: style_SecoursPopulaire_7,
                popuplayertitle: 'Secours Populaire',
                interactive: true,
                title: '<img src="styles/legend/SecoursPopulaire_7.png" /> Secours Populaire'
            });
var format_CroixRouge_8 = new ol.format.GeoJSON();
var features_CroixRouge_8 = format_CroixRouge_8.readFeatures(json_CroixRouge_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CroixRouge_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CroixRouge_8.addFeatures(features_CroixRouge_8);
var lyr_CroixRouge_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CroixRouge_8, 
                style: style_CroixRouge_8,
                popuplayertitle: 'Croix-Rouge',
                interactive: true,
                title: '<img src="styles/legend/CroixRouge_8.png" /> Croix-Rouge'
            });
var format_Ramassequotidienne_9 = new ol.format.GeoJSON();
var features_Ramassequotidienne_9 = format_Ramassequotidienne_9.readFeatures(json_Ramassequotidienne_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ramassequotidienne_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ramassequotidienne_9.addFeatures(features_Ramassequotidienne_9);
var lyr_Ramassequotidienne_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ramassequotidienne_9, 
                style: style_Ramassequotidienne_9,
                popuplayertitle: 'Ramasse quotidienne',
                interactive: true,
                title: '<img src="styles/legend/Ramassequotidienne_9.png" /> Ramasse quotidienne'
            });
var format_DistributionColis_10 = new ol.format.GeoJSON();
var features_DistributionColis_10 = format_DistributionColis_10.readFeatures(json_DistributionColis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistributionColis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistributionColis_10.addFeatures(features_DistributionColis_10);
var lyr_DistributionColis_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistributionColis_10, 
                style: style_DistributionColis_10,
                popuplayertitle: 'Distribution Colis',
                interactive: true,
                title: '<img src="styles/legend/DistributionColis_10.png" /> Distribution Colis'
            });
var format_DistributionRepas_11 = new ol.format.GeoJSON();
var features_DistributionRepas_11 = format_DistributionRepas_11.readFeatures(json_DistributionRepas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistributionRepas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistributionRepas_11.addFeatures(features_DistributionRepas_11);
var lyr_DistributionRepas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistributionRepas_11, 
                style: style_DistributionRepas_11,
                popuplayertitle: 'Distribution Repas',
                interactive: true,
                title: '<img src="styles/legend/DistributionRepas_11.png" /> Distribution Repas'
            });
var format_Epiceriesociale_12 = new ol.format.GeoJSON();
var features_Epiceriesociale_12 = format_Epiceriesociale_12.readFeatures(json_Epiceriesociale_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Epiceriesociale_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Epiceriesociale_12.addFeatures(features_Epiceriesociale_12);
var lyr_Epiceriesociale_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Epiceriesociale_12, 
                style: style_Epiceriesociale_12,
                popuplayertitle: 'Epicerie sociale',
                interactive: true,
                title: '<img src="styles/legend/Epiceriesociale_12.png" /> Epicerie sociale'
            });
var format_BanquesAlimentaires_13 = new ol.format.GeoJSON();
var features_BanquesAlimentaires_13 = format_BanquesAlimentaires_13.readFeatures(json_BanquesAlimentaires_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanquesAlimentaires_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanquesAlimentaires_13.addFeatures(features_BanquesAlimentaires_13);
var lyr_BanquesAlimentaires_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanquesAlimentaires_13, 
                style: style_BanquesAlimentaires_13,
                popuplayertitle: 'Banques Alimentaires',
                interactive: true,
                title: '<img src="styles/legend/BanquesAlimentaires_13.png" /> Banques Alimentaires'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TauxdepauvretEPCI2020_1.setVisible(false);lyr_EPCI_2.setVisible(true);lyr_Communeavecassociationdaidealimentaire_3.setVisible(true);lyr_Commune_4.setVisible(true);lyr_Commercealimentaire_5.setVisible(false);lyr_RestoduCoeur_6.setVisible(false);lyr_SecoursPopulaire_7.setVisible(false);lyr_CroixRouge_8.setVisible(false);lyr_Ramassequotidienne_9.setVisible(false);lyr_DistributionColis_10.setVisible(true);lyr_DistributionRepas_11.setVisible(true);lyr_Epiceriesociale_12.setVisible(true);lyr_BanquesAlimentaires_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TauxdepauvretEPCI2020_1,lyr_EPCI_2,lyr_Communeavecassociationdaidealimentaire_3,lyr_Commune_4,lyr_Commercealimentaire_5,lyr_RestoduCoeur_6,lyr_SecoursPopulaire_7,lyr_CroixRouge_8,lyr_Ramassequotidienne_9,lyr_DistributionColis_10,lyr_DistributionRepas_11,lyr_Epiceriesociale_12,lyr_BanquesAlimentaires_13];
lyr_TauxdepauvretEPCI2020_1.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'CODE_DEPT': 'CODE_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_COM': 'INSEE_COM', 'POPULATION': 'POPULATION', 'SOCIALE': 'SOCIALE', 'Libellé': 'Libellé', 'Taux de pa': 'Taux de pauvreté (en %)', });
lyr_EPCI_2.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'CODE_DEPT': 'CODE_DEPT', 'NOM_REGION': 'NOM_REGION', 'INSEE_COM': 'INSEE_COM', 'POPULATION': 'Population', 'SOCIALE': 'EPCI', 'Libellé': 'Libellé', });
lyr_Communeavecassociationdaidealimentaire_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'Population au dernier recensement 2021': 'Population au dernier recensement 2021', });
lyr_Commune_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Nom', 'Population au dernier recensement 2021': 'Population communale', });
lyr_Commercealimentaire_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'shop': 'Type', 'name': 'Nom', 'source': 'source', 'osm_versio': 'osm_versio', 'osm_timest': 'osm_timest', 'osm_origin': 'osm_origin', 'osm_type': 'osm_type', });
lyr_RestoduCoeur_6.set('fieldAliases', {'fid': 'fid', 'Resto du C': 'Resto du Coeur', 'Adresse': 'Adresse', 'Commune': 'Commune', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SecoursPopulaire_7.set('fieldAliases', {'Nom': 'Nom', 'Adresse': 'Adresse', 'Commune': 'Commune', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Site Inter': 'Site', });
lyr_CroixRouge_8.set('fieldAliases', {'Croix-Roug': 'Croix-Roug', 'Adresse': 'Adresse', 'Commune': 'Commune', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Ramassequotidienne_9.set('fieldAliases', {'fid': 'fid', 'code fourn': 'Code', 'Fournisseu': 'Fournisseur', 'ville': 'ville', 'Adresse': 'Adresse', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_DistributionColis_10.set('fieldAliases', {'fid': 'fid', 'Associatio': 'Association ', 'Adresse de': 'Adresse', 'Ville': 'Ville', 'EPCI': 'EPCI', 'Communes d': 'Commune', 'Type d\'ass': 'Type', 'Tonnage pa': 'Tonnage annuel', 'Tonnage _1': 'Tonnage hebdomadaire', 'Personnes': 'Personnes/semaine', 'longitude': 'longitude', 'latitude': 'latitude', 'result_sco': 'result_sco', 'result_cit': 'result_cit', });
lyr_DistributionRepas_11.set('fieldAliases', {'fid': 'fid', 'Asso': 'Association', 'Adresse': 'Adresse', 'Ville': 'Ville', 'EPCI': 'EPCI', 'Commune': 'Commune', 'Type': 'Type', 'Tonnagea': 'Tonnage annuel', 'Tonnageh': 'Tonnage hebdomadaire', 'Personnesh': 'Personnes/semaine', 'longitude': 'longitude', 'latitude': 'latitude', 'resultsco': 'resultsco', 'resultcit': 'resultcit', });
lyr_Epiceriesociale_12.set('fieldAliases', {'fid': 'fid', 'Asso': 'Association', 'Adresse': 'Adresse', 'Ville': 'Ville', 'EPCI': 'EPCI', 'Commune': 'Commune', 'Type': 'Type', 'Tonnagea': 'Tonnagea', 'Tonnageh': 'Tonnageh', 'Personnesh': 'Personnes', 'longitude': 'longitude', 'latitude': 'latitude', 'resultsco': 'resultsco', 'resultcit': 'resultcit', });
lyr_BanquesAlimentaires_13.set('fieldAliases', {'fid': 'fid', 'Code_BA': 'Code_BA', 'Nom': 'Nom', 'adresse1': 'adresse1', 'adresse2': 'adresse2', 'CP': 'CP', 'ville': 'ville', 'Full Addre': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Tél': 'Tél', });
lyr_TauxdepauvretEPCI2020_1.set('fieldImages', {'fid': 'Hidden', 'ID_GEOFLA': 'Hidden', 'X_CHF_LIEU': 'Hidden', 'Y_CHF_LIEU': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'Z_MOYEN': 'Hidden', 'SUPERFICIE': 'Hidden', 'CODE_DEPT': 'Hidden', 'NOM_REGION': 'Hidden', 'INSEE_COM': 'Hidden', 'POPULATION': 'Hidden', 'SOCIALE': 'Hidden', 'Libellé': 'Hidden', 'Taux de pa': 'TextEdit', });
lyr_EPCI_2.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'Hidden', 'X_CHF_LIEU': 'Hidden', 'Y_CHF_LIEU': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'Z_MOYEN': 'Hidden', 'SUPERFICIE': 'Hidden', 'CODE_DEPT': 'Hidden', 'NOM_REGION': 'Hidden', 'INSEE_COM': 'Hidden', 'POPULATION': 'TextEdit', 'SOCIALE': 'TextEdit', 'Libellé': 'TextEdit', });
lyr_Communeavecassociationdaidealimentaire_3.set('fieldImages', {'fid': '', 'id': '', 'codgeo': '', 'dep': '', 'reg': '', 'xcl2154': '', 'ycl2154': '', 'libgeo': '', 'Population au dernier recensement 2021': '', });
lyr_Commune_4.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'codgeo': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'xcl2154': 'Hidden', 'ycl2154': 'Hidden', 'libgeo': 'TextEdit', 'Population au dernier recensement 2021': 'Range', });
lyr_Commercealimentaire_5.set('fieldImages', {'fid': '', 'osm_id': 'Hidden', 'shop': 'TextEdit', 'name': 'TextEdit', 'source': 'Hidden', 'osm_versio': 'Hidden', 'osm_timest': 'Hidden', 'osm_origin': 'Hidden', 'osm_type': 'Hidden', });
lyr_RestoduCoeur_6.set('fieldImages', {'fid': 'Hidden', 'Resto du C': 'TextEdit', 'Adresse': 'TextEdit', 'Commune': 'Hidden', 'Full Addre': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_SecoursPopulaire_7.set('fieldImages', {'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'Commune': 'Hidden', 'Full Addre': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Site Inter': 'TextEdit', });
lyr_CroixRouge_8.set('fieldImages', {'Croix-Roug': '', 'Adresse': '', 'Commune': '', 'Full Addre': '', 'Latitude': '', 'Longitude': '', });
lyr_Ramassequotidienne_9.set('fieldImages', {'fid': '', 'code fourn': 'TextEdit', 'Fournisseu': 'TextEdit', 'ville': 'Hidden', 'Adresse': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', });
lyr_DistributionColis_10.set('fieldImages', {'fid': '', 'Associatio': 'TextEdit', 'Adresse de': 'TextEdit', 'Ville': 'TextEdit', 'EPCI': 'TextEdit', 'Communes d': 'TextEdit', 'Type d\'ass': 'TextEdit', 'Tonnage pa': 'TextEdit', 'Tonnage _1': 'TextEdit', 'Personnes': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', 'result_sco': 'Hidden', 'result_cit': 'Hidden', });
lyr_DistributionRepas_11.set('fieldImages', {'fid': 'TextEdit', 'Asso': 'TextEdit', 'Adresse': 'TextEdit', 'Ville': 'TextEdit', 'EPCI': 'TextEdit', 'Commune': 'TextEdit', 'Type': 'TextEdit', 'Tonnagea': 'TextEdit', 'Tonnageh': 'TextEdit', 'Personnesh': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', 'resultsco': 'TextEdit', 'resultcit': 'TextEdit', });
lyr_Epiceriesociale_12.set('fieldImages', {'fid': 'TextEdit', 'Asso': 'TextEdit', 'Adresse': 'TextEdit', 'Ville': 'TextEdit', 'EPCI': 'TextEdit', 'Commune': 'TextEdit', 'Type': 'TextEdit', 'Tonnagea': 'TextEdit', 'Tonnageh': 'TextEdit', 'Personnesh': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', 'resultsco': 'TextEdit', 'resultcit': 'TextEdit', });
lyr_BanquesAlimentaires_13.set('fieldImages', {'fid': 'TextEdit', 'Code_BA': 'TextEdit', 'Nom': 'TextEdit', 'adresse1': 'TextEdit', 'adresse2': 'TextEdit', 'CP': 'TextEdit', 'ville': 'TextEdit', 'Full Addre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Tél': 'TextEdit', });
lyr_TauxdepauvretEPCI2020_1.set('fieldLabels', {'Taux de pa': 'inline label - visible with data', });
lyr_EPCI_2.set('fieldLabels', {'fid': 'hidden field', 'POPULATION': 'header label - visible with data', 'SOCIALE': 'header label - visible with data', 'Libellé': 'hidden field', });
lyr_Communeavecassociationdaidealimentaire_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codgeo': 'no label', 'dep': 'no label', 'reg': 'no label', 'xcl2154': 'no label', 'ycl2154': 'no label', 'libgeo': 'no label', 'Population au dernier recensement 2021': 'no label', });
lyr_Commune_4.set('fieldLabels', {'libgeo': 'header label - visible with data', 'Population au dernier recensement 2021': 'header label - visible with data', });
lyr_Commercealimentaire_5.set('fieldLabels', {'fid': 'hidden field', 'shop': 'header label - visible with data', 'name': 'header label - visible with data', });
lyr_RestoduCoeur_6.set('fieldLabels', {'Resto du C': 'no label', 'Adresse': 'header label - visible with data', });
lyr_SecoursPopulaire_7.set('fieldLabels', {'Nom': 'no label', 'Adresse': 'header label - visible with data', 'Site Inter': 'header label - visible with data', });
lyr_CroixRouge_8.set('fieldLabels', {'Croix-Roug': 'no label', 'Adresse': 'header label - visible with data', 'Commune': 'hidden field', 'Full Addre': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Ramassequotidienne_9.set('fieldLabels', {'fid': 'hidden field', 'code fourn': 'inline label - visible with data', 'Fournisseu': 'header label - visible with data', 'Adresse': 'header label - visible with data', });
lyr_DistributionColis_10.set('fieldLabels', {'fid': 'hidden field', 'Associatio': 'header label - visible with data', 'Adresse de': 'header label - visible with data', 'Ville': 'hidden field', 'EPCI': 'hidden field', 'Communes d': 'inline label - visible with data', 'Type d\'ass': 'inline label - visible with data', 'Tonnage pa': 'inline label - visible with data', 'Tonnage _1': 'inline label - visible with data', 'Personnes': 'inline label - visible with data', });
lyr_DistributionRepas_11.set('fieldLabels', {'fid': 'hidden field', 'Asso': 'no label', 'Adresse': 'no label', 'Ville': 'hidden field', 'EPCI': 'hidden field', 'Commune': 'no label', 'Type': 'no label', 'Tonnagea': 'no label', 'Tonnageh': 'no label', 'Personnesh': 'no label', 'resultsco': 'no label', 'resultcit': 'no label', });
lyr_Epiceriesociale_12.set('fieldLabels', {'fid': 'hidden field', 'Asso': 'no label', 'Adresse': 'no label', 'Ville': 'hidden field', 'EPCI': 'hidden field', 'Commune': 'no label', 'Type': 'no label', 'Tonnagea': 'no label', 'Tonnageh': 'no label', 'Personnesh': 'no label', 'resultsco': 'no label', 'resultcit': 'no label', });
lyr_BanquesAlimentaires_13.set('fieldLabels', {'fid': 'hidden field', 'Code_BA': 'hidden field', 'Nom': 'header label - visible with data', 'adresse1': 'hidden field', 'adresse2': 'hidden field', 'CP': 'hidden field', 'ville': 'hidden field', 'Full Addre': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Tél': 'inline label - visible with data', });
lyr_BanquesAlimentaires_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});