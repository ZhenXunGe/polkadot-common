// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../types';

import { assert } from '@polkadot/util';

import { naclDeriveHard } from '../nacl/deriveHard';
import { naclKeypairFromSeed } from '../nacl/keypair/fromSeed';
import { DeriveJunction } from './DeriveJunction';

export function keyHdkdBabyjubjub (keypair: Keypair, { chainCode, isHard }: DeriveJunction): Keypair {
  assert(isHard, 'A soft key was found in the path (and is unsupported)');

  return naclKeypairFromSeed(
    naclDeriveHard(keypair.secretKey.subarray(0, 32), chainCode)
  );
}