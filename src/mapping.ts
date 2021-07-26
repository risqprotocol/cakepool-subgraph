import { BigInt } from "@graphprotocol/graph-ts"
import {
  RisqCAKEPool,
  Approval,
  Loss,
  OwnershipTransferred,
  Profit,
  Provide,
  Transfer,
  Withdraw
} from "../generated/RisqCAKEPool/RisqCAKEPool"
import { ProvideType } from "../generated/schema"

export function handleApproval(event: Approval): void {
}

export function handleLoss(event: Loss): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProfit(event: Profit): void {}

export function handleProvide(event: Provide): void {
  let entity = new ProvideType(event.transaction.hash.toHexString())
  entity.account = event.params.account
  entity.amount = event.params.amount as BigInt
  entity.writeAmount = event.params.writeAmount as BigInt
  entity.blockNumber = event.block.number
  entity.timestamp = event.block.timestamp

  // Entities can be written to the store with `.save()`
  entity.save()

}

export function handleTransfer(event: Transfer): void {}

export function handleWithdraw(event: Withdraw): void {}
