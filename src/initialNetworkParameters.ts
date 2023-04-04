import { BN } from 'ethereumjs-util'
import { NetworkParameters } from './shardeum/shardeumTypes'
import { ONE_HOUR, oneSHM, ONE_DAY } from './index'

// INITIAL NETWORK PARAMETERS FOR Shardeum

//It is important to follow the release guidelines when updating these parameters

export const initialNetworkParamters: NetworkParameters = {
  title: 'Initial parameters',
  description: 'These are the initial network parameters Shardeum started with',
  nodeRewardInterval: ONE_HOUR,
  nodeRewardAmountUsd: oneSHM.mul(new BN(1)),
  nodePenaltyUsd: oneSHM.mul(new BN(10)),
  stakeRequiredUsd: oneSHM.mul(new BN(10)),
  maintenanceInterval: ONE_DAY,
  maintenanceFee: 0,
  minVersion: '1.1.6',
  activeVersion: '1.1.6',
  latestVersion: '1.1.7',
  stabilityScaleMul: 1000,
  stabilityScaleDiv: 1000,
  txPause: false,
}
