// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Keypair } from '../../types';

// import nacl from 'tweetnacl';

// import { ed25519KeypairFromSeed, isReady } from '@polkadot/wasm-crypto';

import { babyjubjub_keypair_from_seed as babyjubjubKeypairGen  } from 'eddsa';

/**
 * @name naclKeypairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSeed } from '@polkadot/util-crypto';
 *
 * naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export function babyjubjubKeypairFromSeed (seed: Uint8Array): Keypair {
  // FIXME: Replace me with babyjubjubKeypairFromSeed
//  if (!onlyJs && isReady()) {
    const full = babyjubjubKeypairGen(seed);

    return {
      publicKey: full.slice(0, 32),
      secretKey: full.slice(32)
    };
//  }

//  return nacl.sign.keyPair.fromSeed(seed);
}
