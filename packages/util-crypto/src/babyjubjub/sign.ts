// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../types';

// import nacl from 'tweetnacl';

import { assert, u8aToU8a } from '@polkadot/util';
// import { ed25519Sign, isReady } from '@polkadot/wasm-crypto';

import { sign } from 'eddsa';

/**
 * @name babyjubjubSign
 * @summary Signs a message using the supplied secretKey
 * @description
 * Returns message signature of `message`, using the `secretKey`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclSign } from '@polkadot/util-crypto';
 *
 * naclSign([...], [...]); // => [...]
 * ```
 */
export function babyjubjubSign (message: Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>): Uint8Array {
  assert(secretKey, 'Expected a valid secretKey');

  const messageU8a = u8aToU8a(message);

  return sign(messageU8a, secretKey);
/*
  return isReady() && !onlyJs
    ? ed25519Sign(publicKey as Uint8Array, secretKey.subarray(0, 32), messageU8a)
    : nacl.sign.detached(messageU8a, secretKey);
*/
}
