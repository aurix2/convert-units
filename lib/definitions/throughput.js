var metric;

metric = {
  'pc/s': {
    name: {
      singular: 'Piece per second'
    , plural: 'Pieces per second'
    }
  , to_anchor: 60
  }
,  'pc/min': {
    name: {
      singular: 'Piece per minute'
    , plural: 'Pieces per minute'
    }
  , to_anchor: 1
  },
  'pc/h': {
    name: {
      singular: 'Piece per hour'
    , plural: 'Pieces per hour'
    }
  , to_anchor: 1/60
  },
  'pc/week': {
    name: {
      singular: 'Piece per week'
    , plural: 'Pieces per week'
    }
  , to_anchor: 1/(60*24*7)
  },
  'pc/month': {
    name: {
      singular: 'Piece per month'
    , plural: 'Pieces per month'
    }
  , to_anchor: 1/(60*24*7*4)
  },
  'pc/year': {
    name: {
      singular: 'Piece per year'
    , plural: 'Pieces per year'
    }
  , to_anchor: 1/(60*24*7*4*365)
  }
}


module.exports = {
  metric: metric
, _anchors: {
    metric: {
      unit: 'pc/min'
    , ratio: 1
    }
  }
};
