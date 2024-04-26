import { z } from 'zod'

export type Config = z.infer<typeof ConfigType>;
export const ConfigType = z.object({
    worldcreator: z.object({
        gameMode: z.string(),
        difficulty: z.string(),
        cheatsEnabled: z.boolean(),
        generateStructures: z.boolean(),
        bonusChestEnabled: z.boolean(),
        generatorOptionsHolder: z.object({
            shouldGenerateStructures: z.boolean(),
            hasBonusChest: z.boolean(),
            seed: z.number(),
            isLegacyCustomizedType: z.boolean()
        }),
        worldType: z.string()
    }),
    gamerules: z.object({
        entries: z.object({
            globalSoundEvents: z.boolean(),
            tntExplosionDropDecay: z.boolean(),
            enderPearlsVanishOnDeath: z.boolean(),
            doFireTick: z.boolean(),
            maxCommandChainLength: z.number(),
            doVinesSpread: z.boolean(),
            disableElytraMovementCheck: z.boolean(),
            lavaSourceConversion: z.boolean(),
            commandBlockOutput: z.boolean(),
            forgiveDeadPlayers: z.boolean(),
            playersNetherPortalCreativeDelay: z.number(),
            doMobSpawning: z.boolean(),
            maxEntityCramming: z.number(),
            universalAnger: z.boolean(),
            playersSleepingPercentage: z.number(),
            snowAccumulationHeight: z.number(),
            blockExplosionDropDecay: z.boolean(),
            doImmediateRespawn: z.boolean(),
            naturalRegeneration: z.boolean(),
            doMobLoot: z.boolean(),
            fallDamage: z.boolean(),
            doEntityDrops: z.boolean(),
            randomTickSpeed: z.number(),
            playersNetherPortalDefaultDelay: z.number(),
            spawnRadius: z.number(),
            freezeDamage: z.boolean(),
            sendCommandFeedback: z.boolean(),
            doWardenSpawning: z.boolean(),
            fireDamage: z.boolean(),
            reducedDebugInfo: z.boolean(),
            waterSourceConversion: z.boolean(),
            projectilesCanBreakBlocks: z.boolean(),
            announceAdvancements: z.boolean(),
            drowningDamage: z.boolean(),
            disableRaids: z.boolean(),
            doWeatherCycle: z.boolean(),
            mobExplosionDropDecay: z.boolean(),
            doDaylightCycle: z.boolean(),
            showDeathMessages: z.boolean(),
            doTileDrops: z.boolean(),
            doInsomnia: z.boolean(),
            keepInventory: z.boolean(),
            doLimitedCrafting: z.boolean(),
            mobGriefing: z.boolean(),
            commandModificationBlockLimit: z.number(),
            doTraderSpawning: z.boolean(),
            logAdminCommands: z.boolean(),
            spectatorsGenerateChunks: z.boolean(),
            doPatrolSpawning: z.boolean(),
            maxCommandForkCount: z.number()
        })
    }),
    userid: z.string()
});


export const worldpresetdefaultconfig = {
    "worldcreator": {
        "gameMode": "selectWorld.gameMode.survival",
        "difficulty": "options.difficulty.normal",
        "cheatsEnabled": false,
        "generateStructures": true,
        "bonusChestEnabled": false,
        "generatorOptionsHolder": {
            "shouldGenerateStructures": true,
            "hasBonusChest": false,
            "seed": -8962941830697097027,
            "isLegacyCustomizedType": false
        },
        "worldType": "generator.minecraft.normal"
    },
    "gamerules": {
        "entries": {
            "globalSoundEvents": true,
            "tntExplosionDropDecay": false,
            "enderPearlsVanishOnDeath": true,
            "doFireTick": true,
            "maxCommandChainLength": 65536.0,
            "doVinesSpread": true,
            "disableElytraMovementCheck": false,
            "lavaSourceConversion": false,
            "commandBlockOutput": true,
            "forgiveDeadPlayers": true,
            "playersNetherPortalCreativeDelay": 1.0,
            "doMobSpawning": true,
            "maxEntityCramming": 24.0,
            "universalAnger": false,
            "playersSleepingPercentage": 100.0,
            "snowAccumulationHeight": 1.0,
            "blockExplosionDropDecay": true,
            "doImmediateRespawn": false,
            "naturalRegeneration": true,
            "doMobLoot": true,
            "fallDamage": true,
            "doEntityDrops": true,
            "randomTickSpeed": 3.0,
            "playersNetherPortalDefaultDelay": 80.0,
            "spawnRadius": 10.0,
            "freezeDamage": true,
            "sendCommandFeedback": true,
            "doWardenSpawning": true,
            "fireDamage": true,
            "reducedDebugInfo": false,
            "waterSourceConversion": true,
            "projectilesCanBreakBlocks": true,
            "announceAdvancements": true,
            "drowningDamage": true,
            "disableRaids": false,
            "doWeatherCycle": true,
            "mobExplosionDropDecay": true,
            "doDaylightCycle": true,
            "showDeathMessages": true,
            "doTileDrops": true,
            "doInsomnia": true,
            "keepInventory": false,
            "doLimitedCrafting": false,
            "mobGriefing": true,
            "commandModificationBlockLimit": 32768.0,
            "doTraderSpawning": true,
            "logAdminCommands": true,
            "spectatorsGenerateChunks": true,
            "doPatrolSpawning": true,
            "maxCommandForkCount": 65536.0
        }
    },
    "userid": "76e88f6f-84ed-3a54-af33-5eec444b0454"
}