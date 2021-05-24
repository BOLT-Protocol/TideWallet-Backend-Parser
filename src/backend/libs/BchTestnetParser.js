const BchParserBase = require('./BchParserBase');

class BchTestnetParser extends BchParserBase {
  constructor(config, database, logger) {
    super('80000001', config, database, logger);

    this.options = config.blockchain.bitcoin_cash_testnet;
  }
}

module.exports = BchTestnetParser;
