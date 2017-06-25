import None from '../components/None'
import BGLinesGrad from '../components/bg/LinesGrad'
import BarGraph from '../components/horizon/BarGraph'
import Mountains from '../components/horizon/Mountains'
import LinesGrad from '../components/horizon/LinesGrad'
import City from '../components/horizon/City'
import Grid from '../components/floor/Grid'
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
  CITY : City,
  MOUNTAINS : Mountains,
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

const COLOR_BLACK_DEFS = [
  "#000",
  "#010101",
  "#020202",
  "#030303",
  "#050505",
  "#070707",
  "#090909",
  "#101010"
];

const COLORDEFS = [
  "#FF00D0",
  "#1566FE",
  "#4FD4F7",
  "#6F00FF",
  "#C001FF",
  "#FFFF01",
  "#FFA018",
  "#01F965"
];

export const COLORS = {
  PRIMARY : COLORDEFS.slice(0,6),
  SECONDARY : COLORDEFS,
  TERTIARY : COLORDEFS,
  FLOOR : COLORDEFS.slice(0,5),
  HORIZON : COLORDEFS.slice(0,5),
  BLACKS : COLOR_BLACK_DEFS,
  BLACK : 'BLACK',
  SELF : 'SELF',
  USE_PRIMARY : 'USE_PRIMARY',
  USE_SECONDARY : 'USE_SECONDARY'
};

export const RAND = {
  horizonY : { // %
    MIN : 40,
    MAX : 100
  },
  horizon : {
    shape : Object.keys(HORIZONS).map( k => HORIZONS[k] ),
    glowColor : [
      {
        OPTION : COLORS.BLACK,
        CHANCE : 50
      },
      {
        OPTION : COLORS.SELF,
        CHANCE : 50
      }
    ]
  },
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
    },
    glowColor : [
      {
        OPTION : COLORS.BLACK,
        CHANCE : 50
      },
      {
        OPTION : COLORS.SELF,
        CHANCE : 50
      }
    ]
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
    glowColor : [
      {
        OPTION : COLORS.BLACK,
        CHANCE : 30
      },
      {
        OPTION : COLORS.SELF,
        CHANCE : 50
      },
      {
        OPTION : COLORS.USE_PRIMARY,
        CHANCE : 20
      }
    ],
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
    glowColor : [
      {
        OPTION : COLORS.BLACK,
        CHANCE : 33
      },
      {
        OPTION : COLORS.SELF,
        CHANCE : 33
      },
      {
        OPTION : COLORS.USE_PRIMARY,
        CHANCE : 33
      }
    ],
    offsetY : '-- special, derived --'
  }
};
