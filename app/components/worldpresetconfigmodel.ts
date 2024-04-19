import { EntriesModel, GamerulesModel, GeneratorOptionsHolderModel, Post, WorldCreator } from "@prisma/client"

export class DefaultConfig {
  clientId: string = "";

  constructor(clientId: string) {
    this.clientId = clientId;
  }

  getDefault(): Post {
    return {
      clientId: this.clientId,
      gamerulesModelClientId: this.clientId,
      worldCreatorClientId: this.clientId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

  getGamerules(): GamerulesModel {
    return {
      clientId: this.getDefault().clientId,
    }
  }

  getWorldCreator(): WorldCreator {
    return {
      bonusChestEnabled: false,
      cheatsEnabled: false,
      clientId: this.getDefault().clientId,
      difficulty: "easy",
      gameMode: "survival",
      generateStructures: true,
    }
  }

  getGeneratorOptionsHolder(): GeneratorOptionsHolderModel {
    return {
      clientId: this.getDefault().clientId,
      seed: 0,
      hasBonusChest: false,
      isLegacyCustomizedType: false,
      shouldGenerateStructures: true
    }
  }


  getGamerulesEntries(): EntriesModel {
    return {
      clientId: this.getDefault().clientId,
      announceAdvancements: true,
      commandBlockOutput: true,
      disableElytraMovementCheck: false,
      doDaylightCycle: true,
      doEntityDrops: true,
      doFireTick: true,
      doInsomnia: true,
      doImmediateRespawn: false,
      doLimitedCrafting: false,
      doMobLoot: true,
      doMobSpawning: true,
      doPatrolSpawning: true,
      doTileDrops: true,
      doWeatherCycle: true,
      drowningDamage: true,
      fallDamage: true,
      fireDamage: true,
      keepInventory: false,
      logAdminCommands: true,
      maxCommandChainLength: 65536,
      mobGriefing: true,
      naturalRegeneration: true,
      randomTickSpeed: 3,
      reducedDebugInfo: false,
      sendCommandFeedback: true,
      showDeathMessages: true,
      spawnRadius: 10,
      spectatorsGenerateChunks: true,
      universalAnger: false,
      blockExplosionDropDecay: true,
      commandModificationBlockLimit: 0,
      disableRaids: false,
      doTraderSpawning: true,
      doVinesSpread: true,
      doWardenSpawning: true,
      enderPearlsVanishOnDeath: false,
      forgiveDeadPlayers: true,
      freezeDamage: true,
      globalSoundEvents: true,
      lavaSourceConversion: true,
      maxCommandForkCount: 65536,
      maxEntityCramming: 24,
      mobExplosionDropDecay: true,
      playersNetherPortalCreativeDelay: 15,
      playersNetherPortalDefaultDelay: 300,
      playersSleepingPercentage: 100,
      projectilesCanBreakBlocks: true,
      snowAccumulationHeight: 1,
      tntExplosionDropDecay: true,
      waterSourceConversion: true
    }
  }
}