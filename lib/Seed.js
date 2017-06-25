/*
 * https://github.com/Hackbit/reactriot2017-outrun/issues/6
 *
 * generator :
 *   - takes in some input
 *   - hashes it to an object
 *     {
 *       horizonY : random y from 40% to 100%
 *       horizon : 25% bar graph, 25% city, 25% mountains, or 25% nothing
 *       floorEnabled : 60% chance to have it enabled
 *       bg : 45% lines, 45% stars, or 10% nothing
 *       primary : {
 *         shape : random shape from primary/
 *         mode : 75% Mode.SINGLE || 25% Mode.DOUBLE
 *         splitX : (if Mode.DOUBLE) 20% to 80% width, should remain together (always touching)
 *       }
 *       secondary : {
 *         shape : random shape from secondary/
 *         mode : 25% Mode.SINGLE || 75% Mode.DOUBLE
 *         splitX : (if Mode.DOUBLE) 20% width to 200% width
 *         offsetY : Mode.SINGLE
 *                     always 66% of the primary height, y offset from the top of primary
 *                   Mode.DOUBLE
 *                     proportionally decreasing y offset based on splitX
 *       }
 *       tertiary : {
 *         shape : random shape from secondary/
 *         mode : 25% Mode.SINGLE || 75% Mode.DOUBLE
 *         splitY : (if Mode.DOUBLE) 80% height to 200% height
 *         offsetY : Mode.DOUBLE || Mode.SINGLE
 *                     always 33% of the primary height, bottom offset from the top of primary
 *       }
 *     }
 */
import { RAND } from './constants';

const zeroPad = (str, length) => {
  while (str.length < length) str = "0" + str;
  return str;
}

// produces 10 digits as string
const hashCode = msg => {
  let hash = 0, i = 0, len = msg.length;
  while ( i < len ) {
    hash  = ((hash << 5) - hash + msg.charCodeAt(i++)) << 0;
  }
  return zeroPad(( hash + 2147483648 ).toString());
}


export const toVal = ( input, min, max ) => {
  const r = parseInt(input);
  const scale = r / Math.pow(10, input.length)
  return min + (max-min) * r;
}

export const toBool = ( input, chance ) => toVal( input, 0, 100 ) >= chance;

export const select = ( input, options ) => options[ input % options.length ];

export const selectWeighted = ( input, weightedOptions ) =>
  weightedOptions.reduce( ({ seed, chosen, chanceAcc }, selection) =>
  ({
    seed,
    chosen : ( chosen === null && seed < selection.CHANCE ) ? selection.OPTION : chosen,
    chanceAcc : chanceAcc + selection.CHANCE
  }), { seed : toVal(input, 0, 100), chosen : null, chanceAcc : 0 });

export default ( seed ) => {
  // hash the seed
  const hash = {
    digest : hashCode( seed ).split(''),
    slice : function(start, count){ // as str to retain padded zeroes
      return this.digest.slice(start, count).join('');
    }
  };

  // split the digits
  // [0 - 3] horizonY % vals
  // [1, 2] horizon / 100
  // [3, 4] floor / 100
  // [4, 5] bg / 100
  // 6 primary.shape
  // 7 secondary.shape
  // 8 tertiary.shape
  // [0 - 5] primary.mode
  // [1 - 5] primary.splitX
  // [1 - 6] secondary.mode
  // [2 - 6] secondary.splitX
  // [2 - 7] tertiary.mode
  // [3 - 7] tertiary.splitY

  return {
    horizonY : toVal( hash.slice(0, 3), RAND.horizonY.MIN, RAND.horizonY.MAX ),
    horizon : select( hash.slice(1, 3), RAND.horizon ),
    floorEnabled : toBool( hash.slice(3, 5), RAND.floorEnabled.CHANCE ),
    bg : selectWeighted( hash.slice(4, 6), RAND.bg ),
    primary : {
      shape : select( hash.digest[6], RAND.primary.shape ),
      mode : selectWeighted( hash.slice(0, 5), RAND.primary.mode ),
      splitX : toVal( hash.slice(1, 6), RAND.primary.splitX.MIN, RAND.primary.splitX.MAX )
    },
    secondary : {
      shape : select( hash.digest[7], RAND.secondary.shape ),
      mode : selectWeighted( hash.slice(1, 7), RAND.secondary.mode ),
      splitX : toVal( hash.slice(1, 6), RAND.secondary.splitX.MIN, RAND.secondary.splitX.MAX )
    },
    tertiary : {
      shape : select( hash.digest[8], RAND.tertiary.shape ),
      mode : selectWeighted( hash.slice(2, 8), RAND.tertiary.mode ),
      splitY : toVal( hash.slice(3, 8), RAND.tertiary.splitY.MIN, RAND.tertiary.splitY.MAX )
    }
  };

}

