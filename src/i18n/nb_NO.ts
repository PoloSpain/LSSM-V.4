const modules = {
    appstore: {
        save: 'Lagre',
        reset: 'Tilbakestill',
        noMapkit:
            'Denne utvidelsen fungerer ikke med karttypen "MapKit" grunnet begrensninger på MapKit!',
        dev: 'Denne utvidelsen er fortsatt under utvikling, aktivering kan medføre feil.',
        closeWarning: {
            title: 'Ulagrede endringer',
            text: 'Du har gjort endringer som ikke har blitt lagret.',
            close: 'Lukk vindu',
        },
    },
    settings: {
        name: 'Innstillinger',
        save: 'Lagre',
        discard: 'Forkast endringer',
        reset: 'Resett',
        export: 'Eksporter',
        import: 'Importer',
        donate: 'donate voluntarily',
        resetWarning: {
            title: 'Tilbakestill endringer',
            text: 'Vil du virkelig tilbakestille alle innstillinger til standard?',
            close: 'Avbryt',
            total: 'Alle innstillinger',
            module: 'Kun for denne modulen',
        },
        resetWarningSetting: {
            title: 'Tilbakestill innstillinger',
            text: 'Vil du virkelig tilbakestille denne innstillingen <b>{setting}</b> for modulen <b>{module}</b> til standardverdien?',
            close: 'Avbryt',
            reset: 'Nullstille',
        },
        closeWarning: {
            title: 'Ulagrede endringer',
            text: 'Du har gjort endringer i innstillingene som ikke er lagret. Tilbakestill, fjern dem eller lagre dem for å lukke innstillinger.',
            close: 'Lukk vindu',
        },
        changeList: {
            true: 'På',
            false: 'Av',
        },
        locationSelect: {
            location: 'Velg posisjon',
            zoom: 'Velg posisjon og zoom',
            sync: 'bruk nåværende posisjon',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        Brann: {
            buildings: [1, 2, 3, 25],
            color: '#ff2d2d',
        },
        Helse: {
            buildings: [4, 5, 6, 11, 21],
            color: '#ffa500',
        },
        Politi: {
            buildings: [7, 8, 10, 13, 9],
            color: '#00ac00',
        },
        Annet: {
            buildings: [0, 12, 22, 23],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 10, 18, 20],
                'WaterTanker': [6, 20],
                'Special vehicles': [2, 3, 4, 6, 7, 10, 16, 17, 29, 32],
                'Boats': [19],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5, 26, 27, 28, 30, 31],
                'HEMS': [9],
                'First Responder': [0, 1],
                'Rescue Boat': [19],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Patruljebil': [8],
                'SWAT': [15, 12, 22],
                'Police Motorcycle': [14],
                'Police helicopter': [11],
                'K-9 Unit': [13],
                'Sheriff': [21],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    amount: 'Antall',
    search: 'Søk',
    alliance: 'Allianse',
    premiumNotice:
        'Denne utvidelsen utvider en premium funksjon av spillet, og er derfor kun tilgjengelig for premium brukere av Nødsentralspillet.',
    credits: 'Kreditter',
    coins: 'Mynter',
    close: 'Lukk',
    fullscreen: {
        expand: 'Aktiver fullskjerm',
        compress: 'Deaktiver fullskjerm',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Biler | Bil | Biler',
    building: 'Bygninger',
    station: 'Stasjoner | Stasjon | Stasjoner',
    distance: 'Distanse | Distanser',
    vehicleType: 'Kjøretøytype',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Innsjø',
        'Sykehus',
        'Skog',
        'Busstopp',
        'Trikkestopp',
        'Togstasjon (regional)',
        'Togstasjon (regional og langdistanse)',
        'Godsstasjon',
        'Matvarebutikk (liten)',
        'Matvarebutikk (stor)',
        'Bensinstasjon',
        'Skole',
        'Museum',
        'Kjøpesenter',
        'Bilverksted',
        'Motorveiavkjøring',
        'Julemarked',
        'Lagerbygning',
        'Nattklubb',
        'Stadion',
        'Gård',
        'Kontorbygning',
        'Basseng',
        'Planovergang',
        'Teater',
        'Tivoli',
        'Elv',
        'Liten flyplass (flystripe)',
        'Stor flyplass (flystripe)',
        'Flyplassterminal',
        'Bank',
        'Varehus',
        'Bro',
        'Gatekjøkken',
        'Cargohavn',
        'Gjenvinningssenter',
        'Skyskraper',
        'Cruisehavn',
        'Marina',
        'Planovergang (Fotgjengere)',
        'Tunnel',
        'Kaldt varehus',
        'Kraftverk',
        'Fabrikk',
        'Skrotplass',
        'Metrostasjon',
        'Liten kjemisk lagringstank',
        'Stor kjemisk lagringstank',
        'Hotell',
        'Bar',
        'Avfallsdeponi',
        'Parkeringshus',
        'Silo',
        'Lyskryss',
        'Snekkerverksted',
        'Restaurant',
        'Sentrum',
        'Ås',
        'Brygge',
        'Lekeplassutstyr',
        'Motocrossbane',
        'Omsorgsbolig',
        'Atomkraftverk',
        'Felt',
        'Kratt',
        'Lyng',
        'Hytte',
        'Campingplass',
        'Klippe',
        'Sagbruk',
        'Propan lager',
        'Kirke',
        'Fengsel',
        'Strand',
        'Demning',
        'Bibliotek',
        'Akvarium',
        'Badstue',
        'Vaskeri',
        'Rørledning',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [306, 307],
    ranks: {
        missionchief: {
            0: 'Brannaspirant',
            200: 'Brannkonstabel',
            10_000: 'Underbrannmester',
            100_000: 'Brannmester',
            1_000_000: 'Overbrannmester',
            5_000_000: 'Brigadeleder',
            20_000_000: 'Brigadesjef',
            50_000_000: 'Seksjonsleder',
            1_000_000_000: 'Avdelingsleder',
            2_000_000_000: 'Varabrannsjef',
            5_000_000_000: 'Brannsjef',
        },
        policechief: {
            0: 'Politistudent',
            200: 'Politibetjent 1',
            10_000: 'Politibetjent 2',
            100_000: 'Politibetjent 3',
            1_000_000: 'Politiførstebetjent',
            5_000_000: 'Politioverbetjent',
            20_000_000: 'Politistasjonssjef',
            50_000_000: 'Politifullmektig',
            1_000_000_000: 'Politiadvokat',
            2_000_000_000: 'Politimester',
            5_000_000_000: 'Politidirektør',
        },
    },
};
