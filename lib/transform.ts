'use strict'

import { obj as TransformStream } from 'through2'

export = transformStore

function transformStore (syncTransformFn: (s: Record<string, unknown>) => Record<string, unknown>) {
  return TransformStream((state, _encoding, cb) => {
    try {
      const newState = syncTransformFn(state)
      cb(null, newState)
      return undefined
    } catch (err) {
      cb(err)
      return undefined
    }
  })
}
