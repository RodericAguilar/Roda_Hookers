
ESX = exports['es_extended']:getSharedObject()

local locales = json.decode(LoadResourceFile(GetCurrentResourceName(), 'locales/' .. Config.Locale .. '.json'))
nuiLoaded = false

function SendReactMessage(action, data)
    if type(action) ~= 'string' then return end
    if type(data) ~= 'table' then return end

    SendNUIMessage({
        action = action,
        data = data
    })
end

RegisterNUICallback('init', function(data, cb)
    if nuiLoaded then return cb(1) end

    nuiLoaded = true

    while not locales do
        Wait(0)

        locales = json.decode(LoadResourceFile(GetCurrentResourceName(), 'locales/' .. Config.Locale .. '.json'))
    end

    SendReactMessage('init', {
        locales = locales,
    })

    cb(1)
end)

RegisterNUICallback('exit', function(data, cb)
  SetNuiFocus(false, false)
  cb(1)
end)


CreateThread(function ()
    while true do
        Wait(5)
        local coords, letSleep  = GetEntityCoords(PlayerPedId()), true
        for k,v in pairs(Config.PimpGuy) do
            if #(coords - vec3(v.x, v.y,v.z)) < 3.0 then
                letSleep = false
                DrawText3Ds(vec3(v.x, v.y,v.z+1.0), v.text, 0.6, 8)
                if IsControlJustReleased(0, 38) then
                    OpenUi(v.hookerFirstSpawn, v.hookerWalkTo)
                end                
            end
        end
        if letSleep then
            Wait(1000)
        end
    end
end)


RegisterNUICallback('select', function(data, cb)
    local HookerData = GetDataFromHookId(data.id)
    -- Make server callback 
    ESX.TriggerServerCallback('Roda_Hookers:server:GetMoney', function(enoughMoney)
        if enoughMoney then 
            -- Do something
            ESX.ShowNotification('You have paid ' .. HookerData.price .. '$', 'success', 5000)
            SpawnHooker(HookerData.ped)
           
        else
            ESX.ShowNotification('You dont have enough money', 'error', 5000)
        end
    end, HookerData.price)
    cb(1)
end)

RegisterNUICallback('executeAnimation', function(data, cb)
  SetNuiFocus(false, false)
  SendReactMessage('setMenuVisible', {visible = false})
  ExecuteAnimation(hooker, data.id)
  cb(1)
end)