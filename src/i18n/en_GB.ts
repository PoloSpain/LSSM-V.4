const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev: 'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        appendableList: {
            unique: {
                title: 'double value',
                text: 'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset the settings',
            text: 'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text: 'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Select position',
            zoom: 'Select position and zoom',
            sync: 'use current position',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Ambulance Stations': {
            buildings: [2, 3, 5, 20, 21, 25, 32, 4],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19, 26],
            color: '#00ac00',
        },
        'Water Rescue': {
            buildings: [27, 28, 29, 30, 31],
            color: '#88ecc4',
        },
        'Other': {
            buildings: [7, 14, 22, 23, 24],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Fire Fighting Vehicles': {
            vehicles: {
                'Pumps': [0, 1, 16, 26, 17],
                'Special Vehicles': [4, 7, 14, 18, 6, 2, 39, 84],
                'Command Vehicles': [15, 3],
                'Pods and Prime Movers': [
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                ],
                'Foam Vehicles': [35, 36, 37, 38],
                'Water Rescue': [73, 74],
                'ARFF': [75, 76, 77, 78, 79, 80, 81],
            },
            color: '#ff2d2d',
        },
        'Ambulance Vehicles': {
            vehicles: {
                'Ambulances': [5, 97, 98],
                'HEMS': [9],
                'Rapid Response Vehicles': [10, 19, 20, 22, 83],
                'HART Units': [23, 27, 28, 29, 30, 31, 32, 33, 34],
                'GP': [21, 95, 96],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Car': [8],
                'ARV': [13, 56],
                'Police Helicopter': [11],
                'DSU': [12],
                'Traffic Cars': [24, 25],
                'Public Order': [51, 52, 53, 54, 55, 82],
            },
            color: '#00ac00',
        },
        'Search & Rescue': {
            vehicles: {
                'Coastguard': [57, 58, 59, 60, 62, 63],
                'Flood': [61],
                'Coastguard Helicopter': [64, 65],
                'Lifeguard': [66, 67, 68, 69, 70, 71, 72],
                'SAR': [85, 86, 87, 88, 89, 90, 91, 92, 93, 94],
            },
            color: '#88ecc4',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    coins: 'Coins',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
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
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Petrol Station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Nightclub',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Plant',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Silo',
        'Heathland',
        'Intersection with lights',
        'High Rise with Cladding',
        'Major Road Standby Point',
        'Nuclear power station',
        'Munition dump',
        'Restaurant',
        'Market place',
        'Dirt Race Track',
        'Sheltered housing scheme',
        'University',
        'Golf course',
        'Moorland',
        'Theme Park',
        'Abandoned Building',
        'Festival',
        'Allotment',
        'Container Holding Area',
        'Small Fuel Storage Tank',
        'Large Fuel Storage Tank',
        'Fuel Storage Depot',
        'Multi-Storey Car Park',
        'Low Bridge',
        'Care Home',
        'Prison',
        'Fire Station',
        'Library',
        'Estuary',
        'Harbour',
        'Beach',
        'Cliff',
        'Radio Site',
        'Windmill Park',
        'Medium Airport (Runway)',
        'Sauna',
        'Take Away Shop',
        'Launderette',
        'Pipeline',
    ],
    only_alliance_missions: [57, 74, 89],
    transfer_missions: [77, 716],
    ranks: {
        missionchief: {
            0: 'Probie',
            200: 'Firefighter',
            10_000: 'Senior Firefighter',
            100_000: 'Fire Apparatus Operator',
            1_000_000: 'Lieutenant',
            5_000_000: 'Captain',
            20_000_000: 'Staff Captain',
            50_000_000: 'Battalion Chief',
            1_000_000_000: 'Division Chief',
            2_000_000_000: 'Deputy Chief',
            5_000_000_000: 'Fire Chief',
        },
        policechief: {
            0: 'Police Community Support Officer',
            200: 'Police Constable',
            10_000: 'Sergeant',
            100_000: 'Inspector',
            1_000_000: 'Chief Inspector',
            5_000_000: 'Superintendent',
            20_000_000: 'Chief Superintendent',
            50_000_000: 'Commander',
            1_000_000_000: 'Assistant Chief Constable',
            2_000_000_000: 'Deputy Chief Constable',
            5_000_000_000: 'Chief Constable',
        },
    },
};
