
/*
 * GET home page.
 */
exports.index = function(db){
  return function (req, res){
    var raceTypes = db.get('racetypes');
    raceTypes.find({}, {}, function(e, docs){
            res.render('index', {
              title: 'RaceTracker', 
              raceTypes: docs
            });
        });
  }
};

// TODO: This needs to take in the race type and search mongo for all 
// races of that particular type
exports.races = function(db) { 
	return function(req, res){
		var raceType = req.params.racetype;
		//var races = db.get('races');
		// races.find({}, {}, function(e, docs){
  //           res.render('races', {
  //           	title: 'Race Tracker', 
		// 	 	raceTypes: docs
  //           });
  //       });
        res.json('races', {
            	title: raceType + ' Races', 
			 	       races: [{name:'Race 1', location:'Location 1'},{name:'Race 2', location:'Location 2'}]
            });
	}
};