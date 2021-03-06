// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair, KeypairType } from '../types';

import { DeriveJunction } from './DeriveJunction';
import { keyHdkdEcdsa } from './hdkdEcdsa';
import { keyHdkdEd25519 } from './hdkdEd25519';
import { keyHdkdSr25519 } from './hdkdSr25519';
import { keyHdkdBabyjubjub } from './hdkdBabyjubjub';

const generators = {
  ecdsa: keyHdkdEcdsa,
  ed25519: keyHdkdEd25519,
  // FIXME This is Substrate-compatible, not Ethereum-compatible
  ethereum: keyHdkdEcdsa,
  sr25519: keyHdkdSr25519,
  babyjubjub: keyHdkdBabyjubjub
};

export function keyFromPath (pair: Keypair, path: DeriveJunction[], type: KeypairType): Keypair {
  const keyHdkd = generators[type];

  return path.reduce((pair, junction): Keypair => {
    return keyHdkd(pair, junction);
  }, pair);
}
