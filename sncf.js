async function launchSncfRequest(query) {
    try {
        let response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`)
            .catch((e) => alert(e));
        let data = await response.json();
        let gares = data.records.map(gare => gare.fields.gare_ut_libelle);
        return gares;
    } catch (err) {
        console.error(err);
    }
}
launchSncfRequest('Lille').then(function(gares) {
    console.log(gares);
});