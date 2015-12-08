app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $state) {
	$scope.clearForm = false; 

	$scope.create = function(data) {
		PlaylistFactory.create(data)
		.then(function(data){
			var url = data._id;
			console.log(url);
			$state.go('playlists', {url: '/playlists/' + url});
		})
		.then(function(){
			$scope.playlist["The New Playlist"] = {};
		})
	};
});