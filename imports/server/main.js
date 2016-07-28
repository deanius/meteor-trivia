/* eslint no-unused-vars:0 */

import { dispatchAction } from '../methods/server/dispatchAction'
import serverActions from './publications/serverActions'

import * as Collections from '../collections/collections'
import populateStoreFromMongo from './startup/populateStoreFromMongo'

import dispatchConsequencesOfActions from './listeners/dispatchConsequencesOfActions'
import writeActionsToMongo from './listeners/writeActionsToMongo'

import gamePublication from './publications/game'
