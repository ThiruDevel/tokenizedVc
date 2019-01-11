var Tvctoken = artifacts.require("./Tvctoken.sol");

module.exports = function(deployer) {
  const _name     = "TvS Token";
  const _symbol   = "TVS";
  const _decimals = 18;
  deployer.deploy(Tvctoken, _name, _symbol, _decimals);
};
