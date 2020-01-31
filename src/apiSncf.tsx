const fetch = require('node-fetch');

export async function SearchSNCF(query:any) {

    let responseApi = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`).catch((error:any) => console.log(error));
    let jsonResponse = await responseApi.json().catch((error:any) => {console.log(error)}
    );
    return jsonResponse.records.map(function(gare:any) {
        return gare.fields.gare_ut_libelle;

    });
}
