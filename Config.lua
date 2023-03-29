Config = {}


Config.BedPlayerCoords = vector3(330.60, 425.37, 145.59)
Config.HookerBedCoords = vector4(332.76, 424.16, 145.59, 22.67)
Config.Account = 'bank' -- money, bank or any account that u have in your extended.
Config.Locale = 'es' -- en o es

Config.PimpGuy = {
    { 
        x= 136.81, 
        y= -1278.64, 
        z= 28.34, 
        name = "Pimp", 
        heading = 297.63, 
        model = "s_m_m_bouncer_01", 
        text = '~r~Pimp Guy\n~w~Press ~r~E~w~ to talk',
        hookerFirstSpawn = vector4(141.77, -1274.72, 28.16, 36.85),
        hookerWalkTo = vector3(149.02, -1281.96, 28.02),
    },
    { 
        x= 130.6779, 
        y=-1210.0052, 
        z= 28.3579,
        name = "Pimp", 
        heading = 185.53, 
        model = "s_m_m_bouncer_01", 
        text = '~r~Pimp Guy\n~w~Press ~r~E~w~ to talk',
        hookerFirstSpawn = vector4(134.9551, -1210.1935, 29.3026, 97.9285),
        hookerWalkTo = vector3(134.2884, -1203.9507, 29.2951),
    }   

}

Config.Hookers = {
    {
        id = 1,
        ped = "a_f_m_beach_01",
        label = "Maria Perez",
        img = "https://cdn.discordapp.com/attachments/1079800387906842715/1087850526990938183/image.png",
        age = 25,
        height = 156,
        weight = 50,
        price = 100,
        reviews = 20 -- 0-100
    },
    {
        id = 2,
        ped = "s_f_y_bartender_01",
        label = "Tiffany Smith",
        img = "https://cdn.discordapp.com/attachments/1079800387906842715/1087853219838963722/image.png",
        age = 20,
        height = 164,
        weight = 52,
        price = 150,
        reviews = 89 -- 0-100
    },
    {
        id = 3,
        ped = "s_f_y_hooker_01",
        label = "Samantha Jones",
        img = "https://cdn.discordapp.com/attachments/1079800387906842715/1087853664984641566/image.png",
        age = 22,
        height = 170,
        weight = 56,
        price = 100,
        reviews = 19 -- 0-100
    },
    {
        id = 4,
        ped = "s_f_y_baywatch_01",
        label = "Carla Moreno",
        img = "https://cdn.discordapp.com/attachments/1079800387906842715/1088164413074313277/image.png",
        age = 18,
        height = 170,
        weight = 56,
        price = 1000,
        reviews = 100 -- 0-100
    },
    {
        id = 5,
        ped = "s_f_y_stripper_01",
        label = "Juana Angulo",
        img = "https://cdn.discordapp.com/attachments/1079800387906842715/1088165257765191710/image.png",
        age = 42,
        height = 170,
        weight = 56,
        price = 100,
        reviews = 80 -- 0-100
    },
    {
        id = 6,
        ped = "csb_stripper_02",
        label = "Clarissa De Los Santos",
        img = "https://cdn.discordapp.com/attachments/1079800387906842715/1088166011364192369/image.png",
        age = 37,
        height = 170,
        weight = 56,
        price = 100,
        reviews = 70 -- 0-100
    },
    {
        id = 7,
        ped = "u_f_y_danceburl_01",
        label = "Lorena La Guarra",
        img = "https://cdn.discordapp.com/attachments/994916298779807764/1088167046182875197/image.png",
        age = 37,
        height = 170,
        weight = 56,
        price = 100,
        reviews = 70 -- 0-100
    }
}

Config['Synced'] = {
        -- NSFW animations vvvvvvvv
        {
            ['AnimId'] = 1,
            ['Label'] = 'Give Blowjob',
            ['Requester'] = {
                ['Type'] = 'animation', ['Dict'] = 'misscarsteal2pimpsex', ['Anim'] = 'pimpsex_hooker', ['Flags'] = 1, ['Attach'] = {
                    ['Bone'] = 9816,
                    ['xP'] = 0.0,
                    ['yP'] = 0.65,
                    ['zP'] = 0.0,
    
                    ['xR'] = 120.0,
                    ['yR'] = 0.0,
                    ['zR'] = 180.0,
                }
            },
            ['Accepter'] = {
                ['Type'] = 'animation', ['Dict'] = 'misscarsteal2pimpsex', ['Anim'] = 'pimpsex_punter', ['Flags'] = 1,
            },
        },
        {
            ['AnimId'] = 2,
            ['Label'] = 'Get Fucked',
            ['Requester'] = {
                ['Type'] = 'animation', ['Dict'] = 'misscarsteal2pimpsex', ['Anim'] = 'shagloop_hooker', ['Flags'] = 1, ['Attach'] = {
                    ['Bone'] = 9816,
                    ['xP'] = 0.05,
                    ['yP'] = 0.4,
                    ['zP'] = 0.0,
    
                    ['xR'] = 120.0,
                    ['yR'] = 0.0,
                    ['zR'] = 180.0,
                }
            },
            ['Accepter'] = {
                ['Type'] = 'animation', ['Dict'] = 'misscarsteal2pimpsex', ['Anim'] = 'shagloop_pimp', ['Flags'] = 1,
            },
        },
        {
            ['AnimId'] = 3,
            ['Label'] = 'Put in 4', 
            ['Requester'] = {

                ['Type'] = 'animation', ['Dict'] = 'rcmpaparazzo_2', ['Anim'] = 'shag_loop_poppy', ['Flags'] = 1, ['Attach'] = {
                    ['Bone'] = 9816,
                    ['xP'] = 0.015,
                    ['yP'] = 0.35,
                    ['zP'] = 0.0,
    
                    ['xR'] = 0.9,
                    ['yR'] = 0.3,
                    ['zR'] = 0.0,
                },
            }, 
            ['Accepter'] = {
                ['Type'] = 'animation', ['Dict'] = 'rcmpaparazzo_2', ['Anim'] = 'shag_loop_a', ['Flags'] = 1,
            },
        },
        --Dances/Alone Animations
        {
            ['AnimId'] = 4,
            ['Alone'] = true,
            ['Label'] = 'Scratch nuts', 
            ['Dict'] = 'mp_player_int_uppergrab_crotch', 
            ['Anim'] = 'mp_player_int_grab_crotch',
        },
        {
            ['AnimId'] = 5,
            ['Alone'] = true,
            ['Label'] = 'Hooker 1', 
            ['Dict'] = 'mini@strip_club@idles@stripper', 
            ['Anim'] = 'stripper_idle_02',
        },
        -- NSFW animations ^^^^^^^
}