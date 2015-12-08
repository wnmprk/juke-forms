app.config(function ($stateProvider) {
	$stateProvider.state('playlist', {
		url: '/playlists/:playlistId',
		templateUrl: '/templates/single-playlist.html',
		controller: 'PlaylistCtrl',
		resolve: {
			thePlaylist: function (PlaylistFactory, $stateParams) {
				return PlaylistFactory.fetchById($stateParams.playlistId);
			}
		}
	});
});