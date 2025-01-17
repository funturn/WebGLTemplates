var socket = io() || {};
socket.isReady = false;

window.addEventListener('load', function() {

	var execInUnity = function(method) {
		if (!socket.isReady) return;
		
		var args = Array.prototype.slice.call(arguments, 1);
		
		if(unityInstance!=null)
		{
		  unityInstance.SendMessage("NetworkManager", method, args.join(':'));
		}
		
		
	};

	
	socket.on('JOIN_SUCCESS', function(id,name,position,total_players) {
				      		
	  var currentUserAtr = id+':'+name+':'+position+':'+total_players;
	 if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnJoinGame', currentUserAtr);
		}
	  
	});
	
	socket.on('RESPAWN_PLAYER', function(id,name,position) {
				      		
	  var currentUserAtr = id+':'+name+':'+position;
	 if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnRespawPlayer', currentUserAtr);
		}
	  
	});
	socket.on('SPAWN_PLAYER', function(id,name,position,total_players) {
				      		
	  var currentUserAtr = id+':'+name+':'+position+':'+total_players;
	   if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnSpawnPlayer', currentUserAtr);
		}
	 
	});
	
	socket.on('UPDATE_POS_AND_ROT', function(id,position,rotation) {
				      		
	  var currentUserAtr = id+':'+position+":"+rotation;
	  
	  if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnUpdatePosAndRot', currentUserAtr);
		}
	 
	});
	
	 socket.on('UPDATE_PLAYER_ANIMATOR', function(id,animation) {
	 
	     var currentUserAtr = id+':'+animation;
		
		 if(unityInstance!=null)
		{
		  
		   // sends the package currentUserAtr to the method OnUpdateAnim in the NetworkManager class on Unity 
		   unityInstance.SendMessage ('NetworkManager', 'OnUpdateAnim',currentUserAtr);
		}
		
	});//END_SOCKET.ON
	
	socket.on('UPDATE_BEST_KILLER', function(name,ranking,kills) {
				      		
	  var currentUserAtr = name+":"+ranking+":"+kills;
	   if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUpdateBestKillers', currentUserAtr);
		}
	 
	});
	
	 socket.on('UPDATE_BUSTER', function(id) {
				      		
	  var currentUserAtr = id+":"+"";
	  
	  if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUpdateBuster', currentUserAtr);
		}
	 
	});	
	
	

	  socket.on('UPDATE_SHOOT', function(id,target) {
				      		
	  var currentUserAtr = id+":"+target;
	  
	  if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUpdateShoot', currentUserAtr);
		}
	 
	});	
	
   socket.on('UPDATE_PLAYER_DAMAGE', function(shooterID,targetID,health) {
				      		
	  var currentUserAtr = shooterID+':'+targetID+':'+health;
	  if(unityInstance!=null)
		{
		 unityInstance.SendMessage ('NetworkManager', 'OnUpdatePlayerDamage', currentUserAtr);
		}
	  
	});	
	
	socket.on('DEATH', function(id) {
				      		
	  var currentUserAtr = id+":"+"";
	  
	  if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnPlayerDeath', currentUserAtr);
		}
	 
	});	

	

 socket.on('USER_DISCONNECTED', function(id) {
				      		
	  var currentUserAtr = id+":"+" ";
	  if(unityInstance!=null)
		{
		  unityInstance.SendMessage ('NetworkManager', 'OnUserDisconnected', currentUserAtr);
		}
	 
	});		


});//END_WINDOW.ADDEVENTLISTENER

