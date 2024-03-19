<script lang="ts">
	import * as Table from '@/lib/components/ui/table';
	import type { PageData } from './$types';
	import Time from 'svelte-time';
	import Badge from '@/lib/components/ui/badge/badge.svelte';
	export let data: PageData;
</script>

<main class="px-10 pt-5">
	<h1 class="text-3xl">Produk</h1>
	<section class="flex w-1/2 items-center justify-center">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">No</Table.Head>
					<Table.Head>Nama</Table.Head>
					<Table.Head>Kategori</Table.Head>
					<Table.Head class="text-right">Dibuat pada</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#await data.products}
					Loading...
				{:then products}
					{#each products as product, i (product.id)}
						<Table.Row>
							<Table.Cell class="font-medium">{i + 1}</Table.Cell>
							<Table.Cell>{product.name}</Table.Cell>
							<Table.Cell><Badge>{product.category.name}</Badge></Table.Cell>
							<Table.Cell class="text-right">
								<Time timestamp={product.createdAt} format="DD-MM-YYYY" />
							</Table.Cell>
						</Table.Row>
					{/each}
				{:catch error}
					{error.message || 'Error'}
				{/await}
			</Table.Body>
		</Table.Root>
	</section>
</main>
