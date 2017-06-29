/*
 * https://github.com/Hackbit/reactriot2017-outrun/issues/6
 *
 * generator :
 *   - takes in some input
 *   - hashes it to an object
 *     {
 *       horizonY : random y from 40% to 100%
 *       horizon : 25% bar graph, 25% city, 25% mountains, or 25% nothing
 *       floor : 60% chance to have it enabled
 *       bg : 45% lines, 45% stars, or 10% nothing
 *       primary : {
 *         shape : random shape from primary/
 *         color
 *         glowColor : 50% Black 50% color
 *         mode : 75% Mode.SINGLE || 25% Mode.DOUBLE
 *         splitX : (if Mode.DOUBLE) 20% to 80% width, should remain together (always touching)
 *       secondary : {
 *         shape : random shape from secondary/
 *         color : can not be primary's color
 *         glowColor : 30% Black 50% color 20% primary.glowColor
 *         mode : 25% Mode.SINGLE || 75% Mode.DOUBLE
 *         splitX : (if Mode.DOUBLE) 20% width to 200% width
 *         offsetY : Mode.SINGLE
 *                     always top edge touching 33% of the height of primary
 *                   Mode.DOUBLE
 *                     proportionally decreasing y offset based on splitX
 *       }
 *       tertiary : {
 *         shape : random shape from secondary/
 *         color : can not be secondary's color
 *         glowColor : 33% Black 33% color 33% primary.glowColor
 *         mode : 25% Mode.SINGLE || 75% Mode.DOUBLE
 *         splitY : (if Mode.DOUBLE) 80% height to 200% height
 *         offsetY : Mode.DOUBLE || Mode.SINGLE
 *                     always bottom edge touching 66% of the primary height of primary
 *       }
 *       colors : {
 *         primary: {},
 *         secondary : cannot be
 *       }
 *     }
 */
import { RAND, COLORS } from './constants';

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
  return zeroPad(( hash + 2147483648 ).toString(), 10);
}


const toVal = ( input, min, max ) => {
  const r = parseInt(input);
  const scale = r / Math.pow(10, input.length)
  return min + (max-min) * scale;
}

const toBool = ( input, chance ) => toVal( input, 0, 100 ) >= chance;

const select = ( input, options ) => options[ parseInt(input) % options.length ];

const selectExclude = ( input, options, excludedValue ) => {
  let selected = options[ parseInt(input) % options.length ];
  return selected != excludedValue ? selected :
    options[ parseInt(input)+1 % options.length ];
};

const selectWeighted = ( input, weightedOptions ) =>
  weightedOptions.reduce( ({ seed, chosen, chanceAcc }, selection) =>
  ({
    seed,
    chosen : ( chosen === null &&  seed < selection.CHANCE + chanceAcc ) ? selection.OPTION : chosen,
    chanceAcc : chanceAcc + selection.CHANCE
  }), { seed : toVal(input, 0, 100), chosen : null, chanceAcc : 0 }).chosen;

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
  // 1 primary.color
  // [1, 3] primary.glowColor chance
  // [1 - 6] secondary.mode
  // [2 - 6] secondary.splitX
  // 2 secondary.color
  // [2, 4] secondary.glowColor chance
  // [2 - 7] tertiary.mode
  // [3 - 7] tertiary.splitY
  // 3 tertiary.color
  // [3, 5] tertiary.glowColor chance
  // slices : for use in component specific selections

  const floorColor = select( hash.digest[8], COLORS.FLOOR );
  const floorGlowColor = floorColor;

  const horizonColor = select( hash.digest[9], COLORS.HORIZON );
  const horizonGlowColor = horizonColor;
    // selectWeighted( hash.slice(2, 8), RAND.primary.glowColor ) === COLORS.BLACK ?
    // select( hash.slice(2, 8), COLORS.BLACKS ) : horizonColor;

  const primaryColor = select( hash.digest[1], COLORS.PRIMARY );
  const primaryGlowColor =
    selectWeighted( hash.slice(1, 3), RAND.primary.glowColor ) === COLORS.BLACK ?
    select( hash.slice(1, 3), COLORS.BLACKS ) : primaryColor;

  const secondaryColor = selectExclude( hash.digest[2], COLORS.SECONDARY, primaryColor );
  let secondaryGlowColor;
  switch( selectWeighted( hash.slice(2, 4), RAND.secondary.glowColor ) ){
    case COLORS.BLACK:
      secondaryGlowColor = select( hash.slice(2, 4), COLORS.BLACKS );
      break;
    case COLORS.SELF:
      secondaryGlowColor = secondaryColor;
      break;
    case COLORS.USE_PRIMARY:
      secondaryGlowColor = primaryGlowColor;
      break;
  }

  const tertiaryColor = selectExclude( hash.digest[3], COLORS.TERTIARY, secondaryColor );
  let tertiaryGlowColor;
  switch( selectWeighted( hash.slice(3, 5), RAND.tertiary.glowColor ) ){
    case COLORS.BLACK:
      tertiaryGlowColor = select( hash.slice(3, 5), COLORS.BLACKS );
      break;
    case COLORS.SELF:
      tertiaryGlowColor = tertiaryColor;
      break;
    case COLORS.USE_PRIMARY:
      tertiaryGlowColor = primaryGlowColor;
      break;
  }

  const secondarySplitX = toVal( hash.slice(1, 6), RAND.secondary.splitX.MIN, RAND.secondary.splitX.MAX )
  const secondaryOffsetY = ( ( secondarySplitX / ( RAND.secondary.splitX.MAX - RAND.secondary.splitX.MIN ) ) * ( RAND.secondary.offsetY.MAX - RAND.secondary.offsetY.MIN ) ) + RAND.secondary.offsetY.MIN;

  const tertiarySplitY = toVal( hash.slice(3, 8), RAND.tertiary.splitY.MIN, RAND.tertiary.splitY.MAX );
  const tertiaryOffsetY = ( ( tertiarySplitY / ( RAND.tertiary.splitY.MAX - RAND.tertiary.splitY.MIN ) ) * ( RAND.tertiary.offsetY.MAX - RAND.tertiary.offsetY.MIN ) ) + RAND.tertiary.offsetY.MIN;

  return {
    horizonY : toVal( hash.slice(0, 3), RAND.horizonY.MIN, RAND.horizonY.MAX ),
    horizon : {
      shape : select( hash.slice(1, 3), RAND.horizon.shape ),
      color : horizonColor,
      glowColor : horizonGlowColor
    },
    floor : {
      shape : selectWeighted( hash.slice(3, 5), RAND.floor ),
      color : floorColor,
      glowColor : floorGlowColor
    },
    bg : {
      shape : selectWeighted( hash.slice(4, 6), RAND.bg ),
    },
    primary : {
      shape : select( hash.digest[6], RAND.primary.shape ),
      color : primaryColor,
      glowColor : primaryGlowColor,
      mode : selectWeighted( hash.slice(0, 5), RAND.primary.mode ),
      splitX : toVal( hash.slice(1, 6), RAND.primary.splitX.MIN, RAND.primary.splitX.MAX )
    },
    secondary : {
      shape : select( hash.digest[7], RAND.secondary.shape ),
      color : secondaryColor,
      glowColor : secondaryGlowColor,
      mode : selectWeighted( hash.slice(1, 7), RAND.secondary.mode ),
      splitX : secondarySplitX,
      offsetY : secondaryOffsetY
    },
    tertiary : {
      shape : select( hash.digest[8], RAND.tertiary.shape ),
      color : tertiaryColor,
      glowColor : tertiaryGlowColor,
      mode : selectWeighted( hash.slice(2, 8), RAND.tertiary.mode ),
      splitY : tertiarySplitY,
      offsetY : tertiaryOffsetY
    },
    // useful for component specific selection
    slices : [
      hash.slice(4,7),
      hash.slice(5,8),
      hash.slice(6,9),
      hash.slice(7,10),
      hash.slice(8,10),
      hash.slice(1,5),
      hash.slice(1,6),
      hash.slice(1,7),
      hash.slice(2,6),
      hash.slice(3,7),
      hash.slice(4,8)
    ],
    toVal,
    toBool,
    select,
    selectWeighted
  };

}

