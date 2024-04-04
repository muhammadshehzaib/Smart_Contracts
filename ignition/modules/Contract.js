const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ContractModule", (m) => {
  const value = m.contract("Contract");

  const newXValue = 42;
  m.call(value, "changeX", [newXValue]);
  return { value };
});
