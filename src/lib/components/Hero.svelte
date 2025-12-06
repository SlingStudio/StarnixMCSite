<script lang="ts">
	let playerCount = $state(1247);
	let serverStatus = $state<'online' | 'offline'>('online');

	// Simulate player count updates
	$effect(() => {
		const interval = setInterval(() => {
			playerCount = Math.floor(Math.random() * 500) + 1000;
		}, 5000);

		return () => clearInterval(interval);
	});
</script>
