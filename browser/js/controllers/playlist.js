app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist) {
	$scope.clearForm = false;

	$scope.playlist = thePlaylist; 

	$scope.create = function(data) {
		PlaylistFactory.create(data).then(function(){
			$scope.playlist["The New Playlist"] = {};
		})
	}
});