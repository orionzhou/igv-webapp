var igvwebConfig = {
    genomes: "https://s3.msi.umn.edu/zhoup-igv-data/genomes.json",
    trackRegistryFile: "https://s3.msi.umn.edu/zhoup-igv-data/trackRegistry.json",

    // Supply a Google client id to enable the Google file picker in the load menus.  This is optional
    //clientId: "...",
    // apiKey: "...",

    // Provide a URL shorterner function or object.   This is optional.  If not supplied
    // sharable URLs will not be shortened .
    urlShortener: {
        provider: "tinyURL"
    },


    igvConfig:
        {
            genomeList: "https://s3.msi.umn.edu/zhoup-igv-data/genomes.json",
            queryParametersSupported: true,
            showChromosomeWidget: true,
            genome: "B73v4",
            showSVGButton: false,
            tracks: [
                // TODO -- add default tracks here.  See github.com/igvteam/igv.js/wiki for details
                // {
                //     name: "CTCF - string url",
                //     type: "wig",
                //     format: "bigwig",
                //     url: "https://www.encodeproject.org/files/ENCFF563PAW/@@download/ENCFF563PAW.bigWig"
                // }
            ]
        }
}
