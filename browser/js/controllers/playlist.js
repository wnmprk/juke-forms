app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, SongFactory, $state) {
	$scope.clearForm = false; 

	$scope.create = function(data) {
		PlaylistFactory.create(data)
		.then(function(data){
			var id = data._id;
			$state.go('playlist', { playlistId : id });
		})
		.then(function(){
			$scope.playlist["The New Playlist"] = {};
		})
	};

	$http.
});