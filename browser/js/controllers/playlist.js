app.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
	$scope.clearForm = false;
	$scope.create = function(data) {
		PlaylistFactory.create(data).then(function(){
			$scope.playlist["The New Playlist"] = {};
		})
		
	}
});