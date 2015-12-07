app.controller('AllPlaylistsCtrl', function ($scope, PlaylistFactory) {
	PlaylistFactory.fetchAll()
		.then(function (data) {
			$scope.playlists = data;
		});
});