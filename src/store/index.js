import { createStore, createEvent, combine, sample } from 'effector'
import { uniqueId } from 'lodash'

import { LASER_MAX_DISTANCE } from '../constants'

export const changeEnemyRotation = createEvent()
export const changeEnemyPosition = createEvent()

const $enemyPosition1 = createStore([-2, 2, 0]).on(changeEnemyPosition, (_, v) => ([-2 + v, 2, 0]))
const $enemyPosition2 = createStore([0, 2, 0]).on(changeEnemyPosition, (_, v) => ([v, 2, 0]))
const $enemyPosition3 = createStore([2, 2, 0]).on(changeEnemyPosition, (_, v) => ([2 + v, 2, 0]))

export const $enemyRotation = createStore([0, 0, 0]).on(changeEnemyRotation, (_, v) => ([v, 0, v]))
export const $enemies = combine([$enemyPosition1, $enemyPosition2, $enemyPosition3])

export const changePlayerPosition = createEvent()
export const $playerPosition = createStore([0, 0, 0]).on(changePlayerPosition, (_, v) => ([v, -2, 0]))

export const addLaser = createEvent()
export const changeLaserPotions = createEvent()
export const $laserPositions = createStore([])
  .on(changeLaserPotions, (store, v) =>
    store
      .map(laser => ({
        id: laser.id,
        position: [laser.position[0], laser.position[1] + v, 0]
      }))
      .filter(laser => laser.position[1] < LASER_MAX_DISTANCE)
  )

sample({
  clock: addLaser,
  source: [$playerPosition, $laserPositions],
  fn: ([playerPosition, laserPositions]) => [...laserPositions, { id: uniqueId(), position: playerPosition }],
  target: $laserPositions,
})
