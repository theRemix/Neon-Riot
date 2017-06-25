export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

export const Mode = {
  SINGLE : 'SINGLE',
  DOUBLE : 'DOUBLE'
};

export const BG = {
  LINES : 'LINES',
  STARS : 'STARS',
  NONE : 'NONE'
};

export const HORIZONS = {
  BAR_GRAPH : 'BAR_GRAPH',
  CITY : 'CITY',
  MOUNTAINS : 'MOUNTAINS',
  NONE : 'NONE'
};

export const SECONDARY = {
  TRIANGLE_OUTLINE : 'TRIANGLE_OUTLINE'
};

export const PRIMARY = {
  CIRCLE_MONO : 'CIRCLE_MONO',
  TRIANGLE_PRISM : 'TRIANGLE_PRISM'
};

export const RAND = {
  horizonY : {
    MIN : 40,
    MAX : 100
  },
  horizon : Object.keys(HORIZONS),
  floorEnabled : {
    CHANCE : 60
  },
  bg : [
    {
      OPTION : BG.LINES,
      CHANCE : 45
    },
    {
      OPTION : BG.STARS,
      CHANCE : 45
    },
    {
      OPTION : BG.NONE,
      CHANCE : 10
    }
  ],
  primary : {
    shape : Object.keys(PRIMARY),
    mode : [
      {
        OPTION : Mode.SINGLE,
        CHANCE : 75
      },
      {
        OPTION : Mode.Double,
        CHANCE : 25
      }
    ],
    splitX : {
      MIN : 20,
      MAX : 80
    }
  },
  secondary : {
    shape : Object.keys(SECONDARY),
    mode : [
      {
        OPTION : Mode.SINGLE,
        CHANCE : 25
      },
      {
        OPTION : Mode.Double,
        CHANCE : 75
      }
    ],
    splitX : {
      MIN : 20,
      MAX : 200
    },
    offsetY : '-- special, derived --'
  },
  tertiary : {
    shape : Object.keys(SECONDARY),
    mode : [
      {
        OPTION : Mode.SINGLE,
        CHANCE : 25
      },
      {
        OPTION : Mode.Double,
        CHANCE : 75
      }
    ],
    splitY : {
      MIN : 80,
      MAX : 200
    },
    offsetY : '-- special, derived --'
  }
};
