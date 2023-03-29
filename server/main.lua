ESX = exports['es_extended']:getSharedObject()

ESX.RegisterServerCallback('Roda_Hookers:server:GetMoney', function(source, cb, price)
    local xPlayer = ESX.GetPlayerFromId(source)
    local money = xPlayer.getAccount('money').money
    local price = tonumber(price)
    if price <= money then
        xPlayer.removeAccountMoney(Config.Account, price)
        cb(true)
    else
        cb(false)
    end
end)

RegisterServerEvent('Roda_Hooks:server:setDimension')
AddEventHandler('Roda_Hooks:server:setDimension', function (hooker, isPlayer)
    local src = source
    if isPlayer then 
        SetPlayerRoutingBucket(src, 0)
    else
        local random = math.random(1,200)
        local puta = NetworkGetEntityFromNetworkId(hooker)
    
        if DoesEntityExist(puta) then 
            SetEntityRoutingBucket(puta, random)
            SetPlayerRoutingBucket(src, random)
        else
            print('possible Hacker, the entity doesnt exist')
        end
    end

end)
