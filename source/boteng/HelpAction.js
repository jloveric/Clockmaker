'use strict'

let Action = require('../boteng/Action.js')
let Formatting = require('../boteng/Formatting.js')
let Logger = require('helper-clockmaker').Logger('HelpAction')
let {Helper} = require('helper-clockmaker')
let formatHelp = require('helper-clockmaker').FormatHelp
let debug = require('debug')('HelpAction')

class HelpAction extends Action {
  constructor() {
    super()
    this.name = 'HelpAction'
  }

  /**
   * Filter takes an input and returns true
   * or false as to whether the filter passes.
   */
  filterInput(input) {
    Helper.hasProperties(input, ['source'])
    return input.source.phraseType == 'help'
  }

  /**
   * Compute the input given this filter
   */
  async computeResult(input, userData) {
    debug('input.doc', input.doc)
    return {
      response: formatHelp(input.doc.description),
      confidence: input.confidence,
      success: true,
    }
  }
}

module.exports = HelpAction
