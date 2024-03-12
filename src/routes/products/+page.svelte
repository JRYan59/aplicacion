<script>
	import { onMount } from 'svelte';
    import Layout from '../+layout.svelte';
    let products = [];

    async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/products');
      if (response.ok) {
        const data = await response.json();
        products = data.Products;
        console.log(products);
      } else {
        console.error('Error al cargar los datos:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }
  onMount(async () => {
		await fetchData();
	});
  
    function editObject(code) {
    console.log(`Edit product with code ${code}`);
  }
  function deleteObject(id) {
    // Lógica para eliminar el objeto con el id dado
    console.log(`Delete product with code ${code}`);
  }
</script>

<div class="main text-white flex flex-col justify-center items-center h-screen bg-neutral-950">
	<div class="container h-1/2 w-3/4 bg-slate-900 p-5">
        <div class="flex justify-start mb-4">
            <a href="/products/add" class=" bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</a>
        </div>
        <div class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-200">
            <thead class=" bg-gray-700">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Codigo</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Descripcion</th>
                <th scope="col" class="px-6 py-3 text-end text-xs font-medium uppercase tracking-wider">Precio</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {#each products as product}
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">{product.Codigo}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{product.Descripcion}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-end">{product.Precio}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <a href="http://localhost:5173/products/edit/{product.codigo}" class="text-indigo-600 hover:text-indigo-900" on:click={() => editObject(product.Codigo)}>Edit</a>
                    <button class="text-red-600 hover:text-red-900 ml-2" on:click={() => deleteObject(product.codigo)}>Delete</button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
	</div>
</div>
