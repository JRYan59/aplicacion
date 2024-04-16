<script>
	import { onMount } from 'svelte';
	import Layout from '../+layout.svelte';
	export let data;
	let { products } = data;

</script>

<div
	class="main w-full h-screen text-white flex flex-col justify-center items-center  bg-neutral-950"
>
	<div class=" overflow-y-scroll container h-1/2 w-full bg-slate-900 p-5">
		<div class="flex justify-start mb-4">
			<a
				href="/products/add"
				class=" bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</a
			>
		</div>
		<table class=" h-1/2 w-full divide-y divide-gray-200">
			<thead class=" bg-gray-700">
				<tr>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
						>Codigo</th
					>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
						>Descripcion</th
					>
					<th scope="col" class="px-6 py-3 text-end text-xs font-medium uppercase tracking-wider"
						>Precio</th
					>
					<th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
						>Acciones</th
					>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#each products as product}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">{product.id}</td>
						<td class="px-6 py-4 whitespace-nowrap">{product.description}</td>
						<td class="px-6 py-4 whitespace-nowrap text-end">{product.price}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<a
								href="http://localhost:5173/products/{product.id}"
								class="text-indigo-600 hover:text-indigo-900"
								>Edit</a
							>
							<a
								href="http://localhost:5173/products/del/{product.id}"
								class="text-red-600 hover:text-red-900 ml-2"
								>Delete</a
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
