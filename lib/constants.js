import None from '../components/None'
import BGLinesGrad from '../components/bg/LinesGrad'
import BarGraph from '../components/horizon/BarGraph'
import Grid from '../components/floor/Grid'
import LinesGrad from '../components/horizon/LinesGrad'
import TriangleOutline from '../components/secondary/TriangleOutline'
import TriangleSolid from '../components/secondary/TriangleSolid'
import TrianglePrism from '../components/primary/TrianglePrism'
import CircleMono from '../components/primary/CircleMono'
import TriangleMono from '../components/primary/TriangleMono'

export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

export const Mode = {
  SINGLE : 'SINGLE',
  DOUBLE : 'DOUBLE'
};

export const Layer = {
  SECONDARY : 'SECONDARY',
  TERTIARY : 'TERTIARY'
};

export const BG = {
  LINES : BGLinesGrad,
  STARS : BGLinesGrad, // @TODO 'STARS',
  NONE : None
};

export const HORIZONS = {
  BAR_GRAPH : BarGraph,
  CITY : None, // @TODO 'CITY',
  MOUNTAINS : None, // @TODO 'MOUNTAINS',
  NONE : None
};

export const FLOORS = {
  GRID : Grid,
  NONE : None
};

export const TERTIARY = {
  TRIANGLE_OUTLINE : TriangleOutline,
  TRIANGLE_SOLID : TriangleSolid
};

export const SECONDARY = {
  TRIANGLE_OUTLINE : TriangleOutline,
  TRIANGLE_SOLID : TriangleSolid
};

export const PRIMARY = {
  CIRCLE_MONO : TriangleMono,
  TRIANGLE_PRISM : TrianglePrism,
  TRIANGLE_MONO : TriangleMono
};

export const RAND = {
  horizonY : { // %
    MIN : 40,
    MAX : 100
  },
  horizon : Object.keys(HORIZONS).map( k => HORIZONS[k] ),
  floor : [
    {
      OPTION : FLOORS.GRID,
      CHANCE : 60
    },
    {
      OPTION : FLOORS.NONE,
      CHANCE : 40
    }
  ],
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
    shape : Object.keys(PRIMARY).map( k => PRIMARY[k] ),
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
    shape : Object.keys(SECONDARY).map( k => SECONDARY[k] ),
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
    shape : Object.keys(SECONDARY).map( k => SECONDARY[k] ),
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
