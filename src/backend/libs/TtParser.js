const EthParserBase = require('./EthParserBase');

class TtParser extends EthParserBase {
  constructor(config, database, logger) {
    super('80001F51', config, database, logger);

    this.options = config.blockchain.tidetime;
  }
}

module.exports = TtParser;
