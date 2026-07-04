<script lang="ts">
	import "./app.css";
	import { SiteFooter, SiteHeader } from "./lib";
	import Page from "./routes/+page.svelte";
</script>

<div class="flex min-h-screen flex-col">
	<SiteHeader />
	<main class="flex-1">
		<Page />
	</main>
	<SiteFooter />
</div>
